const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
 credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    // The .replace is required to correctly parse the multiline private key on Vercel
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({
  version: "v4",
  auth,
});

module.exports = sheets;