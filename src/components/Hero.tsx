
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-bio-light-blue via-white to-bio-light-teal">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-bio-navy sm:text-5xl md:text-6xl">
                <span className="block">Dr. Ratnesh Jain</span>
                <span className="block text-bio-teal mt-3">Bridging Science & Industry | Accelerating Biopharmaceutical Innovation</span>
              </h1>
              <p className="mt-3 text-base text-bio-gray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Helping pharma & biotech companies with cutting-edge R&D, product development, and strategic consulting.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button className="cta-button w-full px-8 py-3">
                    Partner with Dr. Jain
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button className="secondary-button w-full px-8 py-3">
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-cover bg-center sm:h-72 md:h-96 lg:w-full lg:h-full" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
      </div>
    </div>
  );
};

export default Hero;
