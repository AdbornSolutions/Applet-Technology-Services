/* eslint-disable no-unused-vars */
import React from "react";
import SubHero from "../Components/SubHero";

const posts = [
  {
    date: "Jan 16, 2025",
    title: "Why Every Business Needs a Professional Website",
    description:
      "A well-designed website builds trust, improves brand visibility, and helps customers connect with your business online.",
    link: "#",
  },
  {
    date: "Jan 16, 2025",
    title: "How Mobile Apps Help Businesses Grow",
    description:
      "Mobile apps improve customer engagement, simplify services, and create a better digital experience for users.",
    link: "#",
  },
  {
    date: "Jan 16, 2025",
    title: "Digital Marketing Strategies for Better Leads",
    description:
      "Smart digital marketing helps your business reach the right audience, generate quality leads, and increase conversions.",
    link: "#",
  },
  {
    date: "Jan 16, 2025",
    title: "Why Every Business Needs a Professional Website",
    description:
      "A well-designed website builds trust, improves brand visibility, and helps customers connect with your business online.",
    link: "#",
  },
  {
    date: "Jan 16, 2025",
    title: "How Mobile Apps Help Businesses Grow",
    description:
      "Mobile apps improve customer engagement, simplify services, and create a better digital experience for users.",
    link: "#",
  },
  {
    date: "Jan 16, 2025",
    title: "Digital Marketing Strategies for Better Leads",
    description:
      "Smart digital marketing helps your business reach the right audience, generate quality leads, and increase conversions.",
    link: "#",
  },
];

const Blog = () => {
  return (
    <>
      <SubHero title="Blog" />

      <section className="py-14 sm:py-16 lg:py-20 bg-[#f9f9fc]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center mb-4">
            Latest News
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Stay updated with our latest insights, tips, and strategies in digital marketing, web design, and IT solutions.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              >
                <div className="bg-purple-200 h-40"></div> {/* Placeholder for image */}
                <div className="p-6">
                  <span className="text-xs text-purple-600">{post.date}</span>
                  <h3 className="mt-2 text-lg font-semibold text-black leading-snug">{post.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{post.description}</p>
                  <a
                    href={post.link}
                    className="mt-4 inline-flex items-center text-purple-600 font-semibold hover:underline"
                  >
                    Read More <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
