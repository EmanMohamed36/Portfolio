// src/components/sections/hero/HeroContent.tsx
import HeroActions from "./HeroActions";
import HeroBadge from "./HeroBadge";

export default function HeroContent() {
  return (
    <div className="max-w-xl text-center xl:text-left">
      <HeroBadge />

      <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl leading-tight">
        Eman Mohamed <br />
        <span className="text-blue-600">Ibrahem</span>
      </h1>

      <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
        Backend .NET developer with strong experience in ASP.NET Core Web API,
        Entity Framework Core, and SQL Server.
      </p>

      <HeroActions />
    </div>
  );
}