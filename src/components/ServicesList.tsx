
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const getServiceSymbol = (service: string): string => {
  const symbols: { [key: string]: string } = {
    // Vastu & Home
    vastu_shanti: "🏛️",
    griha_pravesh: "🚪",
    office_opening: "🏢", 
    factory_pujan: "🏭",
    bhoomi_pujan: "🌍",
    
    // Life Ceremonies
    jatakarma_sanskar: "👶",
    naamkaran_sanskar: "📝",
    mundan_sanskar: "✂️",
    anna_prashan: "🍼",
    upanayana_sanskar: "🧵",
    vidyarambh_sanskar: "📚",
    vivah_sanskar: "💒",
    antim_sanskar: "🕯️",
    
    // Deity Worship
    ganesh_pooja: "🐘",
    shiv_pooja: "🔱",
    durga_pooja: "⚡",
    lakshmi_pooja: "💰",
    saraswati_pooja: "🎵",
    hanuman_pooja: "💪",
    rudrabhishek: "🌊",
    
    // Special Rituals
    satyanarayan_vrat: "🌟",
    navgraha_shanti: "🌕",
    mool_shanti: "☮️",
    kalash_sthapana: "🏺",
    hawan_yagya: "🔥",
    rudra_homa: "🌋",
    chandi_homa: "⚔️",
    ayushya_homa: "🌿",
    
    // Chanting
    mahamrityunjaya_jap: "💎",
    gayatri_jap: "☀️",
    vishnu_sahasranaam: "🐚",
    shiv_chalisa: "📿",
    
    // Festivals
    shivaratri_pooja: "🌙",
    diwali_pooja: "🪔",
    karva_chauth: "🌛",
    
    // Ancestral
    shradh_paksh: "🙏",
    tarpan_ceremony: "💧"
  };
  
  return symbols[service] || "ॐ";
};

const ServicesList: React.FC = () => {
  const { t } = useLanguage();
  
  const serviceCategories = [
    {
      title: "वास्तु एवं गृह संस्कार", // Vastu & Home Ceremonies
      titleEn: "Vastu & Home Ceremonies", 
      symbol: "🏡",
      services: ["vastu_shanti", "griha_pravesh", "office_opening", "factory_pujan", "bhoomi_pujan"]
    },
    {
      title: "जीवन संस्कार", // Life Ceremonies
      titleEn: "Life Ceremonies",
      symbol: "🌱", 
      services: ["jatakarma_sanskar", "naamkaran_sanskar", "mundan_sanskar", "anna_prashan", "upanayana_sanskar", "vidyarambh_sanskar", "vivah_sanskar", "antim_sanskar"]
    },
    {
      title: "देवी देवता पूजा", // Deity Worship
      titleEn: "Deity Worship",
      symbol: "🙏",
      services: ["ganesh_pooja", "shiv_pooja", "durga_pooja", "lakshmi_pooja", "saraswati_pooja", "hanuman_pooja", "rudrabhishek"]
    },
    {
      title: "विशेष अनुष्ठान", // Special Rituals
      titleEn: "Special Rituals", 
      symbol: "🔥",
      services: ["satyanarayan_vrat", "navgraha_shanti", "mool_shanti", "kalash_sthapana", "hawan_yagya", "rudra_homa", "chandi_homa", "ayushya_homa"]
    },
    {
      title: "जप एवं पाठ", // Chanting & Recitation
      titleEn: "Chanting & Recitation",
      symbol: "📿",
      services: ["mahamrityunjaya_jap", "gayatri_jap", "vishnu_sahasranaam", "shiv_chalisa"]
    },
    {
      title: "त्योहार एवं व्रत", // Festivals & Fasts
      titleEn: "Festivals & Fasts",
      symbol: "🎊",
      services: ["shivaratri_pooja", "diwali_pooja", "karva_chauth"]
    },
    {
      title: "पितृ कर्म", // Ancestral Rites
      titleEn: "Ancestral Rites",
      symbol: "🕯️",
      services: ["shradh_paksh", "tarpan_ceremony"]
    }
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
        
        <div className="space-y-12">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <div className="text-center mb-8">
                <div className="text-4xl mb-3">{category.symbol}</div>
                <h3 className="text-2xl font-vedic mb-2 sacred-text">
                  {category.titleEn}
                </h3>
                <h4 className="text-xl font-devanagari text-vedic-maroon">
                  {category.title}
                </h4>
                <div className="w-20 h-1 bg-gradient-to-r from-vedic-gold to-vedic-saffron mx-auto mt-3"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex} 
                    className="group service-card animate-fade-in hover:shadow-2xl transition-all duration-500"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (serviceIndex * 0.05)}s` }}
                  >
                    <div className="relative overflow-hidden rounded-t-xl mb-4 bg-gradient-to-br from-vedic-cream to-vedic-gold/20 h-32 flex items-center justify-center">
                      <div className="text-vedic-gold text-4xl animate-gentle-float group-hover:scale-110 transition-transform duration-300">
                        {getServiceSymbol(service)}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-vedic-gold/10 to-transparent"></div>
                    </div>
                    
                    <div className="px-2">
                      <h4 className="font-heading text-lg mb-3 text-vedic-maroon group-hover:text-vedic-saffron transition-colors">
                        {t(service)}
                      </h4>
                      <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                        {t(`${service}_short`)}
                      </p>
                      <a 
                        href={`/services#${service}`} 
                        className="inline-flex items-center text-vedic-ochre hover:text-vedic-maroon font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                      >
                        {t("learn_more")} 
                        <span className="ml-1 group-hover:ml-2 transition-all duration-300">→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
