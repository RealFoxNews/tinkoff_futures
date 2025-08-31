const { writeFile } = require('fs');
const { join } = require('path');

// Получаем переменные окружения
const codespaceName = process.env.CODESPACE_NAME;
const apiUrl = process.env.API_URL;
const socketUrl = process.env.SOCKET_URL;

// Формируем содержимое файла environment.ts
const targetPath = join(__dirname, 'src', 'environments', 'environment.ts');

// Безопасные значения по умолчанию
const defaultApiUrl = codespaceName 
  ? `https://${codespaceName}-11111.app.github.dev/` 
  : 'http://localhost:11111/';

const defaultSocketUrl = codespaceName 
  ? `wss://${codespaceName}-11111.app.github.dev/` 
  : 'ws://localhost:11111/';

const environmentFileContent = `
export const environment = {
  production: false,
  apiUrl: '${apiUrl || defaultApiUrl}',
  socketUrl: '${socketUrl || defaultSocketUrl}',
};
`;

// Записываем файл environment.ts
writeFile(targetPath, environmentFileContent, (err) => {
  if (err) {
    console.error('Ошибка при создании файла environment.ts', err);
  } else {
    console.log('Файл environment.ts успешно создан');
  }
});
