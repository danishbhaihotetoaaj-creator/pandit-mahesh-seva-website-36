
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: "home", href: "/" },
    { name: "services", href: "/services" },
    { name: "events", href: "/events" },
    { name: "gallery", href: "/gallery" },
    { name: "blog", href: "/blog" },
    { name: "panchang", href: "/panchang" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <header className="backdrop-blur-md bg-white/90 sticky top-0 z-50 shadow-lg border-b border-vedic-gold/30">
      <div className="container-max py-2">
        {/* Language switcher */}
        <div className="flex justify-end py-2 border-b border-vedic-gold/20">
          <div className="flex space-x-1">
            <button 
              onClick={() => setLanguage('en')} 
              className={cn(
                "language-btn text-sm sm:text-base transition-all duration-300",
                language === 'en' && "active"
              )}
            >
              English
            </button>
            <button 
              onClick={() => setLanguage('hi')} 
              className={cn(
                "language-btn text-sm sm:text-base transition-all duration-300 devanagari-text",
                language === 'hi' && "active"
              )}
            >
              हिंदी
            </button>
          </div>
        </div>
        
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="text-4xl text-vedic-gold animate-gentle-float">ॐ</div>
            <div>
              <span className="font-vedic text-xl sm:text-2xl font-semibold sacred-text block">
                {t("acharya_name")}
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground devanagari-text hidden sm:block">
                {t("brand_tagline")}
              </span>
            </div>
          </a>
          
          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="relative font-medium text-foreground hover:text-vedic-saffron transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-vedic-gold after:to-vedic-saffron after:transition-all after:duration-300 hover:after:w-full group"
              >
                <span className="devanagari-text group-hover:scale-105 transition-transform duration-300 inline-block">
                  {t(link.name)}
                </span>
              </a>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-vedic-gold/20"
            >
              <Menu className="w-6 h-6 text-vedic-maroon" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-vedic-gold/30 animate-fade-in backdrop-blur-sm">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 font-medium text-foreground hover:text-vedic-saffron hover:bg-vedic-cream/50 transition-all duration-300 rounded-lg devanagari-text"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.name)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
