
"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronDown, ArrowRight,
  Send, CheckCircle2, User, Mail,
  Building, MessageSquare, Briefcase,
  DollarSign, Calendar, Paperclip,
  Sparkles, ShieldCheck, Zap, Globe,
  Layers, Rocket, Code, Cpu,
  Monitor, Smartphone, Database, Server
} from 'lucide-react';





/* --- MAIN CONTENT --- */
const RequestProposalPage = () => {
  const [formStep, setFormStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [budget, setBudget] = useState(null);
 
  const handleServiceToggle = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };


  return (
    <div className="font-sans text-slate-800 bg-[#f8fafc] overflow-x-hidden selection:bg-[#dc1e25] selection:text-white min-h-screen relative">
     


      {/* BACKGROUND ELEMENTS - Creative Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {/* Large Abstract Shape Top Right */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-[200px] -z-10"></div>
         {/* Decorative Dots */}
         <div className="absolute top-40 left-10 opacity-20">
            <div className="grid grid-cols-12 gap-2">
               {[...Array(48)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#203253] rounded-full"></div>)}
            </div>
         </div>
         {/* Floating Line */}
         <svg className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
            <path d="M0,100 Q400,300 800,100 T1600,200" fill="none" stroke="#dc1e25" strokeWidth="2" strokeDasharray="10,10" className="animate-dash-slow" />
         </svg>
      </div>


      <div className="relative z-10 pt-10 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
         
          {/* LEFT COLUMN: The Pitch & Info */}
          <div className="lg:col-span-5 space-y-12 pt-10">
             
             {/* Headline Block */}
             <div className="space-y-6 relative">
                <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-[#dc1e25] to-transparent"></div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full text-[#203253] text-xs font-bold uppercase tracking-wider border border-blue-100">
                   <Sparkles size={12} className="text-[#dc1e25]" /> Let's Collaborate
                </div>
                <h1 className="text-5xl lg:text-6xl font-black text-[#203253] leading-tight">
                   Transform <br/>
                   Your <span className="text-[#dc1e25] relative inline-block">
                      Vision
                      <svg className="absolute w-full h-3 bottom-1 left-0 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                         <path d="M0,5 Q50,10 100,5" stroke="#dc1e25" strokeWidth="2" fill="none" opacity="0.3"/>
                      </svg>
                   </span> <br/>
                   Into Reality.
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                   Ready to innovate? Tell us about your project. Whether it's a new product, a digital transformation, or a complex integration, XPACE is your strategic partner.
                </p>
             </div>


             {/* Trust Indicators */}
             <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group hover:border-[#dc1e25]/20 transition-all">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><ShieldCheck size={80}/></div>
                <h3 className="font-bold text-[#203253] mb-4 flex items-center gap-2">
                   <ShieldCheck size={20} className="text-[#dc1e25]"/> Why Start Now?
                </h3>
                <div className="space-y-3">
                   <TrustItem text="Strict NDA Protection Guaranteed" />
                   <TrustItem text="Response within 24 Hours" />
                   <TrustItem text="Detailed Proposal & Roadmap" />
                </div>
             </div>


             {/* Client Logos (Placeholder) */}
             <div className="pt-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Trusted by Industry Leaders</p>
                <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                   <div className="h-8 w-24 bg-gray-300 rounded"></div>
                   <div className="h-8 w-24 bg-gray-300 rounded"></div>
                   <div className="h-8 w-24 bg-gray-300 rounded"></div>
                </div>
             </div>
          </div>


          {/* RIGHT COLUMN: The Interactive Form Card */}
          <div className="lg:col-span-7">
             <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden relative">
               
                {/* Decorative Header */}
                <div className="bg-[#203253] p-6 flex justify-between items-center text-white relative overflow-hidden">
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                   <div className="relative z-10 flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                         <Rocket size={20} className="text-white"/>
                      </div>
                      <div>
                         <h3 className="font-bold text-lg">Project Configurator</h3>
                         <p className="text-[10px] text-blue-200 uppercase tracking-wider">Step {formStep} of 3</p>
                      </div>
                   </div>
                   {/* Progress Ring */}
                   <div className="relative w-12 h-12 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                         <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.1)" strokeWidth="4" fill="none"/>
                         <circle cx="24" cy="24" r="20" stroke="#dc1e25" strokeWidth="4" fill="none" strokeDasharray="125" strokeDashoffset={125 - (125 * formStep / 3)} className="transition-all duration-500"/>
                      </svg>
                      <span className="absolute text-xs font-bold">{Math.round((formStep/3)*100)}%</span>
                   </div>
                </div>


                <div className="p-8 md:p-10">
                   {/* STEP 1: SERVICES */}
                   {formStep === 1 && (
                      <div className="space-y-8 animate-fade-in-up">
                         <div>
                            <h2 className="text-2xl font-bold text-[#203253] mb-2">What are we building?</h2>
                            <p className="text-gray-500 text-sm">Select the services you need. We'll tailor the team accordingly.</p>
                         </div>
                         
                         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <ServiceTile icon={<Code/>} label="Custom Software" active={selectedServices.includes('Software')} onClick={() => handleServiceToggle('Software')} />
                            <ServiceTile icon={<Layers/>} label="Web3 & Blockchain" active={selectedServices.includes('Web3')} onClick={() => handleServiceToggle('Web3')} />
                            <ServiceTile icon={<Cpu/>} label="AI & Automation" active={selectedServices.includes('AI')} onClick={() => handleServiceToggle('AI')} />
                            <ServiceTile icon={<Globe/>} label="Cloud Infra" active={selectedServices.includes('Cloud')} onClick={() => handleServiceToggle('Cloud')} />
                            <ServiceTile icon={<ShieldCheck/>} label="Cybersecurity" active={selectedServices.includes('Security')} onClick={() => handleServiceToggle('Security')} />
                            <ServiceTile icon={<Monitor/>} label="UI/UX Design" active={selectedServices.includes('Design')} onClick={() => handleServiceToggle('Design')} />
                            <ServiceTile icon={<Smartphone/>} label="Mobile Apps" active={selectedServices.includes('Mobile')} onClick={() => handleServiceToggle('Mobile')} />
                            <ServiceTile icon={<Zap/>} label="Rapid MVP" active={selectedServices.includes('MVP')} onClick={() => handleServiceToggle('MVP')} />
                            <ServiceTile icon={<User/>} label="Consulting" active={selectedServices.includes('Consulting')} onClick={() => handleServiceToggle('Consulting')} />
                         </div>


                         <div className="flex justify-end pt-4">
                            <button
                              onClick={() => setFormStep(2)}
                              disabled={selectedServices.length === 0}
                              className={`px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg ${selectedServices.length > 0 ? 'bg-[#dc1e25] text-white hover:bg-[#b0141a] transform hover:translate-x-1' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                            >
                               Next Step <ArrowRight size={18}/>
                            </button>
                         </div>
                      </div>
                   )}


                   {/* STEP 2: DETAILS */}
                   {formStep === 2 && (
                      <div className="space-y-8 animate-fade-in-up">
                         <div>
                            <h2 className="text-2xl font-bold text-[#203253] mb-2">Project Scope</h2>
                            <p className="text-gray-500 text-sm">Help us understand your constraints and goals.</p>
                         </div>


                         <div className="space-y-8">
                            {/* Budget Slider */}
                            <div>
                               <label className="block text-xs font-bold text-[#203253] uppercase mb-4 tracking-wider flex items-center gap-2">
                                  <DollarSign size={14} className="text-[#dc1e25]"/> Investment Range
                               </label>
                               <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                  {['<$25k', '$25k - $50k', '$50k - $100k', '$100k+'].map((range) => (
                                     <div
                                        key={range}
                                        onClick={() => setBudget(range)}
                                        className={`p-4 rounded-xl border cursor-pointer text-center transition-all ${budget === range ? 'bg-[#203253] border-[#203253] text-white shadow-lg scale-105' : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-[#dc1e25] hover:text-[#dc1e25]'}`}
                                     >
                                        <span className="text-sm font-bold">{range}</span>
                                     </div>
                                  ))}
                               </div>
                            </div>


                            {/* Description Input */}
                            <div>
                               <label className="block text-xs font-bold text-[#203253] uppercase mb-4 tracking-wider flex items-center gap-2">
                                  <MessageSquare size={14} className="text-[#dc1e25]"/> Project Brief
                               </label>
                               <textarea
                                  className="w-full h-32 bg-gray-50 border border-gray-200 rounded-xl p-4 text-[#203253] focus:border-[#dc1e25] focus:bg-white focus:outline-none transition-all resize-none placeholder-gray-400 shadow-inner"
                                  placeholder="Describe your goals, target audience, and key features..."
                               ></textarea>
                            </div>


                            {/* Attachment */}
                            <div className="flex items-center justify-between p-4 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl hover:border-[#dc1e25] transition-colors cursor-pointer group">
                               <div className="flex items-center gap-3">
                                  <div className="p-2 bg-white rounded-lg text-gray-400 group-hover:text-[#dc1e25] shadow-sm"><Paperclip size={18}/></div>
                                  <div className="text-sm text-gray-500 group-hover:text-[#203253] font-medium">Upload RFP / Specs</div>
                               </div>
                               <span className="text-xs text-gray-400 bg-white px-2 py-1 rounded border border-gray-200">Optional</span>
                            </div>
                         </div>


                         <div className="flex justify-between pt-8 border-t border-gray-100">
                            <button onClick={() => setFormStep(1)} className="text-gray-500 hover:text-[#203253] text-sm font-bold flex items-center gap-2 px-4"><ArrowRight className="rotate-180" size={16}/> Back</button>
                            <button onClick={() => setFormStep(3)} className="px-8 py-4 bg-[#dc1e25] text-white font-bold rounded-xl hover:bg-[#b0141a] transition-all flex items-center gap-2 shadow-lg hover:shadow-red-200">
                               Next Step <ArrowRight size={18}/>
                            </button>
                         </div>
                      </div>
                   )}


                   {/* STEP 3: CONTACT */}
                   {formStep === 3 && (
                      <div className="space-y-8 animate-fade-in-up">
                         <div>
                            <h2 className="text-2xl font-bold text-[#203253] mb-2">Final Details</h2>
                            <p className="text-gray-500 text-sm">Where should we send the proposal?</p>
                         </div>


                         <div className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                               <InputGroup label="Full Name" icon={<User size={18}/>} placeholder="Elon Musk" />
                               <InputGroup label="Work Email" icon={<Mail size={18}/>} placeholder="elon@x.com" type="email" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                               <InputGroup label="Company" icon={<Building size={18}/>} placeholder="SpaceX" />
                               <InputGroup label="Position" icon={<Briefcase size={18}/>} placeholder="CEO" />
                            </div>
                           
                            <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-start gap-3">
                               <CheckCircle2 size={20} className="text-blue-600 mt-0.5 shrink-0"/>
                               <div>
                                  <h5 className="text-sm font-bold text-[#203253]">Priority Support</h5>
                                  <p className="text-xs text-blue-700 mt-1">
                                     Our enterprise team reviews all inquiries within 4 hours. You'll receive a detailed roadmap, not just a price tag.
                                  </p>
                               </div>
                            </div>
                         </div>


                         <div className="flex justify-between pt-8 border-t border-gray-100">
                            <button onClick={() => setFormStep(2)} className="text-gray-500 hover:text-[#203253] text-sm font-bold flex items-center gap-2 px-4"><ArrowRight className="rotate-180" size={16}/> Back</button>
                            <button className="px-10 py-4 bg-[#203253] text-white font-bold rounded-xl hover:bg-[#1a2942] transition-all shadow-xl flex items-center gap-2 transform hover:scale-105">
                               Submit Request <Send size={18}/>
                            </button>
                         </div>
                      </div>
                   )}
                </div>
             </div>
          </div>


        </div>
      </div>


      {/* 3. FAQ SECTION: Quick Answers (Clean Light) */}
      <div className="py-24 bg-white border-t border-gray-100">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#203253] mb-12 text-center">Common Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
               <FAQCard q="What is your typical timeline?" a="Timelines vary by scope. A simple MVP can take 4-8 weeks, while enterprise platforms may take 3-6 months."/>
               <FAQCard q="Do you sign NDAs?" a="Yes. Intellectual property protection is our priority. We sign NDAs before discussing sensitive details."/>
               <FAQCard q="What is your pricing model?" a="We offer Fixed Price for defined scopes and Time & Materials for agile, evolving projects."/>
               <FAQCard q="Do you provide post-launch support?" a="Absolutely. We offer SLAs for maintenance, updates, and 24/7 monitoring."/>
            </div>
         </div>
      </div>


      {/* 4. CTA BAR */}
      <div className="bg-[#203253] py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
           <h2 className="text-3xl font-bold mb-6">Prefer to talk directly?</h2>
           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="mailto:hello@xpace.tech" className="flex items-center gap-2 text-lg font-bold hover:text-[#dc1e25] transition-colors"><Mail/> hello@xpace.tech</a>
              <span className="hidden sm:block text-gray-500">|</span>
              <a href="tel:+15551234567" className="flex items-center gap-2 text-lg font-bold hover:text-[#dc1e25] transition-colors"><Briefcase/> +1 (555) 123-4567</a>
           </div>
        </div>
      </div>


    
    </div>
  );
};


/* --- SUB COMPONENTS --- */


const ServiceTile = ({ icon, label, active, onClick }) => (
  <div
     onClick={onClick}
     className={`group p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-3 h-36 relative overflow-hidden ${active ? 'bg-[#203253] border-[#203253] text-white shadow-xl scale-105' : 'bg-white border-gray-100 text-gray-400 hover:border-[#dc1e25] hover:text-[#dc1e25] hover:shadow-lg'}`}
  >
     <div className={`relative z-10 transition-transform duration-300 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>{icon}</div>
     <span className="relative z-10 text-xs font-bold uppercase tracking-wide text-center">{label}</span>
  </div>
);


const InputGroup = ({ label, icon, placeholder, type = "text" }) => (
   <div className="space-y-2">
      <label className="text-xs font-bold text-[#203253] uppercase tracking-wider pl-1">{label}</label>
      <div className="relative group">
         <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#dc1e25] transition-colors">{icon}</div>
         <input
            type={type}
            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 text-[#203253] focus:border-[#dc1e25] focus:bg-white focus:outline-none transition-all placeholder-gray-400 shadow-inner"
            placeholder={placeholder}
         />
      </div>
   </div>
);


const TrustItem = ({ text }) => (
   <div className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-[#dc1e25]"></div>
      <span className="text-sm font-medium text-gray-600">{text}</span>
   </div>
);


const FAQCard = ({ q, a }) => (
  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-[#dc1e25]/30 transition-all hover:shadow-md">
     <h4 className="text-[#203253] font-bold mb-2 flex items-start gap-2"><MessageSquare size={16} className="text-[#dc1e25] mt-1 shrink-0"/> {q}</h4>
     <p className="text-sm text-gray-500 leading-relaxed pl-6">{a}</p>
  </div>
);


export default RequestProposalPage;
