/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import footerBg from "../../assets/BG/CTA+Footer.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center bg-[#EFF1F3] bg-no-repeat pt-16 sm:pt-[100px] lg:pt-[125px] pb-16 sm:pb-24 lg:pb-[200px]"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="max-w-[1080px] mx-auto px-5">
        <div className="text-center mb-10 sm:mb-[55px]">
          <h2 className="text-2xl sm:text-[34px] leading-tight sm:leading-[45px] font-medium text-[#202020]">
            Ready to Bring Your Dreams to Life?
            <br className="hidden sm:block" />
            Let's <span className="text-[#6946ff]">Get Started</span> Today
          </h2>

          <div className="mt-[28px] flex flex-col sm:flex-row justify-center gap-[14px] max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[285px] h-[40px] sm:h-[36px] rounded-full px-[16px] text-[12px] outline-none bg-white"
            />

            <Link
              to="/contact"
              className="h-[40px] sm:h-[36px] px-[20px] rounded-full bg-[#6b46ff] text-white text-[13px] flex items-center justify-center gap-2"
            >
              Let's Talk
              <FiArrowRight />
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-[14px] px-5 sm:px-[30px] lg:px-[38px] pt-[30px] pb-[24px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[55px]">
            <div>
              <img
                src={logo}
                alt="Applet Technology Services"
                className="w-[180px] sm:w-[205px] mb-[24px]"
              />

              <h4 className="text-[14px] font-semibold mb-[8px]">
                About Company.
              </h4>

              <p className="text-[12px] leading-[18px] text-[#333]">
                Empowering Futures, Crafting Solutions.
              </p>

              <div className="flex gap-[7px] mt-[18px]">
                <span className="w-[18px] h-[18px] rounded-full bg-[#1877f2] text-white flex items-center justify-center text-[10px]">
                  <FaFacebookF />
                </span>
                <span className="w-[18px] h-[18px] rounded-full bg-[#e4405f] text-white flex items-center justify-center text-[10px]">
                  <FaInstagram />
                </span>
                <span className="w-[18px] h-[18px] rounded-full bg-[#0a66c2] text-white flex items-center justify-center text-[10px]">
                  <FaLinkedinIn />
                </span>
                <span className="w-[18px] h-[18px] rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                  <FaXTwitter />
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-[14px] font-semibold mb-[24px]">
                Quick Links
              </h4>
              <ul className="space-y-[14px] text-[12px] text-[#111]">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-semibold mb-[24px]">Services</h4>
              <ul className="space-y-[14px] text-[12px] text-[#111]">
                <li>
                  <Link to="/web-development">Web Design & Development</Link>
                </li>
                <li>
                  <Link to="/app-development">Mobile App Development</Link>
                </li>
                <li>
                  <Link to="/digital-marketing">Digital Marketing</Link>
                </li>
                <li>
                  <Link to="/technical-support">Technical Support</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[14px] font-semibold mb-[24px]">Contact</h4>

              <p className="text-[12px] font-semibold mb-[14px]">
                Operational Address:
              </p>

              <p className="text-[12px] leading-[18px] text-[#111] mb-[14px]">
                47, Kotwal Nagar, Khamla, Nagpur, Maharashtra 440022, India
              </p>

              <p className="text-[12px] uppercase break-words">
                HR-MANAGER@MYAPPLEsoft.com
              </p>
            </div>
          </div>

          <div className="border-t border-[#ddd] mt-[28px] pt-[18px] flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-[11px] text-[#111]">
            <div className="flex flex-wrap gap-[18px]">
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
            </div>

            <p>
              Copyright 2026 Designed and developed by{" "}
              <span className="underline">Adbornsolutions.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
