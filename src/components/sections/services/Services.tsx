// src/components/sections/services/Services.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";
import Container from "../../ui/Container";
import { servicesData } from "../../../data/services";
import { 
  Code2, 
  BrainCircuit, 
  Smartphone, 
  Cloud, 
  Database, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles 
} from "lucide-react";

export default function Services() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const renderIcon = (name: string) => {
    switch (name) {
      case "Code2": return <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case "BrainCircuit": return <BrainCircuit className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case "Smartphone": return <Smartphone className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case "Cloud": return <Cloud className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case "Database": return <Database className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case "ShieldCheck": return <ShieldCheck className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      default: return <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-slate-100/70 dark:bg-slate-900/90 border-y border-slate-200/60 dark:border-slate-800/80 transition-colors duration-300">
      
      {/* Background Radial Lights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-bold mb-4 shadow-xs"
          >
            <Sparkles size={14} />
            <span>{isAr ? "المهارات التقنية" : "TECHNICAL SKILLS"}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4"
          >
            {isAr ? "ما أستخدمه في بناء الأنظمة" : "What I use to build systems"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-300 text-base sm:text-lg"
          >
            {isAr
              ? "مهارات مذكورة في الخبرة والمشاريع: الخلفية، الواجهات، قواعد البيانات، والأدوات."
              : "Skills drawn from my experience and projects: backend, interfaces, databases, and tools."}
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link 
                href={`/services/${service.slug}`}
                className="group relative flex flex-col justify-between h-full p-5 sm:p-7 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500 dark:hover:border-blue-500/80 shadow-md hover:shadow-xl dark:shadow-none transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Top Header inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs group-hover:scale-110 transition-transform duration-300">
                      {renderIcon(service.iconName)}
                    </div>
                    
                    {/* Interactive Arrow Button */}
                    <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300">
                      {isAr ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                    </div>
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2.5">
                    {isAr ? service.titleAr : service.titleEn}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {isAr ? service.shortDescAr : service.shortDescEn}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {service.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-[11px] font-semibold text-blue-600 dark:text-blue-400">
                      +{service.technologies.length - 3}
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}