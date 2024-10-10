import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { switchMap } from 'rxjs/operators';
import { Share } from 'src/app/modules/shares/share.model';
import { DropSettings, SettingsDropResponse, SharesSetting } from '../../models/drop.models';
import { DropService } from '../../services/drop.service';

@Component({
    selector: 'app-drop',
    templateUrl: './drop.component.html',
    styleUrls: ['./drop.component.scss'],
})
export class DropComponent implements OnInit {
    public shares: Share[];
    public settings: DropSettings;
    public enabledControl: FormControl = new FormControl();

    constructor(
        private readonly dropService: DropService,
        private cdr: ChangeDetectorRef,
        private readonly message: NzMessageService
    ) {}

    ngOnInit(): void {
        this.getSettings();
    }

    getSettings() {
        this.dropService
            .getSettings()
            .pipe(
                switchMap((data: SettingsDropResponse) => {
                    this.settings = data.drop;
                    return this.dropService.getShares();
                })
            )
            .subscribe((data: Share[]) => {
                this.shares = data;
                this.cdr.detectChanges();
            });
    }

    patchSharesSettings(sharesSettings: Array<SharesSetting>): void {
        this.patchSettings({ sharesSettings });
    }

    patchExceptSettings(except: Array<string>): void {
        this.patchSettings({ except });
    }

    onEnabledChange(enabled: boolean): void {
        this.patchSettings({ enabled });
    }

    patchSettings(drop: Partial<DropSettings>) {
        this.dropService
            .patchSettings({
                drop,
            })
            .subscribe(
                (data) => {
                    this.settings = data.drop;
                    this.cdr.detectChanges();
                },
                () => {
                    this.message.error('Не удалось сохранить');
                    this.getSettings();
                }
            );
    }
}
