
import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-bio-navy to-bio-blue/90 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Glowing gradient orbs */}
        <div className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full bg-bio-teal/20 filter blur-[80px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-bio-blue/20 filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxwYXR0ZXJuIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9InBhdHRlcm4tZ3JpZCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+CiAgICA8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSI0MCIgeTI9IjAiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIwLjUiIC8+CiAgICA8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iNDAiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIwLjUiIC8+CiAgPC9wYXR0ZXJuPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjcGF0dGVybi1ncmlkKSIgLz4KPC9zdmc+')] opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="neo-glassmorphism border border-white/10 rounded-xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
          <div className="inline-block px-4 py-1.5 neo-glassmorphism rounded-full mb-6 border border-white/20">
            <span className="text-bio-light-blue text-sm font-medium">Next Steps</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-gradient-neon">Innovate</span> with Dr. Jain?
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Whether you're seeking scientific consulting, a speaker for your event, or exploring a potential research collaboration, take the first step towards innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="neo-button primary rounded-md group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-bio-teal via-bio-blue to-bio-light-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </Button>
            
            <Button variant="outline" className="neo-button secondary rounded-md border-white/30 text-white hover:bg-white/10 backdrop-blur-md transition-all">
              Contact Dr. Jain
              <MessageCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Futuristic corner accents */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-4 h-16 border-r border-bio-light-blue/30"></div>
            <div className="absolute top-0 right-0 w-16 h-4 border-t border-bio-light-blue/30"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-4 h-16 border-l border-bio-light-blue/30"></div>
            <div className="absolute bottom-0 left-0 w-16 h-4 border-b border-bio-light-blue/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
