// ...existing code...
import React from "react";
import "./Hero.css";

import SocialLinks from "./SocialLinks.jsx";

export default function Hero() {
  return (
    <section id="home" className="relative bg-neutral-900 text-gray-100 py-10">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center"
      >
        <img
          src="src/assets/Hero.jpg" // put file at public/images/hero-bg.png
          alt=""
          className="w-full h-full object-cover opacity-10 mix-blend-screen"
        />
      </div>
      <div className="container mx-auto px-15 md:flex md:items-center md:justify-between md:flex-row-reverse gap-8">
        {/* Profile / avatar (right on md+) */}
        <div className="flex-none w-full md:w-1/3 flex justify-center md:justify-end hidden md:flex">
          <div className="relative">
            <div className="w-70 h-70 rounded-full bg-gradient-to-tr from-violet-500 via-pink-500 to-indigo-500 p-1">
              <img
                src="src/assets/WhatsApp Image 2025-11-22 at 22.13.28_085d5587.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full bg-neutral-800"
              />
            </div>
            <div className="absolute inset-0 rounded-full pointer-events-none blur-sm opacity-40"></div>
          </div>
        </div>

        {/* Text content (left on md+) */}
        <div className="text-center md:text-left max-w-3xl md:w-2/3">
          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold tracking-tight">
            Hi, I'm Veerji Suthar.
          </h1>
          <p className="mt-2 text-xl text-gray-300 font-medium">
            Senior Frontend Developer & Software Engineering
          </p>

          <p className="mt-6 text-gray-400 max-w-2xl  text-left text-sm md:text-base">
            I'm Veerji Suthar, Frontend Developer with a strong foundation in
            HTML, CSS, JavaScript, React.js, and ASP.NET Core. Skilled in
            building user-friendly and responsive web applications and
            developing dynamic UI components. Completed a 2-month React.js
            internship and currently pursuing Software Engineering at SMIU,
            eager to contribute to impactful web development projects in
            collaborative environments.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 justify-center md:justify-start">
            <a
              href="src/assets/Veerji Suthar CV.pdf"
              download
              className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-md bg-teal-500 text-neutral-900 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
            >
              Download CV
            </a>
          </div>
          <div class="mt-8">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
// ...existing code...
