import { Shield, Zap, Users, Trophy, Rocket, Brain } from "lucide-react";

export function WhyChooseUsSection() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence integrated into every project for maximum efficiency and innovation."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second load times and real-time processing capabilities."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and security protocols to protect your digital assets."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "24/7 Expert Support",
      description: "Round-the-clock assistance from our team of certified professionals and specialists."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Award-Winning Quality",
      description: "Industry-recognized excellence with multiple awards for innovation and customer satisfaction."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Future-Ready Tech",
      description: "Built with tomorrow's technologies today - blockchain, quantum computing, and beyond."
    }
  ];

  return (
    <section className="py-24 bg-black/20 backdrop-blur-md relative">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-gray-900/20 to-black/30"></div>
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Platform
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Experience the difference with our revolutionary approach to digital transformation, 
            powered by next-generation technologies and unmatched expertise.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm hover:bg-white transition-all duration-500 rounded-2xl border border-white/10 hover:border-white"
            >
              <div className="mb-6 text-white group-hover:text-black transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-black mb-4 transition-colors duration-500">
                {feature.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-600 leading-relaxed transition-colors duration-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>Trusted by 10,000+ companies worldwide</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
