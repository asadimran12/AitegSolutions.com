import React, { useState } from "react";
import AIpro from "../assets/AI & Digital Literacy Programs.png";
import TeacherCert from "../assets/TeacherCert.png";
import ParentCert from "../assets/ParentCert.png";
import EQM from "../assets/EQM.png";
import AIS from "../assets/AIS.png";

const Courses = () => {
  const [showdesc, setShowdesc] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [successLogin, setSuccessLogin] = useState(false);
  const [selectedDiploma, setSelectedDiploma] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const programs = [
    {
      icon: <img src={AIpro} alt="AI & Digital Literacy Programs" className="max-h-full max-w-full object-contain" />,
      title: "AI & Digital Literacy Programs",
      desc: "Empowering educators and students with practical AI tools — including ChatGPT, MagicSchool AI, Canva AI, Fetchy, and more. Participants learn prompt engineering, digital creativity, and automation skills essential for the modern world.",
    },
    {
      icon: <img src={TeacherCert} alt="Teacher Capacity-Building & Certification" className="max-h-full max-w-full object-contain" />,
      title: "Teacher Capacity-Building & Certification",
      desc: "AI-TEG Academy designs immersive Teacher Training Workshops on AI in education, differentiated teaching, classroom management, emotional intelligence, and innovative assessment. Each program includes certification and practical implementation plans.",
    },
    {
      icon: <img src={ParentCert} alt="Mindful Parenting & Family Engagement" className="max-h-full max-w-full object-contain" />,
      title: "Mindful Parenting & Family Engagement",
      desc: "Our Parenting Certification Program helps families understand emotional growth, discipline, and digital balance in the modern age. We bridge home and school relationships to create emotionally intelligent learners.",
    },
    {
      icon: <img src={EQM} alt="EQM – Educational Quality Management System" className="max-h-full max-w-full object-contain" />,
      title: "EQM – Educational Quality Management System",
      desc: "AI-TEG Academy offers a 134-Point Quality Framework to help schools maintain excellence across academics, administration, and environment. Our EQM audits, 360° management reviews, and dashboards ensure measurable growth and sustainable quality improvement.",
    },
    {
      icon: <img src={AIS} alt="AI-Driven Consultancy for Schools" className="max-h-full max-w-full object-contain" />,
      title: "AI-Driven Consultancy for Schools",
      desc: "From curriculum design to leadership training — we help schools integrate AI, Robotics, and Future Skills strategically. Our consultancy includes curriculum digitization, teacher analytics, branding strategies, and AI-assisted academic planning tools.",
    },
  ];

  const diplomas = [
    {
      title: "Level 1 Diploma",
      whatsappLink: "https://chat.whatsapp.com/Hdbi4EgEyH8KEDjXRCvYwE?s=cl&p=i&mlu=0"
    },
    {
      title: "Level 2 Diploma",
      whatsappLink: ""
    },
    {
      title: "Professional Developer Diploma",
      whatsappLink: "https://chat.whatsapp.com/Bfe3ZQvXkRwBzk3Pql19jn"
    }
  ];

  const openLoginModal = (dip) => {
    setSelectedDiploma(dip);
    setError(""); // Clear previous errors
    setName(""); // Clear previous inputs
    setPassword("");
    setIsLogin(true);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear errors on new attempt
    setLoading(true);
    console.log(import.meta.env.VITE_BACKEND_URL)

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: name,
          Password: password
        }),
      });

      const data = await response.json();
      console.log(data)

      if (response.ok) {
        setSuccessLogin(true);
        setIsLogin(false); // Close login modal only on success
        setName(""); // Reset form data
        setPassword("");
      } else {
        setError(data.message || "Invalid name or password.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("A network error occurred. Please try again.");
    } finally {
      setLoading(false); // Ensure loading resets in both success & error paths
    }
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 text-center relative">

      {/* Diplomas Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Our <span className="text-[#02C6C8]">Diplomas</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto">
        {diplomas.map((dip, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-4">
            <h3 className="text-lg font-semibold text-gray-800">{dip.title}</h3>
            <button
              onClick={() => openLoginModal(dip)}
              className="bg-[#02C6C8] text-white px-6 py-2 rounded-full font-medium hover:bg-gray-900 transition-colors duration-300 w-full max-w-[150px]"
            >
              Login
            </button>
          </div>
        ))}
      </div>

      {/* Programs Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        Our <span className="text-[#02C6C8]">Programs & Courses</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {programs.map((course, index) => (
          <div
            key={index}
            className={`
              relative h-80 rounded-2xl border shadow-md
              transition-all duration-500 ease-in-out 
              hover:-translate-y-2 overflow-hidden p-6
              flex items-center justify-center
              ${showdesc === index
                ? "bg-[#02C6C8] text-white shadow-2xl border-[#02C6C8]"
                : "bg-white border-gray-200 hover:border-[#02C6C8] hover:shadow-xl"
              }
            `}
          >
            {/* Front of the Card */}
            <div
              className={`
                absolute inset-0 flex flex-col items-center justify-center p-4
                transition-all duration-500 ease-in-out
                ${showdesc === index ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100 pointer-events-auto"}
              `}
            >
              <div className="w-full h-32 flex items-center justify-center mb-4">
                {course.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 px-2">
                {course.title}
              </h3>
              <button
                onClick={() => setShowdesc(index)}
                className="bg-[#02C6C8] cursor-pointer text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors duration-300"
              >
                Show Details
              </button>
            </div>

            {/* Back of the Card */}
            <div
              className={`
                absolute inset-0 flex flex-col items-center justify-center p-6
                transition-all duration-500 ease-in-out
                ${showdesc === index ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-105 pointer-events-none"}
              `}
            >
              <p className="text-sm md:text-base leading-relaxed text-white mb-6">
                {course.desc}
              </p>
              <button
                onClick={() => setShowdesc(null)}
                className="bg-white cursor-pointer text-[#02C6C8] font-medium px-6 py-2 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300"
              >
                Hide Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Login Modal Overlay */}
      {isLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm relative text-left overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-[#02C6C8] p-6 text-center relative">
              <button
                onClick={() => setIsLogin(false)}
                disabled={loading}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors text-xl font-bold disabled:opacity-50"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-white">Welcome Back</h3>
              <p className="text-teal-50 text-sm mt-1">Please login to continue</p>
            </div>

            {/* Modal Body/Form */}
            <form onSubmit={handleLoginSubmit} className="p-6 space-y-5">
              
              {/* Error Message Display */}
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100 text-center animate-in fade-in">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  disabled={loading}
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#02C6C8] focus:border-[#02C6C8] focus:bg-white outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  disabled={loading}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#02C6C8] focus:border-[#02C6C8] focus:bg-white outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center py-3 rounded-xl font-semibold text-white transition-all
                  ${loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#02C6C8] hover:bg-gray-900"
                  }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal Overlay */}
      {successLogin && selectedDiploma && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-sm text-center shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            
            {/* Success Icon */}
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Login Successful!
            </h2>

            <p className="text-gray-600 mb-8">
              Welcome to <strong>{selectedDiploma.title}</strong>
            </p>

            <div className="space-y-3">
              <a
                href="https://forms.gle/4XLv8BnqFi41YT4a7"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#02C6C8] hover:bg-[#02a7a9] text-white py-3 rounded-xl font-medium transition-colors"
              >
                Submit Form
              </a>

              {selectedDiploma.whatsappLink && (
                <a
                  href={selectedDiploma.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium transition-colors"
                >
                  Join WhatsApp Group
                </a>
              )}

              <button
                onClick={() => setSuccessLogin(false)}
                className="block w-full border border-gray-200 text-gray-600 hover:bg-gray-50 py-3 rounded-xl font-medium transition-colors mt-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;