
import React from 'react';
import { ArrowRight, Rocket, Lightbulb, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const startups = [
  {
    name: "We Translate",
    role: "Co-founder & Scientific Advisor",
    description: "Bridging academic research and industrial applications through innovative technology transfer solutions.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    achievements: "Facilitated 12+ successful tech transfers between academia and industry partners, accelerating time-to-market by 40%."
  },
  {
    name: "Biosimulate",
    role: "Scientific Advisory Board",
    description: "Developing AI-powered simulation platforms for accelerated drug discovery and development processes.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    achievements: "Platform reduced discovery-to-clinical timeline by 35% for partner pharmaceutical companies."
  },
  {
    name: "Mumbai Biocluster",
    role: "Founding Member",
    description: "Creating an ecosystem for biotech innovation and entrepreneurship in the Mumbai metropolitan region.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    achievements: "Incubated 25+ biotech startups, with 8 securing Series A funding within 2 years."
  },
  {
    name: "Amar Biosystems",
    role: "Technical Consultant",
    description: "Pioneering affordable diagnostic solutions for resource-limited settings using innovative biotechnology.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    achievements: "Developed point-of-care diagnostic kit reducing test costs by 70% while maintaining 99.2% accuracy."
  },
  {
    name: "Newgen Biopharma",
    role: "Scientific Advisor",
    description: "Developing next-generation biotherapeutics targeting rare diseases and unmet medical needs.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    achievements: "Successfully advanced 3 novel biologics from concept to Phase I clinical trials in under 3 years."
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
    <section className="py-16 bg-gradient-to-br from-black via-[#0E1428] to-[#142036] text-white" id="startups">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue">Entrepreneurial Ventures & Startups</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Translating scientific breakthroughs into commercial ventures and guiding biotech startups toward success.
          </p>
        </div>
        
        <div className="mb-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {startups.map((startup, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border border-white/10 bg-black/40 backdrop-blur-xl hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all duration-300 overflow-hidden group">
                      <div className="relative overflow-hidden h-48">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                        <img 
                          src={startup.image} 
                          alt={startup.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6 relative">
                        <div className="absolute -top-10 right-4 bg-bio-teal/80 backdrop-blur-md rounded-full p-2 shadow-lg text-white">
                          <Rocket className="h-5 w-5" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-1">{startup.name}</h3>
                        <p className="text-bio-teal font-medium mb-4">{startup.role}</p>
                        <p className="text-gray-300 mb-4">{startup.description}</p>
                        
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <Button variant="link" className="text-bio-light-blue p-0 hover:text-bio-teal group">
                              Achievements 
                              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80 bg-black/80 backdrop-blur-xl border border-white/10 text-white">
                            <div className="flex justify-between space-x-4">
                              <div className="space-y-1">
                                <h4 className="text-sm font-semibold">Key Achievements</h4>
                                <p className="text-sm text-gray-300">
                                  {startup.achievements}
                                </p>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative static bg-bio-teal/20 hover:bg-bio-teal/30 border-bio-teal/50" />
              <CarouselNext className="relative static bg-bio-teal/20 hover:bg-bio-teal/30 border-bio-teal/50" />
            </div>
          </Carousel>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-8 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-bio-light-blue to-bio-teal mb-6">More Ventures</h3>
            <div className="space-y-4">
              {startups.slice(3).map((startup, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 shadow-sm flex items-start space-x-4 hover:bg-white/10 transition-colors duration-300">
                  <Rocket className="h-6 w-6 text-bio-teal flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">{startup.name}</h4>
                    <p className="text-bio-teal text-sm mb-2">{startup.role}</p>
                    <p className="text-gray-300 text-sm">{startup.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg p-8 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-bio-light-blue to-bio-teal mb-6">Industry Benefits</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  {index === 0 ? (
                    <Lightbulb className="h-6 w-6 text-bio-teal flex-shrink-0 mt-1 group-hover:text-bio-light-blue transition-colors duration-300" />
                  ) : index === 1 ? (
                    <TrendingUp className="h-6 w-6 text-bio-teal flex-shrink-0 mt-1 group-hover:text-bio-light-blue transition-colors duration-300" />
                  ) : (
                    <Rocket className="h-6 w-6 text-bio-teal flex-shrink-0 mt-1 group-hover:text-bio-light-blue transition-colors duration-300" />
                  )}
                  <div>
                    <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button className="bg-bio-teal hover:bg-bio-blue text-white px-8 py-6 rounded-xl border border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-all duration-300">
                Join a High-Impact Startup Collaboration
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupSection;
