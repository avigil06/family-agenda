import React from 'react';
import {
  startOfDay,
  endOfDay,
  differenceInMinutes,
  addHours,
  format,
} from 'date-fns';

function Time(props) {
  const currentDate = new Date();
  const endHour = endOfDay(currentDate);
  const minutesLeftInDay = differenceInMinutes(endHour, currentDate);
  const minutesInDay = 60 * 24;
  const minutesConsumed = minutesInDay - minutesLeftInDay;
  const percentComplete = minutesConsumed / minutesInDay;
  const columnHeight = 32 * 24;
  const pxOffset = 10;

  return (
    <div className="h-8 w-full border-t border-red-500 absolute" style={{top: `${columnHeight * percentComplete + pxOffset}px`}} />
  );
}

function Hour(props) {
  const className = [
    'flex-grow',
    'border-b border-grey-500',
    'relative',
  ];

  return (
    <div className="h-8 flex" >
      <p className="pr-2 text-xs opacity-50 time-block">{ format(props.hour, 'hh:mm a') }</p>
      <div className={className.join(' ')} style={{top: '-1.3rem'}}/>
    </div>
  );
}

function Agenda() {
  const currentDate = startOfDay(new Date());
  return (
    <div className="pl-5 flex-grow">
      <div>
        <h2 className="pt-5 text-blue-500">Daily Tasks</h2>
      </div>
      <div className="overflow-y-scroll max-h-screen relative">
        <Hour hour={currentDate} />
        <Hour hour={addHours(currentDate, 1) } />
        <Hour hour={addHours(currentDate, 2) } />
        <Hour hour={addHours(currentDate, 3) } />
        <Hour hour={addHours(currentDate, 4) } />
        <Hour hour={addHours(currentDate, 5) } />
        <Hour hour={addHours(currentDate, 6) } />
        <Hour hour={addHours(currentDate, 7) } />
        <Hour hour={addHours(currentDate, 8) } />
        <Hour hour={addHours(currentDate, 9) } />
        <Hour hour={addHours(currentDate, 10) } />
        <Hour hour={addHours(currentDate, 11) } />
        <Hour hour={addHours(currentDate, 12) } />
        <Hour hour={addHours(currentDate, 13) } />
        <Hour hour={addHours(currentDate, 14) } />
        <Hour hour={addHours(currentDate, 15) } />
        <Hour hour={addHours(currentDate, 16) } />
        <Hour hour={addHours(currentDate, 17) } />
        <Hour hour={addHours(currentDate, 18) } />
        <Hour hour={addHours(currentDate, 19) } />
        <Hour hour={addHours(currentDate, 20) } />
        <Hour hour={addHours(currentDate, 21) } />
        <Hour hour={addHours(currentDate, 22) } />
        <Hour hour={addHours(currentDate, 23) } />
        <Hour hour={addHours(currentDate, 24) } />
        <div className="h-8" />
        <Time />
      </div>
    </div>
  );
}

export default Agenda;