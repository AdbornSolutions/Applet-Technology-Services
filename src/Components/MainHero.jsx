/* eslint-disable no-unused-vars */
import React from "react";
import { FiArrowRight, FiPlayCircle } from "react-icons/fi";
import MainHeroBg from "../assets/BG/MainHero.jpg";

const MainHero = () => {
  return (
    <section
  className="relative min-h-screen"
  style={{
    backgroundImage: `url(${MainHeroBg})`,
    backgroundSize: "120% ",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      {/* Overlay (optional) */}
      <div className="absolute inset-0 bg-white/10"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 pt-28">
        <div className="inline-flex items-center gap-2 bg-white/80 text-[#6246ea] px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
          <span className="w-2 h-2 bg-[#6246ea] rounded-full"></span>
          Welcome To Applet
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-[#161616]">
          Empowering Businesses with
          <br />
          <span className="text-[#6246ea]">
            Smart Digital Solutions
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-sm md:text-base text-gray-700 leading-relaxed">
          We help businesses grow with modern websites, powerful mobile apps,
          result-driven digital marketing, and reliable technical support
          services.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <button className="flex items-center gap-2 bg-[#6246ea] text-white px-7 py-3 rounded-md font-semibold shadow-md hover:scale-105 transition">
            Get Started Now
            <FiArrowRight />
          </button>

          <button className="flex items-center gap-2 bg-white text-[#6246ea] px-7 py-3 rounded-md font-semibold shadow-md hover:scale-105 transition">
            <FiPlayCircle />
            Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainHero;