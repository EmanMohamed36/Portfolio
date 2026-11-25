"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../../../context/LanguageContext";
import Container from "../../../components/ui/Container";
import { ProjectDetail } from "../../../data/projects";
import { 
  ExternalLink, 
  Code2, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Layers, 
  BarChart3, 
  CheckCircle2, 
  Calendar, 
  UserCheck 
} from "lucide-react";

export default function ProjectDetailClient({ currentProject }: { currentProject: ProjectDetail }) {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const [activeImage, setActiveImage] = useState(currentProject.mainImage);

  return (
    <div className="py-12 lg:py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors">
      <Container>
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 mb-8 min-w-0 overflow-hidden">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0">
            {isAr ? "الرئيسية" : "Home"}
          </Link>
          {isAr ? <ChevronLeft size={14} className="shrink-0" /> : <ChevronRight size={14} className="shrink-0" />}
          <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors shrink-0">
            {isAr ? "المشاريع" : "Projects"}
          </Link>
          {isAr ? <ChevronLeft size={14} className="shrink-0" /> : <ChevronRight size={14} className="shrink-0" />}
          <span className="text-blue-600 dark:text-blue-400 font-extrabold truncate min-w-0">
            {isAr ? currentProject.titleAr : currentProject.titleEn}
          </span>
        </div>

        {/* Title Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold mb-3">
              <Sparkles size={14} />
              {isAr ? currentProject.categoryAr : currentProject.categoryEn}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4 break-words">
              {isAr ? currentProject.titleAr : currentProject.titleEn}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-base max-w-2xl leading-relaxed">
              {isAr ? currentProject.shortDescAr : currentProject.shortDescEn}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {currentProject.liveUrl && (
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-500/25 transition-all"
              >
                <ExternalLink size={16} />
                <span>{isAr ? "زيارة الموقع الحي" : "Visit Live Site"}</span>
              </a>
            )}

            {currentProject.apiUrl && (
              <a
                href={currentProject.apiUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-100 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-700 font-bold text-xs sm:text-sm transition-all"
              >
                <Code2 size={16} />
                <span>{isAr ? "توثيق الـ API" : "API Docs"}</span>
              </a>
            )}
          </div>
        </div>

        {/* Gallery */}
        <div className="space-y-4 mb-16">
          <div className="relative h-[240px] sm:h-[420px] lg:h-[700px] w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
            <Image
              src={activeImage}
              alt={currentProject.titleEn}
              fill
              className="object-contain p-4 sm:p-6 transition-opacity duration-300"
              priority
            />
          </div>

          {currentProject.galleryImages.length > 1 && (
            <div className="flex items-center gap-4 overflow-x-auto pb-2 snap-x snap-mandatory min-w-0 no-scrollbar">
              {currentProject.galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`relative h-20 w-32 rounded-2xl overflow-hidden border-2 transition-all shrink-0 snap-start cursor-pointer ${
                    activeImage === img 
                      ? "border-blue-500 scale-105" 
                      : "border-slate-200 dark:border-slate-800 opacity-60"
                  }`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Body Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="p-5 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers size={20} className="text-blue-500" />
                <span>{isAr ? "عن المشروع" : "Project Overview"}</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {isAr ? currentProject.fullDescAr : currentProject.fullDescEn}
              </p>
            </div>

            {/* Features */}
            <div className="p-5 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 size={20} className="text-blue-500" />
                <span>{isAr ? "المميزات الرئيسية" : "Key Features"}</span>
              </h2>
              <ul className="space-y-3">
                {(isAr ? currentProject.featuresAr : currentProject.featuresEn)?.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Metrics */}
            <div className="p-5 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <BarChart3 size={20} className="text-emerald-500" />
                <span>{isAr ? "النتائج والأرقام" : "Key Metrics & Impact"}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {(isAr ? currentProject.metricsAr : currentProject.metricsEn).map((m, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center">
                    <p className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400 mb-1">{m.value}</p>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar (Right Column) */}
          <div className="lg:col-span-4">
            <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white pb-4 border-b border-slate-200 dark:border-slate-800">
                {isAr ? "بطاقة التفاصيل" : "Project Info"}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-medium">
                <div className="flex items-start justify-between gap-3 text-slate-500 dark:text-slate-400 min-w-0">
                  <span className="flex items-center gap-2 shrink-0">
                    <UserCheck size={16} className="text-blue-500" />
                    {isAr ? "العميل:" : "Client:"}
                  </span>
                  <span className="text-slate-900 dark:text-white font-bold text-end min-w-0 break-words">{isAr ? currentProject.clientAr : currentProject.clientEn}</span>
                </div>

                <div className="flex items-start justify-between gap-3 text-slate-500 dark:text-slate-400 min-w-0">
                  <span className="flex items-center gap-2 shrink-0">
                    <Calendar size={16} className="text-blue-500" />
                    {isAr ? "الدور:" : "Role:"}
                  </span>
                  <span className="text-slate-900 dark:text-white font-bold text-end min-w-0 break-words">{isAr ? currentProject.durationAr : currentProject.durationEn}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-3">
                  {isAr ? "التقنيات المستخدمة:" : "Technologies Used:"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}