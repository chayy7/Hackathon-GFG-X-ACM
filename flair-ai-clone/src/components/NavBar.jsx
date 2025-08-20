import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav className="nv">
        <a href="/" className="lg-lk">
          <div className="ls">
            <img src={logo} alt="website logo" className="lg-img" />
            <h2 className="tt">Flair.ai</h2>
          </div>
        </a>
        <ul className="rs">
          <li>
            Features <i className="fa-solid fa-angle-down"></i>
          </li>
          <li>Pricing</li>
          <li>Enterprise</li>
          <li>Community Gallery</li>
          <li>
            Resources <i className="fa-solid fa-angle-down"></i>
          </li>
          <li>
            <button className="cta-btn">Try Flair AI for free</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}