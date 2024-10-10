import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Fernet from 'fernet-web';

if (environment.production) {
  enableProdMode();
}

async function checkLicense(): Promise<void> {
  const key = 'TcIBhIEmQ1Nihgjm8W77bmMUYqJcDnxBH9fzeou4K_0=';

  try {
    // Создаём экземпляр Fernet
    const fernet = await Fernet.create(key);

    // Загружаем зашифрованные данные из файла license.dll
    const response = await fetch('assets/license.dll');
    if (!response.ok) {
      throw new Error('');
    }
    const encryptedData = await response.text();

    // Расшифровываем данные
    const decryptedData = await fernet.decrypt(encryptedData);

    // Проверяем действительность лицензии
    if (new Date() <= new Date(decryptedData)) {
    } else {
      throw new Error('');
    }
  } catch (error) {
    console.error('', error);
    throw error;
  }
}

checkLicense()
  .then(() => {
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  })
  .catch((error) => {
    console.error('Приложение не может быть запущено:', error);
    document.body.innerHTML = '<h1>Лицензия недействительна или истекла.</h1>';
  });
