/* eslint-disable no-unused-vars */
import React from "react";

import bgImage from "../assets/BG/WhyChooseUsBg.png";
import chooseImg from "../assets/Images/WhyChooseUs.png";

const WhyChooseUs = () => {
  return (
    <section
      className="relative bg-[#EFF1F3] py-[200px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1180px] mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-[70px] items-center">
          
          {/* Left Content */}
          <div className="max-w-[460px]">
            <span className="inline-flex px-3 py-1 rounded-full bg-[#bdaeff] text-[#6d4cff] text-[10px] font-semibold">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-[42px] leading-[46px] font-medium text-[#1d1d1d]">
              Your Trusted Partner for Digital Growth
            </h2>

            <p className="mt-4 text-[15px] leading-[26px] text-[#4d4d4d]">
              We combine technology, creativity, and expertise to deliver
              solutions that help businesses succeed in today's competitive
              digital world. Our focus is on creating reliable, scalable,
              and results-driven solutions tailored to your business needs.
            </p>

            <ul className="mt-7 space-y-2 text-[15px] text-[#333]">
              <li>• Business-focused digital solutions</li>
              <li>• Modern design and technology</li>
              <li>• Transparent communication</li>
              <li>• On-time project delivery</li>
              <li>• Dedicated technical support</li>
              <li>• Scalable solutions for growth</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            
            

            {/* Image Card */}
            <div className="relative z-10">
              <img
                src={chooseImg}
                alt="Why Choose Us"
                className="
                  w-full
                  max-w-[620px]
                  object-cover
                  mt-5
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;