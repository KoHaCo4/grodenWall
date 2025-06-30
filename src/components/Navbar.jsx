"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  // Hide navbar on admin routes

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  if (pathname.startsWith("/admin")) return null;

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/source/about" },
    { name: "Produk", path: "/source/products" },
    { name: "Kontak", path: "/source/contact" },
    status === "authenticated" && { name: "Dashboard", path: "/admin" },
  ].filter(Boolean);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-800 shadow-lg" : "bg-gray-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-sky-400 transition-colors flex -py-4 items-center"
          >
            {/* <span className=" w-auto">G</span> */}
            <img
              src="/img/logo.png"
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
            {/* <span className=" w-auto">RDENKU</span> */}
            <span className="sm:hidden">GG</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`relative py-2 px-1 text-white hover:text-sky-400 transition-colors ${
                      pathname === link.path ? "text-sky-400 font-semibold" : ""
                    }`}
                  >
                    {link.name}
                    {pathname === link.path && (
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-400 rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {status === "unauthenticated" && (
            <button
              onClick={() => router.push("/login")}
              className="text-gray-700 rounded-full w-auto p-2 bg-white hover:cursor-pointer hover:bg-gray-200"
              aria-label="login"
              type="button"
            >
              Log-In Admin
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 pb-4">
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`block py-2 px-4 text-white hover:bg-gray-700 rounded transition-colors ${
                      pathname === link.path ? "text-sky-400 font-semibold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
