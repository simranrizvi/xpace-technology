"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram,
  FaYoutube, FaEnvelope, FaMapMarkerAlt, FaBars, FaTimes, FaChevronDown
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { 
      name: "Solutions & Services", 
      href: "/services", 
      isMega: true,
      subItems: ["Web Dev", "App Dev", "Cloud", "SEO"] 
    },
    { name: "Industries", href: "/industries" },
    { name: "Testimonial", href: "/testimonial" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Appointment", href: "/appointment" },
  ];

  return (
    <nav className="w-full bg-white font-sans">
      <div className="flex flex-row items-stretch">
        
      
       {/* LEFT: Logo Section with Image */}
<div className="bg-primary min-w-[220px] py-8 mt-6 px-6 relative border-r-[7px] border-accent  flex items-center justify-center">
  <Link href="/">
    <div className="relative w-full max-w-[150px]">
      <img
        src="/xpace white logo.png" // Aapki file ka sahi path yahan aayega
        alt="XPACE Technologies"
        className="w-full h-auto object-contain"
      />
    </div>
  </Link>
</div>

        {/* RIGHT: Top Bar + Nav Links */}
        <div className="flex-1 flex flex-col">
          
          {/* Top Contact Bar (Grey Box) */}
          <div className="bg-[#f2f5f7] py-4 px-10 flex justify-between items-center mr-10 lg:mr-20">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-3 text-secondary text-[13px]">
                <FaEnvelope className="text-[#e31e24] text-sm" />
                <span>info@xpacetechnologies.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-500 text-[13px]">
                <FaMapMarkerAlt className="text-[#e31e24] text-sm" />
                <span className="leading-tight">
                  Office No. 406, 4th floor, Ceasers tower, Shahrah E Faisal<br/>
                  Karachi, Pakistan
                </span>
              </div>
            </div>

            <div className="flex items-center gap-5 text-[#1a2e44] text-sm">
              <FaTwitter className="cursor-pointer hover:text-[#e31e24]" />
              <FaFacebookF className="cursor-pointer hover:text-[#e31e24]" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#e31e24]" />
              <FaInstagram className="cursor-pointer hover:text-[#e31e24]" />
              <FaYoutube className="cursor-pointer hover:text-[#e31e24]" />
            </div>
          </div>

          {/* Bottom Navigation Links */}
          <div className="flex-1 flex items-center px-10 relative">
            <div className="hidden lg:flex items-center gap-x-8 h-full">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group h-full flex items-center">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-[15px] font-medium transition-colors py-6
                      ${(pathname === link.href || (link.name === "Home" && pathname === "/")) 
                        ? "text-accent" 
                        : "text-secondary hover:text-accent"}`}
                  >
                    {link.name}
                    {link.isMega && <FaChevronDown className="text-[10px] ml-1" />}
                  </Link>

                  {/* Red Line: Animation Center to Outside */}
                  <span className={`absolute bottom-4 left-1/2 -translate-x-1/2 h-[2px] bg-accent transition-all duration-300 ease-in-out
                    ${(pathname === link.href || (link.name === "Home" && pathname === "/")) 
                      ? "w-full" 
                      : "w-0 group-hover:w-full"}`}>
                  </span>

                
                  {/* Mega Menu Dropdown */}
{link.isMega && (
  <div className="absolute top-full left-[-380px] w-[100vw] max-w-[1300px] bg-[#f8f9fa] shadow-2xl mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-8 grid grid-cols-4 gap-8 rounded-b-md">
    
    {/* Column 1: INDUSTRIES */}
    <div>
      <h3 className="text-gray-700 font-bold text-sm mb-4 border-b pb-2 tracking-wider">Enterprise Architecture & Design
</h3>
      <ul className="space-y-3">
        {["Solution Architecture Planning", "System Design & Scalability", "Cloud-Native Architecture", "Microservices Architecture", "Legacy System Modernization"].map((item) => (
          <li key={item} className="flex items-center gap-2 group/item cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <Link href={`/services/${item.toLowerCase().replace(/ /g, '-')}`} className="text-[13px] text-gray-600 hover:text-accent transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Column 2: INTEGRATIONS */}
    <div>
      <h3 className="text-gray-700 font-bold text-sm mb-4 border-b pb-2 tracking-wider">Artificial Intelligence & Automation
</h3>
      <ul className="space-y-3">
        {["AI-Powered Chatbots", "Intelligent Virtual Assistants", "Computer Vision Solutions", "Natural Language Processing (NLP)", "Predictive Analytics", "Business Process Automation", "AI Systems Integration"].map((item) => (
          <li key={item} className="flex items-center gap-2 group/item cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
             <Link href={`/services/${item.toLowerCase().replace(/ /g, '-')}`} className="text-[13px] text-gray-600 hover:text-accent transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Column 3: SOLUTIONS */}
    <div>
      <h3 className="text-gray-700 font-bold text-sm mb-4 border-b pb-2 tracking-wider">Cybersecurity & Digital Trust
</h3>
      <ul className="space-y-3">
        {["Network Security & Protection", "Threat Monitoring & Response", "Vulnerability Assessment & Penetration Testing (VAPT)", "Security Operations (SOC)", "Identity & Access Management (IAM)", "Data Encryption & Privacy"].map((item) => (
          <li key={item} className="flex items-center gap-2 group/item cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <Link href={`/services/${item.toLowerCase().replace(/ /g, '-')}`} className="text-[13px] text-gray-600 hover:text-accent transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Column 4: MOBILITY */}
    <div>
      <h3 className="text-gray-700 font-bold text-sm mb-4 border-b pb-2  tracking-wider">Risk & Compliance Security 
</h3>
      <ul className="space-y-3">
        {["Risk & Compliance Security"].map((item) => (
          <li key={item} className="flex items-center gap-2 group/item cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <Link href={`/services/${item.toLowerCase().replace(/ /g, '-')}`} className="text-[13px] text-gray-600 hover:text-accent transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

     {/* Column 5: Digital Infrastructure */}
    <div>
      <h3 className="text-gray-700 font-bold text-sm mb-4 border-b pb-2 tracking-wider">Digital Infrastructure & Cloud Strategy
 
</h3>
      <ul className="space-y-3">
        {["Cloud Architecture & Migration", "Hybrid & Multi-Cloud Solutions", "DevSecOps Engineering", "Disaster Recovery & Business Continuity", "Enterprise Systems Integration", "IT Consulting & Technology Strategy"].map((item) => (
          <li key={item} className="flex items-center gap-2 group/item cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <Link href={`/services/${item.toLowerCase().replace(/ /g, '-')}`} className="text-[13px] text-gray-600 hover:text-accent transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>


 {/* Column 6:  */}
    <div>
      <h3 className="text-gray-700 font-bold text-sm mb-4 border-b pb-2 tracking-wider">Governance, Risk & Compliance (GRC)
 
</h3>
      <ul className="space-y-3">
        {[" IT Policy & Governance Frameworks", "Regulatory Compliance (ISO, GDPR, HIPAA)", "Risk Assessment & Audits", "Data Privacy Management", "Compliance Reporting & Documentation","Business Continuity Planning (GRC Focus)"].map((item) => (
          <li key={item} className="flex items-center gap-2 group/item cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <Link href={`/services/${item.toLowerCase().replace(/ /g, '-')}`} className="text-[13px] text-gray-600 hover:text-accent transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* Column 7:  */}
    <div>
      <h3 className="text-gray-700 font-bold text-sm mb-4 border-b pb-2 tracking-wider">Web3 & Blockchain Solutions

 
</h3>
      <ul className="space-y-3">
        {["Enterprise Blockchain Development", "Smart Contract Development & Audits", " Decentralized Applications (DApps)", "Tokenization Solutions", "NFT Platforms","Web3 Consulting & Advisory"].map((item) => (
          <li key={item} className="flex items-center gap-2 group/item cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <Link href={`/services/${item.toLowerCase().replace(/ /g, '-')}`} className="text-[13px] text-gray-600 hover:text-accent transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>

 {/* Column 8:  */}
    <div>
      <h3 className="text-gray-700 font-bold text-sm mb-4 border-b pb-2 tracking-wider">Immersive & Emerging Technologies

 
</h3>
      <ul className="space-y-3">
        {["AR / VR Application Development", " Digital Twin Solutions", "Metaverse Experiences", "3D Modeling & Simulation", ": Innovation Prototyping"].map((item) => (
          <li key={item} className="flex items-center gap-2 group/item cursor-pointer">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <Link href={`/services/${item.toLowerCase().replace(/ /g, '-')}`} className="text-[13px] text-gray-600 hover:text-accent transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>


  </div>
)}



                </div>
              ))}
            </div>





            {/* Mobile Toggle Button */}
            <button className="lg:hidden ml-auto text-2xl" onClick={() => setIsOpen(!isOpen)}>
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-[#1a2e44] z-[100] transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 text-right"><FaTimes className="text-white text-3xl inline-block" onClick={() => setIsOpen(false)} /></div>
        <div className="flex flex-col items-center gap-8 mt-10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-white text-2xl font-bold italic">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;