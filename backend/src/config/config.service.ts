import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ConfigService {
  private config: any;

  constructor() {
    this.loadConfig();
  }

  private loadConfig() {
    try {
      // Сначала пытаемся загрузить из переменных окружения
      const envConfig = {
        settings: {
          accountId: process.env.TINKOFF_ACCOUNT_ID || '',
          apiKey: process.env.TINKOFF_API_KEY || '',
          botId: process.env.TELEGRAM_BOT_ID || '',
          chatId: process.env.TELEGRAM_CHAT_ID || '',
        },
        drop: {
          enabled: process.env.DROP_ENABLED === 'true',
          enabledMoex: process.env.DROP_ENABLED_MOEX !== 'false',
          enabledForeign: process.env.DROP_ENABLED_FOREIGN === 'true',
          enableFutures: process.env.DROP_ENABLE_FUTURES !== 'false',
          includeFarma: process.env.DROP_INCLUDE_FARMA === 'true',
          foreignDiffShares: parseFloat(process.env.FOREIGN_DIFF_SHARES || '0.97'),
          foreignDiffSharesBuy: parseFloat(process.env.FOREIGN_DIFF_SHARES_BUY || '0.1'),
          moexDiffShares: parseFloat(process.env.MOEX_DIFF_SHARES || '0.99'),
          moexShareDiffSecond: parseFloat(process.env.MOEX_SHARE_DIFF_SECOND || '0.97'),
          moexDiffSharesBuy: parseFloat(process.env.MOEX_DIFF_SHARES_BUY || '0.01'),
          moexFutureDiff: parseFloat(process.env.MOEX_FUTURE_DIFF || '0.97'),
          moexFutureDiffSecond: parseFloat(process.env.MOEX_FUTURE_DIFF_SECOND || '0.975'),
          moexDiffFutureBuy: parseFloat(process.env.MOEX_DIFF_FUTURE_BUY || '0.01'),
          includeMS: process.env.INCLUDE_MS !== 'false',
          except: process.env.DROP_EXCEPT ? process.env.DROP_EXCEPT.split(',') : [],
          foreignMaxMoneySize: parseInt(process.env.FOREIGN_MAX_MONEY_SIZE || '1000'),
          maxMOEXMoneySize: parseInt(process.env.MAX_MOEX_MONEY_SIZE || '1000'),
          includeReports: process.env.INCLUDE_REPORTS === 'true',
          sharesSettings: [],
        }
      };

      // Если есть локальный config.json, загружаем его для переопределения
      const configPath = path.join(process.cwd(), 'config.json');
      if (fs.existsSync(configPath)) {
        const localConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        this.config = this.mergeConfig(envConfig, localConfig);
      } else {
        this.config = envConfig;
      }
    } catch (error) {
      console.error('Ошибка загрузки конфигурации:', error);
      // Fallback к базовой конфигурации
      this.config = {
        settings: { accountId: '', apiKey: '', botId: '', chatId: '' },
        drop: { enabled: false, enabledMoex: false, enabledForeign: false, enableFutures: false }
      };
    }
  }

  private mergeConfig(envConfig: any, localConfig: any): any {
    return {
      settings: { ...envConfig.settings, ...localConfig.settings },
      drop: { ...envConfig.drop, ...localConfig.drop }
    };
  }

  getConfig() {
    return this.config;
  }

  getSettings() {
    return this.config.settings;
  }

  getDropSettings() {
    return this.config.drop;
  }

  updateConfig(newConfig: any) {
    this.config = { ...this.config, ...newConfig };
    // Сохраняем только в локальный config.json, не в переменные окружения
    try {
      const configPath = path.join(process.cwd(), 'config.json');
      fs.writeFileSync(configPath, JSON.stringify(this.config, null, 2));
    } catch (error) {
      console.error('Ошибка сохранения конфигурации:', error);
    }
  }
}
