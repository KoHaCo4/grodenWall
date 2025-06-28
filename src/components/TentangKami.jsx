// "use client";

// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// const TentangKami = () => {
//   const pathname = usePathname();
//   const [showBG, setShowBG] = useState(false);

//   useEffect(() => {
//     if (pathname == "/source/about") {
//       setShowBG(true);
//     }
//   }, [pathname]);
//   return (
//     <section
//       className={`grid grid-cols-2 overflow-hidden px-[20%] py-4 w-full min-h-screen bg-gray-600 text-white`}
//     >
//       {showBG && (
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/img/bg.jpg"
//             alt="Gorden Background"
//             fill
//             className="object-cover opacity-30"
//           />
//         </div>
//       )}

//       {/* Overlay dan Konten */}
//       <div className="z-10 flex flex-col">
//         <h1 className="text-4xl md:text-5xl font-bold animate-fade-in tracking-tighter">
//           Tentang Kami
//         </h1>
//         <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl font-light tracking-tight animate-fade-in delay-200">
//           Menyediakan gorden berkualitas tinggi dengan berbagai pilihan desain,
//           warna, dan bahan untuk mempercantik ruangan Anda.
//         </p>

//         {/* Card Info */}
//         <div className="mt-10 bg-gray-700 bg-opacity-80 p-8 rounded-2xl shadow-xl max-w-2xl animate-fade-in delay-500">
//           <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-sky-400">
//             GRODEN WALL PURWODADI
//           </h2>
//           <p className="text-gray-100 tracking-tight">
//             Kami adalah toko spesialis gorden dengan pengalaman lebih dari 10
//             tahun. Kualitas, kenyamanan, dan estetika adalah prioritas kami
//             dalam mempercantik rumah, kantor, dan ruang usaha Anda.
//           </p>

//           {/* Tombol CTA */}
//           <a
//             href="https://wa.me/6281234567890" // Ganti dengan nomor WA kamu
//             target="_blank"
//             className="inline-block mt-6 px-6 py-3 bg-sky-400 hover:bg-sky-500 text-white font-semibold rounded-lg transition duration-300"
//           >
//             Hubungi Kami
//           </a>
//         </div>
//       </div>
//       <div className="px-[15%] gap-1 pt-4 flex">
//         <img
//           src="/img/gambar2.jpg"
//           alt="about"
//           className="rounded-full w-[300px] h-[500px] max-h-[calc(100vh-4rem)] object-cover transition-transform duration-200 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
//           style={{
//             clipPath:
//               "polygon(60% 0%, 100% 30%, 100% 70%, 60% 100%, 0% 70%, 0% 30%)",
//           }}
//         />
//       </div>
//     </section>
//   );
// };

// export default TentangKami;

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
            Tentang GRODEN WALL PURWODADI
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
