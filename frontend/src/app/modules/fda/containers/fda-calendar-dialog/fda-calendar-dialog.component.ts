import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CopyToClipBoardService } from 'src/app/services/copy-to-clip-board.service';
import { ListItem } from '../../models/fda.models';

@Component({
  selector: 'app-fda-calendar-dialog',
  templateUrl: './fda-calendar-dialog.component.html',
  styleUrls: ['./fda-calendar-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FdaCalendarDialogComponent {
  @Input() dataToDisplay: ListItem[];

  constructor(private readonly copyService: CopyToClipBoardService) {}

  public copyTiker(tiker: string) {
    this.copyService.copy(tiker);
  }
}
