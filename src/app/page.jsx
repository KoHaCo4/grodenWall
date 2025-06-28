// import Beranda from "@/components/Beranda";
// import Footer from "@/components/Footer";
// import Product from "@/components/Products";
// import TentangKami from "@/components/TentangKami";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="">
//       <Beranda />
//       <div className="h-[70vh] -top-10 overflow-hidden">
//         <TentangKami />
//       </div>
//       <div className="flex flex-col">
//         <div className="flex items-center justify-center my-10">
//           <div className="w-full max-w-4xl flex items-center gap-6 px-4">
//             <div className="flex-1 border-t border-gray-400"></div>
//             <h1 className="text-xl md:text-2xl font-semibold tracking-widest text-center relative animate-fade-in">
//               <span className="px-4 py-1 bg-white rounded shadow text-gray-800">
//                 REKOMENDASI UNTUK ANDA
//               </span>
//             </h1>

//             <div className="flex-1 border-t border-gray-400"></div>
//           </div>
//         </div>
//         <div>
//           <Product />
//         </div>
//         <div className="text-center my-6">
//           <Link href="/source/product">
//             <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition-transform transform hover:scale-105">
//               Lihat Selengkapnya →
//             </button>
//           </Link>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

import Beranda from "@/components/Beranda";
import Footer from "@/components/Footer";
import Product from "@/components/Products";
import TentangKami from "@/components/TentangKami";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gorden Wall Purwodadi - Spesialis Gorden Berkualitas</title>
        <meta
          name="description"
          content="Toko gorden profesional dengan bahan berkualitas dan jahitan presisi. Berpengalaman lebih dari 10 tahun."
        />
        <meta
          name="keywords"
          content="gorden, tirai, window curtain, gorden purwodadi, groden wall"
        />
      </Head>

      <main className="bg-white">
        {/* Hero Section */}
        <Beranda />

        {/* Tentang Kami Section */}
        <section className="relative py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <TentangKami />
          </div>
        </section>

        {/* Produk Unggulan Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                Produk Unggulan Kami
              </h2>
              <div className="w-24 h-1 bg-sky-500 rounded-full"></div>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl text-center">
                Berbagai pilihan gorden berkualitas dengan desain elegan untuk
                mempercantik ruangan Anda
              </p>
            </div>

            {/* Product List */}
            <Product />

            {/* CTA Button */}
            <div className="text-center mt-12">
              <Link href="/source/product" passHref>
                <button className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-8 py-3 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  Lihat Semua Produk →
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
