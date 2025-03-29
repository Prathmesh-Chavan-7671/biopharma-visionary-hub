
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MEDIA_ASSETS } from '@/constants/media';
import { TYPOGRAPHY, SPACING, COLORS } from '@/constants/styles';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-40"
        >
          <source src={MEDIA_ASSETS.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Hexagonal Grid Background */}
      <div className="absolute inset-0 z-1">
        <div className="relative w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute hexagon"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className={SPACING.container}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className={`${TYPOGRAPHY.h1} text-gradient-primary`}>
                Pioneering Biopharma
                <span className="block mt-2 text-white">
                  Accelerating Industry Growth
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl">
                Helping pharma & biotech companies with cutting-edge R&D, 
                product development, and strategic consulting in the era of
                AI-accelerated discovery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-bio-blue to-bio-teal hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-all duration-300">
                  <span className="relative z-10 flex items-center">
                    Collaborate Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-bio-teal to-bio-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                
                <Button variant="outline" className="rounded-xl border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative hexagon-container">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-bio-blue to-bio-teal rounded-[20%] blur opacity-75 animate-pulse" />
                <div className="relative hexagon-shape overflow-hidden border border-white/10">
                  <img 
                    src={MEDIA_ASSETS.profileImage}
                    alt="Dr. Ratnesh Jain" 
                    className="w-full h-full object-cover"
                  />
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
