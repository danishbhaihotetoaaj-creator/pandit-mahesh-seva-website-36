
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

const GalleryContent = () => {
  const { t, language } = useLanguage();
  
  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/929c20b0-871f-444f-8f6f-008a776c54fa.png",
      alt: "Pujan Ceremony",
      title: {
        en: "Vastu Shanti Ceremony",
        hi: "वास्तु शांति समारोह"
      },
      description: {
        en: "Complete Vastu Shanti ritual performed with authentic Vedic mantras and traditional fire ceremony to harmonize the energies in a new home.",
        hi: "प्रामाणिक वैदिक मंत्रों और पारंपरिक अग्नि समारोह के साथ नए घर में ऊर्जाओं को सामंजस्यपूर्ण बनाने के लिए पूर्ण वास्तु शांति अनुष्ठान।"
      }
    },
    {
      id: 2,
      src: "/lovable-uploads/6e5451af-3b94-4972-88da-843a2b14d8b8.png",
      alt: "Yagya Ritual",
      title: {
        en: "Sacred Yagya",
        hi: "पवित्र यज्ञ"
      },
      description: {
        en: "Sacred havan ceremony conducted as per Vedic scriptures with samidha (sacred wood), ghee, and specific herbs to invoke divine blessings.",
        hi: "समिधा (पवित्र लकड़ी), घी और विशिष्ट जड़ी-बूटियों के साथ दिव्य आशीर्वाद का आह्वान करने के लिए वैदिक शास्त्रों के अनुसार आयोजित पवित्र हवन समारोह।"
      }
    },
    {
      id: 3,
      src: "/lovable-uploads/e173b51e-700e-4cad-a17f-9918dee02187.png",
      alt: "Navgraha Puja",
      title: {
        en: "Navgraha Puja",
        hi: "नवग्रह पूजा"
      },
      description: {
        en: "Complete Navgraha (nine planets) worship performed to pacify planetary influences and remove obstacles as prescribed in ancient Vedic astrology.",
        hi: "प्राचीन वैदिक ज्योतिष में निर्धारित ग्रह प्रभावों को शांत करने और बाधाओं को दूर करने के लिए पूर्ण नवग्रह (नौ ग्रह) पूजा की गई।"
      }
    },
    {
      id: 4,
      src: "/lovable-uploads/00e2df07-0607-4e01-a6b3-b2fb244e2188.png", 
      alt: "Bhagwat Katha",
      title: {
        en: "Sacred Arrangement",
        hi: "पवित्र व्यवस्था"
      },
      description: {
        en: "Elaborate arrangement for a traditional puja ceremony with all Vedic essentials including kalash, flowers, and sacred items as per traditional scriptures.",
        hi: "पारंपरिक शास्त्रों के अनुसार कलश, फूल और पवित्र वस्तुओं सहित सभी वैदिक आवश्यकताओं के साथ पारंपरिक पूजा समारोह के लिए विस्तृत व्यवस्था।"
      }
    },
    {
      id: 5,
      src: "/lovable-uploads/572cf60f-520d-4e68-8203-2c524556d38b.png",
      alt: "Acharya Mahesh Pandey Ji",
      title: {
        en: "Acharya Mahesh Pandey Ji",
        hi: "आचार्य महेश पांडेय जी"
      },
      description: {
        en: "Acharya Ji performing sacred rituals with complete devotion and authentic Vedic knowledge passed down through generations.",
        hi: "आचार्य जी पीढ़ियों से चली आ रही पूर्ण भक्ति और प्रामाणिक वैदिक ज्ञान के साथ पवित्र अनुष्ठान कर रहे हैं।"
      }
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-heading mb-4">{t("sacred_moments")}</h1>
            <div className="w-20 h-1 bg-vedic-gold mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8">
              {t("gallery_description")}
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto italic">
              {language === 'en' ? 
                "All ceremonies are performed with authentic Vedic mantras and rituals as prescribed in ancient Sanskrit texts like the Yajurveda, Atharvaveda, and various Grihya Sutras." : 
                "सभी समारोह प्राचीन संस्कृत ग्रंथों जैसे यजुर्वेद, अथर्ववेद और विभिन्न गृह्य सूत्रों में निर्धारित प्रामाणिक वैदिक मंत्रों और अनुष्ठानों के साथ किए जाते हैं।"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl mb-3 text-vedic-maroon">
                    {image.title[language as 'en' | 'hi']}
                  </h3>
                  <p className="text-gray-700">
                    {image.description[language as 'en' | 'hi']}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="mb-6 text-xl">
              {language === 'en' ? 
                "For more sacred ceremonies and services, please contact Acharya Ji" : 
                "अधिक पवित्र समारोहों और सेवाओं के लिए, कृपया आचार्य जी से संपर्क करें"}
            </div>
            <a 
              href="/contact"
              className="px-6 py-3 bg-vedic-gold text-white font-medium rounded-full hover:bg-vedic-ochre transition-colors shadow-md"
            >
              {t("contact_us")}
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const Gallery = () => {
  return (
    <LanguageProvider>
      <GalleryContent />
    </LanguageProvider>
  );
};

export default Gallery;
