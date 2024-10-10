import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { MomentModule } from 'src/app/pipes/moment/moment.module';
import { ReportContainerComponent } from './containers/report-container/report-container.component';
import { ReportService } from './services/report.service';

const routes: Routes = [{ path: '', component: ReportContainerComponent }];

@NgModule({
  declarations: [ReportContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzDatePickerModule,
    ReactiveFormsModule,
    FormsModule,
    NzFormModule,
    NzTableModule,
    MomentModule,
  ],
  providers: [ReportService],
})
export class ReportsModule {}
