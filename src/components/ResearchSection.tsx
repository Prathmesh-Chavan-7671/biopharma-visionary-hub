
import React from 'react';
import { ArrowRight, Flask, Microscope, Dna } from 'lucide-react';
import { Button } from '@/components/ui/button';

const researchAreas = [
  {
    title: "Advanced Drug Delivery Systems",
    description: "Developing targeted nanocarriers to improve therapeutic efficacy while minimizing side effects for cancer and chronic disease treatments.",
    icon: Flask
  },
  {
    title: "3D Bioprinting Technologies",
    description: "Pioneering methods for creating living tissue constructs that can revolutionize drug testing, personalized medicine, and regenerative therapies.",
    icon: Microscope
  },
  {
    title: "Nanomedicine Innovations",
    description: "Engineering nanoscale drug delivery platforms with enhanced stability, targeting, and controlled release properties for improved patient outcomes.",
    icon: Dna
  }
];

const ResearchSection = () => {
  return (
    <section className="py-16 bg-white" id="research">
      <div className="content-container">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h2 className="section-heading">Research & Innovation</h2>
            <p className="text-lg text-bio-gray mb-8">
              Dr. Jain's research bridges the gap between fundamental science and industrial applications, creating technologies with significant commercial potential.
            </p>
            <Button className="secondary-button">
              View Publications
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="md:w-1/2 space-y-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="rounded-full bg-bio-light-teal p-3 flex-shrink-0">
                  <area.icon className="h-6 w-6 text-bio-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bio-navy mb-2">{area.title}</h3>
                  <p className="text-bio-gray">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-bio-light-blue/20 border border-bio-light-blue">
            <h4 className="text-2xl font-bold text-bio-navy mb-2">60+</h4>
            <p className="text-bio-gray">Research Publications</p>
          </div>
          <div className="p-6 rounded-lg bg-bio-light-teal/20 border border-bio-light-teal">
            <h4 className="text-2xl font-bold text-bio-navy mb-2">12</h4>
            <p className="text-bio-gray">Patents Filed</p>
          </div>
          <div className="p-6 rounded-lg bg-bio-light-blue/20 border border-bio-light-blue">
            <h4 className="text-2xl font-bold text-bio-navy mb-2">$8.5M+</h4>
            <p className="text-bio-gray">Research Funding</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
