// ...existing code...
import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="w-full flex flex-col lg:flex-row items-start gap-20 px-15 py-15 lg:px-24 py-16 bg-neutral-900 text-gray-100">
      {/* LEFT SIDE IMAGE */}
      <div className="relative w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0 mt-20">
        {/* decorative blocks */}
        <div className="absolute -left-6 top-10 w-6 h-56 bg-gray-800 rounded"></div>
        <div className="absolute -bottom-6 left-10 w-56 h-6 bg-gray-800 rounded"></div>

        <img
          src="src/assets/WhatsApp Image 2025-11-22 at 22.13.28_085d5587.jpg" /* put your image at public/images/profile.jpg */
          alt="Profile"
          className="relative w-72 h-96 object-cover rounded-xl shadow-2xl border border-gray-800"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full lg:w-2/3">
       <h2 className="text-3xl font-bold mb-10 mt-0 md:col-span-2">
          About <span className="text-teal-400">Me</span>
        </h2>

        <h2 className="text-3xl font-bold text-gray-50 mb-6">
          Curious about me? Here you have it:
        </h2>

        <div className="space-y-4 text-gray-300 leading-relaxed font-[Inter] justify-start">
          <p>
            I'm a passionate{" "}
            <span className="font-semibold text-white">
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
      </div>
    </section>
  );
}
// ...existing code...
