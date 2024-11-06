import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Share } from 'tinkoff-invest-api/cjs/generated/instruments';
import { ShareWather } from '../classes/share.watcher.class';
import { IHalts, RssData } from '../models/stock.halts.models';
export declare class ShareHalts extends ShareWather<Set<string>> {
    private readonly botId;
    private readonly chatId;
    constructor();
    nasdaqHalts: Subject<IHalts>;
    private haltsSet;
    private shares;
    private init;
    private cron;
    private sub;
    private interval;
    watch(shares?: Share[]): BehaviorSubject<Set<string>>;
    unWatch(): void;
    getHalts(): Observable<RssData>;
    processesStratagy(data: RssData): void;
    sendMessageOnHalts: (exchange: string, code: string, stockTiker?: string) => void;
}
