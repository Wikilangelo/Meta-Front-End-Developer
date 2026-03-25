import React from "react";

function BookingSlot({ time, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(time)}
      aria-pressed={selected}
      className={`booking-slot ${selected ? "selected" : ""}`}
    >
      {time}
    </button>
  );
}

export default BookingSlot;
