"use client";
import React from "react";
import { Timeline } from "../components/ui/timeline";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Experience = () => {
  const data = [
    {
      title: "2024",
      content: (
        <div>
         <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
            UI/UX Design Intern – Blackbucks
          </h3>
          <p className="mb-8 text-xs md:text-sm text-white">
            Designed responsive UI screens, created interactive prototypes in Figma, and contributed to design system improvements to enhance the user experience at Blackbucks.
          </p>
    <div className="grid grid-cols-2 gap-8 ">
  <Image
    className="Taptap-1 rounded-xl transform transition-transform duration-300 hover:scale-105"
    src="/images/taptap-1.png"
    alt="TapTap-image"
    width={400}
    height={400}
  />
  <Image
    className="Taptap-2 rounded-xl transform transition-transform duration-300 hover:scale-105"
    src="/images/taptap-3.png"
    alt="TapTap-image"
    width={400}
    height={400}
  />
  <Image
    className="Taptap-3 rounded-xl transform transition-transform duration-300 hover:scale-105"
    src="/images/taptap-2.png"
    alt="TapTap-image"
    width={400}
    height={400}
  />
  <Image
    className="Taptap-4 rounded-xl transform transition-transform duration-300 hover:scale-105"
    src="/images/taptap-4.png"
    alt="TapTap-image"
    width={400}
    height={400}
  />
</div>
        </div>
      ),
    },

    
    {
      title: "2023",
      content: (
        <div>
          <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
            Web Development Intern – Vizag Steel Plant
          </h3>
          <p className="mb-8 text-xs md:text-sm text-white">
            Developed and optimized responsive web pages using HTML, CSS, and JavaScript, and develpoed a Online Car rental Website.
          </p>
    <div className="grid grid-cols-2 gap-8 ">
  <Image
    className="Taptap-1 rounded-xl transform transition-transform duration-300 hover:scale-105"
    src="/images/car-1.png"
    alt="TapTap-image"
    width={400}
    height={400}
  />
  <Image
    className="Taptap-2 rounded-xl transform transition-transform duration-300 hover:scale-105"
    src="/images/car-2.png"
    alt="TapTap-image"
    width={400}
    height={400}
  />
  <Image
    className="Taptap-3 rounded-xl transform transition-transform duration-300 hover:scale-105"
    src="/images/car-3.png"
    alt="TapTap-image"
    width={400}
    height={400}
  />
</div>
        </div>
      ),
    },
  ];

  return (
    <div
      className="relative w-full px-4 flex flex-col items-center justify-center" 
      style={{ background: "linear-gradient(to left, #000000, #050505)" }}
    >
      <div
        className={cn(
          "absolute inset-0",
          "bg-[length:150px_150px]",
          "bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,transparent_20%,#070809)]" />

      <div className="relative z-10 w-full max-w-6xl pt-20 pb-0"> 
        <h2 className="text-center text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 mb-12">
          Experience
        </h2>
        <Timeline data={data} />
      </div>
      
    </div>
  );
};

export default Experience;