import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ServicesNew from "./components/ServicesNew";
import ServicesSection from "./components/ServicesSection";
import CompanyBenefits from "./components/CompanyBenefits";
import OurIndustries from "./components/OurIndustries";
import CompanyFacts from "./components/CompanyFacts";
import FAQSection from "./components/FAQSection";
import CallToAction from "./components/CallToAction";
import MapSection from "./components/MapSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ServicesNew />
      <CompanyBenefits />
      <OurIndustries />
      <CompanyFacts />
      <FAQSection />
      <CallToAction />
      <MapSection />
    </>
  );
}

// "use client";

// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden">
//       {/* Subtle circuit lines background (top-right) */}
//       <div className="absolute top-0 right-0 w-96 h-96 opacity-30">
//         <img
//           src="https://img.freepik.com/free-vector/digital-techno-circuit-line-networked-white-background-design_1017-49781.jpg"
//           alt="circuit background"
//           className="w-full h-full object-contain"
//         />
//       </div>

//       {/* Main circular image container */}
//       <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
//         {/* Dark blue shape bottom-left */}
//         <div className="absolute bottom-[-10px] left-[-150px] w-80 h-70 bg-blue-950 rounded-full opacity-90"></div>

//         {/* Circular frame with photo */}
//         <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
//           <img
//             src="https://www.shutterstock.com/image-photo/diverse-group-professionals-casual-attire-600nw-2551112317.jpg"
//             alt="Team collaborating on tablet"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Red Play Button (bottom-right overlay) */}
//         <div className="absolute bottom-8 right-8 w-20 h-20 md:w-24 md:h-24 rounded-full">
//           <img
//             src="https://img.freepik.com/premium-psd/red-play-icon-circle-with-white-triangle-middle_609989-1987.jpg"
//             alt="Play video"
//             className="w-full h-full object-contain drop-shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
