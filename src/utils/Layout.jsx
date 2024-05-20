import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header className="max-w-full mx-auto w-full ">
        <Nav />
      </header>
      <section className="">
        <Outlet />
      </section>
      <footer className="max-w-full mx-auto w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
