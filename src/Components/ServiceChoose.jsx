/* eslint-disable no-unused-vars */
import React from "react";
import { CheckCircle } from "lucide-react";
import bgImage from "../assets/BG/WhyChooseUsBg.png";
import chooseImg from "../assets/Images/WhyChooseUs.png";

const ServiceChoose = ({
  title = "Why Choose Novara Digital Services",
  description = "We provide exceptional digital solutions tailored to your business needs. From web development to digital marketing, our team ensures measurable results and enhanced online presence.",
  features = [
    "Professional & Experienced Team",
    "Customized Solutions",
    "24/7 Support",
    "Advanced Technology",
  ],
}) => {
  return (
    <section
      className="relative bg-[#EFF1F3] py-16 sm:py-24 lg:py-[200px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 lg:flex lg:items-center lg:gap-16">
        <div className="lg:flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-5 sm:mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-gray-700 mb-8 leading-7">{description}</p>

          <ul className="space-y-4 mb-8 text-left max-w-xl mx-auto lg:mx-0">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle
                  className="text-[#6842ff] mt-0.5 shrink-0"
                  size={20}
                />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative z-10">
            <img
              src={chooseImg}
              alt="Why Choose Us"
              className="w-full max-w-[620px] object-cover mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceChoose;
