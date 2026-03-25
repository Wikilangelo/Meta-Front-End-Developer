function CustomersSay() {
  const testimonials = [
    {
      name: "Anna",
      text: "Amazing food and great atmosphere!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Marco",
      text: "Best Mediterranean restaurant in town.",
      rating: "⭐⭐⭐⭐",
    },
    {
      name: "Luca",
      text: "Delicious dishes and friendly staff.",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section id="reviews" className="section testimonials">
      <div className="container">
        <h2>What our customers say</h2>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="rating">{t.rating}</p>
              <p>"{t.text}"</p>
              <strong>- {t.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
