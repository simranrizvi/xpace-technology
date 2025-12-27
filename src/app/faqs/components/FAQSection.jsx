"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';


export default function FAQSection () {
  // Pehla item (index 0) hamesha open rahega start mein
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "What does your IT consulting service entail?",
      answer: "Our IT consulting service involves providing strategic guidance to businesses, leveraging the latest technology trends and innovations. We analyze your current technological infrastructure, understand your business goals, and devise a roadmap for implementing tech solutions that boost efficiency, foster growth, and drive sustainable success."
    },
    {
      question: "How are your software solutions tailored to specific needs?",
      answer: "Our software development process is highly collaborative. We start by comprehensively understanding your business requirements, challenges, and objectives. Our team then designs and develops custom software solutions from scratch, ensuring they align perfectly with your unique needs."
    },
    {
      question: "What does your web development service entail?",
      answer: "Our web development service revolves around creating engaging and functional websites that reflect your brand's essence. We craft custom web solutions that ensure a seamless user experience, responsive design, and integration of cutting-edge technologies."
    },
    {
      question: "What advantages do your AI solutions offer businesses?",
      answer: "Our AI solutions harness the power of cutting-edge artificial intelligence technologies to optimize processes, predict trends, automate tasks, and offer data-driven insights to stay ahead in today's dynamic market."
    },
    {
      question: "How do your IoT solutions transform business operations?",
      answer: "Our IoT solutions focus on interconnecting devices and systems, allowing seamless data exchange and real-time monitoring to optimize operations and enhance productivity."
    },
    {
      question: "How do ERP solutions streamline business processes?",
      answer: "Our ERP solutions integrate various business functions into a centralized system, streamlining data management, improving collaboration, and optimizing processes."
    }
  ];

  const handleToggle = (index) => {
    // Agar click kiya gaya index pehle se active hai, to kuch mat karo (band nahi hoga)
    if (activeIndex !== index) {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-18 bg-white font-sans">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border border-gray-100 shadow-sm transition-all duration-300 ${
                  isOpen ? 'ring-1 ring-red-500 shadow-md' : 'bg-white'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => handleToggle(index)}
                  // active item par pointer-events-none laga sakte hain agar bilkul hi click disable karna ho
                  className={`w-full flex items-center justify-between px-6 py-5 text-left transition-all duration-300 ${
                    isOpen ? 'bg-[#d93025] text-white' : 'text-[#0b1d3a] hover:bg-gray-50'
                  }`}
                >
                  <span className="font-bold text-lg md:text-xl leading-tight">
                    {faq.question}
                  </span>
                  <div className="shrink-0 ml-4">
                    {isOpen ? (
                      <Minus size={20} strokeWidth={3} />
                    ) : (
                      <Plus size={20} strokeWidth={3} className="text-[#0b1d3a]" />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 py-8 text-gray-500 leading-relaxed text-base border-t border-gray-100 bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
