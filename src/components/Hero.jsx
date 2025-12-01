// src/components/Hero.jsx
import React from "react";

function Hero() {
  return (
    <section id="top" className="hero hero--band">
      <div className="hero-bg" />
      <div className="hero-inner">
        <div className="hero-text-block">
          <p className="hero-kicker">TheplaCo · Gujarati Kitchen</p>
          <h1 className="hero-heading">
            A cosy corner for
            <span> hot theplas & chai.</span>
          </h1>
          <p className="hero-body">
            A warm, homely space where fresh theplas, tangy pickles and
            slow conversations come together. No rush, no noise — just
            comfort on a plate.
          </p>

          <div className="hero-buttons">
            <a href="#menu" className="btn btn-primary">
              View Thepla Menu
            </a>
            <a href="#about" className="btn btn-outline">
              Our story
            </a>
          </div>
        </div>

        <div className="hero-side-note">
          <p>Open all days · 9:30 AM to 10:30 PM</p>
          <p>Pune · Maharashtra</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
