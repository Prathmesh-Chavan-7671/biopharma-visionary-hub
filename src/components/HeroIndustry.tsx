
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TYPOGRAPHY, SPACING } from '@/constants/styles';
import { MEDIA_ASSETS } from '@/constants/media';

const HeroIndustry = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation for stats elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll('.stat-item');
      statItems.forEach((item) => observer.observe(item));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-50"
        >
          <source src={MEDIA_ASSETS.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className={`relative z-10 ${SPACING.section} flex items-center min-h-[90vh]`}>
        <div className={SPACING.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div 
                className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-bio-light-blue/30 to-bio-light-teal/30 border border-bio-teal/20 animate-pulse-slow"
              >
                <span className="text-bio-teal text-sm font-medium flex items-center">
                  <span className="flex h-2 w-2 rounded-full bg-bio-teal mr-2 animate-pulse"></span>
                  Professor at IIT Bombay & Harvard Medical School
                </span>
              </div>
              
              <h1 
                className={`${TYPOGRAPHY.h1} text-transparent bg-clip-text bg-gradient-to-r from-bio-navy via-bio-teal to-bio-blue`}
              >
                Accelerating <span className="font-bold">Pharmaceutical</span> & <span className="font-bold">Biotech</span> Innovation
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-medium text-gray-700 transform transition-all duration-500 hover:scale-105">
                Prof. Ratnesh Jain - Industry Collaboration Specialist
              </h2>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Partner with a globally recognized expert to solve complex technical challenges, 
                reduce R&D costs, and accelerate your product development pipeline.
              </p>
              
              <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 opacity-0 transform translate-y-10 transition-all duration-700 ease-out" style={{animationDelay: "300ms"}}>
                <div className="stat-item flex items-center bg-gradient-to-r from-bio-light-blue/10 to-bio-light-teal/10 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 transform translate-y-4" style={{transitionDelay: "100ms"}}>
                  <span className="text-bio-blue font-bold text-xl">30%</span>
                  <span className="ml-2 text-gray-700 text-sm">R&D Cost Reduction</span>
                </div>
                <div className="stat-item flex items-center bg-gradient-to-r from-bio-light-blue/10 to-bio-light-teal/10 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 transform translate-y-4" style={{transitionDelay: "200ms"}}>
                  <span className="text-bio-blue font-bold text-xl">8-12</span>
                  <span className="ml-2 text-gray-700 text-sm">Months Faster to Market</span>
                </div>
                <div className="stat-item flex items-center bg-gradient-to-r from-bio-light-blue/10 to-bio-light-teal/10 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 transform translate-y-4" style={{transitionDelay: "300ms"}}>
                  <span className="text-bio-blue font-bold text-xl">90%</span>
                  <span className="ml-2 text-gray-700 text-sm">Regulatory Success Rate</span>
                </div>
              </div>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-gradient-to-r from-bio-blue to-bio-teal hover:from-bio-teal hover:to-bio-blue text-white px-6 py-6 rounded-md text-base font-medium transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-bio-teal text-bio-teal hover:bg-bio-light-teal/20 px-6 py-6 rounded-md text-base font-medium transform transition-all duration-300 hover:-translate-y-1"
                >
                  View Industry Solutions
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              {/* Background glow effect */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-bio-light-blue/30 to-bio-light-teal/30 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Profile image with modern styling */}
              <div className="relative z-10 transform transition-all duration-500 hover:rotate-2 hover:scale-105">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-bio-blue to-bio-teal rounded-2xl blur opacity-30 animate-pulse-slow"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                  <img 
                    src={MEDIA_ASSETS.profileImage}
                    alt="Prof. Ratnesh Jain" 
                    className="w-full rounded-xl shadow-inner"
                  />
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-lg p-4 max-w-xs transform transition-all duration-500 hover:scale-110 animate-float">
                <p className="text-bio-navy font-semibold">Industry Experience</p>
                <div className="flex mt-2 space-x-1">
                  <img src={MEDIA_ASSETS.partnerLogos.cipla} alt="Cipla" className="h-8 w-8 rounded shadow-sm" />
                  <img src={MEDIA_ASSETS.partnerLogos.abbott} alt="Abbott" className="h-8 w-8 rounded shadow-sm" />
                  <img src={MEDIA_ASSETS.partnerLogos.sunpharma} alt="Sun Pharma" className="h-8 w-8 rounded shadow-sm" />
                  <img src={MEDIA_ASSETS.partnerLogos.gsk} alt="GSK" className="h-8 w-8 rounded shadow-sm" />
                  <div className="h-8 w-8 rounded bg-bio-light-gray flex items-center justify-center text-sm text-bio-navy font-bold shadow-sm">+12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center">
        <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-bio-light-teal/20 shadow-lg rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-bio-teal" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroIndustry;
