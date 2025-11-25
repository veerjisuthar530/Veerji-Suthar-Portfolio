import React from "react";
export default function Project() {

  const portfolioItems = [
    {
      title: "Web Design",
      image: "src/assets/webdesign.jpg",  // replace with your image path
      highlight: true,
    },
    {
      image: "src/assets/web.jpg",
    },
    {
      image: "src/assets/Website-Landing-Page-Design-Home-Page-scaled.jpg",
    },
    {
      image: "src/assets/website.jpg",
    },
    {
      image: "src/assets/photo-studio-photo-portfolio-creative-website-template.jpg",
    },
    {
      image: "src/assets/wedes.png",
    },
  ];

  return (
    <div className="py-16 bg-neutral-900 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-10">
        My <span className="text-teal-400">Projects</span>
      </h2>

      <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[90%] max-w-6xl">
        {portfolioItems.map((item, i) => (
          <div
            key={i}
            className={`relative rounded-xl overflow-hidden shadow-lg group 
              ${item.highlight ? "border-2 border-teal-400" : ""}`}
          >
            {/* Image */}
            <img
              src={item.image}
              alt="portfolio"
              className="w-full h-52 object-cover group-hover:scale-110 duration-300"
            />

            {/* Hover Overlay */}
            {item.title && (
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 flex flex-col justify-center items-center text-white opacity-100">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <svg
                  className="w-8 h-8 text-teal-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.9 3H17v4.1l-2.2-2.2-6.6 6.6-1.4-1.4 6.6-6.6L12.9 3zM3 5h6v2H5v8h8v-4h2v6H3V5z" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
