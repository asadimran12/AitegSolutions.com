import React from "react";
import {
  FaBullseye,
  FaEye,
  FaUserTie,
  FaChalkboardTeacher,
} from "react-icons/fa";

import about from "../assets/about.png";
import Founder from"../assets/Founder.png";
// import sirsohail from "../assets/sir sohail.jpeg";
// import siryasir from "../assets/YasirAdrees.jpeg";
// import Roshan from "../assets/Roshan.jpeg";
// import Taiba from "../assets/Taiba.jpeg";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* 🔹 Hero Section */}
      <section className=" text-center py-20 px-6 md:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-[#03347C]  mb-4">
          About <span className="text-[#02C6C8]">AI-TEG Academy</span>
        </h1>
        <p className="text-[#03347C] max-w-3xl mx-auto text-xl font-bold">
          A Project of Australian International Academy, Shalimar Town Campus
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          We are a forward-thinking institution passionate about blending
          education with technology. AI-TEG Academy is where innovation meets
          learning — helping students and professionals build future-ready
          skills.
        </p>
      </section>

      {/* 🔹 Mission & Vision Section */}
      <section className="py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-[#02C6C8] mb-3 flex items-center gap-2">
              <FaBullseye /> Our Core Philosophy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At AI-TEG Academy, education is not about memorization — it’s
              about transformation. We follow the{" "}
              <span className="font-semibold">"Learn → Create → Apply"</span>{" "}
              model that connects knowledge to real-world innovation.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#02C6C8] mb-3 flex items-center gap-2">
              <FaEye /> Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To make every school a hub of innovation, every teacher a
              tech-empowered mentor, and every student a creator of the future.
            </p>
          </div>
        </div>

        {/* 🔹 Illustration */}
        <div className="flex justify-center">
          <img
            src={about}
            alt="Mission and Vision"
            className="rounded-2xl shadow-lg w-full md:w-4/5"
          />
        </div>
      </section>

      {/* 🔹 Our Team Section */}
   {/* 🔹 Our Team Section */}
<section className="py-20 px-6 md:px-20">
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-[#03347C]">
      Meet Our <span className="text-[#02C6C8]">Leadership Team</span>
    </h2>
    <div className="w-20 h-1 bg-[#02C6C8] mx-auto mt-4 rounded-full" />
  </div>

  <div className="space-y-12 max-w-6xl mx-auto">
    {[
      {
        image: Founder,
        name: "Syed Sohail Anjum",
        role: "Founder & Director | AI-TEG Academy (AI – Training for Educators & Generations)",
        about: `Syed Sohail Anjum is an educator, AI trainer, curriculum designer, and educational innovation strategist dedicated to transforming education through Artificial Intelligence, digital technologies, and future-ready skills.

With over 25 years of experience in education, teacher training, academic leadership, and institutional development, he has trained educators, students, and school leaders to integrate AI into teaching, learning, content creation, and professional development.

As the Founder and Director of AI-TEG Academy, he leads initiatives that bridge education with emerging technologies by designing practical, project-based learning programs focused on AI literacy, prompt engineering, digital content creation, automation, coding, robotics, and career-oriented digital skills.`,
        expertise: [
          "Artificial Intelligence in Education",
          "Prompt Engineering & Generative AI",
          "AI Content Creation & Digital Media",
          "Curriculum Development & Instructional Design",
          "Teacher Professional Development",
          "Educational Technology Integration",
          "21st Century & Future Skills Education",
          "STEAM, Coding & Robotics Education",
          "Educational Leadership & Innovation",
          "AI-Based Assessment & Learning Systems",
        ],
        closing: `Under his leadership, AI-TEG Academy has developed practical training programs that empower educators to move beyond theory and confidently create professional AI-powered content, educational resources, marketing materials, presentations, videos, and digital learning experiences.

His mission is to build a future where every educator can confidently use Artificial Intelligence to teach better, create more effectively, and prepare the next generation for the rapidly evolving digital world.`,
        vision:
          "To become a global leader in AI-powered education by empowering educators and equipping generations with future-ready knowledge, practical digital skills, creativity, innovation, and lifelong learning.",
        mission: "Empowering Educators. Equipping Generations.",
      },
    ].map((member, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row gap-10 bg-white p-8 md:p-10 rounded-2xl border border-gray-200 hover:border-[#02C6C8] shadow-md hover:shadow-xl transition-all duration-300"
      >
        {/* Left: Photo */}
        <div className="md:w-1/3 flex flex-col items-center text-center">
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-[#02C6C8] shadow-lg mb-6">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">
            {member.name}
          </h3>
          <p className="text-[#03347C] font-medium mt-1 text-sm leading-snug">
            {member.role}
          </p>
        </div>

        {/* Right: Info */}
        <div className="md:w-2/3 text-left">
          {member.about.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-600 mb-4 leading-relaxed">
              {para}
            </p>
          ))}

          <h4 className="text-lg font-semibold text-[#03347C] mt-6 mb-3">
            Areas of Expertise
          </h4>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {member.expertise.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-gray-600 text-sm"
              >
                <span className="text-[#02C6C8] mt-1">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {member.closing.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-600 mb-4 leading-relaxed">
              {para}
            </p>
          ))}

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-[#03347C]/5 p-4 rounded-xl border border-[#03347C]/10">
              <p className="text-sm font-semibold text-[#03347C] mb-1">
                Vision
              </p>
              <p className="text-gray-600 text-sm">{member.vision}</p>
            </div>
            <div className="bg-[#02C6C8]/5 p-4 rounded-xl border border-[#02C6C8]/10">
              <p className="text-sm font-semibold text-[#03347C] mb-1">
                Mission
              </p>
              <p className="text-gray-600 text-sm">{member.mission}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
      {/* {Trianers} */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-[#03347C] mb-12">
          Our <span className="text-[#02C6C8]">Robotics Trainers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              name: "Zuraiz Fatima",
              descrp: "AI-Teg Robotics Trainer & Prompt Engineer",
              icon: (
                <FaChalkboardTeacher className="text-[#02C6C8] text-5xl mb-4 mx-auto" />
              ),
            },
            {
              name: "Muhammad Rooshan Nehal",
              descrp: "AI-Teg Robotics Trainer & Prompt Engineer",
               icon: (
                    <FaUserTie className="text-[#02C6C8] text-5xl mb-4 mx-auto" />
              ),
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#02C6C8] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {member.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.descrp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* {Stars} */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-[#03347C] mb-12">
          Our{" "}
          <span className="text-[#02C6C8]">Robotics, Coding & AI Stars</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              name: "Abrish Fatima",
              icon: (
                <FaChalkboardTeacher className="text-[#02C6C8] text-5xl mb-4 mx-auto" />
              ),
            },
            {
              name: "Syed Hamdan Bilal",
              icon: (
                <FaUserTie className="text-[#02C6C8] text-5xl mb-4 mx-auto" />
              ),
            },
            {
              name: "Muhmmad Taha Asif",
              icon: (
                <FaUserTie className="text-[#02C6C8] text-5xl mb-4 mx-auto" />
              ),
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#02C6C8] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {member.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.descrp}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
