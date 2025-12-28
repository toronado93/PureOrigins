import React, { useEffect, useState } from "react";
import apricotsImg from "../assets/Apricots.png";
import avocadosImg from "../assets/Avocados.png";
import artichokesImg from "../assets/Artichokes.png";
import strawberriesImg from "../assets/Farm_strawbs.jpg";
import mulberriesImg from "../assets/Mulberries.png";
import plumsImg from "../assets/Plums.jpg";

const slides = [
  {
    src: apricotsImg,
    alt: "Farm Fresh Apricots",
  },
  {
    src: avocadosImg,
    alt: "Ripe and Ready Avocados",
  },
  {
    src: artichokesImg,
    alt: "Succulent Artichokes",
  },
  {
    src: strawberriesImg,
    alt: "Juicy Sweet Strawberries",
  },
  {
    src: mulberriesImg,
    alt: "Premium Mulberries",
  },
  {
    src: plumsImg,
    alt: "Plums and More",
  },
];

export default function HeroSlider(): JSX.Element {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const go = (i: number) =>
    setIndex(((i % slides.length) + slides.length) % slides.length);

  return (
    <header className="hero-slider">
      <div className="slider-window">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            aria-hidden={i !== index}
          >
            <img src={s.src} alt={s.alt} />
            <div className="slide-caption">
              <h2>{s.alt}</h2>
              <p style={{ color: "white" }}>PureOrigins — reliable supply for retailers & wholesalers</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="prev"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="next"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </header>
  );
}
