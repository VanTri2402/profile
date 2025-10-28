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
    title: "Phát triển Full-Stack ",
    skills: [
      { id: "s1", name: "Next.js" },
      { id: "s2", name: "TypeScript" },
      { id: "s3", name: "Node.js" },
      { id: "s5", name: "Prisma" },
      { id: "s6", name: "Tailwind CSS" },
      { id: "s7", name: "ReactJs" },
      { id: "s8", name: "Shadcn UI" },
      { id: "s9", name: "MongoDb" },
      { id: "s10", name: "Express Js" },
    ],
  },
  {
    id: "finance_depth",
    title: "Phân tích Tài chính & Kinh tế ",
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
    title: "Tư duy Hệ thống & Nền tảng ",
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
    title: "Nền tảng Mạng xã hội Full-Stack",
    description:
      "Một ứng dụng mạng xã hội toàn diện cho phép người dùng chia sẻ bài đăng, tương tác với người khác qua lượt thích và bình luận, và xây dựng mạng lưới của họ bằng cách theo dõi người dùng khác.",
    problem:
      "Người dùng cần một nền tảng hiện đại, đáp ứng nhanh và trực quan để kết nối và chia sẻ nội dung, nhưng việc tạo ra một ứng dụng xã hội an toàn và có khả năng mở rộng từ đầu đặt ra những thách thức kỹ thuật đáng kể.",
    solution:
      "Đã phát triển một ứng dụng Full-Stack mạnh mẽ sử dụng T3 Stack (Next.js, TypeScript, Tailwind CSS). Tận dụng Prisma làm ORM cho các tương tác cơ sở dữ liệu hiệu quả và an toàn kiểu với cơ sở dữ liệu PostgreSQL. Triển khai xác thực và quản lý người dùng an toàn qua Clerk, và tích hợp UploadThing để tải lên hình ảnh liền mạch. Kiến trúc hỗ trợ các tính năng xã hội cốt lõi như tạo bài đăng, bình luận, thích, theo dõi người dùng và hệ thống thông báo thời gian thực.",
    result:
      "Đã giao thành công một MVP mạng xã hội có nhiều tính năng, có khả năng mở rộng. Nền tảng cung cấp trải nghiệm người dùng liền mạch để chia sẻ nội dung và tương tác xã hội, thể hiện trình độ thành thạo vững chắc trong phát triển full-stack hiện đại, bao gồm xác thực, quản lý cơ sở dữ liệu và xây dựng các tính năng thời gian thực.",
    imageUrl: "/images/social.png",
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
    title: "Công cụ Lập kế hoạch Hành trình Du lịch bằng AI",
    description:
      "Một ứng dụng web hiện đại tận dụng AI để tự động tạo ra các lịch trình du lịch chi tiết dựa trên thông tin đầu vào của người dùng về điểm đến, thời gian và ngân sách.",
    problem:
      "Việc lập kế hoạch cho một chuyến đi rất phức tạp và tốn thời gian, yêu cầu người dùng phải nghiên cứu thủ công về điểm đến, hoạt động và hậu cần. Việc tổng hợp thông tin này thành một kế hoạch mạch lạc là một thách thức đáng kể.",
    solution:
      "Xây dựng một ứng dụng React phía client sử dụng Vite và Tailwind CSS. Tích hợp Google Gemini API để xử lý lời nhắc của người dùng và tạo ra các kế hoạch du lịch hoàn chỉnh, có cấu trúc. Triển khai Google OAuth để xác thực người dùng và sử dụng bộ nhớ trình duyệt để lưu và quản lý lịch sử du lịch của người dùng.",
    result:
      "Cung cấp một công cụ lập kế hoạch thông minh giúp giảm đáng kể thời gian lập kế hoạch chuyến đi từ hàng giờ xuống còn vài giây. Người dùng nhận được lịch trình tức thì, được cá nhân hóa, thể hiện khả năng tích hợp mạnh mẽ các API AI của bên thứ ba vào một ứng dụng React thân thiện với người dùng.",
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
    repoUrl: "https://github.com/VanTri2402/travel",
  },
  {
    id: "proj3",
    title: "Nền tảng Thương mại Điện tử Full-Stack (MVP)",
    description:
      "Một sản phẩm khả dụng tối thiểu (MVP) cho một trang web thương mại điện tử chuyên về thiết bị công nghệ, bao gồm danh sách sản phẩm, danh mục, giỏ hàng và bảng điều khiển quản trị đầy đủ.",
    problem:
      "Xây dựng một trang web thương mại điện tử an toàn, có khả năng mở rộng và dễ quản lý đòi hỏi một kiến trúc phức tạp xử lý xác thực người dùng, quản lý sản phẩm và vai trò người dùng (quản trị viên so với khách hàng).",
    solution:
      "Phát triển một ứng dụng Next.js 14 full-stack sử dụng App Router. Sử dụng Prisma và PostgreSQL để quản lý cơ sở dữ liệu. Triển khai xác thực an toàn và kiểm soát truy cập dựa trên vai trò (admin/user) bằng Kinde. Xây dựng một bảng điều khiển quản trị toàn diện cho các hoạt động CRUD (Tạo, Đọc, Cập nhật, Xóa) đầy đủ trên sản phẩm, danh mục và quyền của người dùng.",
    result:
      "Đã xây dựng thành công một MVP thương mại điện tử chức năng với sự phân tách rõ ràng giữa cửa hàng面向khách hàng và bảng điều khiển quản trị an toàn. Điều này thể hiện khả năng xây dựng các ứng dụng full-stack phức tạp, dựa trên dữ liệu với xác thực và ORM hiện đại.",
    imageUrl: "/images/techStore.png",
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
      "Rèn luyện kỷ luật cá nhân, sức bền và sự tập trung qua nhiều năm luyện tập võ thuật.",
    icon: "Swords",
  },
  {
    id: "hoangphap",
    title: "Thiền & Công tác Tình nguyện",
    description:
      "Xây dựng sự bình an nội tâm, kỷ luật (thức dậy lúc 5 giờ sáng) và tầm nhìn dài hạn thông qua các hoạt động tại Chùa Hoằng Pháp.",
    icon: "Sunrise",
  },
  {
    id: "finance_club",
    title: "Hoạt động Kinh tế/Tài chính",
    description:
      "Phát triển kỹ năng phân tích thị trường và nghiên cứu lịch sử tài chính ...",
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
    role: "Thực tập sinh Phân tích Tài chính",
    company: "Tập đoàn ABC (Ví dụ)",
    period: "Jun 2024 - Sep 2024",
    description: [
      "Hỗ trợ phát triển các mô hình định giá DCF cho các công ty niêm yết.",
      "Phân tích báo cáo tài chính hàng quý để xác định các xu hướng và rủi ro chính.",
      "Chuẩn bị tài liệu thuyết trình cho các cuộc họp đánh giá đầu tư.",
    ],
  },
  {
    id: "exp1",
    role: "Lập trình viên Full-Stack Cơ bản",
    company: "Dự án Cá nhân XYZ (Ví dụ)",
    period: "Jan 2024 - May 2024",
    description: [
      "Phát triển giao diện người dùng frontend bằng Next.js và Tailwind CSS.",
      "Xây dựng các API backend với Node.js và Prisma, kết nối với PostgreSQL.",
      "Triển khai ứng dụng lên Vercel với thiết lập CI/CD cơ bản.",
    ],
  },
];
