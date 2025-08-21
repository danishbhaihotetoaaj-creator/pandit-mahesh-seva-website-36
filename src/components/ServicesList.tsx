
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesList: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    "vastu_shanti",
    "griha_pravesh",
    "office_opening",
    "factory_pujan",
    "bhoomi_pujan",
    "naamkaran_sanskar",
    "rudrabhishek",
    "vivah_sanskar",
    "mool_shanti",
    "anna_prashan",
    "other_vedic_pujas"
  ];
  
  return (
    <section className="py-16 bg-white bg-opacity-70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading mb-4">{t("our_services")}</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {t("services_description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-vedic-gold text-2xl mb-3">ॐ</div>
              <h3 className="font-heading text-lg mb-2">{t(service)}</h3>
              <p className="text-sm text-gray-700">
                {t(`${service}_short`)}
              </p>
              <a 
                href={`/services#${service}`} 
                className="inline-block mt-3 text-vedic-ochre hover:text-vedic-maroon font-medium text-sm"
              >
                {t("learn_more")} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
