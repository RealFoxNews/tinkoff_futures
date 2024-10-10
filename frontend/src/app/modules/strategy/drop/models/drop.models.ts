export interface DropSettings {
    except?: string[];

    // моекс акции
    maxMOEXMoneySize?: number;
    enabled?: boolean;
    moexDiffShares?: number;
    moexDiffSharesSecond?: number;
    moexDiffSharesBuy?: number;

    // моекс фьючи
    enableFutures?: boolean;
    moexDiffFuture?: number;
    moexDiffFutureSecond?: number;
    moexDiffFutureBuy?: number;

    // иностранные акции
    foreignMaxMoneySize?: number;
    enabledForeign?: boolean;
    foreignDiffShares?: number;
    foreignDiffSharesBuy?: number;
    includeReports?: boolean;
    includeMS?: boolean;
    includeFarma?: boolean;

    sharesSettings?: Array<SharesSetting>;
}

export interface SharesSetting {
    figi: string;
    maxMoneySize?: number;
    diffShares?: number;
    diffSharesSecond?: number;
    diffSharesBuy?: number;
}

export interface SettingsDropResponse {
    drop: DropSettings;
}

export const DropEnabledKeys = {
    FORTS_EVENING: 'enabledMoex',
    SPB: 'enabledForeign',
};
