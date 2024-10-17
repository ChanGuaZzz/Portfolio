import React, { useState } from "react";
import "../index.css";
import { useLanguage } from "../context/LanguageContext";
import ToggleButton from "./toggleButton";

const Dropdown = () => {
  const { Texts, toggleLanguage, language } = useLanguage();
  const [isOpen, setIsOpen] = useState("max-h-0 opacity-0");

  const toggleDropdown = () => {
    isOpen === "max-h-0 opacity-0" ? setIsOpen("max-h-48") : setIsOpen("max-h-0 opacity-0");
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="h- dropdown-toggle">
        <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="fill-current text-white">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
            />
          </g>
        </svg>
      </button>
      <ul className={`dropdown-menu flex flex-col items-center  ${isOpen}`}>
        {isOpen === "max-h-48" ? (
          <>
            <a href="/">
              <li className="dropdown-item w-full font-semibold border-b border-b-[#ffffff30]">About</li>
            </a>
            <a href="#projects">
              <li className="dropdown-item w-full border-b border-b-[#ffffff30]">Projects</li>
            </a>
            <a href="#contact">
              <li className="dropdown-item w-full border-b border-b-[#ffffff30]">Contact</li>
            </a>
            <ToggleButton />
          </>
        ) : (
          <>
            <a>
              <li className="dropdown-item pointer-events-none font-semibold border-b border-b-[#ffffff30]">About</li>
            </a>
            <a>
              <li className="dropdown-item pointer-events-none border-b border-b-[#ffffff30]">Projects</li>
            </a>
            <a>
              <li className="dropdown-item pointer-events-noneborder-b border-b-[#ffffff30]">Contact</li>
            </a>
            <ToggleButton />
          </>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
