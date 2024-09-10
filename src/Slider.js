import { useState, useEffect } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
function Slider({slides}){
    const [currentIndex, setCurrentIndex]= useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); 
    
        return () => clearInterval(interval);
      }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
      };
      const goToNext = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      };
    return(
        <div className="relative h-full mx-auto w-full ml-4">
            <div className="relative h-[384 px] overflow-hidden rounded-md">
                <img src = {slides[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="w-full h-full object-center transition-opacity duration-500 ease-in-out "/>
            </div>
            <button className="absolute top-1/2 rounded-full left-0 transform -translate-y-1/2 px-2 py-2 bg-gray-600 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" onClick={goToPrevious}><RiArrowLeftSLine />
            </button>
            <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full px-2 py-2 bg-gray-600 text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
        onClick={goToNext}
      >
        <RiArrowRightSLine />
      </button>
        </div>
    )
}
export default Slider;