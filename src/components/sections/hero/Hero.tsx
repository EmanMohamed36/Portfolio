// src/components/sections/Hero.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";
import Container from "../../ui/Container";
import { 
  Sparkles, 
  ArrowLeft, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Layers, 
  Zap, 
  Terminal, 
  CheckCircle2 
} from "lucide-react";

export default function Hero() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const techSkills = [
    { icon: <Cpu className="w-4 h-4 text-purple-500" />, label: "ASP.NET Core" },
    { icon: <Layers className="w-4 h-4 text-blue-500" />, label: "Next.js" },
    { icon: <Code2 className="w-4 h-4 text-cyan-500" />, label: "SQL Server" },
    { icon: <Zap className="w-4 h-4 text-amber-500" />, label: "Clean Architecture" },
  ];

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-24 bg-slate-50/50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* 1. High-Tech Background Grid & Neon Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            
            {/* Slogan Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span>{isAr ? "مطورة Full Stack · ASP.NET Core" : "Full Stack Developer · ASP.NET Core"}</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900 dark:text-white mb-6 max-w-full"
            >
              {isAr ? (
                <>
                  إيمان محمد <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    إبراهيم
                  </span>
                </>
              ) : (
                <>
                  Eman Mohamed <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Ibrahem
                  </span>
                </>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal"
            >
              {isAr
                ? "مطورة Backend .NET بخبرة في ASP.NET Core Web API وEntity Framework Core وSQL Server. أبني واجهات REST قابلة للتوسع، وأطبّق Clean Architecture، وأنفّذ المصادقة باستخدام JWT."
                : "Backend .NET developer with strong experience in ASP.NET Core Web API, Entity Framework Core, and SQL Server. I build scalable REST APIs, apply Clean Architecture, and implement JWT authentication."}
            </motion.p>

            {/* Tech Skills Pills (إظهار مهارات الشركة بأسلوب جذاب) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2.5 mb-8"
            >
              {techSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold shadow-xs"
                >
                  {skill.icon}
                  <span>{skill.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Call To Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{isAr ? "أعمالي" : "View My Work"}</span>
                {isAr ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </Link>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-800 dark:text-slate-200 font-bold text-sm transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{isAr ? "تواصل معي" : "Contact Me"}</span>
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Creative Tech Mockup / IDE Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Glowing Accent Ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl opacity-30 animate-pulse" />

            {/* Floating Card UI (Code & Metrics) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full min-w-0 rounded-2xl bg-slate-900 border border-slate-800 p-4 sm:p-5 shadow-2xl text-white font-mono text-xs overflow-hidden"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <Terminal size={14} className="text-blue-400" />
                  <span>developer.ts</span>
                </div>
              </div>

              {/* Code Snippet Display */}
              <div className="space-y-2 leading-relaxed text-slate-300 overflow-x-auto min-w-0 break-all sm:break-normal">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-purple-400">new</span> <span className="text-amber-300">FullStackDeveloper</span>();</p>
                <p className="pl-4 text-slate-400">// ASP.NET Core, Next.js, and SQL Server</p>
                <p className="pl-4"><span className="text-purple-400">await</span> developer.<span className="text-blue-300">build</span>({'{'}</p>
                <p className="pl-8"><span className="text-cyan-300">architecture</span>: <span className="text-emerald-400">&apos;Clean Architecture&apos;</span>,</p>
                <p className="pl-8"><span className="text-cyan-300">auth</span>: <span className="text-emerald-400">&apos;JWT&apos;</span>,</p>
                <p className="pl-8"><span className="text-cyan-300">data</span>: <span className="text-emerald-400">&apos;EF Core&apos;</span>,</p>
                <p className="pl-4">{'}'});</p>
                <p className="text-emerald-400 mt-2 flex items-center gap-1.5">
                  <CheckCircle2 size={14} /> <span>Based in Jeddah</span>
                </p>
              </div>

              {/* Floating Mini Badges for High Tech Visual Impact */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-12 right-4 px-3 py-2 rounded-xl bg-slate-800/90 border border-slate-700/80 backdrop-blur-md shadow-lg hidden sm:flex items-center gap-2"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-sans font-bold text-slate-200">JWT Auth</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-6 left-4 px-3 py-2 rounded-xl bg-slate-800/90 border border-slate-700/80 backdrop-blur-md shadow-lg hidden sm:flex items-center gap-2"
              >
                <Zap size={14} className="text-amber-400" />
                <span className="text-[10px] font-sans font-bold text-slate-200">Clean Architecture</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}