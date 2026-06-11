/* eslint-disable no-unused-vars */
import React from "react";
import { ArrowRight } from "lucide-react";

const OurSingleService = ({
  title,
  services,
  ctaTitle = "Ready to Innovate?",
  ctaDescription = "Let's discuss your unique requirements today.",
  ctaButtonText = "Get Quote",
}) => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-[#EFF1F3]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-14 leading-tight">
          {title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-purple-600" />
                </div>

                <h3 className="font-semibold text-lg mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}

          <div className="bg-purple-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              {ctaTitle}
            </h3>

            <p className="text-gray-600 mb-6">
              {ctaDescription}
            </p>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition">
              {ctaButtonText}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSingleService;
