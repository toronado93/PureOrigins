import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");

const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), "utf8");

const assert = (condition, message) => {
  if (!condition) {
    throw new Error(message);
  }
};

const app = read("src/App.tsx");
const maintenance = read("src/components/MaintenancePage.tsx");
const styles = read("src/styles.css");
const assetPath = path.join(
  root,
  "src/assets/maintenance-background.png"
);

assert(
  app.includes("MaintenancePage") &&
    !app.includes("<Navbar") &&
    !app.includes("<HeroSlider") &&
    !app.includes("<Footer"),
  "App must render only the temporary MaintenancePage shell."
);

assert(
  maintenance.includes("We will be back soon.") &&
    maintenance.includes(
      "Our website is going through maintenance while we prepare the next chapter of PureOrigins."
    ),
  "MaintenancePage must include the approved maintenance copy."
);

assert(
  !/Notify me|Contact us|tel:|mailto:|phone|address|email/i.test(
    maintenance
  ),
  "MaintenancePage must not include CTA or contact information."
);

assert(
  !/<a\s|href=|<button\s/i.test(maintenance),
  "MaintenancePage must not include active links or buttons."
);

assert(
  maintenance.includes("cookie-banner"),
  "MaintenancePage must suppress the legacy cookie banner for the action-free temporary page."
);

assert(
  styles.includes("maintenance-background.png") &&
    styles.includes("100dvh") &&
    styles.includes("overflow: hidden") &&
    !/maintenance-[^{]+{[^}]*animation:/i.test(styles) &&
    !styles.includes("@keyframes maintenance-"),
  "styles.css must use a full-viewport static background without animation."
);

assert(
  fs.existsSync(assetPath),
  "Production background must exist at src/assets/maintenance-background.png."
);

console.log("Maintenance page static verification passed.");
