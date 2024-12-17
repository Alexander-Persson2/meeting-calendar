import React from 'react';
import { useForm } from 'react-hook-form';
import './ScheduleMeetingForm.css';

const ScheduleMeetingForm = ({ addMeeting }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Helper function to convert dd/mm/yyyy to yyyy-mm-dd
  const convertDateToISO = (ddmmyyyy) => {
    const [day, month, year] = ddmmyyyy.split('/');
    return `${year}-${month}-${day}`;
  };

  const onSubmit = (data) => {
    // Convert the date from dd/mm/yyyy to yyyy-mm-dd
    const convertedDate = convertDateToISO(data.date);
    
    // Create a new meeting object with the converted date
    const meetingWithConvertedDate = { ...data, date: convertedDate };
    
    // Add the meeting to the state via addMeeting
    addMeeting(meetingWithConvertedDate);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="schedule-meeting-form">
      <div className="form-group">
        <label>Meeting Title</label>
        <input
          type="text"
          placeholder="Enter meeting title"
          {...register('title', { required: 'Title is required' })}
        />
        {errors.title && <p className="error">{errors.title.message}</p>}
      </div>

      <div className="form-row">
        <div className="form-group half">
          <label>Meeting Date</label>
          <input
            type="text"
            placeholder="dd/mm/yyyy"
            {...register('date', { required: 'Date is required' })}
          />
          {errors.date && <p className="error">{errors.date.message}</p>}
        </div>
        <div className="form-group half">
          <label>Meeting Time</label>
          <input
            type="text"
            placeholder="--:--"
            {...register('time', { required: 'Time is required' })}
          />
          {errors.time && <p className="error">{errors.time.message}</p>}
        </div>
      </div>

      <div className="form-group">
        <label>Meeting Level</label>
        <select {...register('level', { required: 'Meeting level is required' })}>
          <option value="">Choose level</option>
          <option value="Team">Team</option>
          <option value="Department">Department</option>
          <option value="Company">Company</option>
        </select>
        {errors.level && <p className="error">{errors.level.message}</p>}
      </div>

      <div className="form-group">
        <label>Participants</label>
        <input
          type="text"
          placeholder="Enter participant emails"
          {...register('participants', { required: 'Participants are required' })}
        />
        {errors.participants && <p className="error">{errors.participants.message}</p>}
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          placeholder="Enter meeting description"
          {...register('description', { required: 'Description is required' })}
        />
        {errors.description && <p className="error">{errors.description.message}</p>}
      </div>

      <button type="submit" className="create-meeting-btn">+ Create Meeting</button>
    </form>
  );
};

export default ScheduleMeetingForm;
