#!/usr/bin/env bash
set -euo pipefail

# (Опционально) обновить глобальные CLI — можно убрать, т.к. ставите их в Dockerfile
npm install -g @angular/cli@latest @nestjs/cli@latest || true

### ---------- Frontend ----------
cd frontend
node generate-env.js

# Сначала пробуем строгую установку по lock; если lock несовместим — мягко откатываемся на install
if ! npm ci --ignore-scripts; then
  echo "[frontend] npm ci не прошёл (lock и package.json не совпадают) — выполняю 'npm install --ignore-scripts'"
  npm install --ignore-scripts
fi

# Единовременный запуск ngcc под file-lock, чтобы не было гонок
mkdir -p node_modules
if command -v flock >/dev/null 2>&1; then
  flock -n node_modules/.ngcc.run.lock -c \
    "npx ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points" || true
else
  LOCK="node_modules/.ngcc.run.lock"
  if ( set -o noclobber; : > "$LOCK" ) 2>/dev/null; then
    trap 'rm -f "$LOCK"' EXIT
    npx ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points || true
  else
    echo "ngcc уже запущен другой сессией — пропускаю"
  fi
fi

### ---------- Backend ----------
cd ../backend

if ! npm ci --ignore-scripts; then
  echo "[backend] npm ci не прошёл (lock и package.json не совпадают) — выполняю 'npm install --ignore-scripts'"
  npm install --ignore-scripts
fi

echo "Установка завершена успешно!"
