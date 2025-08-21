
import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-transparent to-vedic-sage/10 mt-20">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-heading mb-4">{t("about_us")}</h3>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl text-vedic-gold">ॐ</div>
              <span className="font-heading text-lg">{t("acharya_name")}</span>
            </div>
            <p className="text-sm text-gray-700">
              {t("footer_about")}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading mb-4">{t("quick_links")}</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="/services" className="text-gray-700 hover:text-vedic-maroon transition-colors">{t("services")}</a>
              <a href="/events" className="text-gray-700 hover:text-vedic-maroon transition-colors">{t("events")}</a>
              <a href="/gallery" className="text-gray-700 hover:text-vedic-maroon transition-colors">{t("gallery")}</a>
              <a href="/blog" className="text-gray-700 hover:text-vedic-maroon transition-colors">{t("blog")}</a>
              <a href="/panchang" className="text-gray-700 hover:text-vedic-maroon transition-colors">{t("panchang")}</a>
              <a href="/contact" className="text-gray-700 hover:text-vedic-maroon transition-colors">{t("contact")}</a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-heading mb-4">{t("get_in_touch")}</h3>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">{t("from")}:</span> {t("ayodhya")}</p>
              <p><span className="font-semibold">{t("studied")}:</span> {t("vrindavan")}</p>
              <p><span className="font-semibold">{t("current")}:</span> {t("bangalore")}</p>
              <div className="flex mt-4 space-x-3">
                <Button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700">
                  <Phone size={16} />
                  <a href="tel:+917464923758">{t("call")}</a>
                </Button>
                <Button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                  <a href="https://wa.me/917464923758">{t("whatsapp")}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-vedic-gold/20 mt-8 pt-6 text-center text-gray-600">
          <p>© {currentYear} {t("acharya_name")}. {t("all_rights_reserved")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
