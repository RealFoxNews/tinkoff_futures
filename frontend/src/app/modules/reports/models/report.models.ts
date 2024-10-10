import { Moment } from 'moment';

export interface IReport {
  company: string;
  ticker: string;
  time: string;
  estimate: string;
  revest: string;
  revgrowthprint: string;
  _time?: string | Moment;
  _revgrowthprint?: number | null;
}

export interface IReports {
  [key: string]: { [key: string]: IReport };
}
