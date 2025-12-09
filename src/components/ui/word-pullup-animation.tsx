"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordPullUpProps {
  words: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export const WordPullUp = ({ 
  words, 
  className,
  delay = 0,
  duration = 0.5 
}: WordPullUpProps) => {
  const wordsArray = words.split(" ");

  return (
    <div className={cn("overflow-hidden", className)}>
      {wordsArray.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration,
            delay: delay + index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
