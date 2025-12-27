"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
const AboutSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Welcome Tag */}
            <div className="flex items-center gap-4">
              <p className="text-red-600 text-lg font-semibold uppercase tracking-wider">
                Welcome to Xapce Technologies
              </p>
              <span className="w-20 h-1 bg-red-600"></span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Best IT Technology<br />
              Services you can Trust
            </h2>

            {/* Subtitle */}
            <p className="text-red-600 font-medium">
              The professional approach to technology.
            </p>

            {/* Description */}
            <p className="text-secondary leading-relaxed">
              We seamlessly materialize concepts into reality. Crafting digital solutions
              aligning with our core services. We firmly hold that an impactful online
              presence creates lasting impressions for visitors.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="flex gap-4">
                <span className="w-3 h-3 bg-red-600 rounded-full mt-2 shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-primary">Tech Services</h4>
                  <p className="text-secondary text-sm mt-1">
                    Our culture facilitates seamless integration for our stewards to manage tech
                    services effectively.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="w-3 h-3 bg-red-600 rounded-full mt-2 shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-primary">Internal Networking</h4>
                  <p className="text-secondary text-sm mt-1">
                    Our culture fosters seamless assimilation empowering effective internal
                    networking among our stewards.
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-4 mt-8">
              <div className="flex justify-between text-lg">
                <span className="font-semibold text-gray-900">Technology</span>
                <span className="font-semibold text-gray-900">88%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "88%" }}
                  transition={{ duration: 1.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="bg-primary h-4 rounded-full"
                />
              </div>
            </div>

            {/* Button */}
            <Button className="mt-8 px-10 py-3 text-white">
  Discover More
</Button>
          </motion.div>

          {/* Right Side - Images */}


          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-full min-h-100"
          >
           {/* Red Vertical Bar */}
<div className="absolute top-15 left-16 w-3 h-30 bg-red-600 z-10" />

{/* Red Semi-Circle */}
<div className="absolute bottom-16 left-16 w-64 h-64 bg-red-600 rounded-full -z-10" />

{/* Temporary placeholder box to visualize */}
<div className="absolute bottom-35 left-7 w-80 h-69 bg-red-500 rounded-full z-20" />

            {/* Top Image - Hand writing/planning */}
            <div className="absolute top-10 left-30 z-20">
              <img
                src="https://thumbs.dreamstime.com/b/soft-focus-woman-hand-writing-business-document-note-book-working-table-nature-green-leaves-background-soft-focus-115740233.jpg"
                alt="Professional planning and writing"
                className="rounded-2xl shadow-2xl w-80 md:w-110 h-145 object-cover border-8 border-white"
              />
            </div>

           
            <div className="absolute bottom-7 right-60 z-20">
              <img
                src="https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=612x612&w=0&k=20&c=EvWROZsfro1ghOVViXVj-tKS364-NeabwNNYkyvhxoY="
                alt="Team collaborating in office"
                className="rounded-2xl shadow-2xl w-80  md:w-100 max-w-lg object-cover border-8 border-white"
              />
            </div> 
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
