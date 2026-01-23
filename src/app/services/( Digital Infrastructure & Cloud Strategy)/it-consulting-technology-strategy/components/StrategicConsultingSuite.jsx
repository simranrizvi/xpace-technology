import React from 'react';
import { Map, DollarSign, Layers, Handshake, Users, GitBranch } from 'lucide-react';

const StrategicConsultingSuite = () => {
  const services = [
    {
      title: "Digital Roadmaps",
      desc: "Defining a multi-year plan to evolve from analog processes to a digital-first enterprise.",
      icon: <Map size={24} />,
    },
    {
      title: "Cost Optimization",
      desc: "Auditing licenses and cloud spend to identify waste and restructure costs (CapEx to OpEx).",
      icon: <DollarSign size={24} />,
    },
    {
      title: "Stack Assessment",
      desc: "Evaluating current tools and recommending modern alternatives (Build vs Buy analysis).",
      icon: <Layers size={24} />,
    },
    {
      title: "M&A Due Diligence",
      desc: "Assessing IT health of acquisition targets, identifying technical debt and security risks.",
      icon: <Handshake size={24} />,
    },
    {
      title: "Operating Model",
      desc: "Restructuring IT teams from siloed departments to agile, product-centric squads.",
      icon: <Users size={24} />,
    },
    {
      title: "Agile Transformation",
      desc: "Helping traditional organizations adopt Agile and DevOps to speed up delivery.",
      icon: <GitBranch size={24} />,
    },
  ];

  return (
    <section className="bg-primary py-24 px-6 font-sans"> {/* bg-primary: #1a3556 */}
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Strategic Consulting Suite
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-[#1e293b] border-2 border-transparent transition-all duration-500 hover:border-accent hover:-translate-y-2 cursor-pointer shadow-xl overflow-hidden"
            >
              {/* Icon Container with Hover Animation */}
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6 text-white shadow-lg shadow-red-900/20 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white">
                {item.title}
              </h3>

              <p className="text-secondary text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                {item.desc}
              </p>

              {/* Subtle Background Glow on Hover */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicConsultingSuite;