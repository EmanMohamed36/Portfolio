"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { projectsData } from "../../../data/projects";
import Container from "../../ui/Container";

export default function ProjectsCarousel() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // حظر العناصر المكررة تلقائياً بناءً على الـ slug
  const uniqueProjects = projectsData.filter(
    (project, index, self) => index === self.findIndex((p) => p.slug === project.slug)
  );

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // حركة مستمرة وسريعة كل 2.5 ثانية
    const interval = setInterval(() => {
      if (!isHovered) {
        const firstCard = scrollContainer.querySelector("a");
        const cardWidth = firstCard ? firstCard.getBoundingClientRect().width + 24 : 360;
        const isEnd =
          Math.abs(scrollContainer.scrollLeft) + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth - 20;

        if (isEnd) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollBy({
            left: isAr ? -cardWidth : cardWidth,
            behavior: "smooth",
          });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered, isAr]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector("a");
      const cardWidth = firstCard ? firstCard.getBoundingClientRect().width + 24 : 360;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-extrabold uppercase mb-3">
              <Sparkles size={14} />
              {isAr ? "معرض الأعمال" : "Featured Projects"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
              {isAr ? "مشاريع بنيتها" : "Work I have built"}
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll("left")}
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95 cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex gap-6 overflow-x-auto scroll-smooth py-4 -mx-4 px-4 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {uniqueProjects.map((project, idx) => (
            <Link
              key={`carousel-item-${project.slug}-${idx}`}
              href={`/projects/${project.slug}`}
              className="group relative flex-shrink-0 w-[min(85vw,300px)] sm:w-[360px] h-[360px] sm:h-[420px] snap-start rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer block"
            >
              <Image
                src={project.mainImage}
                alt={project.titleEn}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent group-hover:via-slate-950/70 transition-all duration-300" />

              <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[11px] font-extrabold text-slate-800 dark:text-blue-400 border border-white/20">
                {isAr ? project.categoryAr : project.categoryEn}
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {isAr ? project.titleAr : project.titleEn}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 opacity-90 mb-4 leading-relaxed">
                  {isAr ? project.shortDescAr : project.shortDescEn}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                  <span>{isAr ? "عرض التفاصيل" : "View Project"}</span>
                  <ExternalLink size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See More Link */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 transition-all hover:gap-4 active:scale-95 cursor-pointer"
          >
            <span>{isAr ? "شاهد كل المشاريع" : "See More Projects"}</span>
            <ArrowRight size={18} className={isAr ? "rotate-180" : ""} />
          </Link>
        </div>
      </Container>
    </section>
  );
}