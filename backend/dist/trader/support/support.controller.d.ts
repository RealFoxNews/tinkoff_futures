import { ShareDividends } from '../trader/services/share.dividents';
import { ShareFda } from '../trader/services/share.fda';
import { ShareReports } from '../trader/services/share.reports';
export declare class SupportController {
    private readonly stocksReports;
    private readonly stocksFDA;
    private readonly stocksDividends;
    constructor(stocksReports: ShareReports, stocksFDA: ShareFda, stocksDividends: ShareDividends);
    reportByDate(date: string): import("rxjs").Observable<import("../trader/models/stock.reports.models").IReports>;
    fda(): import("rxjs").Observable<import("../trader/models/stock.fda.models").IShortFDA[]>;
    dividend(dateFrom: string, dateTo: string): import("rxjs").Observable<import("../trader/models/stock.dividents.models").IDividend[]>;
}
