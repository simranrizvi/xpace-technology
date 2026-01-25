import React from "react";

const benefits = [
  {
    id: "01",
    title: "End-to-End Developement",
    text:
      "Complete solutions from concept to deployment, ensuring seamless project delivery and comprehensive development cycles.",
  },
  {
    id: "02",
    title: "Software IT Outsource",
    text:
      "Efficiently outsource your software needs to our expert team, ensuring quality, cost-effectiveness, and timely delivery",
  },
  {
    id: "03",
    title: "IT Consulting",
    text:
      "Strategic guidance for leveraging technology, optimizing resources, and driving innovation for sustainable business growth.",
  },
];

export default function CompanyBenefits() {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-white overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes custom-scale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          @keyframes slow-scale {
            0%, 100% { transform: scale(1.05); opacity: 0.05; }
            50% { transform: scale(1.15); opacity: 0.1; }
          }
          .animate-scale-custom { animation: custom-scale 4s ease-in-out infinite; }
          .animate-slow-scale { animation: slow-scale 6s ease-in-out infinite; }

          .perspective-container { perspective: 1000px; }
          .flip-card {
            transition: transform .2s ease, background-color .2s ease;
          }
          @media (min-width:1024px){
            .group:hover .flip-card {
              transform: scale(1.1) rotateY(180deg);
              background-color: #dc2626;
            }
          }
        `,
        }}
      />

      <div className="container mx-auto px-4 lg:max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">

              {/* Decorative (LG only) */}
              <div className="hidden lg:block absolute -top-10 -left-10 w-[110%] h-[110%] bg-primary opacity-5 rounded-full animate-slow-scale"></div>
              <div className="hidden lg:block absolute bottom-[10%] -left-6 w-44 h-44 bg-primary rounded-full animate-scale-custom shadow-lg"></div>

              {/* Image */}
              <div className="relative w-full h-full rounded-full border-[8px] sm:border-[12px] lg:border-[18px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden z-10">
                <img
                  src="homepage/benefits.jpg"
                  alt="Company Benefits"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Play Button (LG only) */}
              <div className="hidden lg:block absolute bottom-[18%] right-0 z-20">
                <div className="relative">
                  <button className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl hover:bg-primary transition">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                  </button>
                  <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-25"></div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="space-y-8 lg:space-y-10">

              {/* Heading */}
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-[11px] sm:text-[13px]">
                    Company Benefits
                  </span>
                  <div className="w-10 h-[2px] bg-red-600"></div>
                </div>

                <h2 className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Always Deliver <br /> More than you Expected
                </h2>
              </div>

              {/* Benefit List */}
              <div className="space-y-7 lg:space-y-10">
                {benefits.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 md:gap-6 items-start group perspective-container"
                  >
                    <div className="flex-shrink-0">
                      <div className="flip-card w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-lg md:text-xl shadow-md">
                        {item.id}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-primary text-base sm:text-xl md:text-2xl font-bold mb-1 group-hover:text-red-600 transition">
                        {item.title}
                      </h5>
                      <p className="text-secondary text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
