"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check, CheckCircle2 } from "lucide-react";

// Data import (Make sure path is correct)
import { industriesData } from "../data/industriesData";

const IndustryCard = ({ item, onOpen }) => {
  return (
    <div
      onClick={() => onOpen(item)}
      className="group h-112.5 perspective-[1000px] overflow-hidden bg-white rounded-xl cursor-pointer"
    >
      <div className="relative h-full w-full transition-all duration-500 transform-3d group-hover:transform-[rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-white shadow-lg backface-hidden border border-gray-100">
          <div className="relative h-56 overflow-hidden rounded-t-xl">
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 bg-red-600 p-3 rounded-full text-white shadow-lg">
              {item.icon}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-[#0b1d3a] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-6 line-clamp-2">{item.frontDesc}</p>
            <div className="flex items-center gap-2 py-4 px-5 w-fit text-white bg-[#0b1d3a] rounded-full font-bold group-hover:bg-red-600 transition-colors">
              Explore <ArrowRight size={18} />
            </div>
          </div>
        </div>

        {/* Back Face (Flip Side) */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-[#0b1d3a] p-8 text-white backface-hidden transform-[rotateY(180deg)] flex flex-col justify-between">
          <div>
            <h4 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
              {item.backTitle}
            </h4>
            <p className="text-gray-300 text-sm mb-6 line-clamp-4">
              {item.backDesc}
            </p>
            <ul className="space-y-3">
              {item.features.slice(0, 3).map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm font-medium"
                >
                  <span className="text-red-500">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full text-center text-sm py-3 px-5 bg-[#ffffff1a] rounded-full font-bold tracking-wider hover:bg-red-600 transition-colors">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
};

export default function IndustrySection() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  useEffect(() => {
    if (selectedIndustry) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedIndustry]);

  return (
    <section className="py-20 bg-[#f8fafc] relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#0b1d3a] uppercase tracking-tight mb-4">
            Industry-Specific Solutions
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            We deliver cutting-edge technology solutions tailored to the unique
            needs of your industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((industry) => (
            <IndustryCard
              key={industry.id}
              item={industry}
              onOpen={setSelectedIndustry}
            />
          ))}
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {selectedIndustry && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="absolute inset-0 bg-[#0b1d3a]/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden relative shadow-2xl z-10 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-5 right-5 z-[60] bg-red-600 text-white p-2 rounded-full cursor-pointer hover:bg-red-700 shadow-xl transition-all hover:rotate-90 active:scale-90"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto custom-scrollbar h-full">
                {/* Image & Header Section */}
                <div className="relative h-72 md:h-96 w-full shrink-0">
                  <img
                    src={selectedIndustry.img}
                    className="w-full h-full object-cover"
                    alt={selectedIndustry.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d3a] via-[#0b1d3a]/40 to-transparent" />
                  <div className="absolute bottom-8 left-8 md:left-12 pr-12 text-white">
                    <h2 className="text-3xl md:text-5xl text-white! font-black uppercase tracking-tight leading-none mb-3">
                      {selectedIndustry.title}
                    </h2>
                    <p className="text-gray-200 text-lg font-medium max-w-xl line-clamp-2">
                      {selectedIndustry.popupSubtitle ||
                        "Leading the way in digital transformation and innovation."}
                    </p>
                  </div>
                </div>

                {/* Main Content */}
                <div className="p-8 md:p-12">
                  <div className="prose max-w-none mb-10">
                    <p className="text-gray-700 text-lg leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-red-600">
                      {selectedIndustry.backDesc}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-10 border border-gray-100">
                    <h3 className="text-2xl font-extrabold text-[#0b1d3a] mb-8 flex items-center gap-3">
                      <span className="w-2 h-8 bg-red-600 rounded-full"></span>
                      Our {selectedIndustry.title} Include:
                    </h3>

                    {/* Updated Features Grid to handle icons from your data */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      {(
                        selectedIndustry.detailedFeatures ||
                        selectedIndustry.features
                      ).map((feature, idx) => (
                        <div
                          key={idx}
                          className="group/item flex items-start gap-3 py-2 border-b border-gray-200/60"
                        >
                          {/* Yahan icon render hoga agar data mein hai, warna default checkmark */}
                          <div className="mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            {feature.icon ? (
                              feature.icon
                            ) : (
                              <CheckCircle2 className="text-red-600 w-5 h-5" />
                            )}
                          </div>
                          <span className="text-gray-700 font-semibold text-[15px] leading-snug">
                            {/* Yahan title render hoga agar object hai, warna string */}
                            {feature.title ? feature.title : feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary Footer */}
                  {selectedIndustry.popupBody2 && (
                    <p className="text-gray-500 italic text-center max-w-3xl mx-auto mb-12 font-medium">
                      "{selectedIndustry.popupBody2}"
                    </p>
                  )}

                  {/* CTA Section */}
                  <div className="bg-[#0b1d3a] rounded-4xl p-10 text-center text-white relative overflow-hidden shadow-2xl border-4 border-white">
                    <div className="relative z-10">
                      <h4 className="text-2xl font-bold mb-6 italic opacity-95">
                        Ready to transform your {selectedIndustry.id} practice?
                      </h4>
                      <button className="bg-red-600 hover:bg-white cursor-pointer text-white hover:text-red-600 font-black py-5 px-12 rounded-full duration-300 transition-all uppercase tracking-widest shadow-lg hover:-translate-y-1 active:scale-95 hover:shadow-red-800 text-sm md:text-base">
                        {selectedIndustry.ctaText || "Request a Consultation"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
