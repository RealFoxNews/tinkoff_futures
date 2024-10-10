export interface IReport {
    company: string;
    ticker: string;
    time: string;
    estimate: string;
    revest: string;
    revgrowthprint: string;
}
export interface IReports {
    [key: string]: {
        [key: string]: IReport;
    };
}
