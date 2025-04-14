
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Award, Briefcase, GraduationCap, Users, FileText, ArrowRight, MessageCircle, Globe, Coffee, BookMarked, Brain, Atom } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  // Educational timeline data
  const educationTimeline = [
    {
      degree: "Ph.D. in Pharmaceutical Sciences",
      institution: "University of California, San Francisco",
      years: "1998-2003",
      description: "Specialized in advanced drug delivery systems with a focus on nanomedicine. Dissertation on 'Polymer-based Nanoparticulate Systems for Targeted Drug Delivery in Cancer Therapy'."
    },
    {
      degree: "M.S. in Biomedical Engineering",
      institution: "Massachusetts Institute of Technology",
      years: "1996-1998",
      description: "Focused on biomaterials and drug delivery technologies. Research thesis on controlled release systems using biodegradable polymers."
    },
    {
      degree: "B.Tech in Biochemical Engineering",
      institution: "Indian Institute of Technology",
      years: "1992-1996",
      description: "Graduated with honors. Specialized in bioprocess engineering and pharmaceutical biotechnology."
    }
  ];

  // Career timeline data
  const careerTimeline = [
    {
      position: "Professor of Biopharmaceutical Engineering",
      organization: "Stanford University",
      years: "2015-Present",
      description: "Leading research in advanced drug delivery systems and nanomedicine. Principal investigator for multiple NIH and industry-funded research projects."
    },
    {
      position: "Associate Professor",
      organization: "University of Michigan",
      years: "2009-2015",
      description: "Established the Biopharmaceutical Innovation Laboratory. Mentored 15 Ph.D. students and published over 50 research papers."
    },
    {
      position: "Senior Scientist",
      organization: "Genentech",
      years: "2003-2009",
      description: "Led formulation development team for biologics and complex pharmaceuticals. Contributed to 3 approved drugs and numerous patents."
    }
  ];

  // Personal interests
  const personalInterests = [
    {
      title: "Scientific Mentorship",
      description: "Guiding the next generation of pharmaceutical scientists and biotech entrepreneurs.",
      icon: BookMarked
    },
    {
      title: "Global Health Initiatives",
      description: "Contributing to projects aimed at improving drug access in developing countries.",
      icon: Globe
    },
    {
      title: "Science Communication",
      description: "Making complex scientific concepts accessible to diverse audiences.",
      icon: MessageCircle
    },
    {
      title: "Interdisciplinary Collaboration",
      description: "Working across fields to find innovative solutions to complex health challenges.",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bio-off-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-bio-light-blue to-bio-light-teal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-bio-navy mb-6">About Dr. Ratnesh Jain</h1>
              <p className="text-xl text-bio-gray max-w-3xl mx-auto">
                Bridging the gap between academic research and industry innovation in biopharmaceuticals
              </p>
            </div>
          </div>
        </section>
        
        {/* Bio Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="/images/Dr. Ratnesh Jain.png" 
                  alt="Dr. Ratnesh Jain" 
                  className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-bio-navy mb-4">Biography</h2>
                <p className="text-bio-gray mb-6">
                  Dr. Ratnesh Jain is a distinguished biopharmaceutical scientist and industry consultant with over 25 years of experience bridging academic research and commercial applications. As a Professor of Biopharmaceutical Engineering at Stanford University, he has pioneered innovative drug delivery systems that have been licensed to major pharmaceutical companies.
                </p>
                <p className="text-bio-gray mb-6">
                  His expertise spans nano-medicine, mRNA delivery technologies, bioprocess engineering, and pharmaceutical formulation. Throughout his career, Dr. Jain has been committed to translating scientific discoveries into practical applications that improve patient outcomes and address unmet medical needs.
                </p>
                <p className="text-bio-gray mb-6">
                  Dr. Jain has published over 150 peer-reviewed articles, holds 22 patents, and has facilitated numerous industry-academia partnerships that have accelerated the commercialization of novel therapeutics. His work has been recognized with multiple prestigious awards, and he regularly serves as an advisor to biotechnology startups, pharmaceutical companies, and regulatory agencies.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-bio-teal">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    <span>Ph.D. in Pharmaceutical Sciences</span>
                  </div>
                  <div className="flex items-center text-bio-teal">
                    <FileText className="h-5 w-5 mr-2" />
                    <span>150+ Publications</span>
                  </div>
                  <div className="flex items-center text-bio-teal">
                    <Briefcase className="h-5 w-5 mr-2" />
                    <span>25+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Highlights & Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-bio-light-gray p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-bio-blue mb-2">150+</div>
                <p className="text-bio-gray">Publications in Peer-Reviewed Journals</p>
              </div>
              <div className="bg-bio-light-gray p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-bio-blue mb-2">22</div>
                <p className="text-bio-gray">Patents for Drug Delivery Technologies</p>
              </div>
              <div className="bg-bio-light-gray p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-bio-blue mb-2">$75M+</div>
                <p className="text-bio-gray">Research Funding Secured</p>
              </div>
              <div className="bg-bio-light-gray p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-bio-blue mb-2">35+</div>
                <p className="text-bio-gray">Ph.D. Students Mentored</p>
              </div>
            </div>
            
            {/* More Detailed Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-bio-light-gray p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-bio-blue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="text-bio-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-3">Education</h3>
                <ul className="space-y-3">
                  {educationTimeline.map((edu, index) => (
                    <li key={index} className="pb-3 border-b border-gray-200 last:border-0">
                      <div className="font-semibold text-bio-navy">{edu.degree}</div>
                      <div className="text-bio-teal">{edu.institution}, {edu.years}</div>
                      <div className="text-bio-gray text-sm mt-1">{edu.description}</div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-bio-light-gray p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-bio-blue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="text-bio-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-3">Awards & Honors</h3>
                <ul className="space-y-3">
                  <li className="pb-3 border-b border-gray-200">
                    <div className="font-semibold text-bio-navy">Distinguished Scientist Award (2023)</div>
                    <div className="text-bio-gray text-sm">American Association of Pharmaceutical Scientists</div>
                  </li>
                  <li className="pb-3 border-b border-gray-200">
                    <div className="font-semibold text-bio-navy">Innovation in Biotechnology Award (2021)</div>
                    <div className="text-bio-gray text-sm">Biotechnology Industry Organization</div>
                  </li>
                  <li className="pb-3 border-b border-gray-200">
                    <div className="font-semibold text-bio-navy">Fellow (2019)</div>
                    <div className="text-bio-gray text-sm">Royal Society of Chemistry</div>
                  </li>
                  <li className="pb-3 border-b border-gray-200">
                    <div className="font-semibold text-bio-navy">Senior Member (2018)</div>
                    <div className="text-bio-gray text-sm">National Academy of Inventors</div>
                  </li>
                  <li>
                    <div className="font-semibold text-bio-navy">Outstanding Research Achievement Award (2016)</div>
                    <div className="text-bio-gray text-sm">Controlled Release Society</div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-bio-light-gray p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-bio-blue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Briefcase className="text-bio-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-3">Professional Experience</h3>
                <ul className="space-y-3">
                  {careerTimeline.map((career, index) => (
                    <li key={index} className="pb-3 border-b border-gray-200 last:border-0">
                      <div className="font-semibold text-bio-navy">{career.position}</div>
                      <div className="text-bio-teal">{career.organization}, {career.years}</div>
                      <div className="text-bio-gray text-sm mt-1">{career.description}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Professional Affiliations */}
            <div className="bg-bio-light-gray p-6 rounded-lg shadow-sm mb-16">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-bio-blue/10 p-3 w-12 h-12 flex items-center justify-center mr-4">
                  <Users className="text-bio-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-bio-navy">Professional Affiliations</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="font-semibold text-bio-navy">American Institute for Medical and Biological Engineering</div>
                  <div className="text-bio-teal text-sm">Fellow since 2018</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="font-semibold text-bio-navy">Controlled Release Society</div>
                  <div className="text-bio-teal text-sm">Board Member (2019-2023)</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="font-semibold text-bio-navy">American Association of Pharmaceutical Scientists</div>
                  <div className="text-bio-teal text-sm">Member since 2000</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="font-semibold text-bio-navy">Biomedical Engineering Society</div>
                  <div className="text-bio-teal text-sm">Member since 1998</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="font-semibold text-bio-navy">International Society for Pharmaceutical Engineering</div>
                  <div className="text-bio-teal text-sm">Member since 2005</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="font-semibold text-bio-navy">American Chemical Society</div>
                  <div className="text-bio-teal text-sm">Member since 2002</div>
                </div>
              </div>
            </div>
            
            {/* Areas of Expertise */}
            <div className="bg-bio-light-blue/10 rounded-lg p-8 border border-bio-light-blue/20 mb-16">
              <h2 className="text-2xl font-bold text-bio-navy mb-6 text-center">Areas of Expertise</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Atom className="text-bio-blue h-5 w-5 mr-2" />
                    <h3 className="text-lg font-semibold text-bio-navy">Advanced Drug Delivery</h3>
                  </div>
                  <p className="text-bio-gray">Developing novel drug delivery platforms for improved bioavailability and targeted therapy, with special focus on nanoparticles and polymer-based systems.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Brain className="text-bio-blue h-5 w-5 mr-2" />
                    <h3 className="text-lg font-semibold text-bio-navy">Biotechnology Integration</h3>
                  </div>
                  <p className="text-bio-gray">Bridging biotechnology innovations with pharmaceutical manufacturing processes to create scalable and commercially viable production methods.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Atom className="text-bio-blue h-5 w-5 mr-2" />
                    <h3 className="text-lg font-semibold text-bio-navy">mRNA Therapeutics</h3>
                  </div>
                  <p className="text-bio-gray">Pioneering delivery systems for mRNA-based medicines and vaccines, including lipid nanoparticles and hybrid delivery technologies.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Atom className="text-bio-blue h-5 w-5 mr-2" />
                    <h3 className="text-lg font-semibold text-bio-navy">Nanomedicine</h3>
                  </div>
                  <p className="text-bio-gray">Creating nanoparticle-based drug carriers for enhanced therapeutic efficacy, reduced toxicity, and improved targeting in oncology and inflammatory diseases.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Users className="text-bio-blue h-5 w-5 mr-2" />
                    <h3 className="text-lg font-semibold text-bio-navy">Industry-Academia Partnerships</h3>
                  </div>
                  <p className="text-bio-gray">Facilitating collaborative research between universities and pharmaceutical companies to accelerate translation of academic discoveries into commercial products.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center mb-3">
                    <Briefcase className="text-bio-blue h-5 w-5 mr-2" />
                    <h3 className="text-lg font-semibold text-bio-navy">Bioprocess Engineering</h3>
                  </div>
                  <p className="text-bio-gray">Optimizing manufacturing processes for biologics and complex pharmaceuticals to improve quality, scalability, and cost-effectiveness.</p>
                </div>
              </div>
            </div>
            
            {/* Personal Interests */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-bio-navy mb-6 text-center">Beyond the Laboratory</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {personalInterests.map((interest, index) => (
                  <div key={index} className="bg-bio-light-gray p-5 rounded-lg shadow-sm text-center">
                    <div className="rounded-full bg-bio-blue/10 p-3 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <interest.icon className="text-bio-blue h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-bio-navy mb-2">{interest.title}</h3>
                    <p className="text-bio-gray">{interest.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Philosophy Section */}
            <div className="bg-bio-light-teal/10 rounded-lg p-8 border border-bio-teal/20 mb-16">
              <h2 className="text-2xl font-bold text-bio-navy mb-4 text-center">My Philosophy</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-bio-gray mb-4 text-center italic">
                  "I believe that the greatest scientific breakthroughs occur at the intersection of disciplines. My career has been dedicated to bridging the gap between fundamental scientific discoveries and practical applications that improve human health."
                </p>
                <p className="text-bio-gray mb-4 text-center">
                  Dr. Jain is committed to the principle that scientific innovation must ultimately translate into technologies that are accessible, affordable, and address significant unmet medical needs. This philosophy guides his research, consulting work, and educational initiatives.
                </p>
              </div>
            </div>
            
            {/* CV Download */}
            <div className="mt-16 text-center">
              <Button className="cta-button">
                Download Full CV
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
