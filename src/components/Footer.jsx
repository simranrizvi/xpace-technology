"use client"

import React from 'react';
import {
  Twitter, Linkedin, Facebook, Instagram, Youtube,
  Mail, Phone, MapPin, ArrowUp, Send,
  Globe, Shield, Zap, CheckCircle2, ArrowRight,
  Activity, Command, Hash, Layers, Cpu, Server,
  Building, Users
} from 'lucide-react';


const Footer = () => {
 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className="relative bg-[#020617] text-slate-300 font-sans border-t border-white/5 overflow-hidden">
     
      {/* --- GLOBAL BACKGROUND (The "World Map" Feel) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
       
        {/* WORLD MAP SVG OVERLAY */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full opacity-10">
           <svg viewBox="0 0 1008 500" fill="currentColor" className="text-white w-full h-full">
              <path d="M211.5,188.5c-4.2,2.8-8.5,5.6-12.7,8.4c-0.6-1-1.3-2-1.9-3c0.9-2.3,1.9-4.7,2.8-7c1.3,0.3,2.6,0.6,3.9,1
               C206.3,188.3,208.9,188.4,211.5,188.5z M235.8,172.9c3.2-1.3,6.3-2.6,9.5-3.9c1,1.1,1.9,2.2,2.9,3.3c-2.3,4.4-4.5,8.8-6.8,13.2
               c-2.2-0.6-4.5-1.2-6.7-1.8C235.1,180.5,235.4,176.7,235.8,172.9z M287.4,151.4c1.1,3.4,2.2,6.9,3.3,10.3c-3,2.3-6,4.6-9,6.9
               c-0.6-3.8-1.2-7.6-1.8-11.4C282.6,155,285,153.2,287.4,151.4z M176.9,209.6c2.8,0.7,5.5,1.5,8.3,2.2c0.2,3.3,0.5,6.6,0.7,10
               c-3.1-0.2-6.2-0.5-9.3-0.7C176.7,217,176.8,213.3,176.9,209.6z M764.1,162.7c3.1-1,6.2-2.1,9.3-3.1c1.2,3.3,2.5,6.5,3.7,9.8
               c-2.9,1.5-5.9,3.1-8.8,4.6C766.7,170.2,765.4,166.4,764.1,162.7z M808.8,124.9c4.3,0.8,8.6,1.5,12.9,2.3
               c-0.4,4.2-0.8,8.5-1.2,12.7c-3.7-0.9-7.3-1.8-11-2.7C809.1,133,809,128.9,808.8,124.9z M240.2,408.8c0.8-2.6,1.6-5.3,2.4-7.9
               c3.3,0.8,6.5,1.7,9.8,2.5c-0.7,3.5-1.3,7-2,10.5C246.7,412.3,243.5,410.5,240.2,408.8z M628.3,375.6c4.6-0.3,9.1-0.6,13.7-0.9
               c-0.3,3.4-0.6,6.7-0.8,10.1c-3.7,0.7-7.4,1.3-11.1,2C629.4,383.5,628.9,379.6,628.3,375.6z M117.8,255.4
               c-0.3-4.2-0.7-8.4-1-12.6c4.5-0.1,9.1-0.1,13.6-0.2c0.2,3.3,0.4,6.7,0.6,10C126.7,253.7,122.3,254.6,117.8,255.4z M91.3,165.4
               c1.6,2.2,3.3,4.4,4.9,6.6c-2.8,2.7-5.6,5.3-8.4,8c-1.5-2.6-3.1-5.3-4.6-7.9C86.1,169.6,88.7,167.5,91.3,165.4z M893.3,308.6
               c0.6-3.1,1.1-6.2,1.7-9.3c3.5,1.7,7,3.5,10.5,5.2c-1.2,3.3-2.5,6.6-3.7,9.9C899.2,312.6,896.2,310.6,893.3,308.6z M727,419.6
               c3.6,0.3,7.2,0.6,10.8,0.9c0.7,2.8,1.4,5.6,2.1,8.3c-4.4,0-8.8,0.1-13.2,0.1C726.8,425.8,726.9,422.7,727,419.6z M305.8,138.2
               c2.8-1.5,5.6-2.9,8.4-4.4c2.8,3,5.6,5.9,8.5,8.9c-2.3,2.4-4.7,4.9-7,7.3C311.9,146.5,308.9,142.3,305.8,138.2z M171.4,127.2
               c1.5-3.3,3-6.7,4.5-10c3.9,0.7,7.9,1.4,11.8,2.1c-0.3,3.7-0.7,7.4-1,11.1C182.2,129.4,176.8,128.3,171.4,127.2z" />
              <circle cx="504" cy="250" r="2" className="text-[#dc1e25] animate-ping"/>
              <circle cx="200" cy="150" r="2" className="text-[#dc1e25] animate-ping delay-700"/>
              <circle cx="800" cy="300" r="2" className="text-[#dc1e25] animate-ping delay-1000"/>
           </svg>
        </div>
       
        {/* Atmosphere Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#203253] rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#020617] rounded-full blur-[100px] opacity-90"></div>
      </div>


      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20">


        {/* --- GLOBAL REACH HEADER --- */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 pb-16 border-b border-white/5">
           <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 text-[#dc1e25] font-bold text-xs uppercase tracking-widest mb-2">
                 <Globe size={14} className="animate-spin-slow"/> Global Operations
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                 Powering the Next <br/>
                 Generation of <span className="text-[#dc1e25]">Giants.</span>
              </h2>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:w-auto">
              <StatItem val="40+" label="Countries" icon={<MapPin size={16}/>} />
              <StatItem val="500+" label="Clients" icon={<Building size={16}/>} />
              <StatItem val="24/7" label="Support" icon={<Activity size={16}/>} />
              <StatItem val="100%" label="Secure" icon={<Shield size={16}/>} color="text-[#dc1e25]" />
           </div>
        </div>
       
        {/* --- FOOTER LINKS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16">
         
          {/* Brand Column (Col 1-4) */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white text-[#203253] flex items-center justify-center rounded-lg font-black text-2xl border border-white/10 shadow-[0_0_20px_rgba(220,30,37,0.3)]">X</div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tighter text-white leading-none">XPACE</span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#dc1e25] uppercase">Technologies</span>
              </div>
            </div>
           
            <p className="text-sm leading-relaxed text-gray-400 font-light border-l-2 border-[#203253] pl-4">
              Building the digital backbone for tomorrow's enterprises. Secure, Scalable, and Future-Proof.
            </p>


            <div className="flex gap-4 pt-2">
              <SocialBtn icon={<Linkedin size={18}/>} />
              <SocialBtn icon={<Twitter size={18}/>} />
              <SocialBtn icon={<Instagram size={18}/>} />
              <SocialBtn icon={<Youtube size={18}/>} />
            </div>
          </div>


          {/* Links Column 1 (Solutions) */}
          <div className="md:col-span-2 col-span-6 space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.15em] text-[#dc1e25]">Solutions</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <LinkItem text="AI & Intelligence" />
              <LinkItem text="Web3 & Blockchain" />
              <LinkItem text="Cyber Defense" />
              <LinkItem text="Cloud Architecture" />
              <LinkItem text="Immersive Tech" />
            </ul>
          </div>


          {/* Links Column 2 (Company) */}
          <div className="md:col-span-2 col-span-6 space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.15em] text-[#dc1e25]">Company</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <LinkItem text="About XPACE" />
              <LinkItem text="Case Studies" />
              <LinkItem text="Careers" badge="Hiring" />
              <LinkItem text="Partners" />
              <LinkItem text="Contact" />
            </ul>
          </div>


          {/* Newsletter (Col 9-12) */}
          <div className="md:col-span-4">
            <div className="bg-[#203253]/30 border border-white/5 rounded-2xl p-6 backdrop-blur-sm hover:border-[#dc1e25]/30 transition-colors">
               <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Activity size={16} className="text-[#dc1e25]"/> Executive Briefing
               </h4>
               <p className="text-xs text-gray-400 mb-4">
                 Strategic tech insights delivered to your inbox. No spam, just signal.
               </p>
               
               <form className="flex gap-2">
                 <input
                   type="email"
                   placeholder="Email Address"
                   className="w-full bg-[#020617] border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-[#dc1e25] transition-colors"
                 />
                 <button className="bg-[#dc1e25] hover:bg-[#b0141a] text-white p-3 rounded-lg transition-colors shadow-lg">
                    <ArrowRight size={18}/>
                 </button>
               </form>
            </div>
          </div>
        </div>


        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-medium text-gray-500 uppercase tracking-wider">
         
          <div className="flex items-center gap-8">
             <span>&copy; 2024 XPACE Technologies</span>
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>


          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-500">Systems Operational</span>
             </div>
             
             <button
               onClick={scrollToTop}
               className="group flex items-center gap-2 text-white hover:text-[#dc1e25] transition-colors"
             >
               Back to Top
               <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform"/>
             </button>
          </div>


        </div>


      </div>
    </footer>
  );
};


/* --- SUB COMPONENTS --- */


const StatItem = ({ label, value, icon }) => (
  <div>
     <div className="text-2xl font-black text-white">{value}</div>
     <div className="text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-1">
        {icon} {label}
     </div>
  </div>
);


const LinkItem = ({ text, badge }) => (
  <li className="group">
    <a href="#" className="flex items-center justify-between hover:text-white transition-all duration-300">
       <span className="group-hover:translate-x-1 transition-transform">{text}</span>
       {badge && (
         <span className="text-[8px] font-bold bg-[#dc1e25] text-white px-1.5 py-0.5 rounded ml-2 uppercase">
           {badge}
         </span>
       )}
       <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#dc1e25]"/>
    </a>
  </li>
);


const SocialBtn = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#dc1e25] transition-all hover:-translate-y-1">
    {icon}
  </a>
);


export default Footer;
