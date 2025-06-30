"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TentangKami = () => {
  const pathname = usePathname();
  const [showBG, setShowBG] = useState(false);

  useEffect(() => {
    setShowBG(pathname === "/source/about");
  }, [pathname]);

  return (
    <section className="relative w-full pt-10 min-h-screen bg-gray-600 text-white overflow-hidden">
      {/* Background Image */}
      {showBG && (
        <div className="fixed inset-0 z-0">
          <Image
            src="/img/bg.jpg"
            alt="Background Toko Gorden"
            fill
            priority
            quality={80}
            className="object-cover opacity-30"
          />
        </div>
      )}

      {/* Konten Utama */}
      <div className="container mx-auto px-4 py-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Bagian Teks */}
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Tentang GORDENKU GROSIR
          </h1>

          <p className="text-lg text-gray-200 mb-8 animate-fade-in delay-100">
            Spesialis gorden berkualitas tinggi dengan berbagai pilihan desain
            modern dan klasik untuk memperindah setiap ruangan Anda.
          </p>

          {/* Card Informasi */}
          <div className="bg-gray-700/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg animate-fade-in delay-200">
            <h2 className="text-2xl font-semibold mb-4 text-sky-400">
              Profesional & Berpengalaman
            </h2>
            <p className="text-gray-100 mb-6">
              Dengan pengalaman lebih dari 10 tahun di industri gorden, kami
              berkomitmen untuk menyediakan produk berkualitas dengan bahan
              terbaik dan jahitan presisi.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-sky-400 mt-1">✓</div>
                <p>Bahan import dan lokal berkualitas</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-sky-400 mt-1">✓</div>
                <p>Desain custom sesuai kebutuhan</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-sky-400 mt-1">✓</div>
                <p>Pemasangan profesional</p>
              </div>
            </div>

            <a
              href="https://wa.me/6281324842510"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Konsultasi Gratis via WhatsApp
            </a>
          </div>
        </div>

        {/* Bagian Gambar */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md h-[500px]">
            <Image
              src="/img/gambar2.jpg"
              alt="Contoh Produk Gorden"
              fill
              priority
              quality={90}
              className="object-cover rounded-2xl shadow-xl transition-transform duration-500 hover:scale-105"
              style={{
                clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
