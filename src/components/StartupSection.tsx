import React from 'react';
import { ArrowRight, Rocket, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const startups = [
  {
    name: "We Translate",
    role: "Co-founder & Scientific Advisor",
    description: "Bridging academic research and industrial applications through innovative technology transfer solutions.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Biosimulate",
    role: "Scientific Advisory Board",
    description: "Developing AI-powered simulation platforms for accelerated drug discovery and development processes.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Mumbai Biocluster",
    role: "Founding Member",
    description: "Creating an ecosystem for biotech innovation and entrepreneurship in the Mumbai metropolitan region.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Amar Biosystems",
    role: "Technical Consultant",
    description: "Pioneering affordable diagnostic solutions for resource-limited settings using innovative biotechnology.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Newgen Biopharma",
    role: "Scientific Advisor",
    description: "Developing next-generation biotherapeutics targeting rare diseases and unmet medical needs.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const benefits = [
  {
    title: "Bridging Research & Commercialization",
    description: "Translating academic innovations into market-ready products and technologies."
  },
  {
    title: "Scaling Biotech Innovations",
    description: "Turning promising concepts into scalable applications with real-world impact."
  },
  {
    title: "Startup Mentorship",
    description: "Guidance on business development, fundraising, and strategic partnerships."
  }
];

const StartupSection = () => {
  return (
    <section className="py-16 bg-white" id="startups">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Entrepreneurial Ventures & Startups</h2>
          <p className="text-lg text-bio-gray max-w-3xl mx-auto">
            Translating scientific breakthroughs into commercial ventures and guiding biotech startups toward success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {startups.slice(0, 3).map((startup, index) => (
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
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2 bg-bio-light-gray rounded-lg p-8">
            <h3 className="section-subheading">More Ventures</h3>
            <div className="space-y-4">
              {startups.slice(3).map((startup, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm flex items-start space-x-4">
                  <Rocket className="h-6 w-6 text-bio-teal flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-bio-navy">{startup.name}</h4>
                    <p className="text-bio-teal text-sm mb-2">{startup.role}</p>
                    <p className="text-bio-gray text-sm">{startup.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 bg-white rounded-lg shadow-md p-8 border border-gray-100">
            <h3 className="section-subheading">Industry Benefits</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  {index === 0 ? (
                    <Lightbulb className="h-6 w-6 text-bio-teal flex-shrink-0 mt-1" />
                  ) : index === 1 ? (
                    <TrendingUp className="h-6 w-6 text-bio-teal flex-shrink-0 mt-1" />
                  ) : (
                    <Rocket className="h-6 w-6 text-bio-teal flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h4 className="font-semibold text-bio-navy mb-1">{benefit.title}</h4>
                    <p className="text-bio-gray">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button className="cta-button px-8 py-3">
                Join a High-Impact Startup Collaboration
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupSection;
