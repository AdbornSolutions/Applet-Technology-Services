/* eslint-disable no-unused-vars */
import React from "react";
import SubHeroImg from "../assets/BG/SubHero.png"; // fixed image

const SubHero = ({ title = "About Us" }) => {
  return (
    <section className="w-full min-h-[250px] sm:min-h-[320px] md:min-h-[380px] relative flex items-center justify-center bg-gradient-to-r from-purple-400 to-purple-300 px-5 pt-20 text-center overflow-hidden">
      {/* Fixed background image */}
      <img
        src={SubHeroImg}
        alt="Sub Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Title */}
      <h1 className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
        {title}
      </h1>
    </section>
  );
};

export default SubHero;
