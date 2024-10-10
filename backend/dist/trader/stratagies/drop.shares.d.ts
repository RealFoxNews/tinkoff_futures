import { Observable } from 'rxjs';
import { Api } from '../api/api';
import { DropParameters } from '../models/base.config';
import { Wallet } from '../trader/classes/wallet';
import { IDividend } from '../trader/models/stock.dividents.models';
import { IShortFDA } from '../trader/models/stock.fda.models';
import { IReports } from '../trader/models/stock.reports.models';
export declare class DropShares {
    private readonly api;
    private wallet;
    stoped: boolean;
    private halt;
    private unsubscribes;
    private readonly buyTheDrop;
    private shareDividends;
    private shareFDA;
    private shareHalts;
    private shareReports;
    private unavaliableShares;
    private options;
    constructor(api: Api, defaultOptions: DropParameters, wallet: Wallet);
    start(shareDividends$: Observable<IDividend[]>, shareFDA$: Observable<IShortFDA[]>, shareHalts$: Observable<Set<string>>, shareReports$: Observable<IReports>): Promise<void>;
    stop(): void;
    private setUnavaliableShares;
    private allowTo;
    private processOnCandle;
    private getPrice;
    reloadOptions(settings: DropParameters): void;
}
