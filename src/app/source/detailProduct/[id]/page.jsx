import prisma from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamicParams = true; // Enable dynamic params

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  if (!product) return {};

  return {
    title: `${product.name} | GordenKu Grosir`,
    description: product.description,
    openGraph: {
      images: [product.imageUrl],
    },
  };
}

export default async function DetailProduct({ params }) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  if (!product) {
    notFound();
  }

  const pesanText = `Halo Admin, saya tertarik dengan produk:\n\n*${
    product.name
  }*\nHarga: Rp ${product.price.toLocaleString("id-ID")}\n\nGambar: ${
    product.imageUrl
  }`;
  const pesanURL = `https://wa.me/6281324842510?text=${encodeURIComponent(
    pesanText
  )}`;

  return (
    <main className="container mx-auto px-4 py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Bagian Gambar Produk */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative aspect-square">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Bagian Informasi Produk */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {product.name}
          </h1>

          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold text-green-600">
              Rp {product.price.toLocaleString("id-ID")}
            </p>
            {product.discount && (
              <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                {product.discount}% OFF
              </span>
            )}
          </div>

          <div className="prose max-w-none text-gray-600">
            <p>{product.description}</p>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h2 className="text-xl font-semibold mb-4">Spesifikasi Produk</h2>
            <ul className="space-y-3">
              <li className="flex">
                <span className="w-32 text-gray-500">Bahan</span>
                <span>{product.material || "-"}</span>
              </li>
              <li className="flex">
                <span className="w-32 text-gray-500">Warna</span>
                <span>{product.color || "Lihat gambar"}</span>
              </li>
              <li className="flex">
                <span className="w-32 text-gray-500">Ukuran</span>
                <span>{product.size || "Standar (sesuaikan kebutuhan)"}</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <button className="flex-1 md:flex-none bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              <a href={pesanURL}>Pesan Sekarang</a>
            </button>
            {/* <button className="flex-1 md:flex-none border border-sky-600 text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-lg font-medium transition-colors">
              Tambah ke Wishlist
            </button> */}
          </div>
        </div>
      </div>

      {/* Rekomendasi Produk Lainnya */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Produk Serupa</h2>
        {/* Komponen produk terkait bisa ditambahkan di sini */}
      </section>
    </main>
  );
}
