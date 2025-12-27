"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  { id: 1, name: "Sophie Adams", role: "IT MANAGER, YOUTH DEVELOPMENT COUNCIL", text: "XPACE TECHNOLOGIES' IT consulting services have been invaluable in strategizing our tech infrastructure. Their tailored guidance helped us achieve our tech goals efficiently." },
  { id: 2, name: "Mr. Daniel Brown", role: "CONFIDENTIAL", text: "We partnered with XPACE TECHNOLOGIES for IoT solutions, and the results were exceptional. Their team's expertise helped us streamline our processes effectively." },
  { id: 3, name: "Sara Imran", role: "CHIEF OPERATING OFFICER, CODACT TECHNOLOGIES", text: "XPACE TECHNOLOGIES has been an instrumental partner in our digital transformation journey. Their innovative solutions and unwavering support have significantly boosted our operational efficiency." },
  { id: 4, name: "Dawood Saleem", role: "DIRECTOR OF IT, CSC", text: "Working with XPACE TECHNOLOGIES was a game-changer for us. Their web development expertise helped us launch a stunning platform, elevating our brand presence." },
  { id: 5, name: "Mr. Fahad Khan", role: "CONFIDENTIAL", text: "XPACE TECHNOLOGIES AI solutions have been a game-changer for our data analysis. Their team's commitment and expertise have made a significant impact on our decision-making process." },
];

const TestimonialSection = () => {
  return (
    <section className="bg-[#F4F5F8] py-16 md:py-24 px-4 sm:px-8 md:px-12 overflow-hidden">
      <div className="max-w-350 mx-auto">
        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-8">
          
          {/* LEFT DIV: Text Content */}
          <div className="flex-1 w-full lg:max-w-[350px]">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-red-600 tracking-[0.2em] text-xs sm:text-sm font-black uppercase ">
                Our Feedbacks
              </span>
              <div className="h-[2px] w-12 bg-red-600"></div>
            </div>
            
            <h2 className="text-[#1a244e] text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-[1.1]">
              What They're Talking About Company
            </h2>
            
            <p className="text-gray-500 text-base sm:text-lg md:text-[19px] leading-relaxed md:leading-[1.8]">
              Client testimonials reflect our dedication to innovative solutions and exceptional service. 
              Our clients' words speak volumes about our commitment to delivering cutting-edge IT solutions.
            </p>
          </div>

          {/* RIGHT DIV: Slider Section */}
          <div className="flex-[2.5] w-full min-w-0 cursor-grab active:cursor-grabbing">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1.2 }, // Mobile pe agla card thoda dikhayega
                768: { slidesPerView: 2 },   // Tablet pe 2 cards
                1280: { slidesPerView: 3 },  // Bari screen pe 3 cards
              }}
              className="!pb-20"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <div className="group flex flex-col h-full">
                    
                    {/* Upper Feedback Box */}
                    <div className="bg-white p-8 md:p-10 transition-all duration-500 ease-in-out group-hover:bg-[#111C44] relative mb-12 shadow-sm border border-gray-100 min-h-[350px] flex flex-col justify-center">
                      
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="#E11D48" className="text-red-600" />
                        ))}
                      </div>

                      <p className="text-gray-600 group-hover:text-white text-base sm:text-lg leading-relaxed transition-colors duration-500">
                        "{item.text}"
                      </p>

                      {/* Tooltip Triangle */}
                      <div className="absolute -bottom-3 left-10 w-6 h-6 bg-white group-hover:bg-[#111C44] rotate-45 transition-all duration-500 hidden sm:block"></div>
                    </div>

                    {/* Lower Profile Section */}
                    <div className="pl-6">
                      <div className="relative -mt-20 z-10 mb-5">
                        <div className="w-16 h-16 rounded-full border-[3px] border-red-500 flex items-center justify-center bg-white shadow-lg overflow-hidden">
                           <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-gray-50">
                              <span className="text-gray-300 text-2xl">👤</span>
                           </div>
                        </div>
                      </div>
                      
                      <h4 className="text-[#0B1437] font-bold text-xl leading-tight mb-1">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-[11px] uppercase tracking-widest font-extrabold transition-colors">
                        {item.role}
                      </p>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;