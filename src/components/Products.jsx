"use client";

import { usePathname } from "next/navigation";
import Beranda from "./Beranda";
import { useEffect, useState } from "react";
import Link from "next/link";

const Product = () => {
  const pathname = usePathname();
  const [sedangMemuat, setSedangMemuat] = useState(true);
  const [produk, setProduk] = useState([]);
  const [error, setError] = useState(null);

  const diHalamanProduk = pathname === "/source/product";
  const produkYangDitampilkan = diHalamanProduk ? produk : produk.slice(0, 5);

  useEffect(() => {
    const ambilData = async () => {
      try {
        setSedangMemuat(true);
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Gagal mengambil data produk");
        }

        const data = await response.json();
        setProduk(data);
      } catch (err) {
        setError(err.message);
        console.error("Error:", err);
      } finally {
        setSedangMemuat(false);
      }
    };

    ambilData();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-red-500">
            Gagal memuat produk
          </h2>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      {diHalamanProduk && (
        <div className="mb-10">
          <Beranda />
        </div>
      )}

      <h2 className="text-3xl font-bold mb-8 text-center">
        {diHalamanProduk ? "Semua Produk Kami" : "Produk Unggulan"}
      </h2>

      {sedangMemuat ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex flex-col h-full animate-pulse">
              <div className="bg-gray-200 rounded-lg aspect-square"></div>
              <div className="mt-3 bg-gray-200 h-5 rounded"></div>
              <div className="mt-2 bg-gray-200 h-4 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {produkYangDitampilkan.map((produk) => (
              <Link
                href={`/source/detailProduct/${produk.id}`}
                key={produk.id}
                className="group"
              >
                <div className="flex flex-col h-full border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative pt-[100%] overflow-hidden">
                    <img
                      src={produk.imageUrl}
                      className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={produk.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 flex-grow">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                      {produk.name}
                    </h3>
                    <p className="text-gray-500">
                      Rp {produk.price?.toLocaleString("id-ID")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {!diHalamanProduk && produk.length > 5 && (
            <div className="text-center mt-8">
              <Link
                href="/source/product"
                className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Lihat Semua Produk
              </Link>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Product;
