"use client";

import Link from "next/link";
import React, { useEffect } from "react";

const navItems = [
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Home", href: "#herosection" },
  { name: "Discipline", href: "#discipline" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 transition-all duration-300 w-full ${
        isScrolled
          ? "bg-background/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container max-w-5xl mx-auto p-4 flex justify-between items-center ">
        <Link href="#hero" className="font-bold text-xl">
          Nguyen Huu Van Tri
          <br />
          <span className="text-blue-500">Alden</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
