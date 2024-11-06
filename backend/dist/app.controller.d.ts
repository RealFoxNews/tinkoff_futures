import { AppService } from './app.service';
import { TraderOptions } from './trader/models/base.config';
export declare class AppController {
    private readonly appService;
    private readonly logger;
    constructor(appService: AppService);
    getSettings(): Promise<TraderOptions>;
    getShares(): Promise<import("tinkoff-invest-api/cjs/generated/instruments").Future[]>;
    getAccounts(): Promise<import("tinkoff-invest-api/cjs/generated/users").Account[]>;
    patchSetting(settings: TraderOptions): Promise<unknown>;
}
