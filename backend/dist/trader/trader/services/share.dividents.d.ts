import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Share } from 'tinkoff-invest-api/cjs/generated/instruments';
import { ShareWather } from '../classes/share.watcher.class';
import { IDividend } from '../models/stock.dividents.models';
export declare class ShareDividends extends ShareWather<IDividend[]> {
    private apiUrl;
    private cron;
    private sub;
    watch(shares: Share[]): BehaviorSubject<IDividend[]>;
    unWatch(): void;
    collectDividendsData(dateFrom: string | moment.Moment, dateTo: string | moment.Moment): Observable<IDividend[]>;
    enumerateDaysBetweenDates(startDate: any, endDate: any): any[];
    getStocksDividend(date: string): Observable<IDividend[]>;
}
