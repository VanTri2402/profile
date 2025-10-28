export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  description?: string;
}

export const T_SHAPED_SKILLS: SkillCategory[] = [
  {
    id: "tech_depth",
    title: "Full-Stack Development & AI (Depth)",
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
    title: "Financial & Economic Analysis (Depth)",
    skills: [
      { id: "f1", name: "Financial Statement Analysis (FSA)" },
      { id: "f2", name: "Business Valuation (WACC, DCF)" },
      { id: "f3", name: "Performance Metrics (P/E, ROE, IRR)" },
      { id: "f4", name: "Econometrics" },
      { id: "f5", name: "Portfolio Management (MPT)" },
    ],
  },
  {
    id: "breadth",
    title: "Systems Thinking & Foundations (Breadth)",
    skills: [
      { id: "b1", name: "Systems Thinking" },
      { id: "b2", name: "Mental Models" },
      { id: "b3", name: "Behavioral Economics" },
      { id: "b4", name: "Robert Greene (Strategy)" },
      { id: "b5", name: "Kahneman (Decision Making)" },
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  imageUrl: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "Full-Stack Social Networking Platform",
    description:
      "A comprehensive social media application enabling users to share posts, interact with others through likes and comments, and build their network by following other users.",
    problem:
      "Users need a modern, responsive, and intuitive platform to connect and share content, but creating a secure and scalable social application from scratch presents significant technical challenges.",
    solution:
      "Developed a robust Full-Stack application using the T3 Stack (Next.js, TypeScript, Tailwind CSS). Leveraged Prisma as the ORM for efficient and type-safe database interactions with a PostgreSQL database. Implemented secure user authentication and management via Clerk, and integrated UploadThing for seamless image uploads. The architecture supports core social features like creating posts, commenting, liking, following users, and a real-time notification system.",
    result:
      "Successfully delivered a feature-rich, scalable social media MVP. The platform provides a seamless user experience for content sharing and social interaction, demonstrating strong proficiency in modern full-stack development, including authentication, database management, and building real-time features.",
    imageUrl: "/images/social-app-demo.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Tailwind CSS",
      "Uploadthing",
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/VanTri2402/social-app",
  },
  {
    id: "proj2",
    title: "AI-Powered Travel Itinerary Planner",
    description:
      "A modern web application that leverages AI to automatically generate detailed travel itineraries based on user inputs for destination, duration, and budget.",
    problem:
      "Planning a trip is complex and time-consuming, requiring users to research destinations, activities, and logistics manually. Consolidating this information into a coherent plan is a significant challenge.",
    solution:
      "Built a client-side React application using Vite and Tailwind CSS. Integrated the Google Gemini API to process user prompts and generate complete, structured travel plans. Implemented Google OAuth for user authentication and utilized browser storage to save and manage users' travel histories.",
    result:
      "Delivered an intelligent planning tool that drastically reduces trip planning time from hours to seconds. Users receive instant, personalized itineraries, demonstrating a strong ability to integrate third-party AI APIs into a user-friendly React application.",
    imageUrl: "/images/travel-planner.png",
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Google Gemini API",
      "Google OAuth",
      "Tailwind CSS",
      "React Router",
      "Kinde",
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/VanTri2402/travel-planner-app",
  },
  {
    id: "proj3",
    title: "Full-Stack E-commerce Platform (MVP)",
    description:
      "A minimum viable product (MVP) for an e-commerce site specializing in tech gear, featuring product listings, categories, a shopping cart, and a full admin dashboard.",
    problem:
      "Building a secure, scalable, and manageable e-commerce website requires a complex architecture that handles user authentication, product management, and user roles (admin vs. customer).",
    solution:
      "Developed a full-stack Next.js 14 application using App Router. Utilized Prisma and PostgreSQL for database management. Implemented secure authentication and role-based access control (admin/user) using Kinde. Built a comprehensive admin dashboard for full CRUD (Create, Read, Update, Delete) operations on products, categories, and user permissions.",
    result:
      "Successfully built a functional e-commerce MVP with a clean separation of concerns between the customer-facing store and the secure admin panel. This demonstrates the ability to build complex, data-driven, full-stack applications with modern authentication and ORMs.",
    imageUrl: "/images/tech-gear-mvp.png",
    techStack: [
      "Next.js 14",
      "Prisma",
      "PostgreSQL",
      "Kinde Auth",
      "TypeScript",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    repoUrl: "https://github.com/VanTri2402/tech-gear-mvp",
  },
];

export interface DisciplineItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export const DISCIPLINE_ITEMS: DisciplineItem[] = [
  {
    id: "vovinam",
    title: "Vovinam Việt Võ Đạo",
    description:
      "Cultivated personal discipline, endurance, and focus through years of martial arts practice.",
    icon: "Swords",
  },
  {
    id: "hoangphap",
    title: "Meditation & Volunteer Work",
    description:
      "Built inner peace, discipline (waking up at 5 AM), and a long-term perspective through activities at Hoang Phap Pagoda.",
    icon: "Sunrise",
  },
  {
    id: "finance_club",
    title: "Economic/Financial Activities",
    description:
      "Developed analytical and leadership skills through competitions and club activities...",
    icon: "Activity",
  },
];

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp2",
    role: "Financial Analyst Intern",
    company: "ABC Corporation (Example)",
    period: "Jun 2024 - Sep 2024",
    description: [
      "Supported the development of DCF valuation models for listed companies.",
      "Analyzed quarterly financial statements to identify key trends and risks.",
      "Prepared presentation materials for investment review meetings.",
    ],
  },
  {
    id: "exp1",
    role: "Junior Full-Stack Developer",
    company: "Personal Project XYZ (Example)",
    period: "Jan 2024 - May 2024",
    description: [
      "Developed frontend UI using Next.js and Tailwind CSS.",
      "Built backend APIs with Node.js and Prisma, connected to PostgreSQL.",
      "Deployed the application to Vercel with basic CI/CD setup.",
    ],
  },
];
