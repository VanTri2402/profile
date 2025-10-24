// File: app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";

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
      {" "}
      {/* Mặc định dark mode cho chuyên nghiệp */}
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
        <Footer/>
      </body>
    </html>
  );
}
