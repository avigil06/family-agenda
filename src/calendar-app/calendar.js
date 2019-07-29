import React from 'react';
import {
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  addDays,
  addWeeks,
  format,
} from 'date-fns';

function Day(props) {
  const currentDate = new Date();
  const className = [
    'text-center',
    'w-1/6',
    'py-3',
  ];

  if (isSameDay(props.day, currentDate)) {
    className.push('bg-blue-800');
    className.push('text-white');
    className.push('rounded-lg');
  }

  if (!isSameMonth(props.day, currentDate)) {
    className.push('opacity-25');
  }

  return <div className={className.join(' ')}>{ props.day && format(props.day, 'D') }</div>;
}

function Week(props) {
  return (
    <div className="flex">
      <Day day={props.firstOfWeek} />
      <Day day={addDays(props.firstOfWeek, 1)} />
      <Day day={addDays(props.firstOfWeek, 2)} />
      <Day day={addDays(props.firstOfWeek, 3)} />
      <Day day={addDays(props.firstOfWeek, 4)} />
      <Day day={addDays(props.firstOfWeek, 5)} />
      <Day day={addDays(props.firstOfWeek, 6)} />
    </div>
  );
}

function Calendar(props) {
  const firstOfMonth = startOfMonth(props.date);
  const startOfFirstWeek = startOfWeek(firstOfMonth);

  return (
    <div className="calendar">
      <Week firstOfWeek={startOfFirstWeek} />
      <Week firstOfWeek={addWeeks(startOfFirstWeek, 1)} />
      <Week firstOfWeek={addWeeks(startOfFirstWeek, 2)} />
      <Week firstOfWeek={addWeeks(startOfFirstWeek, 3)} />
      <Week firstOfWeek={addWeeks(startOfFirstWeek, 4)} />
      <Week firstOfWeek={addWeeks(startOfFirstWeek, 5)} />
    </div>
  );
}

export default Calendar;