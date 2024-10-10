import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class CopyToClipBoardService {
  constructor(private message: NzMessageService) {}

  public copy(text) {
    if (!navigator.clipboard) {
      this.oldCopy(text);
      return;
    }

    navigator.clipboard.writeText(text).then(
      () => {
        this.message.create('success', `Тикер скопирован`);
      },
      (err) => {
        this.message.create('warning', `Не удалось скопировать тикер`);
      }
    );
  }

  private oldCopy(text: string) {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'success' : 'error';
      this.message.create(
        msg,
        msg ? `Тикер скопирован` : `Не удалось скопировать тикер`
      );
    } catch (err) {
      this.message.create('error', `Не удалось скопировать тикер`);
    }

    document.body.removeChild(textArea);
  }
}
