"use client"

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, ChevronRight, ArrowRight,
  MessageSquare, Bot, Cpu, Zap, Globe, 
  Smile, ShieldCheck, BarChart3, Users, 
  Smartphone, CreditCard, Stethoscope, Briefcase,
  Search, RefreshCw, Send, MessageCircle
} from 'lucide-react';



/* --- MAIN CONTENT --- */
const AIChatbotsPage = () => {
  const [activeTab, setActiveTab] = useState('smart');

  return (
    <div className="font-sans text-slate-800 bg-white overflow-x-hidden">


      {/* 1. HERO SECTION: The Intelligent Interface */}
      <div className="relative bg-[#0b0f19] min-h-[750px] flex items-center overflow-hidden">
        {/* Background Gradients (Peri Theme) */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#203253] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-900 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-10">
          
          {/* Text Content */}
          <div className="text-white space-y-6">
             <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-blue-200">Conversational AI Engine</span>
             </div>
             
             <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
               Intelligent <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-white">Conversations</span> <br/>
               for Enterprise.
             </h1>
             
             <p className="text-lg text-gray-400 leading-relaxed max-w-lg border-l-2 border-[#dc1e25] pl-6">
               Move beyond scripted responses. Build context-aware, AI-driven chatbots that understand intent and deliver human-like experiences 24/7.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-[#dc1e25] text-white font-bold rounded shadow-[0_0_30px_rgba(220,30,37,0.4)] hover:shadow-[0_0_50px_rgba(220,30,37,0.6)] transition-all flex items-center justify-center gap-2">
                   <MessageSquare size={18} /> Book a Live Demo
                </button>
                <button className="px-8 py-4 bg-transparent border border-gray-600 text-gray-300 font-bold rounded hover:border-white hover:text-white transition-all flex items-center justify-center gap-2">
                   Calculate ROI
                </button>
             </div>
          </div>

          {/* Abstract Chat UI Visual */}
          <div className="relative hidden lg:block h-[500px]">
             {/* Main Phone Interface */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[600px] bg-[#1a2333] border-8 border-[#2d3a52] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col transform rotate-[-5deg] hover:rotate-0 transition-all duration-700">
                {/* Header */}
                <div className="bg-[#203253] p-6 pt-10 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative">
                      <Bot className="text-[#203253]" size={24} />
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#203253] rounded-full"></div>
                   </div>
                   <div>
                      <div className="text-white font-bold text-sm">XPACE Assistant</div>
                      <div className="text-xs text-blue-200">Online • AI Powered</div>
                   </div>
                </div>
                
                {/* Chat Body */}
                <div className="flex-1 bg-[#0f1522] p-4 space-y-4 overflow-hidden relative">
                   <ChatBubble text="Hello! How can I help you today?" isBot delay="0s" />
                   <ChatBubble text="I need to check my order status." isBot={false} delay="1s" />
                   <ChatBubble text="Sure! I can help with that. Is it for order #XP-9021?" isBot delay="2s" />
                   <ChatBubble text="Yes, exactly." isBot={false} delay="3s" />
                   
                   {/* Processing Indicator */}
                   <div className="absolute bottom-4 left-4 flex gap-1 animate-pulse delay-[4s]">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animation-delay-200"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animation-delay-400"></div>
                   </div>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-[#1a2333] border-t border-gray-700">
                   <div className="h-10 bg-[#0f1522] rounded-full flex items-center px-4 justify-between">
                      <span className="text-gray-500 text-xs">Type a message...</span>
                      <Send size={14} className="text-blue-400" />
                   </div>
                </div>
             </div>

             {/* Floating Nodes Behind Phone */}
             <div className="absolute top-20 -left-10 w-24 h-24 bg-[#dc1e25]/20 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center border border-[#dc1e25]/30 animate-float">
                <BrainIcon />
                <span className="text-[10px] text-white font-bold mt-2">NLP Core</span>
             </div>
             <div className="absolute bottom-40 -right-10 w-20 h-20 bg-blue-500/20 backdrop-blur-md rounded-full flex flex-col items-center justify-center border border-blue-500/30 animate-float-delayed">
                <Zap size={24} className="text-blue-400" />
                <span className="text-[10px] text-white font-bold mt-1">Instant</span>
             </div>
          </div>

        </div>
      </div>

      {/* 2. OVERVIEW: Old vs New Toggle */}
      <div className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl lg:text-4xl font-bold text-[#203253] mb-4">Redefining Automated Support</h2>
               <div className="inline-flex bg-gray-100 p-1 rounded-full relative">
                  <button 
                    onClick={() => setActiveTab('dumb')}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all z-10 relative ${activeTab === 'dumb' ? 'text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    Traditional Bots
                  </button>
                  <button 
                    onClick={() => setActiveTab('smart')}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all z-10 relative ${activeTab === 'smart' ? 'text-white' : 'text-gray-500 hover:text-gray-700'}`}
                  >
                    XPACE AI
                  </button>
                  {/* Sliding Background */}
                  <div className={`absolute top-1 bottom-1 w-[50%] bg-[#203253] rounded-full transition-all duration-300 ${activeTab === 'smart' ? 'left-[49%]' : 'left-1'}`}></div>
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
               <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold text-[#203253] mb-4">
                     {activeTab === 'smart' ? "Context, Sentiment & Intent" : "Rigid Decision Trees"}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg min-h-[100px]">
                     {activeTab === 'smart' 
                       ? "Our AI understands the nuance of human language. It doesn't just match keywords; it detects frustration, understands context from previous messages, and can execute complex tasks like a human agent."
                       : "Traditional chatbots frustrate users with rigid 'if-this-then-that' scripts. If a user deviates slightly from the pre-programmed path, the bot fails, leading to a poor customer experience."
                     }
                  </p>
                  <ul className="space-y-4">
                     <ListItem text={activeTab === 'smart' ? "Generative Responses (LLMs)" : "Static Scripted Replies"} check={activeTab === 'smart'} />
                     <ListItem text={activeTab === 'smart' ? "Multi-turn Context Retention" : "Zero Memory of Context"} check={activeTab === 'smart'} />
                     <ListItem text={activeTab === 'smart' ? "Real-time Sentiment Analysis" : "Keyword Matching Only"} check={activeTab === 'smart'} />
                  </ul>
               </div>

               {/* Dynamic Visual Area */}
               <div className="order-1 lg:order-2 bg-slate-50 rounded-3xl p-8 border border-slate-200 h-[400px] flex items-center justify-center relative overflow-hidden">
                  {activeTab === 'smart' ? (
                     <div className="relative w-full max-w-sm animate-fade-in">
                        {/* Neural Network Visual */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                           <div className="w-64 h-64 border border-blue-500 rounded-full animate-ping"></div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-[#dc1e25] relative z-10">
                           <div className="flex items-center gap-3 mb-4">
                              <div className="p-2 bg-blue-100 rounded-full text-blue-600"><Bot size={24}/></div>
                              <div>
                                 <div className="font-bold text-[#203253]">Intent Detected</div>
                                 <div className="text-xs text-green-500 font-bold">Confidence: 98%</div>
                              </div>
                           </div>
                           <p className="text-sm text-gray-600 italic">"User is asking for a refund. Sentiment is slightly negative. Initiating 'Refund Flow' and checking eligibility."</p>
                        </div>
                     </div>
                  ) : (
                     <div className="flex flex-col items-center gap-4 animate-fade-in opacity-50">
                        <div className="bg-gray-200 p-4 rounded-lg w-48 text-center text-xs font-mono text-gray-500 border border-gray-300">
                           IF keyword == "Refund"<br/>THEN show_policy()
                        </div>
                        <ArrowRight className="rotate-90 text-gray-400" />
                        <div className="bg-red-50 p-4 rounded-lg w-48 text-center text-xs font-bold text-red-400 border border-red-100">
                           Error: Keyword not found.
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>

      {/* 3. CORE FEATURES: Dark Bento Grid (Mono Style) */}
      <div className="py-24 bg-[#0b0f19] text-white relative">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Capabilities</h2>
               <div className="w-20 h-1 bg-[#dc1e25] mx-auto rounded"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               <DarkFeatureCard 
                 icon={<Cpu size={32}/>} 
                 title="Advanced NLP & NLU" 
                 desc="Deciphering complex queries, slang, and typos with high accuracy using state-of-the-art models."
               />
               <DarkFeatureCard 
                 icon={<Globe size={32}/>} 
                 title="Multi-Channel" 
                 desc="Write once, deploy everywhere. Web, WhatsApp, Messenger, and Slack integration."
               />
               <DarkFeatureCard 
                 icon={<Smile size={32}/>} 
                 title="Sentiment Analysis" 
                 desc="Detects user frustration in real-time and escalates to human agents with full context."
               />
               <DarkFeatureCard 
                 icon={<Zap size={32}/>} 
                 title="Transactional Actions" 
                 desc="Securely authenticate users and execute tasks like payments or password resets instantly."
               />
               <DarkFeatureCard 
                 icon={<Bot size={32}/>} 
                 title="Generative AI (GPT)" 
                 desc="Integration with LLMs for dynamic, non-scripted responses that maintain brand voice."
               />
               <DarkFeatureCard 
                 icon={<ShieldCheck size={32}/>} 
                 title="Enterprise Security" 
                 desc="GDPR/CCPA compliant data handling with masking for sensitive user information."
               />
            </div>
         </div>
      </div>

      {/* 4. BUSINESS BENEFITS: Live Dashboard Vibe */}
      <div className="py-24 bg-white relative">
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Text */}
            <div>
               <h2 className="text-3xl font-bold text-[#203253] mb-8">The Value of <span className="text-[#dc1e25]">Intelligent Automation</span></h2>
               <div className="space-y-6">
                  <BenefitItem title="24/7 Efficiency" desc="Provide instant responses to thousands of concurrent users without hiring more staff." />
                  <BenefitItem title="80% Cost Reduction" desc="Automate routine Tier 1 support queries, letting humans focus on complex issues." />
                  <BenefitItem title="Higher Conversion" desc="Engage website visitors proactively to qualify leads before sales handoff." />
               </div>
            </div>

            {/* Visual: Live Metrics Dashboard */}
            <div className="bg-[#203253] rounded-2xl p-6 shadow-2xl border border-blue-900 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10"><BarChart3 size={100}/></div>
               
               <div className="flex justify-between items-center mb-6 border-b border-blue-800 pb-4">
                  <span className="text-sm font-bold uppercase tracking-wider text-blue-300">Live Bot Performance</span>
                  <span className="flex items-center gap-1 text-xs text-green-400 font-mono"><span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> SYSTEM ONLINE</span>
               </div>

               <div className="grid grid-cols-2 gap-4 mb-6">
                  <StatBox label="Active Chats" value="1,240" color="text-white" />
                  <StatBox label="Avg Response" value="0.2s" color="text-green-400" />
                  <StatBox label="Resolution Rate" value="88%" color="text-blue-300" />
                  <StatBox label="Cost Saved" value="$12k" color="text-[#dc1e25]" />
               </div>

               {/* Animated Graph Line */}
               <div className="relative h-24 bg-blue-900/30 rounded-lg overflow-hidden flex items-end">
                  <div className="w-[10%] h-[40%] bg-blue-500/50 mx-[1px]"></div>
                  <div className="w-[10%] h-[60%] bg-blue-500/50 mx-[1px]"></div>
                  <div className="w-[10%] h-[50%] bg-blue-500/50 mx-[1px]"></div>
                  <div className="w-[10%] h-[80%] bg-blue-500/50 mx-[1px]"></div>
                  <div className="w-[10%] h-[70%] bg-blue-500/50 mx-[1px]"></div>
                  <div className="w-[10%] h-[90%] bg-blue-500/50 mx-[1px]"></div>
                  <div className="w-[10%] h-[60%] bg-blue-500/50 mx-[1px]"></div>
                  <div className="w-[10%] h-[85%] bg-blue-500/50 mx-[1px]"></div>
                  <div className="w-[10%] h-[95%] bg-[#dc1e25] mx-[1px] shadow-[0_0_10px_#dc1e25]"></div>
               </div>
               <div className="text-center text-xs text-gray-400 mt-2">Real-time Traffic Spike Handled</div>
            </div>
         </div>
      </div>

      {/* 5. USE CASES: Industry Tabs */}
      <div className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-[#203253] mb-12 text-center">Industry Applications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               <IndustryCard 
                 title="E-Commerce" 
                 desc="Personal shopping assistants & auto-returns."
                 icon={<Smartphone />}
               />
               <IndustryCard 
                 title="Banking" 
                 desc="Fraud alerts & balance inquiries."
                 icon={<CreditCard />}
               />
               <IndustryCard 
                 title="Healthcare" 
                 desc="Patient intake & appointment scheduling."
                 icon={<Stethoscope />}
               />
               <IndustryCard 
                 title="HR & IT" 
                 desc="Employee helpdesk & policy access."
                 icon={<Briefcase />}
               />
            </div>
         </div>
      </div>

      {/* 6. DELIVERY APPROACH: Timeline */}
      <div className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-3xl font-bold text-[#203253] mb-16 text-center">Bot Development Lifecycle</h2>
           <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              <TimelineItem num="1" title="Intent Mapping" desc="Analyzing chat logs to identify top customer queries." />
              <TimelineItem num="2" title="Conversation Design" desc="Crafting natural, empathetic dialogue flows." />
              <TimelineItem num="3" title="AI Training" desc="Training NLP models with diverse datasets." />
              <TimelineItem num="4" title="Integration" desc="Connecting to CRM, ERP, and Helpdesk APIs." />
              <TimelineItem num="5" title="Human Handoff" desc="Configuring seamless escalation protocols." />
           </div>
        </div>
      </div>

      {/* 7. CTA */}
      <div className="bg-[#dc1e25] py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <h2 className="text-4xl font-bold mb-6">Start the Conversation</h2>
           <p className="text-xl mb-10 opacity-90">Transform your customer experience from reactive to proactive.</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#dc1e25] font-bold rounded shadow-lg hover:bg-gray-100 transition-colors">Book a Live Demo</button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors">Calculate ROI</button>
           </div>
        </div>
      </div>

      
    </div>
  );
};

/* --- SUB COMPONENTS --- */

const ChatBubble = ({ text, isBot, delay }) => (
  <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} animate-fade-in-up`} style={{animationDelay: delay}}>
     <div className={`max-w-[80%] p-3 rounded-2xl text-xs leading-relaxed ${isBot ? 'bg-[#203253] text-white rounded-tl-none' : 'bg-blue-500 text-white rounded-tr-none'}`}>
        {text}
     </div>
  </div>
);

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.97-3.465"/><path d="M20 14.535A4 4 0 0 1 18 18"/></svg>
);

const ListItem = ({ text, check }) => (
  <li className="flex items-center gap-3">
     <div className={`p-1 rounded-full ${check ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
        {check ? <ShieldCheck size={14}/> : <X size={14}/>}
     </div>
     <span className="text-gray-700 font-medium text-sm">{text}</span>
  </li>
);

const DarkFeatureCard = ({ icon, title, desc }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm group">
     <div className="w-12 h-12 bg-[#dc1e25] rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_#dc1e25]">
        {icon}
     </div>
     <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
     <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const BenefitItem = ({ title, desc }) => (
  <div className="flex gap-4">
     <div className="mt-1 p-2 bg-blue-50 rounded-lg text-[#203253] h-fit"><CheckCircle2 size={18}/></div>
     <div>
        <h4 className="font-bold text-[#203253] text-lg">{title}</h4>
        <p className="text-gray-500 text-sm mt-1">{desc}</p>
     </div>
  </div>
);

const StatBox = ({ label, value, color }) => (
  <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-800">
     <div className={`text-2xl font-bold mb-1 ${color}`}>{value}</div>
     <div className="text-[10px] text-blue-300 uppercase tracking-wider">{label}</div>
  </div>
);

// Lucide Icon CheckCircle2 is used but might be imported as CheckCircle in some versions, ensuring simple check
const CheckCircle2 = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>;

const IndustryCard = ({ title, desc, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 group">
     <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-[#203253] mb-4 group-hover:bg-[#dc1e25] group-hover:text-white transition-colors">
        {React.cloneElement(icon, { size: 24 })}
     </div>
     <h3 className="text-lg font-bold text-[#203253] mb-2">{title}</h3>
     <p className="text-sm text-gray-500">{desc}</p>
  </div>
);

const TimelineItem = ({ num, title, desc }) => (
  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
     <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#203253] text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
        {num}
     </div>
     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
        <h4 className="font-bold text-[#203253] mb-1">{title}</h4>
        <p className="text-sm text-gray-500">{desc}</p>
     </div>
  </div>
);

export default AIChatbotsPage;