export interface IShortFDA {
  date: string;
  status: string;
  drugName: string;
  companies: {
    name: string;
    exchange: {
      exchange: string;
      symbol: string;
    }[];
  }[];
  notes: string;
  source_link: string;
}

export interface ListItem {
  type: 'warning' | 'success' | 'error' | 'unset';
  text: string;
  href: string;
  data: IShortFDA;
}
