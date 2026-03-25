import { NavLink, useNavigate, useLocation } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleScrollTo = (id) => {
    if (isHomePage) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className="site-nav">
      <div className="container nav-inner">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("home");
          }}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("about");
          }}
        >
          About
        </a>
        <a
          href="#menu"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("menu");
          }}
        >
          Menu
        </a>
        <NavLink to="/booking">Reservations</NavLink>
        <a
          href="#reviews"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("reviews");
          }}
        >
          Reviews
        </a>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Nav;
