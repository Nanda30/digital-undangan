"use client";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase"; // Import Firestore
import { collection, getDocs, addDoc, serverTimestamp, orderBy, query } from "firebase/firestore";

const UcapanDoa = () => {
  const [ucapanList, setUcapanList] = useState([]);
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Mengambil data dari Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "ucapan"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const ucapanData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            timestamp: data.timestamp ? data.timestamp.toDate() : new Date(), // Konversi timestamp
          };
        });
        setUcapanList(ucapanData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  // Menambahkan data ke Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama.trim() || !pesan.trim()) {
      alert("❌ Nama dan ucapan tidak boleh kosong!");
      return;
    }

    try {
      const newUcapan = {
        nama,
        pesan,
        timestamp: serverTimestamp(),
      };

      await addDoc(collection(db, "ucapan"), newUcapan);
      
      // Tambahkan ke UI tanpa harus refresh
      setUcapanList([{ ...newUcapan, timestamp: new Date() }, ...ucapanList]);
      
      // Reset input
      setNama("");
      setPesan("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // Pagination Logic
  const totalPages = Math.ceil(ucapanList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedUcapan = ucapanList.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="relative flex justify-center items-center py-10 px-6 bg-[url('/img/bg8.png')] bg-cover bg-center">
      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-lg opacity-40"
        style={{ backgroundImage: "url('/img/wedding-bg.jpeg')" }}
      ></div>

      <div className="relative bg-white/90 shadow-xl rounded-xl p-6 w-full max-w-lg">
        {/* Header */}
        <h2 className="text-center text-2xl samantha font-bold text-[#715b40]">
          Kirimkan Ucapan Untuk Pasangan
        </h2>

        {/* Form Ucapan */}
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input
            type="text"
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#715b40] focus:outline-none text-black"
          />
          <textarea
            rows={3}
            placeholder="Berikan Ucapan dan Doa"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#715b40] focus:outline-none text-black"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#715b40] text-white font-bold py-2 px-4 rounded-md hover:bg-[#5a4630] transition-all"
          >
            Berikan Ucapan
          </button>
        </form>

        {/* Daftar Ucapan */}
        <div className="mt-6 space-y-4">
          {displayedUcapan.map((ucapan, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md border">
              <h3 className="font-semibold text-lg text-[#715b40] text-left">{ucapan.nama}</h3>
              <p className="text-gray-700 text-left">{ucapan.pesan}</p>
              <p className="text-gray-500 text-sm mt-1 flex items-center">
                <span className="mr-2">🕒</span> {ucapan.timestamp.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            <button
              className={`px-3 py-1 rounded-md font-semibold ${
                currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-[#715b40] text-white hover:bg-[#5a4630]"
              }`}
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              « Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-md font-semibold ${
                  currentPage === index + 1 ? "bg-[#715b40] text-white" : "bg-gray-300 text-gray-700 hover:bg-[#5a4630] hover:text-white"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className={`px-3 py-1 rounded-md font-semibold ${
                currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-[#715b40] text-white hover:bg-[#5a4630]"
              }`}
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next »
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UcapanDoa;
