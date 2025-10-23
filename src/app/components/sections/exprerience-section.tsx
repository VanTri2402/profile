// File: src/app/components/sections/experience-section.tsx
import React from "react";
import { EXPERIENCES } from "@/lib/data";
import { cn } from "@/lib/utils"; // Import cn utility

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="container max-w-3xl mx-auto px-4 py-20 md:py-28" // Adjusted max-width for focus
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Career Journey
        </h2>
        <p className="text-lg text-muted-foreground mt-2">
          Key milestones and contributions.
        </p>
      </div>

      <div className="relative">
        {/* The Timeline Line */}
        <div
          className="absolute left-1/2 top-2 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"
          aria-hidden="true"
        />

        {EXPERIENCES.map((exp, index) => (
          <div
            key={exp.id}
            className={cn(
              "relative mb-12 md:mb-16",
              "md:flex md:items-start",
              index % 2 === 0 ? "md:flex-row-reverse" : "" // Alternate sides on desktop
            )}
          >
            {/* Timeline Dot (Desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-1 w-3 h-3 rounded-full border-2 border-primary bg-background -translate-x-1/2 z-10" />

            {/* Content Card (implicitly, using divs) */}
            <div
              className={cn(
                "md:w-[calc(50%-1.5rem)]", // Adjust width minus gap
                index % 2 === 0 ? "md:pl-6" : "md:pr-6 md:text-right" // Add padding based on side
              )}
            >
              <p className="text-sm font-semibold text-primary mb-1">
                {exp.period}
              </p>
              <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
              <p className="text-md text-muted-foreground mb-3">
                {exp.company}
              </p>
              <ul
                className={cn(
                  "list-disc space-y-1 text-sm text-muted-foreground/80",
                  index % 2 === 0
                    ? "list-inside"
                    : "md:list-outside md:text-right" // Adjust list style based on side
                )}
              >
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
