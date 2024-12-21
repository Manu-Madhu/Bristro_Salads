import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Subscription from "./pages/Subscription";
import ContactUs from "./pages/ContactUs";
import Layout from "./utils/Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);


  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
