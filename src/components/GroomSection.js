"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa"; // Import Icon Instagram

export default function GroomSection() {
  return (
    <section className="container mx-auto max-w-screen-lg px-6 py-7 bg-[url('/img/bg5.png')] bg-cover bg-center">
      {/* Grid 2 Kolom */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
        
        {/* Bagian Teks (Kiri) */}
        <div className="flex justify-center">
          <div className="relative w-[250px] h-[320px] md:w-[300px] md:h-[400px] overflow-hidden rounded-full shadow-lg border-4 border-[#E7CCA5]">
            <Image
              src="/img/CKO_8755.jpg"
              alt="The Bride"
              layout="fill"
              objectFit="cover"
              className="scale-100 object-[55%] scale-x-[-1]" 
            />
          </div>
        </div>


        {/* Bagian Teks (Kanan) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <h1 className="text-[27px] text-[#E7CCA5] font-bold belisa leading-tight">
            Dera Nurildha
          </h1>

          <div className="border-t border-[#E7CCA5] w-16 my-2"></div> {/* Garis Pembatas */}

          <p className="text-[12px] text-[#E7CCA5] font-playfair leading-relaxed">
            <span className="block source-sans">Putri dari Pasangan</span>
            <span className="block source-sans">Ayah Dede Ahadi &</span>
            <span className="block source-sans">Ibu Ira Rahmawati</span>
            <span className="block source-sans">Beralamat di Bogor</span>
          </p>

          <div className="border-t border-[#E7CCA5] w-16 my-2"></div> {/* Garis Pembatas */}

          {/* Button Instagram */}
          <Link href="https://www.instagram.com/deranurildha/" target="_blank">
            <button className="mt-2 flex items-center gap-2 px-2 py-1 text-[10px] text-black bg-[#E7CCA5] rounded-full shadow-md hover:bg-[#d6b98f] transition">
              <FaInstagram className="text-lg" />
              Deranurildha
            </button>
          </Link>
        </div>
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <h1 className="text-[27px] text-[#E7CCA5] font-bold belisa leading-tight">
            Fadho Ariza Raihandra
          </h1>

          <div className="border-t border-[#E7CCA5] w-16 my-2"></div> {/* Garis Pembatas */}

          <p className="text-[12px] text-[#E7CCA5] font-playfair leading-relaxed">
            <span className="block source-sans">Putra dari Pasangan</span>
            <span className="block source-sans">Ayah Hamdani Chaniago &</span>
            <span className="block source-sans">Ibu Komariah</span>
            <span className="block source-sans">Beralamat di Bogor</span>
          </p>

          <div className="border-t border-[#E7CCA5] w-16 my-2"></div> {/* Garis Pembatas */}

          {/* Button Instagram */}
          <Link href="https://www.instagram.com/fadhoariza/" target="_blank">
            <button className="mt-2 flex items-center gap-2 px-2 py-1 text-[10px] text-black bg-[#E7CCA5] rounded-full shadow-md hover:bg-[#d6b98f] transition">
              <FaInstagram className="text-lg" />
              Fadhoariza
            </button>
          </Link>
        </div>

        {/* Bagian Gambar (Kanan) */}
        <div className="flex justify-center">
        <div className="relative w-[250px] h-[320px] md:w-[300px] md:h-[400px] overflow-hidden rounded-full shadow-lg border-4 border-[#E7CCA5]">
    <Image
      src="/img/CKO_8761.jpg"
      alt="The Groom"
      layout="fill"
      objectFit="cover"
      className="scale-160 object-[70%]" // Zoom lebih besar & geser ke kanan
    />
  </div>
      </div>
      </div>

      {/* Grid 2 Kolom (Untuk Pasangan) */}
      
    </section>
  );
}
