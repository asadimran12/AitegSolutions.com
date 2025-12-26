import React from "react";
import event2video from "../assets/event video2.mp4";
import event3video from "../assets/eventvideo3.mp4";
import event4video from "../assets/eventvideo4.mp4";
import event5video from "../assets/eventvideo5.mp4";
import event7video from "../assets/eventvideo7.mp4";

import event1 from "../assets/event2.jpeg";
import event3 from "../assets/event4.jpeg";
import event4 from "../assets/event5.jpeg";
import event5 from "../assets/event6.jpeg";
import event6 from "../assets/event8.jpeg";

// --- SVG Icons ---
const AwardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-12 h-12 text-[#02C6C8]"
  >
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 22 12 17 17 22 15.79 13.88" />
  </svg>
);

const CameraIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 mr-2 text-gray-700"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const VideoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 mr-2 text-gray-700"
  >
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

// --- Image Gallery ---
const ImageGallery = () => {
  const images = [
    { src: event1, alt: "Certificate Award" },
    { src: event3, alt: "Gift Giving" },
    { src: event4, alt: "Shield Giving to Guest" },
    { src: event5, alt: "Group Photo with Parents" },
    { src: event6, alt: "Shield Giving to Guest" },
  ];


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-52 object-cover"
            onError={(e) =>
            (e.target.src =
              "https://placehold.co/600x400/eee/333?text=Image+Error")
            }
          />
          <p className="p-3 text-center text-sm text-gray-600 font-medium">
            {image.alt}
          </p>
        </div>
      ))}
    </div>
  );
};

// --- Video Gallery ---
const VideoGallery = () => {
  const videos = [
    { title: "Chief Guest Address", src: event2video },
    { title: "Student Project Showcase", src: event3video },
    { title: "AI-TEG & Aspire MOU Signing", src: event4video },
    { title: "Award Ceremony Highlights", src: event5video },
    { title: "Innovation Exhibition", src: event7video },
  ];


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {videos.map((video, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl bg-gradient-to-b from-gray-100 to-white transform hover:-translate-y-1 transition-all duration-300"
        >
          <div className="aspect-video bg-black">
            <video
              src={video.src}
              controls
              className="w-full h-full object-cover rounded-t-2xl"
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {video.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

// --- Main Events Page ---
const Events = () => {
  return (
    <div className="bg-gray-50 min-h-screen m-4">
      <div className="container mx-auto px-4 py-10">
        {/* --- Header Section --- */}
        <section className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <AwardIcon />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Summer Camp Certification Ceremony
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrating the hard work, creativity, and achievements of our
            brilliant summer camp participants. Relive the best moments from
            this unforgettable day!
          </p>
        </section>

        {/* --- Photo Gallery --- */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <CameraIcon />
            <h2 className="text-3xl font-semibold text-gray-800">
              Event Gallery
            </h2>
          </div>
          <ImageGallery />
        </section>

        {/* --- Video Highlights --- */}
        <section>
          <div className="flex items-center mb-6">
            <VideoIcon />
            <h2 className="text-3xl font-semibold text-gray-800">
              Video Highlights
            </h2>
          </div>
          <VideoGallery />
        </section>
      </div>
    </div>
  );
};

export default Events;
