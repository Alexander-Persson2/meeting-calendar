package se.lexicon.meetingcalendar.service;

import se.lexicon.meetingcalendar.models.Meeting;

import java.util.List;
import java.util.Optional;

public interface MeetingService {

    Meeting createMeeting(Meeting meeting);  // Create a new meeting

    List<Meeting> getAllMeetings();  // Retrieve all meetings

    Optional<Meeting> getMeetingById(Long id);  // Retrieve a meeting by ID

    List<Meeting> getMeetingsByTitle(String title);  // Search meetings by title

    Meeting updateMeeting(Long id, Meeting updatedMeeting);  // Update an existing meeting

    void deleteMeeting(Long id);  // Delete a meeting
}
