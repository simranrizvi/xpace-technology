import React from "react";
import Link from "next/link";

export default function PageTitle({ title }) {
  return (
    <section
      className="relative w-full h-68 md:h-80 flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/about/page-title.jpg')" }}
    >
      {/* 1. Dark Overlay (Jaisa image me dark effect hai) */}
      <div className="absolute inset-0 bg-[#000000]/70"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col gap-2">
          {/* 2. Main Title (Big White Font) */}
          <h1 className="!text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h1>

          {/* 3. Breadcrumb Section */}
          <div className="flex items-center gap-3 mt-2 text-sm md:text-base font-semibold">
            {/* Home Link (Red Color) */}
            <Link
              href="/"
              className="text-red-600 transition-colors hover:text-white"
            >
              Home
            </Link>

            {/* Arrow/Divider (White) */}
            <span className="text-white text-xs">
              <svg
                className="w-3 h-3 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>

            {/* Current Page (White Color) */}
            <span className="text-white tracking-widest">{title}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
