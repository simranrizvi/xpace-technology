import React from 'react';
import { Stethoscope, CreditCard, Monitor, ShoppingBag } from 'lucide-react';

const WhereWeApply = () => {
  const industries = [
    {
      title: "Healthcare",
      subtitle: "TAP-AND-GO ACCESS",
      desc: "Doctors accessing records instantly via smart card.",
      tag: "Smart Card",
      icon: <Stethoscope size={20} />,
    },
    {
      title: "Finance",
      subtitle: "SEGREGATION OF DUTIES",
      desc: "Preventing conflict of interest in payment approvals.",
      tag: "PAM",
      icon: <CreditCard size={20} />,
    },
    {
      title: "Enterprise",
      subtitle: "HYBRID CLOUD ACCESS",
      desc: "Managing thousands of employees across AD & Azure.",
      tag: "SSO",
      icon: <Monitor size={20} />,
    },
    {
      title: "Retail",
      subtitle: "FRICTIONLESS SIGN-UP",
      desc: "Social login integration to boost customer conversion.",
      tag: "CIAM",
      icon: <ShoppingBag size={20} />,
    },
  ];

  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-primary text-4xl font-bold">
            Where We Apply This
          </h2>
         
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white px-6 py-4 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:border-red-500 hover:shadow-md cursor-pointer flex flex-col h-full"
            >
              {/* Header: Icon and Small Tag */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {item.tag}
                </span>
              </div>

              {/* Body */}
              <div className="flex-grow">
                <h3 className="text-[#112240] font-bold text-md">{item.title}</h3>
                <p className="text-gray-400 text-[10px] font-bold tracking-wider mb-4 uppercase">
                  {item.subtitle}
                </p>
                
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-50 transition-colors group-hover:bg-white group-hover:border-gray-100">
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereWeApply;