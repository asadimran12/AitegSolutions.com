const express = require("express");
const mongoose = require("mongoose");
// Import the 'cors' package
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const router = require("./routers/authrouter");

app.use(cors());

app.use(
  cors({
    origin: "https://aiteg-solutions-com.vercel.app/",
  })
);

app.use(express.json());
app.use("/auth", router);

// MongoDB connection
mongoose
  .connect(process.env.MONGO || "mongodb://127.0.0.1:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
