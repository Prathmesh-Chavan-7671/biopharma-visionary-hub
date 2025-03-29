
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, FileText, Users, BriefcaseMedical, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

const consultingServices = [
  {
    title: "R&D Strategy Development",
    description: "Strategic roadmapping for biopharmaceutical product development, from concept to commercialization.",
    icon: Microscope
  },
  {
    title: "Technology Assessment",
    description: "Evaluation of emerging technologies and platforms for potential application in your product pipeline.",
    icon: FileText
  },
  {
    title: "Formulation Optimization",
    description: "Expert guidance on improving drug delivery systems for enhanced efficacy and stability.",
    icon: BriefcaseMedical
  },
  {
    title: "Scientific Due Diligence",
    description: "Comprehensive analysis of technologies, research programs, or companies for investment or acquisition purposes.",
    icon: Users
  }
];

const caseStudies = [
  {
    title: "Nanomedicine Formulation Optimization",
    client: "Leading Pharmaceutical Company",
    challenge: "The client was developing a nanoparticle-based cancer therapeutic that showed promise in early studies but faced issues with stability and manufacturing scale-up.",
    approach: "Dr. Jain conducted a comprehensive assessment of the nanoparticle formulation process and implemented a modified synthesis approach using microfluidics technology.",
    outcome: "The optimized formulation demonstrated 68% improved stability and reduced manufacturing costs by 35%. The product is now in Phase II clinical trials.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "3D Bioprinting Implementation Strategy",
    client: "Biotech Startup",
    challenge: "A venture-backed startup needed to develop a strategic roadmap for implementing 3D bioprinting technology for tissue model development.",
    approach: "Dr. Jain provided comprehensive technology assessment, vendor evaluation, and development of a phased implementation plan with specific milestones.",
    outcome: "The company successfully established its bioprinting platform in 8 months (versus initial 18-month timeline) and secured an additional $4.5M in funding based on early results.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const Consulting = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-bio-light-blue to-bio-light-teal py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-bio-navy mb-6">Consulting & Industry Services</h1>
              <p className="text-lg text-bio-gray mb-8">
                Strategic scientific consulting to help biopharmaceutical companies overcome technical challenges, accelerate innovation, and make informed decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="cta-button">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="secondary-button">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">Consulting Services</h2>
            <p className="text-lg text-bio-gray max-w-3xl mx-auto text-center mb-12">
              Specialized services designed to address the unique challenges in biopharmaceutical research, development, and commercialization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {consultingServices.map((service, index) => (
                <div key={index} className="card animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex items-start">
                    <div className="rounded-full bg-bio-light-teal p-3 mr-4 flex-shrink-0">
                      <service.icon className="h-6 w-6 text-bio-teal" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-bio-navy mb-2">{service.title}</h3>
                      <p className="text-bio-gray mb-4">{service.description}</p>
                      <Button variant="link" className="text-bio-blue p-0 hover:text-bio-teal">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-bio-light-gray rounded-lg">
              <h3 className="text-xl font-semibold text-bio-navy mb-4">Custom Consulting Solutions</h3>
              <p className="text-bio-gray mb-6">
                Beyond the standard services listed above, Dr. Jain offers tailored consulting solutions to address your specific challenges and opportunities in biopharmaceutical innovation.
              </p>
              <Button className="cta-button">
                Discuss Your Specific Needs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="py-16 bg-bio-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading">Case Studies</h2>
              <p className="text-lg text-bio-gray max-w-3xl mx-auto">
                Examples of how Dr. Jain's consulting has delivered measurable value to biopharmaceutical companies.
              </p>
            </div>
            
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-semibold text-bio-navy mb-2">{study.title}</h3>
                      <p className="text-bio-teal font-medium mb-4">Client: {study.client}</p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-bio-navy">Challenge:</h4>
                          <p className="text-bio-gray">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-bio-navy">Approach:</h4>
                          <p className="text-bio-gray">{study.approach}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-bio-navy">Outcome:</h4>
                          <p className="text-bio-gray">{study.outcome}</p>
                        </div>
                      </div>
                      
                      <Button className="secondary-button">
                        Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button className="cta-button">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Consulting Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Consulting Process</h2>
            
            <div className="relative">
              {/* Process timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-bio-light-blue"></div>
              
              <div className="space-y-12 relative">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold text-bio-navy mb-2">Initial Consultation</h3>
                    <p className="text-bio-gray">
                      A complimentary discussion to understand your challenges, goals, and potential areas where Dr. Jain's expertise can add value.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 flex-shrink-0 rounded-full bg-bio-blue w-12 h-12 flex items-center justify-center z-10">
                    <span className="text-xl font-bold text-white">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 md:text-left"></div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                  <div className="mt-4 md:mt-0 flex-shrink-0 rounded-full bg-bio-blue w-12 h-12 flex items-center justify-center z-10">
                    <span className="text-xl font-bold text-white">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 md:text-left">
                    <h3 className="text-xl font-semibold text-bio-navy mb-2">Proposal & Scope Definition</h3>
                    <p className="text-bio-gray">
                      Development of a tailored proposal outlining project scope, deliverables, timeline, and investment required.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <h3 className="text-xl font-semibold text-bio-navy mb-2">Project Execution</h3>
                    <p className="text-bio-gray">
                      Systematic implementation of the consulting plan with regular progress updates and strategic adjustments as needed.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 flex-shrink-0 rounded-full bg-bio-blue w-12 h-12 flex items-center justify-center z-10">
                    <span className="text-xl font-bold text-white">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 md:text-left"></div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                  <div className="mt-4 md:mt-0 flex-shrink-0 rounded-full bg-bio-blue w-12 h-12 flex items-center justify-center z-10">
                    <span className="text-xl font-bold text-white">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0 md:text-left">
                    <h3 className="text-xl font-semibold text-bio-navy mb-2">Knowledge Transfer & Implementation</h3>
                    <p className="text-bio-gray">
                      Comprehensive handover of findings, recommendations, and implementation guidance to ensure sustainable value creation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <Button className="cta-button">
                Begin the Consultation Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-bio-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading">Client Testimonials</h2>
              <p className="text-lg text-bio-gray max-w-3xl mx-auto">
                Hear from executives and scientific leaders who have benefited from Dr. Jain's consulting services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                <div className="flex items-center space-x-1 text-yellow-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg italic text-bio-gray mb-6">
                  "Dr. Jain's insights transformed our drug delivery platform, leading to a breakthrough that saved us 18 months of R&D time. His ability to bridge academic knowledge with practical industry applications is exceptional."
                </blockquote>
                <div>
                  <p className="font-semibold text-bio-navy">Dr. Sarah Chen</p>
                  <p className="text-bio-teal">CTO, PharmaTech Innovations</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
                <div className="flex items-center space-x-1 text-yellow-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg italic text-bio-gray mb-6">
                  "Working with Dr. Jain gave us the scientific credibility and technical expertise we needed to secure our Series B funding round. His guidance on our technology roadmap was invaluable to our success."
                </blockquote>
                <div>
                  <p className="font-semibold text-bio-navy">Michael Rodriguez</p>
                  <p className="text-bio-teal">CEO, BioVenture Therapeutics</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-bio-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Innovation?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss how Dr. Jain's expertise can address your specific challenges and advance your biopharmaceutical initiatives.
            </p>
            <Button className="bg-white text-bio-blue hover:bg-bio-light-blue hover:text-bio-navy transition-colors shadow-md hover:shadow-lg font-medium px-8 py-3">
              Request a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consulting;
