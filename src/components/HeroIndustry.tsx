import React from 'react';
import { Button } from '@/components/ui/button';
import { MEDIA_ASSETS } from '@/constants/media';
import { ArrowRight, Award, FileText, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroIndustry = () => {
  return (
    <section className="relative bg-gradient-to-r from-bio-navy to-black py-24 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIHN0cm9rZT0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMSkiIHN0cm9rZS13aWR0aD0iMC41IiBkPSJNLjUuNWg2MHY2MGgtNjB6Ii8+PHBhdGggZmlsbD0icmdiYSgxNCwgMTY1LCAyMzMsIDAuMDQpIiBkPSJNMzAgMzBoMzB2MzBoLTMweiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Premium badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-bio-blue/10 border border-bio-blue/20">
              <span className="flex h-2 w-2 rounded-full bg-bio-blue mr-2"></span>
              <span className="text-bio-light-blue text-sm font-medium">Industry Consulting</span>
            </div>
            
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Dr. Ratnesh Jain
                <span className="block mt-3 text-3xl font-light text-gray-300">
                  <span className="text-bio-teal font-medium">Innovating</span> Biopharmaceutical Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-xl">
                Empowering pharmaceutical companies with 
                <span className="text-bio-light-blue"> strategic consulting </span> 
                to optimize processes, reduce development costs, and accelerate time-to-market.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 lg:gap-8">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-bio-blue/20 flex items-center justify-center mr-3">
                  <FlaskConical className="h-5 w-5 text-bio-light-blue" />
                </div>
                <div>
                  <p className="text-white font-medium">20+ Years</p>
                  <p className="text-gray-400 text-sm">Industry Experience</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-bio-blue/20 flex items-center justify-center mr-3">
                  <Award className="h-5 w-5 text-bio-light-blue" />
                </div>
                <div>
                  <p className="text-white font-medium">50+ Companies</p>
                  <p className="text-gray-400 text-sm">Successfully Partnered</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-lg bg-bio-blue/20 flex items-center justify-center mr-3">
                  <FileText className="h-5 w-5 text-bio-light-blue" />
                </div>
                <div>
                  <p className="text-white font-medium">30+ Patents</p>
                  <p className="text-gray-400 text-sm">Industry Applications</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/consulting">
                <Button className="rounded-md bg-bio-blue hover:bg-bio-teal text-white px-6 py-6 group">
                  <span className="flex items-center">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              
              <Link to="/consulting#case-studies">
                <Button variant="outline" className="rounded-md border-bio-blue/30 text-bio-light-blue hover:bg-bio-blue/10">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing effect behind profile */}
              <div className="absolute -inset-4 bg-gradient-to-r from-bio-blue/30 to-bio-teal/30 rounded-full blur-xl"></div>
              
              <div className="relative z-10 border-4 border-white/10 rounded-full p-2 bg-gradient-to-br from-bio-blue/10 via-transparent to-bio-teal/10">
                <img 
                  src={MEDIA_ASSETS.profileImage} 
                  alt="Dr. Ratnesh Jain" 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                />
              </div>
              
              {/* Stats cards positioned around the image */}
              <div className="absolute -top-6 -left-6 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-lg">
                <p className="text-bio-light-blue font-semibold">40+ Industry Partners</p>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-black/70 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-lg">
                <p className="text-bio-teal font-semibold">$20M+ Industry Impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIndustry;
