
import {
  Menu, X, ChevronDown, ArrowRight,
  Lightbulb, Rocket, MousePointer2, Cpu,
  Users, BarChart3, Target, Zap,
  Layers, Code, Smartphone, CheckCircle2,
  RefreshCw, FlaskConical, Pencil, Box,
  Fingerprint, Monitor, Layout, Activity // Added Activity to imports
} from 'lucide-react';




/* --- MAIN CONTENT --- */
const InnovationPrototypingPage = () => {
 


  return (
    <div className="font-sans text-slate-800 bg-[#f8fafc] overflow-x-hidden selection:bg-[#dc1e25] selection:text-white">
    


      {/* 1. HERO SECTION: The Acceleration Chamber */}
      <div className="relative min-h-screen flex items-center overflow-hidden bg-[#203253]">
        {/* Background Blueprint Grid */}
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#2a4066] via-[#203253] to-[#0f172a]"></div>
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
           
           {/* Speed Lines */}
           {[...Array(15)].map((_, i) => (
              <div key={i} className="absolute h-[1px] w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-scan-fast"
                   style={{
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                     animationDuration: `${Math.random() * 2 + 1}s`,
                     animationDelay: `${i * 0.1}s`
                   }}>
              </div>
           ))}
        </div>


        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center pt-20">
         
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <FlaskConical size={14} className="text-[#dc1e25] animate-pulse" />
                <span className="text-blue-200 text-xs font-mono font-bold tracking-widest uppercase">Rapid Innovation Lab</span>
             </div>
             
             <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">
               Fast-Track <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-blue-500">Your Vision.</span>
             </h1>
             
             <p className="text-xl text-gray-300 leading-relaxed max-w-lg border-l-4 border-[#dc1e25] pl-6">
               We rapidly transform abstract ideas into tangible POCs and MVPs. Validate market potential before committing to full-scale development.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="px-8 py-4 bg-[#dc1e25] text-white font-bold rounded hover:bg-[#b0141a] transition-all flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(220,30,37,0.4)]">
                   <Rocket size={20} className="group-hover:-translate-y-1 transition-transform"/> Start Design Sprint
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 flex items-center justify-center gap-2 group backdrop-blur-sm">
                   <Layout size={20} /> See MVP Examples
                </button>
             </div>
          </div>


          {/* Visual: The Evolution Hologram */}
          <div className="relative h-[600px] flex items-center justify-center perspective-[1000px]">
             <div
               className="relative w-full max-w-md aspect-square flex items-center justify-center"
               style={{ transform: `rotateX(var(--y)) rotateY(var(--x))` }}
             >
                {/* 3D Wireframe Cube (Idea) */}
                <div className="absolute left-0 bottom-20 w-32 h-32 border-2 border-dashed border-gray-500/50 rounded-xl flex items-center justify-center animate-float">
                   <Lightbulb size={40} className="text-gray-400 opacity-50"/>
                   <span className="absolute -bottom-6 text-[10px] text-gray-500 font-bold uppercase">Concept</span>
                </div>


                {/* Arrow */}
                <div className="absolute bottom-32 left-36 w-20 h-[2px] bg-gradient-to-r from-gray-500 to-cyan-500">
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
                </div>


                {/* Polished App Interface (Reality) */}
                <div className="absolute right-0 top-10 w-60 h-[400px] bg-gradient-to-br from-[#1e293b] to-black rounded-[30px] border-4 border-[#203253] shadow-2xl overflow-hidden flex flex-col transform rotate-y-[-10deg] hover:rotate-y-0 transition-transform duration-500 z-10">
                   {/* App Screen */}
                   <div className="flex-1 bg-white relative">
                      <div className="h-14 bg-[#203253] w-full flex items-center justify-center">
                         <div className="w-20 h-4 bg-white/20 rounded-full"></div>
                      </div>
                      <div className="p-4 space-y-4">
                         <div className="h-32 bg-slate-100 rounded-xl animate-pulse"></div>
                         <div className="flex gap-2">
                            <div className="h-10 w-10 bg-blue-100 rounded-full"></div>
                            <div className="flex-1 space-y-2">
                               <div className="h-3 w-3/4 bg-slate-200 rounded"></div>
                               <div className="h-3 w-1/2 bg-slate-200 rounded"></div>
                            </div>
                         </div>
                         <div className="h-10 bg-[#dc1e25] rounded-lg shadow-lg mt-8 flex items-center justify-center text-white text-xs font-bold">
                            LAUNCH PRODUCT
                         </div>
                      </div>
                     
                      {/* Holographic Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-scan-vertical pointer-events-none"></div>
                   </div>
                </div>


                {/* Floating Tags */}
                <Tag label="Time-to-Market" val="4 Weeks" pos="-top-4 right-10" color="green" delay="0s" />
                <Tag label="Risk Level" val="Minimized" pos="bottom-10 -left-4" color="blue" delay="1s" />


             </div>
          </div>
        </div>
      </div>


      {/* 2. OVERVIEW: The Funnel of Success */}
      <div className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
           
            {/* Visual: The Innovation Funnel */}
            <div className="relative p-10 bg-slate-50 rounded-3xl border border-slate-200 shadow-xl flex items-center justify-center">
               <div className="flex flex-col items-center gap-2 w-full max-w-sm">
                  {/* Top: 100 Ideas */}
                  <div className="w-full bg-gray-200 p-3 rounded-lg text-center opacity-60">
                     <div className="flex justify-center gap-2 mb-1">
                        <Lightbulb size={16} className="text-gray-500"/>
                        <Lightbulb size={16} className="text-gray-500"/>
                        <Lightbulb size={16} className="text-gray-500"/>
                     </div>
                     <span className="text-xs font-bold text-gray-500">100 IDEAS</span>
                  </div>


                  {/* Funnel Shape */}
                  <div className="w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-t-[100px] border-t-gray-300 relative my-2">
                     <div className="absolute -top-[90px] left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <div className="w-10 h-10 bg-[#203253] rounded-full flex items-center justify-center shadow-lg border-2 border-[#dc1e25] animate-pulse-slow">
                           <FlaskConical size={20} className="text-white"/>
                        </div>
                        <span className="text-[10px] font-bold text-[#203253] bg-white px-2 py-0.5 rounded mt-1">XPACE LAB</span>
                     </div>
                  </div>


                  {/* Bottom: 1 Proven Product */}
                  <div className="w-32 bg-[#203253] p-4 rounded-xl text-center shadow-2xl border-b-4 border-[#dc1e25] transform hover:scale-105 transition-transform">
                     <Rocket size={32} className="text-white mx-auto mb-2"/>
                     <span className="text-xs font-bold text-white uppercase">1 MVP</span>
                  </div>
               </div>
            </div>


            <div>
               <h2 className="text-4xl font-bold text-[#203253] mb-6">Fail Fast, <span className="text-[#dc1e25]">Succeed Faster</span></h2>
               <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Innovation is risky. Building a full product without validation is a recipe for wasted budget. XPACE applies a "Lean Startup" methodology to enterprise innovation.
               </p>
               <p className="text-gray-500 mb-8 leading-relaxed">
                  We bridge the gap between "Idea" and "Production." We build "just enough" to prove value—delivering interactive prototypes you can put in the hands of investors or users to gather critical feedback.
               </p>
               
               <div className="flex gap-6">
                  <StatBox label="Development Risk" val="Low" />
                  <StatBox label="Validation Speed" val="High" />
               </div>
            </div>
         </div>
      </div>


      {/* 3. CORE FEATURES: Lab Grid (Dark Mode) */}
      <div className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
         {/* Tech Overlay */}
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <span className="text-[#dc1e25] font-bold tracking-widest uppercase text-xs mb-2 block">Our Toolkit</span>
               <h2 className="text-4xl font-bold text-white">Innovation Capabilities</h2>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <FeatureCard
                  icon={<FlaskConical size={32}/>}
                  title="Proof of Concept (POC)"
                  desc="Building small, technical experiments to answer specific feasibility questions (e.g., AI accuracy)."
               />
               <FeatureCard
                  icon={<Rocket size={32}/>}
                  title="Minimum Viable Product"
                  desc="Developing a functional version with only core features needed to enter the market."
               />
               <FeatureCard
                  icon={<MousePointer2 size={32}/>}
                  title="Interactive Prototypes"
                  desc="High-fidelity click-through models (Figma) that look real but require no coding."
               />
               <FeatureCard
                  icon={<Cpu size={32}/>}
                  title="Hardware/IoT Prototyping"
                  desc="Integrating software with sensors (Raspberry Pi/Arduino) to test connected devices."
               />
               <FeatureCard
                  icon={<Users size={32}/>}
                  title="User Testing"
                  desc="Facilitating sessions where real users interact with the prototype to provide data-driven insights."
               />
               <FeatureCard
                  icon={<RefreshCw size={32}/>}
                  title="Rapid Iteration"
                  desc="Agile sprints focused on refining the product based on immediate feedback loops."
               />
            </div>
         </div>
      </div>


      {/* 4. BUSINESS BENEFITS: Risk Graph */}
      <div className="py-24 bg-[#f8fafc]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-[#203253] mb-4">Value of Rapid Iteration</h2>
               <div className="w-16 h-1 bg-[#dc1e25] mx-auto"></div>
            </div>


            <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               {/* Visual: Risk vs Time Graph */}
               <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                     <h3 className="font-bold text-[#203253]">Development Risk Profile</h3>
                     <div className="text-xs font-bold text-gray-400">PROJECT TIMELINE</div>
                  </div>
                 
                  <div className="relative h-64 w-full">
                     {/* Risk Line (Dropping) */}
                     <svg className="absolute inset-0 w-full h-full overflow-visible">
                        <path d="M0,20 Q100,20 200,150 L400,220" fill="none" stroke="#22c55e" strokeWidth="4" />
                        <circle cx="200" cy="150" r="6" fill="#22c55e" className="animate-ping" />
                        <text x="220" y="140" className="text-xs fill-green-600 font-bold">Prototyping Phase</text>
                     </svg>
                     
                     {/* Traditional Risk (High) */}
                     <svg className="absolute inset-0 w-full h-full overflow-visible opacity-30">
                        <path d="M0,20 L400,20" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
                        <text x="300" y="15" className="text-xs fill-red-500">Traditional Dev Risk</text>
                     </svg>


                     {/* Grid */}
                     <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 border-l border-b border-gray-200 opacity-50"></div>
                  </div>
               </div>


               <div className="space-y-8">
                  <BenefitRow
                     title="De-Risk Investment"
                     desc="Spend small to validate an idea before spending millions. If it fails, fail cheap and move on."
                  />
                  <BenefitRow
                     title="Accelerated Time-to-Market"
                     desc="Launch a working version in weeks. Being first to market often determines the winner."
                  />
                  <BenefitRow
                     title="Investor Confidence"
                     desc="Don't just pitch a deck. Show a working product. Prototypes dramatically increase funding success."
                  />
               </div>
            </div>
         </div>
      </div>


      {/* 5. USE CASES: Scenario Cards */}
      <div className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#203253] mb-16 text-center">Where We Apply This</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <ScenarioCard
                  title="FinTech"
                  desc="Neo-Bank App"
                  sub="User Engagement Test"
                  icon={<Target size={24}/>}
                  color="bg-blue-100 text-blue-700"
               />
               <ScenarioCard
                  title="Corporate"
                  desc="Internal Tools"
                  sub="Workflow Validation"
                  icon={<Briefcase size={24}/>}
                  color="bg-gray-100 text-gray-700"
               />
               <ScenarioCard
                  title="Healthcare"
                  desc="Patient Monitor"
                  sub="Usability Testing"
                  icon={<Activity size={24}/>} // Replaced HeartPulse with Activity
                  color="bg-green-100 text-green-700"
               />
               <ScenarioCard
                  title="Retail"
                  desc="Magic Mirror"
                  sub="AR Shopping POC"
                  icon={<ShoppingBag size={24}/>}
                  color="bg-purple-100 text-purple-700"
               />
            </div>
         </div>
      </div>


      {/* 6. DELIVERY APPROACH: The Sprint Cycle */}
      <div className="py-24 bg-[#203253] text-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-3xl font-bold mb-20 text-center">4-Week Sprint Cycle</h2>
           
           <div className="relative flex justify-center items-center h-80">
               {/* Central Hub */}
               <div className="absolute z-20 w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(220,30,37,0.5)]">
                  <RefreshCw size={40} className="text-[#dc1e25] animate-spin-slow"/>
                  <span className="text-xs font-bold text-[#203253] mt-2">ITERATE</span>
               </div>


               {/* Orbiting Steps */}
               <CycleNode title="Ideate" icon={<Lightbulb size={20}/>} angle={0} />
               <CycleNode title="Design" icon={<Pencil size={20}/>} angle={90} />
               <CycleNode title="Build" icon={<Code size={20}/>} angle={180} />
               <CycleNode title="Test" icon={<CheckCircle2 size={20}/>} angle={270} />


               {/* Orbit Path */}
               <div className="absolute w-[400px] h-[400px] border-2 border-dashed border-white/20 rounded-full animate-spin-ultra-slow"></div>
           </div>
        </div>
      </div>


      {/* 7. FUTURE FOCUS: Generative Prototyping */}
      <div className="py-24 bg-slate-50 text-center relative overflow-hidden">
         <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="mb-6 flex justify-center">
               <div className="p-4 bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg border border-gray-100">
                  <Cpu size={40} className="text-[#dc1e25] animate-pulse"/>
               </div>
            </div>
            <h2 className="text-3xl font-bold text-[#203253] mb-4">AI-Generated Prototyping</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
               XPACE is leveraging Generative AI to speed up design. We use AI to generate code snippets, UI layouts, and copy instantly, reducing prototype build time by up to 50%.
            </p>
         </div>
      </div>


      {/* 8. CTA */}
      <div className="bg-[#dc1e25] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <h2 className="text-5xl font-black mb-8">Test Your Next Big Idea</h2>
           <p className="text-xl text-white/90 mb-12">Don't let ideas die on the drawing board. Validate, build, and launch in weeks.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-white text-[#dc1e25] font-bold rounded shadow-xl hover:scale-105 transition-transform">Start Design Sprint</button>
              <button className="px-10 py-4 bg-[#203253]/30 border border-white/30 text-white font-bold rounded hover:bg-[#203253]/50 transition-colors">See MVP Examples</button>
           </div>
        </div>
      </div>


    </div>
  );
};


/* --- SUB COMPONENTS --- */


const Tag = ({ label, val, pos, color, delay }) => {
  const colors = {
    blue: 'border-blue-400 text-blue-300',
    green: 'border-green-400 text-green-300',
  };
  return (
    <div className={`absolute ${pos} bg-[#0f172a]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border-l-4 ${colors[color]} shadow-xl animate-float`} style={{animationDelay: delay}}>
       <div className="text-[8px] text-gray-400 uppercase tracking-widest">{label}</div>
       <div className="text-xs font-bold text-white">{val}</div>
    </div>
  );
};


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


const ScenarioCard = ({ title, desc, sub, icon, color }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group hover:border-[#dc1e25]">
     <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-50 rounded-lg text-[#203253] group-hover:bg-[#dc1e25] group-hover:text-white transition-colors">{icon}</div>
        <div className={`px-2 py-1 text-[10px] font-bold rounded flex items-center gap-1 ${color}`}>
           Beta
        </div>
     </div>
     <h3 className="text-lg font-bold text-[#203253] mb-1">{title}</h3>
     <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{desc}</div>
     <p className="text-xs text-gray-500 leading-relaxed bg-gray-50 p-2 rounded border border-gray-100">{sub}</p>
  </div>
);


const CycleNode = ({ title, icon, angle }) => {
   const radius = 200;
   const rad = (angle * Math.PI) / 180;
   return (
      <div
         className="absolute flex flex-col items-center gap-2"
         style={{
            top: `calc(50% + ${Math.sin(rad) * radius}px)`,
            left: `calc(50% + ${Math.cos(rad) * radius}px)`,
            transform: 'translate(-50%, -50%)'
         }}
      >
         <div className="w-16 h-16 bg-[#1a2b4b] border-2 border-white/20 rounded-full flex items-center justify-center text-white shadow-lg animate-float">
            {icon}
         </div>
         <span className="text-xs font-bold text-gray-300 uppercase bg-[#0f172a] px-2 py-1 rounded">{title}</span>
      </div>
   );
};


const StatBox = ({ label, val }) => (
  <div className="p-4 bg-slate-50 border-l-4 border-blue-500 rounded-r-lg">
     <div className="text-2xl font-bold text-[#203253]">{val}</div>
     <div className="text-xs text-gray-500 uppercase tracking-wide">{label}</div>
  </div>
);


// Lucide Helpers
const Briefcase = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const ShoppingBag = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;


export default InnovationPrototypingPage;
