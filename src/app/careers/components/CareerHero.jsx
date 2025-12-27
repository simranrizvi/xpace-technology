import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const CareerHero = ({ title = "Career" }) => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          // Image ka path public folder ke hisab se set karein
          backgroundImage: `url('/career.jpg')`, 
        }}
      >
        {/* Dark Overlay taake text clear dikhe */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col gap-4">
          
          {/* Main Title */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {title}
          </h1>

          {/* Breadcrumbs Navigation */}
          <nav className="flex items-center text-sm md:text-base font-semibold">
            <Link 
              href="/" 
              className="text-red-600 hover:text-red-500 transition-colors flex items-center"
            >
              Home
            </Link>
            
            <span className="mx-2 text-white flex items-center justify-center">
              <ChevronRight size={18} strokeWidth={3} />
            </span>

            <span className="text-white">
              {title}
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;