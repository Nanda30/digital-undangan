"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function WeddingSlider() {
  const images = [
    "/img/weedding.jpeg",
    "/img/3dc.png",
    "/img/weedding.jpeg",
    "/img/3dc.png",
    "/img/weedding.jpeg",
  ];

  return (
    <section
      className="py-8 bg-gray-50 text-center bg-cover bg-center"
      // style={{ backgroundImage: "url('/img/bg3.png')" }}
    >
      {/* Title Section */}
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-xl md:text-2xl font-light uppercase tracking-wide text-gray-700">
          OUR
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 serif-font">
          WEDDING
        </h1>
        <p className="mt-4 text-[#90552C] leading-relaxed font-serif">
          Atas Rahmat Tuhan Yang Maha Esa, kami bermaksud mengundang Anda di acara Kami.
          Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i
          berkenan hadir dan memberikan doa restu pada.
        </p>
      </div>

      {/* Image Sliders */}
      <div className="max-w-5xl mx-auto mt-10 space-y-6">
        {/* First Image Slider */}
        <div className="overflow-hidden">
          <Marquee pauseOnHover={true} speed={50}>
            {images.map((src, index) => (
              <div
                key={index}
                className="mx-4 shadow-md rounded-lg overflow-hidden border border-gray-300"
              >
                <Image
                  src={src}
                  alt={`Wedding ${index + 1}`}
                  width={150}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </Marquee>
        </div>

        {/* Second Image Slider */}
        <div className="overflow-hidden">
          <Marquee pauseOnHover={true} speed={50} direction="right">
            {images.map((src, index) => (
              <div
                key={index}
                className="mx-4 shadow-md rounded-lg overflow-hidden border border-gray-300"
              >
                <Image
                  src={src}
                  alt={`Wedding ${index + 1}`}
                  width={150}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
