import React, { useState } from 'react';
import {
  addMonths,
  subMonths,
  format
} from 'date-fns';
import WeekHeader from './week-header';
import Calendar from './calendar';
import Agenda from './agenda';

function Nav(props) {
  return <button className="px-3 text-xs opacity-50" onClick={props.clickHandler}>{ format(props.date, 'MMM') }</button>
}

function CalendarApp() {
  const [date, setDate] = useState(new Date());
  const incrementMonth = () => setDate(addMonths(date, 1));
  const decrementMonth = () => setDate(subMonths(date, 1));
  const previousMonth = subMonths(date, 1);
  const nextMonth = addMonths(date, 1);
  return (
    <main className="flex overflow-hidden max-h-screen">
      { /* Calendar View */}
      <div className="py-5 w-84">
        <div className="pl-1 flex">
          <Nav clickHandler={decrementMonth} date={previousMonth} />
          <h1 className="text-center text-blue-500 flex-grow">{ format(date, 'MMM YYYY') }</h1>
          <Nav clickHandler={incrementMonth} date={nextMonth} />
        </div>
        <div className="calendar-container">
          <WeekHeader />
          <Calendar key={format(date, 'MMM YYYY')} date={date} />
        </div>
      </div>
      { /* Agenda View */ }
      <Agenda />
    </main>
  )
}

export default CalendarApp;