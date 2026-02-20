"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] mb-1">
            Languages & Core
          </h4>
          <ul className="space-y-1 text-[#E5E7EB]">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] mb-1">
            Frontend
          </h4>
          <ul className="space-y-1 text-[#E5E7EB]">
            <li>React</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>React Query</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] mb-1">
            Styling & UI
          </h4>
          <ul className="space-y-1 text-[#E5E7EB]">
            <li>Tailwind CSS</li>
            <li>CSS Modules</li>
            <li>Material UI</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] mb-1">
            Practices
          </h4>
          <ul className="space-y-1 text-[#E5E7EB]">
            <li>Responsive design</li>
            <li>Performance optimization</li>
            <li>API integration (REST)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] mb-1">
            Dev & Version Control
          </h4>
          <ul className="space-y-1 text-[#E5E7EB]">
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Chrome DevTools</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] mb-1">
            Backend & Services
          </h4>
          <ul className="space-y-1 text-[#E5E7EB]">
            <li>Supabase</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] mb-1">
            Deployment
          </h4>
          <ul className="space-y-1 text-[#E5E7EB]">
            <li>Vercel</li>
            <li>Netlify</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-[#9CA3AF] mb-1">
            Collaboration
          </h4>
          <ul className="space-y-1 text-[#E5E7EB]">
            <li>Jira / Agile workflows</li>
            <li>Code reviews</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-[#D1D5DB] mb-4">
            I&apos;m a frontend developer with 2+ years of experience building
            production-ready web applications. I enjoy turning complex problems
            into intuitive, performant interfaces using React, Next.js, and
            modern tooling.
          </p>
          <p className="text-base lg:text-lg text-[#9CA3AF]">
            I care about clean, maintainable code, collaboration, and shipping
            features that make a real difference to users. Outside of work, I
            like experimenting with new libraries, improving my UI design sense,
            and contributing to personal projects that sharpen my skills.
          </p>
          <div className="flex flex-row justify-start mt-8 space-x-7 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab === "tools"}
            >
              Tools
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
