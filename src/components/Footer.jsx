import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} TheplaCo. All rights reserved.</p>
        <p className="footer-tagline">Made with warmth, ghee and a lot of greens. 🌿</p>
      </div>
    </footer>
  );
}

export default Footer;
