import React from 'react'

type Product = {
  id: number
  name: string
  unit: string
  price: string
}

const products: Product[] = [
  { id: 1, name: 'Fresh Tomatoes', unit: 'kg', price: '1.20' },
  { id: 2, name: 'Organic Lettuce', unit: 'pcs', price: '0.80' },
  { id: 3, name: 'Carrots (Bulk)', unit: 'kg', price: '0.70' }
]

export default function App(): JSX.Element {
  return (
    <div className="page">
      <header className="hero">
        <div className="container">
          <h1>VegBiz — Wholesale Vegetables & Retail Supplies</h1>
          <p>Reliable, fresh produce and retail essentials for grocery stores, restaurants and food retailers.</p>
          <a className="cta" href="#contact">Contact Sales</a>
        </div>
      </header>

      <main className="container">
        <section>
          <h2>What we sell</h2>
          <p>High-volume vegetables, retail-ready packaging, and recurring delivery plans.</p>
          <div className="grid">
            {products.map((p) => (
              <div className="card" key={p.id}>
                <h3>{p.name}</h3>
                <p>Unit: {p.unit}</p>
                <p>From ${p.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>Contact our sales team</h2>
          <p>Email: <a href="mailto:sales@vegbiz.example">sales@vegbiz.example</a></p>
          <p>Phone: +1 (555) 123-4567</p>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© VegBiz — Built for B2B produce buyers</div>
      </footer>
    </div>
  )
}
