import { Sparkles } from "lucide-react";

export default function AIInsightCard() {
  return (
    <div className="mt-6 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-5 text-white shadow-xl">
      <div className="flex items-center gap-3">
        <Sparkles size={22} />

        <span className="font-semibold">
          AI Insight
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold">
        Revenue is expected to grow by 23% next month.
      </h3>

      <p className="mt-3 text-sm leading-7 text-blue-100">
        Customer engagement increased significantly after the latest product
        launch, resulting in higher conversion rates.
      </p>
    </div>
  );
}