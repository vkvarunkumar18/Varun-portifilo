"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "../components/ui/glowing-effect";
import { CardContainer, CardBody, CardItem } from "../components/ui/3d-card";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Works = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-l from-black to-[#050505] relative py-20 px-4">
      <div
        className={cn(
          "absolute inset-0",
          "bg-[length:150px_150px]",
          "bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_at_center,transparent_20%,#070809)] z-0" />


      <div className="relative z-10 mt-20 mb-30 text-center">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          My Works
        </h2>
        <p className="text-lg text-neutral-400 mt-10">
          Here’s a showcase of my latest projects built with modern web technologies
        </p>
      </div>

     <div className="relative z-10 max-w-5xl mx-auto mb-24">
        <div className="mb-20">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 mb-10">
                AI Mock Interviewer
            </h2>
           <div className="border border-[#292929] rounded-lg">
              <StickyScroll content={aiMockupProject} />
            </div>
        </div>

        <div className="mb-20">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 mb-10 mt-24">
                Fitness Tracker Website
            </h2>
             <div className="border border-[#292929] rounded-lg">
              <StickyScroll content={fitnessTrackerProject} />
            </div>
        </div>

        <div className="mb-20">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 mb-10 mt-24">
                E-Commerce Website
            </h2>
           <div className="border border-[#292929] rounded-lg">
              <StickyScroll content={ecommerceProject} />
            </div>
        </div>
    </div>
      <div className="relative z-10 mb-12 text-center">
        <p className="mt-10 text-3xl text-White-400">My Design Work</p>
      </div>

  
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Box work={works[0]} className="col-span-1 md:col-span-2 lg:col-span-2" />
        <Box work={works[1]} className="col-span-1 md:col-span-1 lg:col-span-1" />
        <Box work={works[2]} className="col-span-1 md:col-span-1 lg:col-span-1" />
        <Box work={works[3]} className="col-span-1 md:col-span-2 lg:col-span-2" />
      </div>
    </div>
  );
};

const Box = ({ work, className }) => (
  <CardContainer className={cn(className)}>
    <CardBody className="relative group/card h-[300px] rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-md dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] transition-all duration-500">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <CardItem translateZ={80} className="relative h-full w-full overflow-hidden rounded-xl">
        <img
          src={work.image}
          alt={work.title}
          className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
        />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-white/20 px-4 py-3 backdrop-blur-md shadow-lg">
          <h3 className="text-black text-sm font-semibold dark:text-white">{work.title}</h3>
          <a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-black/70 px-3 py-1 text-xs font-medium text-white hover:bg-black transition"
          >
            View
          </a>
        </div>
      </CardItem>
    </CardBody>
  </CardContainer>
);

const works = [
  {
    image: "/images/TravelApp.png",
    title: "Travel App Design",
    link: "https://www.figma.com/design/Mo8luOCpPzXbYnsM0Y6J7k/Portfolio",
  },
  {
    image: "/images/Studio99.png",
    title: "Studio99 Design",
    link: "https://www.figma.com/design/Mo8luOCpPzXbYnsM0Y6J7k/Portfolio",
  },
  {
    image: "/images/RadiantSchool.png",
    title: "RadiantSchool",
    link: "https://www.figma.com/design/Mo8luOCpPzXbYnsM0Y6J7k/Portfolio",
  },
  {
    image: "/images/GoKhush2.png",
    title: "GoKhush App Design",
    link: "https://www.figma.com/design/Mo8luOCpPzXbYnsM0Y6J7k/Portfolio",
  },
];
const aiMockupProject = [
  {
    title: "AI-Powered Interviewer",
    content: (
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 pl-8 pt-5 pr-8">
        <CardSpotlight className="relative max-w-xl p-6 rounded-lg bg-gray-900/50">
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-2xl font-bold text-white">AI-Powered Interviewer</h2>
            <p className="text-base lg:text-lg text-slate-300 mt-6 leading-relaxed">
              This intelligent interviewer simulates a real-world interview experience by asking tailored
              questions based on the user's background. The system collects basic information such as name,
              role, and preferred domain, then dynamically adjusts the flow of questions to match the user's
              skill level, creating a realistic and personalized mock interview session.
            </p>
          </div>
        </CardSpotlight>
        <img
          src="/images/Aimocker-1.png"
          alt="Interview Mockup"
          className="w-[400px] h-auto rounded-xl shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "Real-Time Scoring & Feedback",
    content: (
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 pl-8 pt-8 pr-8">
        <CardSpotlight className="relative max-w-xl p-6 rounded-lg bg-gray-900/50">
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-2xl font-bold text-white">Real-Time Scoring & Feedback</h2>
            <p className="text-base lg:text-lg text-slate-300 mt-6 leading-relaxed">
              After each response, the app uses Google's Gemini API to analyze the quality of your answer and
              provide a realistic score based on clarity, relevance, and completeness. This scoring system helps
              users understand their strengths and weaknesses instantly and prepares them for real interviews more
              effectively.
            </p>
          </div>
        </CardSpotlight>
        <img
          src="/images/Aimocker-2.png"
          alt="Scoring Feedback"
          className="w-[400px] h-auto rounded-xl shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "Answer Guidance & Suggestions",
    content: (
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 pl-8 pt-8 pr-8 pb-10">
        <div className="flex flex-col">
          <CardSpotlight className="relative max-w-xl p-6 rounded-lg bg-gray-900/50">
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-2xl font-bold text-white">Answer Guidance & Suggestions</h2>
              <p className="text-base lg:text-lg text-slate-300 mt-6 leading-relaxed">
                Not only does the platform evaluate your answers, but it also provides optimized sample responses to
                help you improve. It breaks down what a strong answer looks like and gives actionable tips. Built with
                Next.js, React.js, and Tailwind CSS, this project delivers a sleek UI with fast performance.
              </p>
            </div>
          </CardSpotlight>
          <a
            href="https://github.com/vkvarunkumar18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-4 py-2 text-sm font-medium text-black bg-white hover:bg-gray-200 rounded-md shadow self-start"
          >
            View Project
          </a>
        </div>
        <img
          src="/images/Aimocker-3.png"
          alt="Answer Suggestions"
          className="w-[400px] h-auto rounded-xl shadow-lg"
        />
      </div>
    ),
  },
];

const fitnessTrackerProject = [
  {
    title: "Personalized Fitness Dashboard",
    content: (
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 pl-8 pt-5 pr-8">
        <CardSpotlight className="relative max-w-xl p-6 rounded-lg bg-gray-900/50">
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-2xl font-bold text-white">Personalized Fitness Dashboard</h2>
            <p className="text-base lg:text-lg text-slate-300 mt-6 leading-relaxed">
              The Fitness Tracker App provides users with a personalized dashboard displaying their daily goals, calories burned,
              steps taken, and active minutes. It allows users to monitor key metrics and visualize progress with engaging UI
              components and charts.
            </p>
          </div>
        </CardSpotlight>
        <img
          src="/images/Fitness-1.png"
          alt="Fitness Dashboard"
          className="w-[400px] h-auto rounded-xl shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "Workout Tracking & Analytics",
    content: (
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 pl-8 pt-8 pr-8">
        <CardSpotlight className="relative max-w-xl p-6 rounded-lg bg-gray-900/50">
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-2xl font-bold text-white">Workout Tracking & Analytics</h2>
            <p className="text-base lg:text-lg text-slate-300 mt-6 leading-relaxed">
              Track your workouts in real-time with powerful analytics and dynamic graphs that reflect calories burned, reps completed,
              and time spent. The app includes features for logging custom workouts, monitoring intensity levels, and visualizing trends.
            </p>
          </div>
        </CardSpotlight>
        <img
        src="/images/Fitness-2.png"
          alt="Workout Analytics"
          className="w-[400px] h-auto rounded-xl shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "Smart Reminders & Scheduling",
    content: (
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 pl-8 pt-8 pr-8 pb-10">
        <div className="flex flex-col">
          <CardSpotlight className="relative max-w-xl p-6 rounded-lg bg-gray-900/50">
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-2xl font-bold text-white">Smart Reminders & Scheduling</h2>
              <p className="text-base lg:text-lg text-slate-300 mt-6 leading-relaxed">
                Users can schedule workouts and meal reminders to stay consistent with their fitness goals. The smart notification
                system adapts to your routine and ensures you never miss a session. Built using React, Tailwind CSS, and Framer Motion.
              </p>
            </div>
          </CardSpotlight>
          <a
            href="https://github.com/vkvarunkumar18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-4 py-2 text-sm font-medium text-black bg-white hover:bg-gray-200 rounded-md shadow self-start"
          >
            View Project
          </a>
        </div>
        <img
    src="/images/Fitness-3.png"
          alt="Reminders and Schedule"
          className="w-[400px] h-auto rounded-xl shadow-lg"
        />
      </div>
    ),
  },
];


const ecommerceProject = [
  {
    title: "Immersive Shopping Experience",
    content: (
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 pl-8 pt-8 pr-8">
        <CardSpotlight className="relative max-w-xl p-6 rounded-lg bg-gray-900/50">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white">Immersive Shopping Experience</h2>
            <p className="text-base lg:text-lg text-slate-300 mt-6 leading-relaxed">
              The E-Commerce platform offers a clean and intuitive interface designed for seamless Browse.
              Users can easily discover products, apply filters, and navigate categories with smooth animations and responsive design.
            </p>
          </div>
        </CardSpotlight>
        <img
          src="/images/Ecommerce-1.png"
          alt="Product Showcase"
          className="w-[400px] h-auto rounded-xl shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "Optimized Checkout Process",
    content: (
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 pl-8 pt-8 pr-8">
        <CardSpotlight className="relative max-w-xl p-6 rounded-lg bg-gray-900/50">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white">Optimized Checkout Process</h2>
            <p className="text-base lg:text-lg text-slate-300 mt-6 leading-relaxed">
              Featuring a lightning-fast, secure, and mobile-optimized checkout, this platform minimizes cart abandonment.
              It supports multiple payment gateways, real-time validation, and a cart summary with price breakdowns.
            </p>
          </div>
        </CardSpotlight>
        <img
            src="/images/Ecommerce-2.png"
          alt="Checkout Flow"
          className="w-[400px] h-auto rounded-xl shadow-lg"
        />
      </div>
    ),
  },
  {
    title: "Admin Panel & Inventory Control",
    content: (
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 pl-8 pt-8 pr-8 pb-10">
        <div className="flex flex-col">
          <CardSpotlight className="relative max-w-xl p-6 rounded-lg bg-gray-900/50">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-white">Admin Panel & Inventory Control</h2>
              <p className="text-base lg:text-lg text-slate-300 mt-6 leading-relaxed">
                Admins can manage inventory, orders, user activity, and promotions via a robust dashboard.
                Built with Next.js, MongoDB, and Tailwind CSS, the backend architecture ensures scalability
                and smooth control of business operations.
              </p>
            </div>
          </CardSpotlight>
          <a
            href="https://github.com/vkvarunkumar18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-4 py-2 text-sm font-medium text-black bg-white hover:bg-gray-200 rounded-md shadow self-start"
          >
            View Project
          </a>
        </div>
        <img
            src="/images/Ecommerce-3.png"
          alt="Admin Panel"
          className="w-[400px] h-auto rounded-xl shadow-lg"
        />
      </div>
    ),
  },
];


export default Works;