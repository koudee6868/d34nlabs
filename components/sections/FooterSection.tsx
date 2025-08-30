import { Globe, Brain, Bitcoin, ShoppingBag, Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function FooterSection() {
  const services = [
    { name: "Website Service", icon: <Globe className="w-4 h-4" /> },
    { name: "AI Learning", icon: <Brain className="w-4 h-4" /> },
    { name: "Crypto Learning", icon: <Bitcoin className="w-4 h-4" /> },
    { name: "Software Shop", icon: <ShoppingBag className="w-4 h-4" /> },
    { name: "Mystical Service", icon: <Sparkles className="w-4 h-4" /> }
  ];

  const quickLinks = [
    "About Us", "Our Team", "Careers", "Press", "Partners", "Investors"
  ];

  const resources = [
    "Documentation", "API Reference", "Help Center", "Community", "Blog", "Status"
  ];

  const legal = [
    "Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security", "Compliance"
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold">FutureTech</span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Transforming the digital landscape through cutting-edge AI, blockchain, 
              and mystical technologies. Building tomorrow's solutions today.
            </p>
            
            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>contact@futuretech.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Silicon Valley, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {service.icon}
                    </span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-8">
              Get the latest insights on AI, blockchain, and emerging technologies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 FutureTech. All rights reserved.
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {legal.map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
                { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                { icon: <Instagram className="w-5 h-5" />, label: "Instagram" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-white hover:text-black rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
