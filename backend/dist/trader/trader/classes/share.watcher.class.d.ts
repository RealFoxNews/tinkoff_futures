import { BehaviorSubject } from 'rxjs';
import { Api } from 'src/trader/api/api';
import { Share } from 'tinkoff-invest-api/cjs/generated/instruments';
export declare abstract class ShareWather<T> {
    abstract watch(shares?: Share[], api?: Api): BehaviorSubject<T>;
    abstract unWatch(): void;
}
