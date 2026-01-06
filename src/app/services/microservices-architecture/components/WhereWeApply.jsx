"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, CreditCard, Truck, HeartPulse } from 'lucide-react';

const WhereWeApply = () => {
  const applications = [
    {
      title: "E-Commerce",
      desc: "Separate Cart & Payment for flash sale stability.",
      icon: <ShoppingCart size={24} />,
    },
    {
      title: "FinTech",
      desc: "Isolate transactions for security compliance.",
      icon: <CreditCard size={24} />,
    },
    {
      title: "Logistics",
      desc: "Event-driven tracking for real-time updates.",
      icon: <Truck size={24} />,
    },
    {
      title: "Healthcare",
      desc: "Decouple records for privacy & reliability.",
      icon: <HeartPulse size={24} />,
    }
  ];

  return (
    <section className="bg-[#f8fafc] py-24 px-6 lg:px-20">
      <div className="container mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16">
          Where We Apply This
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Card Hover Effect: Thoda upar move hona
              className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm 
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300 
                         text-left flex flex-col items-start cursor-default"
            >
              {/* Icon Container: Hover pe background Red hona */}
              <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center 
                            text-slate-600 mb-6 transition-colors duration-300 
                            group-hover:bg-red-600 group-hover:text-white shadow-inner">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[#1e293b] mb-2 transition-colors group-hover:text-red-600">
                {item.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereWeApply;