"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import { usePreloader } from ".";
import { Handlee } from "next/font/google";

const handlee = Handlee({
  subsets: ["latin"],
  weight: "400",
});

const greetings = [
  "Hello",
  "Namaste",
  "Hola",
  "Bonjour",
  "Ciao",
  "Konnichiwa",
  "Guten Tag",
  "Olá",
  "Zdravstvuyte",
  "Marhaba"
];

export default function Index() {
  const { isLoading, loadingPercent } = usePreloader();
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == greetings.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 250
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.introduction}
    >
      <motion.p 
        variants={opacity} 
        initial="initial" 
        animate="enter"
        className={`${styles.greeting} ${handlee.className}`}
      >
        {greetings[index]}
      </motion.p>
    </motion.div>
  );
}