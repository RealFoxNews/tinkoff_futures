export declare const BASE_CONFIG: {
    drop: {
        haltTimeout: number;
    };
};
export interface TraderOptions {
    settings: Settings;
    drop: DropParameters;
}
export interface Settings {
    apiKey: string;
    accountId: string;
    botId: string;
    chatId: string;
}
export interface DropParameters {
    includeReports: boolean;
    haltTimeout: number;
    except: string[];
    enabled: boolean;
    maxMOEXMoneySize: number;
    enabledMoex: boolean;
    moexDiffShares: number;
    moexDiffSharesSecond: number;
    moexDiffSharesBuy: number;
    enableFutures: boolean;
    moexDiffFuture: number;
    moexDiffFutureSecond: number;
    moexDiffFutureBuy: number;
    foreignMaxMoneySize: number;
    enabledForeign: boolean;
    foreignDiffShares: number;
    foreignDiffSharesBuy: number;
    includeMS: boolean;
    includeFarma: boolean;
    sharesSettings: Array<ShareSettings>;
}
export interface ShareSettings {
    figi: string;
    diffShares?: number;
    maxMoneySize?: number;
    diffSharesBuy?: number;
}
