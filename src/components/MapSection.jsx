// src/components/MapSection.jsx
import React, { useState } from "react";

const BRANCHES = [
  {
    id: "kharadi",
    label: "TheplaCo – Kharadi",
    viewUrl: "https://maps.app.goo.gl/CHLGQWQKcM1uu7HY7",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.369828765023!2d73.94713201090465!3d18.55735826797651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c31d22f9a67d%3A0xf5abf08fa5807fe9!2sTheplaCo!5e0!3m2!1sen!2sin!4v1764614354233!5m2!1sen!2sin",
  },
  {
    id: "branch2",
    label: "TheplaCo – Pune (Branch 2)",
    viewUrl: "https://maps.app.goo.gl/aegMDTqx1TfR7m2H6",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d422.30497691146564!2d73.87536930722143!3d18.48064547938646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb00044add15%3A0xc6dbdcfbfd6eaa40!2sTheplaCo!5e0!3m2!1sen!2sin!4v1764614422863!5m2!1sen!2sin",
  },
];

function MapSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBranch = BRANCHES[activeIndex];

  return (
    <section className="band band--alt map-band">
      <div className="band-inner">
        <div className="map-card">
          <div className="map-text">
            <p className="band-kicker">On the map</p>
            <h2 className="band-title">Get directions to TheplaCo.</h2>
            <p className="band-text">
              Tap a branch to see it on the map. Click on the map itself to
              open Google Maps for full directions, reviews and photos.
            </p>

            <div className="map-branch-tabs">
              {BRANCHES.map((branch, index) => (
                <button
                  key={branch.id}
                  type="button"
                  className={
                    index === activeIndex
                      ? "map-branch-tab map-branch-tab--active"
                      : "map-branch-tab"
                  }
                  onClick={() => setActiveIndex(index)}
                >
                  {branch.label}
                </button>
              ))}
            </div>
          </div>

          {/* Whole map area is clickable */}
          <a
            href={activeBranch.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="map-frame-wrap"
          >
            <iframe
              title={activeBranch.label}
              src={activeBranch.embedUrl}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </a>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
