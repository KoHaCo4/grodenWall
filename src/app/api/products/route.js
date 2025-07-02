import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { v2 as cloudinary } from "cloudinary";
import { error } from "console";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
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
  // Convert the image file to buffer
  const bytes = await imageFile.arrayBuffer();
  const buffer = Buffer.from(bytes);

  //Upload gambar ke cloudinary
  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "products",
          format: "webp",
          quality: "auto:good",
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      )
      .end(buffer);
  });

  // Simpan ke database
  const newProduct = await prisma.product.create({
    data: {
      name,
      description,
      price,
      imageUrl: result.secure_url,
    },
  });

  return NextResponse.json(newProduct, { status: 201 });
}
