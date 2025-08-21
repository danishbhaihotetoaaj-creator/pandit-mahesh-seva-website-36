
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLocation } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

const NotFoundContent = () => {
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="text-center max-w-md px-4">
          <div className="text-6xl text-vedic-gold mb-6">ॐ</div>
          <h1 className="text-4xl font-heading mb-4 text-vedic-maroon">404</h1>
          <p className="text-xl mb-6">{t("page_not_found")}</p>
          <p className="mb-8 text-gray-700">
            {t("path_not_exist").replace("{path}", location.pathname)}
          </p>
          <a 
            href="/" 
            className="px-6 py-3 bg-vedic-gold text-white font-medium rounded-full hover:bg-vedic-ochre transition-colors shadow-md"
          >
            {t("return_home")}
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const NotFound = () => {
  return (
    <LanguageProvider>
      <NotFoundContent />
    </LanguageProvider>
  );
};

export default NotFound;
