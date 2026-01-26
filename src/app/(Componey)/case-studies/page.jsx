"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronDown, ArrowRight,
  Database, ShoppingCart, HeartPulse, Coins, Factory,
  CheckCircle2, TrendingUp, Users, Activity,
  FileText, Shield, Globe, Zap, Layers,
  BarChart3, Cpu, MousePointer2
} from 'lucide-react';


/* --- MAIN CONTENT --- */
const CaseStudiesPage = () => {
  const [activeTab, setActiveTab] = useState('All');

  const cases = [
    {
      id: 1,
      category: 'FinTech',
      client: "Global Banking Corp",
      title: "Core Infrastructure Modernization",
      summary: "We helped a Tier-1 bank transition from a legacy mainframe to a cloud-native microservices architecture, enabling real-time transactions.",
      challenge: "Processing delays & high maintenance costs.",
      solution: "AWS Migration + Kafka Streaming.",
      stats: [
        { label: "Cost Savings", value: "60%" },
        { label: "Uptime", value: "99.99%" },
        { label: "Latency", value: "50ms" }
      ],
      icon: <Database size={24}/>,
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      category: 'Retail',
      client: "Omni-Retail Giant",
      title: "Autonomous Supply Chain AI",
      summary: "Deploying predictive AI agents to forecast demand and automate inventory replenishment across 500+ global stores.",
      challenge: "Inventory waste & manual errors.",
      solution: "Predictive Analytics & Computer Vision.",
      stats: [
        { label: "Waste Reduced", value: "35%" },
        { label: "Annual Savings", value: "$12M" },
        { label: "Automation", value: "90%" }
      ],
      icon: <ShoppingCart size={24}/>,
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      category: 'Healthcare',
      client: "National Health Network",
      title: "Zero Trust Security Implementation",
      summary: "Securing 5,000+ endpoints and IoT medical devices against ransomware threats using a modern Zero Trust framework.",
      challenge: "Cyber attacks & compliance gaps.",
      solution: "Identity Management & 24/7 SOC.",
      stats: [
        { label: "HIPAA Compliant", value: "100%" },
        { label: "Breaches", value: "0" },
        { label: "Phishing Blocked", value: "95%" }
      ],
      icon: <HeartPulse size={24}/>,
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      category: 'Blockchain',
      client: "Luxury Watchmaker",
      title: "Supply Chain Transparency",
      summary: "Creating immutable digital twins for high-value assets to eliminate counterfeiting and verify authenticity.",
      challenge: "Counterfeit products flooding market.",
      solution: "Private Blockchain & NFT Certificates.",
      stats: [
        { label: "Fake-Proof", value: "100%" },
        { label: "Resale Value", value: "+20%" },
        { label: "Brand Trust", value: "High" }
      ],
      icon: <Coins size={24}/>,
      img: "https://images.unsplash.com/photo-1620625515032-608143206df3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredCases = activeTab === 'All' ? cases : cases.filter(c => c.category === activeTab);

  return (
    <div className="font-sans text-slate-800 bg-white overflow-x-hidden selection:bg-[#dc1e25] selection:text-white">
   

      {/* 1. HERO SECTION: Clean & Impactful */}
      <div className="relative min-h-[500px] flex items-center bg-[#203253]">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#203253] via-[#203253] to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-10">
          <div className="max-w-3xl">
             <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-[#dc1e25]"></div>
                <span className="text-[#dc1e25] text-xs font-bold uppercase tracking-[0.2em]">Success Stories</span>
             </div>
             
             <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
               Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Results.</span>
             </h1>
             
             <p className="text-xl text-blue-100 leading-relaxed font-light max-w-2xl">
               See how we transform complex challenges into digital competitive advantages for global enterprises. Real problems, real solutions, real impact.
             </p>
          </div>
        </div>
      </div>

      {/* 2. CASE STUDY GALLERY */}
      <div className="bg-[#f8fafc] py-20">
         <div className="max-w-7xl mx-auto px-6">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-16 border-b border-gray-200 pb-4">
               {['All', 'FinTech', 'Retail', 'Healthcare', 'Blockchain'].map(cat => (
                  <button 
                     key={cat}
                     onClick={() => setActiveTab(cat)}
                     className={`px-6 py-3 text-sm font-bold transition-all border-b-2 ${activeTab === cat ? 'border-[#dc1e25] text-[#203253]' : 'border-transparent text-gray-500 hover:text-[#dc1e25]'}`}
                  >
                     {cat}
                  </button>
               ))}
            </div>

            {/* Case Cards */}
            <div className="space-y-16">
               {filteredCases.map((study, index) => (
                  <div key={study.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-300">
                     <div className="grid md:grid-cols-12 h-full">
                        
                        {/* Image Side (5 Cols) */}
                        <div className={`md:col-span-5 relative h-64 md:h-auto overflow-hidden ${index % 2 === 1 ? 'md:order-last' : ''}`}>
                           <div className="absolute inset-0 bg-[#203253]/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                           <img src={study.img} alt={study.title} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                           <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm flex items-center gap-2">
                              <div className="text-[#dc1e25]">{study.icon}</div>
                              <span className="text-xs font-bold text-[#203253] uppercase tracking-wide">{study.category}</span>
                           </div>
                        </div>

                        {/* Content Side (7 Cols) */}
                        <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center">
                           <div className="mb-6">
                              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">{study.client}</span>
                              <h2 className="text-3xl font-bold text-[#203253] mb-4 group-hover:text-[#dc1e25] transition-colors">{study.title}</h2>
                              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                 {study.summary}
                              </p>
                           </div>

                           {/* Stats Grid */}
                           <div className="grid grid-cols-3 gap-6 py-6 border-t border-gray-100 mb-8">
                              {study.stats.map((stat, i) => (
                                 <div key={i}>
                                    <div className="text-2xl font-black text-[#203253]">{stat.value}</div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{stat.label}</div>
                                 </div>
                              ))}
                           </div>

                           <div className="flex items-center justify-between">
                              <div className="flex flex-col gap-1">
                                 <span className="text-xs font-bold text-gray-400 uppercase">Services</span>
                                 <div className="flex gap-2">
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">Strategy</span>
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">Implementation</span>
                                 </div>
                              </div>
                              <button className="w-12 h-12 rounded-full border-2 border-[#dc1e25] flex items-center justify-center text-[#dc1e25] hover:bg-[#dc1e25] hover:text-white transition-all">
                                 <ArrowRight size={20}/>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      {/* 3. TESTIMONIALS: Clean & Elegant */}
      <div className="py-24 bg-white">
         <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-[#203253] mb-16">Client Perspectives</h2>
            
            <div className="grid md:grid-cols-2 gap-12 text-left">
               <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 relative">
                  <div className="text-6xl text-[#dc1e25] opacity-20 font-serif absolute top-4 left-6">"</div>
                  <p className="text-gray-600 italic mb-6 relative z-10 pt-4">
                     XPACE didn't just upgrade our technology; they upgraded our entire business model. Their strategic foresight in AI is unmatched in the industry.
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-[#203253] rounded-full flex items-center justify-center text-white font-bold">J</div>
                     <div>
                        <div className="font-bold text-[#203253] text-sm">Jonathan R.</div>
                        <div className="text-xs text-gray-500">CTO, Global Logistics Firm</div>
                     </div>
                  </div>
               </div>

               <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 relative">
                  <div className="text-6xl text-[#dc1e25] opacity-20 font-serif absolute top-4 left-6">"</div>
                  <p className="text-gray-600 italic mb-6 relative z-10 pt-4">
                     The level of security expertise XPACE brought to the table gave our board the confidence to accelerate our cloud migration. Truly a trusted partner.
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-[#203253] rounded-full flex items-center justify-center text-white font-bold">S</div>
                     <div>
                        <div className="font-bold text-[#203253] text-sm">Sarah L.</div>
                        <div className="text-xs text-gray-500">CISO, National Healthcare Provider</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 4. CTA: Minimalist Impact */}
      <div className="bg-[#dc1e25] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
           <h2 className="text-4xl font-black mb-6">Your Success Story Starts Here</h2>
           <p className="text-lg text-white/90 mb-10">
              We are ready to solve your toughest challenges. Let's engineer your digital future together.
           </p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-white text-[#dc1e25] font-bold rounded-lg shadow-xl hover:scale-105 transition-transform flex items-center gap-2">
                 View All Cases <ArrowRight size={18}/>
              </button>
              <button className="px-10 py-4 bg-[#203253] text-white font-bold rounded-lg hover:bg-[#1a2942] transition-colors">
                 Schedule Consultation
              </button>
           </div>
        </div>
      </div>

      <footer className="bg-[#0f172a] text-gray-500 py-12 text-center text-sm border-t border-white/10">
        <p>&copy; 2024 XPACE Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CaseStudiesPage;