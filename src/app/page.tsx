"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import { HeroSection03 } from "@/components/ui/hero-03";

function MainPage() {
  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-black overflow-x-hidden w-full")}>
          <HeroSection03 />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </SmoothScroll>
    </>
  );
}

export default MainPage;
