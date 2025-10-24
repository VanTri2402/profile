// src/app/components/layout/footer.tsx (Redesigned)
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react"; // Thêm icon Mail
import { Separator } from "../ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="mt-20 md:mt-28 border-t border-border/10 bg-muted/30 dark:bg-card/50" // Nền khác biệt nhẹ
    >
      <div className="container max-w-5xl mx-auto px-4 py-12 md:py-16 text-center">
        {" "}
        {/* Tăng padding, căn giữa */}
        {/* Call to Action / Tagline */}
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
          Let's Connect
        </h3>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        {/* Social Links (Lớn hơn, ở giữa) */}
        <div className="flex justify-center gap-6 mb-8">
          <Link
            href="https://github.com/VanTri2402" // Link GitHub
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-muted-foreground transition-transform hover:text-primary hover:scale-110" // Hiệu ứng scale khi hover
          >
            <Github className="w-7 h-7" /> {/* Icon lớn hơn */}
          </Link>
          <Link
            href="YOUR_LINKEDIN_URL" // *** THAY THẾ BẰNG LINK LINKEDIN THẬT ***
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-muted-foreground transition-transform hover:text-primary hover:scale-110"
          >
            <Linkedin className="w-7 h-7" /> {/* Icon lớn hơn */}
          </Link>
          <Link
            href="mailto:YOUR_EMAIL@example.com" // *** THAY THẾ BẰNG EMAIL THẬT ***
            aria-label="Email Me"
            className="text-muted-foreground transition-transform hover:text-primary hover:scale-110"
          >
            <Mail className="w-7 h-7" /> {/* Icon lớn hơn */}
          </Link>
        </div>
        {/* Đường kẻ phân cách */}
        <Separator className="my-8 bg-border/30" />
        {/* Copyright & Built with (Gộp chung) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-x-4 gap-y-2 text-xs text-muted-foreground/70">
          <span>&copy; {currentYear} Nguyen Huu Van Tri (Alden).</span>
          <span className="hidden sm:inline">•</span>{" "}
          {/* Dấu chấm phân cách trên desktop */}
          <span>Built with Next.js & Tailwind CSS.</span>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 opacity-50"></div>
    </footer>
  );
}
