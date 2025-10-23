// File: lib/data.ts

// 1. Định nghĩa Type (Interface)
export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  description?: string; // Tùy chọn: mô tả ngắn
}

// 2. Tạo Dữ liệu Giả (Mock Data)
export const T_SHAPED_SKILLS: SkillCategory[] = [
  {
    id: "tech_depth",
    title: "Phát triển Full-Stack & AI (Depth)",
    skills: [
      { id: "s1", name: "Next.js" },
      { id: "s2", name: "TypeScript" },
      { id: "s3", name: "Node.js" },
      { id: "s4", name: "Python (Pandas, Scikit-learn)" },
      { id: "s5", name: "Prisma" },
      { id: "s6", name: "Tailwind CSS" },
      { id: "s7", name: "Docker" },
      { id: "s8", name: "LangChain" },
    ],
  },
  {
    id: "finance_depth",
    title: "Phân tích Tài chính & Kinh tế (Depth)",
    skills: [
      { id: "f1", name: "Phân tích Báo cáo Tài chính (FSA)" },
      { id: "f2", name: "Định giá Doanh nghiệp (WACC, DCF)" },
      { id: "f3", name: "Chỉ số Hiệu suất (P/E, ROE, IRR)" },
      { id: "f4", name: "Kinh tế Lượng (Econometrics)" },
      { id: "f5", name: "Quản lý Danh mục (MPT)" },
    ],
  },
  {
    id: "breadth",
    title: "Tư duy Hệ thống & Nền tảng (Breadth)",
    skills: [
      { id: "b1", name: "Systems Thinking (Tư duy Hệ thống)" },
      { id: "b2", name: "Mental Models (Mô hình Tư duy)" },
      { id: "b3", name: "Behavioral Economics (Kinh tế học Hành vi)" },
      { id: "b4", name: "Robert Greene (Chiến lược)" },
      { id: "b5", name: "Kahneman (Ra quyết định)" },
    ],
  },
];
