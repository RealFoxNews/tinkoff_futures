# Используем официальный образ Node.js версии 18.20.0
FROM node:18.20.0-bullseye

# Устанавливаем переменную окружения для OpenSSL
ENV NODE_OPTIONS=--openssl-legacy-provider

# Устанавливаем необходимые системные пакеты от имени root
USER root

# Устанавливаем глобально Angular CLI и NestJS CLI от имени root
RUN npm install -g @angular/cli@latest @nestjs/cli@latest
RUN apt-get update && apt-get install -y lsof && rm -rf /var/lib/apt/lists/*

# Настраиваем права доступа для пользователя 'node'
RUN chown -R node:node /usr/local/lib/node_modules
RUN chown -R node:node /home/node
RUN chown -R node:node /usr/local/bin

# Переключаемся на пользователя 'node'
USER node

