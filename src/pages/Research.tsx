
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, FileText, Microscope, Dna, Beaker, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const researchAreas = [
  {
    title: "Advanced Drug Delivery Systems",
    description: "Developing targeted nanocarriers to improve therapeutic efficacy while minimizing side effects for cancer and chronic disease treatments.",
    icon: Beaker,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "3D Bioprinting Technologies",
    description: "Pioneering methods for creating living tissue constructs that can revolutionize drug testing, personalized medicine, and regenerative therapies.",
    icon: Microscope,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Nanomedicine Innovations",
    description: "Engineering nanoscale drug delivery platforms with enhanced stability, targeting, and controlled release properties for improved patient outcomes.",
    icon: Dna,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Biomaterials Research",
    description: "Creating novel biomaterials with controlled degradation profiles and bioactive properties for tissue engineering and therapeutic applications.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  }
];

const publications = [
  {
    title: "Enhanced Delivery of Anticancer Agents Using Dual-Targeting Nanocarriers",
    journal: "Nature Nanotechnology",
    year: "2023",
    authors: "Jain R., Smith A., Wong B., et al.",
    impact: "Developed a novel nanocarrier system that showed 2.5x greater tumor accumulation in preclinical models."
  },
  {
    title: "A Bioprinting Method for Creating Complex Tissue Architectures with Integrated Vascular Networks",
    journal: "Advanced Materials",
    year: "2022",
    authors: "Chen H., Jain R., Patel K., et al.",
    impact: "Introduced a breakthrough technique enabling the creation of vascularized tissue constructs with 85% cell viability after 14 days."
  },
  {
    title: "Stimuli-Responsive Nanomedicine Platforms for Targeted Drug Release in Cancer Therapy",
    journal: "Journal of Controlled Release",
    year: "2021",
    authors: "Jain R., Johnson M., Garcia L., et al.",
    impact: "Designed pH-responsive nanoparticles that reduced off-target toxicity by 60% compared to standard chemotherapy in animal models."
  }
];

const Research = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-bio-light-blue to-bio-light-teal py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-bio-navy mb-6">Research & Innovation</h1>
              <p className="text-lg text-bio-gray mb-8">
                Dr. Jain's research laboratory focuses on developing innovative solutions at the intersection of pharmaceutical sciences, materials engineering, and biotechnology to address critical challenges in healthcare.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="cta-button">
                  View Publications
                  <BookOpen className="ml-2 h-4 w-4" />
                </Button>
                <Button className="secondary-button">
                  Research Opportunities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Research Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Research Focus Areas</h2>
            
            <div className="space-y-16">
              {researchAreas.map((area, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center animate-fade-in`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="lg:w-1/2">
                    <img 
                      src={area.image} 
                      alt={area.title} 
                      className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <div className="flex items-center mb-4">
                      <div className="rounded-full bg-bio-light-teal p-3 mr-4">
                        <area.icon className="h-6 w-6 text-bio-teal" />
                      </div>
                      <h3 className="text-2xl font-semibold text-bio-navy">{area.title}</h3>
                    </div>
                    <p className="text-bio-gray mb-6">{area.description}</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                          <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                        </div>
                        <span className="text-bio-gray">Innovative methodologies for enhancing therapeutic efficacy</span>
                      </li>
                      <li className="flex items-start">
                        <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                          <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                        </div>
                        <span className="text-bio-gray">Industry applications and commercialization pathways</span>
                      </li>
                      <li className="flex items-start">
                        <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                          <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                        </div>
                        <span className="text-bio-gray">Collaborative opportunities for technology transfer</span>
                      </li>
                    </ul>
                    <Button variant="link" className="text-bio-blue p-0 hover:text-bio-teal">
                      Learn more about this research <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Key Publications */}
        <section className="py-16 bg-bio-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading">Key Publications</h2>
              <p className="text-lg text-bio-gray max-w-3xl mx-auto">
                Selected high-impact research papers that demonstrate Dr. Jain's contributions to biopharmaceutical science.
              </p>
            </div>
            
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="card animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex items-start">
                    <FileText className="h-6 w-6 text-bio-teal mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-bio-navy mb-2">{pub.title}</h3>
                      <p className="text-bio-teal font-medium mb-1">{pub.journal}, {pub.year}</p>
                      <p className="text-bio-gray text-sm mb-4">{pub.authors}</p>
                      <div className="bg-bio-light-blue/20 border border-bio-light-blue rounded-md p-4 mb-4">
                        <p className="text-bio-gray"><span className="font-semibold text-bio-navy">Impact: </span>{pub.impact}</p>
                      </div>
                      <Button variant="link" className="text-bio-blue p-0 hover:text-bio-teal">
                        View publication <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="cta-button">
                View Complete Publication List
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Research Funding & Partnerships */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Research Funding & Partnerships</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="card">
                <h3 className="text-xl font-semibold text-bio-navy mb-4">Grant Funding</h3>
                <ul className="space-y-4">
                  <li className="border-l-4 border-bio-blue pl-4">
                    <p className="font-semibold text-bio-navy">National Institutes of Health</p>
                    <p className="text-bio-gray">$2.4M for nanomedicine research in cancer therapy</p>
                  </li>
                  <li className="border-l-4 border-bio-teal pl-4">
                    <p className="font-semibold text-bio-navy">National Science Foundation</p>
                    <p className="text-bio-gray">$1.8M for biomaterials innovation research</p>
                  </li>
                  <li className="border-l-4 border-bio-blue pl-4">
                    <p className="font-semibold text-bio-navy">Department of Defense</p>
                    <p className="text-bio-gray">$3.2M for regenerative medicine applications</p>
                  </li>
                  <li className="border-l-4 border-bio-teal pl-4">
                    <p className="font-semibold text-bio-navy">Private Foundation Grants</p>
                    <p className="text-bio-gray">$1.1M for various research initiatives</p>
                  </li>
                </ul>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-semibold text-bio-navy mb-4">Industry Research Partnerships</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-bio-navy">PharmaTech Solutions</p>
                      <p className="text-bio-gray">Co-development of targeted delivery platforms</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-bio-navy">MediGene Therapeutics</p>
                      <p className="text-bio-gray">Technology licensing for nanomedicine applications</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-bio-navy">BioInnovate Consortium</p>
                      <p className="text-bio-gray">Multi-institution collaboration on bioprinting</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-bio-navy">Global Pharmaceutical Partners</p>
                      <p className="text-bio-gray">Contract research on drug delivery optimization</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="secondary-button">
                    Partnership Opportunities
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-bio-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Collaborating?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Dr. Jain's lab is always open to new research collaborations with industry partners and academic institutions.
            </p>
            <Button className="bg-white text-bio-navy hover:bg-bio-light-blue transition-colors shadow-md hover:shadow-lg font-medium px-8 py-3">
              Discuss Research Collaboration
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
