import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import SupportHub from "./pages/SupportHub";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Newsroom from "./pages/Newsroom";
import Partner from "./pages/Partner";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/support" element={<SupportHub />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/newsroom" element={<Newsroom />} />
        <Route path="/partner" element={<Partner />} />
      </Routes>
    </>
  );
}

export default App;
