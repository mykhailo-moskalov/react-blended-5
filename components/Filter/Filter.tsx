import { useLatestRatesStore } from '@/lib/stores/currencyStore';
import styles from './Filter.module.css';
import { ChangeEvent } from 'react';

export default function Filter() {
  const filter = useLatestRatesStore((state) => state.filter);
  const setFilter = useLatestRatesStore((state) => state.setFilter);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFilter(e.target.value.toLocaleLowerCase());

  return (
    <input
      type="text"
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
      value={filter}
      onChange={handleChange}
    />
  );
}
