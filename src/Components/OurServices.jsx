/* eslint-disable no-unused-vars */
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import service1 from "../assets/Service/1.png";
import service2 from "../assets/Service/2.png";
import service3 from "../assets/Service/3.png";
import service4 from "../assets/Service/4.png";

const services = [
  {
    title: "Web Development",
    desc: "We design and develop responsive, high-performance websites tailored to your business goals.",
    image: service1,
    dark: false,
  },
  {
    title: "App Development",
    desc: "We build user-friendly mobile applications for Android and iOS with smooth performance and modern design.",
    image: service2,
    dark: true,
  },
  {
    title: "Digital Marketing",
    desc: "We help your brand reach the right audience through SEO, social media marketing, ads, and lead generation campaigns.",
    image: service3,
    dark: false,
  },
  {
    title: "Technical Support",
    desc: "We provide reliable technical assistance, website maintenance, troubleshooting.",
    image: service4,
    dark: true,
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#EFF1F3] py-14 md:py-[42px]">
      <div className="max-w-[1080px] mx-auto px-5">
        {/* Top Content */}
        <div className="w-full max-w-[430px] mb-[30px] md:mb-[34px]">
          <span className="inline-flex items-center px-[13px] py-[4px] rounded-full bg-[#E8DEFF] text-[#7B55FF] text-[11px] font-semibold">
            Our Services
          </span>

          <h2 className="mt-[8px] text-[26px] md:text-[27px] font-medium leading-[1.15] text-[#161616]">
            Our Digital Services
          </h2>

          <p className="mt-[16px] text-[13px] leading-[18px] text-[#1f1f1f] tracking-[0.2px]">
            We provide modern technology and marketing solutions that help
            businesses improve their online presence, connect with customers,
            and grow efficiently.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {services.map((item, index) => (
            <div
              key={index}
              className={`w-full min-h-[286px] rounded-[13px] overflow-hidden flex flex-col ${
                item.dark
                  ? "bg-[#1c1c1c] text-white"
                  : "bg-[#e9e0ff] text-[#171717]"
              }`}
            >
              <div className="px-[17px] pt-[16px] pb-[10px] flex-1">
                <div className="flex justify-between items-start gap-3 mb-[16px]">
                  <h3 className="text-[17px] font-medium leading-[20px]">
                    {item.title}
                  </h3>

                  <FiArrowUpRight
                    size={15}
                    className={item.dark ? "text-white" : "text-[#1c1c1c]"}
                  />
                </div>

                <p
                  className={`text-[12px] leading-[16px] ${
                    item.dark ? "text-[#ededed]" : "text-[#222]"
                  }`}
                >
                  {item.desc}
                </p>
              </div>

              <div className="px-[12px] pb-[12px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[170px] sm:h-[150px] lg:h-[126px] object-cover rounded-[10px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
