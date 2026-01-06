// "use client";
// import React, { useState } from "react";

// import Link from "next/link";
// import {
//   FaTwitter,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
//   FaYoutube,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaBars,
//   FaChevronDown,
// } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentPath, setCurrentPath] = useState("/");

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     {
//       name: "Solutions & Services",
//       href: "/services",
//       isMega: true,
//     },
//     { name: "Technology We Use", href: "#" },
//     { name: "Industries", href: "/industries" },
//     { name: "Research & Development", href: "#" },
//     { name: "Case Studies", href: "#" },
//     { name: "Testimonial", href: "/testimonial" },
//     { name: "Partnerships & Alliances", href: "#" },
//     { name: "Careers", href: "/careers" },
//     { name: "FAQs", href: "/faqs" },
//     { name: "Request a Proposal", href: "#" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <nav className="w-full bg-white font-sans relative">
//       <div className="flex flex-row items-stretch">
//         {/* LEFT: Logo Section */}
//         <div className="bg-[#1a2e44] min-w-[140px] py-8 mt-6 px-4 relative border-r-[7px] border-[#e31e24] flex items-center justify-center z-30">
//           <a href="/">
//             <div className="relative w-full max-w-[120px]">
//               <img
//                 src="/xpace white logo.png"
//                 alt="XPACE"
//                 className="w-full h-auto object-contain"
//               />
//             </div>
//           </a>
//         </div>

//         {/* RIGHT: Top Bar + Nav Links */}
//         <div className="flex-1 flex flex-col min-w-0">
//           {/* Top Contact Bar */}
//           <div className="bg-[#f2f5f7] py-4 px-6 flex justify-between items-center mr-4 lg:mr-10">
//             <div className="flex items-center gap-6">
//               <div className="flex items-center gap-3 text-secondary text-[12px]">
//                 <FaEnvelope className="text-[#e31e24]" />
//                 <span className="hidden xl:inline">
//                   info@xpacetechnologies.com
//                 </span>
//               </div>
//               <div className="flex items-center gap-3 text-gray-500 text-[11px]">
//                 <FaMapMarkerAlt className="text-[#e31e24]" />
//                 <span>Karachi, Pakistan</span>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 text-[#1a2e44] text-sm">
//               <FaTwitter className="hover:text-[#e31e24] cursor-pointer transition-colors" />
//               <FaFacebookF className="hover:text-[#e31e24] cursor-pointer transition-colors" />
//               <FaLinkedinIn className="hover:text-[#e31e24] cursor-pointer transition-colors" />
//               <FaInstagram className="hover:text-[#e31e24] cursor-pointer transition-colors" />
//               <FaYoutube className="hover:text-[#e31e24] cursor-pointer transition-colors" />
//             </div>
//           </div>

//           {/* Nav Links Section */}
//           <div className="flex-1 flex items-center px-4 relative">
//             <div className="hidden lg:flex items-center gap-x-2 xl:gap-x-3 h-full w-full justify-between">
//               {navLinks.map((link) => (
//                 <div
//                   key={link.name}
//                   className="relative group h-full flex items-center shrink-0"
//                 >
//                   <a
//                     href={link.href}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       setCurrentPath(link.href);
//                     }}
//                     className={`flex items-center gap-1 text-[9px] xl:text-[13px] transition-colors py-6 whitespace-nowrap
//                       ${
//                         currentPath === link.href ||
//                         (link.name === "Home" && currentPath === "/")
//                           ? "text-[#e31e24]"
//                           : "text-[#1a2e44] hover:text-[#e31e24]"
//                       }`}
//                   >
//                     {link.name}
//                     {link.isMega && (
//                       <FaChevronDown className="text-[8px] xl:text-[9px] ml-1" />
//                     )}
//                   </a>

//                   {/* Red Underline */}
//                   <span
//                     className={`absolute bottom-5 h-[2px] bg-[#e31e24] left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out
//                       ${
//                         currentPath === link.href
//                           ? "w-full"
//                           : "w-0 group-hover:w-full"
//                       }`}
//                   ></span>

//                   {/* Mega Menu Dropdown - Ab group hover se kaam karega */}
//                   {link.isMega && (
//                     // <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
//                     //   <div className="bg-[#f8f9fa] shadow-2xl rounded-b-md">
//                     //     <div className="container mx-auto px-8 py-10 max-w-[1400px]">
//                     //       <div className="grid grid-cols-4 gap-x-8 gap-y-12">
//                     <div className="absolute top-full left-0 w-screen max-w-[100vw] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none group-hover:pointer-events-auto">
//                       {/* Ye div ensures ke menu logo ke bilkul neechay se start na ho balkay poori screen cover kare */}
//                       <div className="fixed left-0 right-0 bg-[#f8f9fa]  ">
                        
                        
//                         <div className="container mx-auto px-8 py-8 border-t-gray-400  max-w-[1400px]">
                          
//                           <div className="grid grid-cols-4 gap-x-8 gap-y-4">
//                             {/* Column 1: INDUSTRIES */}
//                             <div>
//                               <h3 className="text-gray-700 font-bold text-sm mb-2 tracking-wider">
//                                 Enterprise Architecture & Design
//                               </h3>
//                               <ul className="space-y-2">
//                                 {[
//                                   "Solution Architecture Planning",
//                                   "System Design & Scalability",
//                                   "Cloud-Native Architecture",
//                                   "Microservices Architecture",
//                                   "Legacy System Modernization",
//                                 ].map((item) => (
//                                   <li
//                                     key={item}
//                                     className="flex items-center gap-2 group/item cursor-pointer"
//                                   >
//                                     <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
//                                     <Link
//                                       href={`/services/${item
//                                         .toLowerCase()
//                                         .replace(/ /g, "-")}`}
//                                       className="text-[12px] text-gray-600 hover:text-accent transition-colors"
//                                     >
//                                       {item}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             {/* Column 2: INTEGRATIONS */}
//                             <div>
//                               <h3 className="text-gray-700 font-bold text-sm mb-2 tracking-wider">
//                                 Artificial Intelligence & Automation
//                               </h3>
//                               <ul className="space-y-2">
//                                 {[
//                                   "AI-Powered Chatbots",
//                                   "Intelligent Virtual Assistants",
//                                   "Computer Vision Solutions",
//                                   "Natural Language Processing (NLP)",
//                                   "Predictive Analytics",
//                                   "Business Process Automation",
//                                   "AI Systems Integration",
//                                 ].map((item) => (
//                                   <li
//                                     key={item}
//                                     className="flex items-center gap-2 group/item cursor-pointer"
//                                   >
//                                     <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
//                                     <Link
//                                       href={`/services/${item
//                                         .toLowerCase()
//                                         .replace(/ /g, "-")}`}
//                                       className="text-[12px] text-gray-600 hover:text-accent transition-colors"
//                                     >
//                                       {item}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             {/* Column 3: SOLUTIONS */}
//                             <div>
//                               <h3 className="text-gray-700 font-bold text-sm mb-2 tracking-wider">
//                                 Cybersecurity & Digital Trust
//                               </h3>
//                               <ul className="space-y-1">
//                                 {[
//                                   "Network Security & Protection",
//                                   "Threat Monitoring & Response",
//                                   "Vulnerability Assessment & Penetration Testing (VAPT)",
//                                   "Security Operations (SOC)",
//                                   "Identity & Access Management (IAM)",
//                                   "Data Encryption & Privacy",
//                                   "Risk & Compliance Security",
//                                 ].map((item) => (
//                                   <li
//                                     key={item}
//                                     className="flex items-center gap-2 group/item cursor-pointer"
//                                   >
//                                     <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
//                                     <Link
//                                       href={`/services/${item
//                                         .toLowerCase()
//                                         .replace(/ /g, "-")}`}
//                                       className="text-[12px] text-gray-600 hover:text-accent transition-colors"
//                                     >
//                                       {item}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             {/* Column 5: Digital Infrastructure */}
//                             <div>
//                               <h3 className="text-gray-700 font-bold text-sm mb-2 tracking-wider  ">
//                                 Digital Infrastructure & Cloud Strategy
//                               </h3>
//                               <ul className="space-y-2">
//                                 {[
//                                   "Cloud Architecture & Migration",
//                                   "Hybrid & Multi-Cloud Solutions",
//                                   "DevSecOps Engineering",
//                                   "Disaster Recovery & Business Continuity",
//                                   "Enterprise Systems Integration",
//                                   "IT Consulting & Technology Strategy",
//                                 ].map((item) => (
//                                   <li
//                                     key={item}
//                                     className="flex items-center gap-2 group/item cursor-pointer"
//                                   >
//                                     <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
//                                     <Link
//                                       href={`/services/${item
//                                         .toLowerCase()
//                                         .replace(/ /g, "-")}`}
//                                       className="text-[12px] text-gray-600 hover:text-accent transition-colors"
//                                     >
//                                       {item}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             {/* Column 6:  */}
//                             <div>
//                               <h3 className="text-gray-700 font-bold text-sm mb-2 tracking-wider">
//                                 Governance, Risk & Compliance (GRC)
//                               </h3>
//                               <ul className="space-y-2">
//                                 {[
//                                   " IT Policy & Governance Frameworks",
//                                   "Regulatory Compliance (ISO, GDPR, HIPAA)",
//                                   "Risk Assessment & Audits",
//                                   "Data Privacy Management",
//                                   "Compliance Reporting & Documentation",
//                                   "Business Continuity Planning (GRC Focus)",
//                                 ].map((item) => (
//                                   <li
//                                     key={item}
//                                     className="flex items-center gap-2 group/item cursor-pointer"
//                                   >
//                                     <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
//                                     <Link
//                                       href={`/services/${item
//                                         .toLowerCase()
//                                         .replace(/ /g, "-")}`}
//                                       className="text-[12px] text-gray-600 hover:text-accent transition-colors"
//                                     >
//                                       {item}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             {/* Column 7:  */}
//                             <div>
//                               <h3 className="text-gray-700 font-bold text-sm mb-2 tracking-wider">
//                                 Web3 & Blockchain Solutions
//                               </h3>
//                               <ul className="space-y-2">
//                                 {[
//                                   "Enterprise Blockchain Development",
//                                   "Smart Contract Development & Audits",
//                                   " Decentralized Applications (DApps)",
//                                   "Tokenization Solutions",
//                                   "NFT Platforms",
//                                   "Web3 Consulting & Advisory",
//                                 ].map((item) => (
//                                   <li
//                                     key={item}
//                                     className="flex items-center gap-2 group/item cursor-pointer"
//                                   >
//                                     <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
//                                     <Link
//                                       href={`/services/${item
//                                         .toLowerCase()
//                                         .replace(/ /g, "-")}`}
//                                       className="text-[12px] text-gray-600 hover:text-accent transition-colors"
//                                     >
//                                       {item}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>

//                             {/* Column 8:  */}
//                             <div>
//                               <h3 className="text-gray-700 font-bold text-sm mb-2 tracking-wider">
//                                 Immersive & Emerging Technologies
//                               </h3>
//                               <ul className="space-y-2">
//                                 {[
//                                   "AR / VR Application Development",
//                                   " Digital Twin Solutions",
//                                   "Metaverse Experiences",
//                                   "3D Modeling & Simulation",
//                                   "Innovation Prototyping",
//                                 ].map((item) => (
//                                   <li
//                                     key={item}
//                                     className="flex items-center gap-2 group/item cursor-pointer"
//                                   >
//                                     <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
//                                     <Link
//                                       href={`/services/${item
//                                         .toLowerCase()
//                                         .replace(/ /g, "-")}`}
//                                       className="text-[12px] text-gray-600 hover:text-accent transition-colors"
//                                     >
//                                       {item}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             <button
//               className="lg:hidden ml-auto text-2xl text-[#1a2e44]"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <FaBars />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client"
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, ChevronRight, ArrowRight,
  Cpu, ShieldCheck, Cloud, Globe, 
  Layers, Search, Mail, Phone
} from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSolution, setActiveSolution] = useState(0); 
  const [isScrolled, setIsScrolled] = useState(false);
  
  // New State for Dynamic Image Preview
  // Default: Null means show the Category's main image
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset hovered service when category changes
  useEffect(() => {
    setHoveredService(null);
  }, [activeSolution]);

  // --- DATA STRUCTURES ---

  const companyLinks = [
    { title: "About Us", link: "#" },
    { title: "Technology We Use", link: "#" },
    { title: "Research & Development", link: "#" },
    { title: "Partnerships & Alliances", link: "#" },
    { title: "Careers", link: "#" }
  ];

  const insightsLinks = [
    { title: "Case Studies", link: "#" },
    { title: "Testimonials", link: "#" },
    { title: "FAQs", link: "#" }
  ];

  // UPDATED: Solutions Data with Images for every service
  const solutionsData = [
    {
      id: 0,
      title: "Enterprise Architecture",
      desc: "Scalable systems for modern businesses.",
      icon: <Layers className="w-5 h-5" />,
      // Main Category Image
      mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      items: [
        { name: "Solution Architecture Planning", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
        { name: "System Design & Scalability", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" },
        { name: "Cloud-Native Architecture", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
        { name: "Microservices", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" },
        { name: "Legacy Modernization", image: "https://images.unsplash.com/photo-1531297420497-0b91b5a9783b?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    {
      id: 1,
      title: "AI & Automation",
      desc: "Intelligent bots and process automation.",
      icon: <Cpu className="w-5 h-5" />,
      mainImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      items: [
        { name: "AI-Powered Chatbots", image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800" },
        { name: "Virtual Assistants", image: "https://images.unsplash.com/photo-1596558450255-7c0b09470891?auto=format&fit=crop&q=80&w=800" },
        { name: "Computer Vision", image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800" },
        { name: "NLP Solutions", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" },
        { name: "Predictive Analytics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    {
      id: 2,
      title: "Cybersecurity",
      desc: "Protecting your digital assets 24/7.",
      icon: <ShieldCheck className="w-5 h-5" />,
      mainImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      items: [
        { name: "Network Security", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" },
        { name: "SOC Monitoring", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
        { name: "VAPT Services", image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800" },
        { name: "Identity Management", image: "https://images.unsplash.com/photo-1614064548237-096f735f344f?auto=format&fit=crop&q=80&w=800" },
        { name: "Data Encryption", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    {
      id: 3,
      title: "Cloud Infrastructure",
      desc: "Seamless migration and management.",
      icon: <Cloud className="w-5 h-5" />,
      mainImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      items: [
        { name: "Cloud Migration", image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=800" },
        { name: "Hybrid Solutions", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
        { name: "DevSecOps", image: "https://images.unsplash.com/photo-1667372393119-c81c0cda7121?auto=format&fit=crop&q=80&w=800" },
        { name: "Disaster Recovery", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800" },
        { name: "Systems Integration", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    {
      id: 4,
      title: "Web3 & Blockchain",
      desc: "Decentralized future-ready tech.",
      icon: <Globe className="w-5 h-5" />,
      mainImage: "https://images.unsplash.com/photo-1621504450168-b8c4375b2b80?auto=format&fit=crop&q=80&w=800",
      items: [
        { name: "Enterprise Blockchain", image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800" },
        { name: "Smart Contracts", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800" },
        { name: "DApps", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800" },
        { name: "Tokenization", image: "https://images.unsplash.com/photo-1622630998477-20aa696fa405?auto=format&fit=crop&q=80&w=800" },
        { name: "NFT Platforms", image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800" }
      ]
    }
  ];

  // Helper to determine what to show in the preview box
  const activePreviewData = hoveredService 
    ? { title: hoveredService.name, image: hoveredService.image, isSub: true }
    : { title: solutionsData[activeSolution].title, image: solutionsData[activeSolution].mainImage, isSub: false };

  return (
    <div className="font-sans text-slate-800 relative">
      
      {/* --- TOP STRIP --- */}
      <div className="hidden lg:flex justify-between items-center px-8 py-2 text-[11px] uppercase tracking-widest font-semibold bg-[#203253] text-white">
        <div className="flex gap-6 opacity-80">
          <a href="#" className="hover:text-[#dc1e25] transition-colors">Global Presence</a>
          <a href="#" className="hover:text-[#dc1e25] transition-colors">Newsroom</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-[#dc1e25] transition-colors">
            <Phone size={12} /> +1 (555) 123-4567
          </a>
          <a href="mailto:contact@xpace.com" className="flex items-center gap-2 hover:text-[#dc1e25] transition-colors">
            <Mail size={12} /> contact@xpace.com
          </a>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-gray-100
        ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white py-4'}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 bg-[#203253] text-white flex items-center justify-center rounded-lg font-bold text-xl group-hover:bg-[#dc1e25] transition-colors duration-300 shadow-md">
                X
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-xl tracking-tighter text-[#203253]">XPACE</span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#dc1e25] uppercase">Technologies</span>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-8">
              
              <NavLink text="Home" href="#" active />
              <SimpleDropdown title="Company" links={companyLinks} />
              
              {/* --- MEGA MENU WITH DYNAMIC PREVIEW --- */}
              <div className="group static h-full flex items-center">
                <button className="flex items-center gap-1 font-medium text-[15px] text-[#203253] hover:text-[#dc1e25] py-4 transition-colors">
                  Solutions <ChevronDown size={14} strokeWidth={3} />
                </button>
                
                <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
                  <div className="max-w-7xl mx-auto flex h-[500px]"> {/* Increased height for better visuals */}
                    
                    {/* 1. Sidebar (Categories) */}
                    <div className="w-[22%] bg-slate-50 py-8 border-r border-gray-100">
                      <div className="px-6 mb-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Expertise</div>
                      {solutionsData.map((sol) => (
                        <div 
                          key={sol.id}
                          onMouseEnter={() => setActiveSolution(sol.id)}
                          className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-all border-l-[3px]
                            ${activeSolution === sol.id 
                              ? 'bg-white border-[#dc1e25] text-[#dc1e25] shadow-sm' 
                              : 'border-transparent text-gray-600 hover:bg-gray-100 hover:text-[#203253]'}
                          `}
                        >
                          <div className="flex items-center gap-3">
                            <span className={activeSolution === sol.id ? 'text-[#dc1e25]' : 'text-gray-400'}>{sol.icon}</span>
                            <span className="font-semibold text-sm">{sol.title}</span>
                          </div>
                          {activeSolution === sol.id && <ChevronRight size={14} />}
                        </div>
                      ))}
                    </div>

                    {/* 2. Middle (Services List) */}
                    <div className="w-[48%] p-10 bg-white flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-[#203253] mb-1">{solutionsData[activeSolution].title}</h3>
                      <p className="text-sm text-gray-500 mb-8 max-w-md">{solutionsData[activeSolution].desc}</p>
                      
                      <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                        {solutionsData[activeSolution].items.map((item, idx) => (
                          <a 
                            key={idx} 
                            href="#" 
                            // ON HOVER: Set the dynamic preview image
                            onMouseEnter={() => setHoveredService(item)}
                            // ON LEAVE: Optional - keep it or reset. Keeping it makes it stickier and nicer.
                            // onMouseLeave={() => setHoveredService(null)} 
                            className="flex items-center group/item text-sm font-medium text-gray-600 hover:text-[#dc1e25] transition-colors p-2 rounded hover:bg-slate-50"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 group-hover/item:bg-[#dc1e25] transition-colors"></span>
                            {item.name}
                          </a>
                        ))}
                      </div>

                      <div className="mt-10 pt-6 border-t border-gray-100">
                        <a href="#" className="inline-flex items-center text-sm font-bold text-[#203253] hover:text-[#dc1e25] transition-colors">
                          View All {solutionsData[activeSolution].title} Services <ArrowRight size={14} className="ml-2" />
                        </a>
                      </div>
                    </div>

                    {/* 3. Right (Dynamic Visual Preview) */}
                    <div className="w-[30%] relative overflow-hidden bg-slate-900">
                       {/* Background Image with Transition */}
                       <div 
                         className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out transform hover:scale-105"
                         style={{ backgroundImage: `url(${activePreviewData.image})` }}
                       >
                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#203253]/90 via-[#203253]/40 to-transparent"></div>
                       </div>

                       {/* Content Overlay */}
                       <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
                         <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wide rounded mb-3 transition-colors duration-300
                           ${activePreviewData.isSub ? 'bg-[#dc1e25] text-white' : 'bg-white/20 text-white backdrop-blur-sm'}`}>
                           {activePreviewData.isSub ? 'Service Highlight' : 'Category Overview'}
                         </span>
                         
                         <h4 className="text-xl font-bold mb-2 leading-tight drop-shadow-md">
                           {activePreviewData.title}
                         </h4>
                         
                         <p className="text-xs text-gray-200 mb-4 opacity-90 leading-relaxed line-clamp-3">
                           {activePreviewData.isSub 
                             ? `Explore our advanced capabilities in ${activePreviewData.title} designed to accelerate your business growth.` 
                             : solutionsData[activeSolution].desc}
                         </p>

                         <a href="#" className="text-xs font-bold flex items-center hover:gap-2 transition-all">
                           {activePreviewData.isSub ? 'Learn More' : 'View Case Studies'} <ArrowRight size={12} className="ml-1" />
                         </a>
                       </div>
                    </div>

                  </div>
                </div>
              </div>

              <NavLink text="Industries" href="#" />
              <SimpleDropdown title="Insights" links={insightsLinks} />
              <NavLink text="Contact" href="#" />
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <button className="text-gray-400 hover:text-[#dc1e25] transition-colors"><Search size={20} /></button>
              <div className="h-6 w-[1px] bg-gray-200"></div>
              <a href="#" className="relative overflow-hidden px-6 py-2.5 bg-[#dc1e25] text-white text-sm font-bold rounded shadow-lg group">
                <span className="relative z-10 flex items-center gap-2">Request Proposal <ArrowRight size={16} /></span>
                <div className="absolute inset-0 bg-[#b0141a] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button className="lg:hidden text-[#203253]" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU (Unchanged Logic, just rendering) */}
      <div className={`fixed inset-0 z-[60] flex justify-end transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`relative w-[85%] max-w-[350px] bg-white h-full shadow-2xl flex flex-col transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex justify-between items-center border-b border-gray-100">
             <span className="font-bold text-xl text-[#203253]">XPACE Menu</span>
             <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-[#dc1e25]"><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <MobileLink text="Home" href="#" />
            <MobileAccordion title="Company" items={companyLinks} />
            <MobileAccordion title="Solutions" items={solutionsData.map(s => ({title: s.title, link: '#'}))} />
            <MobileLink text="Industries" href="#" />
            <MobileAccordion title="Insights" items={insightsLinks} />
            <MobileLink text="Contact Us" href="#" />
          </div>
          <div className="p-6 border-t border-gray-100 bg-gray-50">
             <button className="w-full py-3 bg-[#203253] text-white font-bold rounded shadow hover:bg-[#1a2844]">Request Proposal</button>
          </div>
        </div>
      </div>

      {/* HERO SECTION DEMO */}
      {/* <div className="relative bg-[#f8fafc] h-[600px] flex items-center overflow-hidden">
        <div className="absolute right-0 top-20 w-[600px] h-[600px] bg-[#eef2ff] rounded-full blur-3xl opacity-50 -z-0"></div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
           <div className="max-w-3xl">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-[#dc1e25] animate-pulse"></span>
                <span className="text-xs font-bold text-[#203253] tracking-wide uppercase">Innovating Tomorrow</span>
             </div>
             <h1 className="text-5xl lg:text-7xl font-extrabold text-[#203253] leading-tight mb-6">
               Architecting the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dc1e25] to-[#b0141a]">Digital Future</span>
             </h1>
             <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-xl">XPACE delivers enterprise-grade AI, Cloud, and Security solutions designed to scale with your ambition.</p>
             <div className="flex gap-4">
                <button className="px-8 py-3 bg-[#203253] text-white font-bold rounded shadow-lg">Explore Solutions</button>
                <button className="px-8 py-3 bg-white text-[#203253] border border-gray-200 font-bold rounded hover:bg-gray-50">View Our Work</button>
             </div>
           </div>
        </div>
      </div> */}
    </div>
  );
};

// --- HELPER COMPONENTS ---

const SimpleDropdown = ({ title, links }) => (
  <div className="relative group h-full flex items-center">
    <button className="flex items-center gap-1 font-medium text-[15px] text-[#203253] hover:text-[#dc1e25] py-4 transition-colors">
      {title} <ChevronDown size={14} strokeWidth={3} />
    </button>
    <div className="absolute top-full left-0 w-56 bg-white border-t-2 border-[#dc1e25] shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
      <div className="py-2">
        {links.map((item, idx) => (
          <a key={idx} href={item.link} className="block px-5 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#dc1e25] font-medium transition-colors">
            {item.title}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const NavLink = ({ text, href, active }) => (
  <a href={href} className={`text-[15px] font-medium transition-colors relative group ${active ? 'text-[#dc1e25]' : 'text-[#203253] hover:text-[#dc1e25]'}`}>
    {text}
    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#dc1e25] transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
  </a>
);

const MobileLink = ({ text, href }) => (
  <a href={href} className="block text-lg font-bold text-[#203253] hover:text-[#dc1e25]">{text}</a>
);

const MobileAccordion = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full justify-between items-center text-lg font-bold text-[#203253] mb-2">
        {title} <ChevronDown size={18} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-3 border-l-2 border-gray-100 mb-4">
          {items.map((item, idx) => (
            <a key={idx} href={item.link} className="block text-sm font-medium text-gray-600 hover:text-[#dc1e25]">{item.title || item.name}</a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

