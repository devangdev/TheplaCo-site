import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import MenuSection from "./components/MenuSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import LocationsSection from "./components/LocationsSection.jsx";
import MapSection from "./components/MapSection.jsx";     // ⬅ add this
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <AboutSection />
        <LocationsSection />
        <MapSection />     {/* ⬅ new map band just under locations */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
