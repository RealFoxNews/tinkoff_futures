import { Pipe, PipeTransform } from '@angular/core';
import { Share } from 'src/app/modules/shares/share.model';
import { DropSettings } from '../models/drop.models';

@Pipe({
    name: 'shareHasCutomSettings',
})
export class ShareHasCutomSettingsPipe implements PipeTransform {
    transform(share: Share, settings: DropSettings): boolean {
        return Array.isArray(settings.sharesSettings) && !!settings.sharesSettings.find((i) => i.figi === share.figi);
    }
}
