"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            {/* Welcome */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <p className="text-red-600 text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-wider">
                Welcome to Xapce Technologies
              </p>
              <span className="w-12 lg:w-20 h-1 bg-red-600"></span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary leading-tight">
              Best IT Technology <br />
              Services you can Trust
            </h2>

            {/* Subtitle */}
            <p className="text-red-600 font-medium">
              The professional approach to technology.
            </p>

            {/* Description */}
            <p className="text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
              We seamlessly materialize concepts into reality. Crafting digital solutions
              aligning with our core services. We firmly hold that an impactful online
              presence creates lasting impressions for visitors.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Tech Services",
                  text:
                    "Our culture facilitates seamless integration for our stewards to manage tech services effectively.",
                },
                {
                  title: "Internal Networking",
                  text:
                    "Our culture fosters seamless assimilation empowering effective internal networking.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 text-left">
                  <span className="w-3 h-3 bg-red-600 rounded-full mt-2 shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-primary">{item.title}</h4>
                    <p className="text-secondary text-sm mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress */}
            <div className="space-y-3 mt-6">
              <div className="flex justify-between text-base lg:text-lg">
                <span className="font-semibold text-gray-900">Technology</span>
                <span className="font-semibold text-gray-900">88%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 lg:h-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "88%" }}
                  transition={{ duration: 1.8 }}
                  viewport={{ once: true }}
                  className="bg-primary h-3 lg:h-4 rounded-full"
                />
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center lg:justify-start">
              <Button className="mt-6 px-8 lg:px-10 py-3 text-white">
                Discover More
              </Button>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGES ================= */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative hidden lg:block min-h-[500px]"
          >
            {/* Decorative Shapes (LG only) */}
            <div className="absolute top-16 left-16 w-3 h-32 bg-red-600 z-10" />
            <div className="absolute bottom-16 left-16 w-64 h-64 bg-red-600 rounded-full -z-10" />

            {/* Image 1 */}
            <div className="absolute top-10 left-28 z-20">
              <img
                src="https://thumbs.dreamstime.com/b/soft-focus-woman-hand-writing-business-document-note-book-working-table-nature-green-leaves-background-soft-focus-115740233.jpg"
                alt="Planning"
                className="rounded-2xl shadow-2xl w-80 h-96 object-cover border-8 border-white"
              />
            </div>

            {/* Image 2 */}
            <div className="absolute bottom-8 right-48 z-20">
              <img
                src="https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg"
                alt="Team"
                className="rounded-2xl shadow-2xl w-80 object-cover border-8 border-white"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
