import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SettingsService } from '../../services/settings.service';

@Component({
    selector: 'app-settings-container',
    templateUrl: './settings-container.component.html',
    styleUrls: ['./settings-container.component.scss'],
})
export class SettingsContainerComponent implements OnInit {
    public form: FormGroup;
    public accounts: { id: string; name: string }[];
    public step: number = 0;

    constructor(
        fb: FormBuilder,
        private readonly service: SettingsService,
        private readonly cdg: ChangeDetectorRef,
        private readonly message: NzMessageService
    ) {
        this.form = fb.group({
            apiKey: [null, Validators.required],
            accountId: [null, Validators.required],
            botId: [null, Validators.required],
            chatId: [null, Validators.required],
        });
    }

    ngOnInit(): void {
        this.service.getSettings().subscribe((data) => {
            this.form.patchValue(data.settings);
            if (data.settings.apiKey) this.step++;
            if (data.settings.accountId) this.step++;
            if (data.settings.botId && data.settings.chatId) this.step++;
            this.cdg.detectChanges();
        });
        this.form.valueChanges.subscribe((value) => {
            if (!this.accounts && value.apiKey) {
                this.service.getAvailableAccounts().subscribe((data) => {
                    this.accounts = data;
                });
            }
        });
    }

    public pre() {
        this.step--;
    }

    save() {
        console.log('Метод save() вызван, текущий шаг:', this.step);

        if (this.step === 0) {
            console.log('Шаг 0: Сохранение apiKey');
            const keyControl = this.form.get('apiKey');
            if (keyControl.valid && typeof keyControl.value === 'string') {
                const apiKey = keyControl.value.trim();
                console.log('Валидный apiKey:', apiKey);
                this.service
                    .patchSettings({
                        settings: { apiKey: apiKey },
                    })
                    .subscribe(
                        (data) => {
                            console.log('apiKey успешно сохранен:', data);
                            this.step++;
                            this.cdg.detectChanges();

                            this.service.getAvailableAccounts().subscribe((data) => {
                                this.accounts = data;
                                console.log('Доступные аккаунты получены:', this.accounts);
                            });
                        },
                        (error) => {
                            console.error('Ошибка при сохранении apiKey:', error);
                            this.message.error('Не удалось сохранить токен');
                        }
                    );
            } else {
                console.warn('apiKey не валиден');
            }
        } else if (this.step === 1) {
            console.log('Шаг 1: Сохранение accountId');
            const keyControl = this.form.get('accountId');
            if (keyControl.valid) {
                const accountId = keyControl.value;
                console.log('Валидный accountId:', accountId);
                this.service
                    .patchSettings({
                        settings: { accountId: accountId },
                    })
                    .subscribe(
                        (data) => {
                            console.log('accountId успешно сохранен:', data);
                            this.step++;
                            this.cdg.detectChanges();
                        },
                        (error) => {
                            console.error('Ошибка при сохранении accountId:', error);
                            this.message.error('Не удалось сохранить портфель');
                        }
                    );
            } else {
                console.warn('accountId не валиден');
            }
        } else if (this.step === 2) {
            console.log('Шаг 2: Сохранение botId и chatId');
            const botIdControl = this.form.get('botId');
            const chatIdControl = this.form.get('chatId');
            if (botIdControl.valid && chatIdControl.valid) {
                const botId = botIdControl.value;
                const chatId = chatIdControl.value;
                console.log('Валидные botId и chatId:', { botId, chatId });
                this.service
                    .patchSettings({
                        settings: { botId: botId, chatId: chatId },
                    })
                    .subscribe(
                        (data) => {
                            console.log('botId и chatId успешно сохранены:', data);
                            this.step++;
                            this.cdg.detectChanges();
                        },
                        (error) => {
                            console.error('Ошибка при сохранении botId и chatId:', error);
                            this.message.error('Не удалось сохранить настройки бота');
                        }
                    );
            } else {
                console.warn('botId или chatId не валидны');
            }
        }
    }

    clearData() {
        this.service
            .patchSettings({
                settings: { apiKey: null, accountId: null, botId: null, chatId: null },
            })
            .subscribe((data) => {
                this.step = 0;
                this.form.patchValue({ apiKey: null, accountId: null, botId: null, chatId: null });
                this.cdg.detectChanges();
            });
    }
}
