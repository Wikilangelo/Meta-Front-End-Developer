import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    const success = await submitForm(formData);

    if (success) {
      navigate("/confirmed");
    }

    return success;
  };

  return (
    <section className="booking-page section">
      <div className="container">
        <div className="section-heading">
          <h1>Reserve a Table</h1>
          <p>Book your Little Lemon experience in a few simple steps.</p>
        </div>

        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={handleSubmit}
        />
      </div>
    </section>
  );
}

export default BookingPage;
