import { Pipe, PipeTransform } from '@angular/core';
import { Share } from 'src/app/modules/shares/share.model';
import { DropSettings } from '../models/drop.models';
import { geShareDeltaDiffPercentValue } from '../utils/drop.utils';

@Pipe({
    name: 'deltaDiffValue',
})
export class DeltaDiffValuePipe implements PipeTransform {
    transform(share: Share, settings: DropSettings): number {
        return geShareDeltaDiffPercentValue(share, settings);
    }
}
