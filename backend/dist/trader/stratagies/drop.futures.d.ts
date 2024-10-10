import { Observable } from 'rxjs';
import { Future } from 'tinkoff-invest-api/cjs/generated/instruments';
import { Api } from '../api/api';
import { DropParameters } from '../models/base.config';
export declare class DropFutures {
    private readonly api;
    private readonly options;
    buy: Observable<{
        price: number;
        future: Future;
    }>;
    private halt;
    private readonly buyTheDrop;
    private unsubscribes;
    constructor(api: Api, options: DropParameters);
    startFuturesDrop(): Promise<Observable<{
        price: number;
        future: Future;
    }>>;
    private processOnCandle;
    private getPrice;
    stop(): void;
}
