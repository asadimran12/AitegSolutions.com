import React from "react";
import { useParams } from "react-router-dom";
import { eventsData } from "../components/eventsData";

// --- Image Gallery Component ---
const ImageGallery = ({ images, title }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
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
    </div>
  );
};

// --- Video Gallery Component ---
const VideoGallery = ({ videos }) => {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Event Videos</h2>
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
    </div>
  );
};

// --- Main Event Page ---
const Event = () => {
  const { eventId } = useParams();
  const event = eventsData.find((e) => e.id === eventId);

  if (!event) {
    return <h2 className="text-center mt-20">Event Not Found</h2>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          {event.description}
        </p>

        {/* Event Images */}
        <ImageGallery images={event.images} title="Event Photos" />

        {/* Certificates */}
        <ImageGallery images={event.certificate} title="Certificate Distribution" />

        {/* Event Videos */}
        <VideoGallery videos={event.videos} />
      </div>
    </div>
  );
};

export default Event;
