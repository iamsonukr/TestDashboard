"use client";
import { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const data = [
    {
        desc: "The cleaning service was fantastic! My house looks spotless, and the team was very professional. I will definitely be booking again for regular cleanings.",
        author: "Emily Johnson"
    },
    {
        desc: "I had a great experience with this cleaning company. They were punctual, efficient, and left my office looking amazing. Highly recommend!",
        author: "Michael Smith"
    },
    {
        desc: "The deep cleaning service was exactly what I needed. The team took their time and ensured every corner was spotless. Very impressed with the results.",
        author: "Sarah Williams"
    },
    {
        desc: "Fantastic service! The team was very thorough, and my home feels fresh and clean. I am so happy with the outcome and will continue using their services.",
        author: "David Brown"
    }
];


const Slider = () => {
    const [current, setCurrent] = useState(1);

    const handleRightClick = () => {
        setCurrent(current === data.length - 1 ? 0 : current + 1);
    };

    const handleLeftClick = () => {
        setCurrent(current === 0 ? data.length - 1 : current - 1);
    };

    const getClass = (index) => {
        if (index === current) return "scale-100 z-10";
        if (index === (current + 1) % data.length) return "scale-90 translate-x-[90vw] md:translate-x-[20vw] lg:translate-x-[25vw]";
        if (index === (current - 1 + data.length) % data.length) return "scale-90 -translate-x-[90vw] md:-translate-x-[20vw] lg:-translate-x-[25vw]";
        return "scale-50 opacity-0";
    };

    const handleMouseEnter = (index) => {
        if (index === (current - 1 + data.length) % data.length) {
            handleLeftClick();
        } else if (index === (current + 1) % data.length) {
            handleRightClick();
        }
    };

    return (
        <div className="w-full h-full py-[4vw] md:py-[3vw]">
        <h2
          className="text-center text-[6vw] md:text-[4vw] font-bold 
        text-transparent bg-clip-text bg-gradient-to-r from-[#1fa3dd] via-blue-300 to-[#1fa3dd] transition-all duration-500 ease-in-out hover:scale-105
        "
        >
          Testimonials
        </h2>
        <div className='h-[70vw] md:h-[20vw] lg:h-[24vw] w-full flex flex-col items-start justify-center py-[2vw] gap-[4vw] md:py-0 md:gap-[1vw]'>
            <div className="w-full h-full px-[5vw] md:px-[10vw] relative flex justify-center items-center text-black overflow-hidden py-0">
                {data.map((data, index) => (
                    <div
                        key={index}
                        onClick={() => handleMouseEnter(index)}
                        className={`absolute transition-transform duration-300 transform 
                        ${getClass(index)} 
                        h-[50vw] w-[80%] md:h-[14vw] md:w-[26%] lg:h-[16vw] lg:w-[28%]
                        rounded-lg overflow-hidden hover:cursor-pointer bg-[#D9D9D9] flex flex-col justify-center bg-opacity-100 opacity-100 px-8 hover:scale-105 duration-500 hover:z-50`}
                    >
                        <p className="text-blue-500 text-[5.5vw] md:text-[2.1vw] lg:text-[2.5vw] font-medium">{data.author}</p>
                        <p className='text-[3.2vw] md:text-[1vw] lg:text-[1.2vw]'>{data.desc}</p>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center">
                <div className="flex gap-[5vw] md:gap-[1.5vw]">
                    <button
                        onClick={handleLeftClick}
                        className="p-2 w-[10vw] h-[10vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[3vw] lg:h-[3vw] bg-blue-400 hover:bg-blue-600 rounded-full flex justify-center items-center"
                    >
                        <FaChevronLeft size={"4vw,2vw"}/>
                    </button>
                    <button
                        onClick={handleRightClick}
                        className="p-2 w-[10vw] h-[10vw] md:w-[2.5vw] md:h-[2.5vw] lg:w-[3vw] lg:h-[3vw]  bg-blue-400 hover:bg-blue-600 rounded-full flex justify-center items-center"
                    >
                        <FaChevronRight size={"[4vw,2vw]"} />
                    </button>
                </div>
            </div>
        </div>
      </div>

    );
};

export default Slider;
