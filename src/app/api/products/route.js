import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

// GET /api/products
export async function GET() {
  try {
    const allProducts = await prisma.product.findMany();
    return NextResponse.json(allProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

//Tambah data
export async function POST(req) {
  const formData = await req.formData();

  const name = formData.get("name");
  const description = formData.get("description");
  const price = parseFloat(formData.get("price"));
  const imageFile = formData.get("image");

  if (!imageFile || typeof imageFile === "string") {
    return NextResponse.json({ error: "Gambar tidak valid." }, { status: 400 });
  }

  // Bikin nama file unik
  const fileName = `${uuidv4()}-${imageFile.name}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const filePath = path.join(uploadDir, fileName);

  // Simpan file ke folder public/uploads
  const bytes = await imageFile.arrayBuffer();
  await writeFile(filePath, Buffer.from(bytes));

  // Simpan ke database
  const newProduct = await prisma.product.create({
    data: {
      name,
      description,
      price,
      imageUrl: `/uploads/${fileName}`,
    },
  });

  return NextResponse.json(newProduct, { status: 201 });
}
