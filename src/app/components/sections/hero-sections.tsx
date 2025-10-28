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
      className="container max-w-7xl mx-auto px-4 h-screen min-h-[700px] flex items-center text-left"
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
            I build high-performance technology systems by applying econometric
            and financial strategy thinking.
          </p>
          <div className="flex gap-3" data-aos="fade-up" data-aos-delay="500">
            <Button asChild size="lg">
              <Link href="#projects">See Projects</Link>
            </Button>
            <Button variant={"destructive"} asChild>
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
          className="md:col-span-2 flex justify-center md:justify-end relative group w-[400px] h-[400px]"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <div
            className="absolute -inset-2 bg-gradient-to-tl from-green-500 via-red-500 to-violet-700 blur-md rounded-full transition duration-1000 opacity-25 group-hover:opacity-75 group-hover:duration-300 0pointer-events-none"
            aria-hidden="true"
          />
          <Image
            src="/avatar.jpg" //
            alt="Ảnh chân dung chuyên nghiệp của Nguyễn Hữu Văn Trí"
            fill
            priority={true}
            className="
                rounded-full object-cover 
                w-full h-full
                object-center
                block                 
                relative z-10   

              "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
