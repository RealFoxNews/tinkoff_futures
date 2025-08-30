# Tinkoff Futures Trading Bot

🚀 **Автоматизированный торговый бот для фьючерсов Тинькофф Инвестиции**

## ⚠️ ВАЖНО: Безопасность

**НЕ ПУБЛИКУЙТЕ ЭТОТ ПРОЕКТ БЕЗ ВЫПОЛНЕНИЯ ВСЕХ ТРЕБОВАНИЙ БЕЗОПАСНОСТИ!**

Перед публикацией обязательно:
1. Прочитайте [SECURITY.md](./SECURITY.md)
2. Выполните миграцию на безопасную конфигурацию ([MIGRATION.md](./MIGRATION.md))
3. Запустите проверку безопасности: `./security-check.sh`

## 🏗️ Архитектура

- **Backend**: NestJS + TypeScript + Tinkoff Invest API
- **Frontend**: Angular + TypeScript + Ant Design
- **База данных**: Встроенная (файловая система)
- **WebSocket**: Real-time обновления

## 🚀 Быстрый старт

### Предварительные требования

- Node.js 16+
- npm или yarn
- Tinkoff Invest API ключ
- Telegram Bot токен (опционально)

### 1. Клонирование и установка

```bash
git clone <repository-url>
cd tinkoff_futures

# Установка зависимостей
npm install
cd backend && npm install
cd ../frontend && npm install
```

### 2. Настройка безопасности

```bash
# Создание безопасной конфигурации
cp backend/env.example backend/.env
cp frontend/env.example frontend/.env

# Заполните .env файлы реальными значениями
# НЕ КОММИТЬТЕ .env файлы!
```

### 3. Запуск

```bash
# Backend
cd backend
npm run start:dev

# Frontend (в другом терминале)
cd frontend
npm start
```

## 🔧 Конфигурация

### Backend (.env)

```bash
# Tinkoff Invest API
TINKOFF_API_KEY=your_api_key_here
TINKOFF_ACCOUNT_ID=your_account_id_here

# Telegram Bot
TELEGRAM_BOT_ID=your_bot_id_here
TELEGRAM_CHAT_ID=your_chat_id_here

# Server
SERVER_PORT=11111
NODE_ENV=development
```

### Frontend (.env)

```bash
# API Configuration
API_URL=http://localhost:11111/
SOCKET_URL=ws://localhost:11111/
```

## 📊 Функциональность

### Торговые стратегии
- **Drop Strategy**: Автоматическая покупка при падении цены
- **MOEX Futures**: Торговля фьючерсами на Московской бирже
- **Foreign Shares**: Торговля иностранными акциями
- **Reports**: Анализ отчетов компаний

### Мониторинг
- Real-time отслеживание цен
- Уведомления через Telegram
- Логирование всех операций
- Статистика торговли

## 🛡️ Безопасность

### Что НЕ публикуется
- API ключи и токены
- IP адреса серверов
- SSL сертификаты
- Лицензионные файлы
- Логи с чувствительными данными

### Что публикуется
- Примеры конфигурации
- Документация
- Исходный код (без чувствительных данных)
- Тесты и примеры

## 📚 Документация

- [SECURITY.md](./SECURITY.md) - Руководство по безопасности
- [MIGRATION.md](./MIGRATION.md) - Миграция на безопасную конфигурацию
- [API Documentation](./backend/README.md) - Backend API
- [Frontend Guide](./frontend/README.md) - Frontend руководство

## 🧪 Тестирование

```bash
# Backend тесты
cd backend
npm test

# Frontend тесты
cd frontend
npm test

# E2E тесты
cd backend
npm run test:e2e
```

## 🔍 Проверка безопасности

```bash
# Запуск автоматической проверки
chmod +x security-check.sh
./security-check.sh
```

## 📝 Лицензия

Проект использует лицензионную систему. См. [SECURITY.md](./SECURITY.md) для деталей.

## 🤝 Вклад в проект

1. Fork репозитория
2. Создайте feature branch
3. Убедитесь, что security-check проходит
4. Создайте Pull Request

## 🆘 Поддержка

При обнаружении уязвимостей безопасности:
- НЕ создавайте публичные issues
- Свяжитесь с командой безопасности напрямую
- Используйте приватные каналы связи

## 📈 Roadmap

- [ ] Расширенные торговые стратегии
- [ ] Машинное обучение для анализа
- [ ] Мобильное приложение
- [ ] Интеграция с другими брокерами
- [ ] Расширенная аналитика

---

**⚠️ Помните: безопасность - это не опция, а обязательное требование!**
