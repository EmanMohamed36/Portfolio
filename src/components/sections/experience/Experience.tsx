"use client";

import { Briefcase, GraduationCap, Award } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

const jobs = [
  {
    roleEn: "Full Stack Developer",
    roleAr: "مطورة Full Stack",
    orgEn: "Mostaqbal Misr Authority",
    orgAr: "هيئة مستقبل مصر",
    dates: "04/2026 – 09/2026",
    locationEn: "Cairo, Egypt",
    locationAr: "القاهرة، مصر",
    pointsEn: [
      "Developed and maintained full-stack web applications using Next.js and ASP.NET Core.",
      "Implemented authentication, authorization, and secure API communication.",
      "Built responsive interfaces with React and Next.js, with attention to performance and SEO.",
    ],
    pointsAr: [
      "تطوير وصيانة تطبيقات ويب متكاملة باستخدام Next.js وASP.NET Core.",
      "تنفيذ المصادقة والتفويض والتواصل الآمن مع واجهات الـ API.",
      "بناء واجهات متجاوبة باستخدام React وNext.js، مع الاهتمام بالأداء وSEO.",
    ],
  },
  {
    roleEn: "Backend .NET Freelancer",
    roleAr: "مطورة Backend .NET",
    orgEn: "Freelance",
    orgAr: "عمل حر",
    dates: "01/2026 – 04/2026",
    locationEn: "",
    locationAr: "",
    pointsEn: [
      "Designed and developed RESTful APIs using ASP.NET Core, following Clean Architecture.",
      "Implemented JWT-based authentication and role-based authorization.",
      "Designed and optimized relational databases with Entity Framework Core.",
    ],
    pointsAr: [
      "تصميم وتطوير واجهات REST باستخدام ASP.NET Core وفق Clean Architecture.",
      "تنفيذ مصادقة مبنية على JWT وتفويض حسب الأدوار.",
      "تصميم وتحسين قواعد بيانات علائقية باستخدام Entity Framework Core.",
    ],
  },
  {
    roleEn: ".NET Backend Trainee",
    roleAr: "متدربة Backend .NET",
    orgEn: "Cairo Route Academy",
    orgAr: "Cairo Route Academy",
    dates: "10/2025 – 02/2026",
    locationEn: "",
    locationAr: "",
    pointsEn: [
      "Designed and built RESTful APIs using ASP.NET Core, following Clean Architecture.",
      "Implemented authentication and authorization using JWT.",
    ],
    pointsAr: [
      "تصميم وبناء واجهات REST باستخدام ASP.NET Core وفق Clean Architecture.",
      "تنفيذ المصادقة والتفويض باستخدام JWT.",
    ],
  },
  {
    roleEn: "Teaching Assistant, Computer Science",
    roleAr: "معيدة علوم الحاسب",
    orgEn: "SGU (El Saleheya El Gadida University)",
    orgAr: "جامعة الصالحية الجديدة (SGU)",
    dates: "10/2024 – 01/2026",
    locationEn: "El Saleheya El Gadida, Egypt",
    locationAr: "الصالحية الجديدة، مصر",
    pointsEn: [
      "Assisted undergraduate students with OOP, data structures, and software engineering.",
      "Mentored students implementing backend projects and debugging real problems.",
    ],
    pointsAr: [
      "مساعدة طلاب البكالوريوس في البرمجة كائنية التوجه وهياكل البيانات ومفاهيم هندسة البرمجيات.",
      "إرشاد الطلاب في تنفيذ مشاريع الخلفية وتصحيح المشكلات العملية.",
    ],
  },
];

const achievements = [
  {
    titleEn: "ICPC Africa & Arab Collegiate Programming Contest (Girls)",
    titleAr: "مسابقة ICPC للبنات لأفريقيا والدول العربية",
    resultEn: "Rank 44",
    resultAr: "الترتيب 44",
    date: "01/12/2022",
  },
  {
    titleEn: "Hacktoberfest",
    titleAr: "Hacktoberfest",
    resultEn: "Participated",
    resultAr: "مشاركة",
    date: "01/12/2022",
  },
  {
    titleEn: "ECPCQ Contest",
    titleAr: "مسابقة ECPCQ",
    resultEn: "Rank 23",
    resultAr: "الترتيب 23",
    date: "01/12/2021",
  },
];

export default function Experience() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <section
      id="experience"
      className="py-12 sm:py-16 bg-slate-100/80 dark:bg-slate-900/90 border-t border-b border-slate-200/60 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-100 dark:border-blue-900/50">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{isAr ? "الخبرة" : "Experience"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {isAr ? "الخبرة المهنية" : "Professional experience"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
            {isAr
              ? "خبرة في تطبيقات الويب وواجهات REST، إلى جانب التدريس الجامعي."
              : "Full-stack product work, REST APIs, and university teaching."}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {jobs.map((job) => (
            <article
              key={job.dates + job.orgEn}
              className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 sm:p-6 shadow-sm"
            >
              <p className="text-xs font-semibold text-blue-600">
                <span dir="ltr">{job.dates}</span>
                {(isAr ? job.locationAr : job.locationEn) ? ` · ${isAr ? job.locationAr : job.locationEn}` : ""}
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? job.roleAr : job.roleEn}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{isAr ? job.orgAr : job.orgEn}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {(isAr ? job.pointsAr : job.pointsEn).map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div id="education" className="mt-14 scroll-mt-28">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-100 dark:border-blue-900/50">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{isAr ? "التعليم" : "Education"}</span>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 sm:p-6 shadow-sm">
              <p className="text-xs font-semibold text-blue-600" dir="ltr">2020 – 2024</p>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                {isAr ? "بكالوريوس علوم الحاسب" : "B.Sc. in Computer Science"}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {isAr ? "جامعة قناة السويس بالإسماعيلية" : "Ismailia Suez Canal University"}
              </p>
              <p className="mt-4 text-3xl font-extrabold text-blue-600" dir="ltr">3.48</p>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                {isAr ? "امتياز · 87.09% · الترتيب السابع على القسم" : "Excellent · 87.09% · Ranked 7th in the CS department"}
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 sm:p-6 shadow-sm">
              <div className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>{isAr ? "الإنجازات" : "Achievements"}</span>
              </div>
              <ul className="space-y-4">
                {achievements.map((item) => (
                  <li key={item.titleEn} className="border-b border-slate-100 dark:border-slate-800 pb-4 last:border-0 last:pb-0">
                    <p className="text-sm font-bold text-blue-600">{isAr ? item.resultAr : item.resultEn}</p>
                    <p className="text-sm text-slate-800 dark:text-slate-100">{isAr ? item.titleAr : item.titleEn}</p>
                    <p className="text-xs text-slate-500" dir="ltr">{item.date}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
