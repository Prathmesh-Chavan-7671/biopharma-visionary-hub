
import React from 'react';
import { ArrowRight, CheckCircle, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const consultingServices = [
  "Biopharmaceutical Product Development & Process Optimization",
  "Scale-Up & Manufacturing Strategies",
  "mRNA & Cell Line Development",
  "Regulatory & Market Strategies",
  "Technical Problem-Solving",
  "Strategic Partnership Facilitation",
  "Technology Assessment & Due Diligence"
];

const industryPartners = [
  "Cipla", "Abbott", "Reliance", "Serum Institute", "Zydus", "Sun Pharma", "BDR Pharmaceuticals"
];

const testimonials = [
  {
    quote: "Dr. Jain's insights transformed our drug delivery platform, leading to a breakthrough that saved us 18 months of R&D time.",
    author: "Dr. Sarah Chen",
    role: "CTO, PharmaTech Innovations"
  },
  {
    quote: "Working with Dr. Jain gave us the scientific credibility and technical expertise we needed to secure our Series B funding round.",
    author: "Michael Rodriguez",
    role: "CEO, BioVenture Therapeutics"
  }
];

const ConsultingSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-bio-light-blue via-white to-bio-light-blue" id="consulting">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Industry-Focused Consulting & Expertise</h2>
          <p className="text-lg text-bio-gray max-w-3xl mx-auto">
            Strategic scientific consulting to help companies overcome technical challenges and accelerate innovation in biopharmaceuticals.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="section-subheading">How Dr. Jain Helps the Industry</h3>
            <ul className="space-y-3 mb-8">
              {consultingServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-bio-gray">{service}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-bio-navy mb-4">Ready to Elevate Your Biotech Innovation?</h3>
              <p className="text-bio-gray mb-4">
                Schedule a consultation to discuss how Dr. Jain's expertise can address your specific challenges and accelerate your R&D efforts.
              </p>
              <Button className="cta-button">
                Unlock Industry Solutions – Contact Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="section-subheading">Featured Industry Collaborations</h3>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {industryPartners.map((company, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <Building className="h-5 w-5 text-bio-teal" />
                    <span className="font-medium text-bio-navy">{company}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="section-subheading mt-8">Client Testimonials</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                  <div className="flex items-center space-x-1 text-yellow-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <blockquote className="italic text-bio-gray mb-4">"{testimonial.quote}"</blockquote>
                  <div>
                    <p className="font-semibold text-bio-navy">{testimonial.author}</p>
                    <p className="text-bio-teal text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;
