import React, { useState } from "react";
import axios from "axios";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    message: null,
    type: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ message: "Please fill out all fields.", type: "error" });
      return;
    }

    setStatus({ message: "Sending...", type: "sending" });
    console.log(formData)
    try {
      const response = await axios.post(
        "https://aiteg-solutions-com-eqb5.vercel.app/auth/contactus",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        console.log("Message sent successfully:", response.data);
        setStatus({
          message: "Message sent successfully! We'll be in touch soon.",
          type: "success",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          message: `Failed to send message: ${response.statusText}`,
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus({
        message:
          error.response?.data?.message ||
          "A network error occurred. Please try again later.",
        type: "error",
      });
    }
  };

  const StatusMessage = ({ message, type }) => {
    if (!message) return null;
    let baseClasses = "mt-4 p-4 rounded-lg font-medium";
    let styleClasses = "";

    switch (type) {
      case "success":
        styleClasses = "bg-green-100 text-green-700 border border-green-200";
        break;
      case "error":
        styleClasses = "bg-red-100 text-red-700 border border-red-200";
        break;
      case "sending":
        styleClasses = "bg-blue-100 text-blue-700 border border-blue-200";
        break;
      default:
        return null;
    }

    return <div className={`${baseClasses} ${styleClasses}`}>{message}</div>;
  };

  return (
    <section className="text-gray-800 py-20 px-6 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get In <span className="text-[#02C6C8]">Touch</span> With Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Have questions or need help? We’re always ready to guide you toward
          your learning goals. Contact us through the form or reach out using
          the details below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div className="space-y-10">
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 space-y-6">
            <div className="flex items-start gap-4">
              <MdLocationOn className="text-3xl text-[#02C6C8]" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Our Location</h4>
                <p className="text-gray-600 leading-relaxed">
                  Shalimar Town, Phalia, Punjab, Pakistan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdEmail className="text-3xl text-[#02C6C8]" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Email Address</h4>
                <p className="text-gray-600">ssanjum6m@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdPhone className="text-3xl text-[#02C6C8]" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Phone Number</h4>
                <p className="text-gray-600">+92-41-1599845</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Ai-teg Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11343.837894360696!2d73.5857218698188!3d32.65825722485542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f6920f01b023f%3a0xc666993a404b9011!2sPhalia%2c%20Mandi%20Bahauddin%2c%20Punjab%2c%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="320"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full h-80"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-10 border border-gray-100 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#02C6C8] focus:ring-2 focus:ring-[#02C6C8]/30 outline-none transition"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#02C6C8] focus:ring-2 focus:ring-[#02C6C8]/30 outline-none transition"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Enter the subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#02C6C8] focus:ring-2 focus:ring-[#02C6C8]/30 outline-none transition"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="5"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#02C6C8] focus:ring-2 focus:ring-[#02C6C8]/30 outline-none transition resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status.type === "sending"}
            className="w-full py-3 bg-[#02C6C8] hover:bg-[#00b1b3] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status.type === "sending" ? "Sending..." : "Send Message"}
          </button>

          <StatusMessage message={status.message} type={status.type} />
        </form>
      </div>
    </section>
  );
};

export default Contactus;
