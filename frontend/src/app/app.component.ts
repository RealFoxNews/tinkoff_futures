import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { AppSocketService } from './app-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  public api: boolean = false;
  public wallet: boolean = false;
  public sync: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private readonly socketService: AppSocketService
  ) {}

  ngOnInit(): void {
    this.socketService.socketMessages.subscribe((message) => {
      if (message?.event === 'api') {
        if (message.data?.status === 'api') this.api = message.data.alive;
        if (message.data?.status === 'wallet') this.wallet = message.data.alive;
      }

      if (!message) {
        this.api = false;
        this.wallet = false;
      }

      if (message?.event === 'sync') {
        this.sync = message.data;
        if (!this.sync) {
          this.api = false;
          this.wallet = false;
        }
      }

      this.cdr.detectChanges();
    });
  }
}
