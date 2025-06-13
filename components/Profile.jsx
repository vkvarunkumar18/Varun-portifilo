"use client";

import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaFigma } from "react-icons/fa";
import "../Styles/profileme.css";
import Image from "next/image";
import Navbar from "./Navbar";
import { Cover } from "@/components/ui/cover";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

const Profile = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="profile-container">
      <Navbar />
      <div className="mine">
        <p className="new">New</p>
        <h1 className="varun">This is Varun Kumar’s Portfolio</h1>
      </div>

      <div className="main-content">
        <div className="profiletext">
          <h1 className="max-w-7xl mx-auto text-center mt-1 relative z-20 py-[10px]">
            <span className="text-white text-[80px] font-semibold mr-2">Hii 👋</span>
            <span className="text-white text-[80px] font-semibold mr-2">This is</span>
            <br />
            <span className="text-6xl md:text-4xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white mr-2">
              <Cover>Varun Kumar</Cover>
            </span>
          </h1>

          <p className="font">
            I'm a UI/UX designer and front-end developer with 1+ years of
            experience crafting intuitive digital experiences. With expertise in
            React, JavaScript, and the MERN stack, I blend design and
            development to create user-centric products. Passionate about
            innovation, I also explore AI-driven solutions and automation.
          </p>

          <div className="location">
            <span>📍</span> Srikakulam, Andhra Pradesh, India
          </div>

          <div className="m-10 flex justify-center text-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="div"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-6 px-6 py-4"
            >
              <a
                href="https://www.linkedin.com/in/varun-kumar-17499a237/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/vkvarunkumar18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-500 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.figma.com/design/Mo8luOCpPzXbYnsM0Y6J7k/Portfolio?node-id=61-1709&t=oxeB1B5vSUWF8h9q-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-pink-500 transition"
              >
                <FaFigma />
              </a>
            </HoverBorderGradient>
          </div>
        </div>

        <div className="photo">
          <Image
            id="Varunimage"
            src="/images/varun.png"
            alt="Varun Kumar"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
