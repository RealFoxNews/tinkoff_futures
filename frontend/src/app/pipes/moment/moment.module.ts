import {} from '@angular/common';
import { NgModule } from '@angular/core';
import { MomentPipe } from './moment.pipe';

@NgModule({
  declarations: [MomentPipe],
  exports: [MomentPipe],
})
export class MomentModule {}
