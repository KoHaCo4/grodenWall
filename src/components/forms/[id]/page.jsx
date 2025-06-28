"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditForm() {
  const { id } = useParams();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("/api/products");
      const products = await res.json();
      const product = products.find((p) => p.id === Number(id));
      setFormData(product);
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/products", {
      method: "PUT",
      body: JSON.stringify({ ...formData, id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/admin"); // kembali ke dashboard
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4 p-4">
      <h1 className="text-xl font-bold mb-2">Edit Produk</h1>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        placeholder="Nama Produk"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        placeholder="Deskripsi"
      />
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        placeholder="Harga"
      />
      <input
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        placeholder="URL Gambar"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Simpan Perubahan
      </button>
    </form>
  );
}
