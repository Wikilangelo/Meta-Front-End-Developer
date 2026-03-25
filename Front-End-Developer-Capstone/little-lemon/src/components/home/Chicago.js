import chef1 from "../../assets/images/Mario_and_Adrian_A.jpg";
import chef2 from "../../assets/images/Mario_and_Adrian_B.jpg";

function Chicago() {
  return (
    <section id="about" className="section chicago">
      <div className="container chicago-grid">
        <div className="chicago-text">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>

          <p>
            Little Lemon is a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <p>
            Our chefs Mario and Adrian bring years of experience and passion
            into every dish, creating a unique and memorable dining experience.
          </p>
        </div>

        <div className="chicago-images">
          <img src={chef1} alt="Chef preparing food" />
          <img src={chef2} alt="Restaurant chefs team" />
        </div>
      </div>
    </section>
  );
}

export default Chicago;
