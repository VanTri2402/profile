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
    title: "Portfolio Optimization AI",
    description:
      "AI application to optimize investment portfolios based on Modern Portfolio Theory.",
    problem:
      "Individual investors lack tools to build optimal portfolios based on risk and expected return.",
    solution:
      "Built a web app using Next.js, Python (Pandas, Scikit-learn) to analyze historical data, calculate covariance matrices, and suggest optimal asset weights (Efficient Frontier).",
    result:
      "Reduced portfolio standard deviation (risk) by 15% compared to random portfolios, achieving a higher Sharpe Ratio.",
    imageUrl: "/images/portfolio-opt.png",
    techStack: ["Next.js", "Python", "Pandas", "Scikit-learn", "MPT"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "proj2",
    title: "Real-time Financial Dashboard",
    description:
      "Dashboard displaying real-time financial data and technical analysis.",
    problem:
      "Tracking multiple fragmented financial data sources is time-consuming and hinders quick decision-making.",
    solution:
      "Developed a Full-Stack application (Next.js, Prisma, PostgreSQL/Neon) integrating financial APIs (e.g., Finnhub, Alpha Vantage), using WebSockets for real-time price updates and technical charting (TradingView Lightweight Charts).",
    result:
      "Provided a real-time market overview, helping users react 30% faster to price movements.",
    imageUrl: "/images/dashboard.png",
    techStack: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "WebSockets",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    repoUrl: "#",
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
