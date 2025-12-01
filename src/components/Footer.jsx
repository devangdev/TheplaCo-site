import React from "react";
import { FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-section">
          <p className="footer-title">TheplaCo</p>
          <p className="footer-tagline">Freshly served, every day.</p>
        </div>

        <div className="footer-section">
          <p className="footer-title">Connect with us</p>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/theplacoindia/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaInstagram size={20} />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.swiggy.com/city/pune/theplaco-kharadi-rest936753?source=sharing&utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <FaMapMarkerAlt size={20} />
              <span>Swiggy</span>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <p className="footer-line">© {new Date().getFullYear()} TheplaCo</p>
          <p className="footer-line">Built with ❤️ by Devang</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
