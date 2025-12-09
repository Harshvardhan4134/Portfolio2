"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ProjectsSection from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience";
import { HeroSection03 } from "@/components/ui/hero-03";
import { FloatingConsultButton } from "@/components/ui/floating-consult-button";

function MainPage() {
  return (
    <>
      <SmoothScroll>
        <main className={cn("bg-slate-100 dark:bg-black overflow-x-hidden w-full")}>
          <HeroSection03 />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
        </main>
      </SmoothScroll>
      
      {/* Floating Consult Button */}
      <FloatingConsultButton
        buttonSize={180}
        imageSize={110}
        imageSrc="/assets/me2.jpg"
        imageAlt="Harshvardhan Gedela - Portfolio Consultant"
        revolvingText="LET'S TALK - COLLABORATION - GET IN TOUCH - "
        revolvingSpeed={12}
        popupHeading="Schedule a Call"
        popupDescription="Ready to collaborate on your next project? Let's have a free 30-minute discussion to explore how we can work together to bring your ideas to life."
        popupBadgeText="Free"
        ctaButtonText="Book a Call"
        ctaButtonAction={() => {
          // You can replace this with your actual booking link
          window.open('mailto:gharsha238@gmail.com?subject=Portfolio Consultation Request', '_blank');
        }}
        position={{ bottom: "2rem", right: "2rem" }}
      />
    </>
  );
}

export default MainPage;
