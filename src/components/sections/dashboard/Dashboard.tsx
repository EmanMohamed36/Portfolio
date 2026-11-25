import {
  Activity,
  DollarSign,
  FolderKanban,
  Users,
} from "lucide-react";

import StatCard from "./StatCard";
import MiniChart from "./MiniChart";
import AIInsightCard from "./AIInsightCard";

export default function Dashboard() {
  return (
    <div className="rounded-[30px] border border-slate-200 bg-white p-4 sm:p-6 shadow-xl min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Analytics
          </p>

          <h2 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900">
            Business Dashboard
          </h2>
        </div>

        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          Live
        </span>
      </div>

    <div className="mt-6 grid gap-4 grid-cols-1 min-[400px]:grid-cols-2">       
         <StatCard
          title="Revenue"
          value="$128K"
          change="+18%"
          icon={<DollarSign size={22} />}
        />

        <StatCard
          title="Projects"
          value="146"
          change="+9%"
          icon={<FolderKanban size={22} />}
        />

        <StatCard
          title="Clients"
          value="382"
          change="+14%"
          icon={<Users size={22} />}
        />

        <StatCard
          title="Performance"
          value="98%"
          change="+6%"
          icon={<Activity size={22} />}
        />
      </div>

      <MiniChart />

      <AIInsightCard />
    </div>
  );
}