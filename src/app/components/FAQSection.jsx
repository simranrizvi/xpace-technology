"use client";

import React, { useState } from "react";
// Maan lete hain aapka button component isi path par hai
import Button from "./../../components/ui/Button";
import { BsPlus, BsDash } from "react-icons/bs";

const faqData = [
  {
    id: 1,
    question: "Is my technology allowed on tech?",
    answer:
      "Yes, we welcome a wide spectrum of technologies on our platform, ensuring a diverse range of solutions and innovations. Our focus is on fostering technological advancements.",
  },
  {
    id: 2,
    question: "How to soft launch your business?",
    answer:
      "Soft launching involves gradually introducing your business to a limited audience, collecting feedback, and making necessary improvements before a full-scale launch.",
  },
  {
    id: 3,
    question: "How to turn visitors into contributors",
    answer:
      "Engage visitors through compelling content, clear calls-to-action, incentives, and community-building efforts to convert them into active contributors.",
  },
  {
    id: 4,
    question: "How can i find my solutions?",
    answer:
      "Explore our website for services, schedule a consultation for tailored solutions, and review client testimonials to find the best fit for your needs.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Second one open by default as per screenshot

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[700px]">
        {/* --- Left Column: Contact Form --- */}
        <div className="w-full lg:w-1/2 relative bg-[#1c1e22] py-20 px-6 md:px-16 flex items-center justify-end">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
            style={{ backgroundImage: "url('homepage/3.jpg')" }}
          ></div>

          <div className="relative z-10 w-full max-w-xl">
            {/* Top Red Border */}
            <div className="h-1.5 w-full bg-red-600 mb-0"></div>

            <div className="bg-[#25272b] p-8 md:p-12 shadow-2xl">
              <div className="mb-8">
                <span className="text-red-600 font-bold uppercase tracking-widest text-xs">
                  Contact us
                </span>
                <h3 className="text-white text-3xl font-bold mt-2">
                  Write Email
                </h3>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-[#1c1e22] border border-white/5 p-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#1c1e22] border border-white/5 p-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                  required
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full bg-[#1c1e22] border border-white/5 p-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                  required
                />
                <textarea
                  placeholder="Write a Message"
                  rows="4"
                  className="w-full bg-[#1c1e22] border border-white/5 p-4 text-white focus:outline-none focus:border-red-600 transition-colors"
                  required
                ></textarea>

                <div className="pt-4">
                  <Button className="w-full py-4 text-white uppercase tracking-widest text-sm">
                    Send a message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* --- Right Column: FAQs --- */}
        <div className="w-full lg:w-1/2 bg-[#f4f5f8] py-20 px-6 md:px-16 relative">
          {/* Pattern Background */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: "url('images/icons/pattern-2.jpg')" }}
          ></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-red-600 font-bold uppercase tracking-widest text-xs">
                  Questions & answers
                </span>
                <div className="w-10 h-[2px] bg-red-600"></div>
              </div>
              <h2 className="text-[#1a2b4e] text-4xl md:text-5xl font-extrabold leading-tight">
                See Frequently <br /> Asked Questions
              </h2>
            </div>

            {/* Accordion Box */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={faq.id} className="border border-gray-200 bg-white">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full flex items-center justify-between p-5 text-left transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-red-600 text-white"
                        : "bg-white text-primary"
                    }`}
                  >
                    <span className="font-bold text-lg">{faq.question}</span>
                    <span className="text-2xl">
                      {activeIndex === index ? <BsDash /> : <BsPlus />}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === index
                        ? "max-h-96 opacity-100 p-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
