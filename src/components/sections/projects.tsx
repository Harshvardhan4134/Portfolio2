"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ElitePlanCard } from "@/components/ui/elite-plan-card";
import ProjectCard from "@/components/ui/project-card";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="px-4 sm:px-6 md:px-8 py-16 sm:py-20"
    >
      <div className="max-w-6xl mx-auto">
        <Link href={"#projects"}>
          <h2
            className={cn(
              "text-3xl sm:text-4xl text-center md:text-6xl lg:text-7xl",
              "text-black dark:text-white mb-4"
            )}
          >
            Projects
          </h2>
        </Link>
        <p className="text-center text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-10 sm:mb-14">
          A curated mix of analytics, product, and platform builds—each shipped with measurable outcomes, clean handoff,
          and motion-polished UI.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10 text-xs uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
          <span className="rounded-full border border-white/15 bg-white/50 dark:bg-white/5 backdrop-blur px-3 py-1">
            Analytics
          </span>
          <span className="rounded-full border border-white/15 bg-white/50 dark:bg-white/5 backdrop-blur px-3 py-1">
            Product Systems
          </span>
          <span className="rounded-full border border-white/15 bg-white/50 dark:bg-white/5 backdrop-blur px-3 py-1">
            Full Stack
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project) => (
            <Modall key={project.src} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
const Modall = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-stretch justify-center">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full h-full">
          <div className="w-full h-full max-w-[520px]">
            <FollowerPointerCard title={project.title}>
              <ProjectCard
                imageUrl={project.src}
                title={project.title}
                subtitle={project.category}
                summary={(project as any).summary}
                className="bg-gradient-to-b from-white/80 via-white/70 to-white/60 dark:from-white/10 dark:via-white/5 dark:to-white/[0.04] border-white/30 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.55)]"
              />
            </FollowerPointerCard>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-3 sm:gap-4">
            <button className="px-3 py-2 bg-white text-black dark:bg-white/10 dark:text-white border border-black/10 dark:border-white/10 rounded-md text-sm w-28 shadow-sm hover:-translate-y-0.5 transition">
              Close
            </button>
            <Link href={project.live} target="_blank">
              <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-3 py-2 rounded-md border border-black dark:border-white w-28 shadow-sm hover:-translate-y-0.5 transition">
                Visit
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {/* <div className="flex justify-center items-center">
        {project.screenshots.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={`${project.src.split("1.png")[0]}${image}`}
              alt="screenshots"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div> */}
      {project.content}
    </>
  );
};
