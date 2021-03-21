import { useContext } from 'react'
import { HelloContext } from '../context/context'
import styles from '../styles/Home.module.css'
import { format } from 'date-fns';
import { DayPicker, useInput } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function SelectDate() {
    const { addBirthday } = useContext(HelloContext)
  // Props to pass to `useInput`
  const options = {
    // Select today as default
    defaultSelected: new Date(1999, 12, 31),
    // Limit the valid dates
    fromYear: 1900,
    toYear: 2022,
    format: 'PP',
    // Make the selection mandatory.
    required: true
  };
  const input = useInput(options);

  const footer = (
    <form className={styles.dateInput} onSubmit={(e) => addBirthday(e)}>
      <input name='birthday' id='birthday'
        {...input.fieldProps}
        placeholder={format(new Date(1999, 12, 31), options.format)}
      />
      <br/>
      <button>Submit</button>
    </form>
  );
  return (
    <>
      <p>Type a day or pick from the calendar.</p>
      <DayPicker className={styles.calendar} {...input.dayPickerProps} showWeekNumber footer={footer} />
    </>
  );
}