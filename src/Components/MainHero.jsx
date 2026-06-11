/* eslint-disable no-unused-vars */
import React from "react";
import { FiArrowRight, FiPlayCircle } from "react-icons/fi";
import MainHeroBg from "../assets/BG/MainHero.jpg";

const MainHero = () => {
  return (
    <section
  className="relative min-h-[680px] sm:min-h-screen overflow-hidden"
  style={{
    backgroundImage: `url(${MainHeroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-white/10"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 sm:px-6 pt-32 sm:pt-36 lg:pt-40">
        <div className="inline-flex items-center gap-2 bg-white/80 text-[#6246ea] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-5 sm:mb-6 shadow-sm">
          <span className="w-2 h-2 bg-[#6246ea] rounded-full"></span>
          Welcome To Applet
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-[#161616]">
          Empowering Businesses with
          <br className="hidden sm:block" />
          <span className="text-[#6246ea]">
            Smart Digital Solutions
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-sm md:text-base text-gray-700 leading-relaxed">
          We help businesses grow with modern websites, powerful mobile apps,
          result-driven digital marketing, and reliable technical support
          services.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <button className="flex items-center justify-center gap-2 bg-[#6246ea] text-white px-6 sm:px-7 py-3 rounded-md font-semibold shadow-md hover:scale-105 transition">
            Get Started Now
            <FiArrowRight />
          </button>

          <button className="flex items-center justify-center gap-2 bg-white text-[#6246ea] px-6 sm:px-7 py-3 rounded-md font-semibold shadow-md hover:scale-105 transition">
            <FiPlayCircle />
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
