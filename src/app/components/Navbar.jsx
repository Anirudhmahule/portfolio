"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href={"/"} className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-sky-400 text-white shadow-lg shadow-blue-500/40">
            <span className="text-lg font-bold">A</span>
          </div>
          <div className="hidden flex-col leading-tight md:flex">
            <span className="text-sm font-semibold text-white">
              Anirudh Mahule
            </span>
            <span className="text-xs text-slate-400">
              Frontend Developer · React / Next.js
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 rounded-full border border-white/5 bg-black/20 px-4 py-1.5 text-sm shadow-lg shadow-black/40">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center rounded-full border border-slate-600/70 bg-black/40 px-3 py-2 text-slate-200 shadow-md shadow-black/50 hover:border-white hover:text-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center rounded-full border border-slate-600/70 bg-black/40 px-3 py-2 text-slate-200 shadow-md shadow-black/50 hover:border-white hover:text-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
