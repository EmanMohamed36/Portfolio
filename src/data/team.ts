export interface TeamMember {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string[];
  roleEn: string[];
  bioAr: string;
  bioEn: string;
}

export const teamData: TeamMember[] = [
  {
    id: "1",
    nameAr: "إيمان محمد",
    nameEn: "Eman Mohamed",
    roleAr: ["الرئيس التنفيذي ومؤسس الشركة", "مطور أنظمة خلفية"],
    roleEn: ["CEO & Founder", "Backend Developer"],
    bioAr: "خيرة في بناء التطبيقات عالية الأداء وتطوير الحلول السحابية.",
    bioEn: "Expert in building high-performance applications and cloud solutions.",
  },
  {
    id: "2",
    nameAr: "إيمان السيد",
    nameEn: "Eman ElSayed",
    roleAr: ["مطور شامل (Fullstack)"],
    roleEn: ["Fullstack Developer"],
    bioAr: "متخصصة في تطوير وتكامل الواجهات الأمامية والخلفية للأنظمة.",
    bioEn: "Specialized in fullstack web application development and system integration.",
  },
  {
    id: "3",
    nameAr: "فاطمة رفعت",
    nameEn: "Fatma Refaat",
    roleAr: ["مطور واجهات أماميّة"],
    roleEn: ["Frontend Developer"],
    bioAr: "شغوفة بتطوير واجهات مستخدم تفاعلية وسلسة بأحدث التقنيات.",
    bioEn: "Passionate about crafting interactive and seamless user interfaces.",
  },
  {
    id: "4",
    nameAr: "منة صلاح",
    nameEn: "Menna Salah",
    roleAr: ["مهندس عمليات التطوير (DevOps)"],
    roleEn: ["DevOps Engineer"],
    bioAr: "متخصصة في إدارة البنية التحتية السحابية وأتمتة عمليات النشر.",
    bioEn: "Specialized in cloud infrastructure management and CI/CD pipelines.",
  },
  {
    id: "5",
    nameAr: "شهد صوفي",
    nameEn: "Shahd Sofy",
    roleAr: ["مطور تطبيقات الهواتف الذكية"],
    roleEn: ["Mobile Developer"],
    bioAr: "خبير في بناء وتطوير تطبيقات الهواتف الذكية عالية الكفاءة.",
    bioEn: "Expert in building high-performance mobile applications.",
  },
  {
    id: "6",
    nameAr: "آية حسن",
    nameEn: "Aya Hassan",
    roleAr: ["مصممة واجهات وتجربة المستخدم (UI/UX)"],
    roleEn: ["UI/UX Designer"],
    bioAr: "متخصصة في تصميم تجارب مستخدم مبتكرة وواجهات جذابة.",
    bioEn: "Specialized in crafting intuitive user experiences and engaging interfaces.",
  },
  {
    id: "7",
    nameAr: "محمد إبراهيم",
    nameEn: "Mohamed Ibrahem",
    roleAr: ["مهندس ذكاء اصطناعي"],
    roleEn: ["AI Engineer"],
    bioAr: "مهتم بتطوير نماذج الذكاء الاصطناعي وتحليل البيانات الضخمة.",
    bioEn: "Passionate about developing AI models and big data analytics.",
  },
  
  {
  id: "8",
  nameAr: "سمير محمد",
  nameEn: "Sameer Mohamed",
  roleAr: ["مهندس اختبار جودة البرمجيات"],
  roleEn: ["QA / Software Tester"],
  bioAr: "متخصص في اختبار وتأكيد جودة البرمجيات وضمان خلوها من الأخطاء.",
  bioEn: "Specialized in software testing, quality assurance, and bug-free delivery.",
}
];