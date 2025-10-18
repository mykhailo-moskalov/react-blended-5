import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
};

export const useLatestRatesStore = create<LatestRates>()(
  persist(
    (set) => ({
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
  
      hasHydrated: false,
      setHasHydrated: (state: boolean) => set({ hasHydrated: state }),
    }),
    {
      name: 'currency-storage',
      partialize: (state) => ({ baseCurrency: state.baseCurrency }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
  );
