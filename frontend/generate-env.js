const { writeFile } = require('fs');
const { join } = require('path');

// Получаем переменную CODESPACE_NAME из окружения
const codespaceName = process.env.CODESPACE_NAME;

// Формируем содержимое файла environment.ts
const targetPath = join(__dirname, 'src', 'environments', 'environment.ts');

const environmentFileContent = `
export const environment = {
  production: false,
  apiUrl: '${codespaceName ? `https://${codespaceName}-11111.app.github.dev/` : 'http://localhost:11111/'}',
  socketUrl: '${codespaceName ? `wss://${codespaceName}-11111.app.github.dev/` : 'ws://localhost:11111/'}',
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
