// src/components/LocationsSection.jsx
import React from "react";

const LOCATIONS = [
  {
    name: "TheplaCo – Kharadi",
    city: "Pune",
    address:
      "Gate No.1, Tan Square, Shop No.1, D P Road, Opp. Forest County, Gotha, Kharadi, Pune, Maharashtra 411014",
    timings: "Mon–Sat: 9:30 AM – 10:30 PM · Sun: 8:30 AM – 10:30 PM",
    note: "Dine-in · Takeaway",
  },
  {
    name: "TheplaCo – Gangadham ",
    city: "Pune",
    address: "Shop No. 40, Gagan Samrudhi, Ganga Dham Rd, Phase 1, Bibwewadi, Pune, Maharashtra 411037",
    timings: "Mon–Sat: 9:30 AM – 10:30 PM · Sun: 8:30 AM – 10:30 PM",
    note: "Dine-in · Takeaway",
  },
];

function LocationsSection() {
  return (
    <section id="locations" className="band band--alt">
      <div className="band-inner">
        <div className="band-header">
          <p className="band-kicker">Locations</p>
          <h2 className="band-title">Two cosy corners in Pune, for now.</h2>
          <p className="band-text">
            Whether you’re in and around Kharadi or closer to our second spot,
            there’s always hot theplas and chai waiting for you.
          </p>
        </div>

        <div className="locations-list">
          {LOCATIONS.map((loc) => (
            <div key={loc.name} className="location-line">
              <p className="location-label">
                {loc.name} · {loc.city}
              </p>
              <p className="location-detail">{loc.address}</p>
              <p className="location-detail">{loc.timings}</p>
              <p className="location-detail">{loc.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocationsSection;
