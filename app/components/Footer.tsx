"use client";

import { ArrowUp } from "lucide-react";
import { FaWhatsapp, FaXTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa6";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#00718A] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 -mt-3">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* LOGO + DESC */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-4 inline-block mb-5">
              <img
                src="https://zoikoorbit.com/wp-content/uploads/2025/07/Group-1597883151.png"
                alt="Zoiko Orbit"
                className="w-40 h-13"
              />
            </div>
            <p className="text-[14px] leading-relaxed max-w-[280px] opacity-90">
              Zoiko Orbit™ delivers seamless global eSIM connectivity for
              travelers and businesses, empowering them to stay connected
              anywhere — while supporting animal welfare with every plan
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="text-[20px] font-semibold mb-5">Explore</h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Coverage
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="text-[20px] font-semibold mb-5">Support & Help</h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Accessibility Options
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-[20px] font-semibold mb-5">Legal & Privacy</h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Cookie Preferences
                </Link>
              </li>
            </ul>
          </div>

          {/* BUSINESS */}
          <div>
            <h3 className="text-[20px] font-semibold mb-5">For Business</h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Travel Agencies & OTAs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Corporate Travel Solutions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  API Integrations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* LOWER GRID */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mt-8 pt-10 border-t border-white/20">
          {/* CORPORATE */}
          <div className="-mt-3 flex-shrink-0">
            <h3 className="text-[20px] font-semibold mb-5">
              Corporate & Responsibility
            </h3>
            <ul className="space-y-3 text-[15px]">
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Corporate Responsibility
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  Press & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="-mt-3 flex-shrink-0">
            <h3 className="text-[20px] font-semibold mb-5">Contact us</h3>
            <div className="space-y-2 text-[15px]">
              <p className="leading-relaxed">
                24/7 global support via chat, WhatsApp, and email.
              </p>
              <Link
                href="tel:+18004845574"
                className="font-medium block hover:opacity-80 transition-opacity"
              >
                +1 800-484-5574
              </Link>
              <Link
                href="mailto:info@Zoikoorbit.com"
                className="font-medium block hover:opacity-80 transition-opacity"
              >
                info@Zoikoorbit.com
              </Link>
            </div>
          </div>

          {/* CONNECT + MAP */}
          <div className="-mt-3 flex-grow">
            <h3 className="text-[20px] font-semibold mb-5">Connect with us</h3>

            <div className="flex items-start gap-8">
              {/* SOCIAL ICONS */}
              <div className="flex gap-3 flex-shrink-0">
                {/* Twitter / X */}
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <FaXTwitter className="w-4 h-4 text-[#00718A]" />
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <FaLinkedinIn className="w-4 h-4 text-[#00718A]" />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <FaInstagram className="w-4 h-4 text-[#00718A]" />
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <FaFacebookF className="w-4 h-4 text-[#00718A]" />
                </a>
              </div>

              {/* MAP IMAGE */}
              <div className="flex-grow -mt-13">
                <img
                  src="https://zoikoorbit.com/wp-content/uploads/2025/07/Group-4.webp"
                  alt="Global coverage map"
                  className="w-full max-w-[500px] h-auto opacity-70 ml-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-3 pt-6 border-t border-white/20 text-[15px] text-center opacity-90 -mb-6">
          © 2025 Zoiko Orbit™. Zoiko Orbit™ is a subsidiary of Zoiko
          Communications Group Inc., headquartered at 1401 21st Street, Ste R,
          Sacramento, CA 95811. All Rights Reserved.
        </div>
      </div>
      {/* WhatsApp Floating Button */}
      <a
  href="https://wa.me/"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-8 left-8 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
>
  <FaWhatsapp className="text-white text-[32px]" />
</a>

      {/* Scroll to Top Button */}
      <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="fixed bottom-8 right-8 w-12 h-12 bg-[#0d7c92] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 text-white"
>
  <ArrowUp className="w-6 h-6" />
</button>

    </footer>
  );
}
