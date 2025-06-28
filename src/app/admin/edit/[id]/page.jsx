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
    const { name, files, value } = e.target;

    if (name === "imageUrl") {
      setFormData({ ...formData, imageUrl: files[0] }); // Bukan value!
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.name);
    form.append("description", formData.description);
    form.append("price", formData.price);

    // Jika user memilih gambar baru
    if (formData.imageUrl instanceof File) {
      form.append("imageUrl", formData.imageUrl);
    } else {
      form.append("existingImageUrl", formData.imageUrl); // Kirim URL lama
    }

    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      body: form,
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      console.error("Gagal update produk");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="max-w-md space-y-4 p-4"
    >
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
        type="file"
        name="imageUrl"
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
        placeholder="URL Gambar"
      />
      <input type="hidden" name="existingImageUrl" value={formData.imageUrl} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Simpan Perubahan
      </button>
    </form>
  );
}
