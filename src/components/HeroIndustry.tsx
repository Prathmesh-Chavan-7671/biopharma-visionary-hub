
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Award, BarChart3, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TYPOGRAPHY, SPACING } from '@/constants/styles';
import { MEDIA_ASSETS } from '@/constants/media';

const HeroIndustry = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Slow down video playback for better aesthetics
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
    
    // Set loaded state after a brief delay for entrance animations
    const timer = setTimeout(() => setIsLoaded(true), 300);
    
    return () => clearTimeout(timer);
  }, []);

  // Parallax effect
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src={MEDIA_ASSETS.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/90"></div>
      </div>

      {/* Subtle animated grid pattern */}
      <div className="absolute inset-0 z-1 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMC41Ii8+PHBhdGggZD0iTSA2MCAwIEwgNjAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen py-16 md:py-0">
        <div className={SPACING.container}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 md:space-y-8">
              <div 
                className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '200ms' }}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-blue-400 text-sm font-medium">Leading Industry Collaborations</span>
                </div>
                
                <h1 className={`${TYPOGRAPHY.h1} mb-4 text-gradient`}>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
                    Dr. Ratnesh Jain
                  </span>
                </h1>
                
                <h2 className="text-3xl font-light text-gray-300 mb-6">
                  Pioneering Pharmaceutical 
                  <span className="text-blue-300 font-medium"> Research & Innovation</span>
                </h2>
                
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Bridging academic excellence and industry challenges with over two decades of 
                  pharmaceutical research, technological innovation, and successful collaborations.
                </p>
              </div>
              
              <div 
                className={`grid grid-cols-3 gap-4 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="relative group overflow-hidden rounded-xl p-4 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <Award className="h-6 w-6 text-blue-400 mb-3" />
                    <p className="text-2xl font-bold text-white">20+</p>
                    <p className="text-sm text-gray-400">Years Experience</p>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-xl p-4 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <BarChart3 className="h-6 w-6 text-blue-400 mb-3" />
                    <p className="text-2xl font-bold text-white">50+</p>
                    <p className="text-sm text-gray-400">Industry Projects</p>
                  </div>
                </div>
                
                <div className="relative group overflow-hidden rounded-xl p-4 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <Target className="h-6 w-6 text-blue-400 mb-3" />
                    <p className="text-2xl font-bold text-white">90%</p>
                    <p className="text-sm text-gray-400">Success Rate</p>
                  </div>
                </div>
              </div>
              
              <div 
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '600ms' }}
              >
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 rounded-lg group overflow-hidden relative"
                >
                  <span className="absolute inset-0 w-0 bg-blue-500 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="relative z-10 flex items-center">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-blue-500/30 text-blue-400 hover:text-blue-300 hover:border-blue-400/50 px-6 py-6 rounded-lg"
                >
                  <span>View Research Portfolio</span>
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-6 flex justify-center lg:justify-end transition-all duration-1000 ease-out"
              style={{
                transitionDelay: '800ms',
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(40px)'
              }}
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 animate-pulse-slow blur-xl"></div>
                
                {/* Profile Image Container */}
                <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 p-1.5 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 z-0"></div>
                  <img 
                    src={MEDIA_ASSETS.profileImage}
                    alt="Dr. Ratnesh Jain" 
                    className="relative z-10 w-72 md:w-96 rounded-xl"
                    style={{ 
                      transform: `translateY(${offsetY * 0.1}px)`,
                      transition: 'transform 0.1s ease-out'
                    }}
                  />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 h-10 w-10 border-t-2 border-r-2 border-blue-400/50 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2 border-purple-400/50 rounded-bl-lg"></div>
                </div>
                
                {/* Floating achievement badge */}
                <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-lg rounded-lg p-3 border border-white/20 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      <Award className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-300 font-medium">Harvard Medical School</p>
                      <p className="text-xs text-white">Visiting Professor</p>
                    </div>
                  </div>
                </div>
                
                {/* Company logos interactive element */}
                <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-lg rounded-lg p-3 border border-white/20 shadow-lg">
                  <p className="text-xs text-blue-300 font-medium mb-1">Industry Partners</p>
                  <div className="flex items-center space-x-1">
                    <img src={MEDIA_ASSETS.partnerLogos.cipla} className="h-6 w-6 rounded-full bg-white p-0.5" alt="Cipla" />
                    <img src={MEDIA_ASSETS.partnerLogos.pfizer} className="h-6 w-6 rounded-full bg-white p-0.5" alt="Pfizer" />
                    <img src={MEDIA_ASSETS.partnerLogos.gsk} className="h-6 w-6 rounded-full bg-white p-0.5" alt="GSK" />
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-white/10 text-xs text-white font-medium">+12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex justify-center">
          <div className="animate-bounce w-10 h-10 rounded-full border border-white/20 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroIndustry;
