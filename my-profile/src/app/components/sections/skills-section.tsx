import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import React from "react";
import { T_SHAPED_SKILLS } from "@/lib/data";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="container max-w-5xl mx-auto px-4 py-10 md:py-28 min-h-screen"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          T-Shaped Capability Profile
        </h2>
        <p className="text-lg text-muted-foreground mt-2">
          Combines Technical & Financial depth with Sysstems Thinking breadth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {T_SHAPED_SKILLS.map((category) => (
          <Card key={category.id} className="flex flex-col ">
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
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
