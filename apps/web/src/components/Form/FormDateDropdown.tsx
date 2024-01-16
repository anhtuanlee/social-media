'use client';

import { getDaysInMonth } from 'date-fns';
import { useEffect, useState } from 'react';

import FormInput from './FormInput';

export default function FormDateDropdown() {
  const [years, setYears] = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined);
  const [months, setMonths] = useState<number[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<number | undefined>(undefined);
  const [days, setDays] = useState<number[]>([]);
  const [selectedDay, setSelectedDay] = useState<number | undefined>(undefined);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const yearList = Array.from({ length: 10 }, (_, index) => currentYear - index);
    setYears(yearList);
  }, []);

  useEffect(() => {
    const monthList = Array.from({ length: 12 }, (_, index) => index + 1);
    setMonths(monthList);
  }, [selectedYear]);

  useEffect(() => {
    if (typeof selectedYear !== 'undefined' && typeof selectedYear !== 'undefined') {
      const daysInMonth = getDaysInMonth(new Date(selectedYear!, selectedMonth! - 1));
      const dayList = Array.from({ length: daysInMonth }, (_, index) => index + 1);
      setDays(dayList);
    }
  }, [selectedYear, selectedMonth]);

  const handleYearChange = (e: any) => {
    setSelectedYear(e.target.value);
    setSelectedMonth(undefined);
    setSelectedDay(undefined);
  };

  const handleMonthChange = (e: any) => {
    setSelectedMonth(e.target.value);
    setSelectedDay(undefined);
  };

  const handleDayChange = (e: any) => {
    setSelectedDay(e.target.value);
  };

  return (
    <div className="flex flex-row  gap-4 justify-between">
      <FormInput
        data={{
          options: years,
          name: 'year',
          onChange: handleYearChange,
          typeInput: 'select',
          value: selectedYear,
        }}
      />
      <FormInput
        data={{
          options: months,
          name: 'month',
          onChange: handleMonthChange,
          typeInput: 'select',
          value: selectedMonth,
        }}
      />
      <FormInput
        data={{
          options: days.length > 0 ? days : ['No Result'],
          name: 'date',
          onChange: handleDayChange,
          typeInput: 'select',
          disabled: !selectedYear || !selectedMonth,
          value: selectedDay,
        }}
      />
    </div>
  );
}
