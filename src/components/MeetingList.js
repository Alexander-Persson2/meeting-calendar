import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MeetingList.css";

const API_URL = "http://localhost:8080/api/meetings";

const MeetingList = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    fetchMeetings();
  }, []);

  // Function to fetch all meetings from the backend
  const fetchMeetings = async () => {
    try {
      const response = await axios.get(API_URL);
      setMeetings(response.data);
    } catch (error) {
      console.error("Error fetching meetings", error);
    }
  };

  // Function to delete a meeting by ID
  const deleteMeeting = async (id) => {
    try {
      console.log("Attempting to delete meeting with ID:", id);
      await axios.delete(`${API_URL}/${id}`);
      console.log("Meeting deleted successfully");
      // After deletion, re-fetch the meetings to update the list
      fetchMeetings();
    } catch (error) {
      console.error("Error deleting meeting", error);
    }
  };

  return (
    <div className="meeting-list">
      <h2>Meetings</h2>
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
              <tr key={meeting.id || index}> {/* Ensure unique key */}
                <td>{index + 1}</td>
                <td>{meeting.title}</td>
                <td>{meeting.dateTime ? meeting.dateTime.split("T")[0] : "N/A"}</td>
                <td>{meeting.dateTime ? meeting.dateTime.split("T")[1] : "N/A"}</td>
                <td>{meeting.level || "N/A"}</td>
                <td>
                  <button className="edit-btn" title="Edit">✏️</button>
                  <button
                    className="delete-btn"
                    title="Delete"
                    onClick={() => {
                      console.log("Clicked Delete for Meeting ID:", meeting.id);
                      console.log("Extracted ID:", meeting.id);
                      deleteMeeting(meeting.id);
                    }}
                  >
                    🗑️
                  </button>
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
