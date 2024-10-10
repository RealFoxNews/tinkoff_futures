import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { combineLatest, Observable } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Share } from 'src/app/modules/shares/share.model';
import { CopyToClipBoardService } from 'src/app/services/copy-to-clip-board.service';
import { IReport, IReports } from '../../models/report.models';
import { ReportService } from '../../services/report.service';
import { etTimeToMoscow, sortByTime } from '../../utils/time.utils';

@Component({
    selector: 'app-report-container',
    templateUrl: './report-container.component.html',
    styleUrls: ['./report-container.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportContainerComponent implements OnInit {
    public date: FormControl = new FormControl();
    public rows: IReport[] = [];

    public trackBy = (_: number, data: IReport): string => data.ticker;

    disableWeekends = (date: Date): boolean => moment(date).isoWeekday() > 5;

    constructor(
        private readonly service: ReportService,
        private readonly copyService: CopyToClipBoardService,
        private readonly cdr: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.date.valueChanges
            .pipe(
                distinctUntilChanged(),
                switchMap((currentDate) => this.getReports(currentDate))
            )
            .subscribe(([reports, shares]) => {
                let stringDate;
                let rows: IReport[] = [];
                Object.keys(reports).map((key) => {
                    stringDate = key;
                    for (const key in reports[stringDate]) {
                        if (shares.find((i) => i.ticker === key)) {
                            const item = reports[stringDate][key];
                            const _revgrowthprint = parseFloat(item.revgrowthprint);
                            rows.push({
                                ...item,
                                _time: etTimeToMoscow(item.time, stringDate),
                                _revgrowthprint:
                                    !isNaN(_revgrowthprint) && _revgrowthprint !== Infinity ? _revgrowthprint : null,
                            });
                        }
                    }
                });

                this.rows = [...rows.sort(sortByTime)];
                this.cdr.detectChanges();
            });

        const presetDate = moment();
        const weekDay = presetDate.isoWeekday();

        if (weekDay === 6) presetDate.add(2, 'days');
        if (weekDay === 7) presetDate.add(1, 'days');

        this.date.setValue(presetDate.toDate());
    }

    public copyTiker(report: IReport) {
        this.copyService.copy(report.ticker);
    }

    getReports(date: string): Observable<[IReports, Share[]]> {
        this.rows = [];
        return combineLatest([this.service.getStocksReportByDate(moment(date)), this.service.getStocks()]);
    }
}
