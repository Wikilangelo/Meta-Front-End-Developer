import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page">
      <h1>Prenota un tavolo</h1>
      <p>Compila il modulo per completare la tua prenotazione.</p>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;
