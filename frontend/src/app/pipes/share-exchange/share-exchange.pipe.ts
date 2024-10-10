import { Pipe, PipeTransform } from '@angular/core';
import { Share } from 'src/app/modules/shares/share.model';

export const getSharesByExchange = (
  shares: Share[],
  exchange: string
): Share[] => {
  return (
    Array.isArray(shares) &&
    shares.filter((share) => share.exchange.includes(exchange))
  );
};

@Pipe({
  name: 'shareExchange',
})
export class ShareExchangePipe implements PipeTransform {
  transform(shares: Share[], exchange: string): Share[] {
    return getSharesByExchange(shares, exchange);
  }
}
