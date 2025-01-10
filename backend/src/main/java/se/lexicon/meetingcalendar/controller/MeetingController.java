package se.lexicon.meetingcalendar.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.lexicon.meetingcalendar.models.Meeting;
import se.lexicon.meetingcalendar.service.MeetingService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/meetings")
public class MeetingController {

    private final MeetingService meetingService;

    @Autowired
    public MeetingController(final MeetingService meetingService) {
        this.meetingService = meetingService;
    }

    // ✅ 1. Create a new Meeting
    @PostMapping
    public ResponseEntity<Meeting> createMeeting(@RequestBody Meeting meeting) {
        return ResponseEntity.ok(meetingService.createMeeting(meeting));
    }

    // ✅ 2. Get all Meetings
    @GetMapping
    public ResponseEntity<List<Meeting>> getAllMeetings() {
        return ResponseEntity.ok(meetingService.getAllMeetings());
    }

    // ✅ 3. Get a Meeting by ID
    @GetMapping("/{id}")
    public ResponseEntity<Meeting> getMeetingById(@PathVariable Long id) {
        Optional<Meeting> meeting = meetingService.getMeetingById(id);
        return meeting.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // ✅ 4. Search Meetings by Title (Optional)
    @GetMapping("/search")
    public ResponseEntity<List<Meeting>> getMeetingsByTitle(@RequestParam String title) {
        return ResponseEntity.ok(meetingService.getMeetingsByTitle(title));
    }

    // ✅ 5. Update a Meeting
    @PutMapping("/{id}")
    public ResponseEntity<Meeting> updateMeeting(@PathVariable Long id, @RequestBody Meeting updatedMeeting) {
        return ResponseEntity.ok(meetingService.updateMeeting(id, updatedMeeting));
    }

    // ✅ 6. Delete a Meeting
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMeeting(@PathVariable Long id) {
        meetingService.deleteMeeting(id);
        return ResponseEntity.noContent().build();
    }
}
