import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tech,
  label,
}) => {
  return (
    <div className="group rounded-2xl overflow-hidden border border-[#1F2937] bg-gradient-to-br from-[#020617] via-[#020617] to-[#0B1220] shadow-lg shadow-black/40 hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300">
      <div
        className="h-52 md:h-64 relative overflow-hidden"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

        <div className="overlay items-center justify-center absolute inset-0 hidden group-hover:flex">
          <Link
            href={gitUrl}
            className="h-11 w-11 mr-3 border border-[#60A5FA]/60 bg-black/50 backdrop-blur-sm relative rounded-full hover:border-[#93C5FD] group/link transition-colors"
          >
            <CodeBracketIcon className="h-6 w-6 text-[#E5E7EB] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-11 w-11 border border-[#60A5FA]/60 bg-black/50 backdrop-blur-sm relative rounded-full hover:border-[#93C5FD] group/link transition-colors"
          >
            <EyeIcon className="h-6 w-6 text-[#E5E7EB] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white px-5 py-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h5 className="text-lg md:text-xl font-semibold tracking-tight">
            {title}
          </h5>
          {label && (
            <span className="px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wide bg-blue-500/10 text-blue-300 border border-blue-500/40">
              {label}
            </span>
          )}
        </div>
        <p className="text-sm md:text-[15px] text-[#9CA3AF] leading-relaxed">
          {description}
        </p>
        {tech && tech.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-[11px] bg-[#020617] border border-[#1F2937] text-[#E5E7EB]"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
