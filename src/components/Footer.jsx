"use client";

import {
  FaPhoneAlt,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      {/* Konten Utama Footer */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo dan Deskripsi */}
          <div className="space-y-4">
            <img
              src="/img/logo.png"
              alt="Gorden Wallpaper Purwodadi"
              className="h-16 w-auto"
              loading="lazy"
            />
            <p className="text-sm leading-relaxed text-gray-600">
              Spesialis gorden dan wallpaper berkualitas dengan harga terjangkau
              dan pelayanan terbaik.
            </p>

            <div className="flex items-center gap-2 text-sm">
              <FaMapMarkerAlt className="text-sky-600" />
              <span>
                Mangunan, RT.05 rw02, Karangpakel, Kec. Trucuk, Kabupaten
                Klaten, Jawa Tengah 57467
              </span>
            </div>
          </div>

          {/* Menu Navigasi */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Menu</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-600 hover:text-sky-600 transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-600 hover:text-sky-600 transition-colors"
                >
                  Produk Kami
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-600 hover:text-sky-600 transition-colors"
                >
                  Galeri
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-600 hover:text-sky-600 transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="text-sky-600 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+6281324842510"
                    className="text-gray-600 hover:text-sky-600 transition-colors"
                  >
                    081 324 842 510
                  </a>
                  <span className="block text-xs text-gray-400">
                    Customer Service
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FaWhatsapp className="text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="https://wa.me/6281324842510"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-500 transition-colors"
                  >
                    081 324 842 510
                  </a>
                  <span className="block text-xs text-gray-400">WhatsApp</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="text-sky-600 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@gordenwallPurwodadi.com"
                    className="text-gray-600 hover:text-sky-600 transition-colors"
                  >
                    info@gordenkugrosir.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Sosial Media & Jam Buka */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Sosial Media
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com/gordenwallPurwodadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-xl"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://youtube.com/gordenwallPurwodadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors text-xl"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://instagram.com/gordenwallPurwodadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors text-xl"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                Jam Buka
              </h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span>08.00 - 17.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sabtu</span>
                  <span>08.00 - 15.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Minggu</span>
                  <span className="text-red-500">Tutup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="w-full h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.541172748704!2d110.63468619999999!3d-7.732274299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a472bc7cf8795%3A0xed253f05eba3559a!2sRatih%20Gorden!5e0!3m2!1sid!2sid!4v1751040276329!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Gorden Wallpaper Purwodadi"
          className="w-full h-full"
        />
      </div>

      {/* Copyright */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© {currentYear} GordenKu Grosir. All rights reserved.</p>
          <p className="mt-1">Designed with ❤️ in Purwodadi, Indonesia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
