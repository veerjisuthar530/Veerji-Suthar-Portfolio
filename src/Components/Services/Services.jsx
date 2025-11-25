import { GlobeAltIcon, CodeBracketIcon, PaintBrushIcon } from "@heroicons/react/24/solid";
import React from "react";

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
    <div id="services" className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center px-6 py-16">

  {/* Heading */}
  <h2 className="text-3xl font-bold mb-10 text-center text-white">
    My <span className="text-teal-400">Services</span>
  </h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl">
    {cards.map((card, i) => (
      <div
        key={i}
        className={`
          bg-[#2f3a48] text-white rounded-xl p-8 shadow-lg 
          flex flex-col items-center text-center border border-transparent
          transition-all duration-300
          hover:bg-[#3b4656] hover:border-cyan-400 hover:shadow-xl hover:scale-[1.03]
          ${card.border || ""}
        `}
      >
        {card.icon}

        <h3 className="text-xl font-semibold mt-4">{card.title}</h3>

        <p className="text-gray-300 mt-4 leading-relaxed text-sm">
          {card.description}
        </p>

        <button
          className={`
            mt-6 px-8 py-2 rounded-full font-semibold transition-all duration-300
            hover:scale-105 hover:shadow-lg
            ${card.buttonColor}
          `}
        >
          Hire Me
        </button>
      </div>
    ))}
  </div>
</div>

  );
}
