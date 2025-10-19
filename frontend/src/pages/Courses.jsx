import React from "react";
import AIpro from "../assets/AI & Digital Literacy Programs.png";
import TeacherCert from "../assets/TeacherCert.png";
import ParentCert from "../assets/ParentCert.png";
import EQM from "../assets/EQM.png";
import AIS from "../assets/AIS.png";

const Courses = () => {
  const [showdesc, setShowdesc] = React.useState(null);

  const programs = [
    {
      // Added classes for proper image scaling
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

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        Our <span className="text-[#02C6C8]">Programs & Courses</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {programs.map((course, index) => (
          <div
            key={index}
            onClick={() => setShowdesc(showdesc === index ? null : index)}
            // --- KEY CHANGES FOR SMOOTH ANIMATION ---
            // 1. Set a fixed height to prevent grid resizing.
            // 2. 'relative' positions children absolutely within this card.
            // 3. Longer, smoother transition duration.
            className={`
              relative h-80 rounded-2xl border shadow-md
              transition-all duration-500 ease-in-out 
              hover:-translate-y-2 cursor-pointer overflow-hidden p-6
              flex items-center justify-center
              ${
                showdesc === index
                  ? "bg-[#02C6C8] text-white shadow-2xl"
                  : "bg-white border-gray-200 hover:border-[#02C6C8] hover:shadow-xl"
              }
            `}
          >
            {/* "Front" of the Card: Icon and Title */}
            <div
              // --- Animates out by fading and shrinking ---
              className={`
                absolute inset-0 flex flex-col items-center justify-center
                transition-all duration-500 ease-in-out
                ${showdesc === index ? "opacity-0 scale-95" : "opacity-100 scale-100"}
              `}
            >
              <div className="w-full h-48 flex items-center justify-center">
                {course.icon}
              </div>
              <h3 className={`text-xl mt-3 font-semibold text-gray-900 mb-3 ${showdesc === index ? 'text-white' : 'text-gray-900'}`}>
                {course.title}
              </h3>
            </div>

            {/* "Back" of the Card: Description */}
            <div
              // --- Animates in by fading and growing to normal size ---
              className={`
                absolute inset-0 flex items-center justify-center p-4
                transition-all duration-500 ease-in-out
                ${showdesc === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}
              `}
            >
              <p className="text-base md:text-lg leading-relaxed text-white">
                {course.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;