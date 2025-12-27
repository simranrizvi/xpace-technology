"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Testimonial", href: "/testimonial" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Appointment", href: "/appointment" },
  ];

  return (
    <nav className="relative bg-white w-full border-b border-gray-100">
      <div className="flex h-auto lg:h-30">
        {/* Logo Section */}
        <div className="bg-primary py-4 px-6 lg:py-6 lg:px-8 shrink-0 flex items-center justify-center">
          <Link href="/">
            <img
              src="/xpace white logo.png"
              alt="XSPACE Technologies Logo"
              className="h-10 lg:h-14 w-auto cursor-pointer"
            />
          </Link>
        </div>

        {/* Red vertical breaker - Hidden on mobile */}
        <div className="hidden lg:block w-2 bg-red-500 h-full"></div>

        {/* Right Side Content */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Top Bar: Contact & Socials (Hidden on Mobile) */}
          <div className="hidden lg:flex flex-row justify-between items-center px-10 py-3 border-b border-gray-50">
            <div className="flex items-center gap-6">
              <p className="text-secondary text-[13px] flex items-center gap-2">
                <FaEnvelope className="text-red-600" />{" "}
                info@xpacetechnologies.com
              </p>
              <p className="text-secondary text-[13px] flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-600" /> Suite 2, 4th floor,
                RJ Mall, Karachi
              </p>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <FaTwitter className="cursor-pointer hover:text-red-600 transition-colors" />
              <FaFacebookF className="cursor-pointer hover:text-red-600 transition-colors" />
              <FaLinkedinIn className="cursor-pointer hover:text-red-600 transition-colors" />
              <FaInstagram className="cursor-pointer hover:text-red-600 transition-colors" />
              <FaYoutube className="cursor-pointer hover:text-red-600 transition-colors" />
            </div>
          </div>

          {/* Bottom Bar: Desktop Nav & Mobile Toggle */}
          <div className="flex items-center justify-between lg:justify-start px-6 lg:px-10 py-4 lg:py-2">
            {/* Desktop Links */}
            <div className="hidden lg:flex flex-row gap-x-8 items-center h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-secondary font-semibold hover:text-red-600 transition-colors text-sm uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-2xl text-primary p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className="lg:hidden text-xs text-gray-500 font-medium">
              MENU
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl text-primary"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col items-center gap-6 mt-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold text-secondary hover:text-red-600"
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-10 flex gap-6 text-2xl text-primary">
            <FaFacebookF /> <FaLinkedinIn /> <FaInstagram />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
