import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface SocketMessage {
  event: string;
  data?: any;
}

@Injectable()
export class AppSocketService {
  public socketMessages: Subject<SocketMessage> = new Subject();
  private timerId: any;

  constructor() {
    this.openSocket();
  }

  openSocket() {
    console.log('openSocker entered');
    const socket = new WebSocket(environment.socketUrl);
    this.socketMessages.next({ event: 'sync', data: false });

    socket.onopen = () => {
      this.timerId && clearInterval(this.timerId);

      socket.send(JSON.stringify({ event: 'api' }));

      socket.onmessage = (message) => {
        this.socketMessages.next(JSON.parse(message.data));
      };

      socket.onclose = (event) => {
        console.error('Сокет закрыт:', event);
        this.socketMessages.next({ event: 'sync', data: false });

        // Удалите или замените следующую строку, так как метод removeAllListeners() недоступен
        // socket.removeAllListeners();

        this.timerId = setInterval(() => {
          this.openSocket();
        }, 3000);
      };

      this.socketMessages.next({ event: 'sync', data: true });
    };

    socket.onerror = (err: any) => {
      console.error('Ошибка сокета:', err);

      if (socket.readyState === 3) {
        this.socketMessages.next({ event: 'sync', data: false });
        this.timerId && clearInterval(this.timerId);

        // Удалите или замените следующую строку
        // socket.removeAllListeners();

        this.timerId = setInterval(() => {
          this.openSocket();
        }, 5000);
      }
    };
  }
}
