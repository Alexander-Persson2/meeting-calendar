import React from 'react';
import './MeetingList.css';

const MeetingList = ({ meetings }) => {
  return (
    <div className="meeting-list">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Meeting Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {meetings.length === 0 ? (
            <tr>
              <td colSpan="6">No meetings created yet.</td>
            </tr>
          ) : (
            meetings.map((meeting, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{meeting.title}</td>
                <td>{meeting.date}</td>
                <td>{meeting.time}</td>
                <td>{meeting.level}</td>
                <td>
                  <button className="edit-btn" title="Edit">&#9998;</button>
                  <button className="delete-btn" title="Delete">&#128465;</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MeetingList;
