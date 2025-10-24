import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import { SKILLS } from "@/data/constants";

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full h-screen md:h-[150dvh] px-4 sm:px-6 md:px-8">
      <div className="top-[70px] sticky mb-96">
        <Link href={"#skills"}>
          <BoxReveal width="100%">
            <h2
              className={cn(
                "bg-clip-text text-3xl sm:text-4xl text-center text-transparent md:text-6xl lg:text-7xl",
                "bg-gradient-to-b from-black/80 to-black/50",
                "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 "
              )}
            >
              SKILLS
            </h2>
          </BoxReveal>
        </Link>
        <p className="mx-auto mt-3 sm:mt-4 line-clamp-4 max-w-3xl font-normal text-sm sm:text-base text-center text-neutral-300">
          (hint: press a key on the 3D keyboard below)
        </p>
        
        {/* Skills Grid Fallback */}
        <div className="mt-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
            {Object.values(SKILLS).slice(0, 12).map((skill) => (
              <div
                key={skill.id}
                className="group relative flex flex-col items-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-8 h-8 mb-2 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-full h-full object-contain filter brightness-0 invert dark:brightness-100 dark:invert-0"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-xs text-center text-neutral-300 group-hover:text-white transition-colors">
                  {skill.label}
                </span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                  {skill.shortDescription}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-neutral-400 mt-4">
            Showing {Object.values(SKILLS).length} skills • Interactive 3D keyboard below
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
