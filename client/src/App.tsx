import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import About from "./components/About";
import Sourcing from "./components/Sourcing";
import Offer from "./components/Offer";
import Footer from "./components/Footer";

type Product = {
  id: number;
  name: string;
  unit: string;
  price: string;
};

const products: Product[] = [
  { id: 1, name: "Fresh Tomatoes", unit: "kg", price: "1.20" },
  { id: 2, name: "Organic Lettuce", unit: "pcs", price: "0.80" },
  { id: 3, name: "Carrots (Bulk)", unit: "kg", price: "0.70" },
];

const pillars = [
  {
    id: 1,
    title: "Seasonal forecasting",
    description:
      "Plan promotions around accurate crop schedules, weather insights, and historic yield data.",
  },
  {
    id: 2,
    title: "Quality assurance",
    description:
      "Each load is graded on arrival and loaded with digital traceability so your buyers stay confident.",
  },
  {
    id: 3,
    title: "Seamless logistics",
    description:
      "From cold-chain routing to weekly replenishment, we coordinate the lane you need—without gaps.",
  },
];

const stats = [
  {
    id: 1,
    value: "120+",
    label: "Certified growers across four regions",
  },
  {
    id: 2,
    value: "48h",
    label: "Average dock-to-dock transit time",
  },
  {
    id: 3,
    value: "98.6%",
    label: "On-time fulfillment in 2023",
  },
];

export default function App(): JSX.Element {
  return (
    <div className="page">
      <Navbar />
      <HeroSlider />
      <Sourcing />
      <About />
      <Offer />

      {/* <main className="container">
        <section id="what" className="section-intro">
          <h2>Seasonal staples, ready to ship</h2>
          <p>
            High-volume vegetables, retail-ready packaging, and recurring
            delivery plans designed for produce buyers that can’t risk a stock
            out.
          </p>
          <div className="grid product-grid">
            {products.map((p) => (
              <div className="card" key={p.id}>
                <h3>{p.name}</h3>
                <p>Unit: {p.unit}</p>
                <p>From ${p.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="section-pillars">
          <h2>Why wholesale partners choose PureOrigins</h2>
          <p>
            Our sourcing team stays close to growers across regions, so you get
            consistent quality without chasing availability.
          </p>
          <div className="pillars">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.id}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-about">
          <h2>About PureOrigins</h2>
          <p>
            We connect North American retailers and wholesalers directly with
            regenerative growers, aligning specs, packaging, and timing long
            before each harvest.
          </p>
          <div className="about-metrics">
            {stats.map((stat) => (
              <div className="metric-card" key={stat.id}>
                <span className="metric-value">{stat.value}</span>
                <span className="metric-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-cta">
          <div className="cta-card">
            <h2>Ready to plan your next season?</h2>
            <p>
              Let’s align volumes, certifications, and delivery cycles that fit
              your merchandising calendar.
            </p>
            <div className="cta-actions">
              <a className="btn-accent" href="mailto:sales@vegbiz.example">
                Email our team
              </a>
              <a className="btn-outline-light" href="tel:+15551234567">
                Call +1 (555) 123-4567
              </a>
            </div>
          </div>
        </section>
      </main> */}

      <Footer />
    </div>
  );
}
