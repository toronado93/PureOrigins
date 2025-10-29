export default function Offer(): JSX.Element {
  return (
    <section className="offer-section" id="offer">
      <div className="offer-copy">
        <h2>What We Offer</h2>
        <p>
          We supply a wide range of fresh produce — from everyday staples to
          unique exotic fruits and vegetables. Download our full brochure for
          detailed product listings.
        </p>
        <a
          className="btn-accent offer-download"
          href="/brochure.pdf"
          download
          rel="noreferrer"
        >
          Download Brochure
        </a>
      </div>
      <p className="offer-note">
        Transportation is primarily via cargo ships for cost-efficiency and
        freshness. For urgent orders, we also offer air freight at an additional
        fee.
      </p>
    </section>
  );
}
