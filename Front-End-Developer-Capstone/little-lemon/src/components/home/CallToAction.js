import { Link } from "react-router-dom";
import heroImage from "../../assets/images/restaurantfood.jpg";

function CallToAction() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/booking" className="btn btn-primary">
            Reserve a Table
          </Link>
        </div>

        <div className="hero-image-wrapper">
          <img
            src={heroImage}
            alt="Little Lemon restaurant"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
