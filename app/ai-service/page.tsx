"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Music, 
  Workflow, 
  Brain, 
  Play, 
  Pause, 
  Download, 
  ArrowRight, 
  Sparkles, 
  Zap,
  CheckCircle,
  Star,
  Users,
  Clock,
  Target,
  Bot
} from "lucide-react";

export default function AIServicePage() {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);

  const services = [
    {
      id: "ai-music",
      icon: <Music className="w-16 h-16" />,
      title: "AI-Generated Music Tracks",
      description: "Purchase high-quality, professionally crafted music tracks created using cutting-edge AI technology. Perfect for content creators, businesses, and personal projects.",
      features: [
        "Professionally produced tracks",
        "Multiple genres available",
        "Instant digital download",
        "Royalty-free licensing",
        "High-quality audio formats",
        "Commercial use permitted"
      ],
      pricing: "Starting from $19",
      gradient: "from-purple-900/20 to-pink-900/20",
      borderGradient: "from-purple-500 to-pink-500",
      samples: [
        { name: "Ambient Chill", duration: "2:34", file: "/samples/ambient-chill.mp3", price: "$19" },
        { name: "Corporate Upbeat", duration: "3:12", file: "/samples/corporate-upbeat.mp3", price: "$24" },
        { name: "Electronic Groove", duration: "2:58", file: "/samples/electronic-groove.mp3", price: "$22" },
        { name: "Cinematic Epic", duration: "4:21", file: "/samples/cinematic-epic.mp3", price: "$29" }
      ]
    },
    {
      id: "ai-automation",
      icon: <Workflow className="w-16 h-16" />,
      title: "AI Automation with n8n",
      description: "Streamline your business processes with intelligent automation workflows. Connect your apps, automate repetitive tasks, and boost productivity with our custom n8n solutions.",
      features: [
        "Custom workflow design",
        "Multi-app integrations",
        "Intelligent decision trees",
        "Real-time monitoring",
        "Scalable architecture",
        "Complete documentation"
      ],
      pricing: "Starting from $199",
      gradient: "from-blue-900/20 to-cyan-900/20",
      borderGradient: "from-blue-500 to-cyan-500",
      automationTypes: [
        { name: "Email Marketing", description: "Automated email sequences and lead nurturing" },
        { name: "Data Processing", description: "Smart data validation and transformation" },
        { name: "Social Media", description: "Auto-posting and engagement workflows" },
        { name: "Customer Support", description: "Intelligent ticket routing and responses" }
      ]
    },
    {
      id: "ai-learning",
      icon: <Brain className="w-16 h-16" />,
      title: "AI Learning Solutions",
      description: "Comprehensive AI education and training programs designed to empower your team with cutting-edge artificial intelligence knowledge and practical implementation skills.",
      features: [
        "Personalized learning paths",
        "Hands-on projects",
        "Expert mentorship",
        "Industry case studies",
        "Certification programs",
        "Ongoing support"
      ],
      pricing: "Starting from $149",
      gradient: "from-green-900/20 to-emerald-900/20",
      borderGradient: "from-green-500 to-emerald-500",
      learningTracks: [
        { name: "Machine Learning Fundamentals", duration: "8 weeks", level: "Beginner" },
        { name: "Deep Learning & Neural Networks", duration: "12 weeks", level: "Intermediate" },
        { name: "Computer Vision Applications", duration: "10 weeks", level: "Advanced" },
        { name: "Natural Language Processing", duration: "14 weeks", level: "Advanced" }
      ]
    }
  ];

  const togglePlay = (trackId: string) => {
    if (playingTrack === trackId) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackId);
    }
  };

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "200+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
    { number: "99%", label: "Success Rate", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-green-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-screen-2xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Bot className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Artificial Intelligence Services</span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              AI-Powered
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI technologies. From intelligent automation 
              to creative content generation, we deliver AI solutions that drive real results.
            </p>
            
            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-10 py-6 text-lg group"
            >
              Explore Services
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of AI-powered services designed to elevate your business operations.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={service.id} className={`bg-gradient-to-br ${service.gradient} border-0 relative overflow-hidden group`}>
                {/* Gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.borderGradient} p-[1px] rounded-3xl`}>
                  <div className="bg-black rounded-3xl w-full h-full"></div>
                </div>
                
                <CardContent className="relative z-10 p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 rounded-2xl bg-white/10 border border-white/20 group-hover:scale-110 transition-transform duration-300">
                          <div className="text-white">{service.icon}</div>
                        </div>
                        <Badge className={`bg-gradient-to-r ${service.borderGradient} text-white font-bold px-4 py-2`}>
                          {service.pricing}
                        </Badge>
                      </div>
                      
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 text-lg mb-8 leading-relaxed">{service.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                        <Button 
                          className={`bg-gradient-to-r ${service.borderGradient} hover:opacity-90 text-white font-bold px-8 py-3`}
                        >
                          Contact
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                    
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      {/* AI Music Samples */}
                      {service.id === "ai-music" && (
                        <div className="space-y-4">
                          <h4 className="text-xl font-bold text-white mb-6">Available Tracks</h4>
                          {service.samples?.map((sample, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-all group">
                              <button
                                onClick={() => togglePlay(`${service.id}-${idx}`)}
                                className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all group-hover:scale-110"
                              >
                                {playingTrack === `${service.id}-${idx}` ? 
                                  <Pause className="w-5 h-5" /> : 
                                  <Play className="w-5 h-5" />
                                }
                              </button>
                              <div className="flex-1">
                                <div className="text-white font-semibold">{sample.name}</div>
                                <div className="text-gray-400 text-sm">{sample.duration}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-white font-bold text-lg mb-2">{sample.price}</div>
                                <Button 
                                  size="sm"
                                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-4 py-2"
                                >
                                  Buy Track
                                </Button>
                              </div>
                            </div>
                          ))}
                          <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl">
                            <div className="text-center">
                              <h5 className="text-white font-bold mb-2">Bundle Deal</h5>
                              <p className="text-gray-300 mb-3">Get all 4 tracks for just $69 (Save $25!)</p>
                              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-6 py-3">
                                Buy All Tracks
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* AI Automation Types */}
                      {service.id === "ai-automation" && (
                        <div className="space-y-4">
                          <h4 className="text-xl font-bold text-white mb-6">Automation Types</h4>
                          {service.automationTypes?.map((type, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all group">
                              <div className="flex items-center gap-4 mb-3">
                                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600">
                                  <Workflow className="w-5 h-5 text-white" />
                                </div>
                                <h5 className="text-white font-semibold text-lg">{type.name}</h5>
                              </div>
                              <p className="text-gray-300">{type.description}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* AI Learning Tracks */}
                      {service.id === "ai-learning" && (
                        <div className="space-y-4">
                          <h4 className="text-xl font-bold text-white mb-6">Learning Tracks</h4>
                          {service.learningTracks?.map((track, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all group">
                              <div className="flex items-center justify-between mb-3">
                                <h5 className="text-white font-semibold text-lg">{track.name}</h5>
                                <Badge className={`bg-gradient-to-r from-green-600 to-emerald-600 text-white`}>
                                  {track.level}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 text-gray-300">
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4" />
                                  <span>{track.duration}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              <span className="text-white font-medium">Ready to Get Started?</span>
            </div>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Transform Your Business
              <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                With AI Today
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of forward-thinking companies who have already revolutionized their 
              operations with our AI solutions. Let's discuss your project today.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 hover:text-black font-bold px-10 py-6 text-lg group min-w-[200px]"
              >
                Start Your Project
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white hover:text-black font-bold px-10 py-6 text-lg backdrop-blur-sm min-w-[200px] group"
              >
                <Zap className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                Schedule Consultation
              </Button>
            </div>
            
            {/* Features list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Free Consultation</div>
                <div className="text-gray-400">Discuss your AI needs with experts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Custom Solutions</div>
                <div className="text-gray-400">Tailored to your specific requirements</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Ongoing Support</div>
                <div className="text-gray-400">Continuous optimization and updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
