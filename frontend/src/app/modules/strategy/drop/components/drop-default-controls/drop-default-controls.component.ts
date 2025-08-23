import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DropEnabledKeys, DropSettings } from '../../models/drop.models';
import { DropService } from '../../services/drop.service';
import { convertToBackPersent, convertToFrontPersent } from '../../utils/drop.utils';

@Component({
    selector: 'app-drop-default-controls',
    templateUrl: './drop-default-controls.component.html',
    styleUrls: ['./drop-default-controls.component.scss'],
})
export class DropDefaultControlsComponent implements OnChanges {
    @Input() exchange: string;
    @Input() settings: DropSettings;

    public defaulPercentControl: FormControl = new FormControl(null, [Validators.required]);
    public defaultDiffBuyControl: FormControl = new FormControl(null, [Validators.required]);
    public defaultMoneyControl: FormControl = new FormControl(null, [Validators.required]);

    @Output() settingsChanged: EventEmitter<DropSettings> = new EventEmitter();
    constructor(private readonly dropService: DropService, private modal: NzModalService) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (this.settings && this.exchange) {
            const defaultDiff =
                this.exchange === 'forts_futures_weekend' ? this.settings.moexDiffShares : this.settings.foreignDiffShares;

            this.defaulPercentControl.setValue(convertToFrontPersent(defaultDiff));

            this.defaultDiffBuyControl.setValue(
                this.exchange === 'forts_futures_weekend' ? this.settings.moexDiffSharesBuy : this.settings.foreignDiffSharesBuy
            );

            this.defaultMoneyControl.setValue(
                this.exchange === 'forts_futures_weekend' ? this.settings.maxMOEXMoneySize : this.settings.foreignMaxMoneySize
            );
        }
    }

    onDefaulPercentChange() {
        if (this.defaulPercentControl.valid) {
            if (this.defaulPercentControl.value <= 0.2) {
                this.modal.confirm({
                    nzTitle: 'Значение процента падения ниже 0.2',
                    nzContent: 'Такой низкий уровень процента падения трудно контролируемый.  Уверен(а) в своих силах?',
                    nzOnOk: () => this.saveDefaulPercentValue(),
                    nzOnCancel: () => this.ngOnChanges(null),
                    nzOkText: 'Сохранить',
                    nzCancelText: 'Отменить',
                });
            } else {
                this.saveDefaulPercentValue();
            }
        }
    }

    saveDefaulPercentValue() {
        const value = convertToBackPersent(this.defaulPercentControl.value);

        const keyToUpdate = this.exchange === 'forts_futures_weekend' ? 'moexDiffShares' : 'foreignDiffShares';

        if (value !== this.settings[keyToUpdate]) {
            this.dropService.patchSettings({ drop: { [keyToUpdate]: value } }).subscribe((data) => {
                this.settings = data.drop;
                this.settingsChanged.emit(this.settings);
            });
        }
    }

    onDefaultMoneyChange() {
        const { value } = this.defaultMoneyControl;
        const keyToUpdate = this.exchange === 'forts_futures_weekend' ? 'maxMOEXMoneySize' : 'foreignMaxMoneySize';

        if (value !== this.settings[keyToUpdate]) {
            this.dropService.patchSettings({ drop: { [keyToUpdate]: value } }).subscribe((data) => {
                this.settings = data.drop;
                this.settingsChanged.emit(this.settings);
            });
        }
    }

    onDefaulDeltaPercentChange() {
        const { value } = this.defaultDiffBuyControl;
        const keyToUpdate = this.exchange === 'forts_futures_weekend' ? 'moexDiffSharesBuy' : 'foreignDiffSharesBuy';

        if (value !== this.settings[keyToUpdate]) {
            this.dropService.patchSettings({ drop: { [keyToUpdate]: value } }).subscribe((data) => {
                this.settings = data.drop;
                this.settingsChanged.emit(this.settings);
            });
        }
    }

    onEnabledChange(enabled: boolean) {
        this.dropService.patchSettings({ drop: { [DropEnabledKeys[this.exchange]]: enabled } }).subscribe((data) => {
            this.settings = data.drop;
        });
    }

    paramsChange(value: boolean, param: string): void {
        this.dropService.patchSettings({ drop: { [param]: value } }).subscribe((data) => {
            this.settings = data.drop;
        });
    }
}
