import { Observable, Subject } from 'rxjs';
import { Api } from 'src/trader/api/api';
import { TraderOptions } from 'src/trader/models/base.config';
import { Future } from 'tinkoff-invest-api/cjs/generated/instruments';
import { Account } from 'tinkoff-invest-api/cjs/generated/users';
import { Wallet } from './wallet';
export declare class BaseTrader {
    api: Api;
    wallet: Wallet;
    protected options: TraderOptions;
    readonly status: Subject<{
        status: string;
        alive: boolean;
    }>;
    constructor();
    initializeOptions(): void;
    reloadOptions(options: TraderOptions): void;
    onOpenApi(): void;
    onCloseApi(): void;
    onOpenWallet(): void;
    onCloseWallet(): void;
    getAccounts(): Promise<Account[]>;
    getShares(): Promise<Future[]>;
    getShares$(): Observable<Future[]>;
}
