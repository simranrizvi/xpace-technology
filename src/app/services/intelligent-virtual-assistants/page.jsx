import React from 'react';
import { 
  Play, Briefcase, Car, Stethoscope, HardHat, 
  User, PenTool, Settings, Rocket, 
  Shield, Volume2, Activity, AlertTriangle, Clock, 
  Mic, Layers, ShieldCheck, Database, Cpu, ArrowRight, Heart 
} from 'lucide-react';

export default function Page() {


    const StepItem = ({ icon, step, title, desc, isActive = false }) => (
  <div className={`relative z-10 flex flex-col items-center group transition-all duration-200 p-6 rounded-2xl bg-white 
    ${isActive ? 'shadow-2xl -translate-y-2' : 'hover:shadow-2xl hover:-translate-y-2'}`}>
    
    {/* Top Indicator Dot */}
    <div className={`w-3 h-3 rounded-full mb-8 border-2 bg-white transition-colors duration-300
      ${isActive ? 'bg-[#dc1e25] border-[#dc1e25]' : 'border-gray-300 group-hover:bg-[#dc1e25] group-hover:border-[#dc1e25]'}`}>
    </div>

    {/* Circular Icon Container */}
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 border
      ${isActive 
        ? 'bg-[#dc1e25] border-[#dc1e25] text-white shadow-lg shadow-red-200' 
        : 'bg-white border-gray-100 text-gray-400 group-hover:bg-[#dc1e25] group-hover:border-[#dc1e25] group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-200'
      }`}>
       {React.cloneElement(icon, { size: 24 })}
    </div>

    {/* Text Content */}
    <span className="text-[10px] font-bold text-gray-400 uppercase mb-1">Step {step}</span>
    <h4 className="font-bold text-[#1a233b] mb-2 text-lg">{title}</h4>
    <p className="text-xs text-gray-500 max-w-[160px] leading-relaxed mx-auto">{desc}</p>
  </div>
);
  return (
    <div className="font-sans antialiased text-slate-800">

      {/* =========================================
          SECTION 1: HERO SECTION (Dark Blue)
      ========================================= */}
     <section className="relative bg-[#1a233b] text-white overflow-hidden py-10">
  
  {/* Background Rings/Circles (Image style) */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-screen border border-white/5 rounded-full pointer-events-none"></div>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-screen border border-white/5 rounded-full pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
    
    {/* 1. Top Pill (Live Cognitive Engine) */}
    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-gray-300 font-bold">
      <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
      Live Cognitive Engine
    </div>

    {/* 2. Main Headline with specific color/gradient */}
    <h1 className="text-5xl md:text-5xl font-extrabold mb-8 leading-[1.1] tracking-tight !text-white">
      Your Proactive <br />
      <span className="text-[#ff4d4d]">Digital Workforce.</span>
    </h1>

    {/* 3. Subheadline */}
    <p className="max-w-3xl mx-auto text-gray-400 mb-12 text-lg md:text-lg font-medium leading-relaxed">
      We engineer Intelligent Virtual Assistants that don't just wait for commands
      — they anticipate needs, manage complex workflows, and automate execution across your enterprise.
    </p>

    {/* 4. Experience Voice Demo Button (With Glow) */}
    <button className="group relative flex items-center gap-3 bg-white text-[#1a233b] px-10 py-4 rounded-full font-bold transition-all hover:scale-105 mb-15 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
      <Mic className="text-[#dc1e25]" size={20} />
      Experience Voice Demo
      {/* Outer Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-white blur-md -z-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
    </button>

    {/* 5. Bottom Status Cards (Exact Image Style) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
      
      {/* Meeting Prep Card */}
      <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col items-center text-center backdrop-blur-md">
        <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-3">
          <Briefcase size={14} /> Meeting Prep
        </div>
        <p className="text-sm font-medium text-gray-300">Q3 Report ready for review.</p>
      </div>

      {/* System Alert Card (Red) */}
      <div className="bg-[#b91c1c] p-6 rounded-2xl flex flex-col items-center text-center shadow-2xl shadow-red-900/40 relative z-20 md:-translate-y-4 border border-red-500">
        <div className="flex items-center gap-2 text-white/70 text-[10px] uppercase font-bold tracking-widest mb-3">
          <Activity size={14} className="animate-pulse" /> System Alert
        </div>
        <p className="text-sm font-bold text-white">Server load at 85%. Scaling up.</p>
      </div>

      {/* Schedule Card */}
      <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center backdrop-blur-md">
        <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-3">
          <Clock size={14} /> Schedule
        </div>
        <p className="text-sm font-medium text-gray-300">Flight to Dubai in 3 hours.</p>
      </div>

    </div>
  </div>
</section>

      {/* =========================================
          SECTION 2: COGNITIVE LAYER (White)
      ========================================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-[#1a233b] mb-2">
                A Cognitive Layer for Your
              </h2>
              <h2 className="text-4xl font-bold text-[#dc1e25] mb-6">
                Operations
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                While standard chatbots handle reactive text queries, Intelligent Virtual Assistants are designed for 
                <span className="font-bold text-gray-900"> proactive, multi-modal interaction.</span>
              </p>

              <blockquote className="border-l-4 border-[#dc1e25] pl-4 italic text-gray-500 mb-8 text-sm">
                "It's like having a dedicated analyst who never sleeps, knows every data point, and executes commands instantly."
              </blockquote>

              <ul className="space-y-4">
                {[ "Understand Context & Intent", "Multi-Modal (Voice, Text, Gesture)", "Deep System Integration" ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm font-semibold text-[#1a233b]">
                    <span className="w-1.5 h-1.5 bg-[#dc1e25] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Image + Overlay Card */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                  alt="Team working" 
                  className="w-full h-auto object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl max-w-xs border border-gray-100 hidden md:block">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1a233b] p-2 rounded-lg text-white">
                     <Activity size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a233b] text-sm">Proactive Insight</h4>
                    <span className="text-xs text-gray-400">Just Now</span>
                    <p className="text-xs text-gray-600 mt-2 leading-snug">
                      "I've noticed a 15% drop in efficiency on Line B. Shall I schedule maintenance?"
                    </p>
                    <div className="flex gap-2 mt-3">
                        <button className="bg-[#dc1e25] text-white text-[10px] px-3 py-1 rounded">Approve</button>
                        <button className="bg-gray-100 text-gray-600 text-[10px] px-3 py-1 rounded">Dismiss</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: DELIVERABLES
      ========================================= */}
      <section className="bg-[#0f111a] py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-1">
              <span className="text-[#dc1e25] font-bold text-xs tracking-widest uppercase mb-2 block">Capabilities</span>
              <h2 className="text-3xl font-bold mb-6">What We Deliver</h2>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                We build assistants that integrate deep into your ecosystem, providing secure, intelligent, and context-aware support.
              </p>
              <a href="#" className="flex items-center gap-2 text-white font-semibold text-sm hover:text-[#dc1e25] transition-colors group">
                View Technical Specs 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
              </a>
            </div>

            <div className="lg:col-span-2 space-y-4">
               <FeatureCard 
                 icon={<Mic />} title="Multi-Modal Interaction" 
                 desc="Switch seamlessly between voice and text. Perfect for hands-free environments like healthcare or manufacturing."
               />
               <FeatureCard 
                 icon={<Cpu />} title="Proactive Intelligence" 
                 desc="The system doesn't just wait. It analyzes data streams to offer suggestions before problems occur."
               />
               <FeatureCard 
                 icon={<ShieldCheck />} title="Biometric Security" 
                 desc="Voiceprint and facial recognition ensure that only authorized personnel can access sensitive data."
               />
               <FeatureCard 
                 icon={<Layers />} title="Enterprise Integration" 
                 desc="Hooks into ERP, CRM, and IoT systems to pull reports and adjust machinery settings instantly."
               />
                <FeatureCard 
                 icon={<Database />} title="Contextual Memory" 
                 desc="Remembers user preferences and past interactions, creating a fluid, human-like workflow."
               />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: INDUSTRY APPLICATIONS
      ========================================= */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1a233b]">Industry Applications</h2>
          <p className="text-gray-500 mt-2 text-sm">See how our Intelligent Virtual Assistants solve specific challenges across different sectors.</p>
          <div className="w-16 h-1 bg-[#dc1e25] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <IndustryCard 
            icon={<Briefcase />} title="Corporate Executive" subtitle="THE KNOWLEDGE ASSOCIATE"
            query="Prepare the Q3 revenue breakdown."
            response="Q3 Report generated. Revenue is up 12%. Sending to your inbox now."
            benefit="Instant Data Retrieval"
          />
          <IndustryCard 
            icon={<Car />} title="Automotive" subtitle="IN-CAR COMPANION"
            query="Find the nearest charging station."
            response="Found 3 stations. The closest is 2 miles away. Rerouting..."
            benefit="Driver Safety & Focus"
          />
          <IndustryCard 
            icon={<Stethoscope />} title="Healthcare" subtitle="GUARDIAN'S VIRTUAL ASSISTANT"
            query="Show patient vitals history."
            response="Displaying heart rate and BP trends on the main monitor."
            benefit="Sterile Operation"
          />
          <IndustryCard 
            icon={<HardHat />} title="Industrial Field Service" subtitle="FIELD TECHNICIAN SUPPORT"
            query="Read safety protocol for Valve 4."
            response="Valve 4 is high pressure. Step 1: Isolate the main feed..."
            benefit="Compliance & Safety"
          />
        </div>
      </section>

     
      {/* =========================================
    SECTION 5: DEVELOPMENT LIFECYCLE (Updated)
========================================= */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <span className="text-[#dc1e25] font-bold text-xs tracking-widest uppercase mb-2 block">Our Process</span>
    <h2 className="text-4xl font-bold text-[#1a233b] mb-16">Development Lifecycle</h2>

    <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
      {/* Background Connecting Line */}
      <div className="hidden md:block absolute top-[52px] left-0 w-full h-0.5 bg-gray-100 -z-0"></div>
      
      <StepItem icon={<User />} step="01" title="Persona" desc="Defining voice, tone, and personality." />
      <StepItem icon={<PenTool />} step="02" title="Design" desc="Mapping VUI flows and handling interruptions." />
      <StepItem icon={<Database />} step="03" title="Knowledge" desc="Building the data graph for relationships." />
      <StepItem icon={<Settings />} step="04" title="Testing" desc="Real world testing in noisy environments." />
      
      {/* Step 5 is passed as 'isActive' to show the red state by default like your image */}
      <StepItem icon={<Rocket />} step="05" title="Launch" desc="Deployment with continuous learning loops."  />
    </div>
  </div>
</section>

      {/* =========================================
          SECTION 6: WHY XPACE
      ========================================= */}
      <section className="bg-[#1a233b] py-24 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
               <span className="text-[#dc1e25] font-bold text-lg">( • )</span>
               <h3 className="font-bold text-lg">Ambient Computing</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              XPACE is building towards a future where the interface disappears. Our AIs are the first step towards responsive, invisible technology stacks for the Metaverse and Smart Spaces.
            </p>
            <div className="bg-gray-700/50 h-1.5 rounded-full w-full mb-2">
              <div className="bg-[#dc1e25] h-1.5 rounded-full w-2/3"></div>
            </div>
            <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-wider">
              <span>Current Gen</span>
              <span>Next Gen Ready</span>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Why XPACE?</h2>
            <div className="space-y-8">
              <WhyItem 
                icon={<Mic size={20} />} title="Voice Tech Expertise" 
                desc="Top-tier STT/TTS engines (Google, Azure, Nuance) for clarity."
              />
              <WhyItem 
                icon={<Heart size={20} />} title="Emotional Intelligence" 
                desc="Detects stress or urgency and adapts response style."
              />
              <WhyItem 
                icon={<Shield size={20} />} title="Privacy First" 
                desc="Secure processing of sensitive voice data locally or in private clouds."
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 7: CTA / FOOTER TOP
      ========================================= */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#1a233b] mb-4">Upgrade Your Interface</h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          The keyboard is no longer the only way to work. Redefine productivity.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#dc1e25] text-white px-8 py-3 rounded font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20">
            Experience Video Demo
          </button>
          <button className="bg-white text-[#1a233b] border-2 border-[#1a233b] px-8 py-3 rounded font-bold hover:bg-gray-50 transition-colors">
            Consult VUI Experts
          </button>
        </div>
      </section>
    </div>
  );
}

/* =========================================
   HELPER COMPONENTS (Defined Below)
========================================= */

// 1. Feature Card
const FeatureCard = ({ icon, title, desc }) => (
  <div className="group flex items-start gap-5 p-5 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
    <div className="bg-[#1a233b] p-3 rounded-lg text-blue-400 group-hover:text-white group-hover:bg-[#dc1e25] transition-colors shrink-0">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div>
      <h3 className="font-bold text-white text-base mb-1">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

// 2. Industry Card (Corrected and Added)
const IndustryCard = ({ icon, title, subtitle, query, response, benefit }) => (
  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white group hover:-translate-y-1 transition-transform duration-300">
    <div className="bg-[#1a233b] p-4 flex justify-between items-center text-white">
      <div className="flex items-center gap-3">
        <div className="bg-white/10 p-2 rounded-lg">
           {React.cloneElement(icon, { size: 18, className: "text-white" })}
        </div>
        <div>
          <h4 className="font-bold text-sm">{title}</h4>
          <span className="text-[10px] uppercase text-blue-200 tracking-wider">{subtitle}</span>
        </div>
      </div>
      <Volume2 size={16} className="text-[#dc1e25]" />
    </div>
    
    <div className="p-6 bg-gray-50/50">
      <div className="bg-white border border-gray-200 p-3 rounded-lg mb-4 text-xs font-medium text-gray-700 shadow-sm relative">
        <span className="absolute -left-2 top-3 w-1 h-4 bg-gray-300 rounded-full"></span>
        "{query}"
      </div>
      
      <div className="bg-blue-50/50 border border-blue-100 p-3 rounded-lg text-xs text-gray-600 mb-6">
        {response}
      </div>

      <div className="flex justify-end items-center gap-1 text-[#dc1e25] text-[10px] font-bold uppercase tracking-wide">
        {benefit} <ArrowRight size={10} />
      </div>
    </div>
  </div>
);

// 3. Step Item (Added)
const StepItem = ({ icon, step, title, desc }) => (
  <div className="relative z-10 flex flex-col items-center group">
    <div className="w-20 h-20 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:border-[#dc1e25] transition-colors">
       <div className="text-gray-400 group-hover:text-[#dc1e25] transition-colors">
        {React.cloneElement(icon, { size: 24 })}
       </div>
    </div>
    <span className="text-[10px] font-bold text-gray-400 uppercase mb-1">Step {step}</span>
    <h4 className="font-bold text-[#1a233b] mb-2">{title}</h4>
    <p className="text-xs text-gray-500 max-w-[150px] leading-relaxed">{desc}</p>
  </div>
);

// 4. Why Item (Added)
const WhyItem = ({ icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1 text-[#dc1e25]">
      <div className="font-bold text-xl leading-none">×</div> 
    </div>
    <div>
      <h4 className="text-white font-bold mb-1">{title}</h4>
      <span className="text-xs text-[#dc1e25] uppercase tracking-wide block mb-1 font-semibold">{title.split(" ")[0]} Tech</span>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);