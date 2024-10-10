import { Future } from 'tinkoff-invest-api/cjs/generated/instruments';
import { DropParameters } from '../models/base.config';
import { IDividend } from '../trader/models/stock.dividents.models';
import { IShortFDA } from '../trader/models/stock.fda.models';
import { IReports } from '../trader/models/stock.reports.models';
export declare const excludeByExchange: (share: Future, settings: DropParameters) => boolean;
export declare const excludeByList: (share: Future, excludeList: string[]) => boolean;
export declare const excludeByHealth: (share: Future, settings: DropParameters) => boolean;
export declare const excludeByFDA: (share: Future, shareFDA: IShortFDA[]) => boolean;
export declare const excludeByReports: (share: Future, reports: IReports) => boolean;
export declare const excludeByHalts: (share: Future, haltSet: Set<string>) => boolean;
export declare const excludeByDividends: (share: Future, dividents: IDividend[]) => boolean;
