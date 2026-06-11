/* eslint-disable no-unused-vars */
import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const AboutUs = ({
  title = "Building Digital Solutions That Help Businesses Grow",
  description = "We provide result-focused technology and marketing services for businesses that want to build a strong online presence. From website development to mobile apps, digital marketing, and technical support, we deliver solutions that are practical, scalable, and business-friendly.",
  features = [
    "Professional Online Presence",
    "Customizable Solutions",
    "24/7 Availability",
    "Skilled and Trained Team",
    "Use of Advanced Technology",
  ],
  image,
  showButton = true,
  buttonText = "View More",
  onButtonClick,
}) => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#EFF1F3]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Image */}
          {image && (
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt="About Us"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Experience Card */}
              <div className="absolute -bottom-5 left-4 sm:-left-6 bg-[#6842ff] text-white rounded-xl px-5 sm:px-8 py-4 sm:py-5 shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-bold">3+</h3>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
            </div>
          )}

          {/* Right Content */}
          <div className="pt-6 lg:pt-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight mb-5 sm:mb-6">
              {title}
            </h2>

            <p className="text-gray-600 leading-7 mb-8">{description}</p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 mb-8">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  <FaCheckCircle className="text-[#6842ff] text-sm" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Optional Button */}
            {showButton && (
              <button
                onClick={onButtonClick}
                className="inline-flex items-center gap-2 bg-[#6842ff] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5934ea] transition"
              >
                {buttonText}
                <FaArrowRight />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
