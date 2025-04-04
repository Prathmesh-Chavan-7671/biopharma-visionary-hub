
import React, { useState } from 'react';
import { ArrowRight, BrainCircuit, FlaskConical, FileCheck, Scale, Cog, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TYPOGRAPHY, SPACING } from '@/constants/styles';

const CollaborationModels = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    {
      icon: BrainCircuit,
      title: "Advisory for Biotech Startups",
      description: "Strategic guidance and mentorship for innovative biotech startups at all stages of development. Leverage Dr. Jain's scientific expertise and industry networks to accelerate your growth.",
      color: "from-bio-light-blue to-bio-blue"
    },
    {
      icon: FlaskConical,
      title: "Contract Research & Process Dev",
      description: "Custom research and development services to solve your most challenging bioprocess problems. From lab-scale protocols to manufacturing optimization with proven methodologies.",
      color: "from-bio-teal to-bio-light-blue"
    },
    {
      icon: FileCheck,
      title: "Due Diligence & Tech Evaluation",
      description: "Expert assessment of biotech technologies and platforms for investment or acquisition decisions. Comprehensive analysis of technical feasibility, market potential, and competitive position.",
      color: "from-bio-blue to-bio-teal"
    },
    {
      icon: Scale,
      title: "Scale-Up & Manufacturing Guidance",
      description: "Specialized expertise in transitioning from laboratory success to commercial-scale production. Navigate regulatory requirements while optimizing yields and maintaining product quality.",
      color: "from-bio-light-blue to-bio-teal"
    },
    {
      icon: Cog,
      title: "Process Optimization",
      description: "Transform existing bioprocesses to increase efficiency, reduce costs, and improve consistency. Data-driven approaches to identify bottlenecks and implement targeted solutions.",
      color: "from-bio-teal to-bio-blue"
    },
    {
      icon: Rocket,
      title: "Strategic Innovation Planning",
      description: "Develop comprehensive innovation roadmaps aligned with market opportunities and organizational capabilities. Identify emerging technologies and create implementation strategies.",
      color: "from-bio-blue to-bio-light-blue"
    }
  ];
  
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-bio-blue/10 via-bio-teal/5 to-transparent opacity-70 animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-bio-teal/10 border border-bio-teal/20 rounded-full mb-4">
            <span className="text-bio-light-blue text-sm font-medium">Collaboration Models</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How You Can <span className="text-gradient bg-gradient-to-r from-bio-light-blue via-bio-teal to-bio-blue bg-clip-text text-transparent">Work with Dr. Jain</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Clear pathways to leverage Dr. Jain's expertise for your organization's strategic objectives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tab Navigation */}
          <div className="lg:col-span-4">
            <div className="bg-black/40 backdrop-blur-md border border-bio-teal/20 rounded-xl p-1">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-lg flex items-center space-x-3 transition-all ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-bio-teal/20 to-bio-blue/20 border border-bio-teal/40'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${tab.color} flex items-center justify-center flex-shrink-0`}>
                    <tab.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className={`font-medium ${activeTab === index ? 'text-white' : 'text-gray-400'}`}>
                    {tab.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="lg:col-span-8">
            <div className="bg-black/40 backdrop-blur-md border border-bio-blue/20 rounded-xl p-8 h-full">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`h-12 w-12 rounded-lg bg-gradient-to-br ${tabs[activeTab].color} flex items-center justify-center`}>
                  {/* The issue was here - fixing the syntax for dynamic component rendering */}
                  {(() => {
                    const IconComponent = tabs[activeTab].icon;
                    return <IconComponent className="h-6 w-6 text-white" />;
                  })()}
                </div>
                <h3 className="text-2xl font-semibold text-white">{tabs[activeTab].title}</h3>
              </div>
              
              <p className="text-gray-300 text-lg mb-8">
                {tabs[activeTab].description}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-bio-light-blue/20 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-bio-light-blue text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Customized engagement model designed for your specific needs</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-bio-light-blue/20 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-bio-light-blue text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Clear deliverables and measurable outcomes</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-bio-light-blue/20 rounded-full flex items-center justify-center mt-1 mr-3">
                    <span className="text-bio-light-blue text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">Access to Dr. Jain's extensive network and resources</p>
                </div>
              </div>
              
              <div className="mt-10">
                <Link to="/contact">
                  <Button className="bg-bio-teal hover:bg-bio-navy text-white px-6 py-2.5 rounded-md text-base font-medium group">
                    <span>Start a Conversation</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationModels;
