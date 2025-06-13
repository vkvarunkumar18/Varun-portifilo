"use client";
import React from "react";
import { Spotlight } from "../components/ui/spotlight";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import Image from "next/image";
import "../Styles/About.css";

const aboutText = `I'm a passionate, self-proclaimed designer who specializes in full-stack development (React.js & Node.js). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel-perfect design, and writing clear, readable, highly performant code matter to me.
My journey as a web developer began quite recently, back in 2023, and it's already been a period of constant growth and evolution. I've been really eager to tackle new challenges and learn the latest technologies.
I'm a strong progressive thinker and really enjoy seeing projects through from start to finish, from the initial idea to the final development.
One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉`;

const About = () => {
  return (
    <div className="relative about-page-wrapper overflow-hidden bg-black/[0.96] rounded-md">
      <div
        className="pointer-events-none absolute inset-0 [background-size:150px_150px] select-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #171717 1px, transparent 1px), linear-gradient(to bottom, #171717 1px, transparent 1px)",
        }}
      />

      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
            About Me
          </h1>
          <p className="mt-4 text-lg text-neutral-300 font-normal">
            Where Design Meets Code – And Curiosity Drives It All
          </p>
        </div>

        <div className="about-section flex flex-col md:flex-row items-start gap-8 mt-12">
          <div className="myphoto">
            <Image
              className="kumarImage rounded-xl"
              src="/images/kumar.jpg"
              alt="VarunKumar"
              width={400}
              height={400}
            />
          </div>

          <div className="about-text text-white">
            <h2 className="heading text-white mb-4 text-2xl font-semibold">Curious about me? Here you have it</h2>
            <TextGenerateEffect words={aboutText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
