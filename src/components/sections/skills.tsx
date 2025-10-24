import Link from "next/link";
import React from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";

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
          (hint: press a key)
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;
