// src/app/components/layout/navbar.tsx
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react"; // Import useState
import { Button } from "../ui/button"; // Import Button
import ChatbotModal from "../chatbot/ChatbotModal"; // Import Modal
import { MessageCircleQuestion } from "lucide-react"; // Example Icon
import { Separator } from "../ui/separator";

const navItems = [
  { name: "About", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Discipline", href: "#discipline" },
  { name: "Experience", href: "#experience" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false); // State cho modal

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
    <>
      <header
        className={`fixed top-0 left-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? "bg-background/80 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        }`}
        data-aos="fade-in"
        data-aos-delay="300"
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
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsChatOpen(true)}
              className="gap-1.5"
            >
              <MessageCircleQuestion className="size-4" />
              Ask AI
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsChatOpen(true)}
              aria-label="Ask AI Assistant"
            >
              <MessageCircleQuestion className="size-5" />
            </Button>
          </div>
        </nav>
      </header>
      <ChatbotModal isOpen={isChatOpen} onOpenChange={setIsChatOpen} />
      <Separator />
    </>
  );
}
