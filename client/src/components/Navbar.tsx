import React, { useState, useEffect } from "react";
import logo from "../assets/logo1.png";

export default function Navbar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClassName = [
    "nav",
    "nav-overlay",
    scrolled || open ? "nav-solid" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleNavClick = () => setOpen(false);

  return (
    <nav className={navClassName}>
      <div className="nav-container large">
        <div className="brand">
          <a href="/">
            <img
              src={logo}
              alt="PureOrigins logo"
              className={`logo${scrolled ? " logo-solid" : ""}`}
            />
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle menu</span>
          <div className={`hamburger ${open ? "open" : ""}`} />
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <a href="#sourcing" onClick={handleNavClick}>
              Sourcing
            </a>
          </li>
          <li>
            <a href="#sustainability" onClick={handleNavClick}>
              Sustainability
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleNavClick}>
              About
            </a>
          </li>
          <li>
            <a href="#offer" onClick={handleNavClick}>
              Our Produce
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
