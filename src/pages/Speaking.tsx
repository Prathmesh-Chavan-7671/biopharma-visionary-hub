
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, MapPin, Mic, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const upcomingEvents = [
  {
    title: "Future Medicine Summit 2025",
    date: "May 18-20, 2025",
    location: "Boston, MA",
    topic: "Next-Generation mRNA Delivery Systems",
    description: "Dr. Jain will deliver a keynote address on recent breakthroughs in mRNA delivery technology and their implications for personalized medicine applications.",
    ticketUrl: "#"
  },
  {
    title: "Global Biotech Innovation Conference",
    date: "July 12-14, 2025",
    location: "San Francisco, CA",
    topic: "Bridging Academia and Industry: Lessons from a Decade of Partnerships",
    description: "A featured presentation on successful models for academic-industry collaboration in biotechnology, with case studies from Dr. Jain's experience.",
    ticketUrl: "#"
  },
  {
    title: "International Pharmaceutical Forum",
    date: "October 5-7, 2025",
    location: "Singapore",
    topic: "Sustainable Bioprocessing: Green Technologies for Future Manufacturing",
    description: "Dr. Jain will lead a workshop on environmentally sustainable approaches to biopharmaceutical manufacturing, highlighting recent innovations from his research.",
    ticketUrl: "#"
  }
];

const speakingTopics = [
  {
    title: "Advanced Drug Delivery Systems",
    description: "An overview of cutting-edge approaches to targeted drug delivery, including nanomedicine platforms, stimuli-responsive systems, and biomaterial-based carriers for improving therapeutic efficacy and reducing side effects.",
    audiences: ["Pharmaceutical R&D Teams", "Biotech Executives", "Medical Device Companies"]
  },
  {
    title: "Bridging Academia and Industry",
    description: "Strategies for effective knowledge transfer and collaboration between academic research institutions and commercial enterprises, with emphasis on intellectual property considerations and partnership models.",
    audiences: ["Corporate Innovation Teams", "University Tech Transfer Offices", "Biotech Startups"]
  },
  {
    title: "3D Bioprinting and Tissue Engineering",
    description: "Exploration of how 3D bioprinting technologies are transforming regenerative medicine, drug testing platforms, and personalized therapeutics, with practical insights on implementation challenges and opportunities.",
    audiences: ["Medical Research Organizations", "Pharmaceutical Companies", "Healthcare Investors"]
  },
  {
    title: "Commercializing Academic Research",
    description: "A practical guide to translating laboratory discoveries into commercial products, covering business model development, funding strategies, and regulatory pathways in the biotech sector.",
    audiences: ["Academic Entrepreneurs", "Venture Capitalists", "Industry Executives"]
  }
];

const pastEvents = [
  {
    year: "2024",
    events: [
      {
        title: "BioTech Summit 2024",
        location: "Boston, USA",
        topic: "Nanomedicine: Bridging the Gap Between Academia and Industry"
      },
      {
        title: "Pharmaceutical Innovation Conference",
        location: "San Francisco, USA",
        topic: "The Future of 3D Bioprinting in Drug Development"
      },
      {
        title: "Global Healthcare Innovations Forum",
        location: "London, UK",
        topic: "Next-Generation Drug Delivery Systems: From Concept to Clinic"
      }
    ]
  },
  {
    year: "2023",
    events: [
      {
        title: "Global Drug Delivery Symposium",
        location: "Singapore",
        topic: "Advanced Nanocarriers for Targeted Cancer Therapies"
      },
      {
        title: "BioMed Innovation Forum",
        location: "Boston, USA",
        topic: "Translational Research in Pharmaceutical Sciences"
      }
    ]
  },
  {
    year: "2022",
    events: [
      {
        title: "International Biotech Congress",
        location: "Zurich, Switzerland",
        topic: "Translating Academic Research into Commercial Products"
      },
      {
        title: "MedTech Innovation Forum",
        location: "Tokyo, Japan",
        topic: "3D Bioprinting: Challenges and Opportunities for Industry Adoption"
      },
      {
        title: "Pharmaceutical Sciences Summit",
        location: "Toronto, Canada",
        topic: "Novel Approaches to Drug Formulation and Delivery"
      }
    ]
  }
];

