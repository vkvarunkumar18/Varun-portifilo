"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const lines = words.split("\n"); // Handle line breaks

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.15),
      }
    );
  }, [scope, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="space-y-4">
        {lines.map((line, lineIndex) => (
          <div key={lineIndex}>
            {line.split(" ").map((word, wordIndex) => (
              <motion.span
                key={word + wordIndex}
                className="opacity-0 text-inherit font-montserrat inline-block"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-montserrat", className)}>
      <div className="mt-4">
        <div className="text-inherit text-[18px] leading-relaxed font-montserrat">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
