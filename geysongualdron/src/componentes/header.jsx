import Dropdown from "./dropdown";
import { useLanguage } from "../context/LanguageContext";
import ToggleButton from "./toggleButton";
import { useEffect } from "react";
import GeysonCV from "../assets/Geyson_Gualdron_CV.pdf";

function Header() {

  const { Texts, toggleLanguage, language } = useLanguage();

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
    <header className="fixed z-[1] bg-[#050505] px-6 w-full">
      <div className="flex flex-grow items-center h-16 justify-between">
        <div className="flex">
          <a href="/" className="text-2xl m-1 ">Geyson Gualdron</a>
          <span className="opacity-50">{Texts.portfolio} </span>
        </div>
        <div className=" [display:none] sm:flex items-center">
          <a href="#about" className="mx-4 transition-all hover:opacity-60">
            {Texts.about}
          </a>
          |
          <a href="#projects" className="mx-4 transition-all hover:opacity-60">
            {Texts.projects}
          </a>
          |
          <a href={GeysonCV} download className="mx-4 transition-all hover:opacity-60">
            {Texts.contact}
          </a>
          <ToggleButton />
          
        </div>
        <div className="sm:[display:none]">
          <Dropdown />
        </div>
      </div>
    </header>
  );
}

export default Header;
