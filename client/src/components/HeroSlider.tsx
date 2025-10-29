import React, { useEffect, useState } from "react";

// Professional sample images (Unsplash). Replace with your own high-res photos.
const slides = [
  {
    src: "https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?auto=format&fit=crop&w=1600&q=80",
    alt: "Vine tomatoes stacked at the market",
  },
  {
    src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    alt: "Fresh lettuce heads",
  },
  {
    src: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=1200&q=80",
    alt: "Bunches of carrots",
  },
  {
    src: "https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=1600&q=80",
    alt: "Potatoes in bulk",
  },
  {
    src: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=1200&q=80",
    alt: "Colorful peppers",
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
              <p>PureOrigins — reliable supply for retailers & wholesalers</p>
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
