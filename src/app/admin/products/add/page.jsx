import AddProductForm from "@/components/forms/AddProductForm";

export default function AddProductPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl text-center font-bold mb-4">
        Tambah Produk Baru
      </h1>
      <AddProductForm />
    </div>
  );
}
