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
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Solutions & Services",
      href: "/services",
      isMega: true,
    },
    { name: "Technology We Use", href: "#" },
    { name: "Industries", href: "/industries" },
    { name: "Research & Development", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Testimonial", href: "/testimonial" },
    { name: "Partnerships & Alliances", href: "#" },
    { name: "Careers", href: "/careers" },
    { name: "FAQs", href: "/faqs" },
    { name: "Request a Proposal", href: "#" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-white font-sans relative">
      <div className="flex flex-row items-stretch">
        {/* LEFT: Logo Section */}
        <div className="bg-[#1a2e44] min-w-[140px] py-8 mt-6 px-4 relative border-r-[7px] border-[#e31e24] flex items-center justify-center z-30">
          <a href="/">
            <div className="relative w-full max-w-[120px]">
              <img
                src="/xpace white logo.png"
                alt="XPACE"
                className="w-full h-auto object-contain"
              />
            </div>
          </a>
        </div>

        {/* RIGHT: Top Bar + Nav Links */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Contact Bar */}
          <div className="bg-[#f2f5f7] py-4 px-6 flex justify-between items-center mr-4 lg:mr-10">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 text-secondary text-[12px]">
                <FaEnvelope className="text-[#e31e24]" />
                <span className="hidden xl:inline">
                  info@xpacetechnologies.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-500 text-[11px]">
                <FaMapMarkerAlt className="text-[#e31e24]" />
                <span>Karachi, Pakistan</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[#1a2e44] text-sm">
              <FaTwitter className="hover:text-[#e31e24] cursor-pointer transition-colors" />
              <FaFacebookF className="hover:text-[#e31e24] cursor-pointer transition-colors" />
              <FaLinkedinIn className="hover:text-[#e31e24] cursor-pointer transition-colors" />
              <FaInstagram className="hover:text-[#e31e24] cursor-pointer transition-colors" />
              <FaYoutube className="hover:text-[#e31e24] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Nav Links Section */}
          <div className="flex-1 flex items-center px-4 relative">
            <div className="hidden lg:flex items-center gap-x-2 xl:gap-x-3 h-full w-full justify-between">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group h-full flex items-center shrink-0"
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPath(link.href);
                    }}
                    className={`flex items-center gap-1 text-[9px] xl:text-[13px] transition-colors py-6 whitespace-nowrap
                      ${
                        currentPath === link.href ||
                        (link.name === "Home" && currentPath === "/")
                          ? "text-[#e31e24]"
                          : "text-[#1a2e44] hover:text-[#e31e24]"
                      }`}
                  >
                    {link.name}
                    {link.isMega && (
                      <FaChevronDown className="text-[8px] xl:text-[9px] ml-1" />
                    )}
                  </a>

                  {/* Red Underline */}
                  <span
                    className={`absolute bottom-5 h-[2px] bg-[#e31e24] left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out
                      ${
                        currentPath === link.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                  ></span>

                  {/* Mega Menu Dropdown - Ab group hover se kaam karega */}
                  {link.isMega && (
                    // <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
                    //   <div className="bg-[#f8f9fa] shadow-2xl rounded-b-md">
                    //     <div className="container mx-auto px-8 py-10 max-w-[1400px]">
                    //       <div className="grid grid-cols-4 gap-x-8 gap-y-12">
                    <div className="absolute top-full left-0 w-screen max-w-[100vw] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto">
                      {/* Ye div ensures ke menu logo ke bilkul neechay se start na ho balkay poori screen cover kare */}
                      <div className="fixed left-0 right-0 bg-[#f8f9fa]  ">
                        
                        
                        <div className="container mx-auto px-8 py-8 border-t-gray-400  max-w-[1400px]">
                          
                          <div className="grid grid-cols-4 gap-x-8 gap-y-4">
                            {/* Column 1: INDUSTRIES */}
                            <div>
                              <h3 className="text-gray-700 font-bold text-sm mb-2 tracking-wider">
                                Enterprise Architecture & Design
                              </h3>
                              <ul className="space-y-2">
                                {[
                                  "Solution Architecture Planning",
                                  "System Design & Scalability",
                                  "Cloud-Native Architecture",
                                  "Microservices Architecture",
                                  "Legacy System Modernization",
                                ].map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-center gap-2 group/item cursor-pointer"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    <Link
                                      href={`/services/${item
                                        .toLowerCase()
                                        .replace(/ /g, "-")}`}
                                      className="text-[12px] text-gray-600 hover:text-accent transition-colors"
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 2: INTEGRATIONS */}
                            <div>
                              <h3 className="text-gray-700 font-bold text-sm mb-2 tracking-wider">
                                Artificial Intelligence & Automation
                              </h3>
                              <ul className="space-y-2">
                                {[
                                  "AI-Powered Chatbots",
                                  "Intelligent Virtual Assistants",
                                  "Computer Vision Solutions",
                                  "Natural Language Processing (NLP)",
                                  "Predictive Analytics",
                                  "Business Process Automation",
                                  "AI Systems Integration",
                                ].map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-center gap-2 group/item cursor-pointer"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    <Link
                                      href={`/services/${item
                                        .toLowerCase()
                                        .replace(/ /g, "-")}`}
                                      className="text-[12px] text-gray-600 hover:text-accent transition-colors"
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 3: SOLUTIONS */}
                            <div>
                              <h3 className="text-gray-700 font-bold text-sm mb-2 tracking-wider">
                                Cybersecurity & Digital Trust
                              </h3>
                              <ul className="space-y-1">
                                {[
                                  "Network Security & Protection",
                                  "Threat Monitoring & Response",
                                  "Vulnerability Assessment & Penetration Testing (VAPT)",
                                  "Security Operations (SOC)",
                                  "Identity & Access Management (IAM)",
                                  "Data Encryption & Privacy",
                                  "Risk & Compliance Security",
                                ].map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-center gap-2 group/item cursor-pointer"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    <Link
                                      href={`/services/${item
                                        .toLowerCase()
                                        .replace(/ /g, "-")}`}
                                      className="text-[12px] text-gray-600 hover:text-accent transition-colors"
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 5: Digital Infrastructure */}
                            <div>
                              <h3 className="text-gray-700 font-bold text-sm mb-2 tracking-wider  ">
                                Digital Infrastructure & Cloud Strategy
                              </h3>
                              <ul className="space-y-2">
                                {[
                                  "Cloud Architecture & Migration",
                                  "Hybrid & Multi-Cloud Solutions",
                                  "DevSecOps Engineering",
                                  "Disaster Recovery & Business Continuity",
                                  "Enterprise Systems Integration",
                                  "IT Consulting & Technology Strategy",
                                ].map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-center gap-2 group/item cursor-pointer"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    <Link
                                      href={`/services/${item
                                        .toLowerCase()
                                        .replace(/ /g, "-")}`}
                                      className="text-[12px] text-gray-600 hover:text-accent transition-colors"
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 6:  */}
                            <div>
                              <h3 className="text-gray-700 font-bold text-sm mb-2 tracking-wider">
                                Governance, Risk & Compliance (GRC)
                              </h3>
                              <ul className="space-y-2">
                                {[
                                  " IT Policy & Governance Frameworks",
                                  "Regulatory Compliance (ISO, GDPR, HIPAA)",
                                  "Risk Assessment & Audits",
                                  "Data Privacy Management",
                                  "Compliance Reporting & Documentation",
                                  "Business Continuity Planning (GRC Focus)",
                                ].map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-center gap-2 group/item cursor-pointer"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    <Link
                                      href={`/services/${item
                                        .toLowerCase()
                                        .replace(/ /g, "-")}`}
                                      className="text-[12px] text-gray-600 hover:text-accent transition-colors"
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 7:  */}
                            <div>
                              <h3 className="text-gray-700 font-bold text-sm mb-2 tracking-wider">
                                Web3 & Blockchain Solutions
                              </h3>
                              <ul className="space-y-2">
                                {[
                                  "Enterprise Blockchain Development",
                                  "Smart Contract Development & Audits",
                                  " Decentralized Applications (DApps)",
                                  "Tokenization Solutions",
                                  "NFT Platforms",
                                  "Web3 Consulting & Advisory",
                                ].map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-center gap-2 group/item cursor-pointer"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    <Link
                                      href={`/services/${item
                                        .toLowerCase()
                                        .replace(/ /g, "-")}`}
                                      className="text-[12px] text-gray-600 hover:text-accent transition-colors"
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 8:  */}
                            <div>
                              <h3 className="text-gray-700 font-bold text-sm mb-2 tracking-wider">
                                Immersive & Emerging Technologies
                              </h3>
                              <ul className="space-y-2">
                                {[
                                  "AR / VR Application Development",
                                  " Digital Twin Solutions",
                                  "Metaverse Experiences",
                                  "3D Modeling & Simulation",
                                  "Innovation Prototyping",
                                ].map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-center gap-2 group/item cursor-pointer"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                    <Link
                                      href={`/services/${item
                                        .toLowerCase()
                                        .replace(/ /g, "-")}`}
                                      className="text-[12px] text-gray-600 hover:text-accent transition-colors"
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              className="lg:hidden ml-auto text-2xl text-[#1a2e44]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
