// src/components/AboutSection.jsx
import React from "react";

function AboutSection() {
  return (
    <section id="about" className="band">
      <div className="band-inner band-inner--split">
        <div>
          <p className="band-kicker">About TheplaCo</p>
          <h2 className="band-title">
            A Gujarati home, disguised as a restaurant.
          </h2>
        </div>

        <div className="band-text-block">
          <p>
            TheplaCo began as weekend breakfasts at home — stacks of hot
            theplas, yoghurt, pickle and loud laughter. Friends kept saying,
            &quot;You should open a place&quot;. So we did.
          </p>
          <p>
            Our kitchen is small, our menu is smaller, but our hearts are big.
            Every thepla is rolled by hand, cooked on cast-iron tawas and
            brushed with just enough ghee to stay soft for hours.
          </p>
          <p>
            Come in your flip-flops, bring your family, your gang, or just
            yourself and a book. We&apos;ll take care of the rest.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
