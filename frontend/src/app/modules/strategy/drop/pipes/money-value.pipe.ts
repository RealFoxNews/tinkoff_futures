import { Pipe, PipeTransform } from '@angular/core';
import { Share } from 'src/app/modules/shares/share.model';
import { DropSettings } from '../models/drop.models';
import { getShareMoneyValue } from '../utils/drop.utils';

@Pipe({
    name: 'moneyValue',
})
export class MoneyValuePipe implements PipeTransform {
    transform(share: Share, settings: DropSettings): number {
        return getShareMoneyValue(share, settings);
    }
}
