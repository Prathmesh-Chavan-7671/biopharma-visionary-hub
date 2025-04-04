
import React from 'react';
import { ArrowRight, Mic, Video, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SpeakingHighlights = () => {
  const featuredTalk = {
    title: "The Future of mRNA Therapeutics: Challenges & Opportunities",
    event: "BioAsia 2024",
    description: "Keynote addressing next-generation mRNA platform technologies and their application in personalized medicine beyond vaccines.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=80"
  };
  
  const speakingTopics = [
    {
      title: "Bioprocess Innovation",
      icon: Mic,
      color: "from-bio-light-blue to-bio-blue"
    },
    {
      title: "Drug Delivery Systems",
      icon: Video,
      color: "from-bio-teal to-bio-light-blue"
    },
    {
      title: "mRNA Technologies",
      icon: Award,
      color: "from-bio-blue to-bio-teal"
    },
    {
      title: "Academia-Industry Bridge",
      icon: Calendar,
      color: "from-bio-light-blue to-bio-teal"
    }
  ];
  
  return (
    <section className="py-24 bg-gradient-to-b from-black to-bio-navy/90 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTQsIDE2NSwgMjMzLCAwLjIpIiAvPgo8L3N2Zz4=')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-bio-blue/10 border border-bio-blue/20 rounded-full mb-4">
            <span className="text-bio-light-blue text-sm font-medium">Speaking & Thought Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Industry <span className="text-gradient bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue bg-clip-text text-transparent">Authority</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dr. Jain shares insights from the cutting edge of biotechnology through keynotes and expert panels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Talk */}
          <div className="bg-black/40 backdrop-blur-md border border-bio-blue/20 rounded-xl overflow-hidden hover:border-bio-blue/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={featuredTalk.image} 
                alt={featuredTalk.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5">
                <span className="px-3 py-1 bg-bio-blue/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                  Featured Talk
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <span className="text-bio-teal font-medium">{featuredTalk.event}</span>
              <h3 className="text-2xl font-semibold text-white mt-2 mb-4">{featuredTalk.title}</h3>
              <p className="text-gray-300 mb-6">{featuredTalk.description}</p>
              
              <Link to="/speaking" className="inline-flex items-center text-bio-light-blue hover:text-bio-blue transition-colors group/link">
                <span>Watch Full Keynote</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>
          
          {/* Speaking Topics */}
          <div>
            <div className="bg-black/40 backdrop-blur-md border border-bio-blue/20 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Expert in These Topics</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {speakingTopics.map((topic, index) => (
                  <div 
                    key={index}
                    className="p-4 border border-bio-blue/20 bg-bio-blue/5 rounded-lg hover:bg-bio-blue/10 transition-colors flex items-center space-x-3"
                  >
                    <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${topic.color} flex items-center justify-center`}>
                      <topic.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{topic.title}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-md border border-bio-blue/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">Previous Speaking Engagements</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-bio-teal text-sm">March 2024</span>
                    <p className="text-white">International Bioprocessing Summit</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-bio-light-blue" />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-bio-teal text-sm">January 2024</span>
                    <p className="text-white">Pharma Tech Expo</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-bio-light-blue" />
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-bio-teal text-sm">November 2023</span>
                    <p className="text-white">Global Healthcare Innovation Forum</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-bio-light-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/speaking">
            <Button className="bg-bio-blue hover:bg-bio-navy text-white px-6 py-2.5 rounded-md text-base font-medium group">
              <span>Invite Dr. Jain to Speak</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpeakingHighlights;
