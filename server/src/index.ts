import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample API for products
app.get("/", (_req, res) => {
  res.json({ message: "Welcome to PureOrigins!" });
});
app.get("/downloadBroucher", (_req, res) => {
  res.json({ message: "Broucher is downloading." });
});

// Serve static files from client build if present
// const clientDist = path.join(__dirname, "..", "public");
// app.use(express.static(clientDist));

app.listen(PORT, () => {
  console.log(`Server up and running on port:${PORT}`);
});
