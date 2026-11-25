// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Globe, ChevronDown, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../ui/Container";
import Logo from "./Logo";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const languages = [
    { code: "ar", label: "العربية", flag: "🇪🇬" },
    { code: "en", label: "English", flag: "🇺🇸" },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const links = [
    { href: "/#about", en: "About", ar: "نبذة" },
    { href: "/#skills", en: "Skills", ar: "المهارات" },
    { href: "/#projects", en: "Projects", ar: "المشاريع" },
    { href: "/#experience", en: "Experience", ar: "الخبرة" },
    { href: "/#contact", en: "Contact", ar: "تواصل" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 dark:border-slate-800/80 bg-white/75 dark:bg-slate-950/75 backdrop-blur-xl transition-colors duration-300">
      <Container>
        <div className="flex h-16 sm:h-20 items-center justify-between gap-3">
          
          <motion.div whileHover={{ scale: 1.05 }} className="flex min-w-0 items-center shrink">
          <Logo />
        </motion.div>

          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-slate-100/80 dark:bg-slate-900/80 p-1.5 border border-slate-200/60 dark:border-slate-800/60 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-inner">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-sm transition-all duration-200"
              >
                {lang === "ar" ? item.ar : item.en}
              </Link>
            ))}
          </nav>

          {/* 3. Dropdown قائمة اللغة + زر Dark Mode + زر الـ CTA */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Language Dropdown List */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-blue-500 text-xs font-bold transition-all duration-200 shadow-sm"
              >
                <Globe size={16} className="text-blue-600 dark:text-blue-400" />
                <span>{lang === "ar" ? "العربية" : "English"}</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${langDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute end-0 mt-2 w-40 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xl py-2 z-50 overflow-hidden"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code as "ar" | "en");
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-xs font-bold transition-colors ${
                          lang === l.code
                            ? "bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400"
                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80"
                        }`}
                      >
                        <span className="text-base">{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark / Light Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-slate-700" />
              )}
            </motion.button>

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-xs shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <Sparkles size={14} />
              <span>{lang === "ar" ? "تواصل معي" : "Contact Me"}</span>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden shrink-0 p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden pb-6 pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-4"
            >
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="font-semibold text-slate-700 dark:text-slate-200"
                >
                  {lang === "ar" ? item.ar : item.en}
                </Link>
              ))}

              <Link
                href="/#contact"
                onClick={closeMobileMenu}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25"
              >
                <Sparkles size={14} />
                <span>{lang === "ar" ? "تواصل معي" : "Contact Me"}</span>
              </Link>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
                  aria-label="Toggle Dark Mode"
                >
                  {theme === "dark" ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLang("ar")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold ${lang === "ar" ? "bg-blue-600 text-white" : "border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"}`}
                  >
                    العربية
                  </button>
                  <button
                    onClick={() => setLang("en")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold ${lang === "en" ? "bg-blue-600 text-white" : "border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"}`}
                  >
                    English
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
