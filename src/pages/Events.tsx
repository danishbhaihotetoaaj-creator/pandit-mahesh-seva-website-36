
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageProvider } from '@/contexts/LanguageContext';

const EventsContent = () => {
  const { t, language } = useLanguage();
  
  // Sample events data - more comprehensive
  const events = [
    {
      id: 1,
      title: {
        en: "Navratri Special Puja",
        hi: "नवरात्रि विशेष पूजा"
      },
      date: "2023-10-15",
      time: {
        en: "6:00 PM - 9:00 PM",
        hi: "शाम 6:00 - रात 9:00"
      },
      location: {
        en: "Sri Lakshmi Temple, Bangalore",
        hi: "श्री लक्ष्मी मंदिर, बैंगलोर"
      },
      description: {
        en: "Special Navratri celebration with Mata ki Chowki and Durga Puja rituals. The ceremony will include traditional aarti, bhajans, and prasad distribution. Acharya Ji will conduct the ceremony with authentic mantras from Durga Saptashati and other Vedic texts.",
        hi: "माता की चौकी और दुर्गा पूजा अनुष्ठानों के साथ विशेष नवरात्रि उत्सव। समारोह में पारंपरिक आरती, भजन और प्रसाद वितरण शामिल होगा। आचार्य जी दुर्गा सप्तशती और अन्य वैदिक ग्रंथों के प्रामाणिक मंत्रों के साथ समारोह का संचालन करेंगे।"
      },
      vedic_significance: {
        en: "Navratri is a sacred nine-night festival dedicated to Goddess Durga. According to the Markandeya Purana and Devi Mahatmyam, this period commemorates the victory of Goddess Durga over the demon Mahishasura, symbolizing the triumph of good over evil.",
        hi: "नवरात्रि देवी दुर्गा को समर्पित एक पवित्र नौ-रात्रि उत्सव है। मार्कण्डेय पुराण और देवी माहात्म्य के अनुसार, यह अवधि देवी दुर्गा की महिषासुर राक्षस पर विजय का स्मरण करती है, जो अच्छाई की बुराई पर विजय का प्रतीक है।"
      }
    },
    {
      id: 2,
      title: {
        en: "Griha Pravesh Ceremony",
        hi: "गृह प्रवेश समारोह"
      },
      date: "2023-10-28",
      time: {
        en: "8:00 AM - 12:00 PM",
        hi: "सुबह 8:00 - दोपहर 12:00"
      },
      location: {
        en: "Whitefield, Bangalore",
        hi: "व्हाइटफील्ड, बैंगलोर"
      },
      description: {
        en: "House warming ceremony with traditional Vedic rituals and hawan. The ceremony includes Vastu Shanti, Ganesh Puja, and Navagraha Shanti to ensure harmony and prosperity in the new home.",
        hi: "पारंपरिक वैदिक अनुष्ठानों और हवन के साथ गृह प्रवेश समारोह। इस समारोह में नए घर में सद्भाव और समृद्धि सुनिश्चित करने के लिए वास्तु शांति, गणेश पूजा और नवग्रह शांति शामिल है।"
      },
      vedic_significance: {
        en: "The Griha Pravesh ceremony is rooted in the Grihya Sutras and Vastu Shastra. It is performed to purify the new dwelling and invoke the blessings of Vastu Purusha (the deity of structures) for protection and prosperity.",
        hi: "गृह प्रवेश समारोह गृह्य सूत्रों और वास्तु शास्त्र में निहित है। यह नए आवास को शुद्ध करने और सुरक्षा और समृद्धि के लिए वास्तु पुरुष (संरचनाओं के देवता) के आशीर्वाद का आह्वान करने के लिए किया जाता है।"
      }
    },
    {
      id: 3,
      title: {
        en: "Bhagavad Gita Discourse",
        hi: "भगवद गीता प्रवचन"
      },
      date: "2023-11-05",
      time: {
        en: "5:00 PM - 7:00 PM",
        hi: "शाम 5:00 - शाम 7:00"
      },
      location: {
        en: "Community Hall, HSR Layout",
        hi: "कम्युनिटी हॉल, एचएसआर लेआउट"
      },
      description: {
        en: "Weekly discourse on Bhagavad Gita teachings and philosophy. This week's focus will be on Chapter 2: The Yoga of Knowledge, discussing the immortality of the soul and understanding one's dharma.",
        hi: "भगवद गीता के शिक्षाओं और दर्शन पर साप्ताहिक प्रवचन। इस सप्ताह का केंद्र अध्याय 2: ज्ञान योग पर होगा, जिसमें आत्मा की अमरता और अपने धर्म को समझने पर चर्चा की जाएगी।"
      },
      vedic_significance: {
        en: "The Bhagavad Gita is one of the most revered spiritual texts of Hinduism, considered to be the essence of Vedic knowledge. It contains Lord Krishna's teachings to Arjuna on the battlefield of Kurukshetra, covering topics like dharma, karma yoga, bhakti yoga, and the nature of the soul.",
        hi: "भगवद गीता हिंदू धर्म के सबसे पूजनीय आध्यात्मिक ग्रंथों में से एक है, जिसे वैदिक ज्ञान का सार माना जाता है। इसमें कुरुक्षेत्र के युद्धक्षेत्र पर अर्जुन को भगवान कृष्ण की शिक्षाएँ हैं, जिनमें धर्म, कर्म योग, भक्ति योग और आत्मा की प्रकृति जैसे विषय शामिल हैं।"
      }
    },
    {
      id: 4,
      title: {
        en: "Satyanarayan Katha & Puja",
        hi: "सत्यनारायण कथा और पूजा"
      },
      date: "2023-11-12",
      time: {
        en: "4:00 PM - 7:30 PM",
        hi: "शाम 4:00 - रात 7:30"
      },
      location: {
        en: "Shree Vishnu Temple, Indiranagar",
        hi: "श्री विष्णु मंदिर, इंदिरानगर"
      },
      description: {
        en: "Monthly Satyanarayan Puja and Katha ceremony. The sacred ritual includes recitation of the Satyanarayan Katha, followed by aarti and prasad distribution.",
        hi: "मासिक सत्यनारायण पूजा और कथा समारोह। इस पवित्र अनुष्ठान में सत्यनारायण कथा का पाठ शामिल है, उसके बाद आरती और प्रसाद वितरण होता है।"
      },
      vedic_significance: {
        en: "The Satyanarayan Puja is dedicated to Lord Vishnu in his form as the lord of truth. The ritual is described in the Skanda Purana and is performed for prosperity, success, and spiritual purification. It is believed that this puja fulfills all righteous desires when performed with devotion.",
        hi: "सत्यनारायण पूजा भगवान विष्णु को उनके सत्य के स्वामी के रूप में समर्पित है। यह अनुष्ठान स्कंद पुराण में वर्णित है और समृद्धि, सफलता और आध्यात्मिक शुद्धि के लिए किया जाता है। यह माना जाता है कि भक्ति के साथ किए जाने पर यह पूजा सभी धार्मिक इच्छाओं को पूरा करती है।"
      }
    }
  ];
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'hi' ? 'hi-IN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-heading mb-4">{t("upcoming_events")}</h1>
            <div className="w-20 h-1 bg-vedic-gold mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              {t("events_description")}
            </p>
          </div>
          
          <div className="space-y-10">
            {events.map((event) => (
              <div 
                key={event.id}
                id={`event-${event.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-vedic-gold/20"
              >
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-heading mb-4 text-vedic-maroon">
                    {event.title[language as 'en' | 'hi']}
                  </h2>
                  
                  <div className="flex flex-wrap gap-6 mb-4">
                    <div className="flex items-center text-gray-700">
                      <Calendar size={18} className="mr-2 text-vedic-gold" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <Clock size={18} className="mr-2 text-vedic-gold" />
                      <span>{event.time[language as 'en' | 'hi']}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-700">
                      <MapPin size={18} className="mr-2 text-vedic-gold" />
                      <span>{event.location[language as 'en' | 'hi']}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      {event.description[language as 'en' | 'hi']}
                    </p>
                    
                    <div className="bg-vedic-gold/10 p-4 rounded-lg border border-vedic-gold/20">
                      <h3 className="font-medium mb-2">
                        {language === 'en' ? "Vedic Significance:" : "वैदिक महत्व:"}
                      </h3>
                      <p className="text-gray-700 text-sm italic">
                        {event.vedic_significance[language as 'en' | 'hi']}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex">
                    <a 
                      href="/contact"
                      className="inline-block px-6 py-2 bg-vedic-gold text-white font-medium rounded-full hover:bg-vedic-ochre transition-colors"
                    >
                      {language === 'en' ? "Register for Event" : "कार्यक्रम के लिए पंजीकरण करें"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="mb-6">
              {language === 'en' ? 
                "For private ceremonies and consultations, please contact Acharya Ji directly." : 
                "निजी समारोहों और परामर्श के लिए, कृपया सीधे आचार्य जी से संपर्क करें।"}
            </p>
            <a 
              href="/contact"
              className="px-6 py-3 bg-vedic-maroon text-white font-medium rounded-full hover:bg-vedic-ochre transition-colors shadow-md"
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

const Events = () => {
  return (
    <LanguageProvider>
      <EventsContent />
    </LanguageProvider>
  );
};

export default Events;
