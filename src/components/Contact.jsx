"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simpan ke database atau kirim email
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Gagal mengirim pesan");

      toast.success("Pesan berhasil dikirim!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Gagal mengirim pesan. Silakan coba lagi.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Kontak Kami
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Hubungi kami untuk informasi lebih lanjut
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informasi Kontak */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Informasi Kontak
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <FaMapMarkerAlt className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Alamat
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Jl. Raya Songgo Langit No.22, Ngebrak, Gentan, Baki,
                      Sukoharjo, Jawa Tengah 57556 (Selatan Kantor Kelurahan
                      Gentan)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <FaPhoneAlt className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Telepon
                    </h3>
                    <a
                      href="tel:+6281324842510"
                      className="mt-1 text-gray-600 hover:text-sky-600 transition-colors"
                    >
                      081 324 842 510
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <FaWhatsapp className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/6281324842510"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-gray-600 hover:text-green-500 transition-colors"
                    >
                      Kirim Pesan WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <FaEnvelope className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <a
                      href="mailto:info@gordenwall.com"
                      className="mt-1 text-gray-600 hover:text-sky-600 transition-colors"
                    >
                      info@gordenwall.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Jam Operasional
              </h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  Senin - Jumat: 08.00 - 17.00 WIB
                </p>
                <p className="text-gray-600">Sabtu: 08.00 - 15.00 WIB</p>
                <p className="text-gray-600">Minggu: Tutup</p>
              </div>
            </div>
          </div>

          {/* Form Kontak */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kirim Pesan
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