const Speaking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-bio-light-blue to-bio-light-teal py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-bio-navy mb-6">Speaking & Workshops</h1>
              <p className="text-lg text-bio-gray mb-8">
                Dr. Jain shares his expertise through keynote presentations, panel discussions, and interactive workshops at industry conferences, corporate events, and educational seminars.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="cta-button">
                  Invite Dr. Jain to Speak
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="secondary-button">
                  Upcoming Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Upcoming Events */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-4">Upcoming Speaking Engagements</h2>
            <p className="text-lg text-bio-gray max-w-3xl mx-auto text-center mb-12">
              Join Dr. Jain at these upcoming events to learn about the latest advancements in biopharmaceutical innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index} 
                  className="card animate-fade-in" 
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className="text-xl font-semibold text-bio-navy mb-2">{event.title}</h3>
                  <div className="flex items-center text-bio-gray mb-2">
                    <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-bio-gray mb-4">
                    <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-bio-teal font-medium mb-4">Topic: {event.topic}</p>
                  <p className="text-bio-gray mb-6 text-sm">{event.description}</p>
                  <div className="flex space-x-4">
                    <Button variant="link" className="text-bio-blue p-0 hover:text-bio-teal">
                      Event details <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                    <Button className="secondary-button text-sm">
                      Register
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Speaking Topics */}
        <section className="py-16 bg-bio-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading">Speaking Topics</h2>
              <p className="text-lg text-bio-gray max-w-3xl mx-auto">
                Dr. Jain offers presentations on a range of topics at the intersection of biopharmaceutical science, innovation, and commercialization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {speakingTopics.map((topic, index) => (
                <div key={index} className="card animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <h3 className="text-xl font-semibold text-bio-navy mb-4">{topic.title}</h3>
                  <p className="text-bio-gray mb-6">{topic.description}</p>
                  <div>
                    <h4 className="font-semibold text-bio-teal mb-2">Ideal for:</h4>
                    <ul className="space-y-1">
                      {topic.audiences.map((audience, i) => (
                        <li key={i} className="flex items-start">
                          <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                            <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                          </div>
                          <span className="text-bio-gray">{audience}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button className="cta-button">
                Request a Custom Topic
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Past Events */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-center mb-12">Past Speaking Engagements</h2>
            
            <Accordion type="single" collapsible className="w-full space-y-6">
              {pastEvents.map((yearGroup, index) => (
                <AccordionItem key={index} value={yearGroup.year} className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 bg-bio-light-gray hover:bg-bio-light-blue/30 transition-colors">
                    <span className="text-xl font-semibold text-bio-navy">{yearGroup.year}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4">
                    <div className="space-y-4">
                      {yearGroup.events.map((event, i) => (
                        <div key={i} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-bio-navy">{event.title}</h4>
                              <p className="text-bio-gray text-sm mb-1">{event.topic}</p>
                              <div className="flex items-center text-bio-teal text-sm">
                                <MapPin className="h-3 w-3 mr-1" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        
        {/* Booking Information */}
        <section className="py-16 bg-bio-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="section-heading">Booking Information</h2>
              <p className="text-lg text-bio-gray max-w-3xl mx-auto">
                Dr. Jain is available for keynote presentations, panel discussions, workshops, and corporate training sessions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card">
                <div className="rounded-full bg-bio-light-teal p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Mic className="h-6 w-6 text-bio-teal" />
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-2">Speaking Formats</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                    </div>
                    <span className="text-bio-gray">Keynote Presentations (30-60 minutes)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                    </div>
                    <span className="text-bio-gray">Panel Discussions & Fireside Chats</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                    </div>
                    <span className="text-bio-gray">Interactive Workshops (2-4 hours)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                    </div>
                    <span className="text-bio-gray">Corporate Training Sessions</span>
                  </li>
                </ul>
              </div>
              
              <div className="card">
                <div className="rounded-full bg-bio-light-teal p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-bio-teal" />
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-2">Event Types</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                    </div>
                    <span className="text-bio-gray">Industry Conferences & Symposia</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                    </div>
                    <span className="text-bio-gray">Corporate Innovation Events</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                    </div>
                    <span className="text-bio-gray">Investor & Fundraising Forums</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue p-1 mr-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-bio-blue"></div>
                    </div>
                    <span className="text-bio-gray">University & Educational Seminars</span>
                  </li>
                </ul>
              </div>
              
              <div className="card">
                <div className="rounded-full bg-bio-light-teal p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-bio-teal" />
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-2">Booking Process</h3>
                <ol className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue flex-shrink-0 w-6 h-6 flex items-center justify-center mr-2">
                      <span className="text-bio-blue font-semibold">1</span>
                    </div>
                    <span className="text-bio-gray">Submit inquiry with event details</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue flex-shrink-0 w-6 h-6 flex items-center justify-center mr-2">
                      <span className="text-bio-blue font-semibold">2</span>
                    </div>
                    <span className="text-bio-gray">Initial consultation to discuss requirements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue flex-shrink-0 w-6 h-6 flex items-center justify-center mr-2">
                      <span className="text-bio-blue font-semibold">3</span>
                    </div>
                    <span className="text-bio-gray">Proposal and scheduling confirmation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-bio-light-blue flex-shrink-0 w-6 h-6 flex items-center justify-center mr-2">
                      <span className="text-bio-blue font-semibold">4</span>
                    </div>
                    <span className="text-bio-gray">Pre-event planning and presentation customization</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-bio-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Having Dr. Jain Speak at Your Event?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether you're organizing an industry conference, corporate workshop, or educational seminar, Dr. Jain's insights can add significant value to your audience.
            </p>
            <Button className="bg-white text-bio-navy hover:bg-bio-light-blue transition-colors shadow-md hover:shadow-lg font-medium px-8 py-3">
              Submit a Speaking Inquiry
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Speaking;
