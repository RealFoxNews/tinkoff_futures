import { BehaviorSubject, Observable } from 'rxjs';
import { Share } from 'tinkoff-invest-api/cjs/generated/instruments';
import { ShareWather } from '../classes/share.watcher.class';
import { IShortFDA } from '../models/stock.fda.models';
export declare class ShareFda extends ShareWather<IShortFDA[]> {
    halfYearFda: IShortFDA[];
    private cron;
    private sub;
    watch(share: Share[]): BehaviorSubject<IShortFDA[]>;
    unWatch(): void;
    collectFdaData(share: Share[]): Observable<any[]>;
    getStocksFDA(): Observable<IShortFDA[]>;
    processesData(data: IShortFDA[]): any[];
    getHealthCare(shares: Share[]): string[][];
    getStocksFDAFromBebzinga(securities: string): Observable<{
        date: string;
        status: string;
        drugName: string;
        companies: {
            name: string;
            exchange: {
                exchange: string;
                symbol: string;
            }[];
        }[];
        notes: string;
        source_link: string;
    }[]>;
}
