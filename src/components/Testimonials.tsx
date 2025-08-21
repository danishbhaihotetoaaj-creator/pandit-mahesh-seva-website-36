
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();
  
  const testimonials = [
    {
      id: 1,
      name: {
        en: "Rajesh Kumar",
        hi: "राजेश कुमार"
      },
      location: {
        en: "Bangalore",
        hi: "बैंगलोर"
      },
      text: {
        en: "Acharya Mahesh Pandey Ji conducted our house warming ceremony with such devotion and detailed explanation of each ritual. We felt truly blessed.",
        hi: "आचार्य महेश पांडे जी ने हमारे गृह प्रवेश समारोह को इतनी भक्ति और प्रत्येक अनुष्ठान के विस्तृत विवरण के साथ आयोजित किया। हम वास्तव में धन्य महसूस करते हैं।"
      }
    },
    {
      id: 2,
      name: {
        en: "Priya Sharma",
        hi: "प्रिया शर्मा"
      },
      location: {
        en: "Mysore",
        hi: "मैसूर"
      },
      text: {
        en: "We have been attending Pandit Ji's Bhagwat Katha for years. His knowledge of the scriptures and ability to explain complex concepts in simple terms is extraordinary.",
        hi: "हम वर्षों से पंडित जी की भागवत कथा में भाग ले रहे हैं। शास्त्रों का उनका ज्ञान और जटिल अवधारणाओं को सरल शब्दों में समझाने की क्षमता असाधारण है।"
      }
    },
    {
      id: 3,
      name: {
        en: "Suresh and Lakshmi",
        hi: "सुरेश और लक्ष्मी"
      },
      location: {
        en: "Chennai",
        hi: "चेन्नई"
      },
      text: {
        en: "Our wedding ceremony performed by Acharya Ji was so meaningful. He took time to explain the significance of each ritual to both families. Highly recommended!",
        hi: "आचार्य जी द्वारा किया गया हमारा विवाह समारोह इतना सार्थक था। उन्होंने दोनों परिवारों को प्रत्येक अनुष्ठान के महत्व को समझाने के लिए समय निकाला। अत्यधिक अनुशंसित!"
      }
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-b from-white/40 to-vedic-gold/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading mb-4">{t("devotee_experiences")}</h2>
          <div className="w-20 h-1 bg-vedic-gold mx-auto mb-4"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {t("testimonials_description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-md border border-vedic-gold/20 relative"
            >
              <div className="text-4xl text-vedic-gold absolute -top-4 left-4">"</div>
              <p className="text-gray-700 mb-6 pt-4">
                {testimonial.text[language as 'en' | 'hi']}
              </p>
              <div className="border-t border-vedic-gold/20 pt-4">
                <p className="font-semibold">{testimonial.name[language as 'en' | 'hi']}</p>
                <p className="text-sm text-gray-600">{testimonial.location[language as 'en' | 'hi']}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
