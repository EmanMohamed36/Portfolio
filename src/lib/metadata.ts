import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: {
    default: "Eman Mohamed Ibrahem | Full Stack Developer",
    template: "%s | Eman Mohamed Ibrahem",
  },

  description:
    "Backend .NET developer with experience in ASP.NET Core Web API, Entity Framework Core, SQL Server, and Next.js. Based in Jeddah.",

  keywords: [
    "Eman Mohamed Ibrahem",
    "Full Stack Developer",
    "ASP.NET Core",
    "Entity Framework Core",
    "Next.js",
    "SQL Server",
  ],

  authors: [
    {
      name: "Eman Mohamed Ibrahem",
    },
  ],

  creator: "Eman Mohamed Ibrahem",

  openGraph: {
    title: "Eman Mohamed Ibrahem | Full Stack Developer",

    description:
      "Backend .NET developer building REST APIs with ASP.NET Core, Entity Framework Core, and SQL Server.",

    siteName: "Eman Mohamed Ibrahem",

    locale: "en_US",

    type: "website",
  },
};