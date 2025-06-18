import React, { useState } from "react";

function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { link: "home", prop: "Home" },
    { link: "aboutme", prop: "About Me" },
    { link: "projects", prop: "Projects/Work" },
    { link: "skills-technologies", prop: "Skills/Technologies" },
    { link: "contact", prop: "Contact" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="w-full flex justify-end lg:hidden">
        <button onClick={toggleMenu} className="p-2">
          <img
            src="https://img.icons8.com/?size=100&id=36389&format=png&color=1A1A1A"
            className="h-8 w-8 cursor-pointer"
            alt="Menu"
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <nav className="absolute right-4 mt-2 bg-gray-900 rounded-md shadow-lg z-50">
          <ul className="flex flex-col items-start text-white px-4 py-2 space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-base">
                <a
                  href={`#${item.link}`}
                  onClick={toggleMenu}
                  className="hover:text-blue-300 transition-colors duration-300"
                >
                  {item.prop}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default Hamburger;
