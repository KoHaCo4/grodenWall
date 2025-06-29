import TentangKami from "@/components/TentangKami";
import Head from "next/head";

export const metadata = {
  title: "Gorden Wall Purwodadi - Spesialis Gorden Berkualitas",
  description:
    "Toko gorden profesional dengan bahan berkualitas dan jahitan presisi. Berpengalaman lebih dari 10 tahun.",
  keywords: "gorden, tirai, window curtain, gorden purwodadi, groden wall",
  metadataBase: new URL("https://groden-wall.vercel.app"),
  openGraph: {
    title: "Gorden Wall Purwodadi",
    description:
      "Tempat terbaik untuk membeli gorden custom berkualitas di Purwodadi.",
    url: "https://groden-wall.vercel.app",
    siteName: "Gorden Wall",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Gorden Wall",
      },
    ],
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Tentang Kami - Gorden Wall Purwodadi</title>
        <meta
          name="description"
          content="Toko gorden profesional dengan pengalaman lebih dari 10 tahun. Spesialis gorden berkualitas dengan bahan terbaik dan jahitan presisi."
        />
        <meta
          name="keywords"
          content="tentang kami, profil perusahaan, sejarah gorden wall, visi misi, tim kami"
        />
        <meta
          property="og:title"
          content="Tentang Kami - Gorden Wall Purwodadi"
        />
        <meta
          property="og:description"
          content="Toko gorden profesional dengan pengalaman lebih dari 10 tahun di Purwodadi."
        />
      </Head>

      <main className="min-h-screen">
        {/* Komponen TentangKami dengan layout khusus */}
        <div className="container mx-auto px-4 py-12">
          <TentangKami />

          {/* Tambahan konten khusus halaman tentang kami */}
          <section className="mt-16 bg-white rounded-xl shadow-md p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Visi & Misi Perusahaan
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-sky-600 mb-3">
                  Visi
                </h3>
                <p className="text-gray-700">
                  Menjadi penyedia gorden terdepan di Purwodadi dengan kualitas
                  terbaik dan pelayanan prima untuk kenyamanan rumah dan bisnis
                  pelanggan.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-sky-600 mb-3">
                  Misi
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 mt-1">•</span>
                    <span>Menyediakan produk gorden berkualitas tinggi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 mt-1">•</span>
                    <span>Memberikan pelayanan terbaik kepada pelanggan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 mt-1">•</span>
                    <span>Berinovasi dalam desain dan bahan gorden</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
