import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { MomentModule } from 'src/app/pipes/moment/moment.module';
import { FdaCalendarCellComponent } from './containers/fda-calendar-cell/fda-calendar-cell.component';
import { FdaCalendarDialogComponent } from './containers/fda-calendar-dialog/fda-calendar-dialog.component';
import { FdaContainerComponent } from './containers/fda-container/fda-container.component';
import { FdaService } from './services/fda.service';

const routes: Routes = [{ path: '', component: FdaContainerComponent }];
@NgModule({
  declarations: [
    FdaContainerComponent,
    FdaCalendarCellComponent,
    FdaCalendarDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzCalendarModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    NzBadgeModule,
    NzModalModule,
    NzTableModule,
    NzDatePickerModule,
  ],
  providers: [FdaService],
  entryComponents: [FdaCalendarDialogComponent],
})
export class FdaModule {}
