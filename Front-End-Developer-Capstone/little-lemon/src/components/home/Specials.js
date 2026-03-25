import salad from "../../assets/images/greekSalad.jpg";
import bruschetta from "../../assets/images/bruchetta.svg";
import dessert from "../../assets/images/lemonDessert.jpg";

function Specials() {
  const specials = [
    {
      title: "Greek Salad",
      price: "$12.99",
      image: salad,
      description:
        "Fresh tomatoes, cucumbers, olives and feta cheese, dressed with olive oil.",
    },
    {
      title: "Bruschetta",
      price: "$7.99",
      image: bruschetta,
      description:
        "Grilled bread topped with garlic, tomatoes and fresh herbs.",
    },
    {
      title: "Lemon Dessert",
      price: "$6.99",
      image: dessert,
      description:
        "A light and sweet lemon dessert with a refreshing citrus flavor.",
    },
  ];

  return (
    <section id="menu" className="section specials">
      <div className="container">
        <div className="section-heading">
          <h2>This week's specials!</h2>
        </div>

        <div className="specials-grid">
          {specials.map((item) => (
            <div key={item.title} className="card">
              <img src={item.image} alt={item.title} className="card-image" />

              <div className="card-body">
                <div className="card-header">
                  <h3>{item.title}</h3>
                  <span className="price">{item.price}</span>
                </div>

                <p>{item.description}</p>

                <button className="btn btn-primary">Order a delivery</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Specials;
