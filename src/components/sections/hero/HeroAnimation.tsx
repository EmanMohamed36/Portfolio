import { Code2, Cpu, Sparkles, Zap } from "lucide-react";

export default function HeroAnimation() {
  return (
    <div className="relative flex items-center justify-center">
      {/* خلفية التوهج (Glow Effect) */}
      <div className="absolute h-72 w-72 animate-pulse rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-6 -right-6 h-60 w-60 rounded-full bg-cyan-400/20 blur-2xl" />

      {/* الكارت الرئيسي المبتكر */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70">
        <div className="flex items-center justify-between border-b border-slate-200/60 pb-4 dark:border-slate-800">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
            <Sparkles size={12} /> AI Active
          </span>
        </div>

        {/* محاكاة كود/أنيميشن تفاعلي */}
        <div className="mt-6 space-y-3 font-mono text-sm">
          <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
            <Code2 size={18} className="text-blue-600" />
            <span className="animate-pulse font-semibold">Building Next-Gen Platform...</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div className="h-full w-3/4 rounded-full bg-blue-600 transition-all duration-1000 animate-pulse" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/50 p-3 dark:border-slate-800 dark:bg-slate-800/50">
              <Zap size={18} className="text-amber-500" />
              <div>
                <p className="text-[10px] text-slate-400">Speed</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">99.8% Fast</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/50 p-3 dark:border-slate-800 dark:bg-slate-800/50">
              <Cpu size={18} className="text-blue-500" />
              <div>
                <p className="text-[10px] text-slate-400">Uptime</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">100% Reliable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}