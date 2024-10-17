import { useEffect, useState } from "react";
import "./index.css";
import Dropdown from "./componentes/dropdown";
import Header from "./componentes/header";
import Main from "./componentes/main";
import {useLanguage} from "./context/LanguageContext";
import Footer from "./componentes/footer";

function App() {
  const [isInit, setIsInit] = useState(true);
  const [initAnimation, setInitAnimation] = useState("");
  const { language, toggleLanguage, Texts } = useLanguage();
  console.log(useLanguage());

  useEffect(() => {
    setTimeout(() => {
      setInitAnimation("opacity-0");
      setTimeout(() => {
        setIsInit(false);
        setInitAnimation("opacity-100");
      }, 1000);
    }, 700);
  }, []);

  useEffect(() => {
    if (!isInit) {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isInit]);

  return (
    <>
        <div className={` bg-black `}>
          {isInit && (
            <div className="size-full fixed">
            <div className={`w-screen h-screen  flex items-center justify-center transition-all duration-[1000ms] bg-black ${initAnimation}`}>
              <span className={`text-2xl m-1 transition-all duration-700 ${initAnimation}`}>Geyson Gualdron </span>
              <span className={`opacity-50 transition-all duration-700 ${initAnimation} delay-200`}> Portafolio</span>
            </div>
            </div>
          ) }

            <div className={`size-full transition-all duration-700  opacity-0 ${initAnimation}`}>
              <Header />
              <Main />
              <Footer/>
            </div>
          
        </div>
    </>
  );
}

export default App;

