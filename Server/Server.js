// ===============================
// ✅ Imports & Configuration
// ===============================
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const router = require("./routers/authrouter");

// ===============================
// ✅ CORS Configuration
// ===============================
const corsOptions = {
  origin: "https://aiteg-solutions-com.vercel.app", // your frontend domain
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200, // fix for some browsers (legacy)
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

// Handle preflight requests
app.options("*", cors(corsOptions));

// ===============================
// ✅ Middleware
// ===============================
app.use(express.json());

// ===============================
// ✅ Routes
// ===============================
app.use("/auth", router);

// ===============================
// ✅ MongoDB Connection
// ===============================
mongoose
  .connect(process.env.MONGO || "mongodb://127.0.0.1:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ===============================
// ✅ Root Route (for testing)
// ===============================
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully!");
});

// ===============================
// ✅ Start Server
// ===============================
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});