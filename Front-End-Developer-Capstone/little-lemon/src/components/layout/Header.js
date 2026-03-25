import logo from "../../assets/images/logos/littleLemonLogo.png";

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <img src={logo} alt="Little Lemon logo" className="site-logo" />
      </div>
    </header>
  );
}

export default Header;
