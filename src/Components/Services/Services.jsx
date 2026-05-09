import { GlobeAltIcon, CodeBracketIcon, PaintBrushIcon } from "@heroicons/react/24/solid";
import React from "react";
import { motion } from 'framer-motion';

export default function ServicesSection() {
  const cards = [
    {
      title: "Web Design",
      icon: <GlobeAltIcon className="w-14 h-14 text-cyan-400" />,
      description:
        "I am professional Web Developer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction",
      buttonColor:
        "bg-white text-black hover:bg-cyan-400 hover:text-black", // BUTTON HOVER COLOR
    },
    {
      title: "Web Development",
      icon: <CodeBracketIcon className="w-14 h-14 text-cyan-400" />,
      description:
        "I am professional Web Developer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction",
      buttonColor:
        "bg-white text-black hover:bg-cyan-400 hover:text-black", // BUTTON HOVER COLOR
      
    },
    {
      title: "Graphic Design",
      icon: <PaintBrushIcon className="w-14 h-14 text-cyan-400" />,
      description:
        "I am professional Web designer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction",
      buttonColor:
        "bg-white text-black hover:bg-cyan-400 hover:text-black", // BUTTON HOVER COLOR
    },
  ];

  return (
    <div id="services" className="min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">

  {/* Heading */}
  <motion.h2 
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold mb-10 text-center"
  >
    My <span className="accent">Services</span>
  </motion.h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl">
    {cards.map((card, i) => (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
        key={i}
        className={`
          site-panel text-site rounded-xl p-8 shadow-lg 
          flex flex-col items-center text-center border border-transparent
          transition-all duration-300
          hover:border-accent hover:shadow-xl hover:-translate-y-2
          ${card.border || ""}
        `}
      >
        {card.icon}

        <h3 className="text-xl font-semibold mt-4">{card.title}</h3>

        <p className="text-muted mt-4 leading-relaxed text-sm">
          {card.description}
        </p>

        <button
          className={`
            mt-6 px-8 py-2 rounded-full font-semibold transition-all duration-300
            hover:scale-105 hover:shadow-lg btn-outline hover:btn-accent
          `}
        >
          Hire Me
        </button>
      </motion.div>
    ))}
  </div>
</div>

  );
}
