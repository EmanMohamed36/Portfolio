"use client";

import React, { useRef, useEffect, useState } from "react";
import { User, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";
import { teamData } from "../../../data/team";

export default function Team() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 320;
      const multiplier = isAr
        ? direction === "left" ? 1 : -1
        : direction === "left" ? -1 : 1;

      scrollContainerRef.current.scrollBy({
        left: cardWidth * multiplier,
        behavior: "smooth",
      });
    }
  };

  // الحركة الأوتوماتيكية تلقائياً
  useEffect(() => {
    if (isHovered) return; // إيقاف الحركة عند تحويم الماوس

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        // التحقق من الوصول للنهاية للرجوع للبداية
        const isEnd = Math.abs(scrollLeft) >= maxScroll - 10;

        if (isEnd) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          scroll("right");
        }
      }
    }, 3000); // تتحرك كل 3 ثوانٍ

    return () => clearInterval(interval);
  }, [isHovered, isAr]);

  return (
    <section
      id="team"
      className="py-12 sm:py-16 bg-slate-100/80 dark:bg-slate-900/90 border-t border-b border-slate-200/60 dark:border-slate-800 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-100 dark:border-blue-900/50">
              <Users className="w-3.5 h-3.5" />
              <span>{isAr ? "فريق العمل" : "OUR TEAM"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              {isAr ? "تعرّف على فريقنا" : "Our Expert Team"}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
              {isAr
                ? "نخبة من المهندسين والمصممين الشغوفين بتحويل الأفكار إلى واقع رقمي متميز."
                : "A team of passionate engineers and designers transforming ideas into digital reality."}
            </p>
          </div>

          {/* Controls Buttons */}
          <div className="flex items-center gap-2.5 self-end md:self-auto">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous"
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-all duration-300 shadow-sm active:scale-95"
            >
              {isAr ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next"
              className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-all duration-300 shadow-sm active:scale-95"
            >
              {isAr ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Carousel Outer Wrapper */}
        <div 
          className="relative -mx-4 px-4 sm:-mx-6 sm:px-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {teamData.map((member) => (
              <div
                key={member.id}
                className="flex-none w-[min(85vw,280px)] sm:w-[310px] snap-start bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200/70 dark:border-slate-700/60 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  {/* Avatar Icon */}
                  <div className="w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/50 dark:to-teal-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center ring-1 ring-emerald-500/20 group-hover:scale-105 group-hover:ring-2 group-hover:ring-emerald-500 transition-all duration-300 shadow-inner">
                    <User className="w-10 h-10" />
                  </div>

                  {/* Member Details */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {isAr ? member.nameAr : member.nameEn}
                    </h3>

                    {/* Member Roles Tags */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 mb-3">
                      {(isAr ? member.roleAr : member.roleEn).map((role, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800/40"
                        >
                          {role}
                        </span>
                      ))}
                    </div>

                    {/* {member.bioAr || member.bioEn ? (
                      <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                        {isAr ? member.bioAr : member.bioEn}
                      </p>
                    ) : null} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}