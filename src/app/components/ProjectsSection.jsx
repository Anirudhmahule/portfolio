"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "The Wild Oasis",
    description:
      "Hotel booking management dashboard to manage cabins, bookings, and guests with real-time updates.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anirudhmahule/wild-oasis",
    previewUrl: "https://wildoasiss.vercel.app",
    tech: ["React", "React Query", "Supabase", "Styled Components"],
    label: "Featured · Dashboard",
  },
  {
    id: 2,
    title: "Shoppy Dashboard",
    description:
      "E-commerce admin dashboard with analytics, orders, and product management in a responsive layout.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anirudhmahule/Shoppy-dashboard",
    previewUrl: "https://shoppy-dashboard-ivory.vercel.app",
    tech: ["React", "Context API", "Syncfusion"],
    label: "Admin dashboard",
  },
  {
    id: 3,
    title: "Pizza Palette",
    description:
      "Pizza ordering app with cart, address form, and order tracking built for mobile-first usage.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anirudhmahule/pizza_palete",
    previewUrl: "https://pizza-palete.vercel.app",
    tech: ["React", "Redux", "Tailwind CSS"],
    label: "Ordering experience",
  },
  {
    id: 4,
    title: "Worldwise",
    description:
      "City bookmarking app to track places you&apos;ve visited and want to visit, visualized on a map.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Anirudhmahule/worldwise ",
    previewUrl: "https://worldwise-sigma.vercel.app/",
    tech: ["React", "Context API"],
    label: "Travel · Maps",
  },
  {
    id: 5,
    title: "UsePopcorn",
    description:
      "Movie discovery and rating app using external APIs with custom hooks for state and side effects.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anirudhmahule/usepopkorn",
    previewUrl: "https://usepopcornmovies.netlify.app",
    tech: ["React", "Custom Hooks"],
    label: "Entertainment",
  },
  {
    id: 6,
    title: "Groco",
    description:
      "Landing page and ordering flow for a grocery brand, built with semantic HTML, CSS and vanilla JS.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Anirudhmahule/Foodie-man",
    previewUrl: "https://grocery-man.netlify.app",
    tech: ["HTML", "CSS", "JavaScript"],
    label: "Landing page",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="my-16 md:my-24 scroll-mt-28">
      <div className="flex flex-col items-center text-center mb-10 md:mb-14">
        <p className="text-sm uppercase tracking-[0.3em] text-[#60A5FA] mb-3">
          Selected Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          My Projects
        </h2>
        <p className="text-[#ADB7BE] max-w-2xl text-sm md:text-base">
          A collection of applications I&apos;ve built using React, Next.js, and
          modern tooling, focused on clean UI, performance, and real-world
          problems.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <ul
        ref={ref}
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tech={project.tech}
              label={project.label}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
