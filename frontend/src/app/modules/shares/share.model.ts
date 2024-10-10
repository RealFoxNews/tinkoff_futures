/** Котировка - денежная сумма без указания валюты */
export interface Quotation {
  /** целая часть суммы, может быть отрицательным числом */
  units: number;
  /** дробная часть суммы, может быть отрицательным числом */
  nano: number;
}

/** Объект передачи информации об акции. */
export interface Share {
  active: boolean;

  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код (секция торгов). */
  classCode: string;
  /** Isin-идентификатор инструмента. */
  isin: string;
  /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
  lot: number;
  /** Валюта расчётов. */
  currency: string;
  /** Коэффициент ставки риска длинной позиции по инструменту. */
  klong?: Quotation;
  /** Коэффициент ставки риска короткой позиции по инструменту. */
  kshort?: Quotation;
  /** Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlong?: Quotation;
  /** Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshort?: Quotation;
  /** Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlongMin?: Quotation;
  /** Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshortMin?: Quotation;
  /** Признак доступности для операций в шорт. */
  shortEnabledFlag: boolean;
  /** Название инструмента. */
  name: string;
  /** Торговая площадка. */
  exchange: string;
  /** Дата IPO акции в часовом поясе UTC. */
  ipoDate?: Date;
  /** Размер выпуска. */
  issueSize: number;
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRisk: string;
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRiskName: string;
  /** Сектор экономики. */
  sector: string;
  /** Плановый размер выпуска. */
  issueSizePlan: number;
  /** Номинал. */
  //   nominal?: MoneyValue;
  /** Текущий режим торгов инструмента. */
  //   tradingStatus: SecurityTradingStatus;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности для покупки. */
  buyAvailableFlag: boolean;
  /** Признак доступности для продажи. */
  sellAvailableFlag: boolean;
  /** Признак наличия дивидендной доходности. */
  divYieldFlag: boolean;
  /** Тип акции. Возможные значения: [ShareType](https://tinkoff.github.io/investAPI/instruments#sharetype) */
  //   shareType: ShareType;
  /** Шаг цены. */
  minPriceIncrement?: Quotation;
  /** Признак доступности торгов через API. */
  apiTradeAvailableFlag: boolean;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Реальная площадка исполнения расчётов. */
  //   realExchange: RealExchange;
  /** Уникальный идентификатор позиции инструмента. */
  positionUid: string;
  /** Признак доступности для ИИС. */
  forIisFlag: boolean;
  /** Дата первой минутной свечи. */
  first1minCandleDate?: Date;
  /** Дата первой дневной свечи. */
  first1dayCandleDate?: Date;
}
