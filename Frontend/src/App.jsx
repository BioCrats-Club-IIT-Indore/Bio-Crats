import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import AlumniDirectory from "./components/Alumni";
import Gallery from "./components/Gallery";
import BiocratTeamPage from "./components/Team";
import ContactUs from "./components/Contact";
import NotFound from "./components/Notfound";
import Footer from "./components/Footer";

function MainPage() {
  // ✅ smooth scroll code yahin rakho
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        const navbarHeight = 80;
        if (targetElement) {
          const targetPosition = targetElement.offsetTop - navbarHeight;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="events">
          <Events />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="team">
          <BiocratTeamPage />
        </section>
        <section id="alumni">
          <AlumniDirectory />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Main scrollable page */}
        <Route path="/" element={<MainPage />} />

        {/* ✅ Agar koi bhi galat path ho */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
