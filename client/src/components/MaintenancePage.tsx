import { useEffect } from "react";
import brandIcon from "../assets/PO-icon.png";

const maintenanceCopy =
  "Our website is going through maintenance while we prepare the next chapter of PureOrigins.";

export default function MaintenancePage(): JSX.Element {
  useEffect(() => {
    document.getElementById("cookie-banner")?.remove();
  }, []);

  return (
    <main className="maintenance-page" aria-labelledby="maintenance-title">
      <header className="maintenance-header">
        <div className="maintenance-brand" aria-label="PureOrigins">
          <img src={brandIcon} alt="" aria-hidden="true" />
          <span>PureOrigins</span>
        </div>
      </header>

      <section className="maintenance-hero">
        <div className="maintenance-copy">
          <h1 id="maintenance-title">We will be back soon.</h1>
          <p>{maintenanceCopy}</p>
        </div>
      </section>

      <footer className="maintenance-footer">
        <span>
          &copy; {new Date().getFullYear()} PureOrigins. All rights reserved.
        </span>
      </footer>
    </main>
  );
}
