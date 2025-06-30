import Product from "@/components/Products";
import Link from "next/link";
import Head from "next/head";

export const metadata = {
  title: "GordenKu Grosir - Spesialis Gorden Berkualitas",
  description:
    "Toko gorden profesional dengan bahan berkualitas dan jahitan presisi. Berpengalaman lebih dari 10 tahun.",
  keywords: "gorden, tirai, window curtain, gorden, groden wall, grosir",
  metadataBase: new URL("https://groden-wall.vercel.app"),
  openGraph: {
    title: "GordenKu Grosir",
    description: "Tempat terbaik untuk membeli gorden custom berkualitas.",
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

const ProductPage = () => {
  return (
    <>
      <Head>
        <title>Produk Unggulan - Gorden Wall Purwodadi</title>
        <meta
          name="description"
          content="Temukan koleksi gorden unggulan kami dengan kualitas terbaik dan harga terjangkau. Berbagai model dan bahan tersedia untuk kebutuhan rumah Anda."
        />
        <meta
          name="keywords"
          content="produk gorden, katalog gorden, gorden unggulan, harga gorden, model gorden terbaru"
        />
      </Head>

      <main className="container mx-auto px-4 py-32">
        {/* Header Section */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Koleksi Gorden Unggulan
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan gorden berkualitas dengan desain elegan untuk memperindah
            ruangan Anda
          </p>
          <div className="w-24 h-1 bg-sky-500 mx-auto mt-6 rounded-full"></div>
        </section>

        {/* Product Grid */}
        <Product />

        {/* CTA Section */}
        <section className="text-center mt-12">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Tidak menemukan yang sesuai?
          </h2>
          <Link
            href="/kontak"
            className="inline-block px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg shadow-md transition-colors duration-300"
          >
            Konsultasi Desain Custom
          </Link>
        </section>
      </main>
    </>
  );
};

export default ProductPage;
