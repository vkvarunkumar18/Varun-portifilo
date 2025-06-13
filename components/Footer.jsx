"use client";
import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect"; 

const Footer = () => {
  const words = [
    {
      text: "Get",
      className: "text-white text-3xl md:text-4xl lg:text-5xl",
    },
    {
      text: "in",
      className: "text-white text-3xl md:text-4xl lg:text-5xl",
    },
    {
      text: "Touch",
      className: "text-blue-500 dark:text-blue-500 text-3xl md:text-4xl lg:text-5xl",
    },
  ];

  return (
    <footer className="relative w-full py-16 px-4 text-white overflow-hidden bg-black">
    
      <div
        className="absolute inset-0 bg-[length:150px_150px] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_20%,#070809)]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <TypewriterEffectSmooth words={words} />
        </div>

        <p className="mt-4 text-base md:text-lg text-slate-300">
          What's next? If you're looking for a developer, have a question, or just want to connect —
          feel free to reach out!
        </p>
        <p className="mt-6 text-sm text-gray-400">
          📧 Email:{" "}
          <a href="mailto:vk.varunkumar1818@gmail.com" className="underline hover:text-white">
            vk.varunkumar1818@gmail.com
          </a>{" "}
          | 📞 Phone:{" "}
          <a href="tel:+918074465912" className="underline hover:text-white">
            +91 8074465912
          </a>
        </p>

        <h3 className="mt-8 text-lg font-medium text-slate-300">
          You may also find me on these platforms!
        </h3>

        <div className="mt-4 flex justify-center items-center space-x-6"> 
          <a
            href="https://www.linkedin.com/in/varun-kumar-17499a237/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://x.com/varun2730"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-400 transition"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://github.com/vkvarunkumar18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://drive.google.com/file/d/14gHnz1tVZy_Ct0ZAAuQOP7g2hR2uemOn/view?usp=sharing" 
            download="Varun_Kumar_CV.pdf" 
            className="ml-6 px-4 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 text-sm font-medium flex items-center gap-2"
          >
            Download CV
          </a>
        </div>
        <p className="mt-10 text-xs text-gray-500">
          © 2025 All rights reserved | Designed & Developed by{" "}
          <span className="text-white font-semibold">Varun Kumar ✌🏻</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;