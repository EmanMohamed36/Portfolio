"use client";

import Container from "../ui/Container";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail, Heart, Code2, ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-12 sm:pt-20 pb-8 border-t border-slate-800/80 overflow-hidden">
      {/* Background Glow Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <Container>
        {/* Top Call To Action Banner */}
        <div className="mb-16 p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-slate-900 to-indigo-900/40 border border-blue-500/20 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="space-y-2 text-center md:text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20 mb-1">
              <Sparkles size={14} />
              <span>{isAr ? "تواصل" : "Contact"}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {isAr ? "للحديث عن فرصة وظيفية أو مشروع." : "Want to talk about a role or a project?"}
            </h3>
            <p className="text-sm text-slate-400 max-w-lg">
              {isAr
                ? "مطورة Backend .NET. أبني واجهات REST باستخدام ASP.NET Core وEntity Framework Core."
                : "Backend .NET developer. I build REST APIs with ASP.NET Core and Entity Framework Core."}
            </p>
          </div>
          <Link
            href="/#contact"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:scale-95"
          >
            <span>{isAr ? "تواصل معي" : "Contact Me"}</span>
            <ArrowUpRight size={18} className={isAr ? "rotate-180" : ""} />
          </Link>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5 pb-16 border-b border-slate-800/80">
          {/* Brand Identity */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <Code2 size={22} />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Eman<span className="text-blue-500"> Mohamed</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {isAr
                ? "مطورة Full Stack مقيمة في جدة، أعمل على ASP.NET Core وNext.js وSQL Server."
                : "Full Stack Developer based in Jeddah, working with ASP.NET Core, Next.js, and SQL Server."}
            </p>

            <div className="flex items-center gap-3 pt-2">
            {[
              {
                icon: FaGithub,
                href: "https://github.com/EmanMohamed36/",
                label: "GitHub",
              },
              {
                icon: FaLinkedinIn,
                href: "https://www.linkedin.com/in/eman-mohamed-652978225",
                label: "LinkedIn",
              },
            ].map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-sm hover:-translate-y-1"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {isAr ? "البورتفوليو" : "Portfolio"}
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: isAr ? "نبذة" : "About", href: "/#about" },
                { name: isAr ? "المهارات" : "Skills", href: "/#skills" },
                { name: isAr ? "المشاريع" : "Projects", href: "/#projects" },
                { name: isAr ? "الخبرة" : "Experience", href: "/#experience" },
                { name: isAr ? "التعليم" : "Education", href: "/#education" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div> 
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {isAr ? "المهارات" : "Skills"}
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: isAr ? "الخلفية" : "Backend", href: "/services/backend" },
                { name: isAr ? "الواجهات" : "Frontend", href: "/services/frontend" },
                { name: isAr ? "قواعد البيانات" : "Databases", href: "/services/databases" },
                { name: isAr ? "هندسة البرمجيات" : "Engineering", href: "/services/engineering" },
                { name: isAr ? "الأدوات" : "Tools", href: "/services/tools" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              {isAr ? "التواصل" : "Contact"}
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:emanbusiness2002@gmail.com"
                className="inline-flex items-center gap-2.5 min-w-0 max-w-full p-3 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-slate-300 hover:text-white hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <span className="font-medium break-all min-w-0">emanbusiness2002@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2024 Eman Mohamed Ibrahem</p>
          <p className="flex items-center gap-1.5">
            <span>{isAr ? "مطورة Full Stack" : "Full Stack Developer"}</span>
            <Heart size={14} className="text-rose-500 fill-rose-500 animate-pulse" />
            <span>ASP.NET Core</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}