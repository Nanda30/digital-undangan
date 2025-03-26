"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";
import Image from "next/image";

const images = [
  "/img/CKO_8435.jpg",
  "/img/CKO_8583.jpg",
  "/img/CKO_8614.jpg",
];

const thumbnails = [
  "/img/CKO_8485.jpg",
  "/img/CKO_8550.jpg",
  "/img/CKO_8696.jpg",
  "/img/CKO_8714.jpg",
  "/img/CKO_8636.jpg",
  "/img/CKO_8630.jpg",
  "/img/CKO_8707.jpg",
  "/img/CKO_8724.jpg",
];

export default function WeddingGallery() {
  return (
    <section className="text-center py-10 px-4 bg-[#E7CCA5]">
      {/* Judul & Doa */}
      <h3 className="text-sm text-[#303333] italic opensans">
        Mohon doa restu dari kami yang berbahagia
      </h3>
      <h2 className="text-lg font-bold samantha text-[#6D4C41] mt-2 leading-relaxed">
        Barakallahu laka wa baraka‘alaika wa jama‘a <br /> bainakumaa fii khair
      </h2>

      {/* Swiper Slider - Auto Slide */}
      <div className="max-w-3xl mx-auto mt-6">
        <Swiper
          modules={[Autoplay]} // Menggunakan Autoplay
          autoplay={{
            delay: 3000, // Setiap slide akan berganti dalam 3 detik
            disableOnInteraction: false, // Tetap autoplay meskipun user berinteraksi
          }}
          loop
          className="rounded-lg shadow-lg"
        >   
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Grid - Responsive Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6 mx-auto max-w-5xl">
        {thumbnails.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md group"
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              width={200}
              height={200}
              className="w-full h-auto object-cover cursor-pointer transition-transform transform group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
