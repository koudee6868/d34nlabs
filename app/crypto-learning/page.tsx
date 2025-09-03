"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bitcoin, 
  TrendingUp, 
  Shield, 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight, 
  Sparkles, 
  Zap,
  CheckCircle,
  Star,
  Clock,
  Target,
  DollarSign,
  PieChart,
  BarChart3,
  Wallet,
  Lock,
  Globe
} from "lucide-react";

export default function CryptoLearningPage() {
  const [activeTab, setActiveTab] = useState("courses");

  const courses = [
    {
      id: "crypto-basics",
      title: "Cryptocurrency Fundamentals",
      description: "Master the basics of blockchain technology, digital currencies, and decentralized finance.",
      level: "Beginner",
      duration: "6 weeks",
      modules: 12,
      price: "$149",
      features: [
        "Understanding blockchain technology",
        "Major cryptocurrencies overview",
        "Wallet setup and security",
        "Basic trading concepts",
        "DeFi introduction",
        "Portfolio fundamentals"
      ],
      gradient: "from-orange-900/20 to-yellow-900/20",
      borderGradient: "from-orange-500 to-yellow-500",
      icon: <Bitcoin className="w-8 h-8" />
    },
    {
      id: "trading-mastery",
      title: "Advanced Trading Strategies",
      description: "Learn professional trading techniques, technical analysis, and risk management strategies.",
      level: "Intermediate",
      duration: "10 weeks",
      modules: 20,
      price: "$299",
      features: [
        "Technical analysis mastery",
        "Chart patterns and indicators",
        "Risk management systems",
        "Portfolio optimization",
        "Market psychology",
        "Advanced trading tools"
      ],
      gradient: "from-green-900/20 to-emerald-900/20",
      borderGradient: "from-green-500 to-emerald-500",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      id: "defi-expert",
      title: "DeFi & Smart Contracts",
      description: "Explore decentralized finance protocols, yield farming, and smart contract interactions.",
      level: "Advanced",
      duration: "8 weeks",
      modules: 16,
      price: "$399",
      features: [
        "DeFi protocols deep dive",
        "Yield farming strategies",
        "Smart contract analysis",
        "Liquidity provision",
        "Governance tokens",
        "Advanced DeFi tools"
      ],
      gradient: "from-blue-900/20 to-purple-900/20",
      borderGradient: "from-blue-500 to-purple-500",
      icon: <Shield className="w-8 h-8" />
    },
    {
      id: "nft-marketplace",
      title: "NFTs & Digital Assets",
      description: "Learn about non-fungible tokens, digital collectibles, and the evolving NFT marketplace.",
      level: "Intermediate",
      duration: "4 weeks",
      modules: 8,
      price: "$199",
      features: [
        "NFT fundamentals",
        "Marketplace navigation",
        "Creating and minting NFTs",
        "Valuation strategies",
        "Legal considerations",
        "Future trends analysis"
      ],
      gradient: "from-pink-900/20 to-rose-900/20",
      borderGradient: "from-pink-500 to-rose-500",
      icon: <PieChart className="w-8 h-8" />
    }
  ];

  const learningPaths = [
    {
      title: "Complete Beginner",
      description: "Start from zero knowledge to confident crypto understanding",
      courses: ["Cryptocurrency Fundamentals", "Basic Trading", "Security Essentials"],
      duration: "12 weeks",
      price: "$249",
      savings: "Save $99"
    },
    {
      title: "Professional Trader",
      description: "Become a skilled cryptocurrency trader with advanced strategies",
      courses: ["Trading Mastery", "Technical Analysis", "Risk Management"],
      duration: "16 weeks",
      price: "$499",
      savings: "Save $199"
    },
    {
      title: "DeFi Specialist",
      description: "Master decentralized finance and yield optimization",
      courses: ["DeFi Expert", "Smart Contracts", "Yield Strategies"],
      duration: "14 weeks",
      price: "$699",
      savings: "Save $299"
    }
  ];

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Curriculum",
      description: "Step-by-step lessons covering everything from basics to advanced strategies"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of crypto trading experience"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certification",
      description: "Earn recognized certificates upon completion of each course"
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Practical Tools",
      description: "Access to premium trading tools and portfolio tracking software"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security Focus",
      description: "Learn best practices for keeping your crypto assets safe"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Community",
      description: "Join thousands of students in our exclusive crypto learning community"
    }
  ];

  const stats = [
    { number: "10K+", label: "Students Enrolled", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <Star className="w-6 h-6" /> },
    { number: "50+", label: "Expert Instructors", icon: <Award className="w-6 h-6" /> },
    { number: "$2M+", label: "Student Profits", icon: <DollarSign className="w-6 h-6" /> }
  ];

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-blue-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-screen-2xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Bitcoin className="w-5 h-5 text-orange-400" />
              <span className="text-white font-medium">Cryptocurrency Education</span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Master
              <span className="block bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
                Crypto Trading
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Learn cryptocurrency trading, blockchain technology, and DeFi strategies from industry experts. 
              Start your journey to financial freedom in the digital economy.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold px-10 py-6 text-lg group"
              >
                Start Learning Today
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white hover:text-black font-bold px-10 py-6 text-lg backdrop-blur-sm group"
              >
                <BarChart3 className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                View Courses
              </Button>
            </div>
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
                    <div className="text-orange-400">{stat.icon}</div>
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-gray-900/50">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex bg-black/50 rounded-full p-2 backdrop-blur-sm border border-white/20">
              <button
                onClick={() => setActiveTab("courses")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "courses"
                    ? "bg-gradient-to-r from-orange-600 to-yellow-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Individual Courses
              </button>
              <button
                onClick={() => setActiveTab("paths")}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  activeTab === "paths"
                    ? "bg-gradient-to-r from-orange-600 to-yellow-600 text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Learning Paths
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      {activeTab === "courses" && (
        <section className="py-20">
          <div className="max-w-screen-2xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Choose Your Course</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select from our comprehensive range of cryptocurrency courses designed for every skill level.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {courses.map((course, index) => (
                <Card key={course.id} className={`bg-gradient-to-br ${course.gradient} border-0 relative overflow-hidden group`}>
                  {/* Gradient border */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${course.borderGradient} p-[1px] rounded-3xl`}>
                    <div className="bg-black rounded-3xl w-full h-full"></div>
                  </div>
                  
                  <CardContent className="relative z-10 p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-white/10 border border-white/20 group-hover:scale-110 transition-transform duration-300">
                          <div className="text-white">{course.icon}</div>
                        </div>
                        <Badge className={`bg-gradient-to-r ${course.borderGradient} text-white font-bold`}>
                          {course.level}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">{course.price}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{course.description}</p>
                    
                    <div className="flex gap-6 mb-6 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.modules} modules</span>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-2 mb-8">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        className={`flex-1 bg-gradient-to-r ${course.borderGradient} hover:opacity-90 text-white font-bold py-3`}
                      >
                        Enroll Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-white/30 text-white hover:bg-white/10 px-6"
                      >
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Learning Paths Section */}
      {activeTab === "paths" && (
        <section className="py-20">
          <div className="max-w-screen-2xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Learning Paths</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete structured programs designed to take you from beginner to expert with significant savings.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {learningPaths.map((path, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/50 to-black border border-white/20 relative overflow-hidden group hover:border-orange-500/50 transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <Badge className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold mb-4">
                        {path.savings}
                      </Badge>
                      <h3 className="text-2xl font-bold text-white mb-4">{path.title}</h3>
                      <p className="text-gray-300 mb-6">{path.description}</p>
                    </div>
                    
                    <div className="text-4xl font-bold text-white mb-2">{path.price}</div>
                    <div className="text-gray-400 mb-6">{path.duration}</div>
                    
                    <div className="space-y-3 mb-8">
                      {path.courses.map((course, idx) => (
                        <div key={idx} className="flex items-center gap-3 justify-center">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">{course}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold py-3"
                    >
                      Start Learning Path
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Our Crypto Education?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to succeed in cryptocurrency trading and investing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 hover:border-orange-500/50 transition-all group">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-600 to-yellow-600 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
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
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Start Your Crypto Journey</span>
            </div>
            
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Master
              <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Cryptocurrency?
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful traders who started their crypto journey with our comprehensive 
              education programs. Your financial freedom awaits.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-bold px-10 py-6 text-lg group min-w-[200px]"
              >
                Start Learning Now
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white hover:text-black font-bold px-10 py-6 text-lg backdrop-blur-sm min-w-[200px] group"
              >
                <Zap className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                Free Trial
              </Button>
            </div>
            
            {/* Features list */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">7-Day Free Trial</div>
                <div className="text-gray-400">Try any course risk-free</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Lifetime Access</div>
                <div className="text-gray-400">Learn at your own pace forever</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Money-Back Guarantee</div>
                <div className="text-gray-400">100% satisfaction guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
