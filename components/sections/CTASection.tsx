import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gray-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Ready to Transform Your Business?</span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Start Your
            <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Digital Journey
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of forward-thinking companies who have already transformed their 
            business with our cutting-edge solutions. The future starts today.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 hover:text-black font-bold px-10 py-6 text-lg group min-w-[200px]"
            >
              Get Started Now
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 text-black hover:bg-white hover:!text-black font-bold px-10 py-6 text-lg backdrop-blur-sm min-w-[200px] group"
            >
              <Zap className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
              Schedule Demo
            </Button>
          </div>
          
          {/* Features list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Free Consultation</div>
              <div className="text-gray-400">Expert analysis of your needs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">30-Day Guarantee</div>
              <div className="text-gray-400">Risk-free trial period</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">24/7 Support</div>
              <div className="text-gray-400">Always here when you need us</div>
            </div>
          </div>
          
          {/* Urgency element */}
          <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <div className="text-white font-bold text-lg mb-1">Limited Time Offer</div>
                <div className="text-gray-300">50% off setup fees for the first 100 clients</div>
              </div>
              <div className="text-white font-mono text-2xl font-bold">
                <span className="bg-white/20 px-3 py-1 rounded">47</span>
                <span className="mx-2">spots left</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
