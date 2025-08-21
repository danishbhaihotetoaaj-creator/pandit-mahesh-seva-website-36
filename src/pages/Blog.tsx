import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';

const BlogContent = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: {
        en: "The Significance of Rudrabhishek in Modern Times",
        hi: "आधुनिक युग में रुद्राभिषेक का महत्व"
      },
      excerpt: {
        en: "Understanding the profound spiritual benefits and scientific aspects of performing Rudrabhishek in today's fast-paced world.",
        hi: "आज की तेज़ गति वाली दुनिया में रुद्राभिषेक करने के गहरे आध्यात्मिक लाभ और वैज्ञानिक पहलुओं को समझना।"
      },
      date: "2024-01-15",
      category: { en: "Vedic Rituals", hi: "वैदिक अनुष्ठान" },
      readTime: 5,
      image: "/lovable-uploads/929c20b0-871f-444f-8f6f-008a776c54fa.png"
    },
    {
      id: 2,
      title: {
        en: "Vastu Shanti: Creating Harmony in Your Living Space",
        hi: "वास्तु शांति: आपके आवास स्थान में सामंजस्य बनाना"
      },
      excerpt: {
        en: "Learn how ancient Vastu principles can transform your home into a sanctuary of peace and prosperity.",
        hi: "जानें कि कैसे प्राचीन वास्तु सिद्धांत आपके घर को शांति और समृद्धि के अभयारण्य में बदल सकते हैं।"
      },
      date: "2024-01-10",
      category: { en: "Vastu Shastra", hi: "वास्तु शास्त्र" },
      readTime: 7,
      image: "/lovable-uploads/572cf60f-520d-4e68-8203-2c524556d38b.png"
    },
    {
      id: 3,
      title: {
        en: "The Sacred Science Behind Vedic Wedding Ceremonies",
        hi: "वैदिक विवाह समारोहों के पीछे का पवित्र विज्ञान"
      },
      excerpt: {
        en: "Explore the deep spiritual significance and cosmic connections established through traditional Vedic wedding rituals.",
        hi: "पारंपरिक वैदिक विवाह अनुष्ठानों के माध्यम से स्थापित गहरे आध्यात्मिक महत्व और ब्रह्मांडीय संबंधों का अन्वेषण करें।"
      },
      date: "2024-01-05",
      category: { en: "Sanskars", hi: "संस्कार" },
      readTime: 6,
      image: "/lovable-uploads/e173b51e-700e-4cad-a17f-9918dee02187.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative section-spacing bg-gradient-to-br from-vedic-cream via-background to-vedic-cream">
          <div className="container-max">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-vedic mb-6">
                <span className="sacred-text">वैदिक ज्ञान</span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl">Vedic Wisdom Blog</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground devanagari-text">
                {t("blog_description") || "Discover ancient wisdom for modern living through authentic Vedic teachings and spiritual insights."}
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="section-spacing">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="service-card group cursor-pointer h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img 
                      src={post.image}
                      alt={post.title.en}
                      className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-vedic-gold text-vedic-maroon font-medium">
                        {post.category.en}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-xl sm:text-2xl font-vedic line-clamp-2 group-hover:text-vedic-saffron transition-colors">
                      {post.title.en}
                    </CardTitle>
                    <p className="text-muted-foreground line-clamp-3 text-sm sm:text-base">
                      {post.excerpt.en}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section-spacing bg-gradient-to-r from-vedic-cream via-vedic-gold/10 to-vedic-cream">
          <div className="container-max">
            <div className="vedic-border max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-vedic mb-4 sacred-text">
                Stay Connected
              </h2>
              <p className="text-muted-foreground mb-6 devanagari-text">
                Subscribe to receive updates about new articles, spiritual insights, and upcoming events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-vedic-gold/30 bg-white/80 focus:outline-none focus:ring-2 focus:ring-vedic-gold"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-vedic-saffron to-vedic-gold text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const Blog = () => {
  return (
    <LanguageProvider>
      <BlogContent />
    </LanguageProvider>
  );
};

export default Blog;