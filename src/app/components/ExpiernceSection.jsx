import React from "react";

const ExpiernceSection = () => {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Accenture",
      period: "04/2024 – Present",
      location: "Pune, India",
      points: [
        "Developed and maintained a web application, implementing daily feature updates and UI enhancements.",
        "Optimized React components to enhance performance and reduce load times, ensuring a smooth user experience.",
        "Collaborated with back-end teams to integrate REST APIs and enhance application functionality.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="my-16 md:my-24 scroll-mt-28"
    >
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        Experience
      </h2>
      <p className="text-center text-[#ADB7BE] mb-10 max-w-2xl mx-auto">
        Professional experience where I&apos;ve applied my skills to build real-world
        products and deliver value to clients.
      </p>

      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <article
            key={index}
            className="relative border border-[#33353F] bg-gradient-to-br from-[#181818] to-[#111827] rounded-2xl p-6 md:p-8 shadow-lg shadow-black/40 overflow-hidden"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

            <header className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4 relative z-10">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="text-[#E5E7EB] text-sm md:text-base">
                  {exp.company} · <span className="text-[#60A5FA]">{exp.location}</span>
                </p>
              </div>
              <span className="text-xs md:text-sm text-[#9CA3AF] font-medium bg-[#111827] border border-[#1F2937] px-3 py-1 rounded-full">
                {exp.period}
              </span>
            </header>

            <ul className="list-disc list-outside pl-5 space-y-2 text-sm md:text-base text-[#D1D5DB] leading-relaxed relative z-10">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExpiernceSection;
