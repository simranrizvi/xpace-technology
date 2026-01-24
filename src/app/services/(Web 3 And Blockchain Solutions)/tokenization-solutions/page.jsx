
"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronDown, ArrowRight,
  Coins, Building, PieChart, Users,
  ShieldCheck, Lock, Globe, Wallet,
  Leaf, Briefcase, Truck, ArrowLeftRight,
  Scale, FileText, Code, Database, RefreshCw,
  Zap, CheckCircle2, DollarSign, Layers,
  Activity // Added Activity to imports
} from 'lucide-react';



/* --- MAIN CONTENT --- */
const TokenizationPage = () => {
  const heroRef = useRef(null);


  // Parallax Effect
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const { width, height } = heroRef.current.getBoundingClientRect();
    const x = (e.clientX / width - 0.5) * 20;
    const y = (e.clientY / height - 0.5) * 20;
    heroRef.current.style.setProperty('--x', `${x}deg`);
    heroRef.current.style.setProperty('--y', `${-y}deg`);
  };


  return (
    <div className="font-sans text-slate-800 bg-[#f8fafc] overflow-x-hidden selection:bg-[#dc1e25] selection:text-white">
     


      {/* 1. HERO SECTION: Asset Transformation */}
      <div className="relative min-h-screen flex items-center overflow-hidden bg-[#203253]" onMouseMove={handleMouseMove} ref={heroRef}>
        {/* Animated Gold Dust Background */}
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#2a4066] via-[#203253] to-[#0f172a]"></div>
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/gold-scale.png')] animate-float-slow"></div>
           
           {/* Floating Token Particles */}
           {[...Array(15)].map((_, i) => (
              <div key={i} className="absolute w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15] animate-rise"
                   style={{
                     left: `${Math.random() * 100}%`,
                     animationDuration: `${Math.random() * 4 + 2}s`,
                     animationDelay: `${i * 0.5}s`
                   }}>
              </div>
           ))}
        </div>


        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center pt-20">
         
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <Coins size={14} className="text-yellow-400 animate-pulse" />
                <span className="text-blue-200 text-xs font-mono font-bold tracking-widest uppercase">Real-World Assets On-Chain</span>
             </div>
             
             <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">
               Unlock <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-gray-400">Liquid Value.</span>
             </h1>
             
             <p className="text-xl text-gray-300 leading-relaxed max-w-lg border-l-4 border-[#dc1e25] pl-6">
               Transform real-world assets into programmable digital tokens. Enable fractional ownership, instant settlement, and global liquidity for your enterprise.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="px-8 py-4 bg-[#dc1e25] text-white font-bold rounded hover:bg-[#b0141a] transition-all flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(220,30,37,0.4)]">
                   <ArrowLeftRight size={20} className="group-hover:rotate-180 transition-transform"/> Tokenize Assets
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 flex items-center justify-center gap-2 group backdrop-blur-sm">
                   <FileText size={20} /> Download RWA Guide
                </button>
             </div>
          </div>


          {/* Visual: The Digital Alchemy */}
          <div className="relative h-[600px] flex items-center justify-center perspective-[1000px]">
             <div
               className="relative w-full max-w-md aspect-square flex items-center justify-center"
               style={{ transform: `rotateX(var(--y)) rotateY(var(--x))` }}
             >
                {/* Physical Asset (Building) dissolving */}
                <div className="absolute left-0 bottom-10 w-40 h-64 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg transform -rotate-12 opacity-80 border border-gray-600 shadow-2xl flex items-center justify-center group z-10">
                   <Building size={64} className="text-gray-400"/>
                   <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent to-[#203253] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                </div>


                {/* Stream of Tokens */}
                <div className="absolute inset-0 flex justify-center items-center">
                   {/* Flow Line */}
                   <svg className="w-full h-full pointer-events-none">
                      <path d="M100,400 Q250,250 400,100" fill="none" stroke="url(#goldGrad)" strokeWidth="4" strokeDasharray="10,5" className="animate-dash-slow"/>
                      <defs>
                         <linearGradient id="goldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#facc15" />
                            <stop offset="100%" stopColor="transparent" />
                         </linearGradient>
                      </defs>
                   </svg>
                </div>


                {/* Digital Token (Gold Coin) */}
                <div className="absolute right-0 top-10 w-48 h-48 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full shadow-[0_0_60px_rgba(250,204,21,0.6)] flex items-center justify-center animate-float z-20">
                   <div className="w-40 h-40 bg-[#203253] rounded-full flex items-center justify-center border-4 border-yellow-300">
                      <span className="text-4xl font-black text-yellow-400">$XPT</span>
                   </div>
                   
                   {/* Orbiting Elements */}
                   <div className="absolute w-60 h-60 border border-white/10 rounded-full animate-spin-slow"></div>
                   <div className="absolute -top-4 right-0 bg-white text-[#203253] text-xs font-bold px-3 py-1 rounded-full shadow-lg">Fractionalized</div>
                </div>


             </div>
          </div>
        </div>
      </div>


      {/* 2. OVERVIEW: The Equation */}
      <div className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
           
            {/* Visual: The Formula */}
            <div className="relative p-10 bg-slate-50 rounded-3xl border border-slate-200 shadow-xl flex items-center justify-center">
               <div className="flex items-center gap-4 text-[#203253]">
                  {/* Asset */}
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-md">
                        <Building size={32} className="text-gray-500"/>
                     </div>
                     <span className="text-xs font-bold uppercase">Asset</span>
                  </div>


                  <div className="text-2xl font-black text-gray-300">+</div>


                  {/* Wrapper */}
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-md">
                        <Scale size={32} className="text-blue-500"/>
                     </div>
                     <span className="text-xs font-bold uppercase">Legal</span>
                  </div>


                  <div className="text-2xl font-black text-gray-300">+</div>


                  {/* Tech */}
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-xl flex items-center justify-center shadow-md">
                        <Code size={32} className="text-[#dc1e25]"/>
                     </div>
                     <span className="text-xs font-bold uppercase">Code</span>
                  </div>


                  <div className="text-2xl font-black text-[#dc1e25]">=</div>


                  {/* Result */}
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-20 h-20 bg-[#203253] border-4 border-yellow-400 rounded-full flex items-center justify-center shadow-2xl animate-pulse-slow">
                        <Coins size={32} className="text-yellow-400"/>
                     </div>
                     <span className="text-xs font-bold uppercase text-[#dc1e25]">Security Token</span>
                  </div>
               </div>
            </div>


            <div>
               <h2 className="text-4xl font-bold text-[#203253] mb-6">The Future of <span className="text-[#dc1e25]">Ownership</span></h2>
               <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Tokenization is financial evolution. By tokenizing assets, organizations can break high-value items into affordable fractions, opening markets to a global pool of investors.
               </p>
               <p className="text-gray-500 mb-8 leading-relaxed">
                  XPACE provides an end-to-end Tokenization Platform. We handle the lifecycle: legal structure definition, coding security tokens, custody integration, and issuance.
               </p>
               
               <div className="flex gap-6">
                  <StatBox label="Liquidity" val="Global" />
                  <StatBox label="Settlement" val="Instant" />
               </div>
            </div>
         </div>
      </div>


      {/* 3. CORE FEATURES: Token Grid (Dark Mode) */}
      <div className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
         {/* Tech Overlay */}
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <span className="text-[#dc1e25] font-bold tracking-widest uppercase text-xs mb-2 block">Platform Capabilities</span>
               <h2 className="text-4xl font-bold text-white">Tokenization Suite</h2>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <FeatureCard
                  icon={<ShieldCheck size={32}/>}
                  title="Security Token Offerings"
                  desc="Developing compliant tokens representing equity or debt, with embedded regulatory rules."
               />
               <FeatureCard
                  icon={<Building size={32}/>}
                  title="RWA Tokenization"
                  desc="Digitizing physical goods like Real Estate, Fine Art, and Commodities into blockchain assets."
               />
               <FeatureCard
                  icon={<PieChart size={32}/>}
                  title="Fractionalization"
                  desc="Splitting a $10M asset into 10 million $1 tokens, managing cap tables automatically."
               />
               <FeatureCard
                  icon={<Users size={32}/>}
                  title="KYC/AML Integration"
                  desc="Ensuring only whitelisted, verified investors can hold or trade your tokens via identity providers."
               />
               <FeatureCard
                  icon={<Wallet size={32}/>}
                  title="Custody Solutions"
                  desc="Implementing institutional-grade custody (Fireblocks, BitGo) to safeguard assets."
               />
               <FeatureCard
                  icon={<RefreshCw size={32}/>}
                  title="Lifecycle Management"
                  desc="Tools for dividend distribution, voting, and corporate actions directly on-chain."
               />
            </div>
         </div>
      </div>


      {/* 4. BUSINESS BENEFITS: Market Clock Visual */}
      <div className="py-24 bg-[#f8fafc]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-[#203253] mb-4">Value of Digital Assets</h2>
               <div className="w-16 h-1 bg-[#dc1e25] mx-auto"></div>
            </div>


            <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               {/* Visual: Time Comparison */}
               <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden">
                  <div className="flex justify-between items-center gap-8 h-64">
                     {/* Traditional Market (9-5) */}
                     <div className="flex-1 flex flex-col items-center justify-center opacity-40">
                        <div className="w-32 h-32 rounded-full border-4 border-gray-300 flex items-center justify-center relative">
                           <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gray-200 rounded-tr-full"></div>
                           <span className="text-2xl font-bold text-gray-400 z-10">9-5</span>
                        </div>
                        <span className="text-xs font-bold text-gray-500 mt-4 uppercase">Stock Market</span>
                     </div>


                     {/* Token Market (24/7) */}
                     <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-4 border-[#dc1e25] flex items-center justify-center relative shadow-[0_0_30px_rgba(220,30,37,0.2)]">
                           <RefreshCw size={48} className="text-[#dc1e25] animate-spin-slow"/>
                        </div>
                        <span className="text-xs font-bold text-[#203253] mt-4 uppercase">Token Market</span>
                        <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded mt-1">24/7/365</div>
                     </div>
                  </div>
               </div>


               <div className="space-y-8">
                  <BenefitRow
                     title="Deep Liquidity"
                     desc="Lower investment thresholds attract a global pool of investors, increasing asset liquidity."
                  />
                  <BenefitRow
                     title="Automated Compliance"
                     desc="The token knows who can own it. It blocks transfers to non-compliant wallets automatically."
                  />
                  <BenefitRow
                     title="Operational Efficiency"
                     desc="Dividends and voting are automated via smart contracts, removing manual paperwork cost."
                  />
               </div>
            </div>
         </div>
      </div>


      {/* 5. USE CASES: Asset Portfolio App */}
      <div className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#203253] mb-16 text-center">Where We Apply This</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <AssetCard
                  title="Real Estate"
                  share="1.5%"
                  asset="Office Tower A"
                  val="$15,000"
                  icon={<Building size={20}/>}
                  color="bg-blue-100 text-blue-700"
               />
               <AssetCard
                  title="Green Finance"
                  share="500 T"
                  asset="Carbon Credits"
                  val="$22,500"
                  icon={<Leaf size={20}/>}
                  color="bg-green-100 text-green-700"
               />
               <AssetCard
                  title="Private Equity"
                  share="0.05%"
                  asset="Startup Stake"
                  val="$50,000"
                  icon={<Briefcase size={20}/>}
                  color="bg-purple-100 text-purple-700"
               />
               <AssetCard
                  title="Supply Chain"
                  share="100%"
                  asset="Invoice Factoring"
                  val="$8,200"
                  icon={<Truck size={20}/>}
                  color="bg-orange-100 text-orange-700"
               />
            </div>
         </div>
      </div>


      {/* 6. DELIVERY APPROACH: Token Lifecycle */}
      <div className="py-24 bg-[#203253] text-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-3xl font-bold mb-20 text-center">Tokenization Lifecycle</h2>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0">
                 <div className="absolute top-0 left-0 h-full bg-[#dc1e25] w-1/2 animate-pulse"></div>
              </div>
             
              <StepNode num="01" title="Structure" icon={<Scale size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="02" title="Code" icon={<Code size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="03" title="Platform" icon={<Layers size={18}/>} highlight />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="04" title="Mint" icon={<Zap size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="05" title="Manage" icon={<Activity size={18}/>} />
           </div>
        </div>
      </div>


      {/* 7. FUTURE FOCUS: The Trillion Dollar Market */}
      <div className="py-24 bg-slate-50 text-center relative overflow-hidden">
         <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="mb-6 flex justify-center">
               <div className="p-4 bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg border border-gray-100">
                  <Globe size={40} className="text-[#dc1e25] animate-pulse"/>
               </div>
            </div>
            <h2 className="text-3xl font-bold text-[#203253] mb-4">The Trillion-Dollar Opportunity</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
               BCG estimates asset tokenization will be a $16 Trillion market by 2030. XPACE ensures you are an early mover, preparing you for a world where every asset class is on-chain.
            </p>
         </div>
      </div>


      {/* 8. CTA */}
      <div className="bg-[#dc1e25] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <h2 className="text-5xl font-black mb-8">Liquidate Your Assets</h2>
           <p className="text-xl text-white/90 mb-12">The era of illiquid assets is over. Unlock hidden value with XPACE Tokenization.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-white text-[#dc1e25] font-bold rounded shadow-xl hover:scale-105 transition-transform">Schedule Workshop</button>
              <button className="px-10 py-4 bg-[#203253]/30 border border-white/30 text-white font-bold rounded hover:bg-[#203253]/50 transition-colors">Download RWA Guide</button>
           </div>
        </div>
      </div>


      
    </div>
  );
};


/* --- SUB COMPONENTS --- */


const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group hover:-translate-y-1 hover:border-[#dc1e25]/50">
     <div className="w-12 h-12 bg-[#dc1e25] rounded-lg flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform">
        {icon}
     </div>
     <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
     <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
  </div>
);


const BenefitRow = ({ title, desc }) => (
  <div className="flex gap-4">
     <div className="mt-1 p-1 bg-green-100 rounded-full text-green-600 h-fit"><CheckCircle2 size={16}/></div>
     <div>
        <h4 className="font-bold text-[#203253] text-lg">{title}</h4>
        <p className="text-gray-500 text-sm mt-1">{desc}</p>
     </div>
  </div>
);


const AssetCard = ({ title, share, asset, val, icon, color }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group hover:border-[#dc1e25]">
     <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-50 rounded-lg text-[#203253] group-hover:bg-[#dc1e25] group-hover:text-white transition-colors">{icon}</div>
        <div className={`px-2 py-1 text-[10px] font-bold rounded flex items-center gap-1 ${color}`}>
           {share} Share
        </div>
     </div>
     <div className="mb-4">
        <div className="text-xs text-gray-400 font-bold uppercase">{title}</div>
        <h3 className="text-lg font-bold text-[#203253]">{asset}</h3>
     </div>
     <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-xs text-gray-500">Value</span>
        <span className="text-sm font-black text-[#203253]">{val}</span>
     </div>
  </div>
);


const StepNode = ({ num, title, icon, highlight }) => (
  <div className={`relative z-10 flex flex-col items-center p-4 rounded-xl w-32 transition-all duration-500 ${highlight ? 'bg-[#dc1e25] shadow-lg scale-110' : 'bg-[#1a2b4b] border border-white/10 hover:border-white/30'}`}>
     <div className={`mb-2 ${highlight ? 'text-white' : 'text-gray-400'}`}>{icon}</div>
     <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${highlight ? 'text-white/80' : 'text-gray-500'}`}>Step {num}</div>
     <div className="font-bold text-white text-sm">{title}</div>
  </div>
);


const StatBox = ({ label, val }) => (
  <div className="p-4 bg-slate-50 border-l-4 border-blue-500 rounded-r-lg">
     <div className="text-2xl font-bold text-[#203253]">{val}</div>
     <div className="text-xs text-gray-500 uppercase tracking-wide">{label}</div>
  </div>
);


export default TokenizationPage;