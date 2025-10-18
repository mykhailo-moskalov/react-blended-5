'use client';

import { useEffect } from 'react';

import { getUserInfo } from '@/lib/service/opencagedataApi';
import { useLatestRatesStore } from '@/lib/stores/currencyStore';

export default function GeolocationChecker() {
  const { hasHydrated, baseCurrency, setBaseCurrency } = useLatestRatesStore();

  useEffect(() => {
    if (!hasHydrated || baseCurrency) return;

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const success = async ({ coords }: GeolocationPosition) => {
      const data = await getUserInfo(coords);
      // return data.results[0].annotations.currency.iso_code;
      const currency = data.results[0].annotations.currency.iso_code;
      setBaseCurrency(currency);
    };

    const error = () => {
      setBaseCurrency('USD');
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [hasHydrated, baseCurrency, setBaseCurrency]);

  return null;
}
