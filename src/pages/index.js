import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSearchParams } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Ambil dan decode parameter nama & partner dari URL
  const nama = searchParams.get("nama") ? decodeURIComponent(searchParams.get("nama")).trim() : "";
  const partner = searchParams.get("partner") ? decodeURIComponent(searchParams.get("partner")).trim() : "";

  const handleOpenInvitation = () => {
    router.push('/folder-masuk');
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-between text-center text-white px-6 py-12">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/img/depan.jpg" 
          alt="Fadho & Dera" 
          layout="fill" 
          objectFit="cover" 
          className="brightness-75" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/90"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 mt-10">
        <p className="text-sm uppercase tracking-widest text-gray-200">
          The Wedding Of
        </p>
        <h1 className="text-4xl md:text-5xl dancing-script font-bold mt-2 text-white drop-shadow-lg">
          Dera & Fadho
        </h1>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 mb-10">
        <p className="text-sm text-gray-300">Kepada Yth,</p>

        {/* Nama dan Partner */}
        <p className="text-lg md:text-xl font-semibold text-yellow-400 whitespace-pre-line">
          {nama || "Kamu"} {partner ? `& ${partner}` : ""}
        </p>

        <p className="mt-4 max-w-lg mx-auto text-gray-200 text-sm leading-relaxed poppins">
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.
        </p>
        
        {/* Button */}
        <button 
          className="mt-6 px-5 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-medium text-sm rounded-md shadow-md transform hover:scale-105 transition-all duration-300"
          onClick={handleOpenInvitation}
        >
          ❤️ Buka Undangan
        </button>

        <p className="mt-3 text-xs italic text-gray-400">
          *Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </p>
      </div>
    </section>
  );
}
