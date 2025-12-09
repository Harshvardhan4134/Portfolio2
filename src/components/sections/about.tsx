import React, { useEffect, useRef } from "react";
import { BoxReveal } from "../reveal-animations";
import { WordPullUp } from "../ui/word-pullup-animation";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutMe } from "../ui/about-me";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate the about section
      if (sectionRef.current) {
        gsap.fromTo(
          sectionRef.current,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate the content
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="w-full min-h-screen px-4 sm:px-6 md:px-8" ref={sectionRef}>
      <div className="pt-20 pb-20">
        <BoxReveal width="100%">
          <h2
            className={cn(
              "text-3xl sm:text-4xl text-center md:text-6xl lg:text-7xl",
              "text-black dark:text-white"
            )}
          >
            <WordPullUp
              words="ABOUT ME"
              className="text-center"
              delay={0.5}
              duration={0.8}
            />
          </h2>
        </BoxReveal>

        <div ref={contentRef} className="mt-16 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            {/* Availability Badge */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-600 dark:text-green-400 border border-green-200 dark:border-green-800 px-3 py-1 rounded-full">
                Available For Work
              </span>
            </div>

            {/* AboutMe Component */}
            <AboutMe />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
