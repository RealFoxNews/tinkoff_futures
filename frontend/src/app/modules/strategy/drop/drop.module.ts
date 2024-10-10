import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ShareExchangeModule } from 'src/app/pipes/share-exchange/share-exchange.module';
import { DropDefaultControlsComponent } from './components/drop-default-controls/drop-default-controls.component';
import { DropSharesTableComponent } from './components/drop-shares-table/drop-shares-table.component';
import { DropComponent } from './components/drop/drop.component';
import { ResizeObserverDirective } from './directives/resize-observer.directive';
import { MoneyValuePipe } from './pipes/money-value.pipe';
import { PercentValuePipe } from './pipes/percent-value.pipe';
import { ShareHasCutomSettingsPipe } from './pipes/share-has-cutom-settings.pipe';
import { ShareIsExceptPipe } from './pipes/share-is-except.pipe';
import { DropService } from './services/drop.service';
import { IsDropEnabledPipe } from './pipes/is-drop-enabled.pipe';
import { DeltaDiffValuePipe } from './pipes/delta-diff-value.pipe';

const routes: Routes = [{ path: '', component: DropComponent }];

@NgModule({
    declarations: [
        DropComponent,
        ResizeObserverDirective,
        DropSharesTableComponent,
        DropDefaultControlsComponent,
        PercentValuePipe,
        MoneyValuePipe,
        ShareHasCutomSettingsPipe,
        ShareIsExceptPipe,
        IsDropEnabledPipe,
        DeltaDiffValuePipe,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        NzTableModule,
        NzButtonModule,
        NzInputModule,
        NzTabsModule,
        ShareExchangeModule,
        NzCheckboxModule,
        NzModalModule,
        NzMessageModule,
        NzIconModule,
        NzSwitchModule,
    ],
    providers: [DropService],
})
export class DropModule {}
