
import React from 'react';
import { ArrowRight, Award, FileText, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mediaHighlights = [
  {
    source: "Nature Biotechnology",
    title: "Breakthrough in 3D Bioprinting Techniques",
    description: "Dr. Jain's lab demonstrates a novel approach to bioprinting that could revolutionize tissue engineering.",
    icon: Globe
  },
  {
    source: "Pharmaceutical Journal",
    title: "The Future of Targeted Drug Delivery",
    description: "Expert interview with Dr. Jain on next-generation nanomedicines and their commercial potential.",
    icon: FileText
  },
  {
    source: "BioTech Innovation Awards",
    title: "Top 10 Academic Innovators",
    description: "Dr. Jain recognized for contributions to translational research in drug delivery systems.",
    icon: Award
  }
];

const fellowships = [
  "Fellow, American Institute for Medical and Biological Engineering",
  "Fellow, Royal Society of Chemistry",
  "Senior Member, IEEE Engineering in Medicine and Biology Society"
];

const MediaSection = () => {
  return (
    <section className="py-16 bg-white" id="media">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Media & Recognition</h2>
          <p className="text-lg text-bio-gray max-w-3xl mx-auto">
            Featured in leading scientific publications and recognized for contributions to biopharmaceutical innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mediaHighlights.map((item, index) => (
            <div key={index} className="card animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="rounded-full bg-bio-light-blue p-3 w-12 h-12 flex items-center justify-center mb-4">
                <item.icon className="text-bio-blue" />
              </div>
              <p className="text-bio-teal font-medium mb-2">{item.source}</p>
              <h3 className="text-lg font-semibold text-bio-navy mb-2">{item.title}</h3>
              <p className="text-bio-gray mb-4">{item.description}</p>
              <Button variant="link" className="text-bio-blue p-0 hover:text-bio-teal">
                Read more <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
        
        <div className="bg-bio-light-gray rounded-lg p-8">
          <h3 className="section-subheading">Fellowships & Professional Recognition</h3>
          <ul className="space-y-3 mb-8">
            {fellowships.map((fellowship, index) => (
              <li key={index} className="flex items-start">
                <Award className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-bio-gray">{fellowship}</span>
              </li>
            ))}
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="secondary-button">
              View All Media Coverage
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="secondary-button">
              Download Press Kit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
