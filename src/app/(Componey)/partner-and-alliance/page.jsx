"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, ChevronDown, ArrowRight,
  Globe, Handshake, ShieldCheck, 
  Zap, Layers, Rocket, Users, 
  CheckCircle2, Network,
  Server, Award, Briefcase,
  Cloud, Cpu, Lock, Brain,
  Target, Users2, BarChart, Clock
} from 'lucide-react';


/* --- MAIN CONTENT --- */
const PartnershipsPageV2 = () => {
  


  return (
    <div className="font-sans text-slate-200 bg-[#0f172a] overflow-x-hidden selection:bg-[#dc1e25] selection:text-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-dash { stroke-dasharray: 10; animation: dash 20s linear infinite; }
      `}</style>
      
    

      {/* 1. HERO SECTION: Global Ecosystem Constellation */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1a2744] to-[#203253]" >
        {/* Constellation Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#1a2744]/80 to-[#203253]/70"></div>
          
          {/* Floating Nodes */}
          {[...Array(25)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-pulse-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`
              }} />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-[#dc1e25]/20 to-blue-500/20 border border-white/10 rounded-full backdrop-blur-md">
                <Globe size={16} className="text-blue-400" />
                <span className="text-blue-300 text-sm font-semibold tracking-wider uppercase">Strategic Alliances Network</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                Orchestrating a<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-[#dc1e25]">Global Ecosystem</span><br />
                of Innovation
              </h1>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  We collaborate with the world's leading technology visionaries to deliver integrated, scalable, and future-proof solutions that accelerate your business growth.
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <p className="text-lg text-blue-200 leading-relaxed">
                    In a hyper-connected digital economy, no single entity holds the monopoly on innovation. XPACE Technologies believes in the power of the ecosystem.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#dc1e25] to-red-600 text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(220,30,37,0.6)] transition-all flex items-center justify-center gap-3 group shadow-xl">
                  <Handshake size={22} className="group-hover:rotate-12 transition-transform" /> Explore Alliance Opportunities
                </button>
                <button className="px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/20 hover:border-white/40 transition-all flex items-center justify-center gap-3 backdrop-blur-sm">
                  <Users size={22} /> Connect with Our Experts
                </button>
              </div>
            </div>

            {/* Visual: Digital Neural Network */}
            <div className="relative h-[500px] flex items-center justify-center">
              <div 
                className="relative w-full h-full max-w-md flex items-center justify-center perspective-1000"
                style={{ transform: `rotateX(calc(var(--y) * 0.5)) rotateY(calc(var(--x) * 0.5))` }}
              >
                {/* Central Hub */}
                <div className="absolute z-20 w-44 h-44 bg-gradient-to-br from-[#0f172a] to-[#203253] rounded-3xl border-4 border-[#dc1e25] flex flex-col items-center justify-center shadow-[0_0_80px_rgba(220,30,37,0.5)]">
                  <Network size={40} className="text-white mb-4" />
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">XPACE</div>
                    <div className="text-xs text-gray-400 tracking-widest">ECOSYSTEM HUB</div>
                  </div>
                </div>

                {/* Partner Orbits */}
                <div className="absolute w-96 h-96 border border-white/10 rounded-full animate-spin-slow">
                  {[
                    { icon: <Cloud size={20} />, label: "Cloud", angle: 0, color: "bg-blue-500" },
                    { icon: <Lock size={20} />, label: "Security", angle: 72, color: "bg-red-500" },
                    { icon: <Brain size={20} />, label: "AI/ML", angle: 144, color: "bg-green-500" },
                    { icon: <Cpu size={20} />, label: "Hardware", angle: 216, color: "bg-yellow-500" },
                    { icon: <Layers size={20} />, label: "Platform", angle: 288, color: "bg-purple-500" }
                  ].map((partner, idx) => {
                    const radius = 180;
                    const rad = (partner.angle * Math.PI) / 180;
                    const x = Math.cos(rad) * radius;
                    const y = Math.sin(rad) * radius;
                    
                    return (
                      <div
                        key={idx}
                        className={`absolute w-16 h-16 ${partner.color} rounded-2xl flex flex-col items-center justify-center shadow-lg animate-float`}
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: 'translate(-50%, -50%)',
                          animationDelay: `${idx * 0.3}s`
                        }}
                      >
                        <div className="text-white mb-1">{partner.icon}</div>
                        <span className="text-xs font-semibold text-white">{partner.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <circle cx="50%" cy="50%" r="180" stroke="white" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.1" />
                  
                  {/* Radial Connections */}
                  {[0, 72, 144, 216, 288].map((angle, idx) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = Math.cos(rad) * 180;
                    const y = Math.sin(rad) * 180;
                    
                    return (
                      <line
                        key={idx}
                        x1="50%"
                        y1="50%"
                        x2={`calc(50% + ${x}px)`}
                        y2={`calc(50% + ${y}px)`}
                        stroke="#dc1e25"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        className="animate-dash"
                        style={{ animationDelay: `${idx * 0.5}s` }}
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. PARTNERSHIP PHILOSOPHY */}
      <div className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#dc1e25] to-red-600 rounded-xl flex items-center justify-center">
                    <Handshake size={24} className="text-white" />
                  </div>
                  <span className="text-[#dc1e25] font-bold tracking-widest uppercase text-sm">Our Philosophy</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a]">Collaboration Over <span className="text-[#dc1e25]">Transaction</span></h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  True partnership moves beyond the transactional exchange of licenses or services. At XPACE Technologies, we view our partners as an extension of our own capabilities.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Our philosophy is rooted in <span className="font-semibold text-[#0f172a]">Shared Innovation</span> and <span className="font-semibold text-[#0f172a]">Long-Term Value Creation</span>. We select partners who share our obsession with engineering excellence, security, and customer success.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  By aligning our roadmaps with theirs, we ensure that our clients gain early access to emerging technologies, beta programs, and advanced support tiers. We do not just implement partner tools; we push their boundaries to create bespoke solutions that drive tangible business outcomes.
                </p>
              </div>
              
              <div className="flex gap-6 pt-4">
                <div className="flex-1 bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 shadow-sm">
                  <Target size={24} className="text-blue-600 mb-4" />
                  <h4 className="font-bold text-[#0f172a] mb-2">Shared Innovation</h4>
                  <p className="text-sm text-slate-600">Co-create solutions that push technological boundaries</p>
                </div>
                <div className="flex-1 bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 shadow-sm">
                  <Users2 size={24} className="text-green-600 mb-4" />
                  <h4 className="font-bold text-[#0f172a] mb-2">Long-Term Value</h4>
                  <p className="text-sm text-slate-600">Build sustainable partnerships for enduring success</p>
                </div>
              </div>
            </div>

            {/* Visual: Partnership Fusion */}
            <div className="relative h-[400px] flex items-center justify-center">
              <div className="relative w-full h-full max-w-lg">
                {/* Fusion Core */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-[#dc1e25]/20 rounded-full blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-[#dc1e25] rounded-full flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold">SYNERGY</div>
                      <div className="text-xs opacity-80">Value Creation</div>
                    </div>
                  </div>
                </div>
                
                {/* XPACE Element */}
                <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#0f172a] to-[#203253] rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white animate-float">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">XPACE</div>
                    <div className="text-xs text-blue-300">Core Platform</div>
                  </div>
                </div>
                
                {/* Partner Element */}
                <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">PARTNER</div>
                    <div className="text-xs text-blue-100">Specialized Tech</div>
                  </div>
                </div>
                
                {/* Connection Arrows */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#dc1e25" />
                    </marker>
                  </defs>
                  <line x1="25%" y1="50%" x2="40%" y2="50%" stroke="#dc1e25" strokeWidth="3" markerEnd="url(#arrowhead)" />
                  <line x1="60%" y1="50%" x2="75%" y2="50%" stroke="#dc1e25" strokeWidth="3" markerEnd="url(#arrowhead)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. ALLIANCE STRUCTURE */}
      <div className="py-24 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full backdrop-blur-md mb-6">
              <Layers size={20} className="text-[#dc1e25]" />
              <span className="text-blue-300 font-semibold tracking-wider">Strategic Framework</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Two Pillars of <span className="text-blue-400">Excellence</span></h2>
            <p className="text-xl text-blue-200/80 max-w-3xl mx-auto">
              We categorize our ecosystem into two distinct but complementary streams to serve your specific business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technology Partners Card */}
            <div className="group bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                  <Server size={28} className="text-white" />
                </div>
                <div>
                  <div className="text-blue-400 font-bold text-sm tracking-wider uppercase">Technology Partners</div>
                  <h3 className="text-2xl font-bold text-white">Operational Excellence & Infrastructure</h3>
                </div>
              </div>
              
              <div className="mb-8">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Our deep relationships with the platforms that power the world. From Cloud providers (AWS, Azure) to Cybersecurity leaders (CrowdStrike, Splunk).
                </p>
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-blue-400" /> Key Benefit
                  </h4>
                  <p className="text-blue-200">
                    You get validated, pre-integrated technology stacks that are secure by design and supported by certified XPACE experts.
                  </p>
                </div>
              </div>
              
              <button className="w-full py-4 bg-gradient-to-r from-blue-600/20 to-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold rounded-xl hover:bg-blue-600/30 hover:text-blue-300 transition-all flex items-center justify-center gap-3 group/btn">
                Explore Our Technology Partners
                <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>

            {/* Strategic Collaborations Card */}
            <div className="group bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#dc1e25]/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-[#dc1e25] to-red-500 rounded-xl flex items-center justify-center">
                  <Rocket size={28} className="text-white" />
                </div>
                <div>
                  <div className="text-[#dc1e25] font-bold text-sm tracking-wider uppercase">Strategic Collaborations</div>
                  <h3 className="text-2xl font-bold text-white">Future Innovation & Market Disruption</h3>
                </div>
              </div>
              
              <div className="mb-8">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Joint ventures and R&D alliances with research labs, industry consortiums, and academic institutions.
                </p>
                <div className="bg-red-900/20 border border-[#dc1e25]/30 rounded-xl p-6">
                  <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#dc1e25]" /> Key Benefit
                  </h4>
                  <p className="text-blue-200">
                    You gain access to breakthrough technologies (like Quantum Computing or proprietary Blockchain protocols) before they hit the mass market.
                  </p>
                </div>
              </div>
              
              <button className="w-full py-4 bg-gradient-to-r from-red-600/20 to-red-500/10 border border-[#dc1e25]/30 text-[#dc1e25] font-semibold rounded-xl hover:bg-red-600/30 hover:text-red-300 transition-all flex items-center justify-center gap-3 group/btn">
                View Strategic Collaborations
                <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. CLIENT VALUE SECTION */}
      <div className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-[#dc1e25]/10 rounded-full mb-6">
              <BarChart size={20} className="text-[#dc1e25]" />
              <span className="text-[#0f172a] font-semibold tracking-wider">Business Impact</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">Why Our Network <span className="text-blue-600">Matters to You</span></h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our ecosystem is designed to deliver direct benefits to your bottom line
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual: Value Metrics Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-[#0f172a] to-[#203253] p-8">
                <h3 className="text-2xl font-bold text-white">Ecosystem Value Dashboard</h3>
                <p className="text-blue-200">Measurable outcomes from strategic partnerships</p>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0f172a]">40%</div>
                    <div className="text-sm text-slate-500">Faster Development</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0f172a]">60%</div>
                    <div className="text-sm text-slate-500">Risk Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0f172a]">75%</div>
                    <div className="text-sm text-slate-500">Integration Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0f172a]">4.2x</div>
                    <div className="text-sm text-slate-500">ROI Acceleration</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-700">Time-to-Market Speed</span>
                      <span className="text-sm font-bold text-blue-600">↑ 40% Improvement</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-progress" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-700">Integration Complexity</span>
                      <span className="text-sm font-bold text-green-600">↓ 60% Reduction</span>
                    </div>
                    <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full animate-progress" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Propositions */}
            <div className="space-y-8">
              <div className="group flex gap-6 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={24} className="text-blue-600" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0f172a] mb-3">Reduced Risk</h4>
                  <p className="text-slate-600">
                    We utilize pre-validated, certified integrations that have been tested at scale, eliminating the "integration hell" of connecting disparate systems.
                  </p>
                </div>
              </div>
              
              <div className="group flex gap-6 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center">
                    <Clock size={24} className="text-green-600" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0f172a] mb-3">Faster Time-to-Market</h4>
                  <p className="text-slate-600">
                    Instead of building everything from scratch, we assemble proven components from our partners, accelerating development cycles by up to 40%.
                  </p>
                </div>
              </div>
              
              <div className="group flex gap-6 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl flex items-center justify-center">
                    <Brain size={24} className="text-purple-600" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0f172a] mb-3">Access to Expertise</h4>
                  <p className="text-slate-600">
                    When you work with XPACE, you don't just get our team; you get the collective brainpower of our entire partner network.
                  </p>
                </div>
              </div>
              
              <div className="group flex gap-6 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center">
                    <Globe size={24} className="text-amber-600" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#0f172a] mb-3">Future-Proofing</h4>
                  <p className="text-slate-600">
                    Our partners inform us of their roadmaps years in advance. We design your systems today to be compatible with the technology of tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. GOVERNANCE & TRUST */}
      <div className="py-24 bg-gradient-to-b from-[#0f172a] to-[#1a2744] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Trust Badges Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-3xl p-10 shadow-2xl">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#dc1e25] to-red-600 rounded-full mb-6 shadow-lg">
                    <ShieldCheck size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Governance Framework</h3>
                  <p className="text-blue-200">Multi-tier partner validation system</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "ISO 27001", desc: "Security Management", color: "border-blue-500" },
                    { label: "SOC 2", desc: "Trust Services", color: "border-green-500" },
                    { label: "GDPR", desc: "Data Privacy", color: "border-purple-500" },
                    { label: "CMMI 5", desc: "Process Maturity", color: "border-amber-500" }
                  ].map((badge, idx) => (
                    <div key={idx} className={`bg-white/5 border ${badge.color}/30 rounded-xl p-6 text-center hover:bg-white/10 transition-colors`}>
                      <div className="text-white font-bold text-lg mb-1">{badge.label}</div>
                      <div className="text-sm text-blue-300">{badge.desc}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 pt-6 border-t border-white/10 text-center">
                  <div className="text-sm text-blue-200">Continuous monitoring & annual recertification</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-gradient-to-r from-blue-500/10 to-[#dc1e25]/10 rounded-full backdrop-blur-sm w-fit">
                  <ShieldCheck size={16} className="text-blue-400" />
                  <span className="text-blue-300 text-sm font-semibold tracking-wider">Governance Excellence</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white">Vetted for <span className="text-blue-400">Excellence</span></h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-blue-200 leading-relaxed">
                  We are selective about who we work with. The XPACE Partner Governance Framework ensures that every company in our ecosystem meets rigorous standards for security, ethics, and performance.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Security Alignment</h4>
                      <p className="text-blue-200">Every partner is vetted for compliance with global standards such as GDPR, ISO 27001, and SOC 2.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Technical Rigor</h4>
                      <p className="text-blue-200">We conduct regular technical reviews of partner platforms to ensure they continue to meet our performance benchmarks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Ethical Standards</h4>
                      <p className="text-blue-200">We align with partners who share our commitment to data privacy, sustainability, and responsible AI practices.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <div className="text-sm text-blue-300">
                  <span className="font-bold">Annual Audit Cycle:</span> All partners undergo comprehensive review to maintain ecosystem standards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. FINAL CALL TO ACTION */}
      <div className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#dc1e25]/10 via-[#0f172a] to-blue-500/10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 py-32 text-center">
          <div className="mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#dc1e25]/20 to-blue-500/20 border border-white/10 rounded-full backdrop-blur-md mb-8">
              <Rocket size={20} className="text-[#dc1e25]" />
              <span className="text-white font-semibold tracking-wider">Join the Ecosystem</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Build with the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-[#dc1e25]">Best</span>
            </h2>
            
            <p className="text-xl text-blue-200/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Leverage the power of a world-class technology ecosystem. Partner with XPACE Technologies to access the tools, talent, and innovation you need to lead your industry.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="px-10 py-5 bg-gradient-to-r from-[#dc1e25] to-red-600 text-white font-bold rounded-xl hover:shadow-[0_0_50px_rgba(220,30,37,0.7)] transition-all flex items-center justify-center gap-3 group shadow-2xl hover:scale-105 duration-300">
              <Handshake size={22} className="group-hover:rotate-12 transition-transform" />
              Explore Alliance Opportunities
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button className="px-10 py-5 bg-transparent border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/60 transition-all flex items-center justify-center gap-3 group backdrop-blur-sm">
              <Users size={22} />
              Connect with Our Experts
            </button>
          </div>
          
          <div className="pt-8 border-t border-white/10">
            <div className="text-blue-200/70 text-sm max-w-xl mx-auto">
              Access to 200+ certified technology partners | Direct engineering support | Early access to emerging technologies
            </div>
          </div>
        </div>
      </div>

   
    </div>
  );
};

export default PartnershipsPageV2;
