import sourcingImage from "../assets/alexandria.svg";

export default function Sourcing(): JSX.Element {
  return (
    <section className="sourcing-section" id="sourcing">
      <div className="sourcing-media">
        <img
          src={sourcingImage}
          alt="Coastal view of Alexandria, Egypt"
          loading="lazy"
        />
        <span className="sourcing-tag">Alexandria, Egypt</span>
      </div>
      <div className="sourcing-content">
        <h2>Our Sourcing</h2>
        <p>
          We source directly from trusted Egyptian growers, ensuring fair pay,
          ethical practices, and eco-friendly standards. We are committed to
          being 100% slave-trade free and supporting sustainable agriculture in
          the communities we work with.
        </p>
      </div>
    </section>
  );
}
