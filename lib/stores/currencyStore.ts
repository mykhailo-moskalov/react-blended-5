import { create } from 'zustand';

// interface RatesObj {
//   key: string;
//   value: number;
// }

type LatestRates = {
  baseCurrency: string;
  setBaseCurrency: (baseCurrency: string) => void;
  exchangeInfo: null;
  setExchangeInfo: (info: null) => void;
  isLoading: boolean;
  setIsLoading: () => void;
  isError: boolean;
  setIsError: () => void;
  rates: [string, number][];
  setRates: (rates: [string, number][]) => void;
  filter: string;
  setFilter: (filter: string) => void;
};

export const useLatestRatesStore = create<LatestRates>()((set) => ({
  baseCurrency: '',
  setBaseCurrency: (baseCurrency: string) => set(() => ({ baseCurrency })),

  exchangeInfo: null,
  setExchangeInfo: (info: null) => set(() => ({ exchangeInfo: info })),

  isLoading: false,
  setIsLoading: () => set(() => ({ isLoading: true })),

  isError: false,
  setIsError: () => set(() => ({ isError: true })),

  rates: [],
  setRates: (rates: [string, number][]) => set(() => ({ rates: rates })),

  filter: '',
  setFilter: (filter: string) => set(() => ({ filter: filter })),
}));
