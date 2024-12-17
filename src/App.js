import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ScheduleMeetingForm from './components/ScheduleMeetingForm';
import MeetingList from './components/MeetingList';
import './App.css';

function App() {
  const [meetings, setMeetings] = useState([]);

  const addMeeting = (meeting) => {
    setMeetings([...meetings, meeting]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard meetings={meetings} addMeeting={addMeeting} />}
        />
        <Route
          path="/schedule-meeting"
          element={<ScheduleMeetingForm addMeeting={addMeeting} />}
        />
        <Route
          path="/manage-meetings"
          element={<MeetingList meetings={meetings} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
