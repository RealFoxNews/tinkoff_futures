# Migration Guide - Security Update

## 🚀 Миграция на безопасную конфигурацию

Этот документ описывает пошаговую миграцию с текущей небезопасной конфигурации на безопасную систему переменных окружения.

## 📋 Предварительные требования

- Node.js 16+ и npm
- Доступ к переменным окружения
- Базовые знания по работе с .env файлами

## 🔄 Пошаговая миграция

### Шаг 1: Создание переменных окружения

#### Backend
1. Скопируйте `backend/env.example` в `backend/.env`
2. Заполните все необходимые значения:

```bash
cd backend
cp env.example .env
# Отредактируйте .env файл с реальными значениями
```

#### Frontend
1. Скопируйте `frontend/env.example` в `frontend/.env`
2. Заполните все необходимые значения:

```bash
cd frontend
cp env.example .env
# Отредактируйте .env файл с реальными значениями
```

### Шаг 2: Обновление конфигурации Backend

1. Удалите или переименуйте текущий `backend/config.json`:
```bash
cd backend
mv config.json config.json.backup
```

2. Создайте новый `config.json` на основе примера:
```bash
cp config.example.json config.json
```

3. Обновите `backend/src/app.module.ts` для использования ConfigService:

```typescript
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    // ... existing imports
  ],
  providers: [
    ConfigService,
    // ... existing providers
  ],
})
export class AppModule {}
```

### Шаг 3: Обновление Frontend

1. Обновите `frontend/angular.json` для использования безопасных environment файлов:

```json
{
  "projects": {
    "frontend": {
      "architect": {
        "build": {
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.safe.ts"
                }
              ]
            }
          }
        }
      }
    }
  }
}
```

### Шаг 4: Обновление скриптов запуска

#### Backend
Обновите `backend/package.json`:

```json
{
  "scripts": {
    "start": "node -r dotenv/config dist/main",
    "start:dev": "nest start --watch",
    "start:prod": "node -r dotenv/config dist/main"
  }
}
```

#### Frontend
Обновите `frontend/package.json`:

```json
{
  "scripts": {
    "start": "node generate-env.js && ng serve --host 0.0.0.0 --port 4200",
    "build": "ng build",
    "build:prod": "ng build --configuration production"
  }
}
```

### Шаг 5: Установка зависимостей

#### Backend
```bash
cd backend
npm install dotenv
```

#### Frontend
```bash
cd frontend
npm install dotenv
```

## 🔧 Конфигурация переменных окружения

### Backend (.env)
```bash
# Tinkoff Invest API
TINKOFF_API_KEY=your_actual_api_key_here
TINKOFF_ACCOUNT_ID=your_actual_account_id_here

# Telegram Bot
TELEGRAM_BOT_ID=your_actual_bot_id_here
TELEGRAM_CHAT_ID=your_actual_chat_id_here

# Server
SERVER_PORT=11111
NODE_ENV=production

# License (если требуется)
LICENSE_B64=your_actual_license_base64_here
LICENSE_PUBLIC_B64=your_actual_public_license_base64_here
SIGNATURE_B64=your_actual_signature_base64_here
```

### Frontend (.env)
```bash
# API Configuration
API_URL=http://localhost:11111/
SOCKET_URL=ws://localhost:11111/

# Production
PROD_API_URL=https://your-actual-production-domain.com/api/
PROD_SOCKET_URL=wss://your-actual-production-domain.com/
```

## 🧪 Тестирование миграции

### 1. Запустите security-check.sh
```bash
chmod +x security-check.sh
./security-check.sh
```

### 2. Проверьте работу приложения
```bash
# Backend
cd backend
npm run start:dev

# Frontend (в другом терминале)
cd frontend
npm start
```

### 3. Проверьте логи на наличие чувствительных данных
```bash
# Backend
tail -f backend/backend.log

# Frontend
tail -f frontend/frontend.log
```

## 🚨 Возможные проблемы и решения

### Проблема: Переменные окружения не загружаются
**Решение**: Убедитесь, что dotenv установлен и загружается перед основным кодом

### Проблема: Frontend не может подключиться к backend
**Решение**: Проверьте правильность URL в переменных окружения

### Проблема: SSL сертификаты не загружаются
**Решение**: Убедитесь, что пути к SSL файлам указаны правильно в переменных окружения

## ✅ Чек-лист завершения миграции

- [ ] Все .env файлы созданы и заполнены
- [ ] config.json обновлен или удален
- [ ] ConfigService интегрирован в backend
- [ ] Frontend использует безопасные environment файлы
- [ ] Скрипты запуска обновлены
- [ ] Зависимости установлены
- [ ] Приложение запускается без ошибок
- [ ] Security check проходит успешно
- [ ] Чувствительные данные не логируются

## 🔒 Дополнительные меры безопасности

### 1. Ротация ключей
- Регулярно обновляйте API ключи
- Используйте разные ключи для разных окружений

### 2. Мониторинг
- Настройте алерты на подозрительную активность
- Регулярно проверяйте логи на утечки данных

### 3. Обновления
- Регулярно обновляйте зависимости
- Следите за security advisories

---

**После завершения миграции проект будет готов для безопасной публикации!**
