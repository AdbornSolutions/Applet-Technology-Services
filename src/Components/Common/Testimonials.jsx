/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import bgImage from "../../assets/BG/Testimonials.png";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    text: "The team delivered our website exactly as we envisioned. Their professionalism, communication, and attention to detail made the entire process smooth and stress-free.",
    rating: "★★★★★",
    image: "https://i.pravatar.cc/80?img=12",
  },
  {
    name: "Priya Mehta",
    role: "Startup Founder",
    text: "They helped us build a clean and modern digital presence. The support was quick, friendly, and very professional throughout the project.",
    rating: "★★★★★",
    image: "https://i.pravatar.cc/80?img=47",
  },
  {
    name: "Amit Verma",
    role: "Marketing Head",
    text: "Our business leads improved after working with them. Their digital strategy and execution were practical, clear, and result-focused.",
    rating: "★★★★★",
    image: "https://i.pravatar.cc/80?img=33",
  },
  {
    name: "Neha Kapoor",
    role: "Business Consultant",
    text: "Excellent service and timely delivery. They understood our requirements properly and created a solution that matched our brand perfectly.",
    rating: "★★★★★",
    image: "https://i.pravatar.cc/80?img=25",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  const item = testimonials[current];

  return (
    <section
      className="relative bg-cover bg-[#EFF1F3] bg-center bg-no-repeat py-[220px] overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[80px]">
          
          {/* Left Testimonial Card */}
          <div className="relative w-full flex justify-center lg:justify-start">
            <div className="relative w-[410px] h-[360px] border-[10px] border-[#c5b6ff] bg-[#f4f6f8] px-[42px] pt-[118px] pb-[35px]">
              <div className="text-[#ffbb00] text-[14px] tracking-[2px] mb-[18px]">
                {item.rating}
              </div>

              <p className="text-[14px] leading-[19px] text-[#111] mb-[34px]">
                {item.text}
              </p>

              <div className="flex items-center gap-[16px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[48px] h-[48px] rounded-full object-cover"
                />

                <div>
                  <h4 className="text-[13px] font-semibold text-[#111]">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-[#333]">{item.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="max-w-[430px]">
            <span className="inline-flex px-[12px] py-[5px] rounded-full bg-[#c7b8ff] text-[#6b4cff] text-[10px] font-semibold">
              Testimonials
            </span>

            <h2 className="mt-[12px] text-[30px] leading-[35px] font-medium text-[#151515]">
              What Our Clients Say
            </h2>

            <p className="mt-[18px] text-[14px] leading-[20px] text-[#111]">
              We take pride in delivering solutions that help businesses grow,
              improve efficiency, and achieve their goals. Here’s what our
              clients have to say about working with us.
            </p>

            <div className="mt-[42px]">
              <p className="text-[11px] text-[#111] mb-[6px]">
                Satisfaction Rate
              </p>
              <h3 className="text-[28px] font-medium text-[#111]">98.7%</h3>
            </div>

            <div className="mt-[34px]">
              <p className="text-[11px] text-[#111] mb-[6px]">
                Faster Digital
              </p>
              <h3 className="text-[28px] font-medium text-[#111]">65%</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;