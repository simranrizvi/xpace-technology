import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section 
      className="relative h-[300px] md:h-[400px] w-full flex items-center bg-cover bg-center"
      style={{ 
        // Aap apni image ka path yahan dalain
        backgroundImage: `url('/page-title.jpg')` 
      }}
    >
      {/* Dark Overlay - Background ko dundhla aur dark karne ke liye */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-4">
          {/* Main Title */}
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-tight">
            Testimonial
          </h1>

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center text-sm md:text-base font-medium">
            <Link 
              href="/" 
              className="text-red-600 hover:text-red-500 transition-colors"
            >
              Home
            </Link>
            
            <span className="mx-2 text-white font-bold inline-block">
              <svg 
                className="w-4 h-4 fill-current" 
                viewBox="0 0 20 20"
              >
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
            </span>

            <span className="text-white">
              Testimonial
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default  HeroSection;