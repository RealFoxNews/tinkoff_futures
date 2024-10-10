import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';
import { Share } from 'src/app/modules/shares/share.model';
import { DropSettings, SharesSetting } from '../../models/drop.models';
import {
    convertToBackPersent,
    geShareDeltaDiffPercentValue,
    geSharePercentValue,
    getShareMoneyValue
} from '../../utils/drop.utils';

@Component({
    selector: 'drop-shares-table',
    templateUrl: './drop-shares-table.component.html',
    styleUrls: ['./drop-shares-table.component.scss'],
})
export class DropSharesTableComponent implements OnInit {
    @ViewChild('percentInput', { read: ElementRef }) percentInput: ElementRef;
    @ViewChild('moneyInput', { read: ElementRef }) moneyInput: ElementRef;
    @ViewChild('deltaInput', { read: ElementRef }) deltaInput: ElementRef;

    _shares: Share[];
    @Input() set shares(data: Share[]) {
        this._shares = data;
        this.sharesToDisplay = data.sort((a, b) => {
            const x = a.ticker;
            const y = b.ticker;
            return x < y ? -1 : x > y ? 1 : 0;
        });
    }
    get shares(): Share[] {
        return this._shares;
    }

    public tikerFilter: string;
    public sharesToDisplay: Share[] = [];

    @Input() exchange: string;
    @Input() settings: DropSettings;

    public trackByFigi = (i: number, share: Share) => share.figi;

    public percentEdit: string = null;
    public moneyEdit: string = null;
    public deltaBuyDiffEdit: string = null;

    public width: string = '100%';
    public height: string = '100%';

    public percentControl: FormControl = new FormControl(null, [Validators.required]);
    public moneyControl: FormControl = new FormControl(null, [Validators.required]);
    public deltaBuyDiffControl: FormControl = new FormControl(null, [Validators.required]);

    @Output() sharesSettingsChanged: EventEmitter<SharesSetting[]> = new EventEmitter();
    @Output() exceptSettingsChanged: EventEmitter<string[]> = new EventEmitter();

    constructor(private cdr: ChangeDetectorRef) {}

    public ngOnInit(): void {
        this.sharesToDisplay = this.shares;
    }

    public onResize(event: { width: number; height: number }) {
        this.width = event.width - 40 + 'px';
        this.height = event.height - 68 + 'px';
        window.dispatchEvent(new Event('resize'));
    }

    public getShareDiffDropSettings(share: Share): number {
        return geSharePercentValue(share, this.settings);
    }

    public getShareMaxMoneyDropSettings(share: Share): number {
        return getShareMoneyValue(share, this.settings);
    }

    public getShareDiffDropButSettings(share: Share): number {
        return geShareDeltaDiffPercentValue(share, this.settings);
    }

    public startEditPercent(share: Share): void {
        this.percentEdit = share.figi;
        this.percentControl.setValue(this.getShareDiffDropSettings(share));
        this.cdr.detectChanges();

        const input = this.percentInput.nativeElement;
        input.focus();

        fromEvent(input, 'blur')
            .pipe(take(1))
            .subscribe(() => this.onPercentBlur());
    }

    private onPercentBlur() {
        const value = convertToBackPersent(this.percentControl.value);

        const exist =
            Array.isArray(this.settings.sharesSettings) &&
            this.settings.sharesSettings.find((share) => share.figi === this.percentEdit);

        const sharesSettings: SharesSetting[] = exist
            ? this.settings.sharesSettings.map((i) => (i.figi === this.percentEdit ? { ...i, diffShares: value } : i))
            : [...(this.settings?.sharesSettings || []), { figi: this.percentEdit, diffShares: value }];

        this.sharesSettingsChanged.emit(sharesSettings);

        this.percentEdit = null;
        this.percentControl.setValue(null);
    }

    public startEditMoney(share: Share): void {
        this.moneyEdit = share.figi;
        this.moneyControl.setValue(this.getShareMaxMoneyDropSettings(share));
        this.cdr.detectChanges();

        const input = this.moneyInput.nativeElement;
        input.focus();

        fromEvent(input, 'blur')
            .pipe(take(1))
            .subscribe(() => this.onMoneyBlur());
    }

    private onMoneyBlur() {
        const { value } = this.moneyControl;

        const exist =
            Array.isArray(this.settings.sharesSettings) &&
            this.settings.sharesSettings.find((share) => share.figi === this.moneyEdit);

        const sharesSettings: SharesSetting[] = exist
            ? this.settings.sharesSettings.map((i) => (i.figi === this.moneyEdit ? { ...i, maxMoneySize: value } : i))
            : [...(this.settings?.sharesSettings || []), { figi: this.moneyEdit, maxMoneySize: value }];

        this.sharesSettingsChanged.emit(sharesSettings);

        this.moneyEdit = null;
        this.moneyControl.setValue(null);
    }

    clear(share: Share) {
        this.sharesSettingsChanged.emit(this.settings?.sharesSettings.filter((i) => i.figi !== share.figi));
    }

    toggleShareExcept(usage: boolean, share: Share) {
        this.exceptSettingsChanged.emit(
            usage
                ? [...(this.settings?.except || []).filter((i) => i !== share.ticker)]
                : [...(this.settings?.except || []), share.ticker]
        );
    }

    public startEditDeltaDiffBuy(share: Share): void {
        this.deltaBuyDiffEdit = share.figi;
        this.deltaBuyDiffControl.setValue(this.getShareDiffDropButSettings(share));
        this.cdr.detectChanges();

        const input = this.deltaInput.nativeElement;
        input.focus();

        fromEvent(input, 'blur')
            .pipe(take(1))
            .subscribe(() => this.onDeltaDiffBlur());
    }

    private onDeltaDiffBlur() {
        const { value } = this.deltaBuyDiffControl;

        const exist =
            Array.isArray(this.settings.sharesSettings) &&
            this.settings.sharesSettings.find((share) => share.figi === this.deltaBuyDiffEdit);

        const sharesSettings: SharesSetting[] = exist
            ? this.settings.sharesSettings.map((i) =>
                  i.figi === this.deltaBuyDiffEdit ? { ...i, diffSharesBuy: value } : i
              )
            : [...(this.settings?.sharesSettings || []), { figi: this.deltaBuyDiffEdit, diffSharesBuy: value }];

        this.sharesSettingsChanged.emit(sharesSettings);

        this.deltaBuyDiffEdit = null;
        this.deltaBuyDiffControl.setValue(null);
    }

    onTikerFilterChange() {
        this.sharesToDisplay = (
            this.tikerFilter && this.tikerFilter.length > 0
                ? this.shares.filter(
                      (i) =>
                          i.ticker.toLowerCase().includes(this.tikerFilter.toLowerCase()) ||
                          i.name?.toLowerCase().includes(this.tikerFilter.toLowerCase())
                  )
                : this.shares
        ).sort((a, b) => {
            const x = a.ticker;
            const y = b.ticker;
            return x < y ? -1 : x > y ? 1 : 0;
        });
    }

    onTikerFilterClear() {
        this.tikerFilter = null;
        this.onTikerFilterChange();
    }
}
