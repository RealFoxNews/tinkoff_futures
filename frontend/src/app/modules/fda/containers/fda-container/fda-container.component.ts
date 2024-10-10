import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { IShortFDA } from '../../models/fda.models';
import { FdaService } from '../../services/fda.service';

@Component({
    selector: 'app-fda-container',
    templateUrl: './fda-container.component.html',
    styleUrls: ['./fda-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FdaContainerComponent implements OnInit {
    public date = moment().toDate();
    public data: IShortFDA[];

    public disabledMonths(date: Date): boolean {
        const dateFrom = moment().startOf('month').subtract(1, 'month').startOf('month');
        const dateTo = moment().endOf('month').add(3, 'month').startOf('month');

        return moment(date).isBefore(dateFrom) || moment(date).isAfter(dateTo);
    }
    constructor(private readonly service: FdaService, private readonly cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.loadData(this.date);
    }

    public onDateChange(date: Date) {
        this.loadData(date);
        this.data = [];
        this.cdr.detectChanges();
    }

    private loadData(date: Date) {
        this.service.getFDA().subscribe((data) => {
            this.data = data;
            this.cdr.detectChanges();
        });
    }
}
