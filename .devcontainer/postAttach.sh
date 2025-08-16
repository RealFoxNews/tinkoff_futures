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


# Стартуем ваши процессы (скрипт идемпотентный)
chmod +x ./start-projects.sh
./start-projects.sh

