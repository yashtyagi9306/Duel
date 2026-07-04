"use strict";

require("dotenv").config();

// Validate required environment variables before booting
if (!process.env.GROQ_API_KEY) {
  console.error("[ERROR] GROQ_API_KEY is not set. Add it to server/.env before starting.");
  process.exit(1);
}

const express = require("express");
const cors = require("cors");
const debateRoutes = require("./routes/debate.routes");

const app = express();
const PORT = process.env.PORT || 3001;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── Health check ─────────────────────────────────────────────────────────────
app.get("/", (_req, res) => {
  res.json({ success: true, message: "Duel Backend Running" });
});

// ── API routes ────────────────────────────────────────────────────────────────
app.use("/api", debateRoutes);

// ── 404 handler ───────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// ── Global error handler ──────────────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error("[Server Error]", err.message);
  res.status(500).json({ success: false, message: "Internal server error." });
});

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`Duel backend running on http://localhost:${PORT}`);
});
