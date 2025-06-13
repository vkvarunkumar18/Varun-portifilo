"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();
      if (scrollYProgress.get() < 0.05) {
        // Show the nav at the very top (optional, as it's typically hidden then shows on scroll down)
        // Or keep it hidden if you want it to appear only on scroll down
        setVisible(false); // Keeps it hidden at the very top initially
      } else {
        setVisible(direction < 0); // Shows if scrolling up, hides if scrolling down
      }
    }
  });

  // Function to handle smooth scroll
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault(); // Prevent default anchor link behavior (instant jump)

    // Ensure targetId is a valid ID
    if (!targetId || targetId === "#") {
      console.warn("No valid target ID provided for smooth scroll.");
      return;
    }

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start", // Scrolls to the top of the target element
      });
    } else {
      console.warn(`Element with ID "${targetId}" not found for smooth scroll.`);
    }
  };


  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-full z-[5000] pr-4 pl-8 py-3 items-center justify-center space-x-4",
          "bg-gradient-to-b from-[#000000] to-[#151515] text-white shadow-lg",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            // Use onClick for smooth scroll, keep href for accessibility/fallback
            href={navItem.link}
            onClick={(e) => handleSmoothScroll(e, navItem.link)}
            className="relative items-center flex space-x-1 hover:text-blue-400 transition-colors" // Changed hover color to blue-400 for consistency
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
        <button
          onClick={(e) => handleSmoothScroll(e, "#contact-section")} // Make Contact button scroll to footer
          className="border text-sm font-medium relative border-white/30 text-white px-4 py-2 rounded-full hover:border-blue-400 transition-colors"
        >
          <span>Contact</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};