
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Award, Briefcase, GraduationCap, Users, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-bio-off-white">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-bio-navy mb-6">About Dr. Ratnesh Jain</h1>
              <p className="text-xl text-bio-gray max-w-3xl mx-auto">
                Bridging the gap between academic research and industry innovation in biopharmaceuticals
              </p>
            </div>
            
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
                  Dr. Ratnesh Jain is a distinguished biopharmaceutical scientist and industry consultant with over 25 years of experience bridging academic research and commercial applications. As a Professor of Biopharmaceutical Engineering at a leading research university, he has pioneered innovative drug delivery systems that have been licensed to major pharmaceutical companies.
                </p>
                <p className="text-bio-gray mb-6">
                  His expertise spans nano-medicine, mRNA delivery technologies, bioprocess engineering, and pharmaceutical formulation. Dr. Jain has published over 150 peer-reviewed articles, holds 22 patents, and has facilitated numerous industry-academia partnerships that have accelerated the commercialization of novel therapeutics.
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-bio-light-gray p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-bio-blue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="text-bio-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-3">Education</h3>
                <ul className="space-y-3">
                  <li className="text-bio-gray">Ph.D. in Pharmaceutical Sciences, University of California, San Francisco</li>
                  <li className="text-bio-gray">M.S. in Biomedical Engineering, Massachusetts Institute of Technology</li>
                  <li className="text-bio-gray">B.Tech in Biochemical Engineering, Indian Institute of Technology</li>
                </ul>
              </div>
              
              <div className="bg-bio-light-gray p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-bio-blue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="text-bio-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-3">Awards & Honors</h3>
                <ul className="space-y-3">
                  <li className="text-bio-gray">Distinguished Scientist Award, American Association of Pharmaceutical Scientists</li>
                  <li className="text-bio-gray">Innovation in Biotechnology Award, Biotechnology Industry Organization</li>
                  <li className="text-bio-gray">Fellow, Royal Society of Chemistry</li>
                  <li className="text-bio-gray">National Academy of Inventors, Senior Member</li>
                </ul>
              </div>
              
              <div className="bg-bio-light-gray p-6 rounded-lg shadow-sm">
                <div className="rounded-full bg-bio-blue/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="text-bio-blue h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-bio-navy mb-3">Professional Affiliations</h3>
                <ul className="space-y-3">
                  <li className="text-bio-gray">American Institute for Medical and Biological Engineering (Fellow)</li>
                  <li className="text-bio-gray">Controlled Release Society (Board Member)</li>
                  <li className="text-bio-gray">American Association of Pharmaceutical Scientists</li>
                  <li className="text-bio-gray">Biomedical Engineering Society</li>
                  <li className="text-bio-gray">International Society for Pharmaceutical Engineering</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-bio-light-blue/10 rounded-lg p-8 border border-bio-light-blue/20">
              <h2 className="text-2xl font-bold text-bio-navy mb-6 text-center">Areas of Expertise</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-bio-navy mb-2">Advanced Drug Delivery</h3>
                  <p className="text-bio-gray">Developing novel drug delivery platforms for improved bioavailability and targeted therapy.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-bio-navy mb-2">Biotechnology Integration</h3>
                  <p className="text-bio-gray">Bridging biotechnology innovations with pharmaceutical manufacturing processes.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-bio-navy mb-2">mRNA Therapeutics</h3>
                  <p className="text-bio-gray">Pioneering delivery systems for mRNA-based medicines and vaccines.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-bio-navy mb-2">Nanomedicine</h3>
                  <p className="text-bio-gray">Creating nanoparticle-based drug carriers for enhanced therapeutic efficacy.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-bio-navy mb-2">Industry-Academia Partnerships</h3>
                  <p className="text-bio-gray">Facilitating collaborative research between universities and pharmaceutical companies.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-bio-navy mb-2">Bioprocess Engineering</h3>
                  <p className="text-bio-gray">Optimizing manufacturing processes for biologics and complex pharmaceuticals.</p>
                </div>
              </div>
            </div>
            
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
