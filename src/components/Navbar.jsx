import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      className="flex bg-[
#808287] h-30 w-full"
    >
      {/* Logo Section */}
      <div className="bg-primary py-6 px-8 shrink-0">
        <img
          src="/xpace white logo.png"
          alt="XSPACE Technologies Logo"
          className="h-14 w-auto"
        />
      </div>

      {/* Red vertical breaker */}
      <div className="w-2 bg-red-500 h-full"></div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col gap-8 mt-2 px-4 py-2">
        <div className="flex flex-row justify-between  px-5 gap-x-4 w-full">
          <div>
            <p className="text-secondary text-[13px]">
              info@xpacetechnologies.com
            </p>
          </div>

          <div className="text-secondary text-[13px]">
            Suite 2, 4th floor, CONNEKT Commercial Hub RJ Mall, Karachi,
            Pakistan
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <FaTwitter className="cursor-pointer hover:text-red-600" />
            <FaFacebookF className="cursor-pointer hover:text-red-600" />
            <FaLinkedinIn className="cursor-pointer hover:text-red-600" />
            <FaInstagram className="cursor-pointer hover:text-red-600" />
            <FaYoutube className="cursor-pointer hover:text-red-600" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row gap-x-9 mt-2">
          <a
            href="/"
            className="text-secondary font-semibold hover:text-primary"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-secondary font-semibold hover:text-primary"
          >
            About
          </a>
          <a
            href="/services"
            className="text-secondary font-semibold hover:text-primary"
          >
            Services
          </a>
          <a
            href="/industries"
            className="text-secondary font-semibold hover:text-primary"
          >
            Industries
          </a>
          <a
            href="/testimonial"
            className="text-secondary font-semibold hover:text-primary"
          >
            Testimonial
          </a>
          <a
            href="/careers"
            className="text-secondary font-semibold hover:text-primary"
          >
            Careers
          </a>
          <a
            href="/contact"
            className="text-secondary font-semibold hover:text-primary"
          >
            Contact
          </a>
          <a
            href="/faqs"
            className="text-secondary font-semibold hover:text-primary"
          >
            FAQs
          </a>
          <a
            href="/appointment"
            className="text-secondary font-semibold hover:text-primary"
          >
            Appointment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
