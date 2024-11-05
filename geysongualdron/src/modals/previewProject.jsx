import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

function PreviewProject({ project, setpreviewProject }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, settransition] = useState("opacity-0 ");

    
    const photos = project.photos;
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? photos.length - 1 : prevIndex - 1
      );
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === photos.length - 1 ? 0 : prevIndex + 1
      );
    };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    settransition("opacity-100");

    return () => {
      document.body.style.overflow = "auto";
    };

  }, []);

  return (
    <div className={`backdrop-blur-sm transition-all duration-300 ${transition}  previewModal fixed z-[2] bg-[#000000] bg-opacity-80 top-0 bottom-0 right-0 left-0 size-full `}>
      <div className="size-full flex flex-col ">
        <div className="flex justify-end mx-4 my-4">
          <button onClick={() => setpreviewProject(false)} className=" rounded-full bg-[#202020] bg-opacity-60 flex items-center justify-center p-1">
            <ion-icon name="close" size="large"></ion-icon>
          </button>
        </div>
        <div className="size-full flex justify-center items-center flex-col">
        
        <div className=" max-w-[1200px]   rounded-2xl p-6 ">
        <div className="  w-full flex items-center py-1 px-3   bg-slate-200 h-6 rounded-t-lg">
        <div className="flex items-center justify-between w-[63%]">
          <div className="flex items-center w-[50%]">
            <div className="circulo bg-[#ff5f57] size-3 rounded-full mx-1"></div>
            <div className="circulo bg-[#ffbd2e] size-3 rounded-full mx-1"></div>
            <div className="circulo bg-[#28ca41] size-3 rounded-full mx-1"></div>
          </div>
          <div className="flex items-center justify-center w-[50%]">
            <h1 className="text-black  opacity-55">{project.title} </h1>
          </div>
        </div>
      </div>
          <div className="relative group border rounded-xl rounded-t-none">
            <div className="aspect-[16/9] overflow-hidden  shadow-lg rounded-xl">
              <img
                src={photos[currentIndex]}
                alt="project"
                className=" w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-300">
              {project.description}
            </p>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-white w-6' 
                    : 'bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewProject;
