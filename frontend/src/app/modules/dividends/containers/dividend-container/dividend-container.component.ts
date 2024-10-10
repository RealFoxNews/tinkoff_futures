import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { combineLatest, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Share } from 'src/app/modules/shares/share.model';
import { CopyToClipBoardService } from 'src/app/services/copy-to-clip-board.service';
import { IDividend } from '../../models/dividends.models';
import { DividendService } from '../../services/dividend.service';

const addDaysByWeekend = (date: moment.Moment, reversed?: boolean): moment.Moment => {
    const weekDay = date.isoWeekday();

    if (weekDay === 6) reversed ? date.subtract(1, 'days') : date.add(2, 'days');
    if (weekDay === 7) reversed ? date.subtract(2, 'days') : date.add(1, 'days');
    return date;
};

@Component({
    selector: 'app-dividend-container',
    templateUrl: './dividend-container.component.html',
    styleUrls: ['./dividend-container.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividendContainerComponent implements OnInit {
    public form: FormGroup;
    public isWaiting: boolean = false;
    public rows: IDividend[] = [];

    public trackBy(_: number, data: IDividend): string {
        return data.symbol;
    }

    disableWeekends(date: Date): boolean {
        return moment(date).isoWeekday() > 5;
    }

    disableByTwoWeeks(form: FormGroup) {
        const isDisabled = (date: Date): boolean => {
            const dateAsMoment = moment(date).startOf('day');
            if (dateAsMoment.isoWeekday() > 5) return true;
            const from = form.get('from').value;

            if (from) {
                const fromDate = moment(from).startOf('day');
                if (fromDate.isValid()) {
                    const diff = dateAsMoment.diff(fromDate, 'days');
                    return diff > 13 || !fromDate.isSameOrBefore(dateAsMoment);
                }
            }

            return false;
        };

        return isDisabled;
    }

    constructor(
        fb: FormBuilder,
        private readonly cdr: ChangeDetectorRef,
        private readonly service: DividendService,
        private readonly copyService: CopyToClipBoardService
    ) {
        this.form = fb.group({
            from: null,
            to: null,
        });
    }

    ngOnInit(): void {
        this.form.get('from').valueChanges.subscribe((date) => {
            const to = this.form.get('to').value;
            if (to) {
                const fromDate = moment(date).startOf('day');
                const toDate = moment(to).startOf('day');
                const diff = toDate.diff(fromDate, 'days');
                if (diff > 13) {
                    const updatedDate = fromDate.add(13, 'days');
                    addDaysByWeekend(updatedDate, true);
                    this.form.get('to').setValue(updatedDate.toDate());
                }

                if (diff < 0) {
                    addDaysByWeekend(fromDate, true);
                    this.form.get('to').setValue(fromDate.toDate());
                }
            }
        });

        this.form.valueChanges
            .pipe(
                distinctUntilChanged(),
                tap(() => (this.isWaiting = true)),
                debounceTime(300),
                switchMap((formDate) => {
                    if (!formDate.from) {
                        this.form.patchValue({ to: null }, { emitEvent: false });
                        return of([]);
                    }
                    const dateFrom = addDaysByWeekend(moment(formDate.from).startOf('day').add(1, 'day'));
                    const dateTo = formDate.to
                        ? addDaysByWeekend(moment(formDate.to).startOf('day').add(1, 'day'))
                        : null;

                    return combineLatest([
                        this.service.getStocksReportByDate(dateFrom, dateTo),
                        this.service.getStocks(),
                    ]);
                })
            )
            .subscribe(([dividendStosks, shares]: [IDividend[], Share[]]) => {
                this.isWaiting = false;
                this.rows = dividendStosks.filter((i) => shares.find((share) => share.ticker === i.symbol));
                this.cdr.detectChanges();
            });

        const startDate = addDaysByWeekend(moment()).toDate();
        this.form.patchValue({ from: startDate });
    }

    public copyTiker(report: IDividend) {
        this.copyService.copy(report.symbol);
    }
}
