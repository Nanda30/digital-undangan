import React from "react";

const images = [
  "/img/bukutamu.png",
  "/img/bukutamu.png",
  "/img/bukutamu.png",
  "/img/bukutamu.png",
  "/img/bukutamu.png",
  "/img/bukutamu.png",
  "/img/bukutamu.png",
  "/img/bukutamu.png",
  "/img/bukutamu.png",
  "/img/bukutamu.png",
];

const Gallery = () => {
  return (
    <div className="bg-gray-500 text-white py-10">
      <h2 className="text-center text-3xl font-bold mb-4">Our Gallery</h2>
      <p className="text-center text-gray-400 italic mb-6">
        "Mencintai bukan untuk menyamai, tetapi keikhlasan menerima perbedaan."
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-43 lg:grid-cols-4 gap-4 px-4 md:px-16">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110 hover:shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
