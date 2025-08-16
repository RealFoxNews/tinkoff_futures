import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import ru from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NZ_DATE_CONFIG, NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { AppRoutingModule } from './app-routing.module';
import { AppSocketService } from './app-socket.service';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { DropModule } from './modules/strategy/drop/drop.module';
import { CopyToClipBoardService } from './services/copy-to-clip-board.service';
import { AuthInterceptor } from './services/auth.interceptor';

registerLocaleData(ru);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzDatePickerModule,
    NzMessageModule,
    DropModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU },
    CopyToClipBoardService,
    {
      provide: NZ_DATE_CONFIG,
      useValue: {
        firstDayOfWeek: 1, // week starts on Monday (Sunday is 0)
      },
    },
    AppSocketService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
