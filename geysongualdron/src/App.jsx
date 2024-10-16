import { useEffect, useState } from "react";
import "./index.css";
import Dropdown from "./componentes/dropdown";
import Header from "./componentes/header";
import Main from "./componentes/main";
import {useLanguage} from "./context/LanguageContext";

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

  return (
    <>
        <div className="w-screen h-screen bg-black">
          {isInit ? (
            <div className={`w-screen h-screen flex items-center justify-center transition-all duration-[1000ms] bg-black ${initAnimation}`}>
              <span className={`text-2xl m-1 transition-all duration-700 ${initAnimation}`}>Geyson Gualdron </span>
              <span className={`opacity-50 transition-all duration-700 ${initAnimation} delay-200`}> Portafolio</span>
            </div>
          ) : (
            <div className={`w-screen h-screen transition-all duration-700 flex justify-center opacity-0 ${initAnimation}`}>
              <Header />
              <Main />
            </div>
          )}
        </div>
    </>
  );
}

export default App;
1;
