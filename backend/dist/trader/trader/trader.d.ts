import { TraderOptions } from '../models/base.config';
import { BaseTrader } from './classes/trader.base.class';
import { ShareClose } from './services/share.close';
import { ShareDividends } from './services/share.dividents';
import { ShareFda } from './services/share.fda';
import { ShareHalts } from './services/share.halts';
import { ShareReports } from './services/share.reports';
export declare class Trader extends BaseTrader {
    private readonly shareDividends;
    private readonly shareFDA;
    private readonly shareHalts;
    private readonly shareReports;
    private readonly shareClose;
    private sharesDrop;
    private shareDividends$;
    private shareFDA$;
    private shareHalts$;
    private shareReports$;
    private shareClose$;
    constructor(shareDividends: ShareDividends, shareFDA: ShareFda, shareHalts: ShareHalts, shareReports: ShareReports, shareClose: ShareClose);
    startTrading(): Promise<void>;
    private initializeApi;
    stopApi(): Promise<void>;
    private initializeTrading;
    stopTrading(): Promise<void>;
    private startStratagies;
    private stopStratagies;
    reloadOptions(options: TraderOptions): void;
}
