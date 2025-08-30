import { Globe, Code, Palette, ShoppingCart, Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export function FooterSection() {
  const services = [
    { name: "Shopify Development", icon: <ShoppingCart className="w-4 h-4" /> },
    { name: "Webflow Development", icon: <Palette className="w-4 h-4" /> },
    { name: "Landing Pages", icon: <Globe className="w-4 h-4" /> },
    { name: "Custom Development", icon: <Code className="w-4 h-4" /> },
    { name: "Performance Optimization", icon: <Zap className="w-4 h-4" /> }
  ];

  const quickLinks = [
    "About Us", "Our Work", "Process", "Testimonials", "Case Studies", "Contact"
  ];

  const resources = [
    "Portfolio", "Blog", "Resources", "Support", "FAQ", "Getting Started"
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
              <img src="/d34nlabs-logo.svg" className="w-10 h-10" alt="D34nLabs Logo" />
              <span className="text-2xl font-bold">D34nLabs</span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Professional web development services specializing in Shopify, Webflow, 
              and custom solutions. Transforming your digital presence with modern, 
              high-performance websites.
            </p>
            
            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>hello@d34nlabs.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+1 (555) D34N-LABS</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Remote & Global</span>
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
              Get the latest web development tips, industry insights, and project updates delivered to your inbox.
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
              © 2024 D34nLabs. All rights reserved.
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
                { icon: <Github className="w-5 h-5" />, label: "GitHub" },
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
