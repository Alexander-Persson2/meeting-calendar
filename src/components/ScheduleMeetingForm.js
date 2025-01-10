import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./ScheduleMeetingForm.css";

const API_URL = "http://localhost:8080/api/meetings";

const ScheduleMeetingForm = ({ addMeeting }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    // Ensure the dateTime is correctly formatted before sending
    const formattedData = {
        ...data,
        dateTime: new Date(data.dateTime).toISOString(), // ✅ Convert dateTime to ISO format
    };

    console.log("🔵 Submitting Formatted Data:", formattedData); // Debugging

    try {
        const response = await axios.post(API_URL, formattedData);
        console.log("🟢 Meeting Created Successfully:", response.data); // Debugging
        addMeeting(response.data);
        reset(); // ✅ Clear the form after submission
    } catch (error) {
        console.error("🔴 Error creating meeting", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="schedule-meeting-form">
      <div className="form-group">
        <label>Meeting Title</label>
        <input
          type="text"
          {...register("title", { required: "Title is required" })}
        />
        {errors.title && <p className="error">{errors.title.message}</p>}
      </div>

      <div className="form-group">
        <label>Meeting Date & Time</label>
        <input
          type="datetime-local"
          {...register("dateTime", { required: "Date and time are required" })}
        />
        {errors.dateTime && <p className="error">{errors.dateTime.message}</p>}
      </div>

      <div className="form-group">
        <label>Participants</label>
        <input
          type="text"
          {...register("participants", { required: "Participants are required" })}
        />
        {errors.participants && <p className="error">{errors.participants.message}</p>}
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          {...register("description", { required: "Description is required" })}
        />
        {errors.description && <p className="error">{errors.description.message}</p>}
      </div>

      <button type="submit" className="create-meeting-btn">+ Create Meeting</button>
    </form>
  );
};

export default ScheduleMeetingForm;
