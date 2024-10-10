export interface RssData {
    rss: {
        channel: {
            titles: string;
            item: {
                title: string;
                pubDate: string;
                'ndaq:HaltDate': string;
                'ndaq:HaltTime': string;
                'ndaq:IssueSymbol': string;
                'ndaq:IssueName': string;
                'ndaq:Market': string;
                'ndaq:ReasonCode': string;
                'ndaq:PauseThresholdPrice': string;
                'ndaq:ResumptionDate': string;
                'ndaq:ResumptionQuoteTime': string;
                'ndaq:ResumptionTradeTime': string;
                description: string;
            }[];
        };
    };
}
export interface IHalts {
    ticker: string;
    code: string;
}
