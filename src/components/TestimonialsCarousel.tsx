
import React from 'react';
import { TYPOGRAPHY, SPACING, COLORS } from '@/constants/styles';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsCarousel = () => {
  const industryTestimonials = [
    {
      quote: "Dr. Jain's proprietary formulation approach solved our bioavailability challenges for a compound that had previously failed in Phase II. His expertise directly enabled us to resurrect a $200M drug development program.",
      author: "Dr. Rakesh Verma",
      title: "Chief Scientific Officer",
      company: "Leading Indian Pharmaceutical",
      industry: "pharma",
      impact: "Saved $200M drug program"
    },
    {
      quote: "The bioprocess optimization techniques developed in our collaboration with Dr. Jain increased our manufacturing yield by 55% while reducing production costs by 40%. This resulted in $4.5M annual savings.",
      author: "Ananya Mehta",
      title: "VP of Manufacturing",
      company: "Global Biotech Company",
      industry: "biotech",
      impact: "$4.5M annual savings"
    },
    {
      quote: "Working with Dr. Jain's team on our novel drug delivery platform accelerated our development timeline by 14 months, giving us a critical competitive advantage in a rapidly evolving market.",
      author: "Dr. Sanjay Gupta",
      title: "Head of R&D",
      company: "Medical Device Innovator",
      industry: "medical",
      impact: "14 months faster to market"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-bio-light-gray to-white py-16 md:py-24">
      <div className={SPACING.container}>
        <div className="text-center mb-16">
          <h2 className={`${TYPOGRAPHY.h2} text-bio-navy mb-4`}>
            Industry <span className="text-bio-blue">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from pharmaceutical and biotech executives who have collaborated with Dr. Jain.
          </p>
        </div>
        
        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {industryTestimonials.map((testimonial, i) => (
              <CarouselItem key={i}>
                <div className={`bg-gradient-to-br ${COLORS.industry[testimonial.industry as keyof typeof COLORS.industry]} p-1 rounded-xl`}>
                  <div className="bg-white p-8 md:p-10 rounded-lg h-full flex flex-col">
                    <div className="mb-6">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0002 19.9998C14.0002 17.7907 15.791 15.9998 18.0002 15.9998C20.2093 15.9998 22.0002 17.7907 22.0002 19.9998C22.0002 22.209 20.2093 23.9998 18.0002 23.9998C17.5718 23.9998 17.1541 23.9295 16.7587 23.797C17.233 25.1011 18.5132 25.9998 20.0002 25.9998H20.5002C21.0525 25.9998 21.5002 26.4475 21.5002 26.9998C21.5002 27.5521 21.0525 27.9998 20.5002 27.9998H20.0002C17.9464 27.9998 16.1028 26.844 15.1313 25.0984C14.4359 23.8571 14.0002 22.1631 14.0002 19.9998Z" fill="#0EA5E9"/>
                        <path d="M26.0002 19.9998C26.0002 17.7907 27.791 15.9998 30.0002 15.9998C32.2093 15.9998 34.0002 17.7907 34.0002 19.9998C34.0002 22.209 32.2093 23.9998 30.0002 23.9998C29.5718 23.9998 29.1541 23.9295 28.7587 23.797C29.233 25.1011 30.5132 25.9998 32.0002 25.9998H32.5002C33.0525 25.9998 33.5002 26.4475 33.5002 26.9998C33.5002 27.5521 33.0525 27.9998 32.5002 27.9998H32.0002C29.9464 27.9998 28.1028 26.844 27.1313 25.0984C26.4359 23.8571 26.0002 22.1631 26.0002 19.9998Z" fill="#0EA5E9"/>
                      </svg>
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl text-gray-800 font-light italic mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="mt-auto">
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div>
                          <div className="font-semibold text-bio-navy text-lg">{testimonial.author}</div>
                          <div className="text-gray-600">{testimonial.title}, {testimonial.company}</div>
                        </div>
                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full font-medium">
                          {testimonial.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious className="relative inset-auto translate-y-0" />
            <CarouselNext className="relative inset-auto translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
