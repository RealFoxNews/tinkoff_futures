import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment',
})
export class MomentPipe implements PipeTransform {
  transform(
    value: Date | moment.Moment | unknown,
    dateFormat: string,
    fromFormat?: string
  ): any {
    const date = moment(value, fromFormat);
    return date.isValid() ? date.format(dateFormat) : value;
  }
}
