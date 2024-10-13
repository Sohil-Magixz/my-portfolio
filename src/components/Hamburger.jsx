import React from "react";

function Hamburger() {
  const items = [
    { link: "home", prop: "Home" },
    { link: "aboutme", prop: "About Me" },
    { link: "projects", prop: "Projects/Work" },
    { link: "skills-technologies", prop: "Skills/Technologies" },
    { link: "contact", prop: "Contact" },
  ];

  return (
    <>
      <div className="w-[50%] flex flex-col justify-center items-end lg:hidden">
        <input type="checkbox" id="menu-toggle" className="hidden" />
        <label htmlFor="menu-toggle">
          <img
            src="https://img.icons8.com/?size=100&id=36389&format=png&color=1A1A1A"
            className="lg:hidden h-[30px] cursor-pointer"
            alt="Menu"
          />
        </label>
      </div>

      {/* Navigation Menu */}
      <nav className="hamburger menu bg-blue-300 lg:hidden hidden">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="text-white bg-red-500 flex flex-col justify-center items-start">
              <a href={`#${item.link}`}>{item.prop}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* CSS to toggle menu visibility */}
      <style jsx>{`
        #menu-toggle {
          display: none; /* Hide the checkbox */
        }

        #menu-toggle:checked + nav {
          display: block; /* Show menu when checkbox is checked */
        }

        nav {
          display: none; /* Hide menu by default */
        }
      `}</style>
    </>
  );
}

export default Hamburger;
