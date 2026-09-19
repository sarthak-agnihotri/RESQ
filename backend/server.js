const express = require("express");
const cors = require("cors");
const helmet = require("helmet"); // For security headers
const morgan = require("morgan"); // For logging HTTP requests
const dotenv = require("dotenv");

dotenv.config();// Load environment variables from .env file

const connectDatabase = require("./src/config/database");

const app = express();

const PORT = process.env.PORT || 5000;

// ==========================================
// MIDDLEWARE
// ==========================================

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

// ==========================================
// ROUTES
// ==========================================

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

// ==========================================
// START SERVER
// ==========================================

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log("========================================");
    console.log("       RESQ INTELLIGENCE API");
    console.log("========================================");
    console.log("Server :", `http://localhost:${PORT}`);
    console.log("Status :", "RUNNING");
    console.log("Mode   :", process.env.NODE_ENV);
    console.log("========================================");
  });
};

startServer();