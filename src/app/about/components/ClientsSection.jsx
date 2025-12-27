"use client";

import React from "react";
// Swiper components aur styles import karein
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const clientLogos = [
  { id: 1, src: "about/partners/client1.png", alt: "Client 1" },
  { id: 2, src: "about/partners/client2.png", alt: "Client 2" },
  { id: 3, src: "about/partners/client3.png", alt: "Client 3" },
  { id: 4, src: "about/partners/client4.png", alt: "Client 4" },
  { id: 5, src: "about/partners/client7.png", alt: "Client 7" },
  { id: 6, src: "about/partners/client5.png", alt: "Client 5" },
  { id: 7, src: "about/partners/csc.png", alt: "CSC" },
  { id: 8, src: "about/partners/laaj (1).png", alt: "Laaj" },
  { id: 9, src: "about/partners/natha.png", alt: "Natha" },
  { id: 10, src: "about/partners/PROTECTOR OF PRIVACY.png", alt: "Protector" },
];

export default function ClientsSection() {
  return (
    <section className="py-12 bg-white clients-section alternate">
      <div className="container mx-auto px-4 lg:max-w-7xl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 5000, // 5 seconds interval
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="clients-swiper"
        >
          {clientLogos.map((logo) => (
            <SwiperSlide key={logo.id}>
              <div className="group w-full flex justify-center items-center p-8 transition-all duration-500 rounded-lg hover:bg-[#e3e3e6] cursor-pointer">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 w-auto object-contain opacity-[0.5] grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
