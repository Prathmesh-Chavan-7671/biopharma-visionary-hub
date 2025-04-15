
import React from 'react';
import { ArrowRight, Calendar, MapPin, Mic, Award, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const upcomingEvents = [
  {
    title: "European BioInnovation Forum 2025",
    date: "June 5-7, 2025",
    location: "Vienna, Austria",
    topic: "Advancements in Targeted Drug Delivery Systems"
  },
  {
    title: "Asia-Pacific Pharmaceutical Congress",
    date: "August 10-12, 2025",
    location: "Singapore",
    topic: "Bridging East-West Pharmaceutical Innovation: Collaborative Models"
  },
  {
    title: "BioTech Leadership Summit 2025",
    date: "October 22-24, 2025",
    location: "San Diego, CA",
    topic: "The Future of mRNA Delivery Technologies"
  }
];

const pastEvents = [
  {
    title: "Future Medicine Summit 2025",
    year: "2025",
    topic: "Next-Generation mRNA Delivery Systems"
  },
  {
    title: "Global Biotech Innovation Conference",
    year: "2025",
    topic: "Bridging Academia and Industry: Lessons from a Decade of Partnerships"
  },
  {
    title: "BioTech Summit 2024",
    year: "2024",
    topic: "Nanomedicine: Bridging the Gap Between Academia and Industry"
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

const invitedSpeakerEngagements = [
  {
    title: "ThermoFisher Scientific's Global Health Equity Conclave",
    role: "Panelist",
    topic: "Ideas in Motion: Panel Discussion on Clinical Diagnostics Solutions- The Road Ahead",
    organizer: "United States Commercial Service and ThermoFisher Scientific",
    date: "February 27, 2024",
    location: "Mumbai, India"
  },
  {
    title: "International Proteomics Conference (APT-2024)",
    role: "Speaker",
    topic: "Developing biopharmaceuticals from lab to manufacturing",
    organizer: "Proteomics Lab, IIT Bombay",
    date: "February 19, 2024",
    location: "Mumbai, India"
  },
  {
    title: "IITB Biopharma Summit 2023",
    role: "Speaker",
    topic: "Emerging Technologies and Roadmap for Translational Research",
    organizer: "IIT Bombay",
    date: "November 23-24, 2023",
    location: "Mumbai, India"
  },
  {
    title: "Biopharmaceutical Development and Characterization",
    role: "Speaker",
    topic: "Bioprocess development",
    organizer: "IIT Bombay",
    date: "November 1-4, 2023",
    location: "Mumbai, India"
  },
  {
    title: "Biopharma conclave by CPHI-Informa",
    role: "Panelist",
    topic: "Developing a Biosimilar - Defining the Pipeline",
    organizer: "CPHI-Informa",
    date: "October 11-12, 2023",
    location: "Mumbai, India"
  },
  {
    title: "Biopharma conclave by CPHI-Informa",
    role: "Speaker",
    topic: "Developing additives for biosimilar manufacturing and product development",
    organizer: "CPHI-Informa",
    date: "October 11-12, 2023",
    location: "Mumbai, India"
  },
  {
    title: "5th Annual Biopharma Conclave",
    role: "Moderator",
    topic: "CXO Panel Discussion on Making Biotherapeutics a Viable Business",
    organizer: "Biopharma Conclave",
    date: "2023",
    location: "Hotel Sahara Star, Mumbai"
  },
  {
    title: "Lecture Series",
    role: "Speaker",
    topic: "Oral Protein Delivery and Analytical Characterisation for peptide biosimilar",
    organizer: "",
    date: "2023",
    location: ""
  },
  {
    title: "IIT Gandhinagar",
    role: "Speaker",
    topic: "Developing Next Generation affordable drugs",
    organizer: "IIT Gandhinagar",
    date: "November 12, 2022",
    location: "Gandhinagar, India"
  },
  {
    title: "Virtual Labs Of The Future",
    role: "Speaker",
    topic: "Digital Twin: Next Generation Bioreactor Control Technology",
    organizer: "",
    date: "August 8, 2022",
    location: "Virtual"
  },
  {
    title: "Great Indian Biologics Festival",
    role: "Speaker",
    topic: "Innovative Strategies In Upstream Bioprocessing For mAb Therapeutics",
    organizer: "IMPAC Pte Ltd",
    date: "May 5, 2022",
    location: "Pune, India"
  },
  {
    title: "Biopharma Conclave",
    role: "Speaker",
    topic: "Upstream Developments in Biosimilars",
    organizer: "",
    date: "September 21, 2021",
    location: "Online"
  },
  {
    title: "K.R.T. Arts, B.H. Commerce and A.M. Science College",
    role: "Speaker",
    topic: "Research: Way of Thinking",
    organizer: "K.R.T. Arts, B.H. Commerce and A.M. Science College",
    date: "July 20, 2021",
    location: "Nashik (Online)"
  },
  {
    title: "Mithibai College",
    role: "Speaker",
    topic: "Biosimilars: affordable and accessible Medicine for patients",
    organizer: "Mithibai College",
    date: "July 3, 2021",
    location: "Online"
  },
  {
    title: "India Biopharma Leaders Conclave",
    role: "Speaker",
    topic: "Nuances on Biopharma Innovation, Manufacturing Strategies & Market Development",
    organizer: "India Biopharma Leaders Conclave",
    date: "May 20, 2021",
    location: "Mumbai (Online)"
  },
  {
    title: "Bio Pharma World. IE 2021",
    role: "Speaker",
    topic: "Bio-Pharmaceuticals Acceleration Initiatives (Bench to Bed Side) in Indian Ecosystem",
    organizer: "Bio Pharma World",
    date: "February 25, 2021",
    location: "Online"
  },
  {
    title: "Ruia College",
    role: "Speaker",
    topic: "Analytical methods for Biopharmaceuticals",
    organizer: "Ruia College",
    date: "January 11, 2021",
    location: "Mumbai (Online)"
  },
  {
    title: "Venture Centre",
    role: "Speaker",
    topic: "Characterization of protein aggregation for therapeutic peptides and monoclonal antibodies",
    organizer: "Venture Centre",
    date: "November 21, 2020",
    location: "Pune (Online)"
  },
  {
    title: "Biopharma Conclave",
    role: "Speaker",
    topic: "Decoding protein aggregation for therapeutic peptides and mAbs",
    organizer: "Biopharma Conclave",
    date: "September 25, 2020",
    location: "Online"
  },
  {
    title: "Vaibhav Vaishwik Bhartiya Vaigyanik Summit",
    role: "Panelist",
    topic: "",
    organizer: "",
    date: "October 2-31, 2020",
    location: ""
  },
  {
    title: "R J College of Arts, Science and Commerce",
    role: "Speaker",
    topic: "Short Term Course on 'Research Methodology' for Teachers",
    organizer: "UGC Human Resource Development Centre, University of Mumbai",
    date: "2015",
    location: "Mumbai, India"
  },
  {
    title: "DFG Meeting for Lindau Nobel Laureate Meeting participants",
    role: "Speaker",
    topic: "",
    organizer: "",
    date: "July 7, 2011",
    location: "Bonn, Germany"
  },
  {
    title: "Workshop on Nanotechnology",
    role: "Speaker",
    topic: "",
    organizer: "MIT Aurangabad",
    date: "2013",
    location: "Aurangabad, India"
  }
];

const recognitions = [
  "Keynote Speaker at 30+ Industry Forums",
  "Innovation Award, International Pharmaceutical Federation",
  "Distinguished Industry Collaborator, Biotech Association of India",
  "Scientific Advisor of the Year, BioProcess International, 2024"
];

const SpeakingSection = () => {
  return (
    <section className="py-16 bg-bio-light-gray" id="speaking">
      <div className="content-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Speaking Engagements & Industry Thought Leadership</h2>
          <p className="text-lg text-bio-gray max-w-3xl mx-auto">
            Sharing insights and expertise at industry conferences, corporate workshops, and educational seminars.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="section-subheading flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-bio-teal" />
              Upcoming Industry Events
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
          </div>
          
          <div>
            <h3 className="section-subheading flex items-center">
              <Award className="mr-2 h-5 w-5 text-bio-teal" />
              Industry Recognition & Awards
            </h3>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 mb-8">
              <ul className="space-y-3">
                {recognitions.map((recognition, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="h-5 w-5 text-bio-teal mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-bio-gray">{recognition}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <h3 className="section-subheading flex items-center mt-8">
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
                Invite Dr. Jain for an Industry Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Detailed Invited Speaker Engagements Section */}
        <div className="mt-16">
          <h3 className="section-subheading flex items-center mb-8">
            <FileText className="mr-2 h-5 w-5 text-bio-teal" />
            Detailed Invited Speaker Engagements
          </h3>
          
          <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {invitedSpeakerEngagements.map((engagement, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{engagement.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{engagement.role}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{engagement.topic}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{engagement.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{engagement.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="outline" className="border-bio-teal text-bio-teal hover:bg-bio-teal hover:text-white">
              <FileText className="mr-2 h-4 w-4" />
              Download Complete Speaking History (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
