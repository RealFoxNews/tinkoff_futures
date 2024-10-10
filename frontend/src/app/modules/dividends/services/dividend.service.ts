import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moment } from 'moment';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Share } from '../../shares/share.model';
import { IDividend } from '../models/dividends.models';

@Injectable()
export class DividendService {
    constructor(private http: HttpClient) {}

    getStocksReportByDate(from: Moment, to?: Moment): Observable<IDividend[]> {
        let params = new HttpParams();
        if (from) params = params.append('dateFrom', from.format('DD-MM-YYYY'));
        if (to) params = params.append('dateTo', to.format('DD-MM-YYYY'));

        return this.http.get<IDividend[]>(environment.apiUrl + 'support/dividendsByDate', { params });
    }

    getStocks(): Observable<Share[]> {
        return this.http.get<Share[]>(environment.apiUrl + 'shares');
    }
}
