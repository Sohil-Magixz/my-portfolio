import React from "react";

function Navbar() {
  const items = [
    { link: "home", prop: "Home" },
    { link: "about", prop: "About Me" },
    { link: "projects", prop: "Projects | Work"},
    { link: "skills-technologies", prop: "Skills | Technologies"},
    { link: "contact", prop: "Contact"},
  ];

  return (
    <>
    <div className=" h-[80px]  w-[100%] hidden sm:inlineflex lg:inline-flex flex-wrap justify-center items-center  overflow-x-auto transition-">
      <ul className="sm:inline-flex flex-wrap justify-center items-center h-full w-[200%] hidden overflow-auto" >
        {items.map((item, index) => {
          const isFirst = 0;
          const isLast = items.length - 1;

          let Str =
          "px-5 py-4 bg-slate-50 border[1px] text-center text-black decoration-red-500 lg:text-[16px] md:text-[60%]  hover:underline hover:underline-offset-[5px] hover:text-[115%] transition-all duration-200";
          if (index === isFirst) {
            Str += " rounded-l-[8px]";
          }

          if (index === isLast) {
            Str += " rounded-r-[8px]";
          }
          return (
            <li key={index}>
              <a href={`#${item.link}`} className={Str}>
                {item.prop}
              </a>
            </li>
          );
        })}
      </ul>
    </div>

    
    </>
  );
}

export default Navbar;
