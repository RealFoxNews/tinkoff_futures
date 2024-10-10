import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moment } from 'moment';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Share } from '../../shares/share.model';
import { IReports } from '../models/report.models';

@Injectable()
export class ReportService {
    constructor(private http: HttpClient) {}

    getStocksReportByDate(date: Moment): Observable<IReports> {
        return this.http.get<IReports>(environment.apiUrl + 'support/reportByDate', {
            params: { date: date.format('DD-MM-YYYY') },
        });
    }

    getStocks(): Observable<Share[]> {
        return this.http.get<Share[]>(environment.apiUrl + 'shares');
    }
}
