import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/items/whatsapp";
import { Providers } from "@/providers/page";

// Konfigurasi font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

// Metadata aplikasi
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
  twitter: {
    card: "summary_large_image",
    images: ["https://groden-wall.vercel.app/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />

        {/* Preconnect untuk optimasi */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className="min-h-screen bg-gray-50 text-gray-800 antialiased flex flex-col">
        <Providers>
          <>
            <Navbar />

            <main className="flex-grow">{children}</main>

            <Footer />

            <Whatsapp />

            {/* Analytics (opsional) */}
            {/* <Analytics /> */}
          </>
        </Providers>
      </body>
    </html>
  );
}
