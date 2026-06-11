/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const closeMobileMenu = () => {
    setMobileMenu(false);
    setServiceOpen(false);
  };

  return (
    <header className="fixed top-3 sm:top-4 left-0 w-full z-50 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">
        <nav
          className="
            flex items-center justify-between
            bg-white/10 backdrop-blur-xl
            border border-white/20
            rounded-2xl sm:rounded-full
            px-4 md:px-8
            py-2.5 sm:py-3
            shadow-lg
          "
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <Link
              to="/"
              className="text-black font-medium hover:text-violet-300 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-black font-medium hover:text-violet-300 transition"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-black font-medium hover:text-violet-300 transition">
                Services
                <FiChevronDown />
              </button>

              <div
                className="
                  absolute top-10 left-0
                  w-56
                  bg-white rounded-2xl
                  shadow-xl
                  opacity-0 invisible
                  group-hover:opacity-100
                  group-hover:visible
                  transition-all duration-300
                  p-3
                "
              >
                <Link
                  to="/web-development"
                  className="block px-4 py-2 rounded-lg hover:bg-violet-50"
                >
                  Web Development
                </Link>

                <Link
                  to="/app-development"
                  className="block px-4 py-2 rounded-lg hover:bg-violet-50"
                >
                  App Development
                </Link>

                <Link
                  to="/digital-marketing"
                  className="block px-4 py-2 rounded-lg hover:bg-violet-50"
                >
                  Digital Marketing
                </Link>

                <Link
                  to="/technical-support"
                  className="block px-4 py-2 rounded-lg hover:bg-violet-50"
                >
                  Technical Support
                </Link>
              </div>
            </div>

            <Link
              to="/blog"
              className="text-black font-medium hover:text-violet-300 transition"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className="text-black font-medium hover:text-violet-300 transition"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="
                flex items-center gap-2
                bg-gradient-to-r from-violet-600 to-purple-600
                text-white
                px-6 py-3
                rounded-full
                font-medium
                hover:scale-105
                transition
              "
            >
              Let's Talk
              <FiArrowRight size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-[#161616] text-2xl"
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div
            className="
              lg:hidden mt-3
              bg-black/90 backdrop-blur-xl
              rounded-3xl
              p-5 sm:p-6
              max-h-[calc(100vh-110px)]
              overflow-y-auto
            "
          >
            <div className="flex flex-col gap-5 text-white">
              <Link to="/" onClick={closeMobileMenu}>Home</Link>
              <Link to="/about" onClick={closeMobileMenu}>About Us</Link>

              <div>
                <button
                  onClick={() => setServiceOpen(!serviceOpen)}
                  className="flex items-center gap-2"
                >
                  Services
                  <FiChevronDown
                    className={`transition ${
                      serviceOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {serviceOpen && (
                  <div className="ml-4 mt-3 flex flex-col gap-3 text-sm">
                    <Link to="/web-development" onClick={closeMobileMenu}>Web Development</Link>
                    <Link to="/app-development" onClick={closeMobileMenu}>App Development</Link>
                    <Link to="/digital-marketing" onClick={closeMobileMenu}>Digital Marketing</Link>
                    <Link to="/technical-support" onClick={closeMobileMenu}>Technical Support</Link>
                  </div>
                )}
              </div>

              <Link to="/blog" onClick={closeMobileMenu}>Blog</Link>
              <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="
                  bg-gradient-to-r
                  from-violet-600
                  to-purple-600
                  text-center
                  py-3
                  rounded-full
                "
              >
                Let's Talk
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
