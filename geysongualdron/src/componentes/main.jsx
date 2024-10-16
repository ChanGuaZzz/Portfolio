import { useEffect, useState } from "react";
import GeysonPicture from "../assets/img/geysonPicture.jpg";
import { useLanguage } from "../context/LanguageContext";
import "animate.css";

function Main() {
  const { Texts } = useLanguage();
  const [transitionsection, setTransitionsection] = useState("");
  const [transitionsectionreverse, setTransitionsectionreverse] = useState("");

  useEffect(() => {
    setTransitionsection("animate__fadeInRight");
    setTransitionsectionreverse("animate__fadeInLeft");
  }, []);

  return (
    <>
      <main className="h-screen w-screen z-[0] pt-20 flex items-center flex-col ">
        <img className="picture border rounded-full size-[300px] m-3" src={GeysonPicture} alt="no there photo" />
        <span className="text-center font-semibold text-[#e4311e] text-sm w-[60%]">{Texts.webdeveloper}</span>
        <span className="text-center  text-shadow-blue text-[#aaaca2] text-sm w-[60%]">- Front-End</span>
        <span className="text-center  text-shadow-red text-[#aaaca2] text-sm  w-[60%]">- Back-End</span>
        <div
          className={`min-w-[80%] flex flex-col justify-center items-center sections mx-10 my-5 rounded-2xl bg-white bg-opacity-10 animate__animated transition-all ${transitionsection}`}
        >
          <div className="flex justify-center w-[70%]">
            <p className=" sm:w-[300px] text-center">
              {Texts.descriptionOne}
              <span className="text-indigo-500">{Texts.programming}</span>
              {Texts.descriptionTwo}
            </p>
          </div>
        </div>
        <div
          className={`min-w-[80%] flex flex-col justify-center items-center sections mx-10 my-5 rounded-2xl bg-white bg-opacity-10 animate__animated transition-all ${transitionsectionreverse}`}
        >
          <div className="flex flex-col items-center w-[70%] ">
            <div className="bg-[#1e63e4] iconos m-2 size-20 flex items-center justify-center rounded-full">
              <ion-icon name="code-slash-outline" size="large"></ion-icon>
            </div>
            <h1 className="font-bold m-2 animate__pulse animate__animated animate__slow animate__infinite	infinite ">{Texts.frontDev}</h1>
            <p className="sm:w-[300px] text-center text-sm">{Texts.frontText} </p>
            <div className=" mt-8 text-center">
              <h2 className="font-semibold text-[#1e63e4]">{Texts.languageiuse}</h2>
              <p>HTML, CSS, JS, Git </p>
            </div>
            <div className=" mt-8 text-center">
              <h2 className="font-semibold text-[#1e63e4]">{Texts.devtools}</h2>
              <ul>
                <li>React</li>
                <li>ReactNative</li>
                <li>Tailwind</li>
                <li>Bootstrap</li>
                <li>Animate.css</li>
                <li>Vs code</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`min-w-[80%] flex flex-col justify-center items-center sections mx-10 my-5 rounded-2xl bg-white bg-opacity-10 animate__animated transition-all ${transitionsectionreverse}`}
        >
          <div className="flex flex-col items-center w-[70%] ">
            <div className="bg-[#e4311e] iconos m-2 size-20 flex items-center justify-center rounded-full">
            <ion-icon name="cloud-outline" size="large"></ion-icon>
            </div>
            <h1 className="font-bold m-2 animate__pulse animate__animated animate__slow animate__infinite	infinite">{Texts.backDev}</h1>
            <p className="sm:w-[300px] text-center text-sm">{Texts.backText} </p>
            <div className=" mt-8 text-center">
              <h2 className="font-semibold text-[#e4311e]">{Texts.languageiuse}</h2>
              <p>JS, TS, Python, Git, MongoDB, MySQL </p>
            </div>
            <div className=" mt-8 text-center">
              <h2 className="font-semibold text-[#ff4934]">{Texts.devtools}</h2>
              <ul>
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>Flask</li>
                <li>SQLalchemy</li>
                <li>Rest Api</li>
                <li>Vs code</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
