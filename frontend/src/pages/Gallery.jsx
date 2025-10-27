import React, { useState, useEffect } from "react";

// Import the actual images
import image3 from "../assets/3rd.jpeg";
import image4 from "../assets/4th.jpeg";
import image5 from "../assets/5th.jpeg";
import image6 from "../assets/6th.jpeg";
import image7 from "../assets/7th.jpeg";
import image8 from "../assets/8th.jpeg";

const officeImages = [
  {
    id: 1,
    src: image3,
    alt: "Close-up of AI-TEC Academy building entrance, showing the main gate",
  },
  { id: 2, src: image4, alt: "Exterior view of AI-TEC Academy" },
  { id: 3, src: image5, alt: "A modern classroom in Ai-Teg Academy" },
  {
    id: 4,
    src: image6,
    alt: "Spacious classroom featuring a dark color palette and a wall-mounted screen.",
  },
  {
    id: 5,
    src: image7,
    alt: "Bright and professional reception or student waiting area.",
  },
  {
    id: 6,
    src: image8,
    alt: "Administrative workspace or faculty office in the Ai-Teg Academy.",
  },
];

// --- Modal Component ---
// A dedicated component for the lightbox view to keep the code clean.
const ImageModal = ({ image, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    // Cleanup event listener on component unmount
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-11/12 max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto object-contain flex-shrink-0"
          style={{ maxHeight: "calc(90vh - 4rem)" }}
        />
        <p className="text-center p-4 bg-gray-50 text-gray-800 font-medium">
          {image.alt}
        </p>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
      >
        &times;
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 transition-colors"
      >
        &#8249;
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 transition-colors"
      >
        &#8250;
      </button>
    </div>
  );
};

// --- Main Gallery Component ---
const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openModal = (index) => setCurrentImageIndex(index);
  const closeModal = () => setCurrentImageIndex(null);

  const showNextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % officeImages.length);
  };

  const showPrevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + officeImages.length) % officeImages.length
    );
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Explore Our Campus
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          A glimpse into the spaces where innovation and learning come to life.
        </p>
      </div>

      {/* Dynamic Masonry Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {officeImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openModal(index)}
            className={`group relative overflow-hidden rounded-xl shadow-lg cursor-pointer
              transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105
              ${index === 0 ? "col-span-2 row-span-2" : ""}
              ${index === 3 || index === 4 ? "md:col-span-2" : ""}
            `}
          >
            <img
              src={image.src}
              alt={image.alt}
              fetchpriority={index < 3 ? "high" : "auto"}
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
            />
            {/* Subtle overlay that slides up on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end
                           opacity-0 group-hover:opacity-100 transition-all duration-500
                           transform translate-y-8 group-hover:translate-y-0"
            >
              <p className="text-white text-base font-semibold transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {currentImageIndex !== null && (
        <ImageModal
          image={officeImages[currentImageIndex]}
          onClose={closeModal}
          onNext={showNextImage}
          onPrev={showPrevImage}
        />
      )}
    </div>
  );
};

export default Gallery;
