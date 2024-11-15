import moment from 'moment';
import { ChangeEvent, useState } from 'react';

export function useGetMonthNumber() {
  const [numberOfMonth, setNumberOfMonth] = useState(0);

  function getNumberOfMonth(e: ChangeEvent<HTMLInputElement>) {
    console.log('getNumberOfMonth');
    const { value } = e.target;
    const currentDate = moment(); // current date
    const inputDate = moment(value);
    const numberOfMonths = inputDate.diff(currentDate, 'months');
    setNumberOfMonth(numberOfMonths < 0 ? 0 : numberOfMonths);
  }

  function resetNumberOfMonth() {
    setNumberOfMonth(() => 0);
  }
  return {
    getNumberOfMonth,
    numberOfMonth,
    resetNumberOfMonth,
  };
}
