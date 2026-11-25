"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../../../context/LanguageContext";
import Container from "../../../components/ui/Container";
import { servicesData, ServiceDetail } from "../../../data/services";
import { 
  Code2, 
  BrainCircuit, 
  Smartphone, 
  Cloud, 
  Database, 
  ShieldCheck, 
  Palette,
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  PhoneCall 
} from "lucide-react";

export default function ServiceDetailClient({
  currentService,
}: {
  currentService: ServiceDetail;
}) {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  const renderIcon = (name: string) => {
    switch (name) {
      case "Code2": return <Code2 size={18} />;
      case "BrainCircuit": return <BrainCircuit size={18} />;
      case "Smartphone": return <Smartphone size={18} />;
      case "Cloud": return <Cloud size={18} />;
      case "Database": return <Database size={18} />;
      case "ShieldCheck": return <ShieldCheck size={18} />;
      case "Palette": return <Palette size={18} />;
      default: return <Code2 size={18} />;
    }
  };

  return (
    <div className="py-12 lg:py-20 bg-slate-100/60 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <Container>
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-8 min-w-0 overflow-hidden">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 shrink-0">
            {isAr ? "الرئيسية" : "Home"}
          </Link>
          {isAr ? <ChevronLeft size={14} className="shrink-0" /> : <ChevronRight size={14} className="shrink-0" />}
          <Link href="/#skills" className="hover:text-blue-600 dark:hover:text-blue-400 shrink-0">
            {isAr ? "المهارات" : "Skills"}
          </Link>
          {isAr ? <ChevronLeft size={14} className="shrink-0" /> : <ChevronRight size={14} className="shrink-0" />}
          <span className="text-blue-600 dark:text-blue-400 font-bold truncate min-w-0">
            {isAr ? currentService.titleAr : currentService.titleEn}
          </span>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 order-2 lg:order-1 min-w-0">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-none">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                <Sparkles size={18} className="text-blue-600 dark:text-blue-400" />
                <span>{isAr ? "كل المهارات" : "All skills"}</span>
              </h3>

              <nav className="flex flex-col gap-2">
                {servicesData.map((service) => {
                  const isActive = service.slug === currentService.slug;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className={`flex items-center justify-between gap-2 p-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 min-w-0 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className={isActive ? "text-white shrink-0" : "text-blue-600 dark:text-blue-400 shrink-0"}>
                          {renderIcon(service.iconName)}
                        </span>
                        <span className="truncate">{isAr ? service.titleAr : service.titleEn}</span>
                      </div>
                      {isAr ? <ChevronLeft size={16} className="shrink-0" /> : <ChevronRight size={16} className="shrink-0" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* CTA Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-500/20 text-center">
              <h4 className="text-lg font-black mb-2">
                {isAr ? "تحب نتكلم؟" : "Want to get in touch?"}
              </h4>
              <p className="text-blue-100 text-xs mb-6 leading-relaxed">
                {isAr
                  ? "راسليني عن فرصة وظيفية أو عن مشروع."
                  : "Reach out about a role or a project."}
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-white text-blue-700 font-bold text-xs shadow-md hover:bg-blue-50 transition-all"
              >
                <PhoneCall size={16} />
                <span>{isAr ? "تواصل معي" : "Contact Me"}</span>
              </Link>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-8 order-1 lg:order-2 min-w-0">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-4 break-words">
                {isAr ? currentService.titleAr : currentService.titleEn}
              </h1>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {isAr ? currentService.shortDescAr : currentService.shortDescEn}
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative h-56 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl"
            >
              <Image
                src={currentService.image}
                alt={currentService.titleEn}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <div className="p-5 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                {isAr ? "عن الخدمة" : "Overview"}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {isAr ? currentService.fullDescAr : currentService.fullDescEn}
              </p>

              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                  {isAr ? "التقنيات المستخدمة:" : "Technologies & Tools:"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentService.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                  {isAr ? "المزايا التي نقدمها لك:" : "Key Deliverables:"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(isAr ? currentService.featuresAr : currentService.featuresEn).map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{feature}</span>
                    </div>
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