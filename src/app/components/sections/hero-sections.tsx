import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { FileText, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="container max-w-5xl mx-auto px-4 h-screen min-h-[700px] flex items-center text-left"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3 space-y-6">
          <Badge
            variant="outline"
            className="mb-4"
            data-aos-delay="300"
            data-aos="fade-right"
          >
            Tech Finance | Full-Stack | Systems Thinking
          </Badge>
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            data-aos-delay="400"
            data-aos="fade-left"
          >
            Nguyễn Hữu Văn Trí
          </h1>
          <p
            className="text-lg text-muted-foreground max-w-3xl mb-8 "
            data-aos-delay="500"
            data-aos="fade-left"
          >
            Tôi xây dựng các hệ thống công nghệ hiệu suất cao bằng cách áp dụng
            tư duy phân tích kinh tế lượng và chiến lược tài chính.
          </p>
          <div className="flex gap-3" data-aos="fade-up" data-aos-delay="500">
            <Button asChild size="lg">
              <Link href="/projects">Xem dự án</Link>
            </Button>
            <Button variant={"secondary"} asChild>
              <a
                href="/cv-nguyen-huu-van-tri.pdf"
                download
                className="inline-flex gap-2 items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-offset-gray-800 transition-colors hover:backdrop-opacity-90"
                aria-label="Download Tri's CV"
              >
                <FileText className="text-md" />
                Download CV
              </a>
            </Button>
          </div>
          <div
            className="flex gap-4 mt-8"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <Link href="https://github.com/VanTri2402" target="_blank">
              <Github className="w-6 h-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="https-linkedin-com/in/your-username" target="_blank">
              <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary" />
            </Link>
          </div>
        </div>
        <div
          className="md:col-span-2 flex justify-center md:justify-end"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <Image
            src="/avatar.jpg" //
            alt="Ảnh chân dung chuyên nghiệp của Nguyễn Hữu Văn Trí"
            width={400} // Giữ width/height gốc để Next.js tối ưu
            height={400}
            priority={true}
            className="
                rounded-full object-cover {/* Đảm bảo ảnh cũng tròn */}
                w-[272px] h-[272px]       {/* Size ảnh nhỏ hơn div ngoài 1 chút (do padding) */}
                md:w-[312px] md:h-[312px]
                lg:w-[342px] lg:h-[342px]
                block                     {/* Đảm bảo không có khoảng trắng thừa */}
              "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
