import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen flex flex-col`}>
        
        {/* FIXED HEADER — NEVER HIDES */}
        <header className="fixed top-0 left-0 w-full z-50">
          <Header />
        </header>

        {/* MAIN CONTENT — pushed below header */}
        <main className="flex-1 pt-[90px]">
          {children}
        </main>

        {/* FOOTER — normal flow */}
        <Footer />

      </body>
    </html>
  );
}
