import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { BoxReveal } from "../reveal-animations";
import { cn } from "@/lib/utils";
import SkillsOrbitalTimeline from "@/components/ui/skills-orbital-timeline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate the skills title
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate the orbital timeline
      if (timelineRef.current) {
        gsap.fromTo(
          timelineRef.current,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: timelineRef.current,
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
    <section
      id="skills"
      className="w-full min-h-screen px-4 sm:px-6 md:px-8"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto pt-20 pb-24 space-y-10">
        <Link href={"#skills"}>
          <div ref={titleRef}>
            <BoxReveal width="100%">
              <div className="text-center space-y-4">
                <h2
                  className={cn(
                    "text-3xl sm:text-4xl text-center md:text-6xl lg:text-7xl",
                    "text-black dark:text-white"
                  )}
                >
                  Skills
                </h2>
                <p className="max-w-3xl mx-auto text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
                  A systems-first toolkit for cohesive experiences across platforms—balanced between code fluency, design craft,
                  and reliable delivery.
                </p>
              </div>
            </BoxReveal>
          </div>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 text-sm">
          {[
            { label: "Product Systems", detail: "Design systems, tokens, accessibility AA" },
            { label: "Shipping Pace", detail: "Rapid prototyping, experiments, release QA" },
            { label: "Collaboration", detail: "Spec handoff, critique, eng alignment" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-[0_25px_80px_-30px_rgba(0,0,0,0.35)] px-4 py-3 sm:px-5 sm:py-4 text-neutral-700 dark:text-neutral-100"
            >
              <p className="text-xs uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-400">
                {item.label}
              </p>
              <p className="mt-1 font-medium">{item.detail}</p>
            </div>
          ))}
        </div>

        <div
          className="relative mt-6 rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl shadow-[0_12px_50px_-24px_rgba(0,0,0,0.35)]"
          ref={timelineRef}
        >
          <SkillsOrbitalTimeline />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
