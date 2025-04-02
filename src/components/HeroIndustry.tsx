
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, BarChart2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TYPOGRAPHY, SPACING, ANIMATIONS } from '@/constants/styles';
import { MEDIA_ASSETS } from '@/constants/media';

const HeroIndustry = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Set loaded state after a brief delay for entrance animations
    const timer = setTimeout(() => setIsLoaded(true), 300);
    
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
    
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Mouse parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) / 25;
    const moveY = (clientY - window.innerHeight / 2) / 25;
    setMousePosition({ x: moveX, y: moveY });
  };

  return (
    <div 
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-[90vh]"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxwYXR0ZXJuIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9InBhdHRlcm4tZ3JpZCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+CiAgICA8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSI0MCIgeTI9IjAiIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMDgpIiBzdHJva2Utd2lkdGg9IjAuNSIgLz4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSI0MCIgc3Ryb2tlPSJyZ2JhKDEzLCAxNDgsIDEzNiwgMC4wOCkiIHN0cm9rZS13aWR0aD0iMC41IiAvPgogIDwvcGF0dGVybj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4tZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-30"></div>
        
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-30 scale-110"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-laboratory-view-close-up-of-flask-13505-large.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/30 to-teal-900/50 backdrop-blur-sm"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-bio-light-blue/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.2 + Math.random() * 0.5,
              transform: `scale(${0.5 + Math.random() * 1.5})`,
              filter: `blur(${Math.random() * 2}px)`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className={`relative z-10 ${SPACING.section} flex items-center min-h-[90vh]`}>
        <div className={SPACING.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div 
                className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-bio-blue/20 to-bio-teal/20 border border-bio-teal/20 shadow-lg shadow-bio-blue/10"
              >
                <span className="text-bio-light-blue text-sm font-medium flex items-center">
                  <Sparkles className="h-3.5 w-3.5 mr-2 animate-pulse text-bio-light-blue" />
                  Professor at IIT Bombay & Harvard Medical School
                </span>
              </div>
              
              <h1 className={`${TYPOGRAPHY.h1} tracking-tighter leading-none`}>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-bio-light-blue to-bio-light-teal drop-shadow-md">
                  Accelerating <span className="font-extrabold italic">Pharmaceutical</span> & <span className="font-extrabold italic">Biotech</span> Innovation
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-medium text-white/90 transform transition-all duration-500 hover:text-bio-light-blue">
                Prof. Ratnesh Jain <span className="text-bio-light-teal">—</span> Industry Collaboration Specialist
              </h2>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Partner with a globally recognized expert to solve complex technical challenges, 
                reduce R&D costs, and accelerate your product development pipeline.
              </p>
              
              <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-1000" style={{animationDelay: "300ms"}}>
                <div className="stat-item bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-bio-blue/10 group">
                  <div className="flex items-center">
                    <BarChart2 className="h-5 w-5 text-bio-light-blue mr-2 group-hover:text-bio-light-teal transition-colors" />
                    <span className="text-bio-light-blue font-bold text-xl group-hover:text-bio-light-teal transition-colors">30%</span>
                  </div>
                  <span className="mt-1 text-gray-300 text-sm">R&D Cost Reduction</span>
                </div>
                <div className="stat-item bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-bio-teal/10 group">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-bio-light-teal mr-2 group-hover:text-bio-light-blue transition-colors" />
                    <span className="text-bio-light-teal font-bold text-xl group-hover:text-bio-light-blue transition-colors">8-12</span>
                  </div>
                  <span className="mt-1 text-gray-300 text-sm">Months Faster to Market</span>
                </div>
                <div className="stat-item bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col transition-all duration-300 hover:bg-white/10 hover:shadow-xl hover:shadow-bio-blue/10 group">
                  <div className="flex items-center">
                    <Sparkles className="h-5 w-5 text-bio-light-blue mr-2 group-hover:text-bio-light-teal transition-colors" />
                    <span className="text-bio-light-blue font-bold text-xl group-hover:text-bio-light-teal transition-colors">90%</span>
                  </div>
                  <span className="mt-1 text-gray-300 text-sm">Regulatory Success Rate</span>
                </div>
              </div>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button 
                  className="relative overflow-hidden group bg-gradient-to-r from-bio-blue to-bio-teal hover:from-bio-teal hover:to-bio-blue text-white px-6 py-6 rounded-lg text-base font-medium transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-bio-blue/30"
                >
                  <span className="absolute inset-0 w-0 bg-white/10 group-hover:w-full transform skew-x-12 transition-all duration-700 -z-10"></span>
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  className="relative overflow-hidden group border-bio-light-teal/50 text-bio-light-teal hover:text-white px-6 py-6 rounded-lg text-base font-medium transform transition-all duration-300 hover:border-bio-light-teal/80"
                >
                  <span className="absolute inset-0 w-0 bg-gradient-to-r from-bio-teal/80 to-bio-blue/80 group-hover:w-full transform skew-x-12 transition-all duration-700 -z-10"></span>
                  View Industry Solutions
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              {/* Animated glow effect */}
              <div 
                className="absolute -z-10 inset-0 bg-gradient-to-r from-bio-light-blue/20 to-bio-light-teal/20 rounded-full blur-3xl animate-pulse-slow"
                style={{
                  transform: `translate3d(${mousePosition.x * -1}px, ${mousePosition.y * -1}px, 0)`,
                  transition: 'transform 0.2s ease-out'
                }}
              ></div>
              
              {/* Profile image with modern styling */}
              <div 
                className={`relative z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{
                  transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-bio-blue to-bio-teal rounded-2xl blur opacity-30 animate-pulse-slow"></div>
                <div className="relative bg-black/40 backdrop-blur-lg p-2 rounded-2xl shadow-2xl border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.7&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="Prof. Ratnesh Jain" 
                    className="w-full rounded-xl shadow-inner relative z-10"
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-bio-light-blue opacity-70 rounded-tl-lg"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-bio-light-teal opacity-70 rounded-br-lg"></div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div 
                className={`absolute -bottom-4 -right-4 bg-slate-900/80 backdrop-blur-lg shadow-lg shadow-bio-blue/10 rounded-lg p-4 max-w-xs border border-white/10 transition-all duration-1000 hover:scale-110 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
                style={{animationDelay: "400ms", transform: `translate3d(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px, 0)`, transition: 'transform 0.3s ease-out'}}
              >
                <p className="text-bio-light-blue font-semibold">Industry Experience</p>
                <div className="flex mt-2 space-x-1">
                  <img src={MEDIA_ASSETS.partnerLogos.cipla} alt="Cipla" className="h-8 w-8 rounded shadow-sm backdrop-blur-sm bg-white/90 p-1" />
                  <img src={MEDIA_ASSETS.partnerLogos.abbott} alt="Abbott" className="h-8 w-8 rounded shadow-sm backdrop-blur-sm bg-white/90 p-1" />
                  <img src={MEDIA_ASSETS.partnerLogos.sunpharma} alt="Sun Pharma" className="h-8 w-8 rounded shadow-sm backdrop-blur-sm bg-white/90 p-1" />
                  <img src={MEDIA_ASSETS.partnerLogos.gsk} alt="GSK" className="h-8 w-8 rounded shadow-sm backdrop-blur-sm bg-white/90 p-1" />
                  <div className="h-8 w-8 rounded bg-white/10 backdrop-blur-sm flex items-center justify-center text-sm text-bio-light-blue font-bold border border-bio-light-blue/30">+12</div>
                </div>
              </div>
              
              {/* Scientific data element */}
              <div 
                className={`absolute -top-4 -left-10 bg-slate-900/80 backdrop-blur-lg shadow-lg shadow-bio-teal/10 rounded-lg p-3 border border-white/10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{animationDelay: "600ms", transform: `translate3d(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px, 0)`, transition: 'transform 0.3s ease-out'}}
              >
                <p className="text-bio-light-teal text-xs font-medium">Publication Impact</p>
                <p className="text-white font-bold text-lg">h-index: 48</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scrolling indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center">
        <div className="animate-bounce bg-white/10 backdrop-blur-md p-2 w-10 h-10 ring-1 ring-bio-light-teal/20 shadow-lg shadow-bio-blue/5 rounded-full flex items-center justify-center border border-white/10">
          <svg className="w-6 h-6 text-bio-light-blue" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroIndustry;
