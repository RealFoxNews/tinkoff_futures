import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { SettingsContainerComponent } from './containers/settings-container/settings-container.component';
import { SettingsService } from './services/settings.service';

const routes: Routes = [{ path: '', component: SettingsContainerComponent }];

@NgModule({
  declarations: [SettingsContainerComponent],
  providers: [SettingsService],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzStepsModule,
    NzButtonModule,
    NzMessageModule,
  ],
})
export class SettingModule {}
