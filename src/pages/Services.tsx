
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
      category: "Vastu & Home Ceremonies",
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
      ],
      symbol: "🏛️"
    },
    {
      id: "griha_pravesh",
      category: "Vastu & Home Ceremonies",
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
      ],
      symbol: "🚪"
    },
    {
      id: "ganesh_pooja",
      category: "Deity Worship",
      name: {
        en: t("ganesh_pooja"),
        hi: t("ganesh_pooja")
      },
      shortDesc: {
        en: t("ganesh_pooja_short"),
        hi: t("ganesh_pooja_short")
      },
      fullDesc: {
        en: "Lord Ganesha worship is performed at the beginning of any auspicious ceremony to remove obstacles and ensure success. The comprehensive puja includes 16 steps (Shodashopachara) with proper mantras, offerings of modak, durva grass, and red flowers. Acharya Ji follows the traditional Ganapati Atharvashirsha and Mudgala Purana procedures for maximum divine grace.",
        hi: "भगवान गणेश की पूजा किसी भी शुभ समारोह की शुरुआत में विघ्नों को दूर करने और सफलता सुनिश्चित करने के लिए की जाती है। व्यापक पूजा में उचित मंत्रों, मोदक, दूर्वा घास और लाल फूलों की पेशकश के साथ 16 चरण (षोडशोपचार) शामिल हैं। आचार्य जी अधिकतम दिव्य कृपा के लिए पारंपरिक गणपति अथर्वशीर्ष और मुद्गल पुराण प्रक्रियाओं का पालन करते हैं।"
      },
      mantras: [
        {
          text: "ॐ गं गणपतये नमः। वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
          transliteration: "Om Gaṁ Gaṇapataye Namaḥ। Vakratuṇḍa mahākāya sūryakoṭi samaprabha। Nirvighnaṁ kuru me deva sarvakāryeṣu sarvadā॥",
          meaning: {
            en: "Om, salutations to Lord Ganesha. O curved-trunk, mighty-bodied one, with the brilliance of a million suns, please remove all obstacles from my endeavors always.",
            hi: "ॐ, भगवान गणेश को नमस्कार। हे वक्रतुंड, महाकाय, करोड़ों सूर्य की तरह तेजस्वी, हे देव, मेरे सभी कार्यों में सदा विघ्नों को दूर करें।"
          }
        }
      ],
      symbol: "🐘"
    },
    {
      id: "rudrabhishek",
      category: "Deity Worship", 
      name: {
        en: t("rudrabhishek"),
        hi: t("rudrabhishek")
      },
      shortDesc: {
        en: t("rudrabhishek_short"),
        hi: t("rudrabhishek_short")
      },
      fullDesc: {
        en: "Rudrabhishek is the sacred bathing ritual of Lord Shiva with various sacred substances like milk, honey, ghee, yogurt, and holy water while chanting Rudram from Yajurveda. This powerful ceremony removes negative karma, grants health, prosperity and spiritual elevation. Acharya Ji performs the complete Sri Rudram and Chamakam with proper pronunciation and traditional procedures.",
        hi: "रुद्राभिषेक भगवान शिव का दूध, शहद, घी, दही और पवित्र जल जैसे विभिन्न पवित्र पदार्थों से स्नान कराने का पवित्र अनुष्ठान है जबकि यजुर्वेद से रुद्रम का जाप किया जाता है। यह शक्तिशाली समारोह नकारात्मक कर्म को दूर करता है, स्वास्थ्य, समृद्धि और आध्यात्मिक उन्नति प्रदान करता है। आचार्य जी उचित उच्चारण और पारंपरिक प्रक्रियाओं के साथ संपूर्ण श्री रुद्रम और चमकम का पाठ करते हैं।"
      },
      mantras: [
        {
          text: "ॐ नमः शिवाय। त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥",
          transliteration: "Om Namaḥ Śivāya। Tryambakaṁ yajāmahe sugandhiṁ puṣṭivardhanam। Urvārukamiva bandhanānmṛtyormukṣīya māmṛtāt॥",
          meaning: {
            en: "Om, I bow to Shiva. We worship the three-eyed one (Shiva), who is fragrant and nourishes all. Like a cucumber from its bondage, may I be freed from death, not from immortality.",
            hi: "ॐ, मैं शिव को नमन करता हूँ। हम त्रिनेत्रधारी (शिव) की पूजा करते हैं, जो सुगंधित हैं और सभी का पोषण करते हैं। जैसे खीरा अपने बंधन से मुक्त होता है, वैसे ही मैं मृत्यु से मुक्त हो जाऊं, अमरता से नहीं।"
          }
        }
      ],
      symbol: "🌊"
    },
    {
      id: "vivah_sanskar", 
      category: "Life Ceremonies",
      name: {
        en: t("vivah_sanskar"),
        hi: t("vivah_sanskar")
      },
      shortDesc: {
        en: t("vivah_sanskar_short"),
        hi: t("vivah_sanskar_short")
      },
      fullDesc: {
        en: "Vedic wedding ceremony is a complete spiritual union performed with traditional rituals including Kanyadaan, Panigrahana (hand-taking ceremony), Saptapadi (seven vows), Sindoor Daan, and Agni as witness. Acharya Ji conducts the entire ceremony following Manusmriti and Grihya Sutras, ensuring the marriage is blessed with divine grace for a prosperous married life.",
        hi: "वैदिक विवाह समारोह कन्यादान, पाणिग्रहण (हाथ लेने का समारोह), सप्तपदी (सात वचन), सिंदूर दान और अग्नि को साक्षी मानकर किए जाने वाले पारंपरिक अनुष्ठानों के साथ एक पूर्ण आध्यात्मिक मिलन है। आचार्य जी मनुस्मृति और गृह्य सूत्रों का पालन करते हुए पूरा समारोह कराते हैं, यह सुनिश्चित करते हुए कि विवाह समृद्ध वैवाहिक जीवन के लिए दिव्य कृपा से आशीर्वादित हो।"
      },
      mantras: [
        {
          text: "ॐ सप्तपदी भव सख्या। एको मिष्टो द्वयोर्वराणां॥",
          transliteration: "Om Saptapadī bhava sakhyā। Eko miṣṭo dvayorvārāṇāṁ॥",
          meaning: {
            en: "Om, through the seven steps become companions. May you both be united as one in love.",
            hi: "ॐ, सात कदमों के माध्यम से सखा बनो। तुम दोनों प्रेम में एक होकर मिले रहो।"
          }
        }
      ],
      symbol: "💒"
    },
    {
      id: "navgraha_shanti",
      category: "Special Rituals",
      name: {
        en: t("navgraha_shanti"),
        hi: t("navgraha_shanti")
      },
      shortDesc: {
        en: t("navgraha_shanti_short"),
        hi: t("navgraha_shanti_short")
      },
      fullDesc: {
        en: "Navgraha Shanti is performed to pacify the nine planetary deities and their negative influences in one's horoscope. The ceremony includes individual puja for each planet with specific mantras, yantras, gemstones, and food offerings. Each planet receives dedicated worship according to Brihat Samhita and Hora Shastra traditions for balancing cosmic energies.",
        hi: "नवग्रह शांति नौ ग्रह देवताओं को शांत करने और किसी की कुंडली में उनके नकारात्मक प्रभावों को कम करने के लिए की जाती है। समारोह में विशिष्ट मंत्र, यंत्र, रत्न और भोजन अर्पण के साथ प्रत्येक ग्रह के लिए अलग-अलग पूजा शामिल है। ब्रहत संहिता और होरा शास्त्र परंपराओं के अनुसार ब्रह्मांडीय ऊर्जाओं को संतुलित करने के लिए प्रत्येक ग्रह विशेष पूजा प्राप्त करता है।"
      },
      mantras: [
        {
          text: "ॐ सूर्याय नमः। चन्द्राय नमः। मङ्गलाय नमः। बुधाय नमः। गुरवे नमः। शुक्राय नमः। शनये नमः। राहवे नमः। केतवे नमः।",
          transliteration: "Om Sūryāya namaḥ। Candrāya namaḥ। Maṅgalāya namaḥ। Budhāya namaḥ। Gurave namaḥ। Śukrāya namaḥ। Śanaye namaḥ। Rāhave namaḥ। Ketave namaḥ।",
          meaning: {
            en: "Om, salutations to Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu - the nine planetary deities.",
            hi: "ॐ, सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु और केतु - नौ ग्रह देवताओं को नमस्कार।"
          }
        }
      ],
      symbol: "🌕"
    },
    {
      id: "mahamrityunjaya_jap",
      category: "Chanting & Recitation", 
      name: {
        en: t("mahamrityunjaya_jap"),
        hi: t("mahamrityunjaya_jap")
      },
      shortDesc: {
        en: t("mahamrityunjaya_jap_short"),
        hi: t("mahamrityunjaya_jap_short")
      },
      fullDesc: {
        en: "Mahamrityunjaya Japa involves the powerful chanting of the death-conquering mantra from Rigveda. This sacred chanting is performed for health, healing from diseases, protection from accidents, and attaining longevity. The mantra is repeated 108, 1008, or 11,000 times with proper pranayama and meditation techniques for maximum benefit.",
        hi: "महामृत्युंजय जप में ऋग्वेद से मृत्युंजय मंत्र का शक्तिशाली जाप शामिल है। यह पवित्र जप स्वास्थ्य, रोगों से उपचार, दुर्घटनाओं से सुरक्षा और दीर्घायु प्राप्त करने के लिए किया जाता है। अधिकतम लाभ के लिए मंत्र को उचित प्राणायाम और ध्यान तकनीकों के साथ 108, 1008 या 11,000 बार दोहराया जाता है।"
      },
      mantras: [
        {
          text: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥",
          transliteration: "Om Tryambakaṁ yajāmahe sugandhiṁ puṣṭivardhanam। Urvārukamiva bandhanānmṛtyormukṣīya māmṛtāt॥",
          meaning: {
            en: "We worship the three-eyed one (Shiva), who is fragrant and nourishes all beings. Like a cucumber from its bondage, may I be freed from death, not from immortality.",
            hi: "हम त्रिनेत्रधारी (शिव) की पूजा करते हैं, जो सुगंधित हैं और सभी प्राणियों का पोषण करते हैं। जैसे खीरा अपने बंधन से मुक्त होता है, वैसे ही मैं मृत्यु से मुक्त हो जाऊं, अमरता से नहीं।"
          }
        }
      ],
      symbol: "💎"
    },
    {
      id: "satyanarayan_vrat",
      category: "Special Rituals",
      name: {
        en: t("satyanarayan_vrat"),
        hi: t("satyanarayan_vrat")
      },
      shortDesc: {
        en: t("satyanarayan_vrat_short"), 
        hi: t("satyanarayan_vrat_short")
      },
      fullDesc: {
        en: "Satyanarayan Vrat is a popular Vishnu worship performed for fulfilling wishes and expressing gratitude. The complete ceremony includes Kalash Sthapana, Satyanarayan Katha recitation, offerings of panchamrit, fruits, and sweets. The ritual concludes with prasad distribution and is known to bring prosperity, happiness, and divine blessings to devotees.",
        hi: "सत्यनारायण व्रत एक लोकप्रिय विष्णु पूजा है जो इच्छाओं की पूर्ति और कृतज्ञता व्यक्त करने के लिए की जाती है। पूर्ण समारोह में कलश स्थापना, सत्यनारायण कथा पाठ, पंचामृत, फल और मिठाइयों का अर्पण शामिल है। अनुष्ठान प्रसाद वितरण के साथ समाप्त होता है और यह भक्तों के लिए समृद्धि, खुशी और दिव्य आशीर्वाद लाने के लिए जाना जाता है।"
      },
      mantras: [
        {
          text: "ॐ नमो भगवते वासुदेवाय। सत्यनारायणाय नमः॥",
          transliteration: "Om Namo Bhagavate Vāsudevāya। Satyanārāyaṇāya Namaḥ॥",
          meaning: {
            en: "Om, salutations to Lord Vasudeva. Salutations to Lord Satyanarayan.",
            hi: "ॐ, भगवान वासुदेव को नमस्कार। भगवान सत्यनारायण को नमस्कार।"
          }
        }
      ],
      symbol: "🌟"
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
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Header with Enhanced Visual Appeal */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-vedic-cream via-white to-vedic-gold/10 p-8 shadow-2xl border border-vedic-gold/30 hover:border-vedic-gold/60 transition-all duration-500">
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-vedic-gold/20 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-vedic-saffron/20 to-transparent rounded-tr-full"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-6xl animate-gentle-float group-hover:scale-110 transition-transform duration-300">
                          {service.symbol}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-vedic-ochre mb-1">
                            {service.category}
                          </div>
                          <h2 className="text-3xl font-vedic mb-2 sacred-text group-hover:text-vedic-saffron transition-colors">
                            {service.name[language as 'en' | 'hi']}
                          </h2>
                        </div>
                      </div>
                      
                      {/* Enhanced Photo Placeholder with Frame */}
                      <div className="relative">
                        <div className="w-32 h-32 bg-gradient-to-br from-vedic-gold/30 to-vedic-saffron/30 rounded-xl border-4 border-vedic-gold/50 shadow-lg overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                          <div className="w-full h-full bg-gradient-to-br from-vedic-cream to-vedic-gold/20 flex items-center justify-center">
                            <div className="text-4xl text-vedic-maroon animate-gentle-float">
                              📸
                            </div>
                          </div>
                        </div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-vedic-gold to-vedic-saffron rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    
                    {/* Service Description */}
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {service.fullDesc[language as 'en' | 'hi']}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mantras Section with Enhanced Design */}
                <div className="mt-8 bg-gradient-to-r from-vedic-gold/5 via-vedic-cream/30 to-vedic-gold/5 p-8 rounded-2xl border-l-4 border-vedic-gold shadow-lg backdrop-blur-sm">
                  <div className="text-center mb-6">
                    <div className="text-3xl mb-2">🕉️</div>
                    <h3 className="text-xl font-vedic sacred-text">
                      {language === 'en' ? "Sacred Mantras & Spiritual Significance" : "पवित्र मंत्र एवं आध्यात्मिक महत्व"}
                    </h3>
                  </div>
                  
                  {service.mantras.map((mantra, idx) => (
                    <div key={idx} className="mb-6 p-6 bg-white/50 rounded-xl border border-vedic-gold/20 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="text-center space-y-4">
                        <div className="font-sanskrit text-xl leading-relaxed text-vedic-maroon p-4 bg-vedic-cream/30 rounded-lg">
                          {mantra.text}
                        </div>
                        <div className="text-sm text-gray-600 italic font-medium">
                          {mantra.transliteration}
                        </div>
                        <div className="text-base leading-relaxed p-4 bg-vedic-gold/10 rounded-lg">
                          <strong className="text-vedic-maroon">
                            {language === 'en' ? "Meaning: " : "अर्थ: "}
                          </strong>
                          <span className="text-gray-700">
                            {mantra.meaning[language as 'en' | 'hi']}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Call to Action */}
                <div className="text-center mt-8">
                  <a 
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-vedic-gold to-vedic-saffron text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                  >
                    <span className="mr-2">
                      {language === 'en' ? "Book this Sacred Ceremony" : "यह पवित्र समारोह बुक करें"}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center bg-gradient-to-r from-vedic-cream via-white to-vedic-cream p-12 rounded-2xl shadow-xl border border-vedic-gold/30">
            <div className="text-4xl mb-6">🕉️</div>
            <h3 className="text-2xl font-vedic mb-6 sacred-text">
              {language === 'en' ? 
                "Complete Vedic Ceremony Solutions" : 
                "संपूर्ण वैदिक समारोह समाधान"}
            </h3>
            <p className="mb-8 text-xl leading-relaxed max-w-4xl mx-auto text-gray-700">
              {language === 'en' ? 
                "Beyond these featured ceremonies, Acharya Mahesh Pandey Ji offers the complete spectrum of Vedic rituals including all 16 Sanskaars, seasonal festivals, therapeutic havans, planetary remedies, and customized spiritual ceremonies. Each ritual is performed with utmost authenticity following ancient scriptures." : 
                "इन विशेष समारोहों के अतिरिक्त, आचार्य महेश पाण्डेय जी वैदिक अनुष्ठानों का पूरा स्पेक्ट्रम प्रदान करते हैं जिसमें सभी 16 संस्कार, मौसमी त्योहार, चिकित्सक हवन, ग्रह उपचार और अनुकूलित आध्यात्मिक समारोह शामिल हैं। प्रत्येक अनुष्ठान प्राचीन शास्त्रों का पालन करते हुए अत्यधिक प्रामाणिकता के साथ किया जाता है।"}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-white/50 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">📚</div>
                <h4 className="font-semibold text-vedic-maroon mb-2">
                  {language === 'en' ? "Scriptural Authenticity" : "शास्त्रीय प्रामाणिकता"}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'en' ? 
                    "Based on Vedas, Puranas & Grihya Sutras" : 
                    "वेद, पुराण और गृह्य सूत्रों पर आधारित"}
                </p>
              </div>
              
              <div className="text-center p-6 bg-white/50 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold text-vedic-maroon mb-2">
                  {language === 'en' ? "Personalized Approach" : "व्यक्तिगत दृष्टिकोण"}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'en' ? 
                    "Customized to your specific needs & Muhurta" : 
                    "आपकी विशिष्ट आवश्यकताओं और मुहूर्त के अनुकूल"}
                </p>
              </div>
              
              <div className="text-center p-6 bg-white/50 rounded-xl shadow-sm">
                <div className="text-3xl mb-3">🌍</div>
                <h4 className="font-semibold text-vedic-maroon mb-2">
                  {language === 'en' ? "Pan-India Service" : "अखिल भारत सेवा"}
                </h4>
                <p className="text-sm text-gray-600">
                  {language === 'en' ? 
                    "Available for travel across entire India" : 
                    "संपूर्ण भारत में यात्रा के लिए उपलब्ध"}
                </p>
              </div>
            </div>
            
            <a 
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-vedic-maroon to-vedic-ochre text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <span className="mr-3">
                {language === 'en' ? "Consult Acharya Ji" : "आचार्य जी से परामर्श करें"}
              </span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">🙏</span>
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
