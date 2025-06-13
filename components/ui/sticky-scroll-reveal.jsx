"use client";
import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";

export const StickyScroll = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#000000", // A darker, slightly purplish gray, similar to slate-900 but deeper
    "#0D0D0D", // A very dark, almost black, but with a subtle hint of gray
    "#000000", // A slightly lighter dark gray, akin to neutral-800 or neutral-900
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[28rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      {/* Combined Section with Text and Image */}
      <div className="relative flex flex-col gap-20">
        {content.map((item, index) => (
          <motion.div
            key={item.title + index}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeCard === index ? 1 : 0.3 }}
          >
            {item.content}
          </motion.div>
        ))}
        <div className="h-40" />
      </div>
    </motion.div>
  );
};
