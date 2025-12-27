import React from "react";
import Image from "next/image";

const CareerContent = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Text Content */}
          <div className="flex-1 order-2 lg:order-1">
            <h2 className="text-[#0B1437] text-3xl md:text-[49px] font-semibold leading-tight mb-6">
              Seeking Careers?{" "}
              <span className="text-red-600">Join Our Family!</span>
            </h2>

            <p className="text-gray-500 text-base md:text-[19px] leading-relaxed mb-10">
              We firmly believe that the heart of making good decisions lies in
              grasping the very nature of decisions. A decision is often
              characterized as the act of making choices. To take a step toward
              sound decision-making, one must begin by fully understanding the
              concept.
            </p>

            {/* Grid for Believe and Offer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-red-600 text-xl md:text-3xl font-normal mb-4">
                  What We Believe
                </h3>
                <p className="text-gray-500 text-sm md:text-[19px] leading-relaxed">
                  To navigate your career journey wisely, it's crucial to gain a
                  profound insight into your chosen field or area of interest.
                </p>
              </div>

              <div>
                <h3 className="text-red-600 text-xl md:text-3xl font-normal mb-4">
                  What We Offer
                </h3>
                <p className="text-gray-500 text-sm md:text-[19px] leading-relaxed">
                  We empower informed career choices by helping you explore your
                  interests for a fulfilling professional journey.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image with Decorative Elements */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src="career/career-01.jpg" // Image path yahan dein
                  alt="Seeking Careers"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Red Accent Box (Bottom right element in image) */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600/10 rounded-full blur-3xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerContent;
