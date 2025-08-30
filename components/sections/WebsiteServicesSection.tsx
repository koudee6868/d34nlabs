import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Globe, Code, Palette } from "lucide-react";

export function WebsiteServicesSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Website Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional website solutions tailored to your business needs. 
            Choose from our comprehensive packages designed to deliver exceptional results.
          </p>
        </div>

        {/* Shopify Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-900/30 text-green-400 px-4 py-2 rounded-full mb-4 border border-green-500/30">
              <Zap className="w-4 h-4" />
              <span className="font-semibold">Shopify Development</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">E-commerce Excellence</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Build powerful online stores with Shopify's robust platform. From simple shops to enterprise solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Shopify Starter */}
            <div className="bg-gray-800/50 rounded-2xl shadow-lg border border-gray-700 p-8 hover:shadow-xl hover:border-green-500/50 transition-all backdrop-blur-sm">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Starter Store</h3>
                <div className="text-4xl font-bold text-green-400 mb-4">$2,499</div>
                <p className="text-gray-300">Perfect for small businesses starting their online journey</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Custom Shopify theme setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Up to 50 products</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Payment gateway integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Mobile responsive design</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Basic SEO optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">30 days support</span>
                </li>
              </ul>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold">
                Get Started
              </Button>
            </div>

            {/* Shopify Professional */}
            <div className="bg-gray-800/50 rounded-2xl shadow-lg border-2 border-green-400 p-8 hover:shadow-xl transition-all backdrop-blur-sm relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Professional Store</h3>
                <div className="text-4xl font-bold text-green-400 mb-4">$4,999</div>
                <p className="text-gray-300">Advanced features for growing businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom theme development</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Up to 500 products</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Advanced app integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom functionality</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Advanced SEO & analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">90 days support</span>
                </li>
              </ul>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold">
                Choose Professional
              </Button>
            </div>

            {/* Shopify Enterprise */}
            <div className="bg-gray-800/50 rounded-2xl shadow-lg border border-gray-700 p-8 hover:shadow-xl hover:border-green-500/50 transition-all backdrop-blur-sm">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise Store</h3>
                <div className="text-4xl font-bold text-green-400 mb-4">$9,999</div>
                <p className="text-gray-300">Complete solution for large-scale operations</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Fully custom development</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Unlimited products</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Multi-store management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">API integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Performance optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">6 months support</span>
                </li>
              </ul>
              <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>

        {/* Webflow Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-900/30 text-blue-400 px-4 py-2 rounded-full mb-4 border border-blue-500/30">
              <Palette className="w-4 h-4" />
              <span className="font-semibold">Webflow Development</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Visual Web Design</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Create stunning, responsive websites with Webflow's powerful visual development platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Webflow Basic */}
            <div className="bg-gray-800/50 rounded-2xl shadow-lg border border-gray-700 p-8 hover:shadow-xl hover:border-blue-500/50 transition-all backdrop-blur-sm">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Basic Site</h3>
                <div className="text-4xl font-bold text-blue-400 mb-4">$1,999</div>
                <p className="text-gray-300">Simple yet powerful websites for small businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Up to 10 pages</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Responsive design</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">CMS setup (50 items)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Contact forms</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Basic animations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">30 days support</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-black font-semibold">
                Get Started
              </Button>
            </div>

            {/* Webflow Advanced */}
            <div className="bg-gray-800/50 rounded-2xl shadow-lg border-2 border-blue-400 p-8 hover:shadow-xl transition-all backdrop-blur-sm relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Advanced Site</h3>
                <div className="text-4xl font-bold text-blue-400 mb-4">$3,999</div>
                <p className="text-gray-300">Feature-rich websites with advanced functionality</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Up to 25 pages</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Advanced CMS (200 items)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">E-commerce integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Custom interactions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">SEO optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">60 days support</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-black font-semibold">
                Choose Advanced
              </Button>
            </div>

            {/* Webflow Premium */}
            <div className="bg-gray-800/50 rounded-2xl shadow-lg border border-gray-700 p-8 hover:shadow-xl hover:border-blue-500/50 transition-all backdrop-blur-sm">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Premium Site</h3>
                <div className="text-4xl font-bold text-blue-400 mb-4">$7,999</div>
                <p className="text-gray-300">Enterprise-level Webflow solutions</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Unlimited pages</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Complex CMS structure</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Custom code integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Advanced animations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">Performance optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">90 days support</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-black font-semibold">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>

        {/* Landing Page Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-900/30 text-purple-400 px-4 py-2 rounded-full mb-4 border border-purple-500/30">
              <Code className="w-4 h-4" />
              <span className="font-semibold">Landing Pages</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">High-Converting Landing Pages</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Custom-coded or WordPress-based landing pages designed to convert visitors into customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Self-Code Option */}
            <div className="bg-gray-800/50 rounded-2xl shadow-lg border border-gray-700 p-8 hover:shadow-xl hover:border-purple-500/50 transition-all backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Custom Coded</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">$1,499 - $4,999</div>
                <p className="text-gray-300">Hand-crafted with modern technologies for maximum performance</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">React/Next.js development</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Lightning-fast performance</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Custom animations & interactions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Advanced analytics integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">A/B testing ready</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Conversion optimization</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-black font-semibold">
                Start Custom Project
              </Button>
            </div>

            {/* WordPress Option */}
            <div className="bg-gray-800/50 rounded-2xl shadow-lg border border-gray-700 p-8 hover:shadow-xl hover:border-purple-500/50 transition-all backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">WordPress Based</h3>
                <div className="text-3xl font-bold text-purple-400 mb-4">$899 - $2,999</div>
                <p className="text-gray-300">Flexible WordPress solutions with easy content management</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Premium theme customization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Easy content management</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Plugin integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">SEO optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Lead capture forms</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">Training & documentation</span>
                </li>
              </ul>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-black font-semibold">
                Choose WordPress
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-900 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-semibold px-8 py-6">
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-6"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
