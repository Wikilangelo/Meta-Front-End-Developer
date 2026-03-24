import { Routes, Route } from 'react-router-dom'
import { useReducer } from 'react'
import HomePage from './HomePage'
import BookingPage from './BookingPage'

export function initializeTimes() {
  const today = new Date()
  return window.fetchAPI(today)
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return window.fetchAPI(new Date(action.date))
    default:
      return state
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  )

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
        <Route path="/about" element={<h1>Chi siamo</h1>} />
        <Route path="/menu" element={<h1>Menu</h1>} />
        <Route path="/order" element={<h1>Ordina online</h1>} />
        <Route path="/contact" element={<h1>Contatti</h1>} />
      </Routes>
    </main>
  )
}

export default Main
