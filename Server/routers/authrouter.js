const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const Message = require("../models/message_model");
const nodemailer = require("nodemailer");

router.post("/contactus", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newMessage = new Message({ name, email, subject, message });
    newMessage.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    // ✅ Corrected mailOptions object

    const mailOptions = {
      // 1. The "from" address is your authenticated user.
      // The name can be whatever you like, e.g., "Your Website Contact Form".
      from: `"Your Website" <${process.env.EMAIL_USER}>`,

      // 2. The email is sent TO you.
      to: process.env.EMAIL_USER,

      // 3. THIS IS THE FIX: Set the user's email as the reply-to address.
      replyTo: email,

      // 4. (Optional but recommended) Make the subject more descriptive.
      subject: `New Contact Form Message: ${subject}`,

      // 5. (Optional but recommended) Include the sender's info in the body.
      html: `
    <h3>New message from ${name} (${email})</h3>
    <hr>
    <p>${message}</p>
  `,
    };

    // ✅ Send email
    await transporter.sendMail(mailOptions);
    console.log(newMessage);

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
