import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import WhLogo from "../assets/WhLogo.png";

const Layout = () => {
  return (
    <div className="relative">
      <header className="max-w-full mx-auto w-full ">
        <Nav />
      </header>
      <section className="">
        <Outlet />
      </section>
      <footer className="max-w-full mx-auto w-full ">
        <Footer />
      </footer>

      <div className="fixed bottom-3 right-3 md:right-10 md:bottom-10 z-50">
        <a href="https://wa.me/917356924029?text=hi...">
          <img src={WhLogo} alt="whLogo" className="w-16 md:w-20" />
        </a>
      </div>
    </div>
  );
};

export default Layout;
