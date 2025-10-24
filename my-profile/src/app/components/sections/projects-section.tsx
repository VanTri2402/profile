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

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="container max-w-5xl mx-auto px-4 py-20 md:py-28"
    >
      <div className="text-center mb-12" data-aos="fade-left">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight"
          data-aos-delay="300"
        >
          Projects & Research
        </h2>
        <p className="text-lg text-muted-foreground mt-2" data-aos-delay="500">
          Demonstrate capacity through real projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <Card
            key={project.id}
            className="flex flex-col overflow-hidden"
            data-aos-delay={index * 300}
            data-aos="fade-up"
          >
            <div className="relative w-full h-48 md:h-56">
              <Image
                src={project.imageUrl}
                alt={`${project.title}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw , (max-width : 1200px) 50vw , 33vw"
                className="bg-muted"
              ></Image>
            </div>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl ">
                {project.title}
              </CardTitle>
              <CardDescription> {project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div>
                <h4 className="font-semibold mb-1">Problem: </h4>
                <p className="text-sm text-muted-foreground ">
                  {project.solution}
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
              {" "}
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
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
