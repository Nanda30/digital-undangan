"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import WeddingSlider from "@/components/WeddingSlider"; 
import GroomSection from "@/components/GroomSection";
import SaveTheDate from "@/components/SaveTheDate";
import OurStories from "@/components/OurStories";
import Transfer from "@/components/Transfer";
import WeddingFooter from "@/components/Footer";
import UcapanDoa from "@/components/UcapanDoa";
import { FaPlay, FaPause } from "react-icons/fa";

export default function HeroSection() {
  const weddingDate = new Date();
  weddingDate.setDate(weddingDate.getDate() + 10); // 10 hari dari hari ini

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(weddingDate));
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const images = [
    "/img/weedding.jpeg",
    "/img/3dc.png",
    "/img/weedding.jpeg",
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
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
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
        
         {/* Music Player */}
         <button
          onClick={toggleMusic}
          className="absolute top-5 right-5 z-20 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition"
        >
          {isPlaying ? <FaPause className="text-gray-900" /> : <FaPlay className="text-gray-900" />}
        </button>

        <audio ref={audioRef} src="/music/MarryYou.mp3" loop />

        {/* Title Section */}
        <div className="relative z-10 mt-10">
          <p className="text-sm uppercase tracking-widest text-gray-200">The Wedding Of</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 text-white drop-shadow-lg">
            Fadho & Dera
          </h1>
        </div>

        {/* Countdown Timer */}
        {/* <div className="relative z-10 mb-6 flex space-x-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center bg-gray-500/50 backdrop-blur-md rounded-lg shadow-lg text-white text-lg md:text-xl font-semibold transform hover:scale-110 transition-all duration-300"
            >
              <span>{value}</span>
              <span className="text-xs md:text-sm uppercase">{unit}</span>
            </div>
          ))}
        </div> */}
       
      </section>

      {/* OUR WEDDING SECTION */}
      <section className=" bg-white text-center">
        
        {/* Wedding Slider our weding */}
        {/* <WeddingSlider /> */}

        {/* biodata*/}
        <GroomSection />

        {/* savedate*/}
        <SaveTheDate />

          {/* */}
        <OurStories />

        <Transfer/>
        
        <UcapanDoa/>

        <WeddingFooter/>

      </section>
    </>
  );
}
