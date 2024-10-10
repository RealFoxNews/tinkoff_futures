import * as moment from 'moment';
import { IReport } from '../models/report.models';

export const etTimeToMoscow = (
  string: string,
  startDate: string
): moment.Moment | string => {
  if (string.includes('BMO')) {
    return 'До открытия ОС';
  } else if (string.includes('AMC')) {
    return 'После закрытия ОС';
  } else if (isNaN(parseFloat(string))) {
    return 'Нет данных';
  } else {
    let decimalTime = parseFloat(string.replace(':', '.'));
    if (string.includes('PM')) decimalTime += 12;
    decimalTime += 8;

    const splited = decimalTime.toString().split('.');
    let joined;
    if (!splited[1]) {
      joined = splited[0] + ':00';
    } else if (splited[1].length === 1) {
      joined = splited[0] + ':' + splited[1] + '0';
    } else {
      joined = splited[0] + ':' + splited[1];
    }

    return moment(startDate, 'DD.MM.YYYY').set({
      hours: Number(joined.split(':')[0]),
      minutes: Number(joined.split(':')[1]),
    });
  }
};

const convertTimeStringToPceudoNumber = (
  time: string | moment.Moment
): number => {
  if (!time) return Infinity;

  if (typeof time === 'string') {
    if (!time || time === 'Нет данных') return Infinity;
    if (time === 'До открытия ОС') return 0;
    if (time === 'После закрытия ОС')
      return moment().startOf('day').unix() * 1000;
  }

  if (moment.isMoment(time)) {
    return time.unix();
  }

  return Infinity;
};

export const sortByTime = (a: IReport, b: IReport) => {
  const aTime = convertTimeStringToPceudoNumber(a._time);
  const bTime = convertTimeStringToPceudoNumber(b._time);

  var aTicker = a.ticker;
  var bTicker = b.ticker;

  if (aTime == bTime) {
    return aTicker < bTicker ? -1 : aTicker > bTicker ? 1 : 0;
  } else {
    return aTime < bTime ? -1 : 1;
  }
};
