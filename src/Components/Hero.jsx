/* eslint-disable no-unused-vars */
import React from "react";

const Hero = ({ 
  image, 
  title = "Build Modern, High-Performing Websites That Drive Business Growth", 
  description = "We create professional, responsive, and user-friendly websites tailored to your business goals. Our web development solutions are designed to enhance your online presence, improve user experience, and deliver measurable results." 
}) => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#EFF1F3]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        
        {/* Left Image */}
        {image && (
          <div className="flex-1 w-full rounded-lg overflow-hidden shadow-lg">
            <img 
              src={image} 
              alt="Hero Image" 
              className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] object-cover"
            />
          </div>
        )}

        {/* Right Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-5 sm:mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
