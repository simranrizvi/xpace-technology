import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const opportunities = [
  {
    id: 1,
    title: "Internship Program",
    description: "Kickstart your career with hands-on experience and industry exposure. Ideal for students and fresh graduates.",
    icon: <GraduationCap size={40} className="text-red-600" />,
  },
  {
    id: 2,
    title: "Full-Time Job Openings",
    description: "Join our team and be part of exciting projects. We're looking for motivated individuals for various roles.",
    icon: <Briefcase size={40} className="text-red-600" />,
  }
];

const CareerOpportunities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#0B1437] text-4xl md:text-6xl font-bold mb-4">
            Career Opportunities
          </h2>
          <p className="text-gray-500 text-lg md:text-[22px] tracking-widest">
            Explore opportunities and take your career to the next level
          </p>
        </div>

        {/* Cards Grid */} 
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl lg:max-w-350  mx-auto">
          {opportunities.map((item) => (
            <div 
              key={item.id}
            className="
  flex-1 
  bg-white 
  p-10 md:py-20 
  rounded-2xl 
  border border-gray-100 
  shadow-xl          
  text-center 
  flex flex-col items-center 
  transition-all duration-300 ease-in-out 
  hover:-translate-y-3 
  hover:shadow-2xl    
  group 
  cursor-default
"

            >
              {/* Icon Container */}
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#0B1437] text-2xl md:text-4xl font-bold mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed mb-8 text-sm md:text-base">
                {item.description}
              </p>

              {/* Apply Button */}
              <button className="bg-[#1a244e] cursor-pointer text-white px-10 py-3 rounded-full font-bold 
                               transition-all duration-300 hover:bg-red-600 hover:shadow-lg active:scale-95">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;