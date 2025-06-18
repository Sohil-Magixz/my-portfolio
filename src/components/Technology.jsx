import React from "react";

function Technology() {
  const Items = [
    {
      props: "Languages Known",
      content: ["Java (Primary)", "JavaScript", "Python", "C"],
    },
    {
      props: "Web Development",
      content: ["ReactJS", "Tailwind CSS", "Vite", "Node.js", "Express.js"],
    },
    {
      props: "Database Technologies",
      content: ["MySQL", "MongoDB", "Oracle DBMS"],
    },
    {
      props: "Version Control & Tools",
      content: ["Git", "GitHub (Sohil-Magixz)", "VS Code"],
    },
    {
      props: "Learning / In Progress",
      content: ["MERN Stack", "React Router", "Authentication", "useEffect", "Callbacks"],
    },
    {
      props: "Other Projects",
      content: [
        "Portfolio Website",
        "Weather App",
        "JobSeek Platform",
        "Building Custom ROM (AOSP) for Live-in-Lab Project",
      ],
    },
  ];

  return (
    <>
      <div
        id="skills-technologies"
        className="skills_and_technology-section-3 mx-auto h-auto lg:h-[80vh] w-[90%] bg-slate-50 rounded-[15px] pb-16"
      >
        <div className="box-container min-h-[100%] w-full mx-auto mt-16 rounded-[15px] bg-[#262525] bg-cover bg-no-repeat bg-right px-6">
          <h1 className="text-center text-white pt-6 text-2xl font-bold underline underline-offset-[7px] decoration-red-500">
            Skills | Technology
          </h1>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 gap-6 p-4 min-h-[80%]">
            {Items.map((item, index) => (
              <div
                key={index}
                className="h-18 bg-white p-4 rounded-[15px] drop-shadow-2xl shadow-inner hover:scale-105 transition-all duration-200"
              >
                <h1 className="text-center text-lg font-semibold">
                  {item.props}
                </h1>
                <div className="flex flex-col justify-center">
                  {item.content.map((Content, index2) => (
                    <li key={index2} className="text-slate-800">
                      {Content}
                    </li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[1px] border border-x-slate-600 w-[93%] mx-auto sm:mt-0"></div>
    </>
  );
}

export default Technology;
