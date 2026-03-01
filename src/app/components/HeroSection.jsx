"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Anirudh Mahule",
                1200,
                "Software Engineer (React)",
                1200,
                "Frontend Developer",
                1200,
                "React & Next.js Engineer",
                1200,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-xl max-w-2xl">
            Software Engineer with 2+ years of experience building scalable,
            performance-optimized React.js applications for enterprise pricing
            platforms. Specialized in reusable component architecture, custom
            hooks, and modern frontend engineering practices.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/30">
              2+ years professional experience
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-slate-800/60 text-slate-200 border border-slate-600/60">
              React · Next.js · TypeScript · Tailwind
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
              Open to frontend roles (Pune/Remote)
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-700 to-blue-500 hover:from-primary-700 hover:to-blue-400 text-white text-center"
            >
              Get in touch
            </Link>
            <a
              href="/Anirudh_Mahule_2_yrs_Frontend_Developer.pdf"
              download="Anirudh_Mahule_2_yrs_Frontend_Developer.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-slate-700 to-slate-900 hover:from-slate-600 hover:to-slate-900 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative border-2 border-solid border-blue-400">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
