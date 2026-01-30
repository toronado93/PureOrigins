import { useState } from "react";

export default function Footer(): JSX.Element {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const name = form.name.trim();
    const phone = form.phone.trim();
    const email = form.email.trim();

    if (!name || !phone || !email) {
      setError("Please fill in your name, phone number, and email.");
      return;
    }

    const emailValid = /\S+@\S+\.\S+/.test(email);
    const phoneValid = phone.replace(/[^\d+]/g, "").length >= 7;

    if (!emailValid) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!phoneValid) {
      setError("Please enter a valid phone number.");
      return;
    }

    setError(null);
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : "Something went wrong. Please try again."
        );
      }

      setStatus("success");
      setForm({ name: "", phone: "", email: "" });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to send request.";
      setStatus("idle");
      setError(message);
    }
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark">PureOrigins</span>
          <p style={{ color: "black", opacity: 0.8 }}>
            Sourcing regenerative produce at scale with full transparency,
            consistent specs, and logistics tuned for your needs.
          </p>
          <div className="footer__social" aria-label="Social media">
            <a
              className="footer__social-link"
              href="https://www.linkedin.com/in/daniel-mosaid-70467761/"
              target="_blank"
              rel="noreferrer"
              aria-label="PureOrigins on LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zm.02 4.75H2V21h3V8.25zm5 .25H7v12.75h3V14.5c0-2.33 2.82-2.52 2.82 0V21h3v-7.16c0-5.14-5.54-4.95-6.82-2.42V8.5z" />
              </svg>
            </a>
            <a
              className="footer__social-link"
              href="https://www.instagram.com/pureoriginsfresh/"
              target="_blank"
              rel="noreferrer"
              aria-label="PureOrigins on Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M7 3c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4H7zm10 2c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h10zm-5 3.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zm0 2A2.5 2.5 0 1 1 9.5 13 2.5 2.5 0 0 1 12 10.5zm4.75-3.75a.75.75 0 1 0 .75.75.75.75 0 0 0-.75-.75z" />
              </svg>
            </a>
            {/* <a
              className="footer__social-link"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="PureOrigins on X"
            >
              <svg
                viewBox="0 0 24 24"
                role="img"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M18.36 3H21l-6.58 7.51L21.65 21H16l-4.02-5.26L7.28 21H3l6.83-7.78L3.35 3H9l3.63 4.81L18.36 3zm-1.8 15h1.49L8.42 5.97H6.8L16.56 18z" />
              </svg>
            </a> */}
          </div>
        </div>
        <div className="footer__contact" id="contact">
          <span className="footer__mark">Contact</span>
          <ul style={{ paddingTop: "10%" }}>
            <li>
              <span className="footer__contact-icon" aria-hidden="true">
                📍
              </span>
              <span style={{ color: "black", opacity: 0.8 }}>London / UK</span>
            </li>
            <li>
              <span className="footer__contact-icon" aria-hidden="true">
                📍
              </span>
              <span style={{ color: "black", opacity: 0.8 }}>Cairo / Egypt</span>
            </li>
            <li>
              <span className="footer__contact-icon" aria-hidden="true">
                ✉️
              </span>
              <a href="mailto:pureorigins+sales@gmail.com">
                pureorigins@gmail.com
              </a>
            </li>
            <li>
              <span className="footer__contact-icon" aria-hidden="true">
                📞
              </span>
              <a href="tel:+447518549847">+447518549847</a>
            </li>
          </ul>
        </div>
        <div className="footer__cta">
          <div>
            <p className="footer__label">Get in touch now</p>
            <p style={{ color: "black", opacity: 0.8 }}>
              Have a question or need a quote? Fill out the form and we&apos;ll
              get back to you quickly.
            </p>
          </div>
          <form className="footer__form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="contact-name">
              Full name
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={handleChange}
            />
            <label className="sr-only" htmlFor="contact-phone">
              Phone number
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              placeholder="Phone number"
              required
              value={form.phone}
              onChange={handleChange}
            />
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              placeholder="Email address"
              required
              value={form.email}
              onChange={handleChange}
            />
            {error ? <p className="form-error">{error}</p> : null}
            {status === "success" ? (
              <p className="form-success" style={{ color: "#1f5e3b" }}>
                Thanks! We will be in touch shortly.
              </p>
            ) : null}
            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Notify me"}
            </button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <div className="footer__nav">
            <a href="#sourcing">Sourcing</a>
            <span aria-hidden="true"> • </span>
            <a href="#sustainability">Sustainability</a>
            <span aria-hidden="true"> • </span>
            <a href="#about">About</a>
            <span aria-hidden="true"> • </span>
            <a href="#offer">Our Produce</a>
            <span aria-hidden="true"> • </span>
            <a href="#contact">Contact</a>
          </div>
          <span>
            © {new Date().getFullYear()} PureOrigins. All rights reserved.
          </span>
          {/* I didn't think this was necessary */}
          {/*<div className="footer__policies">
            <a href="#privacy">Privacy</a>
            <span aria-hidden="true">•</span>
            <a href="#terms">Terms</a>
          </div>*/}
        </div>
      </div>
    </footer>
  );
}
