
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MEDIA_ASSETS } from '@/constants/media';
import { TYPOGRAPHY, SPACING, COLORS } from '@/constants/styles';
import '../styles/hexagon.css';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-black/95 to-bio-navy/80">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-30"
        >
          <source src={MEDIA_ASSETS.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-bio-navy/40 to-bio-teal/30" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-1">
        <div className="relative w-full h-full overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute hexagon"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3 + Math.random() * 0.4
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className={SPACING.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block px-4 py-1.5 bg-bio-blue/10 backdrop-blur-sm border border-bio-blue/20 rounded-full mb-4">
                <span className="text-bio-light-blue text-sm font-medium">Professor at IIT Bombay & Harvard Medical School</span>
              </div>
              
              <h1 className={`${TYPOGRAPHY.h1} text-white leading-tight`}>
                Prof. <span className="text-gradient-primary">Ratnesh Jain</span>
                <span className="block mt-2 text-3xl md:text-4xl font-semibold text-gray-200">
                  Pioneering Biopharmaceutical Research & Innovation
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Leading expert in pharmaceutical sciences, bioprocess engineering, and AI-accelerated drug delivery systems with extensive industry collaboration experience.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <span className="glassmorphism-blue px-4 py-2 rounded-full text-sm">Pharmaceutics & Biotechnology</span>
                <span className="glassmorphism-blue px-4 py-2 rounded-full text-sm">Drug Delivery Systems</span>
                <span className="glassmorphism-blue px-4 py-2 rounded-full text-sm">IPR & Technology Transfer</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="relative group overflow-hidden rounded-full bg-gradient-to-r from-bio-blue to-bio-teal hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] transition-all duration-300">
                  <span className="relative z-10 flex items-center font-medium">
                    Collaborate Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-bio-teal to-bio-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                
                <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Glowing background effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-bio-teal via-bio-blue to-bio-navy opacity-70 blur-lg rounded-full animate-pulse-slow" />
                
                {/* Circular frame with gradient border */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/20 p-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-bio-blue/30 via-bio-teal/20 to-transparent rounded-full" />
                  <img 
                    src={MEDIA_ASSETS.profileImage}
                    alt="Prof. Ratnesh Jain" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Orbital rings */}
                <div className="absolute inset-0 w-full h-full border-2 border-dashed border-bio-blue/30 rounded-full animate-spin-slow" style={{ animationDuration: '30s' }} />
                <div className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] border border-bio-teal/20 rounded-full animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
