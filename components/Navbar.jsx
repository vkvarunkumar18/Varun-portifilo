"use client";

import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  IconUser,
  IconBriefcase,
  IconLayout,
  IconMessage,
} from "@tabler/icons-react";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "#profile-section", 
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "#about-section", 
      icon: <IconBriefcase className="h-4 w-4 text-white" />,

    },
    {
      name: "Experience",
      link: "#experience-section", 
      icon: <IconLayout className="h-4 w-4 text-white" />,
        
    },
    {
      name: "Work",
      link: "#work-section", 
      icon: <IconMessage className="h-4 w-4 text-white" />,
    },
  ];

  return (
    <div className="navbar-container-custom">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navbar;