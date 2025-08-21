
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-white bg-opacity-80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading mb-4">{t("contact_us")}</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {t("contact_description")}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto vedic-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-heading mb-4">{t("pandit_details")}</h3>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4 text-vedic-gold">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("location")}</h4>
                    <p className="text-gray-700">{t("bangalore")}</p>
                    <p className="text-gray-700 text-sm">{t("available_for_travel")}</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-vedic-gold">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("phone")}</h4>
                    <p className="text-gray-700">+91 7464923758</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">{t("background")}</h4>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-medium">{t("from")}:</span> {t("ayodhya")}</p>
                    <p><span className="font-medium">{t("studied")}:</span> {t("vrindavan")}</p>
                    <p><span className="font-medium">{t("current")}:</span> {t("bangalore")}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-x-4">
                <a 
                  href="tel:+917464923758"
                  className="inline-block px-6 py-2 bg-vedic-gold text-white font-medium rounded-full hover:bg-vedic-ochre transition-colors"
                >
                  {t("call_now")}
                </a>
                <a 
                  href="https://wa.me/917464923758"
                  className="inline-block px-6 py-2 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition-colors"
                >
                  {t("whatsapp")}
                </a>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">{t("pandit_image")}</h4>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/572cf60f-520d-4e68-8203-2c524556d38b.png" 
                    alt="Acharya Mahesh Pandey Ji" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-heading mb-4">{t("send_message")}</h3>
              
              <form className="space-y-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("your_name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedic-gold focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("your_email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedic-gold focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("service_interested")}
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedic-gold focus:border-transparent"
                  >
                    <option value="">{t("select_service")}</option>
                    <option value="vastu">{t("vastu_shanti")}</option>
                    <option value="griha">{t("griha_pravesh")}</option>
                    <option value="wedding">{t("vivah_sanskar")}</option>
                    <option value="puja">{t("other_vedic_pujas")}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("your_message")}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vedic-gold focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-vedic-maroon text-white font-medium rounded-md hover:bg-vedic-ochre transition-colors"
                >
                  {t("send_inquiry")}
                </button>
              </form>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">{t("find_us")}</h4>
                <div className="rounded-lg overflow-hidden shadow-md h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.448709369629!2d77.66159527606222!3d12.947606087359648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1383cf3f180b%3A0x6aa32495506a4671!2sMahesh%20Pandey%20Ji%20Hindu%20Pandit!5e0!3m2!1sen!2sus!4v1716092048789!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
