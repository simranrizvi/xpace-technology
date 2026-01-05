"use client";
import React from 'react';
import { motion } from 'framer-motion';

const expertiseCards = [
  {
    title: "Enterprise Digital Transformation",
    desc: "Helping organizations migrate from monolithic legacy systems to agile microservices.",
    bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Cloud Migration Strategy",
    desc: "Building the blueprint for moving on-premise infrastructure to AWS/Azure with zero downtime.",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "SaaS Product Development",
    desc: "Designing multi-tenant architecture for startups looking to scale software-as-a-service.",
    bgImage: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Mergers & Acquisitions (MA)",
    desc: "Planning the integration of disparate IT systems to ensure data continuity.",
    bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    titleColor: "text-red-500" // Special color for last card as per image
  }
];

const ExpertiseSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4 items-center text-center"
          >
            Where We Apply This Expertise
          </motion.h2>

        </div>

        {/* Responsive Grid: 1 column mobile, 2 columns desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[90%] items-center mx-auto">
          {expertiseCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative min-h-[230px]  max-w-[600px] rounded-2xl overflow-hidden cursor-pointer shadow-lg "
            >
              {/* Background Image with Dark Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              ></div>
              
              {/* Dark Gradient Overlay (Very Important for Text Visibility) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>

              {/* Card Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 leading-tight ${card.titleColor || 'text-white'}`}>
                  {card.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg max-w-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;