// src/components/MenuSection.jsx
import React from "react";

const MENU_SECTIONS = [
  {
    title: "Opening Scene",
    description: "Crisp, fried and golden — the perfect start.",
    items: [
      { name: "Authentic Fafda (Serves 1)", price: "110" },
      { name: "Fresh Methi Fafda (Serves 1)", price: "125" },
      { name: "Khaman Dhokla (2 pcs)", price: "75" },
      { name: "Matar Kachori (2 pcs)", price: "95" },
      { name: "Aloo Pyaaz Ki Kachori (1 pc)", price: "60" },
      { name: "Fafda Jalebi Combo", price: "230" },
    ],
  },
  {
    title: "TheplaCo’s Heroes",
    description: "Everyday theplas, in all the flavours you crave.",
    items: [
      { name: "Sada Thepla", price: "₹50 / ₹130" },
      { name: "Bajra Methi Thepla", price: "₹50 / ₹130" },
      { name: "Green Chilli Thepla", price: "₹50 / ₹130" },
      { name: "Cheese Thepla", price: "₹55 / ₹145" },
      { name: "Methi Chilli Thepla", price: "₹55 / ₹145" },
      { name: "Chilli Garlic Thepla", price: "₹55 / ₹145" },
    ],
  },
  {
    title: "Hero Ke Dost",
    description: "Sabzis that turn a thepla into a full meal.",
    items: [
      { name: "Besan Pithla", price: "195" },
      { name: "Aloo Nu Shaak", price: "215" },
      { name: "Sev Tomato Nu Shaak", price: "245" },
      { name: "Smoky Baingan Bharta", price: "295" },
      { name: "Chole Gujjubhai", price: "295" },
      { name: "TheplaCo’s Special Paneer", price: "335" },
    ],
  },
  {
    title: "Chatpata Cameo",
    description: "Chaat that hits right where it should.",
    items: [
      { name: "Puchka (6 pcs)", price: "50" },
      { name: "Sukha Puri (6 pcs)", price: "60" },
      { name: "Churmur", price: "70" },
      { name: "Sev Puri", price: "90" },
      { name: "Dahi Puri", price: "90" },
      { name: "Jhaal Muri", price: "100" },
    ],
  },
];

function MenuSection() {
  return (
    <section id="menu" className="band band--alt">
      <div className="band-inner">
        <div className="band-header">
          <p className="band-kicker">Menu</p>
          <h2 className="band-title">A full Gujarati scene, on one table.</h2>
          <p className="band-text">
            From fafda–jalebi mornings to thepla–sabzi dinners and chaats that
            remind you of street corners back home — pick your mood and we’ll
            plate it.
          </p>
        </div>

        <div className="menu-columns">
          {MENU_SECTIONS.map((section) => (
            <div key={section.title} className="menu-column">
              <h3 className="menu-section-title">{section.title}</h3>
              <p className="menu-section-desc">{section.description}</p>
              <ul className="menu-items">
                {section.items.map((item) => (
                  <li key={item.name} className="menu-item-line">
                    <span className="menu-item-name">{item.name}</span>
                    <span className="menu-item-dot" />
                    <span className="menu-item-price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="band-footnote">
          Prices and items may change with seasons. Visit us or call to know
          today’s specials.
        </p>
      </div>
    </section>
  );
}

export default MenuSection;
