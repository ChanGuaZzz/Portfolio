import { useEffect, useState } from "react";
import GeysonPicture from "../assets/img/geysonPicture.jpg";
import { useLanguage } from "../context/LanguageContext";
import "animate.css";
import Project from "./project";
import controlz from "../assets/img/controlz.jpg";
import blackjack from "../assets/img/blackjack.png";
import blackjack2 from "../assets/img/blackjack2.png";
import controlz2 from "../assets/img/controlz2.jpg";
import brandoarjona1 from "../assets/img/brandoarjona1.png";
import brandoarjona2 from "../assets/img/brandoarjona2.png";
import jabber1 from "../assets/img/jabber1.png";
import jabber2 from "../assets/img/jabber2.png";
import jabber3 from "../assets/img/jabber3.png";
import jabber4 from "../assets/img/jabber4.png";
import zalk1 from "../assets/img/zalk1.png";
import zalk2 from "../assets/img/zalk2.png";
import zalk3 from "../assets/img/zalk3.png";
import zalk4 from "../assets/img/zalk4.png";
import zalk5 from "../assets/img/zalk5.png";
import zalk6 from "../assets/img/zalk6.png";
import zalk7 from "../assets/img/zalk7.png";



function Main({isInit}) {
  const { Texts } = useLanguage();
  const [transitionsection, setTransitionsection] = useState("");
  const [transitionsectionreverse, setTransitionsectionreverse] = useState("");
  useEffect(() => {
    if(!isInit){
      setTimeout(() => {
      setTransitionsection("");
    setTransitionsectionreverse("");
     }, 1500);
    }
  }, []);

  return (
    <>
      <main id="about" className="size-full z-[0] pt-20 flex items-center flex-col ">
      <img  className="picture border rounded-full size-[300px] m-3" src={GeysonPicture} alt="no there photo" />
        <span className="text-center font-semibold text-[#e4311e] text-sm my-2 px-2 rounded-full bg-slate-300 bg-opacity-10">{Texts.webdeveloper}</span>
        <span className="text-center  text-shadow-blue text-[#aaaca2] text-sm my-2 w-[60%]">- Front-End</span>
        <span className="text-center  text-shadow-red text-[#aaaca2] text-sm my-2  w-[60%]">- Back-End</span>
          <div
            className={` py-5 flex flex-col justify-center items-center  mx-10 my-5 rounded-2xl bg-white bg-opacity-10 animate__animated transition-all `}
          >
            <div className="flex justify-center w-[70%]">
              <p className=" sm:w-[300px]  text-center">
                {Texts.descriptionOne}
                <span className="text-indigo-500">{Texts.programming}</span>
                {Texts.descriptionTwo}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-wrap flex-row items-center justify-center">
            <div
              className={`bloque w-[80%] md:w-[70%] lg:w-[40%] xl:w-[30%] flex flex-col justify-center items-center mx-10 my-5 rounded-2xl bg-white bg-opacity-10 animate__animated transition-all opacity-0 ${transitionsectionreverse}`}
            >
              <div className="flex flex-col items-center w-[70%] ">
                <div className="bg-[#1e63e4] iconos m-2 size-20 flex items-center justify-center rounded-full">
                  <ion-icon name="code-slash-outline" size="large"></ion-icon>
                </div>
                <h1 className="font-bold m-2 ">{Texts.frontDev}</h1>
                <p className="sm:w-[300px] text-center text-sm">{Texts.frontText} </p>
                <div className=" mt-8 text-center">
                  <h2 className="font-semibold text-[#1e63e4]">{Texts.languageiuse}</h2>
                  <p>HTML, CSS, JS, Git </p>
                </div>
                <div className=" mt-8 w-[50%] text-center">
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
              className={` bloque inview sections  w-[80%] md:w-[70%] lg:w-[40%] xl:w-[30%] flex flex-col justify-center items-center  mx-10 my-5 rounded-2xl bg-white bg-opacity-10 animate__animated transition-all ${transitionsection}`}
            >
              <div className="flex flex-col items-center w-[70%] ">
                <div className="bg-[#e4311e] iconos m-2 size-20 flex items-center justify-center rounded-full">
                  <ion-icon name="cloud-outline" size="large"></ion-icon>
                </div>
                <h1 className="font-bold m-2">{Texts.backDev}</h1>
                <p className="sm:w-[300px] text-center text-sm">{Texts.backText} </p>
                <div className=" mt-8 text-center">
                  <h2 className="font-semibold text-[#e4311e]">{Texts.languageiuse}</h2>
                  <p>JS, TS, Python, Git, MongoDB, MySQL </p>
                </div>
                <div className=" mt-8 w-[50%] text-center">
                  <h2 className="font-semibold text-[#ff4934]">{Texts.devtools}</h2>
                  <ul>
                    <li>NodeJs</li>
                    <li>ExpressJs</li>
                    <li>Flask</li>
                    <li>SQLalchemy</li>
                    <li>Rest Api</li>
                    <li>Socket.io</li>
                    <li>Vs code</li>
                    <li>GitHub</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <hr className="w-[90%] border-[#646464]" id="projects"></hr>
        <div className="my-10 w-full flex flex-wrap flex-row items-center justify-center ">
        <Project title={"ControlZ"} photos={[controlz,controlz2]} img={controlz} tools={["React","ExpressJs", "Tailwind", "MongoDB", "SQL"]} description={Texts.controlzdescription} link={"https://controlz.onrender.com"}  linkrepo={"https://github.com/RivotX/ControlZ.git"} />
        <Project title={"BlackJack"} photos={[blackjack,blackjack2]}  img={blackjack} tools={["React","JavaScript", "Tailwind"]} description={Texts.blackjackdescription} link={"https://blackjack-gyzx.onrender.com"} linkrepo={"https://github.com/ChanGuaZzz/BlackJack-.git"}/>
        <Project title={"BrandoArjona"} photos={[brandoarjona1,brandoarjona2]}  img={brandoarjona1} tools={["React","JavaScript", "Tailwind", "SQL","ExpressJs","Socket.io"]} description={Texts.brandoarjonadescription} link={"https://brandoarjona.onrender.com"}/>
        <Project title={"Jabber"} photos={[jabber1,jabber2,jabber3,jabber4]}  img={jabber1} tools={["React","Python","JavaScript","SQL","Tailwind","Flask","Socket.io"]} description={Texts.jabberdescription} link={"https://jabberweb.onrender.com"} linkrepo={"https://github.com/ChanGuaZzz/Jabber.git"}/>
        <Project title={"Zalk"} photos={[zalk1,zalk2,zalk3,zalk4,zalk5, zalk6, zalk7]}  img={zalk7} tools={["React-Native","JavaScript","TypeScript","SQL","Tailwind","ExpressJs","Socket.io"]} description={Texts.zalkdescription} link={"https://www.mediafire.com/file/h0axor1u9jlecit/Zalk.apk/file"} linkrepo={"https://github.com/ChanGuaZzz/ZalK-WalkieTalkie.git"}/>
        </div>
        
      </main>
    </>
  );
}

export default Main;
