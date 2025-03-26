"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FaPlay, FaPause } from "react-icons/fa"; // Import ikon Play & Pause
import GroomSection from "@/components/GroomSection";
import SaveTheDate from "@/components/SaveTheDate";
import OurStories from "@/components/OurStories";
import Transfer from "@/components/Transfer";
import WeddingFooter from "@/components/Footer";
import UcapanDoa from "@/components/UcapanDoa";


export default function HeroSection() {
  const weddingDate = new Date();
  weddingDate.setDate(weddingDate.getDate() + 10); // 10 hari dari hari ini

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(weddingDate));
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); 

  const audioRef = useRef(null); // Referensi elemen audio

  const images = [
    "/img/CKO_8675.jpg",
    "/img/CKO_8690.jpg",
    "/img/CKO_8714.jpg",
  ];

  useEffect(() => {
    // Update countdown setiap detik
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(weddingDate));
    }, 1000);

    // Auto slider setiap 5 detik
    const sliderInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    // Auto-play musik setelah halaman dimuat
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = false; // Menghilangkan mute jika ada
        audioRef.current.play().catch((error) => console.error("Autoplay gagal:", error));
      }
    };

    playAudio();

    return () => {
      clearInterval(interval);
      clearInterval(sliderInterval);
    };
  }, []);

  function getTimeRemaining(targetDate) {
    const total = targetDate - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
  }

  // Fungsi untuk toggle musik
  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
     {/* Tombol Pause Musik */}
     {isPlaying && (
        <button
          onClick={stopMusic}
          className="fixed top-5 right-5 z-50 p-3 bg-gray-600 rounded-full shadow-lg hover:bg-white transition"
        >
          <FaPause className="text-[#E7CCA5]" />
        </button>
      )}

      {/* Elemen Audio dengan Auto-Play */}
      <audio ref={audioRef} src="/music/sempurna.mp3" autoPlay loop muted />
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-between text-center text-white">
        {/* Background Slider */}
        <div className="absolute inset-0">
          <Image
            src={images[currentImage]}
            alt="Wedding Background"
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Title Section */}
        <div className="relative z-10 mt-10">
          <p className="text-sm uppercase tracking-widest text-gray-200">The Wedding Of</p>
          <h1 className="text-4xl md:text-5xl dancing-script font-bold mt-2 text-white drop-shadow-lg">
            Fadho & Dera
          </h1>
        </div>
      </section>


      {/* OUR WEDDING SECTION */}
      <section className="bg-white text-center">
        <GroomSection />
        <SaveTheDate />
        <OurStories />
        <Transfer />
        <UcapanDoa />
        <WeddingFooter />
      </section>
    </>
  );
}
