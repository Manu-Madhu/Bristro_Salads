import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import Subscription from "./pages/Subscription";
import ContactUs from "./pages/ContactUs";
import Layout from "./utils/Layout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
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
