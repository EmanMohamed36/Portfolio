import Container from "../../ui/Container";
import Dashboard from "./Dashboard";

export default function DashboardSection() {
  return (
    <section className="bg-slate-900 text-white py-12 sm:py-20 relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 text-xs font-semibold text-blue-400">
            Powerful Analytics
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Control Everything in One Place
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Manage your SaaS, track live metrics, and streamline your operations with our intuitively designed dashboard.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-800 bg-slate-950/50 p-2 sm:p-4 shadow-2xl backdrop-blur-sm">
          <Dashboard />
        </div>
      </Container>
    </section>
  );
}