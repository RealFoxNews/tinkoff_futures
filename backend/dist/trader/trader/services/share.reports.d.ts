import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Share } from 'tinkoff-invest-api/cjs/generated/instruments';
import { ShareWather } from '../classes/share.watcher.class';
import { IReport, IReports } from '../models/stock.reports.models';
export declare class ShareReports extends ShareWather<IReports> {
    private cron;
    private sub;
    watch(shares?: Share[]): BehaviorSubject<IReports>;
    unWatch(): void;
    getStocksReportByDate(date: string | moment.Moment): Observable<IReports>;
    getStocksReport(): Observable<IReports>;
    requestedDays(day: number, date: moment.Moment): Observable<IReports>;
    parse(data: string): {
        [key: string]: IReport;
    };
}
