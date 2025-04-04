
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Media = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">Media</h1>
          <p className="text-lg">Coming soon - Dr. Jain's media appearances and coverage.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Media;
