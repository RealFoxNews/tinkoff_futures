import { Pipe, PipeTransform } from '@angular/core';
import { DropEnabledKeys, DropSettings } from '../models/drop.models';

@Pipe({
    name: 'isDropEnabled',
})
export class IsDropEnabledPipe implements PipeTransform {
    transform(settings: DropSettings, exchange: string): boolean {
        return settings?.[DropEnabledKeys[exchange]];
    }
}
