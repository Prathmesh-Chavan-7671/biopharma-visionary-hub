
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Award, Briefcase, GraduationCap, Users, FileText, ArrowRight, MessageCircle, Globe, Bookmark, BookMarked, Brain, Atom, Book, Citation, Library, School } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Academic = () => {
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

  // Academic positions
  const academicPositions = [
    {
      position: "Professor of Biopharmaceutical Engineering",
      institution: "Stanford University",
      department: "Department of Chemical Engineering",
      years: "2015-Present",
      responsibilities: [
        "Teaching graduate-level courses on Drug Delivery Systems and Pharmaceutical Process Development",
        "Directing the Nanomedicine Research Laboratory",
        "Supervising 8 Ph.D. students and 3 postdoctoral researchers",
        "Principal investigator for NIH and NSF funded research projects"
      ]
    },
    {
      position: "Associate Professor",
      institution: "University of Michigan",
      department: "Department of Pharmaceutical Sciences",
      years: "2009-2015",
      responsibilities: [
        "Established the Biopharmaceutical Innovation Laboratory",
        "Taught courses on Advanced Drug Formulation and Bioprocessing",
        "Mentored 15 Ph.D. students and 5 postdoctoral researchers",
        "Developed new curriculum for Pharmaceutical Engineering program"
      ]
    },
    {
      position: "Visiting Professor",
      institution: "ETH Zurich",
      department: "Department of Chemistry and Applied Biosciences",
      years: "2013 (Spring Semester)",
      responsibilities: [
        "Taught advanced course on Nanomedicine and Drug Targeting",
        "Collaborated on research projects with the Institute of Pharmaceutical Sciences",
        "Established international research partnership between UMich and ETH"
      ]
    }
  ];

  // Selected publications
  const selectedPublications = [
    {
      title: "Next-generation mRNA delivery vehicles: Optimizing lipid nanoparticle design for targeted intracellular delivery",
      journal: "Nature Biotechnology",
      year: 2023,
      authors: "Jain R., Zhang L., Chen M., Patel S., et al.",
      impact: "Pioneered novel lipid formulations that improved cellular uptake by 300% compared to conventional systems",
      citations: 87
    },
    {
      title: "Biodegradable polymer-based nanocarriers for immune checkpoint inhibitor delivery in solid tumors",
      journal: "Journal of Controlled Release",
      year: 2022,
      authors: "Wang K., Jain R., Miller T., Zhang P., et al.",
      impact: "Demonstrated significant enhancement of immunotherapeutic efficacy through controlled release in tumor microenvironment",
      citations: 95
    },
    {
      title: "Continuous manufacturing processes for precision medicine: A paradigm shift in pharmaceutical production",
      journal: "Advanced Drug Delivery Reviews",
      year: 2021,
      authors: "Jain R., Kapoor M., Anderson K., et al.",
      impact: "Comprehensive review establishing framework for next-generation pharmaceutical manufacturing systems",
      citations: 135
    },
    {
      title: "Microfluidic platforms for rapid screening of targeted nanoparticle formulations",
      journal: "Small",
      year: 2020,
      authors: "Chen B., Jain R., Williams J., et al.",
      impact: "Introduced high-throughput methodology that accelerated formulation development by 10-fold",
      citations: 212
    },
    {
      title: "Oral delivery of biologics: Overcoming physiological barriers through multifunctional nanocarrier design",
      journal: "Advanced Materials",
      year: 2019,
      authors: "Jain R., Smith A., Patel V., et al.",
      impact: "Breakthrough approach for oral protein delivery with 28% bioavailability",
      citations: 285
    }
  ];

  // Research areas
  const researchAreas = [
    {
      title: "Advanced Drug Delivery Systems",
      description: "Developing innovative nanoparticulate and polymeric systems for targeted delivery of therapeutics to specific tissues and cells, with focus on overcoming biological barriers.",
      icon: Atom,
      projects: [
        "Lipid nanoparticles for mRNA delivery",
        "Stimuli-responsive polymeric carriers",
        "Brain-targeted drug delivery systems"
      ]
    },
    {
      title: "Pharmaceutical Process Engineering",
      description: "Designing and optimizing continuous manufacturing processes for complex pharmaceuticals and biologics, with emphasis on scalability and quality by design.",
      icon: Briefcase,
      projects: [
        "Continuous crystallization processes",
        "Microfluidic manufacturing of nanomedicines",
        "PAT tools for bioprocess monitoring"
      ]
    },
    {
      title: "Bioprocess Development",
      description: "Engineering efficient and scalable bioprocesses for the production of biologics, including recombinant proteins, monoclonal antibodies, and cell-based therapies.",
      icon: Brain,
      projects: [
        "Perfusion bioreactor systems",
        "Downstream processing innovations",
        "Cell-free protein synthesis platforms"
      ]
    },
    {
      title: "Translational Nanomedicine",
      description: "Bridging the gap between laboratory innovations and clinical applications in nanomedicine, addressing regulatory, scalability, and efficacy challenges.",
      icon: Bookmark,
      projects: [
        "GMP manufacturing of nanomedicines",
        "Regulatory science for nanotherapeutics",
        "Predictive in vitro-in vivo correlation models"
      ]
    }
  ];

  // Grants and funding
  const grantsAndFunding = [
    {
      title: "NIH R01 Grant: Next-Generation mRNA Delivery Technologies",
      amount: "$2.8 million",
      period: "2022-2026",
      role: "Principal Investigator"
    },
    {
      title: "NSF Engineering Research Center for Bioprocess Innovation",
      amount: "$3.5 million",
      period: "2020-2025",
      role: "Co-Principal Investigator"
    },
    {
      title: "DARPA Pharmaceutical on Demand Program",
      amount: "$1.7 million",
      period: "2019-2023",
      role: "Lead Investigator"
    },
    {
      title: "Bill & Melinda Gates Foundation Grant for Global Health Technologies",
      amount: "$950,000",
      period: "2018-2021",
      role: "Principal Investigator"
    },
    {
      title: "Industry Consortium on Continuous Pharmaceutical Manufacturing",
      amount: "$4.2 million",
      period: "2017-2022",
      role: "Research Director"
    }
  ];

  // Teaching and mentorship
  const teachingAndMentorship = [
    {
      course: "CHEME 589: Advanced Drug Delivery Systems",
      level: "Graduate",
      description: "Comprehensive course on principles, design and evaluation of modern drug delivery systems including nanoparticles, liposomes, and targeted delivery approaches."
    },
    {
      course: "CHEME 462: Pharmaceutical Process Development",
      level: "Senior Undergraduate / Graduate",
      description: "Course focusing on translation of laboratory processes to commercial-scale manufacturing of pharmaceuticals and biologics."
    },
    {
      course: "BIOE 501: Biopharmaceutical Engineering",
      level: "Graduate",
      description: "Advanced course on engineering principles applied to design and production of biopharmaceuticals."
    },
    {
      course: "CHEME 699: Pharmaceutical Nanotechnology Seminar",
      level: "Graduate",
      description: "Research seminar course with student presentations and critical analysis of recent developments in the field."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Profile</h1>
              <p className="text-xl max-w-3xl mx-auto text-indigo-100">
                Dr. Ratnesh Jain | Professor of Biopharmaceutical Engineering | Stanford University
              </p>
            </div>
          </div>
        </section>
        
        {/* Tabs Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-3 md:grid-cols-none mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="publications">Publications</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="teaching">Teaching</TabsTrigger>
                <TabsTrigger value="funding">Funding</TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Profile Image */}
                  <div>
                    <img 
                      src="/images/Dr. Ratnesh Jain.png" 
                      alt="Dr. Ratnesh Jain" 
                      className="rounded-xl shadow-lg w-full object-cover aspect-[3/4]"
                    />
                    <div className="mt-6 space-y-4 bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-indigo-600" />
                        <span>Academic Appointments</span>
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex gap-2">
                          <div className="h-5 w-5 text-indigo-600 flex-shrink-0">•</div>
                          <span className="text-gray-700">Professor of Biopharmaceutical Engineering, Stanford University (2015-Present)</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="h-5 w-5 text-indigo-600 flex-shrink-0">•</div>
                          <span className="text-gray-700">Associate Professor, University of Michigan (2009-2015)</span>
                        </li>
                        <li className="flex gap-2">
                          <div className="h-5 w-5 text-indigo-600 flex-shrink-0">•</div>
                          <span className="text-gray-700">Visiting Professor, ETH Zurich (2013)</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6 space-y-4 bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-indigo-600" />
                        <span>Education</span>
                      </h3>
                      <ul className="space-y-3">
                        {educationTimeline.map((edu, index) => (
                          <li key={index} className="text-gray-700">
                            <div className="font-medium">{edu.degree}</div>
                            <div className="text-indigo-600 text-sm">{edu.institution}, {edu.years}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Academic Bio */}
                  <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">Academic Biography</h2>
                      <div className="prose prose-indigo max-w-none">
                        <p className="text-gray-700 mb-4">
                          Dr. Ratnesh Jain is a Professor of Biopharmaceutical Engineering at Stanford University with a distinguished academic career spanning over two decades. His research lies at the intersection of pharmaceutical sciences, chemical engineering, and materials science, with a focus on developing innovative drug delivery systems, continuous manufacturing processes for pharmaceuticals, and translational nanomedicine.
                        </p>
                        <p className="text-gray-700 mb-4">
                          At Stanford, Dr. Jain leads the Advanced Drug Delivery and Bioprocess Engineering Laboratory, where he and his team are pioneering novel approaches to address key challenges in pharmaceutical development and manufacturing. His laboratory has made significant contributions to mRNA delivery technologies, targeted nanoparticle systems for cancer therapy, and continuous production processes for complex biologics.
                        </p>
                        <p className="text-gray-700 mb-4">
                          Prior to joining Stanford, Dr. Jain served as an Associate Professor at the University of Michigan, where he established the Biopharmaceutical Innovation Laboratory and developed new curriculum for the Pharmaceutical Engineering program. He has also held visiting appointments at ETH Zurich, contributing to international research collaborations and educational initiatives.
                        </p>
                        <p className="text-gray-700">
                          Throughout his academic career, Dr. Jain has published over 150 peer-reviewed papers in leading journals, secured more than $15 million in research funding, and mentored over 35 Ph.D. students and postdoctoral researchers who have gone on to successful careers in academia and industry. His commitment to bridging fundamental research with practical applications has also led to 22 patents and several successful technology transfers to the pharmaceutical industry.
                        </p>
                      </div>
                    </div>
                    
                    {/* Academic Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">150+</div>
                        <p className="text-gray-700">Peer-Reviewed Publications</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">10k+</div>
                        <p className="text-gray-700">Citations</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">35+</div>
                        <p className="text-gray-700">PhD Students Mentored</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">$15M+</div>
                        <p className="text-gray-700">Research Funding</p>
                      </div>
                    </div>
                    
                    {/* Research Interests */}
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Research Interests</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {researchAreas.map((area, index) => (
                          <div key={index} className="flex gap-3">
                            <div className="rounded-full bg-indigo-100 p-3 h-12 w-12 flex-shrink-0 flex items-center justify-center">
                              <area.icon className="text-indigo-600 h-6 w-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{area.title}</h4>
                              <p className="text-sm text-gray-700 mt-1">{area.description.substring(0, 100)}...</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Professional Affiliations */}
                    <div className="bg-white p-8 rounded-lg shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Affiliations</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="font-medium text-gray-900">American Institute for Medical and Biological Engineering</div>
                          <div className="text-indigo-600 text-sm">Fellow since 2018</div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="font-medium text-gray-900">Controlled Release Society</div>
                          <div className="text-indigo-600 text-sm">Board Member (2019-2023)</div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="font-medium text-gray-900">American Association of Pharmaceutical Scientists</div>
                          <div className="text-indigo-600 text-sm">Fellow since 2017</div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4">
                          <div className="font-medium text-gray-900">Royal Society of Chemistry</div>
                          <div className="text-indigo-600 text-sm">Fellow since 2019</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Publications Tab */}
              <TabsContent value="publications" className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Selected Publications</h2>
                    <div className="text-indigo-600 flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      <span>Full list available on Google Scholar</span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {selectedPublications.map((pub, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{pub.title}</h3>
                        <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm mb-3">
                          <span className="text-indigo-600 font-medium">{pub.journal}</span>
                          <span className="text-gray-500">{pub.year}</span>
                          <span className="text-gray-500">{pub.authors}</span>
                        </div>
                        <p className="text-gray-700 text-sm mb-2">{pub.impact}</p>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <span>Citations: {pub.citations}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl">Publication Metrics</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-3xl font-bold text-indigo-600">150+</div>
                            <div className="text-sm text-gray-500">Publications</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-indigo-600">42</div>
                            <div className="text-sm text-gray-500">h-index</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-indigo-600">10k+</div>
                            <div className="text-sm text-gray-500">Citations</div>
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-indigo-600">22</div>
                            <div className="text-sm text-gray-500">Patents</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl">Journal Contributions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex justify-between">
                            <span className="text-gray-700">Nature Biotechnology</span>
                            <span className="font-medium text-indigo-600">8 papers</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-700">Advanced Materials</span>
                            <span className="font-medium text-indigo-600">12 papers</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-700">J. Controlled Release</span>
                            <span className="font-medium text-indigo-600">23 papers</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-700">ACS Nano</span>
                            <span className="font-medium text-indigo-600">15 papers</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xl">Editorial Roles</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2">
                            <div className="h-5 w-5 text-indigo-600 flex-shrink-0">•</div>
                            <span className="text-gray-700">Associate Editor, Journal of Controlled Release (2018-Present)</span>
                          </li>
                          <li className="flex gap-2">
                            <div className="h-5 w-5 text-indigo-600 flex-shrink-0">•</div>
                            <span className="text-gray-700">Editorial Board Member, Pharmaceutical Research (2015-Present)</span>
                          </li>
                          <li className="flex gap-2">
                            <div className="h-5 w-5 text-indigo-600 flex-shrink-0">•</div>
                            <span className="text-gray-700">Guest Editor, Advanced Drug Delivery Reviews (Special Issues 2020, 2022)</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              {/* Research Tab */}
              <TabsContent value="research" className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Research Areas</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {researchAreas.map((area, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className="bg-indigo-50">
                          <div className="flex items-center gap-3">
                            <div className="rounded-full bg-indigo-100 p-3 h-12 w-12 flex items-center justify-center">
                              <area.icon className="text-indigo-600 h-6 w-6" />
                            </div>
                            <CardTitle>{area.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <p className="text-gray-700 mb-4">{area.description}</p>
                          <h4 className="font-medium text-gray-900 mb-2">Current Projects:</h4>
                          <ul className="space-y-1">
                            {area.projects.map((project, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="text-indigo-600 mt-1">•</div>
                                <span className="text-gray-700">{project}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Research Laboratory</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Advanced Drug Delivery and Bioprocess Engineering Lab</h4>
                        <p className="text-gray-700 mb-4">
                          The Advanced Drug Delivery and Bioprocess Engineering Laboratory at Stanford University is equipped with state-of-the-art facilities for the design, synthesis, characterization, and evaluation of novel drug delivery systems and pharmaceutical manufacturing processes.
                        </p>
                        <p className="text-gray-700 mb-4">
                          Our laboratory integrates expertise in chemical engineering, pharmaceutical sciences, materials science, and bioengineering to develop innovative solutions for challenging drug delivery problems and to advance pharmaceutical manufacturing technologies.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                          <div className="bg-indigo-50 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-900 mb-2">Equipment & Facilities</h5>
                            <ul className="space-y-1 text-sm">
                              <li className="text-gray-700">• Microfluidic fabrication platforms</li>
                              <li className="text-gray-700">• High-resolution microscopy suite</li>
                              <li className="text-gray-700">• Cell culture and in vitro testing labs</li>
                              <li className="text-gray-700">• Continuous processing equipment</li>
                              <li className="text-gray-700">• Analytical characterization instruments</li>
                            </ul>
                          </div>
                          <div className="bg-indigo-50 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-900 mb-2">Research Team</h5>
                            <ul className="space-y-1 text-sm">
                              <li className="text-gray-700">• 8 Ph.D. students</li>
                              <li className="text-gray-700">• 3 Postdoctoral researchers</li>
                              <li className="text-gray-700">• 2 Research scientists</li>
                              <li className="text-gray-700">• 5 Master's students</li>
                              <li className="text-gray-700">• 3 Undergraduate researchers</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Research Collaborations</h4>
                        <div className="bg-white border border-gray-200 rounded-lg divide-y">
                          <div className="p-4">
                            <h5 className="font-medium text-gray-900">Academic Partners</h5>
                            <ul className="mt-2 space-y-1 text-sm text-gray-700">
                              <li>• MIT Department of Chemical Engineering</li>
                              <li>• UCSF School of Pharmacy</li>
                              <li>• ETH Zurich Institute of Pharmaceutical Sciences</li>
                              <li>• University of Tokyo Department of Bioengineering</li>
                            </ul>
                          </div>
                          <div className="p-4">
                            <h5 className="font-medium text-gray-900">Industry Partners</h5>
                            <ul className="mt-2 space-y-1 text-sm text-gray-700">
                              <li>• Genentech Formulation Development</li>
                              <li>• Moderna Delivery Sciences Group</li>
                              <li>• Merck Process Research & Development</li>
                              <li>• Novartis Institutes for Biomedical Research</li>
                            </ul>
                          </div>
                          <div className="p-4">
                            <h5 className="font-medium text-gray-900">Government & Non-Profit</h5>
                            <ul className="mt-2 space-y-1 text-sm text-gray-700">
                              <li>• NIH Nanomedicine Development Centers</li>
                              <li>• FDA Office of Pharmaceutical Quality</li>
                              <li>• Bill & Melinda Gates Foundation</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Teaching Tab */}
              <TabsContent value="teaching" className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Teaching & Mentorship</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Courses</h3>
                        <div className="space-y-6">
                          {teachingAndMentorship.map((course, index) => (
                            <div key={index} className="border-l-4 border-indigo-600 pl-4 py-1">
                              <h4 className="font-semibold text-gray-900">{course.course}</h4>
                              <div className="text-indigo-600 text-sm">{course.level}</div>
                              <p className="text-gray-700 text-sm mt-1">{course.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Teaching Philosophy</h3>
                        <div className="prose prose-indigo max-w-none">
                          <p className="text-gray-700">
                            My approach to teaching combines rigorous theoretical foundations with practical, industry-relevant applications. I believe in creating an interactive learning environment that encourages critical thinking and problem-solving skills. By integrating real-world case studies, hands-on laboratory experiences, and industry perspectives, I prepare students to address complex challenges in pharmaceutical sciences and engineering.
                          </p>
                          <blockquote className="border-l-4 border-indigo-600 pl-4 py-1 my-4 italic text-gray-700">
                            "Education is not the filling of a pail, but the lighting of a fire. My goal is to inspire students to become lifelong learners and innovators who can translate scientific discoveries into technologies that improve human health."
                          </blockquote>
                          <p className="text-gray-700">
                            I am committed to mentoring the next generation of pharmaceutical scientists and engineers, guiding them to develop both technical expertise and professional skills needed for successful careers in academia, industry, and regulatory agencies.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl">Mentorship Stats</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <div className="text-3xl font-bold text-indigo-600">35+</div>
                              <div className="text-sm text-gray-500">Ph.D. Students Mentored</div>
                            </div>
                            <div>
                              <div className="text-3xl font-bold text-indigo-600">18</div>
                              <div className="text-sm text-gray-500">Postdoctoral Researchers</div>
                            </div>
                            <div>
                              <div className="text-3xl font-bold text-indigo-600">60+</div>
                              <div className="text-sm text-gray-500">Master's Students</div>
                            </div>
                            <div>
                              <div className="text-3xl font-bold text-indigo-600">45+</div>
                              <div className="text-sm text-gray-500">Undergraduate Researchers</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl">Alumni Success</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-700">Academia</span>
                              <span className="font-medium text-indigo-600">42%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "42%" }}></div>
                            </div>
                            
                            <div className="flex justify-between">
                              <span className="text-gray-700">Industry</span>
                              <span className="font-medium text-indigo-600">48%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "48%" }}></div>
                            </div>
                            
                            <div className="flex justify-between">
                              <span className="text-gray-700">Startup Ventures</span>
                              <span className="font-medium text-indigo-600">7%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "7%" }}></div>
                            </div>
                            
                            <div className="flex justify-between">
                              <span className="text-gray-700">Government/Regulatory</span>
                              <span className="font-medium text-indigo-600">3%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "3%" }}></div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">Teaching Awards</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2">
                            <div className="text-indigo-600">•</div>
                            <div>
                              <div className="text-gray-900">Excellence in Graduate Teaching Award</div>
                              <div className="text-gray-500">Stanford School of Engineering, 2022</div>
                            </div>
                          </li>
                          <li className="flex gap-2">
                            <div className="text-indigo-600">•</div>
                            <div>
                              <div className="text-gray-900">Outstanding Faculty Mentor Award</div>
                              <div className="text-gray-500">Stanford Graduate Student Council, 2020</div>
                            </div>
                          </li>
                          <li className="flex gap-2">
                            <div className="text-indigo-600">•</div>
                            <div>
                              <div className="text-gray-900">Innovative Teaching Award</div>
                              <div className="text-gray-500">University of Michigan, 2014</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Funding Tab */}
              <TabsContent value="funding" className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Grants & Funding</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="space-y-6">
                        {grantsAndFunding.map((grant, index) => (
                          <Card key={index}>
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">{grant.title}</CardTitle>
                              <CardDescription>
                                <span className="text-indigo-600 font-medium">{grant.amount}</span> • {grant.period}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="text-sm text-gray-700">
                                <span className="font-medium">Role:</span> {grant.role}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl">Funding Metrics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <div className="text-3xl font-bold text-indigo-600">$15.2M</div>
                              <div className="text-sm text-gray-500">Total Research Funding</div>
                            </div>
                            <div>
                              <div className="text-3xl font-bold text-indigo-600">8</div>
                              <div className="text-sm text-gray-500">Active Grants</div>
                            </div>
                            <div>
                              <div className="text-3xl font-bold text-indigo-600">22</div>
                              <div className="text-sm text-gray-500">Completed Grants</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl">Funding Sources</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-700">Federal (NIH, NSF, DARPA)</span>
                              <span className="font-medium text-indigo-600">58%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "58%" }}></div>
                            </div>
                            
                            <div className="flex justify-between">
                              <span className="text-gray-700">Industry Partnerships</span>
                              <span className="font-medium text-indigo-600">27%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "27%" }}></div>
                            </div>
                            
                            <div className="flex justify-between">
                              <span className="text-gray-700">Foundations</span>
                              <span className="font-medium text-indigo-600">12%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "12%" }}></div>
                            </div>
                            
                            <div className="flex justify-between">
                              <span className="text-gray-700">University Funding</span>
                              <span className="font-medium text-indigo-600">3%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "3%" }}></div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h3 className="font-medium text-gray-900 mb-2">Research Impact</h3>
                        <ul className="space-y-2 text-sm">
                          <li className="flex gap-2">
                            <div className="text-indigo-600">•</div>
                            <div className="text-gray-700">Contributed to development of 3 FDA-approved drug products</div>
                          </li>
                          <li className="flex gap-2">
                            <div className="text-indigo-600">•</div>
                            <div className="text-gray-700">5 technologies licensed to pharmaceutical companies</div>
                          </li>
                          <li className="flex gap-2">
                            <div className="text-indigo-600">•</div>
                            <div className="text-gray-700">Co-founded 2 biotechnology startups</div>
                          </li>
                          <li className="flex gap-2">
                            <div className="text-indigo-600">•</div>
                            <div className="text-gray-700">Research findings cited in 3 FDA guidances</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* CV Section */}
        <section className="py-12 bg-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Need More Information?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              For a comprehensive overview of Dr. Jain's academic achievements, publications, and professional activities, please download his curriculum vitae or get in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <FileText className="mr-2 h-4 w-4" />
                Download Full CV
              </Button>
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact for Collaborations
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Academic;
