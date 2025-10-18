import Select, { SingleValue } from 'react-select';

import symbols from './symbols.json';

import './ReactSelect.css';
import styles from './SelectRates.module.css';

interface OptionType{
  label: string,
  value: string,
};

interface SelectRatesProps {
  baseCurrency: string,
  setBaseCurrency: (currency: string) => void,
}

export default function SelectRates({ baseCurrency, setBaseCurrency }: SelectRatesProps) {
  const handleChange = (selectedOption: SingleValue<OptionType>) => {
    if (selectedOption) {
  setBaseCurrency(selectedOption.value)
    };
  };

  return (
    <div className={styles.box}>
      <p className={styles.text}>Your base currency:&nbsp;</p>
      {/* <Select className={styles.select} classNamePrefix="react-select" isSearchable /> */}
      <Select
        className={styles.select}
        classNamePrefix="react-select"
        value={{
          label: baseCurrency,
          value: baseCurrency,
        }}
        options={symbols}
        isSearchable
        onChange={handleChange}
      />
    </div>
  );
}
