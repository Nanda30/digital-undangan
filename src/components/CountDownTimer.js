"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(6 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex justify-center gap-2 md:gap-4">
      {/* Ubah background dan border untuk kontras lebih baik */}
      <div className="bg-blue-950 px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-yellow-400">
        <span className="text-3xl md:text-4xl font-bold text-yellow-300 tabular-nums">
          {hours.toString().padStart(2, "0")}
        </span>
        <p className="text-xs md:text-sm font-medium text-yellow-300 mt-1">
          JAM
        </p>
      </div>

      <div className="text-2xl md:text-4xl font-bold text-yellow-300 self-center">
        :
      </div>

      <div className="bg-blue-950 px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-yellow-400">
        <span className="text-3xl md:text-4xl font-bold text-yellow-300 tabular-nums">
          {minutes.toString().padStart(2, "0")}
        </span>
        <p className="text-xs md:text-sm font-medium text-yellow-300 mt-1">
          MENIT
        </p>
      </div>

      <div className="text-2xl md:text-4xl font-bold text-yellow-300 self-center">
        :
      </div>

      <div className="bg-blue-950 px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-yellow-400">
        <span className="text-3xl md:text-4xl font-bold text-yellow-300 tabular-nums">
          {seconds.toString().padStart(2, "0")}
        </span>
        <p className="text-xs md:text-sm font-medium text-yellow-300 mt-1">
          DETIK
        </p>
      </div>
    </div>
  );
};

const PriceCard = () => {
  return (
    <div className="bg-yellow-400 p-4 md:p-6 rounded-xl max-w-xs mx-auto">
      <div className="bg-blue-900 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
        HARGA PROMO TERBATAS
      </div>
      <div className="text-blue-900">
        <p className="text-3xl md:text-4xl font-bold mb-2">
          Rp 100.000 <span className="text-lg font-normal">/ bulan</span>
        </p>
        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-block">
          Hemat Rp 99.000!
        </div>
        <div className="mt-3 bg-white/90 p-2 rounded-lg text-sm">
          <span className="line-through text-red-500">Rp 199.000</span>{" "}
          <span className="font-bold">Rp 100.000</span>
        </div>
      </div>
    </div>
  );
};

export default function CTASection() {
  const router = useRouter();


  useEffect(() => {
    if (typeof window !== "undefined" && !window.fbq) {
      const script = document.createElement("script");
      script.async = true;
      script.onload = () => {
        if (window.fbq) {
          window.fbq('init', 'YOUR_PIXEL_ID');
        }
      };
      document.head.appendChild(script);
    }
  }, []);

  const handleClick = async () => {
    if (typeof window !== "undefined" && window.fbq) {
      fbq("track", "AddToCart", {
        value: 100000,
        currency: "IDR",
      });
    } else {
      fbq("track", "AddToCart", {
        value: 100000,
        currency: "IDR",
      });
      // console.warn("Facebook Pixel tidak diinisialisasi.");
    }

    router.push("/checkout");
  };
  return (
    <section className="bg-blue-900 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-sm md:max-w-lg mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-yellow-400">
            Jangan Lewatkan Kesempatan Ini!
          </h2>
          <p className="text-lg md:text-2xl mb-6 md:mb-8 text-yellow-100">
            Penawaran Spesial Berakhir Dalam:
          </p>

          <CountdownTimer />

          <div className="mt-8">
            <PriceCard />
          </div>

          <div className="mt-8">
            <button
              onClick={handleClick}
              className="bg-green-500 hover:bg-green-600 text-white text-lg md:text-xl font-bold px-8 md:px-12 py-3 md:py-4 rounded-full inline-flex items-center gap-2 transition-all"
            >
              Tingkatkan Penjualan Sekarang! 📈
            </button>
            <p className="mt-4 text-sm md:text-base text-yellow-400 font-medium">
              ⚡ Terbatas untuk 100 pendaftar pertama
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}