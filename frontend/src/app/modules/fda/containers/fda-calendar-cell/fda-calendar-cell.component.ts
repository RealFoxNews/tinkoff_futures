import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnDestroy,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import * as moment from 'moment';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { IShortFDA, ListItem } from '../../models/fda.models';
import { FdaCalendarDialogComponent } from '../fda-calendar-dialog/fda-calendar-dialog.component';

const getType = (status: string) => {
  switch (true) {
    case status.includes('Phase 1'):
    case status.includes('Meeting With FDA'):
    case status.includes('NDA'):
    case status.includes('Approved'):
      return 'success';

    case status.includes('Phase 2'):
    case status.includes('Pre-Clinical Stage'):
      return 'warning';

    case status.includes('Phase 3'):
    case status.includes('Approval'):
      return 'error';

    default:
      return 'unset';
  }
};

@Component({
  selector: 'app-fda-calendar-cell',
  templateUrl: './fda-calendar-cell.component.html',
  styleUrls: ['./fda-calendar-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FdaCalendarCellComponent implements OnDestroy {
  @ViewChild('list') list: TemplateRef<unknown>;
  @HostListener('click') onClick() {
    this.onListClick();
  }

  @Input() date: Date;
  @Input() set fdaData(data: IShortFDA[]) {
    this.setDataToDisplay(data);
  }

  public dataToDisplay: ListItem[];
  private modalRef: NzModalRef = null;
  constructor(private modal: NzModalService) {}

  ngOnDestroy() {
    if (this.modalRef) this.modalRef.destroy();
  }

  public setDataToDisplay(data: IShortFDA[]) {
    const momentDate = moment(this.date).startOf('day');
    if (data && momentDate.isValid()) {
      this.dataToDisplay = data
        .filter((fda: IShortFDA) =>
          moment(fda.date, 'YYYY-MM-DD').startOf('day').isSame(momentDate)
        )
        .map((item) => ({
          type: getType(item.status),
          text: `${item.companies.map((i) => i.exchange[0]?.symbol).join()} ${
            item.status
          }`,
          href: null,
          data: item,
        }));
    }
  }

  public onListClick() {
    if (this.modalRef) this.modalRef.destroy();

    this.modalRef = this.modal.create({
      nzTitle:
        'События FDA на ' +
        moment(this.date).startOf('day').format('DD.MM.YYYY'),
      nzContent: FdaCalendarDialogComponent,
      nzFooter: null,
      nzMaskClosable: false,
      nzWidth: '80vw',
      nzComponentParams: { dataToDisplay: this.dataToDisplay },
    });
  }
}
