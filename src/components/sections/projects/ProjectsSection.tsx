"use client";

import Container from "../../ui/Container";
import { projectsData } from "../../../data/projects";
import { useLanguage } from "../../../context/LanguageContext";
import ProjectCard from "./ProjectCard";
import { Sparkles } from "lucide-react";

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <section id="projects" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950/80 transition-colors duration-300 relative overflow-hidden">
      {/* Background Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles size={14} />
            {isAr ? "معرض الأعمال المباشرة" : "Production Portfolio"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            {isAr ? "مشاريع بنيتها" : "Projects I built"}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            {isAr 
              ? "استعرض مجموعة من حلولنا البرمجية المبتكرة المطلقة في بيئة الإنتاج للعملاء"
              : "Explore our curated showcase of live production applications and enterprise platforms."}
          </p>
        </div>

        {/* Projects Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}