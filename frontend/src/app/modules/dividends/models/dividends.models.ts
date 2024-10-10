export interface IDividend {
  companyName: string;
  symbol: string;
  dividend_Ex_Date: string; // дата,
  payment_Date: string;
  record_Date: string;
  dividend_Rate: number;
  indicated_Annual_Dividend: number;
  announcement_Date: string;
}
