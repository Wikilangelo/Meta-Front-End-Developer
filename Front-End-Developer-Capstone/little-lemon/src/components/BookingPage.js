import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch }) {
  const handleSubmitForm = (formData) => {
    // Implementazione temporanea della funzione submitForm
    console.log("Form submitted:", formData);
    alert("Prenotazione effettuata con successo!");
    return true;
  };

  return (
    <section className="booking-page">
      <h1>Prenota un tavolo</h1>
      <p>Compila il modulo per completare la tua prenotazione.</p>

      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={handleSubmitForm}
      />
    </section>
  );
}

export default BookingPage;
