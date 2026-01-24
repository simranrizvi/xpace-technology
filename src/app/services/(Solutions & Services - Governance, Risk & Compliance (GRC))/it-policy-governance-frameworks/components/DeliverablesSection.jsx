import React from 'react';
import { Layout, FileText, Search, Handshake, Users, Scale } from 'lucide-react';

const DeliverablesSection = () => {
  const cards = [
    {
      icon: <Layout className="text-white" size={24} />,
      title: "Framework Implementation",
      desc: "Deploying COBIT 2019 or ITIL 4 frameworks adapted to your organizational scale."
    },
    {
      icon: <FileText className="text-white" size={24} />,
      title: "Policy Lifecycle",
      desc: "Drafting and publishing legally sound IT policies (BYOD, Remote Work)."
    },
    {
      icon: <Search className="text-white" size={24} />,
      title: "Shadow IT Discovery",
      desc: "Using automated tools to identify and bring unauthorized software under management."
    },
    {
      icon: <Handshake className="text-white" size={24} />,
      title: "Vendor Governance",
      desc: "Strict protocols for onboarding and monitoring third-party technology partners."
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Steering Committees",
      desc: "Structuring executive IT committees with clear charters and voting mechanisms."
    },
    {
      icon: <Scale className="text-white" size={24} />,
      title: "Risk Quantification",
      desc: "Calculating the financial impact of IT risks to prioritize investments effectively."
    }
  ];

  return (
    <section className="bg-[#1a2b4b] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Area */}
        <div className="text-center mb-16">
          <span className="text-red-600 text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
            Governance Suite
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            What We Deliver
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="group relative bg-[#0f1323] border border-white/5 p-8 rounded-xl 
                         transition-all duration-300 ease-in-out 
                         hover:border-red-600 hover:-translate-y-2 cursor-default"
            >
              {/* Icon Box */}
              <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6 
                              group-hover:shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DeliverablesSection;