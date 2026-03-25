import React, { useState, useEffect } from "react";
import BookingSlot from "./BookingSlot";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);

    dispatch({
      type: "UPDATE_TIMES",
      date: today,
    });
  }, [dispatch]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTime("");

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    if (!date) {
      setSubmitError("Please select a date.");
      setIsSubmitting(false);
      return;
    }

    if (!time) {
      setSubmitError("Please select a time.");
      setIsSubmitting(false);
      return;
    }

    if (guests < 1 || guests > 10) {
      setSubmitError("Number of guests must be between 1 and 10.");
      setIsSubmitting(false);
      return;
    }

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    try {
      const success = await submitForm(formData);

      if (!success) {
        setSubmitError(
          "There was a problem with your reservation. Please try again.",
        );
      }
    } catch (error) {
      setSubmitError("Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          min={new Date().toISOString().split("T")[0]}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <p className="slots-title">
          Available booking slots ({availableTimes.length})
        </p>

        <div className="booking-slots">
          {availableTimes.length > 0 ? (
            availableTimes.map((availableTime) => (
              <BookingSlot
                key={availableTime}
                time={availableTime}
                selected={time === availableTime}
                onSelect={setTime}
              />
            ))
          ) : (
            <p className="empty-state">
              No times available. Please choose another date.
            </p>
          )}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      {submitError && <p className="error-message">{submitError}</p>}

      <button
        type="submit"
        className="btn btn-primary submit-btn"
        disabled={isSubmitting || !date || !time}
      >
        {isSubmitting ? "Processing..." : "Make Your Reservation"}
      </button>
    </form>
  );
}

export default BookingForm;
