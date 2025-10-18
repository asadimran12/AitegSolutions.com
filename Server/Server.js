const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const router = require("./routers/authrouter");

// ✅ Simplified & correct CORS setup
const allowedOrigins = [
  "https://aiteg-solutions-com.vercel.app",  // ✅ frontend
  "https://aiteg-solutions-com-eqb5.vercel.app", // ✅ backend itself (optional)
  "http://localhost:5173", // ✅ for local dev
];


const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

// ✅ Apply CORS middleware globally
app.use(cors(corsOptions));

// ✅ Handle preflight requests properly
app.options("*", cors(corsOptions));

// ===============================
// Middleware
// ===============================
app.use(express.json());

// ===============================
// Routes
// ===============================
app.use("/auth", router);

// ===============================
// MongoDB connection
// ===============================
mongoose
  .connect(process.env.MONGO || "mongodb://127.0.0.1:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

module.exports=app
