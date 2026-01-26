

import { 
  Menu, X, ChevronDown, ArrowRight,
  Atom, Brain, Globe, Eye, FlaskConical, 
  Microscope, Lightbulb, Share2, FileText, 
  MapPin, Rocket, Box, Cpu, Network, 
  Zap, Beaker, BookOpen, Layers, DNA,
  CheckCircle2, Play, Users, Target, Sparkles,
  Workflow, Code, Terminal, Coffee, Laptop, 
  Award, Heart, CloudLightning
} from 'lucide-react';


/* --- MAIN CONTENT --- */
const RDPage = () => {




  return (
    <div className="font-sans text-slate-800 bg-[#f8fafc] overflow-x-hidden selection:bg-[#dc1e25] selection:text-white min-h-screen relative">


      {/* 1. HERO SECTION: The Lab of Tomorrow */}
      <div className="relative min-h-[850px] flex items-center overflow-hidden bg-[#203253]">
        {/* Scientific Grid */}
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#2a4066] via-[#203253] to-[#0f172a]"></div>
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/microbial-mat.png')] animate-pulse-slow"></div>
           
           {/* Floating Molecules */}
           {[...Array(25)].map((_, i) => (
              <div key={i} className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float" 
                   style={{
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                     animationDuration: `${Math.random() * 5 + 5}s`,
                     opacity: 0.4
                   }}>
              </div>
           ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center pt-20">
          
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <Microscope size={14} className="text-[#dc1e25] animate-pulse" />
                <span className="text-blue-200 text-xs font-mono font-bold tracking-widest uppercase">XPACE Labs: Online</span>
             </div>
             
             <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">
               Where Science <br/>
               Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-[#dc1e25]">Strategy.</span>
             </h1>
             
             <p className="text-xl text-gray-300 leading-relaxed max-w-lg border-l-4 border-[#dc1e25] pl-6">
               We don’t just predict the future; we invent it. Our R&D division explores Quantum, AGI, and Spatial Computing to solve tomorrow's problems right here in our labs.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="px-8 py-4 bg-[#dc1e25] text-white font-bold rounded hover:bg-[#b0141a] transition-all flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(220,30,37,0.4)]">
                   <FlaskConical size={20} className="group-hover:rotate-12 transition-transform" /> Join Our Research
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 flex items-center justify-center gap-2 group backdrop-blur-sm">
                   <Lightbulb size={20} /> View Innovation
                </button>
             </div>
          </div>

          {/* Visual: The Quantum Core (3D Hologram) */}
          <div className="relative h-[600px] flex items-center justify-center perspective-[1000px]">
             <div 
               className="relative w-full max-w-md aspect-square flex items-center justify-center"
               style={{ transform: `rotateX(var(--y)) rotateY(var(--x))` }}
             >
                {/* Central Atom */}
                <div className="absolute z-20 w-48 h-48 bg-[#0f172a] rounded-full border-4 border-[#dc1e25] flex flex-col items-center justify-center shadow-[0_0_80px_rgba(220,30,37,0.5)] animate-pulse-slow backdrop-blur-xl">
                   <Atom size={64} className="text-white mb-2 animate-spin-slow"/>
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">R&D Core</span>
                </div>

                {/* Electron Orbits */}
                <div className="absolute w-[450px] h-[450px] border border-blue-500/30 rounded-full animate-spin-ultra-slow"></div>
                <div className="absolute w-[450px] h-[450px] border border-dashed border-[#dc1e25]/20 rounded-full animate-spin-slow-reverse transform rotate-45"></div>
                <div className="absolute w-[550px] h-[550px] border border-white/5 rounded-full animate-spin-slow"></div>

                {/* Floating Tech Particles */}
                <OrbitParticle icon={<Brain size={20}/>} pos="top-0 left-1/2" color="bg-blue-600" />
                <OrbitParticle icon={<Globe size={20}/>} pos="bottom-0 right-1/2" color="bg-green-600" />
                <OrbitParticle icon={<Eye size={20}/>} pos="top-1/2 right-0" color="bg-purple-600" />
                <OrbitParticle icon={<Zap size={20}/>} pos="top-1/2 left-0" color="bg-yellow-500" />
             </div>
          </div>
        </div>
      </div>

      {/* 2. OVERVIEW: The Innovation Philosophy */}
      <div className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
            
            {/* Visual: The DNA Funnel */}
            <div className="relative p-10 bg-slate-50 border border-slate-200 rounded-3xl shadow-xl flex items-center justify-center h-[500px]">
               <div className="relative w-full h-full flex flex-col items-center justify-between">
                  {/* Raw Ideas (Top) */}
                  <div className="flex gap-4 animate-float">
                     <div className="p-3 bg-gray-200 rounded-full shadow-md"><Lightbulb size={20} className="text-gray-500"/></div>
                     <div className="p-3 bg-gray-200 rounded-full shadow-md"><Beaker size={20} className="text-gray-500"/></div>
                     <div className="p-3 bg-gray-200 rounded-full shadow-md"><Network size={20} className="text-gray-500"/></div>
                  </div>
                  
                  {/* DNA Spiral (Processing) */}
                  <div className="flex-1 w-[2px] bg-gradient-to-b from-gray-300 via-[#dc1e25] to-blue-500 relative my-4">
                     <div className="absolute top-1/4 left-[-20px] w-10 h-10 border-2 border-dashed border-[#dc1e25] rounded-full animate-spin-slow flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#dc1e25] rounded-full"></div>
                     </div>
                     <div className="absolute top-2/3 left-[-20px] w-10 h-10 border-2 border-dashed border-blue-500 rounded-full animate-spin-slow-reverse flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                     </div>
                  </div>

                  {/* Validated Product (Bottom) */}
                  <div className="p-6 bg-[#203253] text-white rounded-2xl shadow-2xl border-b-4 border-[#dc1e25] flex flex-col items-center gap-2 transform scale-110">
                     <Box size={32} className="text-[#dc1e25]"/>
                     <span className="text-xs font-bold uppercase">Market Ready</span>
                  </div>
               </div>
            </div>

            <div>
               <h2 className="text-4xl font-bold text-[#203253] mb-6">From "What If" to <span className="text-[#dc1e25]">"What Is"</span></h2>
               <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Innovation isn't accidental; it's engineered. At XPACE, R&D is our primary growth driver. We follow a disciplined "Innovation Funnel" approach.
               </p>
               <p className="text-gray-500 mb-8 leading-relaxed">
                  We monitor global trends, prototype rapidly, and validate commercially right here in our dedicated labs. We focus on technologies 3-5 years away from mass adoption, giving our clients and partners a significant "First Mover" advantage.
               </p>
               
               <div className="flex gap-6">
                  <StatBox label="Horizon" val="3-5 Years" />
                  <StatBox label="Focus" val="Applied Science" />
               </div>
            </div>
         </div>
      </div>

      {/* 3. CORE RESEARCH: The Discovery Grid */}
      <div className="py-24 bg-[#f8fafc] relative">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <span className="text-[#dc1e25] font-bold tracking-widest uppercase text-xs mb-2 block">Research Frontiers</span>
               <h2 className="text-4xl font-bold text-[#203253]">Core Domains</h2>
               <div className="w-16 h-1 bg-[#dc1e25] mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               <ResearchCard 
                  icon={<Brain size={40}/>} 
                  title="AGI & Neuro-Symbolic AI" 
                  desc="Researching systems that reason and learn like humans. Focus on Causal Inference and Explainable AI (XAI)."
                  color="border-blue-500"
               />
               <ResearchCard 
                  icon={<Atom size={40}/>} 
                  title="Quantum Computing" 
                  desc="Preparing for Quantum Supremacy. Focus on Post-Quantum Cryptography (PQC) and supply chain algorithms."
                  color="border-purple-500"
               />
               <ResearchCard 
                  icon={<Globe size={40}/>} 
                  title="Web3 & Identity" 
                  desc="Moving beyond tokens to sovereign infrastructure. Focus on Zero-Knowledge Proofs (ZKPs) and Decentralized Identity."
                  color="border-green-500"
               />
               <ResearchCard 
                  icon={<Eye size={40}/>} 
                  title="HCI & BCI" 
                  desc="Redefining command. Focus on Non-invasive Brain-Computer Interfaces and advanced haptic feedback."
                  color="border-orange-500"
               />
            </div>
         </div>
      </div>

      {/* 4. INTERNAL LABS: Our Innovation Culture */}
      <div className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-[#203253] mb-4">Inside XPACE Labs</h2>
               <p className="text-gray-500 max-w-2xl mx-auto">
                  Our office is a living laboratory where curiosity meets code. This is how we build the future.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <CultureCard 
                  title="The Sandbox" 
                  desc="A dedicated zone where engineers are free to break things, experiment with alpha-stage tech, and prototype wild ideas."
                  icon={<Box size={32}/>}
                  img="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=400"
               />
               <CultureCard 
                  title="The Think Tank" 
                  desc="Weekly deep-dive sessions where data scientists and strategists debate the ethical and practical implications of emerging tech."
                  icon={<Brain size={32}/>}
                  img="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400"
               />
               <CultureCard 
                  title="The Build Squad" 
                  desc="Our elite rapid-response team that takes successful experiments and turns them into scalable, production-ready solutions."
                  icon={<Rocket size={32}/>}
                  img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400"
               />
            </div>
         </div>
      </div>

      {/* 5. COLLABORATION: The Partnership */}
      <div className="py-24 bg-[#203253] text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
               <h2 className="text-3xl font-bold text-white mb-6">Co-Innovate with Us</h2>
               <p className="text-lg text-blue-200 mb-6">
                  XPACE offers select enterprise clients access to our R&D capabilities through our "Co-Innovation Partner Program."
               </p>
               <ul className="space-y-6">
                  <BenefitItem text="Early Access to Alpha Tech" />
                  <BenefitItem text="Joint IP Creation" />
                  <BenefitItem text="Custom Research Sprints" />
               </ul>
            </div>
            
            <div className="relative p-10 bg-white/5 border border-white/10 rounded-3xl shadow-lg backdrop-blur-sm">
               <div className="grid grid-cols-2 gap-6">
                  <div className="h-32 bg-white/10 rounded-xl shadow-inner flex items-center justify-center border border-white/5"><Share2 size={32} className="text-white"/></div>
                  <div className="h-32 bg-[#dc1e25] rounded-xl shadow-lg flex items-center justify-center text-white transform -rotate-2"><Lightbulb size={32}/></div>
                  <div className="h-32 bg-white rounded-xl shadow-lg flex items-center justify-center text-[#203253] transform rotate-2"><Rocket size={32}/></div>
                  <div className="h-32 bg-white/10 rounded-xl shadow-inner flex items-center justify-center border border-white/5"><Network size={32} className="text-white"/></div>
               </div>
            </div>
         </div>
      </div>

      {/* 6. FUELING YOUR GENIUS: Why Talent Joins Us (New Section) */}
      <div className="py-24 bg-white relative">
         <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
               <span className="text-[#dc1e25] font-bold uppercase tracking-widest text-xs">For Researchers & Engineers</span>
               <h2 className="text-4xl font-bold text-[#203253] mt-2">Fueling Your Genius</h2>
               <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                  We built XPACE Labs as a haven for thinkers who want to do their best work without bureaucracy.
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <PerkCard 
                  title="Unlimited Compute" 
                  desc="Access to high-end GPU clusters for AI training."
                  icon={<Cpu size={24}/>} 
                  color="bg-blue-50 text-blue-600"
               />
               <PerkCard 
                  title="Blue Sky Freedom" 
                  desc="20% time policy to work on your own passion projects."
                  icon={<CloudLightning size={24}/>} 
                  color="bg-purple-50 text-purple-600"
               />
               <PerkCard 
                  title="Global Impact" 
                  desc="Your code won't sit on a shelf. It will ship to millions."
                  icon={<Globe size={24}/>} 
                  color="bg-green-50 text-green-600"
               />
               <PerkCard 
                  title="Top Tier Gear" 
                  desc="Best-in-class hardware, from MacBooks to VR headsets."
                  icon={<Laptop size={24}/>} 
                  color="bg-orange-50 text-orange-600"
               />
            </div>
         </div>
      </div>

      {/* 7. CTA */}
      <div className="bg-[#dc1e25] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <h2 className="text-5xl font-black mb-8">Future-Proof Your Enterprise</h2>
           <p className="text-xl text-white/90 mb-12">The technology that will disrupt your industry hasn't been invented yet—but we are working on it.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-white text-[#dc1e25] font-bold rounded shadow-xl hover:scale-105 transition-transform">Visit XPACE Labs</button>
              <button className="px-10 py-4 bg-[#203253]/30 border border-white/30 text-white font-bold rounded hover:bg-[#203253]/50 transition-colors">Join Our Team</button>
           </div>
        </div>
      </div>

    </div>
  );
};

/* --- SUB COMPONENTS --- */

const OrbitParticle = ({ icon, pos, color }) => {
  const positionClasses = {
    "top-0 left-1/2": "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    "bottom-0 right-1/2": "bottom-0 right-1/2 translate-x-1/2 translate-y-1/2",
    "top-1/2 right-0": "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
    "top-1/2 left-0": "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div 
      className={`absolute w-12 h-12 ${color} rounded-full flex items-center justify-center shadow-lg text-white z-10 animate-float ${positionClasses[pos]}`}
    >
       {icon}
    </div>
  );
};

const ResearchCard = ({ icon, title, desc, color }) => (
  <div className={`bg-white p-8 rounded-2xl border-l-4 ${color} shadow-lg hover:shadow-2xl transition-all group hover:-translate-y-1`}>
     <div className="mb-6 p-3 bg-slate-50 rounded-lg w-fit text-[#203253] group-hover:bg-[#203253] group-hover:text-white transition-colors">{icon}</div>
     <h3 className="text-xl font-bold text-[#203253] mb-3">{title}</h3>
     <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

const BenefitItem = ({ text }) => (
  <li className="flex items-center gap-3">
     <div className="w-1.5 h-1.5 rounded-full bg-[#dc1e25]"></div>
     <span className="text-white font-medium">{text}</span>
  </li>
);

// Replaces Location Card with Culture Card
const CultureCard = ({ title, desc, img, icon }) => (
  <div className="group relative h-80 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
     <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
     <div className="absolute inset-0 bg-gradient-to-t from-[#203253] via-[#203253]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
     <div className="absolute top-6 right-6 p-2 bg-white/10 backdrop-blur-sm rounded-lg text-white">
        {icon}
     </div>
     <div className="absolute bottom-0 left-0 p-8 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
     </div>
  </div>
);

// New Component: Perk Card
const PerkCard = ({ title, desc, icon, color }) => (
   <div className="p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl transition-all group hover:border-[#dc1e25]">
      <div className={`mb-4 p-3 rounded-xl w-fit ${color} group-hover:scale-110 transition-transform`}>{icon}</div>
      <h4 className="text-lg font-bold text-[#203253] mb-2">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
   </div>
);

const StatBox = ({ label, val }) => (
  <div className="p-4 bg-slate-50 border-l-4 border-[#dc1e25] rounded-r-lg">
     <div className="text-2xl font-bold text-[#203253]">{val}</div>
     <div className="text-xs text-gray-500 uppercase tracking-wide">{label}</div>
  </div>
);

export default RDPage;
