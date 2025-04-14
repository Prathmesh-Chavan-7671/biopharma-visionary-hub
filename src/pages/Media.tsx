
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, ExternalLink, Calendar, Video, Newspaper, Podcast } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mediaAppearances = [
  {
    title: "Biotechnology's New Frontiers",
    outlet: "ScienceDirect Podcast",
    date: "March 2025",
    type: "podcast",
    description: "Dr. Jain discusses recent breakthroughs in drug delivery systems and their implications for personalized medicine.",
    link: "#"
  },
  {
    title: "Bridging Academic Research and Industry Applications",
    outlet: "BioTech Today Magazine",
    date: "February 2025",
    type: "article",
    description: "Feature article highlighting Dr. Jain's work in creating sustainable partnerships between universities and pharmaceutical companies.",
    link: "#"
  },
  {
    title: "The Future of Nanomedicine",
    outlet: "Global Health Conference",
    date: "January 2025",
    type: "video",
    description: "Recorded presentation on emerging nanomedicine platforms and their potential to revolutionize treatment approaches.",
    link: "#"
  },
  {
    title: "Innovation in Pharmaceutical Sciences",
    outlet: "Science Weekly",
    date: "December 2024",
    type: "article",
    description: "Interview exploring Dr. Jain's journey from academic research to industry innovation.",
    link: "#"
  },
  {
    title: "Bioprinting: From Lab to Market",
    outlet: "TechTalk Webinar Series",
    date: "November 2024",
    type: "video",
    description: "Expert panel discussion on commercializing 3D bioprinting technologies.",
    link: "#"
  },
  {
    title: "Academic-Industry Collaboration Models",
    outlet: "Innovation Insights Podcast",
    date: "October 2024",
    type: "podcast",
    description: "Dr. Jain shares successful strategies for establishing productive partnerships between researchers and commercial entities.",
    link: "#"
  }
];

const pressReleases = [
  {
    title: "Dr. Ratnesh Jain Receives Innovation Award for Nanomedicine Research",
    date: "March 15, 2025",
    source: "University Press Office",
    link: "#"
  },
  {
    title: "Groundbreaking Drug Delivery System Developed by Dr. Jain's Research Group",
    date: "January 28, 2025",
    source: "BioTech News",
    link: "#"
  },
  {
    title: "New Industry Collaboration Announced Between Jain Laboratory and PharmaCorp",
    date: "November 5, 2024",
    source: "Industry Wire",
    link: "#"
  }
];

const Media = () => {
  const getIconForMediaType = (type) => {
    switch (type) {
      case 'podcast':
        return <Podcast className="h-5 w-5 text-bio-teal" />;
      case 'video':
        return <Video className="h-5 w-5 text-bio-blue" />;
      case 'article':
        return <Newspaper className="h-5 w-5 text-bio-navy" />;
      default:
        return <ExternalLink className="h-5 w-5 text-bio-gray" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bio-off-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-bio-light-blue to-bio-very-light-blue py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-bio-navy mb-6">Media & Press</h1>
              <p className="text-lg text-bio-gray mb-8">
                Browse Dr. Jain's media appearances, interviews, and press coverage related to his work in biopharmaceutical innovation and industry collaboration.
              </p>
            </div>
          </div>
        </div>
        
        {/* Media Appearances */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading mb-12">Recent Media Appearances</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaAppearances.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-bio-light-gray p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      {getIconForMediaType(item.type)}
                      <span className="ml-2 text-bio-gray font-medium capitalize">{item.type}</span>
                    </div>
                    <span className="text-bio-gray text-sm">{item.date}</span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-bio-navy mb-2">{item.title}</h3>
                    <p className="text-bio-teal font-medium mb-3">{item.outlet}</p>
                    <p className="text-bio-gray mb-6">{item.description}</p>
                    
                    <a href={item.link} className="inline-flex items-center text-bio-blue hover:text-bio-teal transition-colors">
                      View {item.type === 'article' ? 'Article' : item.type === 'video' ? 'Video' : 'Podcast'}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Press Releases */}
        <section className="py-16 bg-bio-light-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading mb-8">Press Releases</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 divide-y">
              {pressReleases.map((release, index) => (
                <div key={index} className="p-6 hover:bg-bio-very-light-blue transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-bio-navy mb-2">{release.title}</h3>
                      <p className="text-bio-gray mb-1">{release.source}</p>
                      <div className="flex items-center text-bio-teal text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{release.date}</span>
                      </div>
                    </div>
                    <a 
                      href={release.link} 
                      className="flex-shrink-0 bg-bio-light-blue hover:bg-bio-blue text-white rounded-full p-2 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Media Contact */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-heading mb-6">Media Inquiries</h2>
            <p className="text-bio-gray mb-8">
              For interview requests, expert commentary, or other media-related inquiries, please contact Dr. Jain's media team.
            </p>
            
            <Button className="bg-bio-blue hover:bg-bio-navy text-white px-6 py-3 rounded-md text-base font-medium inline-flex items-center">
              Contact for Media Inquiries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Media;
