// src/app/layout.tsx
import React from "react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./globals.css";
import WhatsAppButton from "../components/layout/WhatsAppButton";
export const metadata: Metadata = {
  metadataBase: new URL("https://eman-mohamed-ibrahem.vercel.app"),
  title: "Eman Mohamed Ibrahem | Full Stack Developer",
  description:
    "Backend .NET developer with experience in ASP.NET Core Web API, Entity Framework Core, SQL Server, and Next.js. Based in Jeddah.",
  openGraph: {
    title: "Eman Mohamed Ibrahem | Backend .NET Developer",
    description:
      "Backend .NET developer with experience in ASP.NET Core Web API, Entity Framework Core, SQL Server, and Next.js. Based in Jeddah.",
    url: "https://eman-mohamed-ibrahem.vercel.app",
    type: "website",
    images: [
      {
        url: "https://eman-mohamed-ibrahem.vercel.app/image.png",
        width: 1200,
        height: 627,
        alt: "Eman Mohamed portfolio homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://eman-mohamed-ibrahem.vercel.app/image.png"],
  },
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = await cookies();
  const lang = store.get("lang")?.value === "en" ? "en" : "ar";
  const theme = store.get("theme")?.value === "dark" ? "dark" : "light";

  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={theme === "dark" ? "dark" : undefined}
      suppressHydrationWarning
    >
      <body
        className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300"
        suppressHydrationWarning
      >
        <LanguageProvider initialLang={lang}>
          <ThemeProvider initialTheme={theme}>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
