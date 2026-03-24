import { Link } from 'react-router-dom'

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Un ristorante mediterraneo con ingredienti freschi e sapori autentici.
        </p>
        <Link to="/booking" className="button-link">
          Prenota un tavolo
        </Link>
      </div>
    </section>
  )
}

export default CallToAction
