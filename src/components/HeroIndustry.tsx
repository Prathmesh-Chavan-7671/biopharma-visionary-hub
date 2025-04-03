
import React from 'react';
import { Button } from '@/components/ui/button';
import { MEDIA_ASSETS } from '@/constants/media';

const HeroIndustry = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dr. Ratnesh Jain
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Biopharmaceutical Researcher & Innovation Consultant
          </p>
        </div>
        
        <div className="mb-8">
          <img 
            src={MEDIA_ASSETS.profileImage} 
            alt="Dr. Ratnesh Jain" 
            className="w-48 h-48 rounded-full mx-auto object-cover shadow-md"
          />
        </div>
        
        <div className="flex justify-center space-x-4">
          <Button>Research Portfolio</Button>
          <Button variant="outline">Contact</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroIndustry;
