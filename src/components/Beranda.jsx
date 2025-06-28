"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Beranda = () => {
  const pathname = usePathname();
  const [heightClass, setHeightClass] = useState("h-[30vh]");

  useEffect(() => {
    // Perbaikan typo 'heigh' menjadi 'heightClass'
    // Tambahkan dependency array untuk mencegah infinite loop
    setHeightClass(pathname === "/" ? "h-[50vh]" : "h-[30vh]");
  }, [pathname]); // Tambahkan pathname sebagai dependency

  return (
    <div className="w-full">
      {" "}
      {/* Ubah w-screen ke w-full untuk menghindari horizontal scroll */}
      {/* Hero Section */}
      <div
        className={`relative w-full ${heightClass} transition-all duration-300`}
      >
        <img
          src="/img/bg.jpg"
          alt="Toko Gorden"
          className="w-full h-full object-cover"
          loading="eager" // Prioritaskan loading gambar hero
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Selamat Datang
            </h1>
            <p className="text-white text-lg md:text-xl">
              Toko Gorden Terpercaya & Berkualitas
            </p>
            {/* Tambahan CTA Button */}
            <button className="mt-6 bg-white text-primary px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
              Lihat Katalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
