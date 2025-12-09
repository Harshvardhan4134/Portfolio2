"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ProjectCardProps = React.HTMLAttributes<HTMLDivElement> & {
  imageUrl: string;
  title: string;
  subtitle: string;
  summary?: string;
  tags?: string[];
};

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[10px] tracking-wide">
    {children}
  </span>
);

export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ imageUrl, title, subtitle, summary, className, ...props }, ref) => {
    // Filter out conflicting HTML event handlers that conflict with framer-motion
    const {
      onDrag,
      onDragEnd,
      onDragStart,
      onAnimationStart,
      onAnimationEnd,
      onAnimationIteration,
      ...safeProps
    } = props as any;

    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
        transition={{ type: "spring", stiffness: 220, damping: 20 }}
        className={cn(
          "relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100",
          className
        )}
        {...safeProps}
      >
        <div className="w-full aspect-[16/10] bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
          <motion.img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover group-hover:scale-95 group-hover:rounded-2xl transform transition duration-200"
            initial={{ scale: 1.02 }}
            whileHover={{ scale: 0.95 }}
            transition={{ duration: 0.25 }}
          />
        </div>
        <div className="p-4">
          <h2 className="font-bold my-4 text-lg text-zinc-700">{title}</h2>
          {summary && (
            <h3 className="font-normal my-4 text-sm text-zinc-500">{summary}</h3>
          )}
          <div className="flex flex-row justify-between items-center mt-10">
            <span className="text-sm text-gray-500">{subtitle}</span>
            <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
              Read More
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;


