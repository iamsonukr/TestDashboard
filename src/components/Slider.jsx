"use client";
import { useState } from 'react';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';

const testimonials = [
    {
        content: "The cleaning service was fantastic! My house looks spotless, and the team was very professional. I will definitely be booking again for regular cleanings.",
        author: "Emily Johnson",
        role: "Homeowner"
    },
    {
        content: "I had a great experience with this cleaning company. They were punctual, efficient, and left my office looking amazing. Highly recommend!",
        author: "Michael Smith",
        role: "Business Owner"
    },
    {
        content: "The deep cleaning service was exactly what I needed. The team took their time and ensured every corner was spotless. Very impressed with the results.",
        author: "Sarah Williams",
        role: "Apartment Resident"
    },
    {
        content: "Fantastic service! The team was very thorough, and my home feels fresh and clean. I am so happy with the outcome and will continue using their services.",
        author: "David Brown",
        role: "Home Client"
    }
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleSlideChange = (direction) => {
        if (isAnimating) return;

        setIsAnimating(true);
        const newIndex = direction === 'next'
            ? (currentIndex + 1) % testimonials.length
            : (currentIndex - 1 + testimonials.length) % testimonials.length;
        setCurrentIndex(newIndex);

        setTimeout(() => setIsAnimating(false), 300);
    };

    const getSlideClassName = (index) => {
        const baseClasses = `
            absolute transition-all duration-300 
            bg-white shadow-lg rounded-xl p-6
            flex flex-col justify-between
            w-[85%] md:w-[30%] 
            h-auto aspect-[4/3]
            transform hover:scale-105 hover:z-50
        `;

        if (index === currentIndex) {
            return `${baseClasses} z-30 scale-100 opacity-100`;
        }
        
        if (index === (currentIndex + 1) % testimonials.length) {
            return `${baseClasses} z-20 scale-95 opacity-90 translate-x-[70%] md:translate-x-[85%]`;
        }
        
        if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
            return `${baseClasses} z-20 scale-95 opacity-90 -translate-x-[70%] md:-translate-x-[85%]`;
        }
        
        return `${baseClasses} z-10 scale-90 opacity-0`;
    };

    return (
        <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white p-8 my-4">
            <div className="container mx-auto px-12">
                <h2 className="text-center text-4xl md:text-5xl font-bold mb-12
                    bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 
                    text-transparent bg-clip-text
                    transition-all duration-500 hover:scale-105">
                    What Our Clients Say
                </h2>

                <div className="relative h-[500px] md:h-[400px] flex items-center justify-center">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={getSlideClassName(index)}
                            role="group"
                            aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
                        >
                            <Quote className="text-blue-500 w-8 h-8 mb-4" />
                            
                            <p className="text-gray-700 text-lg mb-6">
                                {testimonial.content}
                            </p>
                            
                            <div className="mt-auto">
                                <p className="font-semibold text-blue-600">
                                    {testimonial.author}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 
                        flex items-center gap-4">
                        <button
                            onClick={() => handleSlideChange('prev')}
                            className="p-3 rounded-full bg-blue-500 text-white 
                                hover:bg-blue-600 transition-colors duration-200
                                disabled:opacity-50 disabled:cursor-not-allowed
                                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                            disabled={isAnimating}
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-200
                                        ${currentIndex === index 
                                            ? 'bg-blue-500 w-4' 
                                            : 'bg-gray-300 hover:bg-gray-400'}`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => handleSlideChange('next')}
                            className="p-3 rounded-full bg-blue-500 text-white 
                                hover:bg-blue-600 transition-colors duration-200
                                disabled:opacity-50 disabled:cursor-not-allowed
                                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                            disabled={isAnimating}
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;