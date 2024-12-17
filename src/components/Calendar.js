import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

const CalendarComponent = ({ meetings }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const hasMeetingOnDate = (calendarDate) => {
    // Extract local year, month, and day (no timezone conversion)
    const year = calendarDate.getFullYear();
    const month = String(calendarDate.getMonth() + 1).padStart(2, '0');
    const day = String(calendarDate.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    return meetings.some(meeting => meeting.date === dateString);
  };

  return (
    <div>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName={({ date: tileDate, view }) => {
          // Only highlight if in month view and there's a meeting on that date
          if (view === 'month' && hasMeetingOnDate(tileDate)) {
            return 'meeting-day';
          }
          return null;
        }}
      />
      <p style={{ marginTop: '10px', fontSize: '14px' }}>
        Selected Date: {date.toDateString()}
      </p>
    </div>
  );
};

export default CalendarComponent;
