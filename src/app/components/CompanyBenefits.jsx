import React from "react";

const benefits = [
  {
    id: "01",
    title: "End-to-End Developement",
    text: "Complete solutions from concept to deployment, ensuring seamless project delivery and comprehensive development cycles.",
  },
  {
    id: "02",
    title: "Software IT Outsource",
    text: "Efficiently outsource your software needs to our expert team, ensuring quality, cost-effectiveness, and timely delivery",
  },
  {
    id: "03",
    title: "IT Consulting",
    text: "Strategic guidance for leveraging technology, optimizing resources, and driving innovation for sustainable business growth.",
  },
];

export default function CompanyBenefits() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes custom-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes slow-scale {
          0%, 100% { transform: scale(1.05) opacity(0.05); }
          50% { transform: scale(1.15) opacity(0.1); }
        }
        .animate-scale-custom { animation: custom-scale 4s ease-in-out infinite; }
        .animate-slow-scale { animation: slow-scale 6s ease-in-out infinite; }
        
        /* New Flip Animation Logic */
        .perspective-container {
          perspective: 1000px;
        }
        .flip-card {
          transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
          transform-style: preserve-3d;
        }
        .group:hover .flip-card {
          transform: scale(1.1) rotateY(180deg);
          background-color: #dc2626; /* Tailwind red-600 */
        }
        .flip-text {
          backface-visibility: hidden;
        }
        /* Mouse hatne par smooth wapsi already transition se handle hai */
      `,
        }}
      />

      <div className="container mx-auto px-4 lg:max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* --- Left Column: Animated Image & Circles --- */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
              <div className="absolute -top-10 -left-10 w-[110%] h-[110%] bg-primary opacity-5 rounded-full animate-slow-scale"></div>

              <div className="absolute bottom-[10%] -left-6 w-32 h-32 md:w-44 md:h-44 bg-primary rounded-full z-0 animate-scale-custom shadow-lg"></div>

              <div className="relative w-full h-full rounded-full border-[12px] md:border-[18px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden z-10">
                <img
                  src="homepage/benefits.jpg"
                  alt="Company Benefits"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-[18%] right-0 z-20">
                <div className="relative">
                  <button className="bg-red-600 w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-2xl hover:bg-primary transition-all duration-500 group">
                    <div className="w-0 h-0 border-t-[8px] md:border-t-[12px] border-t-transparent border-l-[14px] md:border-l-[20px] border-l-white border-b-[8px] md:border-b-[12px] border-b-transparent ml-1"></div>
                  </button>
                  <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-25"></div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column: Text Content --- */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-red-600 font-bold uppercase tracking-[0.2em] text-[12px] md:text-[14px]">
                    Company Benefits
                  </span>
                  <div className="w-12 h-[2px] bg-red-600"></div>
                </div>
                <h2 className="text-primary text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15]">
                  Always Deliver <br /> More than you Expected
                </h2>
              </div>

              <div className="space-y-10">
                {benefits.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-6 group items-start perspective-container"
                  >
                    {/* Number Circle with Flip and Fast Scale Animation */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-md flip-card">
                        <span className="flip-text group-hover:[transform:rotateY(180deg)] transition-transform duration-200">
                          {item.id}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h5 className="text-primary text-xl md:text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h5>
                      <p className="text-secondary leading-relaxed text-[15px] md:text-[16px]">
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
