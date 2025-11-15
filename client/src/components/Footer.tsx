export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark">PureOrigins</span>
          <p>
            Sourcing regenerative produce at scale with full transparency,
            consistent specs, and logistics tuned for wholesale buyers.
          </p>
          <div className="footer__social" aria-label="Social media">
            <a
              className="footer__social-link"
              href="https://www.linkedin.com"
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
              href="https://www.instagram.com"
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
            <a
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
            </a>
          </div>
        </div>
        <div className="footer__nav">
          <p className="footer__label">Explore</p>
          <ul>
            <li>
              <a href="#what">Products</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <p className="footer__label">Contact</p>
          <ul>
            <li>
              <span className="footer__contact-icon" aria-hidden="true">
                📍
              </span>
              <span>1200 Greenway Ave, Suite 400, Salinas, CA</span>
            </li>
            <li>
              <span className="footer__contact-icon" aria-hidden="true">
                ✉️
              </span>
              <a href="mailto:sales@pureorigins.ag">sales@pureorigins.ag</a>
            </li>
            <li>
              <span className="footer__contact-icon" aria-hidden="true">
                📞
              </span>
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </li>
          </ul>
        </div>
        <div className="footer__cta">
          <p className="footer__label">Stay in the loop</p>
          <p>
            Sign up for seasonal market updates and harvest availability alerts
            curated by our sourcing team.
          </p>
          <form className="footer__form">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Notify me</button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} PureOrigins. All rights reserved.</span>
          <div className="footer__policies">
            <a href="#privacy">Privacy</a>
            <span aria-hidden="true">•</span>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
