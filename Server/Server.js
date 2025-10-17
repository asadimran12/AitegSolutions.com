// Server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const router = require("./routers/authrouter");

// CORS config
app.use(
  cors({
    origin: "https://aiteg-solutions-com.vercel.app",
    methods: ["GET","POST","PUT","DELETE","OPTIONS"],
    allowedHeaders: ["Content-Type","Authorization"],
    credentials: true,
  })
);
app.options("*", cors());

app.use(express.json());
app.use("/auth", router);

// Mongo connection (optional on serverless — keep it)
mongoose
  .connect(process.env.MONGO || "mongodb://127.0.0.1:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Export app for Vercel
module.exports = app;
