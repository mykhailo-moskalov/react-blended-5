'use client';

import { Wave } from 'react-animated-text';

import Container from '@/components/Container/Container';
import Section from '@/components/Section/Section';
import Heading from '@/components/Heading/Heading';

import css from './RatesPage.module.css';
import RatesList from '@/components/RatesList/RatesList';
import { useLatestRatesStore } from '@/lib/stores/currencyStore';
import { useEffect } from 'react';
import { latestRates } from '@/lib/service/exchangeAPI';
import Filter from '@/components/Filter/Filter';

export default function RatesPage() {
  const baseCurrency = useLatestRatesStore((state) => state.baseCurrency);
  const isError = useLatestRatesStore((state) => state.isError);
  const rates = useLatestRatesStore((state) => state.rates);
  const setRates = useLatestRatesStore((state) => state.setRates);
  const filter = useLatestRatesStore((state) => state.filter);

  useEffect(() => {
    latestRates(baseCurrency).then((rates) => setRates(rates));
  }, []);

  const filteredRates = rates
    .filter(([key]) => key !== baseCurrency && key.toLowerCase().includes(filter))
    .map(([key, value]) => ({ key, value: (1 / value).toFixed(2) }));

  return (
    <main className={css.main}>
      <Section>
        <Container>
          <Heading
            info
            bottom
            title={
              <Wave
                text={`$ $ $ Current exchange rate for 1 ${baseCurrency} $ $ $`}
                effect="fadeOut"
                effectChange={4.0}
              />
            }
          />

          <Filter />
          {filteredRates.length > 0 && <RatesList rates={filteredRates} />}

          {isError && (
            <Heading error title="Something went wrong...😐 We cannot show current rates!" />
          )}
        </Container>
      </Section>
    </main>
  );
}
