import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { MomentModule } from 'src/app/pipes/moment/moment.module';
import { DividendContainerComponent } from './containers/dividend-container/dividend-container.component';
import { DividendsDatePipe } from './pipes/dividends-date.pipe';
import { DividendService } from './services/dividend.service';

const routes: Routes = [{ path: '', component: DividendContainerComponent }];
@NgModule({
  declarations: [DividendContainerComponent, DividendsDatePipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzDatePickerModule,
    ReactiveFormsModule,
    FormsModule,
    NzFormModule,
    NzTableModule,
    MomentModule,
    NzSpinModule,
  ],
  providers: [DividendService],
})
export class DividendsModule {}
