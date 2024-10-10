import { BehaviorSubject } from 'rxjs';
import { Api } from 'src/trader/api/api';
import { Share } from 'tinkoff-invest-api/cjs/generated/instruments';
import { ShareWather } from '../classes/share.watcher.class';
import { IShareClose } from '../models/share.close.models';
export declare class ShareClose extends ShareWather<IShareClose[]> {
    private cron;
    private sub;
    watch(shares: Share[], api: Api): BehaviorSubject<IShareClose[]>;
    unWatch(): void;
}
