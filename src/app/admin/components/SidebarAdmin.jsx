"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  PlusCircle,
  Package,
  Users,
  Settings,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function AdminDashboard() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState({
    product: false,
    user: false,
    settings: false,
  });

  const toggleMenu = (menu) => {
    setMenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menuItems = [
    {
      title: "HOME",
      items: [
        {
          name: "Dashboard",
          href: "/admin",
          icon: <LayoutDashboard size={18} />,
          active: pathname === "/admin",
        },
      ],
    },
    {
      title: "PRODUCTS",
      items: [
        {
          name: "All Products",
          href: "/admin/products",
          icon: <Package size={18} />,
          active: pathname.startsWith("/admin/products"),
        },
        {
          name: "Add Product",
          href: "/admin/products/add",
          icon: <PlusCircle size={18} />,
          active: pathname === "/admin/product/add",
        },
      ],
    },
    {
      title: "USERS",
      items: [
        {
          name: "Manage Users",
          href: "/admin/users",
          icon: <Users size={18} />,
          active: pathname.startsWith("/admin/users"),
        },
      ],
    },
  ];

  return (
    <div className="w-64 bg-gray-800 text-gray-200 h-full fixed left-0 top-0 overflow-y-auto p-4 flex flex-col">
      {/* Logo/Title */}
      <div className="text-xl font-bold mb-8 p-2 border-b border-gray-700">
        Admin Panel
      </div>

      {/* Menu Items */}
      <div className="space-y-6 flex-1">
        {menuItems.map((section) => (
          <div key={section.title} className="space-y-2">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2">
              {section.title}
            </div>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    <span className="text-gray-300">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Settings */}
      <div className="mt-auto pb-4 border-t border-gray-700 pt-4">
        <Link
          href="/admin/settings"
          className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
            pathname.startsWith("/admin/settings")
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-700 hover:text-white"
          }`}
        >
          <Settings size={18} className="text-gray-300" />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
}
