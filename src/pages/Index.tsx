
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServicesList from '@/components/ServicesList';
import EventsPreview from '@/components/EventsPreview';
import GalleryPreview from '@/components/GalleryPreview';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <ServicesList />
          <EventsPreview />
          <GalleryPreview />
          <Testimonials />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
