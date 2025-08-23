#!/usr/bin/env bash
set -euo pipefail

log_mask() {
  # usage: log_mask NAME VALUE
  local name="$1" val="$2" len=${#2}
  if [ "$len" -gt 8 ]; then
    printf '[licenses] %s: %s…%s (len=%d)\n' "$name" "${val:0:4}" "${val: -4}" "$len"
  else
    printf '[licenses] %s: (len=%d)\n' "$name" "$len"
  fi
}

write_b64() {
  # usage: write_b64 ENV_VAR TARGET_PATH MODE
  local env_var="$1" target="$2" mode="$3"
  # значение переменной окружения
  local val="${!env_var:-}"

  if [ -z "$val" ]; then
    echo "[licenses] \$$env_var is empty, skipping $target"
    return 0
  fi

  mkdir -p "$(dirname "$target")"

  # логируем только маску/длину
  log_mask "$env_var" "$val"

  # Декод с игнором мусора; не падаем, если base64 некорректный
  if ! printf '%s' "$val" | base64 -di > "$target" 2>/dev/null; then
    echo "[licenses] invalid base64 in \$$env_var → skipping $target"
    rm -f "$target" || true
    return 0
  fi

  chmod "$mode" "$target"
  echo "[licenses] wrote $target"
}

# ---------- Licenses drop-in ----------
write_b64 "LICENSE_B64"         "/workspaces/tinkoff_futures/backend/assets/license.dll"       600
write_b64 "LICENSE_PUBLIC_B64"  "/workspaces/tinkoff_futures/backend/assets/license_public.pem" 600
write_b64 "SIGNATURE_B64"       "/workspaces/tinkoff_futures/backend/assets/signature.bin"     600


wait_backend_log() {
  local log="/workspaces/tinkoff_futures/backend/backend.log" attempts=${1:-120}
  echo "[backend] waiting for startup message..."
  while [ ! -f "$log" ] || ! grep -q "Application is running" "$log"; do
    sleep 1
    attempts=$((attempts-1))
    if [ "$attempts" -le 0 ]; then
      echo "[backend] backend did not start in time"
      return 1
    fi
  done
  echo "[backend] startup detected"
  return 0
}

# Стартуем ваши процессы (скрипт идемпотентный)
chmod +x ./start-projects.sh
./start-projects.sh
wait_backend_log || true

# --- make ports public (non-interactive) -----------------
current_codespace() {
  # 1) Если Codespaces дал имя — используем его
  if [ -n "${CODESPACE_NAME:-}" ]; then
    echo "$CODESPACE_NAME"
    return 0
  fi

  # 2) Попробуем вывести slug репо из git remote
  local repo_slug
  repo_slug="$(git -C /workspaces/tinkoff_futures remote get-url origin 2>/dev/null \
    | sed -E 's#(git@github.com:|https?://github.com/)([^/]+/[^/.]+)(\.git)?#\2#')"

  # 3) Возьмём первый доступный codespace для этого репо
  if command -v gh >/dev/null 2>&1; then
    if [ -n "$repo_slug" ]; then
      gh codespace list --repo "$repo_slug" --json name,state --limit 50 \
        --jq '.[] | select(.state=="Available") | .name' 2>/dev/null | head -n1 && return 0
    fi
    # 4) Или просто первый доступный среди всех
    gh codespace list --json name,state --limit 50 \
      --jq '.[] | select(.state=="Available") | .name' 2>/dev/null | head -n1 && return 0
  fi

  return 1
}

open_browser_for_port() {
  # usage: open_browser_for_port 4200
  local port="$1"
  local domain="${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN:-app.github.dev}"
  local cs="${CODESPACE_NAME:-}"
  # если имени нет, пробуем определить через gh/current_codespace (у вас функция уже есть)
  if [ -z "$cs" ]; then cs="$(current_codespace || true)"; fi

  if [ -z "$cs" ]; then
    echo "[open] Не удалось определить имя codespace — печатаю только URL"
    cs="unknown"
  fi

  local url="https://${cs}-${port}.${domain}/"
  echo "[open] Открой фронтенд: $url"

  # Сформируем command:-ссылку для VS Code (кликните по ней в терминале)
  # Нужно слегка процентажировать символы в URL для аргумента команды
  local u_enc="${url//:/%3A}"; u_enc="${u_enc//\//%2F}"
  local cmd_uri="command:vscode.open?%5B%22${u_enc}%22%5D"
  echo "[open] (VS Code) 👉 $cmd_uri"
}


make_public() {
  local port="$1" cs="$2"
  echo "[codespaces] set $port public"
  # Запрещаем любые промпты gh
  GH_PROMPT_DISABLED=1 gh codespace ports visibility "${port}:public" -c "$cs" >/dev/null 2>&1 \
    || echo "[codespaces] не удалось сделать порт $port публичным (нет прав или политика организации)"
}

if command -v gh >/dev/null 2>&1; then
  if gh auth status -h github.com >/dev/null 2>&1; then
    cs_name="$(current_codespace || true)"
    if [ -n "${cs_name:-}" ]; then
      make_public 11111 "$cs_name"
      sleep 2
      open_browser_for_port 4200
    else
      echo "[codespaces] не удалось определить текущий codespace. Укажи вручную: gh codespace ports visibility 4200:public -c <name>"
      gh codespace list -L 20 || true
    fi
  else
    echo "[codespaces] gh установлен, но не авторизован. Выполни один раз: gh auth login --web"
    echo "[codespaces] потом перезапусти: bash .devcontainer/postAttach.sh"
  fi
else
  echo "[codespaces] gh CLI не найден. Поставь фичу github-cli в devcontainer или установи gh в Dockerfile."
fi
