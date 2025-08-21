
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

const ServicesContent = () => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      id: "vastu_shanti",
      name: {
        en: t("vastu_shanti"),
        hi: t("vastu_shanti")
      },
      shortDesc: {
        en: t("vastu_shanti_short"),
        hi: t("vastu_shanti_short")
      },
      fullDesc: {
        en: "Vastu Shanti is an ancient Vedic ritual to neutralize negative energies and enhance positive vibrations in living or working spaces. The ceremony includes mantra chanting, kalash sthapana (sacred water pot installation), havan (fire ritual), and specific offerings to planetary deities. Acharya Mahesh Pandey Ji performs this ceremony with complete authenticity as prescribed in Garuda Purana and Matsya Purana, ensuring proper alignment of cosmic energies for prosperity and well-being.",
        hi: "वास्तु शांति रहने या काम करने वाली जगहों में नकारात्मक ऊर्जाओं को निष्प्रभावित करने और सकारात्मक कंपनों को बढ़ाने के लिए एक प्राचीन वैदिक अनुष्ठान है। इस समारोह में मंत्र जाप, कलश स्थापना, हवन (अग्नि अनुष्ठान), और ग्रह देवताओं को विशिष्ट अर्पण शामिल हैं। आचार्य महेश पांडेय जी इस समारोह को गरुड़ पुराण और मत्स्य पुराण में निर्धारित पूर्ण प्रामाणिकता के साथ करते हैं, समृद्धि और कल्याण के लिए ब्रह्मांडीय ऊर्जाओं के उचित संरेखण सुनिश्चित करते हैं।"
      },
      mantras: [
        {
          text: "ॐ वास्तोष्पते प्रति जानीह्यस्मान् स्वावेशो अनमीवो भवा न:। यत्त्वेमहे प्रति तन्नो जुषस्व शन्नो भव द्विपदे शं चतुष्पदे॥",
          transliteration: "Om Vāstoṣpate prati jānīhyasmān svāveśo anamīvo bhavā naḥ। Yattvemahe prati tanno juṣasva śanno bhava dvipade śaṁ catuṣpade॥",
          meaning: {
            en: "Oh Lord of the dwelling place, please recognize us. Enter our home and remove diseases. The things we request from you, please fulfill those desires. Be auspicious for our bipeds (humans) and quadrupeds (animals).",
            hi: "हे निवास स्थान के स्वामी, कृपया हमें पहचानिए। हमारे घर में प्रवेश करें और बीमारियों को दूर करें। जिन चीजों के लिए हम आपसे अनुरोध करते हैं, कृपया उन इच्छाओं को पूरा करें। हमारे द्विपाद (मनुष्य) और चतुष्पाद (पशु) के लिए शुभ बनें।"
          }
        }
      ]
    },
    {
      id: "griha_pravesh",
      name: {
        en: t("griha_pravesh"),
        hi: t("griha_pravesh")
      },
      shortDesc: {
        en: t("griha_pravesh_short"),
        hi: t("griha_pravesh_short")
      },
      fullDesc: {
        en: "Griha Pravesh is a sacred house warming ceremony performed before entering a new home. This ceremony purifies the space and invokes divine blessings for prosperity and happiness. The ritual includes Ganesh Puja, Vastu Puja, Nav Graha Shanti, and culminates with a havan (fire ceremony). Acharya Ji performs the complete ceremony following authentic Vedic traditions as mentioned in the Apastamba Grihya Sutra and Yajurveda, ensuring all steps are performed correctly for maximum auspiciousness.",
        hi: "गृह प्रवेश एक पवित्र गृह प्रवेश समारोह है जो नए घर में प्रवेश करने से पहले किया जाता है। यह समारोह स्थान को शुद्ध करता है और समृद्धि और खुशी के लिए दिव्य आशीर्वाद का आह्वान करता है। अनुष्ठान में गणेश पूजा, वास्तु पूजा, नवग्रह शांति शामिल है और हवन (अग्नि समारोह) के साथ समाप्त होता है। आचार्य जी अपस्तंब गृह्य सूत्र और यजुर्वेद में उल्लिखित प्रामाणिक वैदिक परंपराओं का पालन करते हुए पूरा समारोह करते हैं, यह सुनिश्चित करते हुए कि अधिकतम शुभता के लिए सभी चरण सही ढंग से किए जाएं।"
      },
      mantras: [
        {
          text: "ॐ गृहेभ्यो गृहपतिभ्यश्च वो नमो नमः।",
          transliteration: "Om Gṛhebhyo Gṛhapatibhyaśca Vo Namo Namaḥ।",
          meaning: {
            en: "Om, I bow down to the house and to the lord of the house.",
            hi: "ॐ, मैं घर और घर के स्वामी को नमन करता हूँ।"
          }
        }
      ]
    },
    {
      id: "office_opening",
      name: {
        en: t("office_opening"),
        hi: t("office_opening")
      },
      shortDesc: {
        en: t("office_opening_short"),
        hi: t("office_opening_short")
      },
      fullDesc: {
        en: "Office/Shop Opening ceremony is an auspicious ritual performed to invite divine blessings and prosperity for a new business venture. The ceremony includes Ganesh Puja, Lakshmi-Narayan Puja, and Vastu Puja, followed by a sacred havan. Acharya Mahesh Pandey Ji performs these rituals following authentic Vedic procedures as prescribed in the Shukla Yajurveda and various Dharmashastra texts. The ceremony is crucial for removing obstacles and ensuring business success through divine grace.",
        hi: "कार्यालय/दुकान उद्घाटन समारोह एक शुभ अनुष्ठान है जो नए व्यापारिक उद्यम के लिए दिव्य आशीर्वाद और समृद्धि को आमंत्रित करने के लिए किया जाता है। इस समारोह में गणेश पूजा, लक्ष्मी-नारायण पूजा और वास्तु पूजा शामिल है, उसके बाद पवित्र हवन होता है। आचार्य महेश पांडेय जी शुक्ल यजुर्वेद और विभिन्न धर्मशास्त्र ग्रंथों में निर्धारित प्रामाणिक वैदिक प्रक्रियाओं का पालन करते हुए इन अनुष्ठानों को करते हैं। यह समारोह दिव्य कृपा के माध्यम से बाधाओं को दूर करने और व्यापारिक सफलता सुनिश्चित करने के लिए महत्वपूर्ण है।"
      },
      mantras: [
        {
          text: "ॐ श्रीं ह्रीं क्लीं महालक्ष्म्यै नमः॥",
          transliteration: "Om Śrīṁ Hrīṁ Klīṁ Mahālakṣmyai Namaḥ॥",
          meaning: {
            en: "Om, I bow to Goddess Mahalakshmi, the divine energy of wealth and prosperity.",
            hi: "ॐ, मैं धन और समृद्धि की दिव्य शक्ति देवी महालक्ष्मी को नमन करता हूँ।"
          }
        }
      ]
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-heading mb-4">{t("our_services")}</h1>
            <div className="w-20 h-1 bg-vedic-gold mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              {t("services_description")}
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto mt-4 italic">
              {language === 'en' ? 
                "All rituals are performed with authentic Vedic mantras, following scriptures like Rigveda, Yajurveda, Samaveda, Atharvaveda, and various Grihya Sutras and Dharmashastra texts. Acharya Ji ensures all ceremonies maintain the sanctity and precision as prescribed in our ancient texts." : 
                "सभी अनुष्ठान प्रामाणिक वैदिक मंत्रों के साथ, ऋग्वेद, यजुर्वेद, सामवेद, अथर्ववेद और विभिन्न गृह्य सूत्रों और धर्मशास्त्र ग्रंथों जैसे शास्त्रों का पालन करते हुए किए जाते हैं। आचार्य जी सुनिश्चित करते हैं कि सभी समारोह हमारे प्राचीन ग्रंथों में निर्धारित पवित्रता और सटीकता बनाए रखें।"}
            </p>
          </div>
          
          <div className="space-y-16">
            {services.map((service) => (
              <div 
                key={service.id} 
                id={service.id}
                className="service-detail vedic-border p-8 bg-white bg-opacity-70"
              >
                <h2 className="text-2xl font-heading mb-4 text-vedic-maroon">
                  {service.name[language as 'en' | 'hi']}
                </h2>
                
                <p className="mb-6 text-gray-700">
                  {service.fullDesc[language as 'en' | 'hi']}
                </p>
                
                <div className="bg-vedic-gold/10 p-6 rounded-lg border border-vedic-gold/20 mb-6">
                  <h3 className="text-lg font-heading mb-3">
                    {language === 'en' ? "Sacred Mantras Used" : "प्रयुक्त पवित्र मंत्र"}
                  </h3>
                  
                  {service.mantras.map((mantra, idx) => (
                    <div key={idx} className="mb-4">
                      <div className="font-sanskrit text-lg mb-2">{mantra.text}</div>
                      <div className="text-sm text-gray-700 italic mb-2">{mantra.transliteration}</div>
                      <div className="text-sm">
                        <strong>{language === 'en' ? "Meaning: " : "अर्थ: "}</strong>
                        {mantra.meaning[language as 'en' | 'hi']}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center">
                  <a 
                    href="/contact"
                    className="px-6 py-2 border-2 border-vedic-gold text-vedic-maroon font-medium rounded-full hover:bg-vedic-gold hover:text-white transition-colors"
                  >
                    {language === 'en' ? "Book this Service" : "यह सेवा बुक करें"}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="mb-6 text-xl">
              {language === 'en' ? 
                "For detailed information about other services or to discuss your specific requirements, please contact Acharya Ji directly." : 
                "अन्य सेवाओं के बारे में विस्तृत जानकारी के लिए या अपनी विशिष्ट आवश्यकताओं पर चर्चा करने के लिए, कृपया सीधे आचार्य जी से संपर्क करें।"}
            </p>
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

const Services = () => {
  return (
    <LanguageProvider>
      <ServicesContent />
    </LanguageProvider>
  );
};

export default Services;
