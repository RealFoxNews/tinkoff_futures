#!/usr/bin/env bash
set -euo pipefail

# Backend
cd /workspaces/tinkoff_futures/backend
if pgrep -fa "nest start" >/dev/null; then
  echo "[backend] уже запущен — пропускаю"
else
  echo "[backend] стартую..."
  nohup nest start > backend.log 2>&1 &
fi

# Frontend
cd /workspaces/tinkoff_futures/frontend
# На всякий случай: убираем залипший lock, если ранних процессов нет
if [ -f node_modules/@angular/compiler-cli/ngcc/__ngcc_lock_file__ ] && ! pgrep -fa ngcc >/dev/null; then
  rm -f node_modules/@angular/compiler-cli/ngcc/__ngcc_lock_file__ || true
fi

if pgrep -fa "ng serve" >/dev/null; then
  echo "[frontend] уже запущен — пропускаю"
else
  echo "[frontend] стартую..."
  nohup npm run start > frontend.log 2>&1 &
fi
