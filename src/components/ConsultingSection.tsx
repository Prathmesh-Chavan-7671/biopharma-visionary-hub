
import React from 'react';
import { ArrowRight, CheckCircle, Building, Sparkles, Zap, Brain, Shield, Share2, SearchCode, FileBarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const consultingServices = [
  {
    title: "Biopharmaceutical Product Development",
    description: "Process optimization for increased yield and reduced costs",
    icon: Zap
  },
  {
    title: "Scale-Up & Manufacturing",
    description: "Transitioning from lab to commercial-scale production",
    icon: FileBarChart
  },
  {
    title: "mRNA & Cell Line Development",
    description: "Cutting-edge techniques for novel therapeutics",
    icon: Brain
  },
  {
    title: "Regulatory & Market Strategies",
    description: "Navigate complex approval pathways efficiently",
    icon: Shield
  },
  {
    title: "Technical Problem-Solving",
    description: "Overcome formulation and stability challenges",
    icon: SearchCode
  },
  {
    title: "Strategic Partnership Facilitation",
    description: "Connect with the right research collaborators",
    icon: Share2
  }
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
    <section className="py-16 bg-gradient-to-br from-black to-bio-navy/90 relative" id="consulting">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj4KICA8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIC8+CiAgPHBhdGggZD0iTSAwLDAgTCA0MCwwIEwgNDAsNDAgTCAwLDQwIFoiIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSJub25lIiAvPgogIDxwYXRoIGQ9Ik0gMTAsMCBMIDEwLDQwIiBzdHJva2U9InJnYmEoMTQsIDE2NSwgMjMzLCAwLjEpIiBzdHJva2Utd2lkdGg9IjAuMiIgLz4KICA8cGF0aCBkPSJNIDIwLDAgTCAyMCw0MCIgc3Ryb2tlPSJyZ2JhKDE0LCAxNjUsIDIzMywgMC4xKSIgc3Ryb2tlLXdpZHRoPSIwLjIiIC8+CiAgPHBhdGggZD0iTSAzMCwwIEwgMzAsNDAiIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC4yIiAvPgogIDxwYXRoIGQ9Ik0gMCwxMCBMIDQwLDEwIiBzdHJva2U9InJnYmEoMTQsIDE2NSwgMjMzLCAwLjEpIiBzdHJva2Utd2lkdGg9IjAuMiIgLz4KICA8cGF0aCBkPSJNIDAsMjAgTCA0MCwyMCIgc3Ryb2tlPSJyZ2JhKDE0LCAxNjUsIDIzMywgMC4xKSIgc3Ryb2tlLXdpZHRoPSIwLjIiIC8+CiAgPHBhdGggZD0iTSAwLDMwIEwgNDAsMzAiIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC4yIiAvPgo8L3N2Zz4=')]"></div>
        
        {/* Hexagonal overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI0My4zIiB2aWV3Qm94PSIwIDAgNTAgNDMuMyI+CiAgPHBvbHlnb24gcG9pbnRzPSIyNSwwIDUwLDEzLjkgNTAsMzAuNCAxMi41LDQzLjMgMCwzMC40IDAsNi45IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMTMsIDE0OCwgMTM2LCAwLjEpIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3N2Zz4=')]"></div>
      </div>
      
      <div className="content-container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 neo-glassmorphism rounded-full mb-6 border border-bio-blue/30">
            <span className="text-bio-light-blue text-sm font-medium flex items-center">
              <Sparkles className="h-4 w-4 mr-2" />
              <span>Industry Solutions</span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Expert <span className="text-gradient-neon">Scientific Consulting</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Strategic scientific consulting to help companies overcome technical challenges and accelerate innovation in biopharmaceuticals.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-white mb-6">Specialized Industry Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {consultingServices.map((service, index) => (
                <div key={index} className="neo-glassmorphism border border-bio-blue/20 p-5 rounded-lg hover:border-bio-blue/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                  <div className="rounded-full bg-bio-blue/10 border border-bio-blue/30 p-2 w-10 h-10 flex items-center justify-center mb-4">
                    <service.icon className="text-bio-light-blue h-5 w-5" />
                  </div>
                  <h4 className="text-bio-light-blue font-medium mb-2">{service.title}</h4>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
            
            <div className="neo-glassmorphism border border-bio-blue/20 p-6 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bio-blue/10 to-bio-teal/5"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bio-blue to-bio-teal"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4">Accelerate Your Innovation Pipeline</h3>
                <p className="text-gray-300 mb-4">
                  Schedule a consultation to discuss how Dr. Jain's expertise can address your specific challenges and accelerate your R&D efforts.
                </p>
                <Button className="neo-button primary rounded-md group relative overflow-hidden w-full sm:w-auto">
                  <span className="relative z-10 flex items-center">
                    Unlock Industry Solutions – Contact Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-bio-teal via-bio-blue to-bio-light-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </Button>
              </div>
              
              {/* Futuristic corner accents */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-3 h-12 border-r border-bio-light-blue/30"></div>
                <div className="absolute top-0 right-0 w-12 h-3 border-t border-bio-light-blue/30"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-3 h-12 border-l border-bio-light-blue/30"></div>
                <div className="absolute bottom-0 left-0 w-12 h-3 border-b border-bio-light-blue/30"></div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-white mb-6">Industry Impact</h3>
            <div className="neo-glassmorphism border border-bio-blue/20 p-6 rounded-lg mb-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-bio-blue/10 to-bio-teal/5"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-bio-blue to-bio-teal"></div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-white mb-4">Featured Industry Collaborations</h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-4">
                  {industryPartners.map((company, index) => (
                    <div key={index} className="bg-black/30 rounded-lg p-3 border border-bio-blue/10 hover:border-bio-blue/30 transition-all flex items-center justify-center">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-bio-teal" />
                        <span className="font-medium text-bio-light-blue text-sm">{company}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Futuristic corner accents */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-3 h-12 border-r border-bio-light-blue/30"></div>
                <div className="absolute top-0 right-0 w-12 h-3 border-t border-bio-light-blue/30"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-3 h-12 border-l border-bio-light-blue/30"></div>
                <div className="absolute bottom-0 left-0 w-12 h-3 border-b border-bio-light-blue/30"></div>
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-6">Client Testimonials</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="neo-glassmorphism border border-bio-blue/20 p-6 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-bio-blue/10 to-bio-teal/5"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-1 text-bio-light-blue mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <blockquote className="italic text-gray-300 mb-4 relative">
                      <span className="text-bio-blue text-5xl absolute -top-4 -left-2 opacity-20">"</span>
                      <p className="relative z-10">{testimonial.quote}</p>
                      <span className="text-bio-blue text-5xl absolute -bottom-10 -right-2 opacity-20">"</span>
                    </blockquote>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-bio-teal text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Futuristic corner accents */}
                  <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                    <div className="absolute top-0 right-0 w-3 h-12 border-r border-bio-light-blue/30"></div>
                    <div className="absolute top-0 right-0 w-12 h-3 border-t border-bio-light-blue/30"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-3 h-12 border-l border-bio-light-blue/30"></div>
                    <div className="absolute bottom-0 left-0 w-12 h-3 border-b border-bio-light-blue/30"></div>
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
