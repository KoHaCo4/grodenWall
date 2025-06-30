import Beranda from "@/components/Beranda";
import Footer from "@/components/Footer";
import Product from "@/components/Products";
import TentangKami from "@/components/TentangKami";
import Link from "next/link";
import Head from "next/head";

export const metadata = {
  title: "GordenKu Grosir - Spesialis Gorden Berkualitas",
  description:
    "Toko gorden profesional dengan bahan berkualitas dan jahitan presisi. Berpengalaman lebih dari 10 tahun.",
  keywords: "gorden, tirai, window curtain, gorden, groden wall",
  metadataBase: new URL("https://groden-wall.vercel.app"),
  openGraph: {
    title: "GordenKu Grosir",
    description:
      "Tempat terbaik untuk membeli gorden custom berkualitas di Purwodadi.",
    url: "https://groden-wall.vercel.app/og.png",
    siteName: "Gorden Wall",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "GordenKu Grosir",
      },
    ],
    type: "website",
  },
};

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
