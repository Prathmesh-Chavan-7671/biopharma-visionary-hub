
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const startups = [
  {
    name: "Avay Biosciences",
    role: "Co-founder & Scientific Advisor",
    description: "Pioneering affordable 3D bioprinting technologies to democratize access to tissue engineering capabilities for research labs worldwide.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Oncosimis Biotech",
    role: "Scientific Advisory Board",
    description: "Developing targeted nanomedicine platforms for precision cancer treatments with reduced side effects and improved patient outcomes.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "NanoThera Systems",
    role: "Technical Consultant",
    description: "Creating next-generation drug delivery systems that enhance the therapeutic index of existing pharmaceuticals through nano-engineering.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const StartupSection = () => {
  return (
    <section className="py-16 bg-white" id="startups">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Startups & Advisory Roles</h2>
          <p className="text-lg text-bio-gray max-w-3xl mx-auto">
            Translating scientific breakthroughs into commercial ventures and guiding biotech startups toward success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img 
                src={startup.image} 
                alt={startup.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-bio-navy mb-1">{startup.name}</h3>
                <p className="text-bio-teal font-medium mb-4">{startup.role}</p>
                <p className="text-bio-gray mb-4">{startup.description}</p>
                <Button variant="link" className="text-bio-blue p-0 hover:text-bio-teal">
                  Read case study <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-bio-gray mb-8">
            Looking to leverage Dr. Jain's expertise for your biotech venture?
          </p>
          <Button className="cta-button px-8 py-3">
            Discuss Advisory Opportunities
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StartupSection;
