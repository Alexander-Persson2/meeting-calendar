import React from 'react';
import { Link } from 'react-router-dom';
import CalendarComponent from './Calendar';
import ScheduleMeetingForm from './ScheduleMeetingForm';
import MeetingList from './MeetingList';
import './Dashboard.css';

const Dashboard = ({ meetings, addMeeting }) => {
  return (
    <div className="dashboard-wrapper">
      {/* Top Navigation Bar */}
      <div className="top-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="layout-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>Dashboard</h2>
          </div>
          <ul className="sidebar-menu">
            <li><Link to="/schedule-meeting">Schedule Meeting</Link></li>
            <li><Link to="/manage-meetings">Manage Meetings</Link></li>
            <li><Link to="/users-permissions">Users & Permissions</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="card schedule-card">
            <div className="card-header blue-header">
              <h3>Schedule a New Meeting</h3>
            </div>
            <div className="card-body">
              <ScheduleMeetingForm addMeeting={addMeeting} />
            </div>
          </div>

          <div className="card meeting-list-card">
            <div className="card-header">
              <h4>List of Created Meetings</h4>
            </div>
            <div className="card-body">
              <MeetingList meetings={meetings} />
            </div>
          </div>

          <div className="calendar-section">
            <h4>Meeting Calendar</h4>
            <CalendarComponent meetings={meetings} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
