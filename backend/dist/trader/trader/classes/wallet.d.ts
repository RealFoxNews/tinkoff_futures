import { Future } from 'tinkoff-invest-api/cjs/generated/instruments';
import { Api } from '../../api/api';
import { TraderOptions } from '../../models/base.config';
export declare class Wallet {
    private readonly api;
    private readonly accountId;
    private readonly options;
    private readonly message;
    private account;
    private portfolio;
    private intervalSub;
    private activeOrders;
    constructor(api: Api, accountId: string, options: TraderOptions);
    init(): Promise<void>;
    stop(): void;
    buy(margins: any, price: number, share: Future, stratagyName: string, shareMoneySize?: number): void;
    cancelOrder(orderId: string, stratagyName: string, ticker: string, timeInterval: number): void;
}
