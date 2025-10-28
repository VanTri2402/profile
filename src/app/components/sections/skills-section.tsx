import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import React from "react";
import { T_SHAPED_SKILLS } from "@/lib/data";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="container max-w-7xl mx-auto px-4 py-10 md:py-28 "
    >
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold tracking-tight"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Hồ sơ năng lực & Kỹ năng mềm
        </h2>
        <p
          className="text-lg text-muted-foreground mt-2"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          Kết hợp chiều sâu về Kỹ thuật và Tài chính với chiều rộng về Tư duy Hệ
          thống.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-5xl mx-auto">
        {T_SHAPED_SKILLS.map((category, index) => (
          <div
            className="relative group"
            data-aos="fade-up"
            data-aos-delay={index * 300}
            key={category.id}
          >
            <div
              className="absolute -inset-2 bg-gradient-to-r from-red-600  to-violet-600 rounded-xl blur-lg opacity-25 group-hover:opacity-65 transition duration-1000 group-hover:duration-200 pointer-events-none"
              aria-hidden="true"
            />
            <Card className="flex flex-col h-full relative z-10 ">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 ">
                  {category.skills.map((skill) => (
                    <Badge key={skill.id} variant={"secondary"}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
