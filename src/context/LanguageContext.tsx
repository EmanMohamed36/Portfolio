// src/context/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function isLanguage(value: string | null): value is Language {
  return value === "ar" || value === "en";
}

function applyLanguage(next: Language) {
  document.documentElement.lang = next;
  document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  localStorage.setItem("lang", next);
  document.cookie = `lang=${next};path=/;max-age=31536000;SameSite=Lax`;
}

export function LanguageProvider({
  children,
  initialLang = "ar",
}: {
  children: React.ReactNode;
  initialLang?: Language;
}) {
  const [lang, setLangState] = useState<Language>(initialLang);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (!isLanguage(savedLang) || savedLang === initialLang) return;
    setLangState(savedLang);
    applyLanguage(savedLang);
  }, [initialLang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    applyLanguage(newLang);
  };

  const toggleLang = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}