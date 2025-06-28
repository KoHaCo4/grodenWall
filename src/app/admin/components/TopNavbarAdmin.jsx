"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Loading from "@/app/loading";

const TopNavbarAdmin = ({ onMenuToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status == "loading")
    return (
      <div>
        <Loading />
      </div>
    );

  const handleLogout = () => {
    // Implementasi logout
    const confirmed = confirm("Yakin ingin Logout?");
    if (confirmed) signOut({ callbackUrl: "/" });
  };

  const adminName = session.user.name || "";
  const displayName =
    adminName.length > 5 ? adminName.slice(0, 5) + ".." : adminName;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuToggle?.(!isMenuOpen);
  };

  return (
    <header className="bg-white w-full shadow-md px-4 sm:px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Tombol Hamburger */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          )}
        </button>

        {/* Judul Dashboard */}
        <h1 className="text-lg sm:text-xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
      </div>
      <div>
        <h1 className="px-3 py-1.5 rounded-md text-sm sm:text-base bg-gray-100 hover:bg-gray-200 transition-colors flex items-center gap-2">
          <a href="/">Beranda</a>
        </h1>
      </div>

      {/* Menu Aksi */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={() => router.push("/admin/profile")}
          className="px-3 py-1.5 rounded-md text-sm sm:text-base bg-gray-100 hover:bg-gray-200 transition-colors flex items-center gap-2"
        >
          <span className="hidden sm:inline">{displayName}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          onClick={handleLogout}
          className="px-3 py-1.5 rounded-md text-sm sm:text-base bg-gray-100 hover:bg-gray-200 transition-colors flex items-center gap-2"
        >
          <span className="hidden sm:inline">Logout</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default TopNavbarAdmin;
