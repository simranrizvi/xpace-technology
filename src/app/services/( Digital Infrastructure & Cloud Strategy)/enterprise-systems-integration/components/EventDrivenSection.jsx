import React from 'react';
import { Zap, Search, ArrowRight } from 'lucide-react';

const EventDrivenSection = () => {
  return (
    <div className="w-full font-sans">
      {/* Top Section: Event-Driven Architecture (EDA) */}
      <section className="bg-white py-24 px-6 relative overflow-hidden">
        {/* Large Decorative Circle in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-50 rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          {/* Icon with circular shadow */}
          <div className="w-20 h-20 bg-white rounded-full shadow-2xl shadow-red-100 flex items-center justify-center mx-auto mb-10 border border-gray-50">
            <Zap className="text-accent" size={36} fill="currentColor" />
          </div>

          <h2 className="text-4xl font-bold text-primary mb-6">
            Event-Driven Architecture (EDA)
          </h2>

          <p className="text-secondary text-sm leading-relaxed max-w-2xl mx-auto mb-8">
            XPACE is moving beyond batch processing. By using technologies like Kafka, we enable 
            your systems to react to events (e.g., "Card Swiped") instantly, powering real-time 
            analytics.
          </p>
          
         
        </div>
      </section>

      {/* Bottom Section: Break Down the Silos (CTA) */}
      <section className="bg-accent py-20 px-6 relative overflow-hidden">
     

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">
            Break Down the Silos
          </h2>
          
          <p className="text-white/90 text-lg mb-12 font-medium">
            Stop letting disconnected systems slow you down. Build a unified digital ecosystem.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-md font-bold transition-all shadow-xl flex items-center gap-2">
              Request Integration Audit
            </button>
            <button className="bg-black/20 text-white border border-white/30 hover:bg-black/30 px-8 py-4 rounded-md font-bold transition-all flex items-center gap-2">
              Explore API Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDrivenSection;