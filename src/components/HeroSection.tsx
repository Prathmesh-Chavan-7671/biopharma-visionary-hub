
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { MEDIA_ASSETS } from '@/constants/media';
import { ArrowRight, Zap, Brain, Atom } from 'lucide-react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-bio-navy via-black to-bio-teal/30"
    >
      {/* Animated background video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-20"
        >
          <source src={MEDIA_ASSETS.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-bio-navy/50 to-bio-teal/20"></div>
      </div>

      {/* Floating hexagons and particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 md:w-24 md:h-24 opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.8})`,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`
            }}
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon 
                points="50 1, 95 25, 95 75, 50 99, 5 75, 5 25" 
                stroke="url(#hexGradient)" 
                strokeWidth="1" 
                fill="none"
              />
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0EA5E9" />
                  <stop offset="100%" stopColor="#0D9488" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNLjUuNWg2MHY2MGgtNjB6Ii8+PHBhdGggZmlsbD0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMDQpIiBkPSJNMzAgMzBoMzB2MzBoLTMweiIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Premium badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-bio-blue/10 border border-bio-blue/20">
              <span className="flex h-2 w-2 rounded-full bg-bio-blue mr-2 animate-pulse"></span>
              <span className="text-bio-light-blue text-sm font-medium">Biopharmaceutical Innovator</span>
            </div>
            
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Dr. Ratnesh Jain
                <span className="block mt-3 text-3xl md:text-4xl font-light text-gray-300">
                  Innovating Biopharmaceutical Solutions   <span className="text-bio-teal font-medium">Empowering the Next Generation</span> 
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mt-6">
                Pioneering biopharmaceutical innovations that bridge academic research and industrial applications. 
                <span className="text-bio-light-blue"> Accelerating R&D pipelines </span> 
                for global pharmaceutical companies.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-bio-blue/20 flex items-center justify-center mr-3">
                  <Atom className="h-5 w-5 text-bio-light-blue" />
                </div>
                <div>
                  <p className="text-white font-medium">30+ Patents</p>
                  <p className="text-gray-400 text-sm">Filed & Granted</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-bio-blue/20 flex items-center justify-center mr-3">
                  <Brain className="h-5 w-5 text-bio-light-blue" />
                </div>
                <div>
                  <p className="text-white font-medium">20+ Years</p>
                  <p className="text-gray-400 text-sm">Industry Experience</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-bio-blue/20 flex items-center justify-center mr-3">
                  <Zap className="h-5 w-5 text-bio-light-blue" />
                </div>
                <div>
                  <p className="text-white font-medium">50+ Companies</p>
                  <p className="text-gray-400 text-sm">Successfully Partnered</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-bio-blue hover:bg-bio-teal text-white px-8 py-6 rounded-md group">
                <span className="flex items-center text-base">
                  Connect with Dr. Jain
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing effect behind profile */}
              <div className="absolute -inset-4 bg-gradient-to-r from-bio-blue/30 to-bio-teal/30 rounded-full blur-xl"></div>
              
              <div className="relative z-10 rounded-full p-2">
                <div className="relative">
                  {/* Orbital rings around the profile */}
                  <div className="absolute inset-0 rounded-full border border-bio-blue/20 animate-spin-slow" 
                    style={{ animationDuration: '30s', width: '120%', height: '120%', top: '-10%', left: '-10%' }}></div>
                  <div className="absolute inset-0 rounded-full border border-bio-teal/20 animate-spin-slow" 
                    style={{ animationDuration: '20s', animationDirection: 'reverse', width: '140%', height: '140%', top: '-20%', left: '-20%' }}></div>
                  
                  <img 
                    src="/images/Dr. Ratnesh Jain.png" 
                    alt="Dr. Ratnesh Jain" 
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/10"
                  />
                  
                  {/* Stats cards positioned around the image */}
                  <div className="absolute -top-6 -left-6 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-lg">
                    <p className="text-bio-light-blue font-semibold">130+ Publications</p>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-lg">
                    <p className="text-bio-teal font-semibold">IIT Bombay & Harvard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
