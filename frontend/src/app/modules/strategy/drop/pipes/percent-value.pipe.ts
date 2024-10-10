import { Pipe, PipeTransform } from '@angular/core';
import { Share } from 'src/app/modules/shares/share.model';
import { DropSettings } from '../models/drop.models';
import { geSharePercentValue } from '../utils/drop.utils';

@Pipe({
    name: 'percentValue',
})
export class PercentValuePipe implements PipeTransform {
    transform(share: Share, settings: DropSettings): number {
        return geSharePercentValue(share, settings);
    }
}
