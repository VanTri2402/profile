import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
        {" "}
        <div className="md:col-span-3 space-y-6">
          <Badge variant="outline" className="mb-4">
            Hero Finance | Full-Stack | Systems Thinking
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Nguyễn Hữu Văn Trí
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8 ">
            Tôi xây dựng các hệ thống công nghệ hiệu suất cao bằng cách áp dụng
            tư duy phân tích kinh tế lượng và chiến lược tài chính.
          </p>
          <div className="flex gap-3">
            <Button asChild size="lg">
              <Link href="/projects">Xem dự án</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/path-to-your-cv.pdf" target="_blank">
                <FileText className="w-4 h-4" />
                Tải CV
              </Link>
            </Button>
          </div>
          <div className="flex gap-4 mt-8">
            <Link href="https://github.com/VanTri2402" target="_blank">
              <Github className="w-6 h-6 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="https-linkedin-com/in/your-username" target="_blank">
              <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary" />
            </Link>
          </div>
        </div>
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <Image
            src={"/avatar.jpg"}
            alt="Ảnh chân dung chuyên nghiệp của Nguyễn Hữu Văn Trí"
            width={400}
            height={400}
            priority={true}
            className="rounded-full object-cover w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px] border-4 border-primary/10 shadow-xl
            "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
