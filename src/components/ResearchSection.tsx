
import React from 'react';
import { ArrowRight, Beaker, Microscope, Dna, BookOpen, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const researchAreas = [
  {
    title: "Biopharmaceutical R&D",
    description: "Developing targeted nanocarriers to improve therapeutic efficacy while minimizing side effects for cancer and chronic disease treatments.",
    icon: Beaker
  },
  {
    title: "Nanomedicine & Drug Delivery",
    description: "Pioneering methods for creating advanced drug delivery systems that can revolutionize treatment efficacy and patient outcomes.",
    icon: Microscope
  },
  {
    title: "3D Bioprinting & Tissue Engineering",
    description: "Engineering living tissue constructs and novel materials with applications in drug testing, personalized medicine, and regenerative therapies.",
    icon: Dna
  }
];

const academicPartners = [
  "IITB", "TIFR", "ACTREC", "Harvard Medical School", "University of Toronto"
];

const ResearchSection = () => {
  return (
    <section className="py-16 bg-white" id="research">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Cutting-Edge Research & Innovations – Industry Relevance</h2>
          <p className="text-lg text-bio-gray max-w-3xl mx-auto">
            Dr. Jain's research bridges the gap between fundamental science and industrial applications, creating technologies with significant commercial potential.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <h3 className="section-subheading">Key Research Areas Benefiting the Industry</h3>
            <div className="space-y-8">
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
            
            <div className="mt-8">
              <Button className="secondary-button">
                View Google Scholar Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-8">
            <div className="bg-bio-light-gray rounded-lg p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-bio-teal mr-2" />
                <h3 className="text-xl font-semibold text-bio-navy">Publications & Patents</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-bio-blue">130+</p>
                  <p className="text-bio-gray">Research Publications</p>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-bio-blue">30+</p>
                  <p className="text-bio-gray">Patents Filed</p>
                </div>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-bio-teal mr-2" />
                <p className="text-bio-gray">Extensive portfolio of publications in high-impact journals</p>
              </div>
            </div>
            
            <div>
              <h3 className="section-subheading">Research Collaborations with Academia</h3>
              <div className="grid grid-cols-3 gap-4">
                {academicPartners.map((partner, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex items-center justify-center">
                    <span className="font-medium text-bio-navy">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-bio-navy mb-4">Explore Research Collaborations</h3>
              <p className="text-bio-gray mb-4">
                Interested in leveraging Dr. Jain's research expertise for your company's innovation pipeline?
              </p>
              <Button className="cta-button">
                Partner for Research & Innovation – Let's Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
