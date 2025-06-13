"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import "../Styles/skills.css";
import { Tabs } from "../components/ui/tabs";

const frontendSkills = [
  { name: "React.js", image: "/images/skills/react.png" },
  { name: "Next.js", image: "/images/skills/next.png" },
  { name: "JavaScript", image: "/images/skills/javascript.png" },
  { name: "Tailwind CSS", image: "/images/skills/tailwand.png" },
];

const backendSkills = [
  { name: "Node.js", image: "/images/skills/node.png" },
  { name: "Express.js", image: "/images/skills/express.png" },
];

const designSkills = [
  { name: "Figma", image: "/images/skills/figma.png" },
  { name: "Git", image: "/images/skills/git.png" },
  { name: "Adobe PhotoShop", image: "/images/skills/adobe.png" },
  { name: "Adobe XD", image: "/images/skills/adobeXD.png" },
];

const SkillsTabContent = ({ skills }) => (
  <div className="skills-grid">
    {skills.map((skill, index) => (
      <div key={index} className="skill-card">
        <Image
          src={skill.image}
          alt={skill.name}
          width={64}
          height={64}
          className="skill-icon"
        />
        <p className="skill-label">{skill.name}</p>
      </div>
    ))}
  </div>
);

const Skills = () => {
  const tabs = [
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <div className="tab-skill-content">
          <SkillsTabContent skills={frontendSkills} />
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div className="tab-skill-content">
          <SkillsTabContent skills={backendSkills} />
        </div>
      ),
    },
    {
      title: "Design & Tools",
      value: "design",
      content: (
        <div className="tab-skill-content">
          <SkillsTabContent skills={designSkills} />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <div
        className="relative flex w-full flex-col items-center justify-center min-h-screen" // <-- MODIFIED LINE (Removed py-20)
        style={{ background: "linear-gradient(to left, #000000, #050505)" }}
      >
        <div
          className={cn(
            "absolute inset-0",
            "bg-[length:150px_150px]",
            "bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_20%,#070809)]" />
        <div className="pt-0">
            <h1 className="skill">Skills</h1>
            <p className="skillname">The skills, tools, and technologies I am really good at</p>
        </div>
        <div className="skillsection relative z-10 w-full max-w-6xl pt-20 pb-0"> 
      
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default Skills;