"use client";
import { useState } from "react";
import TopNavbarAdmin from "./components/TopNavbarAdmin";
import SidebarAdmin from "./components/SidebarAdmin";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed md:relative z-20 transition-all duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {isSidebarOpen && <SidebarAdmin />}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNavbarAdmin
          onMenuToggle={() => setIsSidebarOpen((prev) => !prev)}
        />
        <main className="flex-1 overflow-y-visible p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
