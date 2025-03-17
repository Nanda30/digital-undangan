"use client";
import Image from "next/image";

export default function SaveTheDate() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-8 px-4 bg-gray-300">
      {/* Save The Date */}
      <div className="relative z-10 max-w-lg mb-10">
        <h1 className="text-[45px] font-bold playfair text-[#928573]">
          Save The Date
        </h1>

        <p className="text-[12px] font-bold samantha text-[#303333] mt-4 leading-relaxed">
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
          لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ
          اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </p>

        <p className="text-[12px] opensans text-[#303333] mt-4 leading-relaxed">
          Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
          pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu merasa
          tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih
          sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
          tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
        </p>

        <p className="text-[12px] samantha text-[#303333] mt-6">
          - Ar-Rum · Ayat 21 -
        </p>
      </div>

    {/* Cards Section */}
<div className="grid md:grid-cols-2 gap-8">
  {/* Akad Pernikahan */}
  <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-[#d1c4b8] text-[#4a3b2d]">
    <h2 className="text-2xl font-bold sofia text-center">Akad Pernikahan</h2>
    <p className="text-lg font-semibold text-center mt-2 source-sans">April</p>
    
    {/* Tanggal */}
    <div className="flex items-center justify-center mt-2 space-x-2 source-sans">
      <span className="text-sm font-medium source-sans">Minggu</span>
      <span className="text-5xl font-bold sofia text-[#4a3b2d]">13</span>
      <span className="text-sm font-medium source-sans">2025</span>
    </div>

    {/* Waktu & Lokasi */}
    <p className="text-sm text-center mt-3 source-sans">Pukul <span className="font-semibold source-sans">08:00 WIB - 10:00 WIB</span></p>
    <p className="text-sm text-center source-sans">Asrama IPB Sukasari SV IPB, Bogor</p>

    {/* Tombol */}
    
  </div>

  {/* Resepsi Pernikahan */}
  <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 border border-[#d1c4b8] text-[#4a3b2d]">
    <h2 className="text-2xl font-bold sofia text-center">Resepsi Pernikahan</h2>
    <p className="text-lg font-semibold text-center mt-2 source-sans">April</p>
    
    {/* Tanggal */}
    <div className="flex items-center justify-center mt-2 space-x-2">
      <span className="text-sm font-medium source-sans">Minggu</span>
      <span className="text-5xl font-bold sofia text-[#4a3b2d]">13</span>
      <span className="text-sm font-medium source-sans">2025</span>
    </div>

    {/* Waktu & Lokasi */}
    <p className="text-sm text-center mt-3 font-semibold source-sans">10:00 - Selesai</p>
    <p className="text-sm text-center source-sans">Asrama IPB Sukasari SV IPB, Bogor</p>

    {/* Tombol */}
    
  </div>
</div>


      {/* mpas */}
      <p className="text-[12px] opensans text-[#303333] leading-relaxed max-w-md py-6">
        Besar harapan kami jika Bapak/Ibu/Sahabat/Sdr/i berkenan hadir pada acara ini. 
        Atas perhatiannya Terima kasih.
      </p>

      <div className="mt-4 w-full max-w-md">
        {/* <iframe
          className="w-full h-[300px] rounded-md shadow-md"
          src="https://www.google.com/maps/place/Asrama+IPB+Sukasari+SV+IPB/@-6.6140342,106.8042224,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69c561607ca6cf:0x92c537da16058b0a!8m2!3d-6.6140396!4d106.8088358!16s%2Fg%2F11rwmhw9yz?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <iframe   className="w-full h-[300px] rounded-md shadow-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2643713610178!2d106.80883580000001!3d-6.614039600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c561607ca6cf%3A0x92c537da16058b0a!2sAsrama%20IPB%20Sukasari%20SV%20IPB!5e0!3m2!1sid!2sid!4v1741888684853!5m2!1sid!2sid"></iframe>
      </div>

    </section>
  );
}
