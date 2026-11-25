// src/components/layout/Logo.tsx
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-xl shadow-md transition-transform group-hover:scale-105">
        E
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Eman<span className="text-blue-600"> Mohamed</span>
        </span>
      </div>
    </Link>
  );
}