import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dividendsDate',
})
export class DividendsDatePipe implements PipeTransform {
  transform(date: string): unknown {
    const targetDate = moment(date).subtract(1, 'day');
    const weekDay = targetDate.isoWeekday();

    if (weekDay === 6) targetDate.subtract(1, 'days');
    if (weekDay === 7) targetDate.subtract(2, 'days');

    return targetDate.format('DD.MM.YYYY');
  }
}
