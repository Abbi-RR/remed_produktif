"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  const scale = 1.2;
  const renderedWidth = Math.round(width * scale);
  const renderedHeight = Math.round(height * scale);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex items-center justify-center"
    >
      <Image
        src={`/skills/${src}`}
        width={renderedWidth}
        height={renderedHeight}
        alt={name}
        className="transition-transform duration-300 hover:scale-105"
      />
    </motion.div>
  );
};
