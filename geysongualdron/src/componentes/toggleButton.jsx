import { useLanguage } from "../context/LanguageContext";
import Flag from 'react-world-flags';


function ToggleButton({ children, onClick, active }) {
  const { toggleLanguage, language } = useLanguage();
  return (
    <button onClick={toggleLanguage} className="dropdown-item flex items-center">
      <Flag code="US" className={`size-5 mx-1 transition-all ${language == "es" ? "opacity-40" : ""}`} /> /{" "}
      <Flag code="ES" className={`size-5 mx-1 transition-all ${language == "en" ? "opacity-40" : ""}`} />
    </button>
  );
}

export default ToggleButton;
