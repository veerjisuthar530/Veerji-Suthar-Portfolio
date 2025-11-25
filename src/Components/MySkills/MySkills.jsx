export default function Skills() {
  const skills = [
    {
      name: "HTML - 5",
      level: 90,
      icon: "src/assets/html.jpg",
    },
    {
      name: "CSS - 3",
      level: 80,
      icon: "src/assets/css.png",
    },
    {
      name: "Tailwind CSS",
      level: 80,
      icon: "src/assets/twailand.jpg",
    },
    {
      name: "Java Script",
      level: 60,
      icon: "src/assets/javascript.png",
    },
    {
      name: "React",
      level: 60,
      icon: "src/assets/React.jpg",
    },
    {
      name: "Figma",
      level: 90,
      icon: "src/assets/figma.png",
    },
    {
      name: "Next.js",
      level: 65,
      icon: "src/assets/next.png",
    },
    {
      name: "Node.js",
      level: 70,
      icon: "src/assets/Node.png",
    },
  ];

  return (
    <div id="Myskills" className="py-16 bg-neutral-900 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-10">
        My <span className="text-teal-400">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] max-w-6xl">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-5">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-14 h-14 object-contain rounded-full"
            />

            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-gray-200 font-semibold">{skill.name}</span>
                <span className="text-gray-300 text-sm">{skill.level}%</span>
              </div>

              <div className="w-full h-3 bg-gray-600 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-400 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
