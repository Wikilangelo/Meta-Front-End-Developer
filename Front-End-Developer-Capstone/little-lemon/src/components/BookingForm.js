import React, { useState, useEffect } from "react";
import BookingSlot from "./BookingSlot";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const formData = {
      date,
      time,
      guests,
      occasion,
    };

    try {
      const success = await submitForm(formData);
      if (!success) {
        setSubmitError("Errore durante la prenotazione. Riprova più tardi.");
      }
    } catch (error) {
      setSubmitError(
        "Errore durante la prenotazione. Verifica la connessione.",
      );
    } finally {
      setIsSubmitting(false);
    }
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

      {submitError && (
        <div
          className="error-message"
          style={{ color: "red", margin: "10px 0" }}
        >
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !date || !time}
        style={{
          opacity: isSubmitting || !date || !time ? 0.6 : 1,
          cursor: isSubmitting || !date || !time ? "not-allowed" : "pointer",
        }}
      >
        {isSubmitting ? "Elaborando..." : "Make Your reservation"}
      </button>
    </form>
  );
}

export default BookingForm;
