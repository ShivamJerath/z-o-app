"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Search, User, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenu, setSubmenu] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const pathname = usePathname();

  const toggleSubmenu = (name: string) => {
    setSubmenu(submenu === name ? null : name);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-[#00718A]">
      <div className="max-w-[1600px] mx-auto px-2 sm:px-2 md:px-2 lg:px-16">
        <div className="font-sans flex items-center justify-around h-[90px]">
          {/* LEFT SECTION */}
          <div className="flex items-center gap-8 lg:gap-14">
            {/* LOGO */}
            <Link href="#" className="flex-shrink-0">
              <img
                src="https://zoikoorbit.com/wp-content/uploads/2025/07/Group-1597883151.png"
                alt="Zoiko Orbit"
                className="h-12 lg:h-17 w-37"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden xl:flex items-center gap-9 text-white text-[18px] font-normal py-[13px]">
              <Link
                href="/"
                className={`hover:opacity-60 transition-all ${
                  isActive("/")
                    ? "font-semibold text-[20px] scale-110"
                    : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`hover:opacity-60 transition-all ${
                  isActive("/about")
                    ? "font-semibold text-[20px] scale-110"
                    : ""
                }`}
              >
                About Us
              </Link>

              {/* SOLUTIONS */}
              <div className="relative group">
                <button
                  className={`flex items-center gap-1.5 hover:opacity-60 transition-all ${
                    ["/PersonalTraveller", "/Enterprise", "/Ecosystem"].includes(
                      pathname
                    )
                      ? "font-semibold text-[20px]"
                      : ""
                  }`}
                >
                  Solutions
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-lg py-2 w-[240px]">
                    {[
                      {
                        label: "For Personal Travelers",
                        href: "/PersonalTraveller",
                      },
                      { label: "For Enterprises", href: "/Enterprise" },
                      { label: "For Ecosystem Partners", href: "/Ecosystem" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`block px-5 py-2.5 text-gray-700 text-[14px] hover:bg-[#0d7c92] hover:text-white transition-colors ${
                          isActive(item.href)
                            ? "bg-[#0d7c92] text-white font-semibold"
                            : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/plans"
                className={`hover:opacity-60 transition-all ${
                  isActive("/plans")
                    ? "font-semibold text-[20px] scale-110"
                    : ""
                }`}
              >
                Plans
              </Link>

              {/* ECOSYSTEM */}
              <div className="relative group">
                <button
                  className={`flex items-center gap-1.5 hover:opacity-60 transition-all ${
                    [
                      "/Traveller",
                      "/BusinessAndEnterprises",
                      "/TravelPartner",
                      "/Impact",
                    ].includes(pathname)
                      ? "font-semibold text-[20px]"
                      : ""
                  }`}
                >
                  Ecosystem Partners
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                <div className="absolute left-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white rounded-xl shadow-lg py-2 w-[240px]">
                    {[
                      { label: "Travelers", href: "/Traveller" },
                      {
                        label: "Businesses & Enterprises",
                        href: "/BusinessAndEnterprises",
                      },
                      {
                        label: "Travel Partners & Agencies",
                        href: "/TravelPartner",
                      },
                      { label: "Our Impact", href: "/Impact" },
                    ].map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`block px-5 py-2.5 text-gray-700 text-[14px] hover:bg-[#0d7c92] hover:text-white transition-colors ${
                          isActive(item.href)
                            ? "bg-[#0d7c92] text-white font-semibold"
                            : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/Support"
                className={`hover:opacity-60 transition-all ${
                  isActive("/Support")
                    ? "font-semibold text-[20px] scale-110"
                    : ""
                }`}
              >
                Support
              </Link>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4 lg:gap-7">
            {/* SEARCH */}
            <div className="relative">
              <button
                onClick={() => setShowSearch((prev) => !prev)}
                className="text-white hover:opacity-60"
              >
                <Search className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>

              {showSearch && (
                <div className="absolute right-0 top-full mt-3 z-50">
                  <div className="bg-white rounded-lg shadow-xl px-4 py-3 w-[260px]">
                    <input
                      type="text"
                      placeholder="Search…"
                      autoFocus
                      className="w-full text-[14px] text-gray-800 placeholder-gray-400 outline-none border border-gray-200 rounded-lg px-3 py-2 focus:border-[#00718A]"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* MY ORBIT */}
            <div className="relative group hidden sm:block">
              <button className="flex items-center gap-3.5 bg-white text-[#00718A] px-4 lg:px-1.5 py-1.5 lg:py-1 rounded-lg hover:bg-gray-50 transition-colors">
                <User className="w-5 h-5 text-[#00718A]" />

                <span className="mt-3 text-[15px] lg:text-[18px] font-normal h-9 lg:h-9">
                  My Orbit
                </span>

                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="absolute right-0 top-full mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-lg shadow-lg py-2 w-[180px]">
                  <Link
                    href="/SignInForm"
                    className="block px-5 py-2.5 text-gray-700 text-[14px] hover:bg-[#00718A] hover:text-white transition-colors"
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </div>

            {/* LANGUAGE */}
            <div className="relative group hidden md:block">
              <button className="flex items-center gap-2 text-white hover:opacity-80">
                <img
                  src="https://flagcdn.com/w40/us.png"
                  className="w-6 h-4 object-cover"
                  alt="English"
                />
                <span className="text-[15px] lg:text-[23px] font-semibold">
                  EN
                </span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>

              <div className="absolute right-0 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white rounded-xl shadow-xl py-2 w-[200px] max-h-[260px] overflow-y-auto">
                  {[
                    ["Arabic", "sa"],
                    ["Dutch", "nl"],
                    ["French", "fr"],
                    ["German", "de"],
                    ["Italian", "it"],
                    ["Portuguese", "pt"],
                    ["Spanish", "es"],
                    ["Hindi", "in"],
                    ["Japanese", "jp"],
                    ["Korean", "kr"],
                    ["Chinese", "cn"],
                    ["Russian", "ru"],
                  ].map(([name, code]) => (
                    <Link
                      key={name}
                      href="#"
                      className="flex items-center gap-3 px-5 py-2.5 text-gray-800 text-[14px] font-medium hover:bg-[#0d7c92] hover:text-white transition-colors"
                    >
                      <img
                        src={`https://flagcdn.com/w40/${code}.png`}
                        className="w-6 h-4 object-cover"
                        alt={name}
                      />
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* HAMBURGER */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden text-white p-2 transition"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="xl:hidden fixed inset-0 top-[90px] bg-white z-40 overflow-y-auto">
            {/* Home */}
            <Link
              href="/"
              className={`block px-6 py-5 text-[18px] text-gray-800 border-b ${
                isActive("/") ? "font-bold text-[20px] bg-gray-100" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={`block px-6 py-5 text-[18px] text-gray-800 border-b ${
                isActive("/about") ? "font-bold text-[20px] bg-gray-100" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>

            {/* SOLUTIONS */}
            <button
              onClick={() => toggleSubmenu("solutions")}
              className={`w-full flex items-center justify-between px-6 py-5 bg-[#3f4348] text-white text-[18px] font-semibold ${
                ["/PersonalTraveller", "/Enterprise", "/Ecosystem"].includes(
                  pathname
                )
                  ? "text-[20px] font-bold"
                  : ""
              }`}
            >
              Solutions
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  submenu === "solutions" ? "rotate-180" : ""
                }`}
              />
            </button>

            {submenu === "solutions" && (
              <div className="bg-white">
                {[
                  { label: "For Personal Travelers", href: "/PersonalTraveller" },
                  { label: "For Enterprises", href: "/Enterprise" },
                  { label: "For Ecosystem Partners", href: "/Ecosystem" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block px-8 py-4 text-[16px] text-gray-700 border-b ${
                      isActive(item.href)
                        ? "font-bold text-[18px] bg-gray-100"
                        : ""
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Plans */}
            <Link
              href="/plans"
              className={`block px-6 py-5 text-[18px] text-gray-800 border-b ${
                isActive("/plans") ? "font-bold text-[20px] bg-gray-100" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Plans
            </Link>

            {/* ECOSYSTEM */}
            <button
              onClick={() => toggleSubmenu("ecosystem")}
              className={`w-full flex items-center justify-between px-6 py-5 bg-[#3f4348] text-white text-[18px] font-semibold ${
                [
                  "/Traveller",
                  "/BusinessAndEnterprises",
                  "/TravelPartner",
                  "/Impact",
                ].includes(pathname)
                  ? "text-[20px] font-bold"
                  : ""
              }`}
            >
              Ecosystem Partners
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  submenu === "ecosystem" ? "rotate-180" : ""
                }`}
              />
            </button>

            {submenu === "ecosystem" && (
              <div className="bg-white">
                {[
                  { label: "Travelers", href: "/Traveller" },
                  {
                    label: "Businesses & Enterprises",
                    href: "/BusinessAndEnterprises",
                  },
                  {
                    label: "Travel Partners & Agencies",
                    href: "/TravelPartner",
                  },
                  { label: "Our Impact", href: "/Impact" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block px-8 py-4 text-[16px] text-gray-700 border-b ${
                      isActive(item.href)
                        ? "font-bold text-[18px] bg-gray-100"
                        : ""
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Support */}
            <Link
              href="/Support"
              className={`block px-6 py-5 bg-[#3f4348] text-white text-[18px] font-semibold ${
                isActive("/Support") ? "text-[20px] font-bold" : ""
              }`}
              onClick={() => setMobileOpen(false)}
            >
              Support
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}