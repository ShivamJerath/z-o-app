"use client";

import { useState } from "react";
import { ArrowUp, ChevronDown } from "lucide-react";
import {
  FaWhatsapp,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import Link from "next/link";

// ─── Shared link style — no underline anywhere in footer ─────────────────────
const linkCls =
  "no-underline hover:opacity-80 transition-opacity block [text-decoration:none] hover:[text-decoration:none]";

// ─── Footer section: accordion on mobile, static on desktop ──────────────────
function FooterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ════ MOBILE ONLY ════ */}
      <div className="lg:hidden border-b border-white/20">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="w-full flex items-center justify-between py-4 text-left [text-decoration:none]"
        >
          <span className="text-[17px] font-semibold [text-decoration:none]">
            {title}
          </span>
          <ChevronDown
            className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Collapsible body */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: open ? "500px" : "0px", paddingBottom: open ? "16px" : "0px" }}
        >
          {children}
        </div>
      </div>

      {/* ════ DESKTOP ONLY — identical to original, zero diff ════ */}
      <div className="hidden lg:block">
        <h3 className="text-[20px] font-semibold mb-5 [text-decoration:none]">
          {title}
        </h3>
        {children}
      </div>
    </>
  );
}

export default function Footer() {
  const [openChat, setOpenChat] = useState<boolean>(false);
  const [openPanel, setOpenPanel] = useState<boolean>(false);

  return (
    <footer className="bg-[#00718A] text-white [&_a]:no-underline [&_a]:[text-decoration:none]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 -mt-3">

        {/* ── TOP GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-12">

          {/* LOGO + DESC */}
          <div className="lg:col-span-1 pb-6 lg:pb-0 border-b border-white/20 lg:border-none">
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
          <FooterSection title="Explore">
            <ul className="space-y-3 text-[15px]">
              {[
                { label: "Coverage", href: "/coverage" },
                { label: "Plans", href: "/plans" },
                { label: "Ecosystem", href: "/Ecosystem" },
                { label: "About Us", href: "/about" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkCls}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* SUPPORT */}
          <FooterSection title="Support & Help">
            <ul className="space-y-3 text-[15px]">
              {[
                { label: "Support Center", href: "/Support" },
                { label: "FAQs", href: "/FAQ" },
                { label: "Accessibility Options", href: "/Accessibility" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkCls}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* LEGAL */}
          <FooterSection title="Legal & Privacy">
            <ul className="space-y-3 text-[15px]">
              {[
                { label: "Privacy Policy", href: "/privacypolicy" },
                { label: "Terms of Service", href: "/TermsOfService" },
                { label: "Cookie Preferences", href: "/Cookie" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkCls}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* BUSINESS */}
          <FooterSection title="For Business">
            <ul className="space-y-3 text-[15px]">
              {[
                { label: "Partner With Us", href: "/PartnerWithUs" },
                { label: "Travel Agencies & OTAs", href: "/TravelOTA" },
                { label: "Corporate Travel Solutions", href: "/CorporateTravelSolutions" },
                { label: "API Integrations", href: "/APIIntegration" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkCls}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterSection>
        </div>

        {/* ── LOWER GRID ── */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mt-8 pt-10 border-t border-white/20">

          {/* CORPORATE */}
          <div className="-mt-3 flex-shrink-0 w-full lg:w-auto">
            <FooterSection title="Corporate & Responsibility">
              <ul className="space-y-3 text-[15px]">
                {[
                  { label: "Corporate Responsibility", href: "/corporateResponsibility" },
                  { label: "Investor Relations", href: "/InvestorRelation" },
                  { label: "Press & Media", href: "/PressMedia" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className={linkCls}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </div>

          {/* CONTACT */}
          <div className="-mt-3 flex-shrink-0 w-full lg:w-auto">
            <FooterSection title="Contact us">
              <div className="space-y-2 text-[15px]">
                <p className="leading-relaxed">
                  24/7 global support via chat, WhatsApp, and email.
                </p>
                <Link
                  href="tel:+18004845574"
                  className="font-medium block hover:opacity-80 transition-opacity [text-decoration:none]"
                >
                  +1 800-484-5574
                </Link>
                <Link
                  href="mailto:info@Zoikoorbit.com"
                  className="font-medium block hover:opacity-80 transition-opacity [text-decoration:none]"
                >
                  info@Zoikoorbit.com
                </Link>
              </div>
            </FooterSection>
          </div>

          {/* CONNECT + MAP */}
          <div className="-mt-3 flex-grow w-full lg:w-auto">
            <FooterSection title="Connect with us">
              <div className="flex items-start gap-8">
                {/* SOCIAL ICONS */}
                <div className="flex gap-3 flex-shrink-0">
                  {[
                    { Icon: FaXTwitter, label: "Twitter" },
                    { Icon: FaLinkedinIn, label: "LinkedIn" },
                    { Icon: FaInstagram, label: "Instagram" },
                    { Icon: FaFacebookF, label: "Facebook" },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity [text-decoration:none]"
                    >
                      <Icon className="w-4 h-4 text-[#00718A]" />
                    </a>
                  ))}
                </div>

                {/* MAP — desktop only */}
                <div className="hidden lg:block flex-grow -mt-13">
                  <img
                    src="https://zoikoorbit.com/wp-content/uploads/2025/07/Group-4.webp"
                    alt="Global coverage map"
                    className="w-full max-w-[500px] h-auto opacity-70 ml-auto"
                  />
                </div>
              </div>
            </FooterSection>
          </div>
        </div>

        {/* Map — mobile only, below accordion */}
        <div className="lg:hidden mt-6">
          <img
            src="https://zoikoorbit.com/wp-content/uploads/2025/07/Group-4.webp"
            alt="Global coverage map"
            className="w-full h-auto opacity-70"
          />
        </div>

        {/* COPYRIGHT */}
        <div className="mt-3 pt-6 border-t border-white/20 text-[13px] lg:text-[15px] text-center opacity-90 -mb-6">
          © 2025 Zoiko Orbit™. Zoiko Orbit™ is a subsidiary of Zoiko
          Communications Group Inc., headquartered at 1401 21st Street, Ste R,
          Sacramento, CA 95811. All Rights Reserved.
        </div>
      </div>

      {/* ── WhatsApp Floating Button ── */}
      <button
        onClick={() => setOpenChat(true)}
        className="fixed bottom-8 left-8 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Open WhatsApp chat"
      >
        <FaWhatsapp className="text-white text-[32px]" />
      </button>

      {/* WhatsApp Chat Dialog */}
      {openChat && (
        <div className="fixed bottom-24 left-8 z-50 w-[320px] sm:w-[360px] rounded-2xl shadow-2xl overflow-hidden bg-white">
          <div className="bg-[#2CC84D] text-white px-5 py-4 flex items-center justify-between">
            <p className="text-[14px]">
              Powered by <span className="font-semibold">Join.chat</span>
            </p>
            <button
              onClick={() => setOpenChat(false)}
              className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/30 transition-colors"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          <div className="bg-[#F1F4F3] p-5 space-y-4">
            <div className="bg-white px-4 py-3 rounded-xl shadow w-fit max-w-[85%] text-gray-800 text-[14px]">
              Hello 👋, welcome to <b>Zoiko Orbit</b>
            </div>
            <div className="bg-white px-4 py-3 rounded-xl shadow w-fit max-w-[75%] text-gray-800 text-[14px]">
              Can we help you?
            </div>
          </div>
          <div className="p-5 bg-white">
            <a
              href="https://wa.me/18004845574"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-3 rounded-full font-semibold hover:bg-[#1ebe5d] transition-colors [text-decoration:none]"
            >
              <FaWhatsapp className="text-xl" />
              Open Chat
            </a>
          </div>
        </div>
      )}

      {/* ── Get in Touch vertical tab ── */}
      <button
        onClick={() => setOpenPanel(true)}
        aria-label="Get in touch"
        className="fixed z-50 bg-[#00718A] text-white text-[15px] font-semibold tracking-wide shadow-lg hover:bg-[#005f75] transition-colors flex items-center justify-center"
        style={{
          top: "35%",
          right: 0,
          transform: "translateY(-50%)",
          writingMode: "vertical-lr",
          textOrientation: "mixed",
          rotate: "180deg",
          padding: "20px 10px",
          borderRadius: "0 8px 8px 0",
        }}
      >
        Get in touch
      </button>

      {/* Backdrop */}
      {openPanel && (
        <div
          className="fixed inset-0 bg-black/30 z-[60]"
          onClick={() => setOpenPanel(false)}
        />
      )}

      {/* Get in Touch Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[340px] sm:w-[400px] bg-white z-[70] shadow-2xl overflow-y-auto transition-transform duration-300 ease-in-out ${
          openPanel ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpenPanel(false)}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-700 text-[20px] font-bold transition-colors"
          aria-label="Close panel"
        >
          ✕
        </button>

        <div className="p-8 pt-10 text-gray-800">
          <h2 className="text-[24px] font-bold mb-6">Get in Touch</h2>

          <div className="mb-6">
            <h3 className="text-[17px] font-bold mb-2">Live Chat (Fastest)</h3>
            <p className="text-[14px] text-gray-600 leading-relaxed mb-3">
              Speak instantly with a Zoiko Orbit travel specialist.
            </p>
            <p className="text-[14px] text-gray-600 mb-1">
              <span className="font-bold">Hours:</span> Mon–Sat 8:30am–8:30pm, Sun 10am–6pm.
            </p>
            <p className="text-[14px] text-gray-600 mb-5">
              After hours, <span className="font-bold">Oriko is available 24/7.</span>
            </p>
            <button className="bg-[#00718A] hover:bg-[#005f75] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-[15px]">
              Chat with Oriko
            </button>
          </div>

          <hr className="border-gray-200 my-6" />

          <div className="mb-6">
            <h3 className="text-[17px] font-bold mb-3">Call Us</h3>
            <a
              href="tel:+18003990087"
              className="text-[#00718A] font-semibold text-[15px] hover:underline"
            >
              +1 800-399-0087
            </a>
          </div>

          <hr className="border-gray-200 my-6" />

          <div>
            <h3 className="text-[17px] font-bold mb-4">More Help</h3>
            <ul className="space-y-3 text-[14px]">
              {[
                { href: "/coverage", label: "Coverage Checker", desc: "Check coverage in 200+ destinations." },
                { href: "/RefundReturnPolicy", label: "Returns & Cancellations", desc: "30-day return window." },
                { href: "/Support", label: "Help Center", desc: "Setup guides, roaming tips, troubleshooting." },
              ].map((item) => (
                <li key={item.label} className="flex gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>
                    <Link
                      href={item.href}
                      className="text-[#00718A] font-semibold hover:underline"
                      onClick={() => setOpenPanel(false)}
                    >
                      {item.label}
                    </Link>{" "}
                    – {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Scroll to Top ── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#0d7c92] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 text-white"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}