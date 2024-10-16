import { useState, useEffect } from "react";

function Project({ title, description, link, img, img2, linkrepo }) {
  const [hover, sethover] = useState("opacity-0 pointer-events-none bottom-[100%]");

  const handlehover = () => {
    sethover(hover == "opacity-0 pointer-events-none bottom-[100%]" ? "bg-opacity-60 bottom-0" : "opacity-0 pointer-events-none bottom-[100%]");
    console.log(hover, "y el hover");
  };
  return (
    <div
      onMouseEnter={handlehover}
      onMouseLeave={handlehover}
      className={`relative project flex   m-3 transition-all w-[80%]  lg:w-[40%]  rounded-lg justify-center items-center flex-col bg-[#362d2c] `}
    >
      <div className="  w-full flex items-center py-1 px-3   bg-slate-200 h-6 rounded-t-lg">
        <div className="flex items-center justify-between w-[63%]">
          <div className="flex items-center w-[50%]">
            <div className="circulo bg-[#ff5f57] size-3 rounded-full mx-1"></div>
            <div className="circulo bg-[#ffbd2e] size-3 rounded-full mx-1"></div>
            <div className="circulo bg-[#28ca41] size-3 rounded-full mx-1"></div>
          </div>
          <div className="flex items-center justify-center w-[50%]">
            <h1 className="text-black  opacity-55">{title} </h1>
          </div>
        </div>
      </div>
      <div>
        <img className="size-full rounded-lg " src={img} alt="no found" />
        <div className={` bg-[url('./src/assets/img/${img2}')] bg-hover transition-all duration-300 absolute top-6 overflow-hidden  left-0 right-0  bg-black ${hover} rounded-lg rounded-t-none p-2`}>
          <div className="sm:size-full flex flex-col justify-center items-center ">
            <h1 className="text-white font-bold text-2xl">{title}</h1>
            <p className="text-white text-center hidden sm:block w-[300px]">{description}</p>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-5">
            <div className="flex ">
              <a
                href={linkrepo}
                target="_blank"
                rel="noreferrer"
                className="transition-all icongoproject mx-2 text-white flex items-center justify-center p-2 rounded-full border"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="transition-all icongoproject mx-2 text-white flex items-center justify-center p-2 rounded-full border"
              >
                <ion-icon name="arrow-forward"></ion-icon>
              </a>
            </div>
          </div>
          <div className="absolute  top-5 right-3">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="transition-all icongoproject text-white flex items-center justify-center p-2 rounded-full border"
            >
              <ion-icon name="eye"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
