import Container from "../../ui/Container";

const companies = [
  "Microsoft",
  "Google",
  "Amazon",
  "Meta",
  "Netflix",
  "Adobe",
];

export default function TrustedSection() {
  return (
    <section className="py-12 sm:py-20">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.25em] text-slate-500">
          Trusted technologies we build with
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-8 text-center text-lg sm:text-2xl font-bold text-slate-300 md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company}
              className="transition hover:text-slate-700"
            >
              {company}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}