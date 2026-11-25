// src/context/ThemeContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function isTheme(value: string | null): value is Theme {
  return value === "light" || value === "dark";
}

function applyTheme(next: Theme) {
  localStorage.setItem("theme", next);
  document.cookie = `theme=${next};path=/;max-age=31536000;SameSite=Lax`;
  document.documentElement.classList.toggle("dark", next === "dark");
}

export function ThemeProvider({
  children,
  initialTheme = "light",
}: {
  children: React.ReactNode;
  initialTheme?: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!isTheme(savedTheme) || savedTheme === initialTheme) return;
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, [initialTheme]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}