// app/page.js
"use client";

import React from 'react';
import Profile from '@/components/profile';
import Aboutme from '@/components/Aboutme';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Works from '@/components/Works';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'; 

export default function Home() {
  return (
    <div>
      <Navbar />

      <section id="profile-section"> 
        <Profile />
      </section>

      <section id="about-section"> 
        <Aboutme />
      </section>

      <section id="skills-section"> 
        <Skills />
      </section>

      <section id="experience-section"> 
        <Experience/>
      </section>

      <section id="work-section"> 
        <Works/>
      </section>

      <section id="contact-section"> 
        <Footer/>
      </section>
    </div>
  );
}