import React, { useState, useEffect } from "react";
import "../index.css";
import { useLanguage } from "../context/LanguageContext";
import ToggleButton from "./toggleButton";
import GeysonCV from "../assets/Geyson_Gualdron_CV.pdf";

const Dropdown = () => {
  const { Texts, toggleLanguage, language } = useLanguage();
  const [isOpen, setIsOpen] = useState("max-h-0 opacity-0 pointer-events-none");

  const toggleDropdown = () => {
    isOpen === "max-h-0 opacity-0 pointer-events-none" ? setIsOpen("max-h-48") : setIsOpen("max-h-0 opacity-0 pointer-events-none");
  };

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      if (event.target.tagName === "A" && event.target.getAttribute("href").startsWith("#")) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className=" dropdown-toggle">
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
      <div className={`dropdown-menu flex flex-col items-center  ${isOpen}`}>
          <>
              <a href="#about" className="dropdown-item w-full font-semibold border-b border-b-[#ffffff30]">About</a>
              <a href="#projects" className="dropdown-item w-full border-b border-b-[#ffffff30]">Projects</a>
              <a href={GeysonCV} download className="dropdown-item w-full border-b border-b-[#ffffff30]">Contact</a>
            <ToggleButton />
          </>
      </div>
    </div>
  );
};

export default Dropdown;
