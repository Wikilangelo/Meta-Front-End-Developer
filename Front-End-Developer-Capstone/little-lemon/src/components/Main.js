import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer, useEffect } from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

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
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  useEffect(() => {
    // Verifica se le API esterne sono disponibili
    setTimeout(() => {
      const hasAPI = window.fetchAPI && window.submitAPI;
      console.log("🔍 Stato API esterne:", {
        fetchAPI: !!window.fetchAPI,
        submitAPI: !!window.submitAPI,
        allAvailable: hasAPI,
      });

      if (!hasAPI) {
        console.warn(
          "⚠️ Una o entrambe le API esterne non sono disponibili. Verifica il caricamento da:",
          "https://raw.githubusercontent.com/courseraap/capstone/main/api.js",
        );
      }
    }, 1000);
  }, []);

  const submitForm = (formData) => {
    console.log("Inviando prenotazione:", formData);

    // Verifica se l'API external è disponibile
    if (!window.submitAPI) {
      console.error(
        "⚠️ API submitAPI non disponibile. Caricamento dal server esterno potrebbe essere fallito.",
      );
      // Per scopi di sviluppo, simula successo
      console.log("🔄 Simulando successo per scopi di sviluppo...");
      setTimeout(() => navigate("/confirmed"), 500);
      return true;
    }

    if (typeof window.submitAPI === "function") {
      const success = window.submitAPI(formData);
      console.log("Risultato submitAPI:", success);

      if (success) {
        navigate("/confirmed");
      } else {
        console.error("❌ submitAPI ha restituito false");
      }

      return success;
    }

    console.error("❌ submitAPI non è una funzione");
    return false;
  };

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/about" element={<h1>Chi siamo</h1>} />
        <Route path="/menu" element={<h1>Menu</h1>} />
        <Route path="/order" element={<h1>Ordina online</h1>} />
        <Route path="/contact" element={<h1>Contatti</h1>} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;
