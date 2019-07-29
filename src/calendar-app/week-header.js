import React from 'react';

function WeekTitle(props) {
  return <div className="w-1/6 text-center text-xs text-blue-800 opacity-50 font-bold capitalize opacity-75">{ props.title }</div>
}

function WeekHeader () {
  const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  return (
    <div className="week-header flex mt-2">
      { daysOfWeek.map(d => <WeekTitle key={d} title={d} />) }
    </div>
  )
}

export default WeekHeader;