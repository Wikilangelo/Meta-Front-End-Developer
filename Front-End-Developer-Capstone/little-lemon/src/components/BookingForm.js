import React, { useState, useEffect } from "react";
import BookingSlot from "./BookingSlot";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Carica gli orari di oggi quando il componente monta
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
    dispatch({
      type: "UPDATE_TIMES",
      date: today,
    });
  }, []); // Esegue solo al mount

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });

    setTime("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div>
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

      <div>
        <p>Available booking slots ({availableTimes.length} available)</p>
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
            <p>Nessun orario disponibile. Seleziona una data.</p>
          )}
        </div>
      </div>

      <div>
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

      <div>
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

      <button type="submit">Make Your reservation</button>
    </form>
  );
}

export default BookingForm;
