"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FaPlay, FaPause } from "react-icons/fa"; // Import Play & Pause icons
import GroomSection from "@/components/GroomSection";
import SaveTheDate from "@/components/SaveTheDate";
import OurStories from "@/components/OurStories";
import Transfer from "@/components/Transfer";
import WeddingFooter from "@/components/Footer";
import UcapanDoa from "@/components/UcapanDoa";

export default function HeroSection() {
  // Set the wedding date to a fixed date, April 13th, 2025
  const weddingDate = new Date("2025-04-13T00:00:00");

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(weddingDate));
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isClient, setIsClient] = useState(false); // State to track if it's the client

  const audioRef = useRef(null); // Referensi elemen audio

  const images = [
    "/img/CKO_8675.jpg",
    "/img/CKO_8690.jpg",
    "/img/CKO_8714.jpg",
  ];

  useEffect(() => {
    setIsClient(true); // Set client-side rendering after mount
    // Update countdown every second
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(weddingDate));
    }, 1000);

    // Auto slider every 5 seconds
    const sliderInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    // Auto-play music after page load
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.muted = false; // Unmute if muted
        audioRef.current
          .play()
          .catch((error) => console.error("Autoplay failed:", error));
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

  // Function to toggle music
  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Pause Music Button */}
      {isPlaying && (
        <button
          onClick={stopMusic}
          className="fixed top-5 right-5 z-50 p-3 bg-gray-600 rounded-full shadow-lg hover:bg-white transition"
        >
          <FaPause className="text-[#E7CCA5]" />
        </button>
      )}

      {/* Audio Element */}
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
          <p className="text-sm uppercase tracking-widest text-gray-200">
            The Wedding Of
          </p>
          <h1 className="text-4xl md:text-5xl dancing-script font-bold mt-2 text-white drop-shadow-lg">
            Fadho & Dera
          </h1>

          {/* Countdown Text */}
          <div className="mt-96">
            <h3 className="text-xl font-semibold text-[#E7CCA5]">
              Hitung Mundur
            </h3>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Menuju Acara
            </h1>
          </div>

          {/* Conditional Rendering of Countdown Timer (Client-Side Only) */}
          {isClient && (
            <div className="flex justify-center space-x-4 text-lg font-semibold mt-6">
              <div className="p-3 bg-[#E7CCA5] text-black rounded-md">
                <span className="block text-3xl">{timeLeft.days}</span>
                <span className="text-sm">Hari</span>
              </div>
              <div className="p-3 bg-[#E7CCA5] text-black rounded-md">
                <span className="block text-3xl">{timeLeft.hours}</span>
                <span className="text-sm">Jam</span>
              </div>
              <div className="p-3 bg-[#E7CCA5] text-black rounded-md">
                <span className="block text-3xl">{timeLeft.minutes}</span>
                <span className="text-sm">Menit</span>
              </div>
              <div className="p-3 bg-[#E7CCA5] text-black rounded-md">
                <span className="block text-3xl">{timeLeft.seconds}</span>
                <span className="text-sm">Detik</span>
              </div>
            </div>
          )}
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