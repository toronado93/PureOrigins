import sourcingImage from "../assets/the-farm.png";

export default function Sourcing(): JSX.Element {
  return (
    <section className="sourcing-section" id="sourcing">
      <div className="sourcing-media">
        <img
          src={sourcingImage}
          alt="View of farm in Alexandria, Egypt"
          loading="lazy"
        />
        <span className="sourcing-tag">Alexandria, Egypt</span>
      </div>
      <div className="sourcing-content">
        <h2>Our Sourcing</h2>
        <p style={{ color: "black" }}>
          We source directly from trusted Egyptian growers, ensuring fair pay,
          ethical practices, and eco-friendly standards. We are committed to
          being 100% slave-trade free and supporting sustainable agriculture in
          the communities we work with.
        </p>
        <h2 id="sustainability">Our Sustainability</h2>
        <p style={{ color: "black" }}>
          Sustainability for us starts in the orchards and fields. We partner
          with growers that practice regenerative agriculture—crop rotation,
          water-efficient irrigation, minimal chemical inputs, and soil health
          monitoring—so every shipment supports long-term productivity rather
          than exhausting the land. Our farmers also chose to use packaging 
          specs which prioritize recyclable materials.
        </p>
      </div>
    </section>
  );
}
