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
  title: {
    default: "Gorden Wall Purwodadi",
    template: "%s | Gorden Wall Purwodadi",
  },
  description:
    "Toko gorden profesional dengan bahan berkualitas dan jahitan presisi. Berpengalaman lebih dari 10 tahun di Purwodadi.",
  keywords: [
    "gorden purwodadi",
    "tirai jendela",
    "gorden custom",
    "wallpaper dinding",
    "toko gorden",
  ],
  openGraph: {
    title: "Gorden Wall Purwodadi",
    description: "Spesialis gorden berkualitas dengan harga terjangkau",
    url: "https://gorden-wall.varcel.com",
    siteName: "Gorden Wall Purwodadi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
