import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import ConfirmedBookingPage from "../pages/ConfirmedBookingPage";
import AboutPage from "../pages/AboutPage";
import MenuPage from "../pages/MenuPage";
import OrderPage from "../pages/OrderPage";
import ContactPage from "../pages/ContactPage";

function AppRoutes({ availableTimes, dispatch, submitForm }) {
  return (
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
      <Route path="/confirmed" element={<ConfirmedBookingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default AppRoutes;
