
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-9xl text-vedic-gold transform -translate-x-1/2 -translate-y-1/2">
          ॐ
        </div>
        <div className="absolute bottom-1/4 right-1/4 text-9xl text-vedic-gold transform translate-x-1/2 translate-y-1/2">
          ॐ
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-3">
            <span className="text-4xl animate-gentle-float text-vedic-gold">ॐ</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading mb-3 gold-text">
            {t("north_indian_pandit")}
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-4 font-medium text-vedic-maroon">
            <span className="decoration-line">
              {t("shastri_acharya")}
            </span>
          </h2>
          
          <p className="text-lg md:text-xl mb-6">
            {t("sanskrit_vishwavidyalaya")}
          </p>
          
          <h3 className="text-xl md:text-2xl lg:text-3xl font-heading mb-8 vedic-border om-symbol">
            {t("acharya_full_name")}
          </h3>
          
          <div className="mt-8 flex justify-center">
            <a 
              href="/contact"
              className="px-6 py-3 bg-vedic-gold text-white font-medium rounded-full hover:bg-vedic-ochre transition-colors shadow-md"
            >
              {t("book_consultation")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
