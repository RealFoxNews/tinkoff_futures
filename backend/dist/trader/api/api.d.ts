import { TinkoffInvestApi } from 'tinkoff-invest-api';
import { MarketStream } from 'tinkoff-invest-api/cjs/stream/market';
import { TradesStream } from 'tinkoff-invest-api/cjs/stream/trades';
export declare class Api extends TinkoffInvestApi {
    marketStreams: MarketStream[];
    tradesStreams: TradesStream[];
    createMarketStream(): MarketStream;
    createTradesStream(): TradesStream;
}
