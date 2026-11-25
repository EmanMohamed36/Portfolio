import { ReactNode } from "react";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  icon: ReactNode;
};

export default function StatCard({
  title,
  value,
  change,
  positive = true,
  icon,
}: StatCardProps) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-4
      sm:p-5
      min-w-0
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
    "
    >
      <div className="flex items-center justify-between">
        <div
          className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-2xl
          bg-blue-50
          text-blue-600
        "
        >
          {icon}
        </div>

        <span
          className={`text-sm font-semibold ${
            positive ? "text-green-600" : "text-red-600"
          }`}
        >
          {change}
        </span>
      </div>

      <h4
        className="
        mt-6
        text-sm
        text-slate-500
      "
      >
        {title}
      </h4>

      <h2
        className="
        mt-2
        text-2xl
        font-bold
        text-slate-900
      "
      >
        {value}
      </h2>
    </div>
  );
}