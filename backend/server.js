const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// ===============================
// Middleware
// ===============================

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

// ===============================
// Routes
// ===============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "ResQ Intelligence API is running 🚨",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    service: "ResQ Intelligence API",
    status: "healthy",
    timestamp: new Date().toISOString(),
  });
});

// ===============================
// Start Server
// ===============================

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════╗
║          RESQ INTELLIGENCE API            ║
╠════════════════════════════════════════════╣
║ Server : http://localhost:${PORT}             ║
║ Status : RUNNING                           ║
║ Mode   : ${process.env.NODE_ENV || "development"}                ║
╚════════════════════════════════════════════╝
  `);
});