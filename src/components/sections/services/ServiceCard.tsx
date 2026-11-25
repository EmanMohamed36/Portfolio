// src/components/sections/services/ServiceCard.tsx
"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext";

type Props = {
  slug: string; // تغيير الاسم هنا إلى slug لتجنب التمرير الخاطئ
  title: string;
  description: string;
  icon: React.ElementType;
};

export default function ServiceCard({ slug, title, description, icon: Icon }: Props) {
  const { lang } = useLanguage();

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={28} />
        </div>

        <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
      </div>

      <Link
        href={`/services/${slug}`}
        className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700 text-sm"
      >
        {lang === "ar" ? "تعرف على المزيد" : "Learn More"}
        {lang === "ar" ? (
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
        ) : (
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        )}
      </Link>
    </article>
  );
}