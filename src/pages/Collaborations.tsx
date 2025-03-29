
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Building, Briefcase, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const keyCollaborations = [
  {
    company: "BioPharmaTech Inc.",
    role: "Scientific Advisor",
    duration: "2018 - Present",
    description: "Leading strategic development of novel drug delivery platforms that have resulted in two patented technologies currently in clinical trials.",
    achievements: [
      "Optimized nanoparticle formulation process, reducing manufacturing costs by 35%",
      "Advised on regulatory strategy for FDA breakthrough designation",
      "Directed research team on development of targeted delivery mechanisms"
    ],
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    icon: Briefcase
  },
  {
    company: "MediGene Solutions",
    role: "Research Consultant",
    duration: "2020 - Present",
    description: "Optimized nanomedicine formulations for cancer therapeutics, improving drug targeting efficiency by 67% and reducing production costs substantially.",
    achievements: [
      "Developed IP strategy resulting in 3 patent applications",
      "Created scalable manufacturing protocol for GMP production",
      "Led cross-functional team collaboration between academia and industry"
    ],
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    icon: Building
  },
  {
    company: "CellTech Innovations",
    role: "Industry Collaborator",
    duration: "2019 - 2022",
    description: "Co-developed 3D bioprinting protocols for tissue engineering applications, leading to a joint research grant worth $2.5M and significant advancements in artificial tissue models.",
    achievements: [
      "Pioneered bioink formulation with improved cell viability (85% at 14 days)",
      "Co-authored 5 high-impact publications on bioprinting technology",
      "Successfully transferred technology for commercial scale manufacturing"
    ],
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80",
    icon: Users
  }
];

const testimonialsFromPartners = [
  {
    quote: "Dr. Jain's scientific insights and ability to bridge academic research with industrial applications have been instrumental in accelerating our product development timeline.",
    author: "Dr. James Chen",
    role: "VP of Research, BioPharmaTech Inc."
  },
  {
    quote: "Working with Dr. Jain has transformed our approach to nanomedicine development. His expertise and collaborative spirit make him an invaluable partner in innovation.",
    author: "Sarah Johnson, Ph.D.",
    role: "Chief Scientific Officer, MediGene Solutions"
  }
];

const Collaborations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-bio-light-blue to-bio-light-teal py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-bio-navy mb-6">Industry Collaborations</h1>
              <p className="text-lg text-bio-gray mb-8">
                Dr. Jain partners with pharmaceutical and biotechnology companies to translate cutting-edge research into commercial applications that improve patient outcomes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="cta-button">
                  Explore Partnership Opportunities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="secondary-button">
                  View Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Collaborations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Key Industry Partnerships</h2>
            
            <div className="space-y-12">
              {keyCollaborations.map((collab, index) => (
                <div 
                  key={index} 
                  className="card animate-fade-in" 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex flex-col items-center md:items-start">
                      <div className="w-16 h-16 bg-white rounded-full shadow-md p-1 mb-4 flex items-center justify-center">
                        <img 
                          src={collab.logo} 
                          alt={collab.company} 
                          className="w-14 h-14 rounded-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-bio-navy mb-1 text-center md:text-left">{collab.company}</h3>
                      <p className="text-bio-teal font-medium mb-2 text-center md:text-left">{collab.role}</p>
                      <p className="text-bio-gray text-sm mb-4 text-center md:text-left">{collab.duration}</p>
                      <div className="rounded-full bg-bio-light-blue p-3 w-12 h-12 flex items-center justify-center mb-4 md:mb-0">
                        <collab.icon className="text-bio-blue" />
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <p className="text-bio-gray mb-6">{collab.description}</p>
                      <h4 className="text-lg font-semibold text-bio-navy mb-4">Key Achievements:</h4>
                      <ul className="space-y-3 mb-6">
                        {collab.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-bio-gray">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="link" className="text-bio-blue p-0 hover:text-bio-teal">
                        View detailed case study <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Partner Testimonials */}
        <section className="py-16 bg-bio-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading">Partner Testimonials</h2>
              <p className="text-lg text-bio-gray max-w-3xl mx-auto">
                Hear directly from industry partners about their experience collaborating with Dr. Jain.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonialsFromPartners.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-8 border border-gray-100 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex items-center space-x-1 text-yellow-500 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-lg italic text-bio-gray mb-6">"{testimonial.quote}"</blockquote>
                  <div>
                    <p className="font-semibold text-bio-navy">{testimonial.author}</p>
                    <p className="text-bio-teal">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Collaboration Process */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Collaboration Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="rounded-full bg-bio-light-blue w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-bio-blue">1</span>
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-2">Initial Consultation</h3>
                <p className="text-bio-gray">Discuss your company's challenges and explore potential collaboration opportunities.</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full bg-bio-light-blue w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-bio-blue">2</span>
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-2">Proposal Development</h3>
                <p className="text-bio-gray">Craft a detailed research or consulting plan with clear deliverables and timelines.</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full bg-bio-light-blue w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-bio-blue">3</span>
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-2">Project Execution</h3>
                <p className="text-bio-gray">Implement the research or consulting plan with regular progress updates and strategic guidance.</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full bg-bio-light-blue w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-bio-blue">4</span>
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-2">Technology Transfer</h3>
                <p className="text-bio-gray">Transfer knowledge, methodologies, and technologies to your team with appropriate IP arrangements.</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button className="cta-button">
                Start a Collaboration Discussion
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Available Collaboration Types */}
        <section className="py-16 bg-bio-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Collaboration Opportunities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <h3 className="text-xl font-semibold text-bio-navy mb-4">Sponsored Research</h3>
                <p className="text-bio-gray mb-6">
                  Fund targeted research projects in Dr. Jain's laboratory to develop solutions for your specific challenges in drug delivery, nanomedicine, or bioprinting.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Access to state-of-the-art research facilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Dedicated research team focused on your needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Customized IP arrangements available</span>
                  </li>
                </ul>
                <Button className="secondary-button w-full">
                  Explore Sponsored Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-bio-navy mb-4">Technology Licensing</h3>
                <p className="text-bio-gray mb-6">
                  License innovative technologies developed in Dr. Jain's lab to enhance your product pipeline with reduced R&D time and costs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Access to patented technologies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Technical support during implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Flexible licensing arrangements</span>
                  </li>
                </ul>
                <Button className="secondary-button w-full">
                  Available Technologies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-bio-navy mb-4">Consulting Services</h3>
                <p className="text-bio-gray mb-6">
                  Leverage Dr. Jain's expertise to solve specific technical challenges, evaluate technologies, or develop strategic R&D roadmaps.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Expert advice on specific technical challenges</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Scientific due diligence for investments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Strategic R&D planning assistance</span>
                  </li>
                </ul>
                <Button className="secondary-button w-full">
                  Consulting Options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-bio-teal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Innovate Together?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Start a conversation about how Dr. Jain's expertise can help your company achieve its innovation goals.
            </p>
            <Button className="bg-white text-bio-teal hover:bg-bio-light-blue hover:text-bio-navy transition-colors shadow-md hover:shadow-lg font-medium px-8 py-3">
              Schedule an Initial Discussion
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collaborations;
