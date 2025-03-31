
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MEDIA_ASSETS } from '@/constants/media';
import { TYPOGRAPHY, SPACING, COLORS } from '@/constants/styles';
import '../styles/hexagon.css';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-bio-navy/90 to-bio-teal/20"
    >
      {/* 3D Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogIDxwYXR0ZXJuIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9InBhdHRlcm4tZ3JpZCIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+CiAgICA8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSI0MCIgeTI9IjAiIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMDgpIiBzdHJva2Utd2lkdGg9IjAuNSIgLz4KICAgIDxsaW5lIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSI0MCIgc3Ryb2tlPSJyZ2JhKDEzLCAxNDgsIDEzNiwgMC4wOCkiIHN0cm9rZS13aWR0aD0iMC41IiAvPgogIDwvcGF0dGVybj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4tZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-30"></div>

      {/* Background Video with Overlay */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-bio-navy/50 to-bio-teal/30 backdrop-blur-sm"></div>
      </div>

      {/* Animated Molecular Structures */}
      <div className="absolute inset-0 z-1">
        <div className="relative w-full h-full overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute futuristic-hexagon"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                opacity: 0.2 + Math.random() * 0.5,
                transform: `scale(${0.5 + Math.random() * 1})`,
                filter: `hue-rotate(${Math.random() * 60}deg) blur(${Math.random() * 2}px)`
              }}
            />
          ))}
        </div>
      </div>

      {/* Dynamic Glow Effect */}
      <div 
        className="absolute inset-0 z-1 opacity-30 bg-radial-glow" 
        style={{
          backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
          backgroundSize: '120% 120%'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className={SPACING.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-1.5 neo-glassmorphism rounded-full mb-4 border border-bio-blue/30 backdrop-blur-md">
                <span className="text-bio-light-blue text-sm font-medium flex items-center">
                  <span className="flex h-2 w-2 rounded-full bg-bio-blue mr-2 animate-pulse"></span>
                  Professor at IIT Bombay & Harvard Medical School
                </span>
              </div>
              
              <h1 className={`${TYPOGRAPHY.h1} text-white leading-tight`}>
                Prof. <span className="text-gradient-neon relative inline-block">
                  Ratnesh Jain
                  <span className="absolute -inset-1 blur-md bg-bio-blue/20 animate-pulse-slow rounded-lg -z-10"></span>
                </span>
                <span className="block mt-3 text-3xl md:text-4xl font-light text-gray-300">
                  Pioneering <span className="font-medium text-bio-light-blue">Biopharmaceutical</span> Research & Innovation
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-2xl leading-relaxed neo-text">
                Leading expert in pharmaceutical sciences, bioprocess engineering, and 
                <span className="text-bio-light-blue"> AI-accelerated drug delivery systems</span> with extensive industry collaboration experience.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <span className="neo-pill px-4 py-2 rounded-full text-sm">Pharmaceutics & Biotechnology</span>
                <span className="neo-pill px-4 py-2 rounded-full text-sm">Drug Delivery Systems</span>
                <span className="neo-pill px-4 py-2 rounded-full text-sm">IPR & Technology Transfer</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="neo-button primary rounded-full group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Let's Connect
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-bio-teal via-bio-blue to-bio-light-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </Button>
                
                <Button variant="outline" className="neo-button secondary rounded-full border-bio-blue/30 text-bio-light-blue hover:bg-bio-blue/10 backdrop-blur-md transition-all">
                  Schedule a Consultation
                  <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end perspective-container animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative w-80 h-80 md:w-[380px] md:h-[380px] transform rotate-y-0 transition-transform duration-1000">
                {/* Glow effect behind profile */}
                <div className="absolute inset-0 bg-gradient-to-r from-bio-blue/40 to-bio-teal/40 rounded-full blur-[50px] animate-pulse-slow opacity-70"></div>
                
                {/* Hexagonal frame pattern */}
                <div className="absolute inset-0 hexagonal-frame"></div>
                
                {/* Profile image container */}
                <div className="absolute inset-5 rounded-full overflow-hidden border-2 border-bio-blue/40 neo-profile-border p-1 backdrop-blur-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-bio-blue/10 via-transparent to-bio-teal/10 rounded-full"></div>
                  <img 
                    src={MEDIA_ASSETS.profileImage}
                    alt="Prof. Ratnesh Jain" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Orbital rings */}
                <div className="absolute inset-0 w-full h-full border border-dashed border-bio-blue/20 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }}></div>
                <div className="absolute -inset-8 w-[calc(100%+4rem)] h-[calc(100%+4rem)] border border-bio-teal/10 rounded-full animate-spin-slow" style={{ animationDuration: '50s', animationDirection: 'reverse' }}></div>
                <div className="absolute -inset-16 w-[calc(100%+8rem)] h-[calc(100%+8rem)] border border-bio-light-blue/5 rounded-full animate-spin-slow" style={{ animationDuration: '80s' }}></div>
                
                {/* Data points on the orbital rings */}
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-2 h-2 rounded-full bg-bio-light-blue shadow-glow" 
                    style={{ 
                      top: `calc(50% + ${Math.sin(i * (Math.PI / 4)) * 50}%)`,
                      left: `calc(50% + ${Math.cos(i * (Math.PI / 4)) * 50}%)`,
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 0 10px 2px rgba(186, 230, 253, 0.5)'
                    }}
                  />
                ))}
                
                {/* Floating tech specs */}
                <div className="absolute -top-2 -right-8 neo-glassmorphism px-3 py-1 text-xs text-bio-light-blue">
                  <div className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-bio-blue mr-1.5 rounded-full"></span>
                    <span>20+ Years Experience</span>
                  </div>
                </div>
                <div className="absolute bottom-10 -left-10 neo-glassmorphism px-3 py-1 text-xs text-bio-light-blue">
                  <div className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-bio-teal mr-1.5 rounded-full"></span>
                    <span>50+ Publications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

