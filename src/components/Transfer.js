"use client";
import { useState } from "react";
import Image from "next/image";

export default function GiftSection() {
  const [showAccounts, setShowAccounts] = useState(false);

  const accounts = [
    {
      bankLogo: "/img/bca.png", 
      accountNumber: "4270287439",
      accountName: "A/n Fadho Ariza Raihandra ",
    },
    {
      bankLogo: "/img/bca.png", 
      accountNumber: "4270250152",
      accountName: "A/n Dera Nurildha",
    },
  ];

  // Fungsi untuk menyalin nomor rekening
  const copyToClipboard = (accountNumber) => {
    navigator.clipboard.writeText(accountNumber);
    alert("Nomor rekening telah disalin!");
  };

  return (
    <section
    className="py-12 text-center bg-cover bg-center"
    style={{ backgroundImage: "url('/img/bg8.png')" }} // Sesuaikan path background
  >
      {/* Title */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold italic text-[#E7CCA5]">Tutup Hadiah</h2>
      </div>

      {/* Description */}
      <p className="text-[#E7CCA5] leading-relaxed max-w-md mx-auto font-serif">
        Doa restu Bapak/Ibu sekalian merupakan karunia yang sangat berarti bagi kami. 
        Dan jika memberi merupakan ungkapan tanda kasih, Bapak/Ibu dapat memberi 
        kado secara cashless. Terima kasih.
      </p>

      <p className="text-sm text-white italic mt-2">
        Note: Terdapat pilihan untuk menyembunyikan daftar rekening, dan akan muncul 
        ketika klik tombol.
      </p>

      {/* Tombol Tampilkan/Sembunyikan Rekening */}
      <button
        className="mt-6 px-6 py-2 bg-gray-400 text-white font-medium rounded-md shadow-md hover:bg-[#A1887F] transition"
        onClick={() => setShowAccounts(!showAccounts)}
      >
        {showAccounts ? "Sembunyikan Rekening" : "Wedding Gift"}
      </button>

      {/* List Rekening */}
      {showAccounts && (
        <div className="mt-6 space-y-4">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4 max-w-md mx-auto border border-gray-300"
            >
              {/* Bank Logo */}
              <div className="flex items-center space-x-4">
                <Image src={account.bankLogo} alt="Bank Logo" width={50} height={30} />
                <div>
                  <p className="text-lg font-semibold text-gray-800">{account.accountNumber}</p>
                  <p className="text-sm text-gray-600">{account.accountName}</p>
                </div>
              </div>

              {/* Tombol Copy */}
              <button
                className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-md hover:bg-gray-300 transition"
                onClick={() => copyToClipboard(account.accountNumber)}
              >
                Copy
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
