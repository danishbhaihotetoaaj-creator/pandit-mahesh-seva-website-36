
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const GalleryPreview: React.FC = () => {
  const { t } = useLanguage();
  
  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/929c20b0-871f-444f-8f6f-008a776c54fa.png",
      alt: "Pujan Ceremony",
      title: {
        en: "Vastu Shanti Ceremony",
        hi: "वास्तु शांति समारोह"
      }
    },
    {
      id: 2,
      src: "/lovable-uploads/6e5451af-3b94-4972-88da-843a2b14d8b8.png",
      alt: "Yagya Ritual",
      title: {
        en: "Sacred Yagya",
        hi: "पवित्र यज्ञ"
      }
    },
    {
      id: 3,
      src: "/lovable-uploads/e173b51e-700e-4cad-a17f-9918dee02187.png",
      alt: "Navgraha Puja",
      title: {
        en: "Navgraha Puja",
        hi: "नवग्रह पूजा"
      }
    },
    {
      id: 4,
      src: "/lovable-uploads/00e2df07-0607-4e01-a6b3-b2fb244e2188.png", 
      alt: "Bhagwat Katha",
      title: {
        en: "Sacred Arrangement",
        hi: "पवित्र व्यवस्था"
      }
    }
  ];
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading mb-4">{t("sacred_moments")}</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {t("gallery_description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="overflow-hidden rounded-lg shadow-md aspect-square relative"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-heading text-lg">
                    {image.title[t.language as 'en' | 'hi']}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            to="/gallery"
            className="px-6 py-2 border-2 border-vedic-gold text-vedic-maroon font-medium rounded-full hover:bg-vedic-gold hover:text-white transition-colors"
          >
            {t("view_full_gallery")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
