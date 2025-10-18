const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Use the only writable directory in Vercel
const uploadDir = "/tmp/uploads";

// Vercel may not create the /tmp folder structure, so we do it ourselves
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save to the temporary directory
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });
module.exports = upload;