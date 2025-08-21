
import React from 'react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EventsPreview: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Sample events data
  const events = [
    {
      id: 1,
      title: {
        en: "Navratri Special Puja",
        hi: "नवरात्रि विशेष पूजा"
      },
      date: "2023-10-15",
      location: {
        en: "Sri Lakshmi Temple, Bangalore",
        hi: "श्री लक्ष्मी मंदिर, बैंगलोर"
      },
      description: {
        en: "Special Navratri celebration with Mata ki Chowki and Durga Puja rituals.",
        hi: "माता की चौकी और दुर्गा पूजा अनुष्ठानों के साथ विशेष नवरात्रि उत्सव।"
      }
    },
    {
      id: 2,
      title: {
        en: "Griha Pravesh Ceremony",
        hi: "गृह प्रवेश समारोह"
      },
      date: "2023-10-28",
      location: {
        en: "Whitefield, Bangalore",
        hi: "व्हाइटफील्ड, बैंगलोर"
      },
      description: {
        en: "House warming ceremony with traditional Vedic rituals and hawan.",
        hi: "पारंपरिक वैदिक अनुष्ठानों और हवन के साथ गृह प्रवेश समारोह।"
      }
    },
    {
      id: 3,
      title: {
        en: "Bhagavad Gita Discourse",
        hi: "भगवद गीता प्रवचन"
      },
      date: "2023-11-05",
      location: {
        en: "Community Hall, HSR Layout",
        hi: "कम्युनिटी हॉल, एचएसआर लेआउट"
      },
      description: {
        en: "Weekly discourse on Bhagavad Gita teachings and philosophy.",
        hi: "भगवद गीता के शिक्षाओं और दर्शन पर साप्ताहिक प्रवचन।"
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading mb-4">{t("upcoming_events")}</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {t("events_description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-vedic-gold/20 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="bg-vedic-gold/10 p-4 border-b border-vedic-gold/20">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg">
                    {event.title[language as 'en' | 'hi']}
                  </h3>
                  <div className="flex items-center text-vedic-maroon text-sm">
                    <Calendar size={16} className="mr-1" />
                    {formatDate(event.date)}
                  </div>
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  {event.location[language as 'en' | 'hi']}
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-700">
                  {event.description[language as 'en' | 'hi']}
                </p>
                <a 
                  href={`/events#event-${event.id}`}
                  className="inline-block mt-3 text-vedic-ochre hover:text-vedic-maroon font-medium"
                >
                  {t("view_details")} →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="/events"
            className="px-6 py-2 border-2 border-vedic-gold text-vedic-maroon font-medium rounded-full hover:bg-vedic-gold hover:text-white transition-colors"
          >
            {t("view_all_events")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;
