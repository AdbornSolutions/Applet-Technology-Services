/* eslint-disable no-unused-vars */
import React from "react";
import { FiArrowRight } from "react-icons/fi";

const blogs = [
  {
    date: "Jan 15, 2025",
    title: "Why Every Business Needs a Professional Website",
    desc: "A well-designed website builds trust, improves brand visibility, and helps customers connect with your business online.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&q=80",
  },
  {
    date: "Jan 16, 2025",
    title: "How Mobile Apps Help Businesses Grow",
    desc: "Mobile apps improve customer engagement, simplify services, and create a better digital experience for users.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1000&q=80",
  },
  {
    date: "Jan 18, 2025",
    title: "Digital Marketing Strategies for Better Leads",
    desc: "Smart digital marketing helps your business reach the right audience, generate quality leads, and increase conversions.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1000&q=80",
  },
];

const Blog = () => {
  return (
    <section className="bg-[#EFF1F3] py-[70px] md:py-[90px]">
      <div className="max-w-[1080px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-[45px]">
          <span className="inline-flex items-center px-[12px] py-[4px] rounded-full bg-[#d9ccff] text-[#6d4cff] text-[10px] font-semibold">
            Blog
          </span>

          <h2 className="mt-[10px] text-[24px] md:text-[32px] font-medium text-[#1a1a1a]">
            Latest News
          </h2>

          <p className="max-w-[560px] mx-auto mt-[12px] text-[13px] md:text-[14px] leading-[20px] text-[#444]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-[12px] overflow-hidden shadow-sm hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-[170px] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />

                <span className="absolute top-[12px] left-[12px] bg-[#6d4cff] text-white text-[10px] px-[10px] py-[4px] rounded-full font-medium">
                  {blog.date}
                </span>
              </div>

              {/* Content */}
              <div className="p-[18px]">
                <h3 className="text-[18px] font-medium leading-[28px] text-[#1a1a1a] mb-[12px] min-h-[85px]">
                  {blog.title}
                </h3>

                <p className="text-[13px] leading-[22px] text-[#666] mb-[20px] min-h-[88px]">
                  {blog.desc}
                </p>

                <button className="inline-flex items-center gap-2 text-[#6d4cff] text-[13px] font-medium hover:gap-3 transition-all">
                  Read More
                  <FiArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;