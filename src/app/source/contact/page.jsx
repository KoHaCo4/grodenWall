import Contact from "@/components/Contact";
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

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Hubungi Kami - Gorden Wall Purwodadi</title>
        <meta
          name="description"
          content="Hubungi tim Gorden Wall Purwodadi untuk konsultasi produk gorden, pemesanan, atau informasi lainnya."
        />
        <meta
          name="keywords"
          content="kontak gorden, alamat toko gorden, nomor telepon gorden, whatsapp gorden, lokasi gorden purwodadi"
        />
        <meta
          property="og:title"
          content="Hubungi Kami - Gorden Wall Purwodadi"
        />
        <meta
          property="og:description"
          content="Kami siap membantu Anda memilih gorden terbaik untuk rumah atau bisnis Anda."
        />
      </Head>

      <main className="bg-gray-50">
        {/* Komponen Kontak Utama */}
        <Contact />

        {/* Tambahan Informasi Kontak */}
        <section className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Peta Lokasi */}
              <div className="h-96 md:h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.947329944598!2d110.77495587420247!3d-7.795522377122474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a168004b80f2f%3A0xbeb7b0304795bb38!2sGorden%20Wallpaper%20Solo%20(Mulya%20Abadi)!5e0!3m2!1sid!2sid!4v1718780301515!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Lokasi Gorden Wall Purwodadi"
                />
              </div>

              {/* Jam Operasional */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Jam Operasional
                </h2>
                <ul className="space-y-4">
                  <li className="flex justify-between pb-2 border-b border-gray-100">
                    <span className="font-medium">Senin - Jumat</span>
                    <span>08.00 - 17.00 WIB</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-gray-100">
                    <span className="font-medium">Sabtu</span>
                    <span>08.00 - 15.00 WIB</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-gray-100">
                    <span className="font-medium">Minggu</span>
                    <span className="text-red-500">Tutup</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3">
                    Butuh Bantuan Cepat?
                  </h3>
                  <a
                    href="https://wa.me/6281324842510"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <span>Chat via WhatsApp</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
