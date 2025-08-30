import { Button } from "@/components/ui/button";
import { Globe, Brain, Bitcoin, ShoppingBag, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export function CategoriesSection() {
  const categories = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Service",
      description: "Custom web development with cutting-edge design and performance optimization",
      features: ["Responsive Design", "SEO Optimized", "Performance First", "Modern UI/UX"],
      gradient: "from-gray-900 to-black",
      link: "/services"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Learning",
      description: "Advanced artificial intelligence training and machine learning solutions",
      features: ["Neural Networks", "Deep Learning", "Computer Vision", "NLP Processing"],
      gradient: "from-black to-gray-800",
      link: "/ai-learning"
    },
    {
      icon: <Bitcoin className="w-12 h-12" />,
      title: "Crypto Learning",
      description: "Comprehensive blockchain education and cryptocurrency trading strategies",
      features: ["DeFi Protocols", "Smart Contracts", "Trading Bots", "Portfolio Management"],
      gradient: "from-gray-800 to-gray-900",
      link: "/crypto-learning"
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Software Shop",
      description: "Premium software solutions and digital tools for modern businesses",
      features: ["Enterprise Tools", "Custom Software", "API Integration", "Cloud Solutions"],
      gradient: "from-gray-900 to-black",
      link: "/software-shop"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Mystical Service",
      description: "Esoteric digital experiences and metaphysical technology applications",
      features: ["Quantum Computing", "Consciousness AI", "Digital Divination", "Energy Optimization"],
      gradient: "from-black to-gray-700",
      link: "/mystical-service"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Service
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Explore our comprehensive range of digital services designed to transform 
            your business and unlock new possibilities in the digital realm.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`group relative p-8 bg-gradient-to-br ${category.gradient} rounded-2xl border border-gray-700 hover:border-white/30 transition-all duration-500 overflow-hidden`}
            >
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
              
              <div className="relative z-10">
                <div className="mb-6 text-white">
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link href={category.link}>
                  <Button 
                    variant="outline" 
                    className="w-full border-white/30 text-black hover:bg-white hover:!text-black transition-all duration-300 group/btn"
                  >
                    {category.title === "Website Service" ? "View Services" : "Learn More"}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Need a Custom Solution?</h3>
              <p className="text-gray-300">Let's discuss your unique requirements and create something extraordinary.</p>
            </div>
            <Button className="bg-white text-black hover:bg-gray-200 font-semibold px-8 shrink-0">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
