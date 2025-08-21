import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Sun, Moon, Star, Clock } from 'lucide-react';

const PanchangContent = () => {
  const { t } = useLanguage();

  const todaysPanchang = {
    tithi: { en: "Shukla Paksha Dashami", hi: "शुक्ल पक्ष दशमी" },
    nakshatra: { en: "Rohini", hi: "रोहिणी" },
    yoga: { en: "Sobhana", hi: "शोभन" },
    karana: { en: "Vishti", hi: "विष्टि" },
    sunrise: "06:45 AM",
    sunset: "06:30 PM",
    moonrise: "02:15 PM",
    moonset: "03:30 AM"
  };

  const muhurat = [
    { name: { en: "Brahma Muhurat", hi: "ब्रह्म मुहूर्त" }, time: "04:30 - 05:15 AM", type: "auspicious" },
    { name: { en: "Abhijit Muhurat", hi: "अभिजित मुहूर्त" }, time: "11:45 AM - 12:30 PM", type: "auspicious" },
    { name: { en: "Godhuli Muhurat", hi: "गोधूलि मुहूर्त" }, time: "06:00 - 06:45 PM", type: "auspicious" },
    { name: { en: "Rahu Kaal", hi: "राहु काल" }, time: "01:30 - 03:00 PM", type: "inauspicious" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative section-spacing bg-gradient-to-br from-vedic-cream via-background to-vedic-cream">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-vedic mb-6">
                <span className="sacred-text">पंचांग</span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl">Daily Panchang</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground devanagari-text mb-8">
                Your daily guide to auspicious timings and celestial influences based on ancient Vedic calculations
              </p>
              <div className="flex items-center justify-center gap-2 text-vedic-saffron">
                <Calendar className="w-6 h-6" />
                <span className="text-xl font-vedic">
                  {new Date().toLocaleDateString('en-IN', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Today's Panchang */}
        <section className="section-spacing">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Panchang Elements */}
              <Card className="vedic-border">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-vedic sacred-text">
                    पंचांग तत्व | Panchang Elements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-lg bg-vedic-cream/50">
                      <h3 className="font-vedic text-vedic-maroon mb-2">तिथि | Tithi</h3>
                      <p className="text-lg devanagari-text">{todaysPanchang.tithi.hi}</p>
                      <p className="text-sm text-muted-foreground">{todaysPanchang.tithi.en}</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-vedic-cream/50">
                      <h3 className="font-vedic text-vedic-maroon mb-2">नक्षत्र | Nakshatra</h3>
                      <p className="text-lg devanagari-text">{todaysPanchang.nakshatra.hi}</p>
                      <p className="text-sm text-muted-foreground">{todaysPanchang.nakshatra.en}</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-vedic-cream/50">
                      <h3 className="font-vedic text-vedic-maroon mb-2">योग | Yoga</h3>
                      <p className="text-lg devanagari-text">{todaysPanchang.yoga.hi}</p>
                      <p className="text-sm text-muted-foreground">{todaysPanchang.yoga.en}</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-vedic-cream/50">
                      <h3 className="font-vedic text-vedic-maroon mb-2">करण | Karana</h3>
                      <p className="text-lg devanagari-text">{todaysPanchang.karana.hi}</p>
                      <p className="text-sm text-muted-foreground">{todaysPanchang.karana.en}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Celestial Timings */}
              <Card className="vedic-border">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-vedic sacred-text">
                    खगोलीय समय | Celestial Timings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-orange-50">
                      <Sun className="w-8 h-8 text-orange-500" />
                      <div>
                        <h3 className="font-vedic text-vedic-maroon">सूर्योदय | Sunrise</h3>
                        <p className="text-lg font-bold">{todaysPanchang.sunrise}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-orange-50">
                      <Sun className="w-8 h-8 text-orange-600" />
                      <div>
                        <h3 className="font-vedic text-vedic-maroon">सूर्यास्त | Sunset</h3>
                        <p className="text-lg font-bold">{todaysPanchang.sunset}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-blue-50">
                      <Moon className="w-8 h-8 text-blue-500" />
                      <div>
                        <h3 className="font-vedic text-vedic-maroon">चन्द्रोदय | Moonrise</h3>
                        <p className="text-lg font-bold">{todaysPanchang.moonrise}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-blue-50">
                      <Moon className="w-8 h-8 text-blue-600" />
                      <div>
                        <h3 className="font-vedic text-vedic-maroon">चन्द्रास्त | Moonset</h3>
                        <p className="text-lg font-bold">{todaysPanchang.moonset}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Muhurat Timings */}
            <Card className="vedic-border">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-vedic sacred-text">
                  मुहूर्त | Auspicious Timings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {muhurat.map((time, index) => (
                    <div 
                      key={index}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        time.type === 'auspicious' 
                          ? 'border-green-200 bg-green-50 hover:border-green-300' 
                          : 'border-red-200 bg-red-50 hover:border-red-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {time.type === 'auspicious' ? (
                          <Star className="w-5 h-5 text-green-600" />
                        ) : (
                          <Clock className="w-5 h-5 text-red-600" />
                        )}
                        <h3 className={`font-vedic ${time.type === 'auspicious' ? 'text-green-700' : 'text-red-700'}`}>
                          {time.name.hi}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{time.name.en}</p>
                      <p className="font-bold text-lg">{time.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Panchang Information */}
        <section className="section-spacing bg-gradient-to-r from-vedic-cream via-vedic-gold/10 to-vedic-cream">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-vedic mb-6 sacred-text">
                Understanding Panchang
              </h2>
              <div className="prose prose-lg max-w-none devanagari-text">
                <p className="text-muted-foreground mb-6">
                  Panchang (पंचांग) is an ancient Vedic calendar that provides essential astronomical and astrological information for daily life. 
                  It consists of five elements (Pancha = five, Anga = limb): Tithi, Nakshatra, Yoga, Karana, and Var (day of the week).
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="p-6 rounded-lg bg-white/80">
                    <h3 className="font-vedic text-vedic-maroon text-xl mb-3">Benefits of Following Panchang</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Choose auspicious times for important activities</li>
                      <li>• Align with natural cosmic rhythms</li>
                      <li>• Enhance spiritual practices and meditation</li>
                      <li>• Plan ceremonies and rituals effectively</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-lg bg-white/80">
                    <h3 className="font-vedic text-vedic-maroon text-xl mb-3">Daily Applications</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Business and financial decisions</li>
                      <li>• Travel planning and journeys</li>
                      <li>• Religious ceremonies and pujas</li>
                      <li>• Marriage and life event planning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const Panchang = () => {
  return (
    <LanguageProvider>
      <PanchangContent />
    </LanguageProvider>
  );
};

export default Panchang;