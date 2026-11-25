"use client";

import Container from "../../ui/Container";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

export default function About() {
  const { lang } = useLanguage();

  const stats = [
    { label: lang === "ar" ? "المعدل · امتياز" : "GPA · Excellent", value: "3.48" },
    { label: lang === "ar" ? "الترتيب على القسم" : "CS department rank", value: lang === "ar" ? "7" : "7th" },
    { label: lang === "ar" ? "ICPC للبنات" : "ICPC Girls", value: "44" },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold text-blue-700">
              {lang === "ar" ? "نبذة" : "About Me"}
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {lang === "ar"
                ? "مطورة Backend .NET تبني واجهات REST وأنظمة حقيقية"
                : "A backend .NET developer building REST APIs and real systems"}
            </h2>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              {lang === "ar"
                ? "مطورة Backend .NET بخبرة قوية في ASP.NET Core Web API وEntity Framework Core وSQL Server. تبني واجهات REST قابلة للتوسع، وتطبّق Clean Architecture، وتنفّذ المصادقة والتفويض باستخدام JWT. خلفية أكاديمية قوية وخبرة عملية في أنظمة مثل التجارة الإلكترونية ومنصات الحجز."
                : "Backend .NET developer with strong experience in ASP.NET Core Web API, Entity Framework Core, and SQL Server. Skilled in building scalable RESTful APIs, applying Clean Architecture, and implementing authentication and authorization with JWT. Strong academic background and hands-on work on real systems such as e-commerce and booking platforms."}
            </p>

            <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-blue-600" />
                {lang === "ar" ? "ASP.NET Core وEntity Framework Core وSQL Server" : "ASP.NET Core, Entity Framework Core, and SQL Server"}
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-blue-600" />
                {lang === "ar" ? "Clean Architecture ومصادقة JWT حسب الأدوار" : "Clean Architecture and JWT role-based authentication"}
              </li>
              <li className="flex items-center gap-3">
                <Zap size={18} className="text-blue-600" />
                {lang === "ar" ? "واجهات Next.js وReact مع اهتمام بالأداء وSEO" : "Next.js and React interfaces, with attention to performance and SEO"}
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 bg-slate-50 p-5 sm:p-8 rounded-3xl border border-slate-200/80">
            {stats.map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="text-3xl sm:text-4xl font-extrabold text-blue-600">{stat.value}</p>
                <p className="text-sm font-medium text-slate-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
