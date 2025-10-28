// src/app/components/sections/projects-section.tsx (Đã cập nhật)
import { PROJECTS } from "@/lib/data";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils"; // <-- 1. Import cn

const ProjectsSection = () => {
  // Logic lấy projectsToShow (nếu có) giữ nguyên
  const projectsToShow = PROJECTS.slice(0, 4);

  return (
    <section
      id="projects"
      className="container max-w-5xl mx-auto px-4 py-20 md:py-28"
    >
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Dự án & Nghiên cứu
        </h2>
        <p className="text-lg text-muted-foreground mt-2">
          Thể hiện năng lực thông qua các dự án thực tế.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projectsToShow.map((project, index) => (
          <div
            key={project.id}
            className="animated-border-wrapper border-none hover:border z-10 relative group p-[2px] rounded-xl h-full transition-shadow duration-300" // Đặt p-[2px] làm độ dày border, và rounded-xl
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div
              className={cn(
                "absolute inset-0 -z-10 rounded-xl", // rounded-xl phải khớp với thẻ cha
                "bg-gradient-to-r from-transparent to-transparent", // Gradient ban đầu trong suốt (ẨN)
                "group-hover:from-indigo-500 group-hover:to-pink-500", // Gradient khi HOVER
                "group-hover:opacity-100 opacity-0 transition-opacity duration-300" // Hiệu ứng mượt mà
              )}
            ></div>

            <Card
              className={cn(
                "flex flex-col overflow-hidden h-full bg-white dark:bg-card pt-0", // Thêm màu nền để che gradient
                "rounded-[10px] border-none" // Bo góc nhỏ hơn thẻ cha, loại bỏ border gốc
              )}
            >
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title}`}
                  fill
                  className="object-cover bg-muted object-top "
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardHeader className="p-2">
                <CardTitle className="text-xl md:text-2xl ">
                  {project.title}
                </CardTitle>
                <CardDescription> {project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Problem: </h4>
                  <p className="text-sm text-muted-foreground ">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Solution:</h4>
                  <p className="text-sm text-muted-foreground">
                    {project.solution}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Result:</h4>
                  <p className="text-sm text-muted-foreground">
                    {project.result}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start gap-3 pt-4">
                {/* Ensure footer aligns items */}
                {project.liveUrl && project.liveUrl !== "#" && (
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
                {project.repoUrl && project.repoUrl !== "#" && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> Source Code
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
