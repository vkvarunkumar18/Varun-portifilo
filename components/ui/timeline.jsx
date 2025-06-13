"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data = [] }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  // === ADJUST THIS VALUE ===
  // Experiment with this 'stopPoint' to match where '2023' appears in your timeline.
  // For instance, if '2023' is visible when you're 60% scrolled, set it to 0.6.
  const stopPoint = 0.7; // Currently set to 70% of scroll progress

  const heightTransform = useTransform(scrollYProgress, [0, stopPoint], [0, height]);

  const opacityTransform = useTransform(scrollYProgress, [0, 0.1, stopPoint, Math.min(1, stopPoint + 0.2)], [0, 1, 1, 0.5]);
  // Math.min(1, stopPoint + 0.2) ensures the last point doesn't exceed 1.0

  return (
    <div ref={containerRef} className="w-full font-montserrat md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl font-semibold">
          My Learning Journey Through Internships & Projects
        </h2>
        <p className="text-neutral-300 text-sm md:text-base max-w-sm">
          Every experience — from Vizag Steel Plant to Blackbucks — has added a new layer to my skills and perspective. Here's how it all unfolded.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-400">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-400">
                {item.title}
              </h3>
              <div className="text-white">{item.content}</div>
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};