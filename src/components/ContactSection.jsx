// src/components/ContactSection.jsx
import React, { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thank you for reaching out. We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="band">
      <div className="band-inner band-inner--split contact-split">
        <div>
          <p className="band-kicker">Contact</p>
          <h2 className="band-title">Send us a message.</h2>
          <p className="band-text">
            Planning a house party, office breakfast, hostel treat or just want
            to say hi? Drop a note and we’ll call you back.
          </p>

          <div className="contact-info">
            <p>
              <strong>Phone:</strong> +91-98765-00000
            </p>
            <p>
              <strong>Email:</strong> devangsdev@gmail.com
            </p>
            <p>
              <strong>Address:</strong> Pune, Maharashtra
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us what you have in mind..."
            />
          </label>

          <button type="submit" className="btn btn-primary btn-full">
            Send message
          </button>

          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
