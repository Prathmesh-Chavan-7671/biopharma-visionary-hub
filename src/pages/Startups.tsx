import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Rocket, Lightbulb, Microscope, Users, CheckCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Startups = () => {
  const startupServices = [
    {
      title: "Scientific Advisory",
      description: "Expert guidance on scientific and technical challenges for biotech and pharmaceutical startups.",
      icon: Microscope
    },
    {
      title: "Technology Development",
      description: "Collaborative development of novel drug delivery systems and bioprocess technologies.",
      icon: Lightbulb
    },
    {
      title: "Mentorship",
      description: "Strategic mentorship for biotech founders and executive teams to navigate growth challenges.",
      icon: Users
    },
    {
      title: "Investment Preparation",
      description: "Assistance with technical documentation and scientific due diligence for fundraising activities.",
      icon: Calendar
    }
  ];

  const successStories = [
    {
      name: "NanoTherapeutics",
      focus: "Cancer nanomedicine platform",
      description: "Dr. Jain served as a founding scientific advisor, helping to develop their proprietary nanoparticle drug delivery platform that has raised $45M in Series B funding.",
      achievements: [
        "Guided formulation optimization reducing manufacturing costs by 40%",
        "Supported successful IND application for lead compound",
        "Connected team with key industry partners"
      ],
      image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "BioPrintTech",
      focus: "3D bioprinting technology",
      description: "As a technical advisor, Dr. Jain helped this startup refine their bioink formulation and print process, leading to a successful $12M Series A round.",
      achievements: [
        "Developed novel bioink formulation with 85% cell viability",
        "Designed scalable manufacturing protocol",
        "Assisted with patent strategy and IP development"
      ],
      image: "https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-bio-light-blue to-bio-light-teal py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-bio-navy mb-6">Startup Innovation</h1>
              <p className="text-lg text-bio-gray mb-8">
                Supporting biotech startups with scientific expertise, mentorship, and technology development to accelerate innovation and commercial success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="cta-button">
                  Schedule a Startup Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="secondary-button">
                  View Success Stories
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading">Startup Support Services</h2>
              <p className="text-lg text-bio-gray max-w-3xl mx-auto">
                Specialized services designed to help biotech startups overcome scientific challenges and accelerate product development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {startupServices.map((service, index) => (
                <div key={index} className="card animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue p-3 mr-4 flex-shrink-0">
                      <service.icon className="h-6 w-6 text-bio-blue" />
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
          </div>
        </section>
        
        {/* Success Stories */}
        <section className="py-16 bg-bio-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading">Startup Success Stories</h2>
              <p className="text-lg text-bio-gray max-w-3xl mx-auto">
                How Dr. Jain's expertise has helped biotech startups overcome challenges and achieve significant milestones.
              </p>
            </div>
            
            <div className="space-y-12">
              {successStories.map((story, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-semibold text-bio-navy mb-1">{story.name}</h3>
                      <p className="text-bio-teal font-medium mb-4">Focus: {story.focus}</p>
                      <p className="text-bio-gray mb-6">{story.description}</p>
                      
                      <h4 className="font-semibold text-bio-navy mb-3">Key Achievements:</h4>
                      <ul className="space-y-2 mb-6">
                        {story.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-bio-gray">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="secondary-button">
                        Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Engagement Model */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading">Startup Engagement Model</h2>
              <p className="text-lg text-bio-gray max-w-3xl mx-auto">
                How Dr. Jain works with biotech startups at various stages of development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-bio-light-blue/10 rounded-lg p-6 border border-bio-light-blue/20">
                <div className="rounded-full bg-bio-blue/20 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-bio-blue">1</span>
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-3 text-center">Early Stage Startups</h3>
                <p className="text-bio-gray mb-4">
                  Guidance on technology validation, intellectual property strategy, and initial product development roadmap.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Technical feasibility assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">IP strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Scientific advisory board participation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-bio-teal/10 rounded-lg p-6 border border-bio-teal/20">
                <div className="rounded-full bg-bio-teal/20 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-bio-teal">2</span>
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-3 text-center">Growth Stage Startups</h3>
                <p className="text-bio-gray mb-4">
                  Support for product optimization, scale-up manufacturing, and preparation for regulatory submissions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Process optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Manufacturing scale-up</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Regulatory strategy</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-bio-light-blue/10 rounded-lg p-6 border border-bio-light-blue/20">
                <div className="rounded-full bg-bio-blue/20 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-bio-blue">3</span>
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-3 text-center">Late Stage Startups</h3>
                <p className="text-bio-gray mb-4">
                  Strategic guidance on technology transfer, partnership development, and preparation for acquisition or IPO.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Commercial readiness assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Strategic partnership development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-bio-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">Due diligence preparation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-bio-teal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Biotech Startup?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss how Dr. Jain's expertise can help your startup overcome technical challenges and accelerate growth.
            </p>
            <Button className="bg-white text-bio-teal hover:bg-bio-light-blue hover:text-bio-navy transition-colors shadow-md hover:shadow-lg font-medium px-8 py-3">
              Schedule a Startup Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Startups;
