
import React from 'react';
import { ArrowRight, Calendar, MapPin, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

const upcomingEvents = [
  {
    title: "BioTech Summit 2023",
    date: "November 15-17, 2023",
    location: "Boston, MA",
    topic: "Nanomedicine: Bridging the Gap Between Academia and Industry"
  },
  {
    title: "Pharmaceutical Innovation Conference",
    date: "January 22-24, 2024",
    location: "San Francisco, CA",
    topic: "The Future of 3D Bioprinting in Drug Development"
  }
];

const pastEvents = [
  {
    title: "Global Drug Delivery Symposium",
    year: "2023",
    topic: "Advanced Nanocarriers for Targeted Cancer Therapies"
  },
  {
    title: "International Biotech Congress",
    year: "2022",
    topic: "Translating Academic Research into Commercial Products"
  },
  {
    title: "MedTech Innovation Forum",
    year: "2022",
    topic: "3D Bioprinting: Challenges and Opportunities for Industry Adoption"
  }
];

const SpeakingSection = () => {
  return (
    <section className="py-16 bg-bio-light-gray" id="speaking">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Speaking Engagements & Workshops</h2>
          <p className="text-lg text-bio-gray max-w-3xl mx-auto">
            Sharing insights and expertise at industry conferences, corporate workshops, and educational seminars.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="section-subheading flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-bio-teal" />
              Upcoming Events
            </h3>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="card animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <h4 className="text-xl font-semibold text-bio-navy mb-2">{event.title}</h4>
                  <div className="flex items-center text-bio-gray mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-bio-gray mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-bio-teal font-medium mb-4">Topic: {event.topic}</p>
                  <Button variant="link" className="text-bio-blue p-0 hover:text-bio-teal">
                    Event details <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Button className="secondary-button">
                View All Upcoming Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="section-subheading flex items-center">
              <Mic className="mr-2 h-5 w-5 text-bio-teal" />
              Past Speaking Engagements
            </h3>
            <div className="space-y-4">
              {pastEvents.map((event, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-bio-navy">{event.title}</h4>
                      <p className="text-bio-gray text-sm">{event.topic}</p>
                    </div>
                    <span className="text-bio-teal font-medium">{event.year}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-bio-navy mb-4">Invite Dr. Jain to Speak</h3>
              <p className="text-bio-gray mb-4">
                Dr. Jain is available for keynote presentations, panel discussions, and corporate workshops on biopharmaceutical innovation, drug delivery, and academic-industry partnerships.
              </p>
              <Button className="cta-button">
                Booking Inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
