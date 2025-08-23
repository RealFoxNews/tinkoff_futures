import { Future } from 'tinkoff-invest-api/cjs/generated/instruments';
import { TraderOptions } from './trader/models/base.config';
import { Trader } from './trader/trader/trader';
export declare class AppService {
    private readonly trader;
    private readonly logger;
    private readonly configPath;
    private readonly settings$;
    constructor(trader: Trader);
    private readConfig;
    getSettings(): Promise<TraderOptions>;
    settingsChanges(): import("rxjs").Observable<TraderOptions>;
    patchSetting(settings: TraderOptions): Promise<unknown>;
    getAccounts(): Promise<import("tinkoff-invest-api/cjs/generated/users").Account[]>;
    getShares(): Promise<Future[]>;
}
