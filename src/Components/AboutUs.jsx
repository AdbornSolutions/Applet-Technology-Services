/* eslint-disable no-unused-vars */
import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import AboutImage from "../assets/Images/Aboutus.png";

const AboutUs = () => {
  const features = [
    "Professional Online Presence",
    "Customizable Solutions",
    "24/7 Availability",
    "Skilled and Trained Team",
    "Use of Advanced Technology",
  ];

  return (
    <section className="py-20 bg-[#EFF1F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={AboutImage}
                alt="About Us"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#6842ff] text-white rounded-xl px-8 py-5 shadow-xl">
              <h3 className="text-3xl font-bold">3+</h3>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#1a1a1a] leading-tight mb-6">
              Building Digital Solutions That Help
              <br />
              Businesses Grow
            </h2>

            <p className="text-gray-600 leading-7 mb-8">
              We provide result-focused technology and marketing services
              for businesses that want to build a strong online presence.
              From website development to mobile apps, digital marketing,
              and technical support, we deliver solutions that are practical,
              scalable, and business-friendly.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 mb-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <FaCheckCircle className="text-[#6842ff] text-sm" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="flex items-center gap-2 bg-[#6842ff] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5934ea] transition">
              View More
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;