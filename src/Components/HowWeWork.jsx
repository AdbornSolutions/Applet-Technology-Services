/* eslint-disable no-unused-vars */
import React from "react";
import { FaHandshake, FaShieldAlt, FaLaptopCode, FaUserTie } from "react-icons/fa";

import downLine from "../assets/Vector lines/down.png";
import upLine from "../assets/Vector lines/up.png";

const steps = [
  {
    number: "1",
    icon: <FaHandshake />,
    title: "Understand Your Needs",
    desc: "We discuss your business goals and project requirements.",
  },
  {
    number: "2",
    icon: <FaShieldAlt />,
    title: "Build the Solution",
    desc: "Our team develops your website, app, or marketing campaign with quality.",
  },
  {
    number: "3",
    icon: <FaLaptopCode />,
    title: "Test & Improve",
    desc: "We test everything carefully to ensure smooth performance.",
  },
  {
    number: "4",
    icon: <FaUserTie />,
    title: "Launch & Support",
    desc: "We help you launch successfully and provide ongoing support.",
  },
];

const HowWeWork = () => {
  return (
    <section className="bg-[#EFF1F3] py-[38px]">
      <div className="max-w-[1180px] mx-auto px-5">
        <h2 className="text-center text-[26px] font-medium text-[#111] mb-[32px]">
          How We Work
        </h2>

        <div className="relative flex items-start justify-between">
          {steps.map((item, index) => (
            <React.Fragment key={index}>
              <div className="relative w-[210px] text-center">
                <span className="absolute top-[-2px] left-[32px] text-[12px] text-black">
                  {item.number}
                </span>

                <div className="mx-auto w-[66px] h-[66px] rounded-full bg-white flex items-center justify-center mb-[14px]">
                  <div className="w-[43px] h-[43px] rounded-full bg-[#6b4cff] text-white flex items-center justify-center text-[18px]">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-[17px] font-semibold leading-[20px] text-[#111] mb-[10px]">
                  {item.title}
                </h3>

                <p className="text-[11px] leading-[14px] text-[#111] max-w-[150px] mx-auto">
                  {item.desc}
                </p>
              </div>

              {index < steps.length - 1 && (
                <img
                  src={index === 1 ? upLine : downLine}
                  alt=""
                  className="w-[112px] h-auto mt-[34px] object-contain"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;