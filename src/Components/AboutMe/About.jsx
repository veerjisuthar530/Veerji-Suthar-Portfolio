// ...existing code...
import React from "react";
import { motion } from 'framer-motion';
import Aboutus from "../../assets/Hero.jpg"; // replace with your image path

export default function AboutMe() {
  return (
    <section id="about" className="w-full flex flex-col lg:flex-row items-start gap-20 px-15 py-15 lg:px-24 py-16 overflow-hidden">
      {/* LEFT SIDE IMAGE */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0 mt-20"
      >
        {/* decorative blocks */}
        <div className="absolute -left-6 top-10 w-6 h-56 bg-gray-800 rounded"></div>
        <div className="absolute -bottom-6 left-10 w-56 h-6 bg-gray-800 rounded"></div>

        <img
          src={Aboutus} /* put your image at public/images/profile.jpg */
          alt="Profile"
          className="relative w-72 h-96 object-cover rounded-xl shadow-2xl border border-gray-800"
        />
      </motion.div>

      {/* RIGHT CONTENT */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-2/3"
      >
       <h2 className="text-3xl font-bold mb-10 mt-0 md:col-span-2">
          About <span className="accent">Me</span>
        </h2>

        <h2 className="text-3xl font-bold mb-6">
          Curious about me? Here you have it:
        </h2>

        <div className="space-y-4 text-muted leading-relaxed font-[Inter] justify-start">
          <p>
            I'm a passionate{" "}
            <span className="font-semibold text-site">
              designer and full-stack developer
            </span>
            specializing in modern web technologies like React.js and Node.js. I
            love bringing ideas to life by blending clean design with solid,
            efficient code.
          </p>

          <p>
            My journey in web development began in 2015, and ever since, I’ve
            been growing, experimenting, and pushing myself to learn new tools
            and technologies. With every project, I aim to build experiences
            that feel intuitive, fast, and visually engaging.
          </p>

          <p>
            I enjoy working on products from start to finish — from
            brainstorming and planning, all the way to development, refinement,
            and deployment. Crafting meaningful digital experiences is what
            keeps me excited.
          </p>
          
        </div>
      </motion.div>
    </section>
  );
}
// ...existing code...
