package se.lexicon.meetingcalendar.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.lexicon.meetingcalendar.models.Meeting;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Long> {


    // Find all meetings happening after a specific date/time
    List<Meeting> findByDateTimeAfter(LocalDateTime dateTime);

    // Find meetings by title (case-insensitive search)
    List<Meeting> findByTitleContainingIgnoreCase(String title);
}
