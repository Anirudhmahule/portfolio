"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section id="contact" className="my-16 md:my-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617] px-6 py-10 md:px-10 md:py-12 shadow-[0_18px_45px_rgba(0,0,0,0.6)]">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-52 w-52 rounded-full bg-sky-500/15 blur-3xl" />

        <div className="grid gap-10 md:grid-cols-2 relative z-10">
          <div>
            <h5 className="text-3xl font-bold text-white mb-3">
              Let&apos;s work together
            </h5>
            <p className="text-[#E5E7EB] text-base md:text-lg mb-3 max-w-md">
              I&apos;m open to frontend engineering roles (React / Next.js),
              internships, and freelance projects. If you&apos;re hiring or have
              an opportunity in mind, I&apos;d love to hear from you.
            </p>
            <p className="text-[#9CA3AF] text-sm md:text-base mb-6">
              Based in Pune, India · Open to remote opportunities · Usually
              replies within 24–48 hours.
            </p>

            <div className="space-y-2 text-sm md:text-base">
              <p className="text-[#E5E7EB]">
                Email:{" "}
                <a
                  href="mailto:mahuleanirudh@gmail.com"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
                >
                  mahuleanirudh@gmail.com
                </a>
              </p>
              <p className="text-[#E5E7EB]">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/anirudh-mahule-21569a210/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
                >
                  /in/anirudh-mahule
                </a>
              </p>
            </div>

            <div className="flex flex-row items-center gap-4 mt-6">
              <a href="https://github.com/Anirudhmahule">
                <Image src={GithubIcon} alt="Github Icon" />
              </a>
              <a href="https://www.linkedin.com/in/anirudh-mahule-21569a210/">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <a href="mailto:mahuleanirudh@gmail.com">
              <button
                type="button"
                className="w-full h-[3.2rem] rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/30"
              >
                Contact me via email
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/anirudh-mahule-21569a210/"
              target="_blank"
            >
              <button
                type="button"
                className="w-full h-[3.2rem] rounded-xl border border-slate-600/70 bg-black/40 text-slate-100 hover:border-blue-400 hover:text-white"
              >
                View LinkedIn profile
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
