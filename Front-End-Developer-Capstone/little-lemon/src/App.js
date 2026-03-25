import "./styles/global.css";
import "./styles/layout.css";
import "./styles/home.css";
import "./styles/booking.css";

import { BrowserRouter } from "react-router-dom";
import { useReducer } from "react";
import Layout from "./components/layout/Layout";
import AppRoutes from "./routes/AppRoutes";
import { initializeTimes, updateTimes, submitForm } from "./utils/booking";

function App() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
