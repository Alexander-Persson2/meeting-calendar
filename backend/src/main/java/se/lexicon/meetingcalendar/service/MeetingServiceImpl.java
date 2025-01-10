package se.lexicon.meetingcalendar.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.lexicon.meetingcalendar.models.Meeting;
import se.lexicon.meetingcalendar.repository.MeetingRepository;

import java.util.List;
import java.util.Optional;

@Service
public class MeetingServiceImpl implements MeetingService {

    private final MeetingRepository meetingRepository;

    @Autowired
    public MeetingServiceImpl(MeetingRepository meetingRepository) {
        this.meetingRepository = meetingRepository;
    }

    @Override
    public Meeting createMeeting(Meeting meeting) {
        return meetingRepository.save(meeting);
    }

    @Override
    public List<Meeting> getAllMeetings() {
        return meetingRepository.findAll();
    }

    @Override
    public Optional<Meeting> getMeetingById(Long id) {
        return meetingRepository.findById(id);
    }

    @Override
    public List<Meeting> getMeetingsByTitle(String title) {
        return meetingRepository.findByTitleContainingIgnoreCase(title);
    }

    @Override
    public Meeting updateMeeting(Long id, Meeting meetingUpdate) {
        return meetingRepository.findById(id).map(existingMeeting -> {
            existingMeeting.setTitle(meetingUpdate.getTitle());
            existingMeeting.setDescription(meetingUpdate.getDescription());
            existingMeeting.setDateTime(meetingUpdate.getDateTime());
            existingMeeting.setParticipants(meetingUpdate.getParticipants());
            return meetingRepository.save(existingMeeting);
        }).orElseThrow(() -> new RuntimeException("Meeting not found with id: " + id));
    }


    @Override
    public void deleteMeeting(Long id) {
        try {
            System.out.println("Attempting to delete meeting with ID: " + id);  // Log the ID before deletion
            meetingRepository.deleteById(id);
            System.out.println("Meeting with ID: " + id + " deleted successfully!");  // Confirm successful deletion
        } catch (Exception e) {
            System.out.println("Error deleting meeting with ID: " + id);  // Log errors
        }
    }

}
