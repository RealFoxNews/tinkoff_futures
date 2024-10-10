import { Future } from 'tinkoff-invest-api/cjs/generated/instruments';
import { TraderOptions } from './trader/models/base.config';
import { Trader } from './trader/trader/trader';
export declare class AppService {
    private readonly trader;
    constructor(trader: Trader);
    getSettings(): Promise<TraderOptions>;
    patchSetting(settings: TraderOptions): Promise<unknown>;
    getAccounts(): Promise<import("tinkoff-invest-api/cjs/generated/users").Account[]>;
    getShares(): Promise<Future[]>;
}
