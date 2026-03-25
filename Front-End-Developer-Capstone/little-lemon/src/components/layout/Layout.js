import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Nav />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
