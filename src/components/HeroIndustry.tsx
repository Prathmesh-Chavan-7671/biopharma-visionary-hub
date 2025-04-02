
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TYPOGRAPHY, SPACING } from '@/constants/styles';

const HeroIndustry = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-scientist-in-laboratory-27797-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
      </div>

      <div className={`relative z-10 ${SPACING.section} flex items-center`}>
        <div className={SPACING.container}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-bio-teal/10 border border-bio-teal/30">
                <span className="text-bio-teal text-sm font-medium flex items-center">
                  <span className="flex h-2 w-2 rounded-full bg-bio-teal mr-2"></span>
                  Professor at IIT Bombay & Harvard Medical School
                </span>
              </div>
              
              <h1 className={`${TYPOGRAPHY.h1} text-bio-navy leading-tight`}>
                Accelerating <span className="text-bio-teal">Pharmaceutical</span> & <span className="text-bio-blue">Biotech</span> Innovation
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-medium text-gray-600">
                Prof. Ratnesh Jain - Industry Collaboration Specialist
              </h2>
              
              <p className="text-xl text-gray-600 max-w-2xl">
                Partner with a globally recognized expert to solve complex technical challenges, 
                reduce R&D costs, and accelerate your product development pipeline.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-bio-light-gray rounded-lg px-4 py-2">
                  <span className="text-bio-navy font-medium">30%</span>
                  <span className="ml-2 text-gray-600 text-sm">R&D Cost Reduction</span>
                </div>
                <div className="flex items-center bg-bio-light-gray rounded-lg px-4 py-2">
                  <span className="text-bio-navy font-medium">8-12</span>
                  <span className="ml-2 text-gray-600 text-sm">Months Faster to Market</span>
                </div>
                <div className="flex items-center bg-bio-light-gray rounded-lg px-4 py-2">
                  <span className="text-bio-navy font-medium">90%</span>
                  <span className="ml-2 text-gray-600 text-sm">Regulatory Success Rate</span>
                </div>
              </div>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button className="bg-bio-navy hover:bg-bio-blue text-white px-6 py-6 rounded-md text-base font-medium">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-bio-navy text-bio-navy hover:bg-bio-navy/5 px-6 py-6 rounded-md text-base font-medium">
                  View Industry Solutions
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-bio-light-blue/20 to-bio-light-teal/20 rounded-full blur-3xl"></div>
              <img 
                src="https://media.licdn.com/dms/image/C5603AQEYffGOKr_MYA/profile-displayphoto-shrink_800_800/0/1517013693864"
                alt="Prof. Ratnesh Jain" 
                className="w-full max-w-md mx-auto rounded-lg shadow-xl border-4 border-white"
              />
              <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-lg p-4 max-w-xs">
                <p className="text-bio-navy font-medium">Industry Experience</p>
                <div className="flex mt-2 space-x-1">
                  <img src="https://logo.clearbit.com/cipla.com" alt="Cipla" className="h-8 w-8 rounded" />
                  <img src="https://logo.clearbit.com/abbott.com" alt="Abbott" className="h-8 w-8 rounded" />
                  <img src="https://logo.clearbit.com/sunpharma.com" alt="Sun Pharma" className="h-8 w-8 rounded" />
                  <img src="https://logo.clearbit.com/gsk.com" alt="GSK" className="h-8 w-8 rounded" />
                  <div className="h-8 w-8 rounded bg-bio-light-gray flex items-center justify-center text-sm text-bio-navy">+12</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroIndustry;
