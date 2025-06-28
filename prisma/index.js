import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.product.create({
    data: {
      name: "Produk 6",
      description: "Produk berkualitas terlampau sangat tinggi sekali",
      price: 50000,
      imageUrl: "/img/produk1.jpg",
    },
  });

  console.log("✅ Data berhasil disimpan");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
