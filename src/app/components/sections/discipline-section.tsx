// src/app/components/sections/discipline-section.tsx (Đã cập nhật)
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DISCIPLINE_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";

const glyphPaths: { [key: string]: string } = {
  vovinam: "M10 50 C 20 -10, 40 110, 50 50 C 60 -10, 80 110, 90 50",
  hoangphap: "M 50 10 A 40 40 0 1 0 50 90 A 40 40 0 1 0 15 35",
  finance_club: "M10 80 L 30 20 L 50 70 L 70 30 L 90 90",
};
const glyphLengths: { [key: string]: number } = {
  vovinam: 245.8, // <-- THAY BẰNG CHIỀU DÀI THẬT
  hoangphap: 235.6, // <-- THAY BẰNG CHIỀU DÀI THẬT
  finance_club: 278.1, // <-- THAY BẰNG CHIỀU DÀI THẬT
};
export default function DisciplineSection() {
  return (
    <section
      id="discipline"
      className="container max-w-7xl mx-auto px-4 py-20 md:py-28 bg-muted/30 dark:bg-card/50 rounded-lg my-20"
    >
      <div
        className="text-center mb-16"
        data-aos="fade-in"
        data-aos-delay="100"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Kỷ luật và sức mạnh nội tâm
        </h2>
        <p className="text-lg text-muted-foreground mt-2">
          Nền tảng cho phát triển bền vững và tầm nhìn dài hạn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-6">
        {" "}
        {/* Tăng gap nữa nếu cần */}
        {DISCIPLINE_ITEMS.map((item, index) => {
          const pathData = glyphPaths[item.id] || glyphPaths.vovinam;
          const pathLength = glyphLengths[item.id] || 500;

          return (
            // Đảm bảo div này có 'relative', 'group', và 'glyph-container'
            <div
              key={item.id}
              className="relative group glyph-container text-center"
              data-aos="fade-up"
              data-aos-delay={index * 200 + 300}
            >
              {/* SVG Glyph giữ nguyên cấu trúc */}
              <svg
                className="animated-glyph" // Class này kích hoạt animation thở sau AOS
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d={pathData}
                  style={{
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength,
                  }}
                />
              </svg>

              {/* Card chứa text giữ nguyên cấu trúc */}
              <Card
                className={cn(
                  "bg-transparent border-none shadow-none pt-0",
                  "flex flex-col justify-start"
                )}
              >
                <CardHeader className="p-0">
                  <CardTitle className="glyph-title transition-colors duration-300">
                    {" "}
                    {/* Class này cho hover title */}
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 pt-2 pb-0">
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}
