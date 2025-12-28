export default function Offer(): JSX.Element {
  return (
    <section className="offer-section" id="offer">
      <div className="offer-copy">
        <h2>What We Offer</h2>
        <p style={{ color: "black" }}>
          We supply a wide range of fresh produce — from everyday staples to
          unique exotic fruits and vegetables. Download our full brochure for
          detailed product listings.
        </p>
        <a
          className="btn-accent offer-download"
          href="/Pure Origins – Product Catalogue.pdf"
          download
          rel="noreferrer"
        >
          Download Catalogue
        </a>
      </div>
      <p className="offer-note" style={{ color: "black" }}>
        Transportation is primarily via cargo ships for cost-efficiency and
        freshness. For urgent orders, we also offer air freight at an additional
        fee.
      </p>
    </section>
  );
}
