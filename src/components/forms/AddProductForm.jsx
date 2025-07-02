"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AddProductForm() {
  const [isSubmiting, setIsSubmiting] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("image", formData.image);

    const res = await fetch("/api/products", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      toast.success("Produk berhasil ditambahkan!");
      setFormData({
        name: "",
        description: "",
        price: "",
        image: null,
      });
      window.location.reload;
    } else {
      toast.error("Gagal menambahkan produk.");
    }

    setIsSubmiting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow-md rounded p-6 space-y-5 mt-6"
      encType="multipart/form-data"
    >
      <h2 className="text-2xl font-bold mb-4">Tambah Produk</h2>

      <div>
        <label className="block mb-1 font-medium">Nama Produk</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Deskripsi</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        ></textarea>
      </div>

      <div>
        <label className="block mb-1 font-medium">Harga</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Upload Gambar</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
          className="w-full bg-gray-400 rounded-sm p-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {isSubmiting ? "Mengunggah..." : "Tambah Produk"}
      </button>
      <Toaster position="top-center" />
    </form>
  );
}
