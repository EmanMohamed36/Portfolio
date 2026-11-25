export type ProjectDetail = {
  slug: string;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  shortDescEn: string;
  shortDescAr: string;
  fullDescEn: string;
  fullDescAr: string;
  mainImage: string;
  galleryImages: string[];
  clientEn: string;
  clientAr: string;
  durationEn: string;
  durationAr: string;
  liveUrl?: string;
  apiUrl?: string;
  githubUrl?: string;
  technologies: string[];
  metricsEn: { label: string; value: string }[];
  metricsAr: { label: string; value: string }[];
  featuresEn: string[];
  featuresAr: string[];
};

export const projectsData: ProjectDetail[] = [
  {
    slug: "amigo-arabe-tours",
    titleEn: "Amigo Arabe Tours",
    titleAr: "Amigo Arabe Tours",
    categoryEn: "Freelance · Tourism booking",
    categoryAr: "عمل حر · حجز سياحي",
    shortDescEn: "Production booking platform for Egypt, Saudi Arabia, the UAE, and Turkey, with multilingual content and online payments.",
    shortDescAr: "منصة حجز جاهزة للإنتاج تخدم مصر والسعودية والإمارات وتركيا، بمحتوى متعدد اللغات ومدفوعات إلكترونية.",
    fullDescEn: "I built a production-ready tourism booking platform serving Egypt, Saudi Arabia, the UAE, and Turkey. It supports multilingual content and secure online payments. I worked directly with the client on requirements, delivery, and ongoing support.",
    fullDescAr: "بنيت منصة حجز سياحي جاهزة للإنتاج تخدم مصر والسعودية والإمارات وتركيا، بمحتوى متعدد اللغات ومدفوعات إلكترونية آمنة. عملت مباشرة مع العميل على المتطلبات والتسليم والدعم المستمر.",
    mainImage: "/projects/image01.png",
    galleryImages: [
      "/projects/Amigo/image2.png",
      "/projects/Amigo/image3.png",
      "/projects/Amigo/image4.png",
      "/projects/Amigo/image5.png",
      "/projects/Amigo/image6.png",
      "/projects/Amigo/image7.png",
      "/projects/Amigo/image8.png",
      "/projects/Amigo/image9.png",
      "/projects/Amigo/image10.png",
      "/projects/Amigo/image11.png",
    ],
    clientEn: "Amigo Arabe Tours",
    clientAr: "Amigo Arabe Tours",
    durationEn: "Freelance",
    durationAr: "عمل حر",
    liveUrl: "https://amigoarabe.tours",
    technologies: [
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "PostgreSQL",
      "JWT",
      "Clean Architecture",
      "Angular",
      "PayPal",
      "PayTabs",
      "chatbot",
      "Docker",
    ],
    metricsEn: [
      { label: "Markets", value: "4" },
      { label: "Payments", value: "2" },
      { label: "Status", value: "Live" },
    ],
    metricsAr: [
      { label: "أسواق", value: "4" },
      { label: "بوابات دفع", value: "2" },
      { label: "الحالة", value: "مباشر" },
    ],
    featuresEn: [
      "Tour, booking, availability, and reservation management.",
      "PayPal and PayTabs payment gateways.",
      "Multilingual content and secure online payments.",
      "Requirements, delivery, and ongoing support with the client.",
    ],
    featuresAr: [
      "إدارة الجولات والحجوزات والتوافر والحجز.",
      "بوابتا PayPal وPayTabs.",
      "محتوى متعدد اللغات ومدفوعات إلكترونية آمنة.",
      "جمع المتطلبات والتسليم والدعم المستمر مع العميل.",
    ],
  },
  {
    slug: "chem-academy-platform",
    titleEn: "Chemistry LMS",
    titleAr: "منصة Chemistry",
    categoryEn: "Freelance · Learning platform",
    categoryAr: "عمل حر · منصة تعليم",
    shortDescEn: "Learning platform with a Next.js frontend, ASP.NET Core APIs, and video hosted on Cloudflare R2.",
    shortDescAr: "منصة تعليم بواجهة Next.js وواجهات ASP.NET Core وفيديو مستضاف على Cloudflare R2.",
    fullDescEn: "I built the Chemistry learning platform with ASP.NET Core APIs and a responsive Next.js frontend. Videos are hosted on Cloudflare R2, served through a Worker, and uploaded in multipart chunks. Images use ImgBB. I also handled updates, bug fixes, and production monitoring with the client.",
    fullDescAr: "بنيت منصة الكيمياء التعليمية بواجهات ASP.NET Core وواجهة Next.js متجاوبة. الفيديو مستضاف على Cloudflare R2 ويُخدم عبر Worker ويُرفع على أجزاء. الصور عبر ImgBB. تابعت التحديثات وإصلاح الأخطاء ومراقبة الإنتاج مع العميل.",
    mainImage: "/projects/chemistry/image01.png",
    galleryImages: [
      "/projects/chemistry/image02.png",
      "/projects/chemistry/image03.png",
      "/projects/chemistry/image04.png",
      "/projects/chemistry/image05.png",
      "/projects/chemistry/image06.png",
    ],
    clientEn: "Chemistry LMS",
    clientAr: "منصة Chemistry",
    durationEn: "Freelance",
    durationAr: "عمل حر",
    liveUrl: "https://a2-chemistry.vercel.app/",
    technologies: [
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "SQL Server",
      "JWT",
      "Union Architecture",
      "Next.js",
      "Tailwind CSS",
      "Cloudflare R2",
      "ImgBB",
    ],
    metricsEn: [
      { label: "Frontend", value: "Next.js" },
      { label: "Video", value: "R2" },
      { label: "Auth", value: "JWT" },
    ],
    metricsAr: [
      { label: "الواجهة", value: "Next.js" },
      { label: "الفيديو", value: "R2" },
      { label: "المصادقة", value: "JWT" },
    ],
    featuresEn: [
      "Video hosting on Cloudflare R2 with a Worker and multipart chunk uploads.",
      "ImgBB for images.",
      "RESTful APIs with ASP.NET Core and Clean Architecture.",
      "Responsive Next.js frontend, updates, bug fixes, and production monitoring.",
    ],
    featuresAr: [
      "استضافة الفيديو على Cloudflare R2 مع Worker ورفع مجزأ.",
      "ImgBB للصور.",
      "واجهات REST باستخدام ASP.NET Core وClean Architecture.",
      "واجهة Next.js متجاوبة، مع التحديثات وإصلاح الأخطاء ومراقبة الإنتاج.",
    ],
  },
  {
    slug: "talabaty-delivery-platform",
    titleEn: "Talabat System",
    titleAr: "نظام Talabat",
    categoryEn: "Food ordering",
    categoryAr: "طلب طعام",
    shortDescEn: "Food ordering system with ASP.NET Core, Angular, EF Core, and real-time order tracking.",
    shortDescAr: "نظام طلب طعام باستخدام ASP.NET Core وAngular وEF Core وتتبع لحظي للطلبات.",
    fullDescEn: "I designed and implemented a food ordering system with ASP.NET Core Web API and Angular. The API follows Clean Architecture with role-based authorization, and orders are tracked in real time with Entity Framework Core on SQL Server.",
    fullDescAr: "صممت ونفذت نظام طلب طعام باستخدام ASP.NET Core Web API وAngular. الواجهة تتبع Clean Architecture مع تفويض حسب الأدوار، وتتبع الطلبات يتم لحظيًا باستخدام Entity Framework Core على SQL Server.",
    mainImage: "/projects/Talabat/Image01.jpeg",
    galleryImages: [
      "/projects/Talabat/Image01.jpeg",
      "/projects/Talabat/Image02.jpeg",
      "/projects/Talabat/Image03.jpeg",
      "/projects/Talabat/Image04.jpeg",
      "/projects/Talabat/Image05.jpeg",
      "/projects/Talabat/Image06.jpeg",
      "/projects/Talabat/Image07.jpeg",
      "/projects/Talabat/Image08.jpeg",
      "/projects/Talabat/Image09.jpeg",
      "/projects/Talabat/Image10.jpeg",
      "/projects/Talabat/Image11.jpeg",
      "/projects/Talabat/Image12.jpeg",
      "/projects/Talabat/Image13.jpeg",
    ],
    clientEn: "Talabat System",
    clientAr: "نظام Talabat",
    durationEn: "Project",
    durationAr: "مشروع",
    technologies: [
      "ASP.NET Core",
      "EF Core",
      "RESTful API",
      "Union Architecture",
      "SQL Server",
      "Angular",
    ],
    metricsEn: [
      { label: "API", value: "REST" },
      { label: "Data", value: "EF Core" },
      { label: "UI", value: "Angular" },
    ],
    metricsAr: [
      { label: "الواجهة البرمجية", value: "REST" },
      { label: "البيانات", value: "EF Core" },
      { label: "الواجهة", value: "Angular" },
    ],
    featuresEn: [
      "Scalable food ordering with ASP.NET Core Web API and Angular.",
      "Clean Architecture and role-based authorization.",
      "Real-time order tracking and data handling with Entity Framework Core.",
    ],
    featuresAr: [
      "نظام طلب طعام باستخدام ASP.NET Core Web API وAngular.",
      "Clean Architecture وتفويض حسب الأدوار.",
      "تتبع لحظي للطلبات والتعامل مع البيانات باستخدام Entity Framework Core.",
    ],
  },
  {
    slug: "gym-system",
    titleEn: "Gym System",
    titleAr: "نظام الجيم",
    categoryEn: "MVC web application",
    categoryAr: "تطبيق MVC",
    shortDescEn: "Full-stack MVC application on a 3-layer architecture with authentication and CRUD.",
    shortDescAr: "تطبيق MVC متكامل بمعمارية من ثلاث طبقات، مع مصادقة وعمليات CRUD.",
    fullDescEn: "I developed a full-stack MVC web application using a 3-layer architecture: Presentation, Business, and Data. It includes CRUD operations plus authentication and authorization, with Entity Framework Core and SQL Server.",
    fullDescAr: "طوّرت تطبيق MVC متكامل بمعمارية من ثلاث طبقات: العرض، والأعمال، والبيانات. يشمل عمليات CRUD والمصادقة والتفويض، باستخدام Entity Framework Core وSQL Server.",
    mainImage: "/projects/gym/cover.png",
    galleryImages: ["/projects/gym/cover.png"],
    clientEn: "Gym System",
    clientAr: "نظام الجيم",
    durationEn: "Project",
    durationAr: "مشروع",
    technologies: ["ASP.NET", "EF Core", "MVC", "3-Layer Architecture", "SQL Server"],
    metricsEn: [
      { label: "UI", value: "MVC" },
      { label: "Layers", value: "3" },
      { label: "Data", value: "SQL" },
    ],
    metricsAr: [
      { label: "الواجهة", value: "MVC" },
      { label: "الطبقات", value: "3" },
      { label: "البيانات", value: "SQL" },
    ],
    featuresEn: [
      "3-layer architecture: Presentation, Business, and Data.",
      "CRUD operations.",
      "Authentication and authorization.",
    ],
    featuresAr: [
      "معمارية من ثلاث طبقات: العرض، والأعمال، والبيانات.",
      "عمليات CRUD.",
      "المصادقة والتفويض.",
    ],
  },
  {
    slug: "medical-society-platform",
    titleEn: "Medical Society System",
    titleAr: "نظام Medical Society",
    categoryEn: "Graduation project",
    categoryAr: "مشروع التخرج",
    shortDescEn: "Doctor–patient platform with real-time messaging, appointments, prescriptions, and medical records.",
    shortDescAr: "منصة طبيب ومريض برسائل لحظية ومواعيد وروشتات وسجلات طبية.",
    fullDescEn: "Graduation project for doctor–patient communication. I designed real-time messaging with Socket.io, and built modules for appointment scheduling, prescriptions, and medical records. Authentication uses JWT, with MongoDB data models aimed at security and scalability.",
    fullDescAr: "مشروع التخرج للتواصل بين الطبيب والمريض. صممت الرسائل اللحظية باستخدام Socket.io، وبنيت وحدات للمواعيد والروشتات والسجلات الطبية. المصادقة JWT، ونماذج البيانات على MongoDB مع اهتمام بالأمان وقابلية التوسع.",
    mainImage: "/projects/medical-society/image01.png",
    galleryImages: [
      "/projects/medical-society/image02.png",
      "/projects/medical-society/image03.png",
      "/projects/medical-society/image04.png",
      "/projects/medical-society/image05.png",
      "/projects/medical-society/image06.png",
      "/projects/medical-society/image07.png",
      "/projects/medical-society/image08.png",
      "/projects/medical-society/image09.png",
      "/projects/medical-society/image10.png",
      "/projects/medical-society/image11.png",
    ],
    clientEn: "Graduation project",
    clientAr: "مشروع التخرج",
    durationEn: "Graduation project",
    durationAr: "مشروع التخرج",
    technologies: ["Node.js", "Express.js", "Socket.io", "MongoDB", "JWT"],
    metricsEn: [
      { label: "Realtime", value: "Socket.io" },
      { label: "Data", value: "MongoDB" },
      { label: "Auth", value: "JWT" },
    ],
    metricsAr: [
      { label: "اللحظي", value: "Socket.io" },
      { label: "البيانات", value: "MongoDB" },
      { label: "المصادقة", value: "JWT" },
    ],
    featuresEn: [
      "Real-time doctor–patient communication with Socket.io.",
      "Appointment scheduling, prescriptions, and medical records.",
      "JWT authentication and data models focused on security and scalability.",
    ],
    featuresAr: [
      "تواصل لحظي بين الطبيب والمريض باستخدام Socket.io.",
      "جدولة المواعيد والروشتات والسجلات الطبية.",
      "مصادقة JWT ونماذج بيانات مع اهتمام بالأمان وقابلية التوسع.",
    ],
  },
];

export const projects = projectsData;
