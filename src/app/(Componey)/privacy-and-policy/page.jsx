"use client";
import React, { useState, useEffect } from 'react';
import { 
  Menu, ChevronDown, Shield, Lock, Globe, FileText,
  CheckCircle, AlertCircle, Download, Mail, Building,
  Server, Cpu, Users, Eye, Trash2, Database,
  ArrowRight, ShieldCheck, Clock, ExternalLink,
  Calendar, User, Phone, MapPin
} from 'lucide-react';


/* --- MAIN PRIVACY POLICY PAGE --- */
const PrivacyPolicy2024 = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'introduction', 'information-collected', 'data-usage',
        'data-sharing', 'data-transfers', 'technology-clauses',
        'data-security', 'data-rights', 'data-retention', 'contact'
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans bg-white text-slate-800 min-h-screen">
     

      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-[#0f172a] via-[#203253] to-[#1a2744] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <ShieldCheck size={16} className="text-[#dc1e25]" />
                <span className="text-blue-200 text-sm font-semibold tracking-wider">Legal & Compliance</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Privacy Policy
              </h1>
              <div className="text-blue-200/90 text-lg leading-relaxed max-w-3xl">
                Our commitment to transparency, security, and your data rights in the digital age.
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#dc1e25] to-red-600 rounded-xl flex items-center justify-center">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Last Updated</div>
                    <div className="text-blue-200">October 26, 2024</div>
                  </div>
                </div>
                <p className="text-blue-200/80 text-sm mb-6">
                  This policy outlines how XPACE Technologies collects, uses, and protects your information across our digital ecosystem.
                </p>
                <button className="w-full py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 group">
                  <Download size={18} /> Download PDF Version
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sticky Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="sticky top-32 bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-[#0f172a] text-lg mb-6 flex items-center gap-2">
                <FileText size={20} className="text-[#dc1e25]" /> Quick Navigation
              </h3>
              <nav className="space-y-2">
                {[
                  { id: 'introduction', label: '1. Introduction', icon: <Shield size={16} /> },
                  { id: 'information-collected', label: '2. Information We Collect', icon: <Database size={16} /> },
                  { id: 'data-usage', label: '3. How We Use Your Information', icon: <Cpu size={16} /> },
                  { id: 'data-sharing', label: '4. Data Sharing & Disclosure', icon: <Users size={16} /> },
                  { id: 'data-transfers', label: '5. International Data Transfers', icon: <Globe size={16} /> },
                  { id: 'technology-clauses', label: '6. Technology-Specific Clauses', icon: <Server size={16} /> },
                  { id: 'data-security', label: '7. Data Security', icon: <Lock size={16} /> },
                  { id: 'data-rights', label: '8. Your Data Protection Rights', icon: <Eye size={16} /> },
                  { id: 'data-retention', label: '9. Data Retention', icon: <Clock size={16} /> },
                  { id: 'contact', label: '10. Contact Information', icon: <Mail size={16} /> },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all ${
                      activeSection === item.id
                        ? 'bg-[#0f172a] text-white'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <span className={`${activeSection === item.id ? 'text-[#dc1e25]' : 'text-slate-400'}`}>
                      {item.icon}
                    </span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3 text-slate-600 mb-4">
                  <AlertCircle size={16} className="text-[#dc1e25]" />
                  <span className="text-sm font-medium">Important Notice</span>
                </div>
                <p className="text-xs text-slate-500">
                  By using our services, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Content */}
          <div className="lg:w-3/4">
            {/* Section 1: Introduction */}
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                  <Shield size={24} className="text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0f172a]">1. Introduction</h2>
                  <p className="text-slate-600">Our commitment to protecting and respecting your privacy</p>
                </div>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6 mb-8">
                <p className="text-blue-900 text-lg">
                  <strong className="font-bold">XPACE Technologies</strong> ("XPACE," "we," "us," or "our") is committed to protecting and respecting your privacy. In today's digital-first world, trust is built on transparency, accountability, and security.
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-slate-700 leading-relaxed">
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you:
                </p>
                
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Visit our website <a href="https://www.xpacetechnologies.com" className="text-[#dc1e25] font-semibold hover:underline">https://www.xpacetechnologies.com</a></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Use our software platforms or digital products</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Engage with our IT consulting, enterprise, and managed services</span>
                  </li>
                </ul>
                
                <div className="bg-white border border-slate-200 rounded-xl p-6 mt-6">
                  <h4 className="font-bold text-[#0f172a] mb-3 flex items-center gap-2">
                    <CheckCircle size={18} className="text-green-600" /> Your Consent & Compliance
                  </h4>
                  <p className="text-slate-700 mb-4">
                    By accessing or using our services, you acknowledge that you have read and understood this Privacy Policy and agree to the data practices described herein. This policy is designed to align with applicable global data protection regulations, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
                      <Globe size={20} className="text-blue-600" />
                      <div>
                        <div className="font-semibold text-[#0f172a]">GDPR</div>
                        <div className="text-sm text-slate-500">General Data Protection Regulation</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-amber-50 to-white rounded-lg border border-amber-100">
                      <Building size={20} className="text-amber-600" />
                      <div>
                        <div className="font-semibold text-[#0f172a]">CCPA</div>
                        <div className="text-sm text-slate-500">California Consumer Privacy Act</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Information We Collect */}
            <section id="information-collected" className="scroll-mt-32 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center">
                  <Database size={24} className="text-green-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0f172a]">2. Information We Collect</h2>
                  <p className="text-slate-600">Types of data we collect for secure, reliable, and high-quality services</p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <User size={18} className="text-blue-600" />
                    </div>
                    A. Personal Information You Provide
                  </h3>
                  <p className="text-slate-700 mb-6">
                    When you contact us, request a proposal, download resources, register for events, or apply for a role at XPACE Technologies, we may collect:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-700"><strong>Identity Data:</strong> Full name, job title, company/organization name</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-700"><strong>Contact Data:</strong> Business email address, phone number, mailing address</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-700"><strong>Professional Data:</strong> CV/Resume, portfolio details, LinkedIn profile URL</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-slate-700"><strong>Account Data:</strong> Login credentials for client or partner portals</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-white rounded-2xl p-8 border border-purple-100">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Server size={18} className="text-purple-600" />
                    </div>
                    B. Technical & Usage Data (Automatically Collected)
                  </h3>
                  <p className="text-slate-700 mb-6">
                    When you interact with our websites or platforms, we may automatically collect:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800">Device Information:</strong>
                        <p className="text-slate-600">IP address, browser type, operating system, device identifiers</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800">Usage Data:</strong>
                        <p className="text-slate-600">Pages viewed, time spent on pages, navigation paths, and interaction logs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <strong className="text-slate-800">Cookies & Tracking Technologies:</strong>
                        <p className="text-slate-600">Used to enhance user experience, analyze performance, and remember preferences (refer to our <a href="#" className="text-[#dc1e25] hover:underline">Cookie Policy</a> for details)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-white rounded-2xl p-8 border border-amber-100">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                      <Building size={18} className="text-amber-600" />
                    </div>
                    C. Client Data (B2B Engagements)
                  </h3>
                  <p className="text-slate-700 mb-4">
                    While delivering services such as <strong>Cloud Solutions, AI Implementations, ERP, IoT, or Custom Software Development</strong>, XPACE may process data on behalf of its clients.
                  </p>
                  <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-6 mt-4">
                    <div className="flex items-start gap-4">
                      <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-amber-800 font-semibold mb-2">Important Distinction:</p>
                        <p className="text-slate-700">
                          In such cases, <strong className="text-[#0f172a]">XPACE acts as a Data Processor</strong>, and the client remains the <strong className="text-[#0f172a]">Data Controller</strong>. All processing is conducted strictly in accordance with applicable contracts, including our <strong>Master Services Agreement (MSA)</strong> and <strong>Data Processing Addendum (DPA)</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: How We Use Your Information */}
            <section id="data-usage" className="scroll-mt-32 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center">
                  <Cpu size={24} className="text-purple-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0f172a]">3. How We Use Your Information</h2>
                  <p className="text-slate-600">Legitimate business purposes for data processing</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-slate-700 leading-relaxed">
                  We process personal and technical data only for legitimate business purposes, including:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Server size={20} className="text-blue-600" />,
                      title: "Service Delivery",
                      description: "Designing, deploying, operating, and improving our software solutions and consulting services",
                      color: "bg-blue-50 border-blue-200"
                    },
                    {
                      icon: <Phone size={20} className="text-green-600" />,
                      title: "Communication",
                      description: "Responding to inquiries, RFPs, proposals, invoices, service updates, and customer support requests",
                      color: "bg-green-50 border-green-200"
                    },
                    {
                      icon: <Users size={20} className="text-purple-600" />,
                      title: "Marketing & Engagement",
                      description: "Sharing newsletters, insights, case studies, and event invitations (only where consent has been provided)",
                      color: "bg-purple-50 border-purple-200"
                    },
                    {
                      icon: <Cpu size={20} className="text-amber-600" />,
                      title: "AI & Platform Improvement",
                      description: "Using anonymized and aggregated data to enhance system performance and AI-driven capabilities",
                      color: "bg-amber-50 border-amber-200"
                    },
                    {
                      icon: <Shield size={20} className="text-red-600" />,
                      title: "Security & Risk Management",
                      description: "Detecting, preventing, and responding to fraud, cyber threats, and unauthorized access",
                      color: "bg-red-50 border-red-200"
                    },
                    {
                      icon: <FileText size={20} className="text-indigo-600" />,
                      title: "Legal & Regulatory Compliance",
                      description: "Meeting obligations related to taxation, corporate governance, export controls, and regulatory reporting",
                      color: "bg-indigo-50 border-indigo-200"
                    }
                  ].map((item, index) => (
                    <div key={index} className={`${item.color} border rounded-xl p-6 hover:shadow-md transition-shadow`}>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0f172a] mb-2">{item.title}</h4>
                          <p className="text-slate-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mt-8">
                  <h4 className="font-bold text-[#0f172a] mb-3 flex items-center gap-2">
                    <AlertCircle size={18} className="text-[#dc1e25]" /> AI Training Notice
                  </h4>
                  <p className="text-slate-700">
                    We do not use client or proprietary business data for public or external model training without explicit written consent. Any internal analysis or improvement activities rely on anonymized or aggregated data only.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Data Sharing & Disclosure */}
            <section id="data-sharing" className="scroll-mt-32 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-50 rounded-xl flex items-center justify-center">
                  <Users size={24} className="text-red-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0f172a]">4. Data Sharing and Disclosure</h2>
                  <p className="text-slate-600">When and how we share your information</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-50 to-white rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle size={24} className="text-[#dc1e25]" />
                    <h3 className="text-xl font-bold text-[#0f172a]">XPACE Technologies does <span className="text-[#dc1e25]">not sell</span> personal data.</h3>
                  </div>
                  <p className="text-slate-700">
                    We may share information only in the following circumstances:
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Trusted Service Providers",
                      description: "Third-party vendors supporting our operations (e.g., cloud hosting, CRM, billing, payment processing). These providers are contractually obligated to maintain confidentiality and security.",
                      icon: <Server size={20} className="text-blue-600" />
                    },
                    {
                      title: "Affiliates & Global Offices",
                      description: "Limited data sharing within XPACE group entities to ensure seamless global service delivery.",
                      icon: <Building size={20} className="text-green-600" />
                    },
                    {
                      title: "Legal & Regulatory Authorities",
                      description: "Where disclosure is required by law, regulation, court order, or lawful government request.",
                      icon: <FileText size={20} className="text-amber-600" />
                    },
                    {
                      title: "Business Transactions",
                      description: "In the event of a merger, acquisition, restructuring, or asset sale, information may be transferred as part of the business continuity process.",
                      icon: <ArrowRight size={20} className="text-purple-600" />
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-6 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0f172a] mb-2">{item.title}</h4>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 5: International Data Transfers */}
            <section id="data-transfers" className="scroll-mt-32 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-xl flex items-center justify-center">
                  <Globe size={24} className="text-cyan-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0f172a]">5. International Data Transfers</h2>
                  <p className="text-slate-600">Global operations with data protection safeguards</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-6 mb-6">
                  <p className="text-cyan-900 text-lg">
                    As a global IT consulting and technology company, XPACE Technologies may process and store data in multiple jurisdictions.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border border-blue-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                      <ShieldCheck size={24} className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0f172a]">For EEA Residents</h3>
                      <p className="text-blue-700">Standard Contractual Clauses (SCCs) Protection</p>
                    </div>
                  </div>
                  <p className="text-slate-700">
                    For individuals located in the <strong>European Economic Area (EEA)</strong>, data transfers outside the EU are conducted using <strong>Standard Contractual Clauses (SCCs)</strong> or other legally approved safeguards to ensure continued protection of personal data.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Technology-Specific Clauses */}
            <section id="technology-clauses" className="scroll-mt-32 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl flex items-center justify-center">
                  <Server size={24} className="text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0f172a]">6. Technology-Specific Clauses</h2>
                  <p className="text-slate-600">Special considerations for advanced technologies</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Cpu size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f172a]">Artificial Intelligence (AI)</h3>
                    <p className="text-blue-700">Secure AI-enabled solutions</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white border border-blue-100 rounded-xl p-6">
                    <p className="text-slate-700 mb-4">
                      Where XPACE provides AI-enabled solutions (such as automation, analytics, or intelligent applications):
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <CheckCircle size={14} className="text-blue-600" />
                        </div>
                        <span className="text-slate-700">
                          We process data strictly for agreed business purposes defined with our clients
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <AlertCircle size={14} className="text-red-600" />
                        </div>
                        <span className="text-slate-700">
                          We do not use client or proprietary business data for public or external model training without explicit written consent
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                          <Eye size={14} className="text-green-600" />
                        </div>
                        <span className="text-slate-700">
                          Any internal analysis or improvement activities rely on anonymized or aggregated data only
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Data Security */}
            <section id="data-security" className="scroll-mt-32 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center">
                  <Lock size={24} className="text-green-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0f172a]">7. Data Security</h2>
                  <p className="text-slate-600">Enterprise-grade security controls</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-slate-700 leading-relaxed">
                  XPACE Technologies applies enterprise-grade security controls to safeguard information, including:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Encryption",
                      description: "AES-256 encryption for data at rest and TLS 1.3 for data in transit",
                      icon: "🔐",
                      color: "bg-blue-50 border-blue-200"
                    },
                    {
                      title: "Access Management",
                      description: "Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA)",
                      icon: "👥",
                      color: "bg-green-50 border-green-200"
                    },
                    {
                      title: "Operational Controls",
                      description: "Secure development practices, monitoring, and incident response protocols",
                      icon: "🛡️",
                      color: "bg-amber-50 border-amber-200"
                    },
                    {
                      title: "Compliance & Governance",
                      description: "Security controls aligned with industry-recognized information security standards",
                      icon: "📋",
                      color: "bg-purple-50 border-purple-200"
                    }
                  ].map((item, index) => (
                    <div key={index} className={`${item.color} border rounded-xl p-6 hover:shadow-lg transition-shadow`}>
                      <div className="text-3xl mb-4">{item.icon}</div>
                      <h4 className="font-bold text-[#0f172a] mb-2">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mt-8">
                  <div className="flex items-start gap-4">
                    <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-red-900 mb-2">Security Limitation Notice</h4>
                      <p className="text-red-800">
                        While we continuously strengthen our security posture, no digital system can be guaranteed 100% secure.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Your Data Protection Rights */}
            <section id="data-rights" className="scroll-mt-32 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center">
                  <Eye size={24} className="text-purple-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0f172a]">8. Your Data Protection Rights</h2>
                  <p className="text-slate-600">Control over your personal information</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-slate-700 leading-relaxed">
                  Subject to applicable laws, you may exercise the following rights:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: <Eye size={20} />, title: "Right of Access", description: "Obtain confirmation and a copy of your personal data", color: "bg-blue-50 border-blue-200" },
                    { icon: <FileText size={20} />, title: "Right to Rectification", description: "Correct inaccurate or incomplete information", color: "bg-green-50 border-green-200" },
                    { icon: <Trash2 size={20} />, title: "Right to Erasure", description: "Request deletion of data, subject to legal retention requirements", color: "bg-red-50 border-red-200" },
                    { icon: <Lock size={20} />, title: "Right to Restriction", description: "Limit how your data is processed", color: "bg-amber-50 border-amber-200" },
                    { icon: <ArrowRight size={20} />, title: "Right to Data Portability", description: "Receive your data in a structured, commonly used format", color: "bg-purple-50 border-purple-200" },
                    { icon: <Mail size={20} />, title: "Right to Opt-Out", description: "Withdraw consent for marketing communications at any time", color: "bg-cyan-50 border-cyan-200" }
                  ].map((right, index) => (
                    <div key={index} className={`${right.color} border rounded-xl p-6 hover:shadow-md transition-shadow`}>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          {right.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#0f172a] mb-2">{right.title}</h4>
                          <p className="text-slate-600 text-sm">{right.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-[#0f172a] to-[#203253] text-white rounded-xl p-8 mt-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h4 className="text-xl font-bold mb-2">Exercise Your Rights</h4>
                      <p className="text-blue-200">
                        Requests may be submitted to our Data Protection Officer (DPO)
                      </p>
                    </div>
                    <a 
                      href="mailto:info@xpacetechnologies.com" 
                      className="px-6 py-3 bg-[#dc1e25] text-white font-bold rounded-lg hover:bg-[#b0141a] transition-all flex items-center gap-2 whitespace-nowrap"
                    >
                      <Mail size={18} /> Contact DPO
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Data Retention */}
            <section id="data-retention" className="scroll-mt-32 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center">
                  <Clock size={24} className="text-amber-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0f172a]">9. Data Retention</h2>
                  <p className="text-slate-600">How long we keep your information</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-6">
                  <p className="text-slate-700 text-lg">
                    We retain data only for as long as necessary to fulfill legitimate business and legal purposes:
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-blue-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Building size={24} className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0f172a]">Client & Contractual Data</h4>
                        <div className="text-2xl font-bold text-[#dc1e25]">7 Years</div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">
                      Retained for the duration of the agreement plus up to <strong>7 years</strong> for compliance and audit purposes
                    </p>
                  </div>
                  
                  <div className="bg-white border border-green-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Users size={24} className="text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0f172a]">Marketing & Engagement Data</h4>
                        <div className="text-2xl font-bold text-[#dc1e25]">24 Months</div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm">
                      Retained until opt-out or after <strong>24 months of inactivity</strong>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Contact Information */}
            <section id="contact" className="scroll-mt-32 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0f172a]">10. Contact Information</h2>
                  <p className="text-slate-600">Get in touch with our privacy team</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-[#0f172a] mb-6">Contact Details</h3>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Building size={20} className="text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0f172a] mb-1">XPACE Technologies Pvt. Ltd.</h4>
                            <p className="text-slate-600">Attn: Data Protection Officer</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail size={20} className="text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0f172a] mb-1">Email</h4>
                            <a href="mailto:info@xpacetechnologies.com" className="text-[#dc1e25] hover:underline font-medium">
                              info@xpacetechnologies.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin size={20} className="text-amber-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0f172a] mb-1">Registered Office</h4>
                            <p className="text-slate-600 text-sm">
                              Office No. 406, 4th Floor, Ceasers Tower,<br />
                              Opposite Ayesha Bawany School, Shahrah-e-Faisal,<br />
                              Karachi, Pakistan
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#0f172a] rounded-xl p-6 text-white">
                    <h4 className="font-bold text-lg mb-4">Need Immediate Assistance?</h4>
                    <p className="text-blue-200 mb-6">
                      For urgent privacy concerns or data breach notifications, please contact our 24/7 security team.
                    </p>
                    <button className="w-full py-3 bg-[#dc1e25] text-white font-bold rounded-lg hover:bg-[#b0141a] transition-all flex items-center justify-center gap-2">
                      <AlertCircle size={18} /> Emergency Contact
                    </button>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="font-bold text-[#0f172a] mb-4">Additional Resources</h4>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium flex items-center gap-2">
                      <FileText size={14} /> Cookie Policy
                    </a>
                    <a href="#" className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium flex items-center gap-2">
                      <FileText size={14} /> Terms of Service
                    </a>
                    <a href="#" className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium flex items-center gap-2">
                      <FileText size={14} /> GDPR Compliance
                    </a>
                    <a href="#" className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium flex items-center gap-2">
                      <FileText size={14} /> CCPA Information
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Policy Update Notice */}
            <div className="bg-gradient-to-r from-amber-50 to-white border border-amber-200 rounded-2xl p-8 mt-16">
              <div className="flex items-start gap-4">
                <AlertCircle size={24} className="text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-amber-900 text-lg mb-2">Policy Updates</h3>
                  <p className="text-amber-800">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-amber-700">
                      You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-gray-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <Shield size={16} className="text-white" />
              </div>
              <div>
                <span className="text-white font-bold">XPACE</span>
                <span className="text-[10px] text-[#dc1e25] font-bold tracking-widest uppercase ml-1">TECHNOLOGIES</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm">&copy; 2024 XPACE Technologies Pvt. Ltd. All rights reserved.</p>
              <p className="text-xs text-gray-600 mt-1">Enterprise-Grade Privacy & Security Compliance</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:text-white transition-colors">Legal</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Security</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy2024;
