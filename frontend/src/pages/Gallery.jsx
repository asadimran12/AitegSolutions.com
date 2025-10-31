import React, { useState, useEffect } from "react";
import image3 from "../assets/3rd.jpeg";
import image4 from "../assets/4th.jpeg";
import image5 from "../assets/5th.jpeg";
import image6 from "../assets/6th.jpeg";
import image7 from "../assets/7th.jpeg";
import image8 from "../assets/8th.jpeg";

const officeImages = [
  { id: 1, src: image3, alt: "AI-TEC Academy main gate entrance" },
  { id: 2, src: image4, alt: "Exterior view of AI-TEC Academy" },
  { id: 3, src: image5, alt: "Modern classroom in Ai-Teg Academy" },
  { id: 4, src: image6, alt: "Spacious classroom with digital screen" },
  { id: 5, src: image7, alt: "Reception and waiting area" },
  { id: 6, src: image8, alt: "Administrative workspace and office" },
];

// --- Modal Component ---
const ImageModal = ({ image, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-11/12"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto object-contain"
          style={{ maxHeight: "85vh" }}
        />
        <p className="text-center p-4 bg-gray-50 text-gray-700 font-medium">
          {image.alt}
        </p>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 text-3xl"
        >
          &times;
        </button>
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 text-4xl"
        >
          &#8249;
        </button>
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 rounded-full p-2 text-4xl"
        >
          &#8250;
        </button>
      </div>
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
    <div className="max-w-7xl mx-auto py-16 px-6 bg-gradient-to-b from-white to-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Explore Our Campus
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          A glimpse into the spaces where innovation and learning come alive.
        </p>
      </div>

      {/* ✅ Clean & Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {officeImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => openModal(index)}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl cursor-pointer bg-white transition-all duration-500 ease-in-out hover:-translate-y-2"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 md:h-72 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white font-semibold text-base md:text-lg text-center px-3">
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
