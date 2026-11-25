"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { projectsData } from "../../data/projects";
import Container from "../../components/ui/Container";

export default function AllProjectsPage() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  // حظر العناصر المكررة تلقائياً
  const uniqueProjects = projectsData.filter(
    (project, index, self) => index === self.findIndex((p) => p.slug === project.slug)
  );

  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors">
      <Container>
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-extrabold uppercase">
            <Sparkles size={14} />
            {isAr ? "معرض الأعمال الكامل" : "All Projects"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
            {isAr ? "المشاريع" : "Projects"}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {isAr
              ? "مرر الماوس على أي مشروع لعرض عنوانه والوصف، واضغط للانتقال إلى التفاصيل."
              : "Hover over any project card to discover details and click to view full case study."}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {uniqueProjects.map((project, idx) => (
            <Link
              key={`grid-item-${project.slug}-${idx}`}
              href={`/projects/${project.slug}`}
              className="group relative h-[300px] sm:h-[380px] rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-2xl transition-all duration-500 block cursor-pointer"
            >
              <Image
                src={project.mainImage}
                alt={project.titleEn}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent group-hover:via-slate-950/70 transition-all duration-300" />

              <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-blue-400 text-xs font-bold shadow-sm">
                {isAr ? project.categoryAr : project.categoryEn}
              </span>

              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex flex-col justify-end translate-y-0 md:translate-y-3 md:group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 flex items-center justify-between gap-2">
                  <span className="min-w-0 break-words">{isAr ? project.titleAr : project.titleEn}</span>
                  <ArrowUpRight size={20} className="text-blue-400 shrink-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 leading-relaxed mb-3">
                  {isAr ? project.shortDescAr : project.shortDescEn}
                </p>

                <div className="flex flex-wrap gap-1.5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  {project.technologies.slice(0, 3).map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-medium text-slate-200 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}