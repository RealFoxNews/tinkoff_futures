import { Pipe, PipeTransform } from '@angular/core';
import { Share } from 'src/app/modules/shares/share.model';
import { DropSettings } from '../models/drop.models';

@Pipe({
    name: 'shareIsExcept',
})
export class ShareIsExceptPipe implements PipeTransform {
    transform(share: Share, settings: DropSettings): boolean {
        return !settings.except.find((i) => i === share.ticker);
    }
}
