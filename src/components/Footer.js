"use client";
import Image from "next/image";

const ThankYouSection = () => {
  return (
    <section
      className="py-20 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/img/footer2.png')" }} // Sesuaikan path background
    >
      {/* Foto Pasangan */}
      <div className="flex justify-center">
        <div className="rounded-lg overflow-hidden border-4 border-[#D4A055] shadow-lg">
          <Image
            src="/img/CKO_8487.jpg" 
            alt="Fadho & Dera"
            width={250}
            height={250}
            className="object-cover"
          />
        </div>
      </div>

      {/* Nama Pasangan */}
      <h2 className="text-4xl md:text-5xl font-bold text-[#D4A055] mt-6 custom-font">
        Fadho & Dera
      </h2>

      {/* Teks Terima Kasih */}
      <p className="text-white text-lg font-light">Terima kasih</p>
    </section>
  );
};

const WeddingFooter = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-10 mt-10">
      {/* Nama Pengantin */}
      <div className="pb-10">
        <p className="text-lg text-gray-400">Kami yang berbahagia</p>
        <h2 className="text-4xl font-extrabold text-yellow-400 italic mt-2">
          Fadho & Dera
        </h2>
      </div>

      {/* Informasi Footer */}
      <div className="border-t border-gray-700 pt-6">
        <h3 className="text-xl font-semibold">
          undangan<span className="text-yellow-400">Undangan</span>
        </h3>
        <p className="text-gray-400 mt-2">
          Jasa undangan digital dengan desain premium dan fitur menarik.
        </p>

        <div className="flex justify-center items-center gap-4 mt-4">
          {/* Instagram */}
          <a
            href="https://instagram.com/undangan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-all"
          >
            <i className="fab fa-instagram"></i> @undangan
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6283830898404"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-all"
          >
            <i className="fab fa-whatsapp"></i> 081234567890
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-6">
          &copy; {new Date().getFullYear()} Undangan Digital. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

// Menggabungkan Kedua Section
export default function WeddingThankYouPage() {
  return (
    <>
      <ThankYouSection />
      {/* <WeddingFooter /> */}
    </>
  );
}
