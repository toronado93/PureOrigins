export default function About(): JSX.Element {
  return (
    <section className="about-section" id="about">
      <div className="about-card">
        <h3>Our Motto</h3>
        <p style={{ color: "black" }}>
          "Bringing the world&apos;s finest fruit and vegetables from Egypt to
          your doorstep."
        </p>
      </div>

      <div className="about-card">
        <h3>About Us</h3>
        <p style={{ color: "black" }}>
          Pure Origins was founded by friends with a passion for providing
          high-quality fruit and vegetables at affordable prices. Our mission is
          to make fresh produce, especially exotic varieties, more accessible to
          wholesalers and small businesses alike.
        </p>
      </div>
    </section>
  );
}
