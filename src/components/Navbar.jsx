"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Cpu,
  ShieldCheck,
  Cloud,
  Globe,
  Layers,
  Search,
  Mail,
  Phone, MapPin,Twitter, Facebook, Linkedin, Instagram, Youtube
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSolution, setActiveSolution] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setHoveredService(null);
  }, [activeSolution]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const companyLinks = [
    { title: "About Us", link: "/about" },
    { title: "Technology We Use", link: "/technology" },
    { title: "Research & Development", link: "/research" },
    { title: "Partnerships & Alliances", link: "/partnerships" },
    { title: "Careers", link: "/careers" },
  ];

  const insightsLinks = [
    { title: "Case Studies", link: "/case-studies" },
    { title: "Testimonials", link: "/testimonials" },
    { title: "FAQs", link: "/faqs" },
  ];

  const solutionsData = [
    {
      id: 0,
      title: "Enterprise Architecture",
      desc: "Scalable systems for modern businesses.",
      icon: <Layers className="w-5 h-5" />,
      mainImage:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      items: [
        {
          name: "Solution Architecture Planning",
          link: "/services/solution-architecture-planning",
          image:
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "System Design & Scalability",
          link: "/services/system-design-scalability",
          image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "Cloud-Native Architecture",
          link: "/services/cloud-native-achitecture",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "Microservices & Architecture",
          link: "/services/microservices-architecture",
          image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "Legacy System & Modernization",
          link: "/services/legacy-system-modernization",
          image:
            "https://images.unsplash.com/photo-1531297420497-0b91b5a9783b?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
    {
      id: 1,
      title: "Artificial Intelligence & Automation",
      desc: "Intelligent bots and process automation.",
      icon: <Cpu className="w-5 h-5" />,
      mainImage:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      items: [
        {
          name: "AI-Powered Chatbots",
          link: "/services/ai-powered-chatbots",
          image:
            "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "Intelligent Virtual Assistants",
          link: "/services/intelligent-virtual-assistants",
          image:
            "https://images.unsplash.com/photo-1596558450255-7c0b09470891?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "Computer Vision Solution",
          link: "/services/computer-vision-solutions",
          image:
            "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "Natural Language Processing",
          link: "/services/natural-language-processing",
          image:
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: " Predictive Analytics",
          link: "/services/predictive-analytics",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        },
          {
          name: " Business Process Automation",
          link: "/services/business-process-automation",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        },
          {
          name: " AI Systems Integration",
          link: "/services/ai-systems-integration",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
    {
      id: 2,
      title: "Cybersecurity",
      desc: "Protecting your digital assets 24/7.",
      icon: <ShieldCheck className="w-5 h-5" />,
      mainImage:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      items: [
        {
          name: "Network Security & Protection",
          link: "/services/network-security-protection",
          image:
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "Threat Monitoring & Response",
          link: "/services/threat-monitoring-&-response",
          image:
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: " Vulnerability Assessment & Penetration Testing (VAPT)",
          link: "/services/vulnerability-assessment",
          image:
            "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: " Security Operations (SOC)",
          link: "/services/security-o`perations",
          image:
            "https://images.unsplash.com/photo-1614064548237-096f735f344f?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "Identity & Access Management ",
          link: "/services/identity-&-access-management",
          image:
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
        },
         {
          name: "Data Encryption & Privacy ",
          link: "/services/data-encryption-&-privacy",
          image:
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
        },
         {
          name: "Risk & Compliance Security ",
          link: "/services/risk-&-compliance-security",
          image:
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
    {
      id: 3,
      title: "Digital Infrastructure & Cloud Strategy",
      desc: "Seamless migration and management.",
      icon: <Cloud className="w-5 h-5" />,
      mainImage:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
      items: [
        {
          name: "Cloud Architecture & Migration",
          link: "/services/cloud-architecture-&-migration",
          image:
            "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "Hybrid & Multi-Cloud Solutions",
          link: "/services/hybrid-&-multi-cloud-solutions",
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "DevSecOps Engineering",
          link: "/services/devsecops-engineering",
          image:
            "https://images.unsplash.com/photo-1667372393119-c81c0cda7121?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "Disaster Recovery & Business Continuity",
          link: "/services/disaster-recovery",
          image:
            "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "Enterprise Systems Integration",
          link: "/services/enterprise-systems-integration",
          image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        },
         {
          name: "IT Consulting & Technology Strategy",
          link: "/services/it-consulting-&-technology-strategy",
          image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
    {
      id: 4,
      title: "Governance, Risk & Compliance (GRC)",
      desc: "Decentralized future-ready tech.",
      icon: <Globe className="w-5 h-5" />,
      mainImage:
        "https://images.unsplash.com/photo-1621504450168-b8c4375b2b80?auto=format&fit=crop&q=80&w=800",
      items: [
        {
          name: "IT Policy & Governance Frameworks",
          link: "/services/it-policy-&-governance-frameworks",
          image:
            "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: " Regulatory Compliance (ISO, GDPR, HIPAA)",
          link: "/services/regulatory-compliance",
          image:
            "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "Risk Assessment & Audits",
          link: "/services/risk-assessment-audits",
          image:
            "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "Data Privacy Management",
          link: "/services/data-privacy-management",
          image:
            "https://images.unsplash.com/photo-1622630998477-20aa696fa405?auto=format&fit=crop&q=80&w=800",
        },
        {
          name: "Compliance Reporting & Documentation",
          link: "/services/compliance-reporting-documentation",
          image:
            "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
        },
          {
          name: "Business Continuity Planning (GRC Focus)",
          link: "/services/business-continuity-planning",
          image:
            "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
        },
      ],
    },
  ];

  const activePreviewData = hoveredService
    ? { title: hoveredService.name, image: hoveredService.image, isSub: true }
    : {
        title: solutionsData[activeSolution].title,
        image: solutionsData[activeSolution].mainImage,
        isSub: false,
      };

  return (
    <div className="font-sans text-slate-800 relative">
      {/* MAIN NAVBAR */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <div className="flex items-stretch">
          {/* LOGO SECTION - Full Height */}
          <div className="bg-[#1a2e44] min-w-[180px] relative border-r-[7px] border-[#e31e24] flex items-center justify-center z-30 shrink-0">
            <Link href="/" className="py-8 px-6 cursor-pointer">
              <img
                src="/xpace white logo.png"
                alt="XPACE"
                className="w-[140px] h-auto object-contain"
              />
            </Link>
          </div>

          {/* RIGHT SECTION - Top Bar + Navigation */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* TOP STRIP */}
            <div className="hidden lg:flex justify-between items-center px-8 py-2.5 text-[11px]  font-semibold bg-[#F4F5F8] text-black">
             <div className="flex gap-6 opacity-80">
  <Link
    href="mailto:info@xpacetechnologies.com"
    className="flex items-center gap-2 hover:text-[#dc1e25] transition-colors"
  >
    <Mail size={12} className="text-[#dc1e25]" /> info@xpacetechnologies.com
  </Link>

  <Link
    href="https://goo.gl/maps/your-location" // optional: link to Google Maps
    className="flex items-center gap-2 hover:text-[#dc1e25] transition-colors"
  >
    <MapPin size={12} className="text-[#dc1e25]" /> Suite 2, 4th floor, CONNEKT Commercial Hub RJ Mall, Karachi, Pakistan
  </Link>
</div>
           

  {/* Social Media Icons */}
  <div className="flex items-center gap-4">
    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-[#ff4d4d] transition-colors">
      <Twitter size={14}/>
    </a>
    <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-[#ff4d4d] transition-colors">
      <Facebook size={14} />
    </a>
    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-[#ff4d4d] transition-colors">
      <Linkedin size={14} />
    </a>
    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-[#ff4d4d] transition-colors">
      <Instagram size={14} />
    </a>
    <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-[#ff4d4d] transition-colors">
      <Youtube size={14} />
    </a>
  </div>
            </div>

            {/* NAVIGATION LINKS */}
            <div className="flex-1 flex items-center justify-between px-8">
              {/* DESKTOP MENU */}
              <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                <NavLink text="Home" href="/" />
                <SimpleDropdown title="Company" links={companyLinks} />

                {/* MEGA MENU */}
                <div className="group static h-full flex items-center">
                  <button className="flex items-center gap-1 font-semibold text-sm text-[#203253] hover:text-[#dc1e25] py-4 transition-colors whitespace-nowrap">
                    Solutions <ChevronDown size={14} strokeWidth={3} />
                  </button>

                  <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
                    <div className="max-w-7xl mx-auto flex h-[450px]">
                      {/* Sidebar Categories */}
                      <div className="w-[22%] bg-slate-50 py-8 border-r border-gray-100">
                        <div className="px-6 mb-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Expertise
                        </div>
                        {solutionsData.map((sol) => (
                          <div
                            key={sol.id}
                            onMouseEnter={() => setActiveSolution(sol.id)}
                            className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-all border-l-[3px]
                              ${
                                activeSolution === sol.id
                                  ? "bg-white border-[#dc1e25] text-[#dc1e25] shadow-sm"
                                  : "border-transparent text-gray-600 hover:bg-gray-100 hover:text-[#203253]"
                              }
                            `}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={
                                  activeSolution === sol.id
                                    ? "text-[#dc1e25]"
                                    : "text-gray-400"
                                }
                              >
                                {sol.icon}
                              </span>
                              <span className="font-semibold text-sm">
                                {sol.title}
                              </span>
                            </div>
                            {activeSolution === sol.id && (
                              <ChevronRight size={14} />
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Services List */}
                      <div className="w-[48%] p-10 bg-white flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-[#203253] mb-1">
                          {solutionsData[activeSolution].title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-8 max-w-md">
                          {solutionsData[activeSolution].desc}
                        </p>

                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                          {solutionsData[activeSolution].items.map(
                            (item, idx) => (
                              <Link
                                key={idx}
                                href={item.link}
                                onMouseEnter={() => setHoveredService(item)}
                                className="flex items-center group/item text-sm font-medium text-gray-600 hover:text-[#dc1e25] transition-colors p-2 rounded hover:bg-slate-50"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3 group-hover/item:bg-[#dc1e25] transition-colors"></span>
                                {item.name}
                              </Link>
                            )
                          )}
                        </div>

                        <div className="mt-10 pt-6 border-t border-gray-100">
                          {/* <Link 
                            href={`/services/${solutionsData[activeSolution].title.toLowerCase().replace(/ /g, '-')}`}
                            className="inline-flex items-center text-sm font-bold text-[#203253] hover:text-[#dc1e25] transition-colors"
                          >
                            View All {solutionsData[activeSolution].title} Services <ArrowRight size={14} className="ml-2" />
                          </Link> */}
                        </div>
                      </div>

                      {/* Visual Preview */}
                      <div className="w-[30%] h-[90%] rounded relative overflow-hidden bg-slate-900">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-all duration-500  ease-in-out transform hover:scale-105"
                          style={{
                            backgroundImage: `url(${activePreviewData.image})`,
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-[#203253]/90 via-[#203253]/40 to-transparent"></div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
                          <span
                            className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wide rounded mb-3 transition-colors duration-300
                             ${
                               activePreviewData.isSub
                                 ? "bg-[#dc1e25] text-white"
                                 : "bg-white/20 text-white backdrop-blur-sm"
                             }`}
                          >
                            {activePreviewData.isSub
                              ? "Service Highlight"
                              : "Category Overview"}
                          </span>

                          <h4 className="text-xl font-bold mb-2 leading-tight drop-shadow-md">
                            {activePreviewData.title}
                          </h4>

                          <p className="text-xs text-gray-200 mb-4 opacity-90 leading-relaxed line-clamp-3">
                            {activePreviewData.isSub
                              ? `Explore our advanced capabilities in ${activePreviewData.title} designed to accelerate your business growth.`
                              : solutionsData[activeSolution].desc}
                          </p>

                          <Link
                            href="#"
                            className="text-xs font-bold flex items-center hover:gap-2 transition-all"
                          >
                            {activePreviewData.isSub
                              ? "Learn More"
                              : "View Case Studies"}{" "}
                            <ArrowRight size={12} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <NavLink text="Industries" href="/industries" />
                <SimpleDropdown title="Insights" links={insightsLinks} />
                <NavLink text="Contact" href="/contact" />
              </div>

              {/* CTA */}
              <div className="hidden lg:flex items-center gap-5">
                <button
                  className="text-gray-400 hover:text-[#dc1e25] transition-colors"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
                <div className="h-6 w-[1px] bg-gray-200"></div>
                <Link
                  href="/proposal"
                  className="relative overflow-hidden px-6 py-2.5 bg-[#dc1e25] text-white text-sm font-bold rounded shadow-lg group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Request Proposal <ArrowRight size={16} />
                  </span>
                  <div className="absolute inset-0 bg-[#b0141a] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
              </div>

              {/* MOBILE TOGGLE */}
              <button
                className="lg:hidden text-[#203253]"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] flex justify-end transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        <div
          className={`relative w-[85%] max-w-[350px] bg-white h-full shadow-2xl flex flex-col transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex justify-between items-center border-b border-gray-100">
            <span className="font-bold text-xl text-[#203253]">XPACE Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 text-[#dc1e25]"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <MobileLink text="Home" href="/" />
            <MobileAccordion title="Company" items={companyLinks} />
            <MobileAccordion
              title="Solutions"
              items={solutionsData.map((s) => ({
                title: s.title,
                link: `/services/${s.title.toLowerCase().replace(/ /g, "-")}`,
              }))}
            />
            <MobileLink text="Industries" href="/industries" />
            <MobileAccordion title="Insights" items={insightsLinks} />
            <MobileLink text="Contact Us" href="/contact" />
          </div>
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <Link
              href="/proposal"
              className="block w-full py-3 text-center bg-[#203253] text-white font-bold rounded shadow hover:bg-[#1a2844] transition-colors"
            >
              Request Proposal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// HELPER COMPONENTS
const SimpleDropdown = ({ title, links }) => (
  <div className="relative group h-full flex items-center">
    <button className="flex items-center gap-1 font-semibold text-sm text-[#203253] hover:text-[#dc1e25] py-4 transition-colors whitespace-nowrap">
      {title} <ChevronDown size={14} strokeWidth={3} />
    </button>
    <div className="absolute top-full left-0 w-56 bg-white border-t-2 border-[#dc1e25] shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
      <div className="py-2">
        {links.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="block px-5 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#dc1e25] font-medium transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const NavLink = ({ text, href }) => (
  <Link
    href={href}
    className="text-sm font-semibold transition-colors relative group text-[#203253] hover:text-[#dc1e25] whitespace-nowrap"
  >
    {text}
    <span className="absolute -bottom-1 left-0 h-[2px] bg-[#dc1e25] transition-all duration-300 w-0 group-hover:w-full"></span>
  </Link>
);

const MobileLink = ({ text, href }) => (
  <Link
    href={href}
    className="block text-lg font-bold text-[#203253] hover:text-[#dc1e25] transition-colors"
  >
    {text}
  </Link>
);

const MobileAccordion = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-lg font-bold text-[#203253] mb-2"
      >
        {title}{" "}
        <ChevronDown
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-3 border-l-2 border-gray-100 mb-4">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="block text-sm font-medium text-gray-600 hover:text-[#dc1e25] transition-colors"
            >
              {item.title || item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
