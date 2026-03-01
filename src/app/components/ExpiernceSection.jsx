import React from "react";

const ExpiernceSection = () => {
  const experiences = [
    {
      role: "Software Engineer (Frontend - React)",
      company: "Accenture",
      period: "02/2026 – Present",
      location: "Pune, India",
      points: [
        "Promoted from Associate Software Developer for contributions in building reusable React UI modules.",
        "Designed reusable component architecture using React.js and Next.js.",
        "Reduced bundle size by ~30% via route-based code splitting.",
        "Improved rendering performance by ~25% using memoization (useMemo/useCallback).",
        "Built custom hooks for API data fetching and business rule rendering.",
        "Implemented protected routes, pagination and debounced search.",
      ],
      tech: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "REST APIs",
        "Git",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Accenture",
      period: "04/2024 – 02/2026",
      location: "Pune, India",
      points: [
        "Refactored legacy class-based components into modular functional components using React Hooks.",
        "Resolved 50+ UI performance issues in production pricing workflows.",
        "Collaborated with backend teams to integrate REST APIs.",
        "Implemented error boundaries for resilient UI rendering.",
        "Optimized API usage through client-side caching.",
      ],
      tech: ["React", "JavaScript", "HTML", "CSS", "REST APIs", "Git"],
    },
  ];

  return (
    <section id="experience" className="my-16 md:my-24 scroll-mt-28">
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        Experience
      </h2>

      <p className="text-center text-[#ADB7BE] mb-10 max-w-2xl mx-auto">
        Professional experience where I&apos;ve applied my skills to build
        real-world products and deliver value to clients.
      </p>

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <article
            key={index}
            className="relative border border-[#33353F] bg-gradient-to-br from-[#181818] to-[#111827] rounded-2xl p-6 md:p-8 shadow-lg shadow-black/40 overflow-hidden mb-6"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

            <header className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4 relative z-10">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="text-[#E5E7EB] text-sm md:text-base">
                  {exp.company} ·{" "}
                  <span className="text-[#60A5FA]">{exp.location}</span>
                </p>
              </div>
              <span className="text-xs md:text-sm text-[#9CA3AF] font-medium bg-[#111827] border border-[#1F2937] px-3 py-1 rounded-full">
                {exp.period}
              </span>
            </header>

            <ul className="list-disc list-outside pl-5 space-y-2 text-sm md:text-base text-[#D1D5DB] leading-relaxed relative z-10 mb-4">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 text-xs md:text-sm relative z-10">
              {exp.tech.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-[#111827] border border-[#1F2937] text-[#E5E7EB]"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExpiernceSection;
