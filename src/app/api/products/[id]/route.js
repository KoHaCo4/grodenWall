import { unlink, writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import prisma from "@/lib/prisma";

export async function PUT(req, { params }) {
  const { id } = params;
  const form = await req.formData();

  const name = form.get("name");
  const description = form.get("description");
  const price = Number(form.get("price"));
  const existingImageUrl = form.get("existingImageUrl");
  const imageFile = form.get("imageUrl");

  let imageUrl = existingImageUrl;

  // Jika file gambar baru diunggah
  if (imageFile && typeof imageFile.name === "string") {
    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = uuidv4() + "-" + imageFile.name;
    const filePath = path.join(process.cwd(), "public/uploads", fileName);

    await writeFile(filePath, buffer);
    imageUrl = `/uploads/${fileName}`;
  }
  console.log({ name, description, price, imageUrl });

  const updatedProduct = await prisma.product.update({
    where: { id: Number(id) },
    data: {
      name,
      description,
      price,
      imageUrl,
    },
  });

  return Response.json(updatedProduct);
}

export async function DELETE(req, { params }) {
  const { id } = await params;

  try {
    // Cari produk untuk ambil imageUrl
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    });

    if (!product) {
      return new Response("Produk tidak ditemukan", { status: 404 });
    }

    // Hapus file gambar dari public/uploads
    if (product.imageUrl && !product.imageUrl.startsWith("http")) {
      const filePath = path.join(process.cwd(), "public", product.imageUrl);
      await unlink(filePath).catch(() => {});
    }

    // Hapus produk dari DB
    await prisma.product.delete({
      where: { id: Number(id) },
    });

    return new Response("Produk berhasil dihapus", { status: 200 });
  } catch (err) {
    console.error("Error deleting product:", err);
    return new Response("Gagal menghapus produk", { status: 500 });
  }
}
