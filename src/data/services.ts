export interface ServiceDetail {
  slug: string;
  iconName: "Code2" | "BrainCircuit" | "Smartphone" | "Cloud" | "Database" | "ShieldCheck" | "Palette";
  titleEn: string;
  titleAr: string;
  shortDescEn: string;
  shortDescAr: string;
  fullDescEn: string;
  fullDescAr: string;
  image: string;
  technologies: string[];
  featuresEn: string[];
  featuresAr: string[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "backend",
    iconName: "Code2",
    titleEn: "Backend Development",
    titleAr: "تطوير الخلفية",
    shortDescEn: "ASP.NET Core Web APIs, MVC, EF Core, LINQ, and JWT authentication.",
    shortDescAr: "واجهات ASP.NET Core وMVC وEntity Framework Core وLINQ ومصادقة JWT.",
    fullDescEn: "I design and build RESTful APIs with ASP.NET Core, following Clean Architecture. That includes JWT authentication, role-based authorization, and data access with Entity Framework Core and LINQ.",
    fullDescAr: "أصمم وأبني واجهات REST باستخدام ASP.NET Core وفق Clean Architecture، مع مصادقة JWT وتفويض حسب الأدوار والتعامل مع البيانات عبر Entity Framework Core وLINQ.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    technologies: ["C#", "ASP.NET Core", "Web API", "MVC", "EF Core", "LINQ", "JWT"],
    featuresEn: [
      "C# and ASP.NET Core",
      "Web API and MVC",
      "Entity Framework Core and LINQ",
      "Authentication and authorization with JWT and roles",
    ],
    featuresAr: [
      "C# وASP.NET Core",
      "Web API وMVC",
      "Entity Framework Core وLINQ",
      "المصادقة والتفويض باستخدام JWT والأدوار",
    ],
  },
  {
    slug: "frontend",
    iconName: "Code2",
    titleEn: "Frontend Development",
    titleAr: "تطوير الواجهات",
    shortDescEn: "React and Next.js interfaces, plus Angular on API-backed products.",
    shortDescAr: "واجهات React وNext.js، وAngular مع واجهات الـ API.",
    fullDescEn: "I build responsive interfaces with React and Next.js, with attention to performance and SEO. Angular is part of the booking and food-ordering projects, alongside Tailwind CSS on the Chemistry platform.",
    fullDescAr: "أبني واجهات متجاوبة باستخدام React وNext.js مع الاهتمام بالأداء وSEO. Angular جزء من مشاريع الحجز وطلب الطعام، وTailwind CSS مستخدم في منصة الكيمياء.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Next.js", "Angular", "Tailwind CSS"],
    featuresEn: ["React and Next.js", "Angular", "Tailwind CSS", "Responsive interfaces, performance, and SEO"],
    featuresAr: ["React وNext.js", "Angular", "Tailwind CSS", "واجهات متجاوبة مع اهتمام بالأداء وSEO"],
  },
  {
    slug: "databases",
    iconName: "Database",
    titleEn: "Databases",
    titleAr: "قواعد البيانات",
    shortDescEn: "Relational and document databases used across the APIs and projects.",
    shortDescAr: "قواعد علائقية ومستندية مستخدمة في الواجهات والمشاريع.",
    fullDescEn: "I design and optimize relational databases with Entity Framework Core. The projects use SQL Server, PostgreSQL, and MongoDB.",
    fullDescAr: "أصمم وأحسّن قواعد البيانات العلائقية باستخدام Entity Framework Core. المشاريع تستخدم SQL Server وPostgreSQL وMongoDB.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    technologies: ["SQL Server", "PostgreSQL", "MongoDB"],
    featuresEn: ["SQL Server", "PostgreSQL", "MongoDB", "Entity Framework Core"],
    featuresAr: ["SQL Server", "PostgreSQL", "MongoDB", "Entity Framework Core"],
  },
  {
    slug: "engineering",
    iconName: "ShieldCheck",
    titleEn: "Software Engineering",
    titleAr: "هندسة البرمجيات",
    shortDescEn: "Clean Architecture, SOLID, and RESTful API design.",
    shortDescAr: "Clean Architecture ومبادئ SOLID وتصميم واجهات REST.",
    fullDescEn: "The APIs follow Clean Architecture and SOLID. REST is the interface style, with JWT for authentication and roles for authorization. Some project stacks also name Union Architecture.",
    fullDescAr: "الواجهات تتبع Clean Architecture ومبادئ SOLID. أسلوب الواجهة REST، والمصادقة JWT والتفويض حسب الأدوار. بعض المشاريع تذكر Union Architecture أيضًا.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Clean Architecture", "SOLID", "REST", "JWT"],
    featuresEn: ["Clean Architecture", "SOLID principles", "RESTful APIs", "JWT and role-based authorization"],
    featuresAr: ["Clean Architecture", "مبادئ SOLID", "واجهات RESTful", "JWT وتفويض حسب الأدوار"],
  },
  {
    slug: "tools",
    iconName: "Cloud",
    titleEn: "Tools & Technologies",
    titleAr: "الأدوات والتقنيات",
    shortDescEn: "Git, GitHub, Swagger, Postman, Linux, and basic Docker.",
    shortDescAr: "Git وGitHub وSwagger وPostman وLinux وDocker بمستوى أساسي.",
    fullDescEn: "Day-to-day tools are Git and GitHub, Swagger and Postman for APIs, Linux, and Docker at a basic level. Amigo Arabe Tours was also containerized with Docker.",
    fullDescAr: "الأدوات اليومية هي Git وGitHub، وSwagger وPostman للواجهات، وLinux، وDocker بمستوى أساسي. مشروع Amigo Arabe Tours استخدم Docker أيضًا.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Git", "GitHub", "Swagger", "Postman", "Linux", "Docker"],
    featuresEn: ["Git and GitHub", "Swagger / Postman", "Linux", "Docker (Basic)"],
    featuresAr: ["Git وGitHub", "Swagger / Postman", "Linux", "Docker (أساسي)"],
  },
];
