import { useState } from 'react'

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  const handleDateChange = (e) => {
    const selectedDate = e.target.value
    setDate(selectedDate)

    dispatch({
      type: 'UPDATE_TIMES',
      date: selectedDate,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      date,
      time,
      guests,
      occasion,
    }

    console.log('Reservation submitted:', formData)
    alert('Prenotazione inviata!')
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  )
}

export default BookingForm
