export interface SettingsResponse {
    settings: Settings;
}

export interface Settings {
    apiKey?: string;
    accountId?: number;
    botId?: string;
    chatId?: string;
}
