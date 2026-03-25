import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

export function initializeTimes() {
  const today = new Date();
  // Controlla se fetchAPI è disponibile prima di usarla
  if (window.fetchAPI && typeof window.fetchAPI === "function") {
    return window.fetchAPI(today);
  }
  // Fallback con orari predefiniti se fetchAPI non è ancora caricata
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Controlla se fetchAPI è disponibile
      if (window.fetchAPI && typeof window.fetchAPI === "function") {
        return window.fetchAPI(new Date(action.date));
      }
      // Fallback con orari predefiniti
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

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
  );
}

export default Main;
