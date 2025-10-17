// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// const PORT = process.env.PORT || 3000;
// const router = require("./routers/authrouter");

// // ✅ Enhanced CORS setup to fix preflight issues
// const corsOptions = {
//   origin: [
//     "https://aiteg-solutions-com.vercel.app",
//     "https://aiteg-solutions-com-eqb5.vercel.app",
//     "http://localhost:3000",
//     "http://localhost:5173"
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true,
//   optionsSuccessStatus: 204
// };

// app.use(cors(corsOptions));

// // Ensure CORS headers are present for all routes
// app.use((req, res, next) => {
//   const origin = req.headers.origin;
//   if (corsOptions.origin.includes(origin)) {
//     res.setHeader('Access-Control-Allow-Origin', origin);
//   }
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   
//   if (req.method === 'OPTIONS') {
//     return res.status(204).end();
//   }
//   next();
// });

// app.use(express.json());
// app.use("/auth", router);

// // ✅ MongoDB connection
// mongoose
//   .connect(process.env.MONGO || "mongodb://127.0.0.1:27017/mydb", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// app.listen(PORT, () => {
//   console.log(`🚀 Server is running at http://localhost:${PORT}`);
// });
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

// ✅ Enhanced CORS setup to fix preflight issues
const corsOptions = {
  origin: [
    "https://aiteg-solutions-com.vercel.app",
    "https://aiteg-solutions-com-eqb5.vercel.app",
    "https://aiteg-solutions-com-git-main-asad-imrans-projects-a798e3ab.vercel.app",  // Removed trailing slash
    "https://aiteg-solutions-892d94nti-asad-imrans-projects-a798e3ab.vercel.app",     // Removed trailing slash
    "https://aiteg-api.vercel.app", // Added new API domain
    "http://localhost:3000",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Ensure CORS headers are present for all routes with improved debugging
app.use((req, res, next) => {
  const origin = req.headers.origin;
  console.log(`Request from origin: ${origin}`);

  // Allow requests with no origin (like mobile apps or curl requests)
  if (!origin) {
    return next();
  }

  if (corsOptions.origin.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    console.log(`Allowed origin: ${origin}`);
  } else {
    console.log(`Origin not allowed: ${origin}`);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS preflight request');
    return res.status(204).end();
  }
  next();
});

console.log("CORS middleware configured with domains:", corsOptions.origin);

// Add a test route to verify CORS is working
app.get("/cors-test", (req, res) => {
  res.json({ message: "CORS is working correctly!" });
});

// ===============================
// ✅ Middleware
// ===============================
app.use(express.json());

// ===============================
// ✅ Routes
// ===============================
app.use("/auth", router);

// ✅ MongoDB connection
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
