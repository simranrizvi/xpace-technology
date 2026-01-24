
import {
  Menu, X, ChevronDown, ArrowRight,
  Compass, Map, Lightbulb, PieChart,
  Gavel, CheckSquare, ShieldAlert, Zap,
  Briefcase, Users, Gamepad2, HeartHandshake,
  GraduationCap, Target, FileText, Layers,
  Globe, Fingerprint, BarChart
} from 'lucide-react';





/* --- MAIN CONTENT --- */
const Web3ConsultingPage = () => {



  return (
    <div className="font-sans text-slate-800 bg-[#f8fafc] overflow-x-hidden selection:bg-[#dc1e25] selection:text-white">
  


      {/* 1. HERO SECTION: The Navigator */}
      <div className="relative min-h-screen flex items-center overflow-hidden bg-[#203253]">
        {/* Background Map Grid */}
        <div className="absolute inset-0 overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2a4066] via-[#203253] to-[#0f172a]"></div>
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
           
           {/* Connecting Nodes */}
           {[...Array(15)].map((_, i) => (
              <div key={i} className="absolute w-[2px] h-20 bg-gradient-to-t from-transparent via-blue-400 to-transparent opacity-20 animate-rise"
                   style={{
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                     animationDuration: `${Math.random() * 4 + 3}s`,
                     animationDelay: `${i * 0.5}s`
                   }}>
              </div>
           ))}
        </div>


        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center pt-20">
         
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
             <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <Compass size={14} className="text-[#dc1e25] animate-spin-slow" />
                <span className="text-blue-200 text-xs font-mono font-bold tracking-widest uppercase">Strategic Web3 Advisory</span>
             </div>
             
             <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">
               Navigate the <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-gray-400">Future.</span>
             </h1>
             
             <p className="text-xl text-gray-300 leading-relaxed max-w-lg border-l-4 border-[#dc1e25] pl-6">
               We cut through the hype to provide strategic, actionable Web3 guidance. Innovate with purpose, not FOMO.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="px-8 py-4 bg-[#dc1e25] text-white font-bold rounded hover:bg-[#b0141a] transition-all flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(220,30,37,0.4)]">
                   <Lightbulb size={20} className="group-hover:scale-110 transition-transform"/> Book Discovery Workshop
                </button>
                <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/10 flex items-center justify-center gap-2 group backdrop-blur-sm">
                   <Map size={20} /> View Roadmap
                </button>
             </div>
          </div>


          {/* Visual: The Strategic Compass */}
          <div className="relative h-[600px] flex items-center justify-center perspective-[1200px]">
             <div
               className="relative w-full max-w-md aspect-square flex items-center justify-center"
               style={{ transform: `rotateX(var(--y)) rotateY(var(--x))` }}
             >
                {/* 3D Compass Core */}
                <div className="absolute z-20 w-48 h-48 bg-[#0f172a] rounded-full border-4 border-[#dc1e25] shadow-[0_0_80px_rgba(220,30,37,0.5)] flex flex-col items-center justify-center animate-pulse-slow backdrop-blur-xl">
                   <Compass size={64} className="text-white mb-2"/>
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Strategy Core</span>
                </div>


                {/* Orbiting Rings */}
                <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-ultra-slow pointer-events-none"></div>
                <div className="absolute inset-8 border border-dashed border-blue-500/30 rounded-full animate-spin-slow-reverse pointer-events-none"></div>


                {/* Strategic Nodes */}
                <OrbitNode title="Tokenomics" icon={<PieChart size={20}/>} angle={0} color="border-yellow-400" />
                <OrbitNode title="Regulation" icon={<Gavel size={20}/>} angle={120} color="border-blue-400" />
                <OrbitNode title="Tech Stack" icon={<Layers size={20}/>} angle={240} color="border-green-400" />


                {/* Laser Beams */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[#dc1e25] to-transparent -translate-x-1/2 -translate-y-1/2 animate-scan-radar"></div>
                </div>
             </div>
          </div>
        </div>
      </div>


      {/* 2. OVERVIEW: The Bridge */}
      <div className="py-24 bg-white relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
           
            {/* Visual: Web2 to Web3 Bridge */}
            <div className="relative p-10 bg-slate-50 rounded-3xl border border-slate-200 shadow-xl flex items-center justify-center h-[400px]">
               <div className="flex items-center justify-between w-full relative z-10 px-4">
                  {/* Web2 Side */}
                  <div className="flex flex-col items-center gap-3 opacity-60">
                     <div className="w-20 h-24 bg-gray-200 rounded-lg flex items-center justify-center shadow-inner border border-gray-300">
                        <Briefcase size={32} className="text-gray-500"/>
                     </div>
                     <span className="text-xs font-bold text-gray-400 uppercase">Enterprise (Web2)</span>
                  </div>


                  {/* Bridge */}
                  <div className="flex-1 h-[2px] bg-gray-300 mx-4 relative overflow-hidden">
                     <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#dc1e25] to-transparent animate-slide-right"></div>
                  </div>


                  {/* Web3 Side */}
                  <div className="flex flex-col items-center gap-3">
                     <div className="w-20 h-24 bg-[#203253] rounded-lg flex items-center justify-center shadow-2xl border-2 border-[#dc1e25] transform scale-110">
                        <Globe size={32} className="text-white"/>
                     </div>
                     <span className="text-xs font-bold text-[#203253] uppercase">Decentralized (Web3)</span>
                  </div>
               </div>
               
               {/* Overlay Graphic */}
               <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full border border-green-200 shadow-lg flex items-center gap-2">
                  <CheckSquare size={14} className="text-green-600"/>
                  <span className="text-xs font-bold text-green-700">Strategic Alignment</span>
               </div>
            </div>


            <div>
               <h2 className="text-4xl font-bold text-[#203253] mb-6">Strategic Foresight for the <span className="text-[#dc1e25]">New Internet</span></h2>
               <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Web3 offers immense opportunities, but also significant risks. Many organizations rush in without a plan. XPACE ensures your entry is calculated and secure.
               </p>
               <p className="text-gray-500 mb-8 leading-relaxed">
                  Our consulting practice covers the full spectrum. From educating your C-suite on DeFi and DAOs to structuring your first tokenomics model, we bridge the gap between traditional corporate strategy and the decentralized economy.
               </p>
               
               <div className="flex gap-6">
                  <StatBox label="Risk Clarity" val="100%" />
                  <StatBox label="FOMO" val="Zero" />
               </div>
            </div>
         </div>
      </div>


      {/* 3. CORE FEATURES: Advisory Grid (Dark) */}
      <div className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
               <span className="text-[#dc1e25] font-bold tracking-widest uppercase text-xs mb-2 block">Our Expertise</span>
               <h2 className="text-4xl font-bold text-white">Advisory Capabilities</h2>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <FeatureCard
                  icon={<Lightbulb size={32}/>}
                  title="Strategy Workshops"
                  desc="Deep-dive sessions with leadership to brainstorm use cases and assess feasibility."
               />
               <FeatureCard
                  icon={<PieChart size={32}/>}
                  title="Tokenomics Design"
                  desc="Engineering economic models (supply, utility) to ensure long-term sustainability."
               />
               <FeatureCard
                  icon={<Gavel size={32}/>}
                  title="Regulatory Guidance"
                  desc="Navigating the complex regulatory environment (SEC, MiCA) for compliance."
               />
               <FeatureCard
                  icon={<CheckSquare size={32}/>}
                  title="Feasibility Studies"
                  desc="Analyzing if you actually need a blockchain or just a database. We focus on value."
               />
               <FeatureCard
                  icon={<Layers size={32}/>}
                  title="Protocol Selection"
                  desc="Helping you choose the right L1/L2 (Ethereum, Polygon, Solana) for your needs."
               />
               <FeatureCard
                  icon={<ShieldAlert size={32}/>}
                  title="Risk Assessment"
                  desc="Identifying technical, legal, and PR risks before you write a single line of code."
               />
            </div>
         </div>
      </div>


      {/* 4. BUSINESS BENEFITS: Balanced Scorecard */}
      <div className="py-24 bg-[#f8fafc]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-[#203253] mb-4">Value of Expert Guidance</h2>
               <div className="w-16 h-1 bg-[#dc1e25] mx-auto"></div>
            </div>


            <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               {/* Visual: Scorecard Graph */}
               <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 relative overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                     <h3 className="font-bold text-[#203253]">Strategic Impact</h3>
                     <div className="text-xs font-bold text-gray-400">PROJECTED OUTCOME</div>
                  </div>
                 
                  <div className="space-y-6">
                     <ScoreItem label="Innovation Risk" value="Low" width="20%" color="bg-green-500" />
                     <ScoreItem label="Market Readiness" value="High" width="90%" color="bg-blue-500" />
                     <ScoreItem label="Compliance" value="100%" width="100%" color="bg-[#dc1e25]" />
                  </div>
                 
                  <div className="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">
                     Data-Driven Decision Making
                  </div>
               </div>


               <div className="space-y-8">
                  <BenefitRow
                     title="Risk Mitigation"
                     desc="Avoid costly security hacks and fines by building on a foundation of best practices."
                  />
                  <BenefitRow
                     title="Accelerated Time-to-Market"
                     desc="Stop wasting months researching. We provide blueprints to launch your pilot fast."
                  />
                  <BenefitRow
                     title="Cost Efficiency"
                     desc="Prevent over-engineering. We stop you from building a $500k blockchain when a contract suffices."
                  />
               </div>
            </div>
         </div>
      </div>


      {/* 5. USE CASES: Industry Holograms */}
      <div className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#203253] mb-16 text-center">Where We Apply This</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <ScenarioCard
                  title="Brands"
                  desc="NFT Loyalty"
                  sub="Starbucks Odyssey Model"
                  icon={<HeartHandshake size={24}/>}
               />
               <ScenarioCard
                  title="Finance"
                  desc="Crypto Custody"
                  sub="Secure Asset Handling"
                  icon={<Briefcase size={24}/>}
               />
               <ScenarioCard
                  title="Gaming"
                  desc="Play-and-Earn"
                  sub="Token Economy Design"
                  icon={<Gamepad2 size={24}/>}
               />
               <ScenarioCard
                  title="DAOs"
                  desc="Governance"
                  sub="Treasury Management"
                  icon={<Users size={24}/>}
               />
            </div>
         </div>
      </div>


      {/* 6. DELIVERY APPROACH: Advisory Framework */}
      <div className="py-24 bg-[#203253] text-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
           <h2 className="text-3xl font-bold mb-20 text-center">Advisory Framework</h2>
           
           <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 z-0">
                 <div className="absolute top-0 left-0 h-full bg-[#dc1e25] w-1/4 animate-pulse"></div>
              </div>
             
              <StepNode num="01" title="Learn" icon={<GraduationCap size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="02" title="Assess" icon={<Target size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="03" title="Design" icon={<Map size={18}/>} highlight />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="04" title="De-Risk" icon={<ShieldAlert size={18}/>} />
              <ArrowRight className="hidden lg:block text-[#dc1e25] opacity-50" />
              <StepNode num="05" title="Execute" icon={<Zap size={18}/>} />
           </div>
        </div>
      </div>


      {/* 7. FUTURE FOCUS: Metaverse Roadmap */}
      <div className="py-24 bg-slate-50 text-center relative overflow-hidden">
         <div className="max-w-3xl mx-auto px-6 relative z-10">
            <div className="mb-6 flex justify-center">
               <div className="p-4 bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-lg border border-gray-100">
                  <Fingerprint size={40} className="text-[#dc1e25] animate-pulse"/>
               </div>
            </div>
            <h2 className="text-3xl font-bold text-[#203253] mb-4">The Metaverse Roadmap</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
               Web3 is the economic layer of the Metaverse. XPACE helps you plan for Spatial Computing and Digital Identity, ensuring assets and reputation are portable to immersive worlds.
            </p>
         </div>
      </div>


      {/* 8. CTA */}
      <div className="bg-[#dc1e25] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <h2 className="text-5xl font-black mb-8">Innovate with Confidence</h2>
           <p className="text-xl text-white/90 mb-12">The future is decentralized. Don't go in blind. Chart your course in the Web3 economy.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-white text-[#dc1e25] font-bold rounded shadow-xl hover:scale-105 transition-transform">Book Discovery Workshop</button>
              <button className="px-10 py-4 bg-[#203253]/30 border border-white/30 text-white font-bold rounded hover:bg-[#203253]/50 transition-colors">Download Readiness Guide</button>
           </div>
        </div>
      </div>


    
    </div>
  );
};


/* --- SUB COMPONENTS --- */


const OrbitNode = ({ title, icon, angle, color }) => {
  const radius = 140;
  const rad = (angle * Math.PI) / 180;
  return (
    <div
      className={`absolute w-20 h-20 bg-[#1e293b] rounded-full flex flex-col items-center justify-center shadow-2xl border-4 ${color} z-10 animate-float`}
      style={{
        top: `calc(50% + ${Math.sin(rad) * radius}px)`,
        left: `calc(50% + ${Math.cos(rad) * radius}px)`,
        transform: 'translate(-50%, -50%)'
      }}
    >
       <div className="text-white mb-1">{icon}</div>
       <span className="text-[10px] font-bold text-gray-400 uppercase">{title}</span>
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
     <div className="mt-1 p-1 bg-green-100 rounded-full text-green-600 h-fit"><CheckSquare size={16}/></div>
     <div>
        <h4 className="font-bold text-[#203253] text-lg">{title}</h4>
        <p className="text-gray-500 text-sm mt-1">{desc}</p>
     </div>
  </div>
);


const ScoreItem = ({ label, value, width, color }) => (
  <div>
     <div className="flex justify-between text-xs font-bold text-gray-500 mb-1">
        <span>{label}</span>
        <span>{value}</span>
     </div>
     <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{width: width}}></div>
     </div>
  </div>
);


const ScenarioCard = ({ title, desc, sub, icon }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl transition-all group hover:border-[#dc1e25]">
     <div className="mb-4 p-3 bg-slate-50 rounded-lg w-fit text-[#203253] group-hover:bg-[#dc1e25] group-hover:text-white transition-colors">{icon}</div>
     <h3 className="text-lg font-bold text-[#203253] mb-1">{title}</h3>
     <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">{desc}</div>
     <p className="text-xs text-gray-500 leading-relaxed bg-gray-50 p-2 rounded border border-gray-100">{sub}</p>
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


export default Web3ConsultingPage;
