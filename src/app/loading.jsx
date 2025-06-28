// app/loading.js
export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Ganti dengan animasi custom Anda */}
      <div className="animate-pulse">
        <img src="/img/logo-loading.png" alt="Loading" className="h-40 w-40" />
      </div>
    </div>
  );
}
