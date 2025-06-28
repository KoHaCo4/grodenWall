// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function AllProducts() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const res = await fetch("/api/products");
//       const data = await res.json();
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="flex-1 grid grid-cols-4 max-h-1/2 gap-8 p-6 text-center justify-center">
//       {products.map((product) => (
//         <div
//           key={product.id}
//           className="flex flex-col p-4 shadow rounded bg-white relative"
//         >
//           <img
//             src={product.imageUrl}
//             alt={product.name}
//             className="w-full h-48 object-cover rounded"
//           />
//           <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//           <p className="font-bold text-green-600">
//             Rp {product.price.toLocaleString()}
//           </p>

//           {/* Tombol Aksi */}
//           <div className="mt-4 flex justify-center gap-4">
//             <Link
//               href={`admin/edit/${product.id}`}
//               className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
//             >
//               Edit
//             </Link>
//             <button
//               onClick={async () => {
//                 const confirmed = confirm("Yakin ingin menghapus produk ini?");
//                 if (confirmed) {
//                   await fetch(`/api/products/${product.id}`, {
//                     method: "DELETE",
//                   });
//                   location.reload(); // Refresh untuk update data
//                 }
//               }}
//               className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import Loading from "@/app/loading";
import { showConfirmDelete } from "@/utils/toast";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    // const confirmed = confirm("Yakin ingin menghapus produk ini?");
    // if (!confirmed) return;

    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete product");

      // Optimistic update - remove from state without reloading
      setProducts((prev) => prev.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Gagal menghapus produk");
    }
  };

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p>Tidak ada produk ditemukan</p>
      </div>
    );
  }

  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10 ml-56">
      <Toaster />
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col p-4 shadow rounded-lg bg-white relative transition-transform hover:scale-105"
        >
          <img
            src={product.imageUrl || "/placeholder-product.jpg"}
            alt={product.name}
            className="w-full h-48 object-cover rounded-lg mb-3"
            onError={(e) => {
              e.target.src = "/placeholder-product.jpg";
            }}
          />
          <h2 className="text-lg font-semibold line-clamp-2">{product.name}</h2>
          <p className="font-bold text-green-600 mt-2">
            Rp {product.price?.toLocaleString("id-ID") || "0"}
          </p>

          <div className="mt-4 flex justify-center gap-4">
            <Link
              href={`/admin/edit/${product.id}`}
              className="bg-yellow-500 text-white px-3 py-1.5 rounded hover:bg-yellow-600 transition-colors"
            >
              Edit
            </Link>
            <button
              onClick={() => showConfirmDelete(() => handleDelete(product.id))}
              className="bg-red-500 text-white px-3 py-1.5 rounded hover:bg-red-600 transition-colors"
            >
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
