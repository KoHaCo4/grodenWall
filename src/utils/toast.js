import toast from "react-hot-toast";

// Toast sukses
export const showSuccess = (message = "Berhasil!") => toast.success(message);

// Toast error
export const showError = (message = "Terjadi kesalahan.") =>
  toast.error(message);

// Toast warning custom
export const showWarning = (message = "Perhatian!") =>
  toast(message, {
    icon: "⚠️",
    style: {
      background: "#fff7ed",
      color: "#92400e",
      border: "1px solid #facc15",
    },
  });

// Toast konfirmasi custom (dengan tombol)
export const showConfirmDelete = (onConfirm) =>
  toast.custom((t) => (
    <div className="bg-white p-4 shadow-md rounded border-l-4 border-yellow-400 min-w-[250px]">
      <div className="font-semibold text-yellow-700 mb-2">
        Yakin ingin menghapus data ini?
      </div>
      <div className="flex justify-end gap-2 text-sm">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="text-gray-500 hover:underline"
        >
          Batal
        </button>
        <button
          onClick={() => {
            toast.dismiss(t.id);
            onConfirm(); // Fungsi callback dari luar
            showSuccess("Data dihapus");
          }}
          className="text-red-600 hover:underline"
        >
          Hapus
        </button>
      </div>
    </div>
  ));
