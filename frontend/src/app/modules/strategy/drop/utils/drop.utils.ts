import { Share } from 'src/app/modules/shares/share.model';
import { DropSettings } from '../models/drop.models';

export const convertToFrontPersent = (value: number): number => {
    const pressision = value.toString().split('.')[1]?.length;
    const increment = Number(`1${[...Array(pressision).keys()].map((i) => 0).join('')}`);

    return (100 * increment - value * increment * 100) / increment;
};

export const convertToBackPersent = (value: number): number => {
    const pressision = value.toString().split('.')[1]?.length;
    const increment = Number(`1${[...Array(pressision).keys()].map((i) => 0).join('')}`);

    return ((100 - value) * increment) / (100 * increment);
};

export const geSharePercentValue = (share: Share, settings: DropSettings): number => {
    const custom = Array.isArray(settings.sharesSettings) && settings.sharesSettings.find((i) => i.figi === share.figi);

    return convertToFrontPersent(
        custom?.diffShares
            ? custom.diffShares
            : share.exchange.includes('FORTS_EVENING')
            ? settings.moexDiffShares
            : settings.foreignDiffShares
    );
};

export const getShareMoneyValue = (share: Share, settings: DropSettings): number => {
    const custom = Array.isArray(settings.sharesSettings) && settings.sharesSettings.find((i) => i.figi === share.figi);

    return custom?.maxMoneySize
        ? custom?.maxMoneySize
        : share.exchange.includes('FORTS_EVENING')
        ? settings.maxMOEXMoneySize
        : settings.foreignMaxMoneySize;
};

export const geShareDeltaDiffPercentValue = (share: Share, settings: DropSettings): number => {
    const custom = Array.isArray(settings.sharesSettings) && settings.sharesSettings.find((i) => i.figi === share.figi);

    return custom?.diffSharesBuy
        ? custom.diffSharesBuy
        : share.exchange.includes('FORTS_EVENING')
        ? settings.moexDiffSharesBuy
        : settings.foreignDiffSharesBuy;
};
