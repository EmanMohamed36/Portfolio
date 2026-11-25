"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ArrowUpRight, Sparkles, Code2 } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { ProjectDetail } from "../../../data/projects";

export default function ProjectCard({ project }: { project: ProjectDetail }) {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <article className="group relative rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5">
      
      {/* Decorative Glow Effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

      <div>
        {/* Cover Image Container */}
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={project.mainImage}
            alt={project.titleEn}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          {/* Category Badge */}
          <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-800 dark:text-blue-400 text-xs font-bold border border-slate-200/50 dark:border-slate-700/50 shadow-sm flex items-center gap-1.5">
            <Sparkles size={12} className="text-blue-500" />
            {isAr ? project.categoryAr : project.categoryEn}
          </span>

          {/* Live Status Indicator */}
          {project.liveUrl && (
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold border border-emerald-500/30 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {isAr ? "مباشر" : "LIVE"}
            </span>
          )}
        </div>

        {/* Details Content */}
        <div className="p-5 sm:p-6">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-between gap-2">
            <span className="min-w-0 break-words">{isAr ? project.titleAr : project.titleEn}</span>
          </h3>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {isAr ? project.shortDescAr : project.shortDescEn}
          </p>

          {/* Tech Badges */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-[11px] font-semibold text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-5 sm:p-6 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800/80 mt-4">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
        >
          <span>{isAr ? "عرض دراسة الحالة" : "View Case Study"}</span>
          <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all active:scale-95"
          >
            <span>{isAr ? "الموقع" : "Live Demo"}</span>
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </article>
  );
}