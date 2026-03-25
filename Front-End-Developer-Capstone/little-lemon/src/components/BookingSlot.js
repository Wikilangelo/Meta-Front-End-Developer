function BookingSlot({ time, selected, onSelect }) {
  return (
    <button
      type="button"
      className={`booking-slot ${selected ? "selected" : ""}`}
      onClick={() => onSelect(time)}
    >
      {time}
    </button>
  );
}

export default BookingSlot;
