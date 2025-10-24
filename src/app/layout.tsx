// File: app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";
import "aos/dist/aos.css";
import { AOSInitializer } from "./components/AOSInitializer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nguyễn Hữu Văn Trí | Full-Stack & Financial Analysis",
  description: "Portfolio của Trí, kết hợp Kinh tế, Tài chính và AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      {/* Mặc định dark mode cho chuyên nghiệp */}
      <body className={inter.className}>
        <AOSInitializer />
        <div className="relative w-full h-full">
          <div className="absolute top-0 left-0 backdrop-blur-2xl bg-gradient-to-bl from-yellow-500 to-red-400 via-violet-500 opacity-50 "></div>
        </div>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
        <Footer />
      </body>
    </html>
  );
}
