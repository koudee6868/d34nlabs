"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Bot, Gamepad2, ListChecks, Layers, ArrowRight, Zap } from "lucide-react";

type Tool = {
  name: string;
  description: string;
  price: string; // Add price field
  type: string; // Add type field
  icon: React.ReactNode; // Add icon field
  image?: string; // Add image field for logos
};

type CategoryKey = "All" | "General" | "Design" | "AI" | "MMO";

const categories = [
  { key: "All", label: "All Software", icon: <Layers className="w-5 h-5" /> },
  { key: "General", label: "General", icon: <ListChecks className="w-5 h-5" /> },
  { key: "Design", label: "Design", icon: <Palette className="w-5 h-5" /> },
  { key: "AI", label: "AI", icon: <Bot className="w-5 h-5" /> },
  { key: "MMO", label: "MMO", icon: <Gamepad2 className="w-5 h-5" /> },
];

const tools: Record<Exclude<CategoryKey, "All">, Tool[]> = {
  General: [
    { name: "InvoiceGen", description: "Generate invoices for freelancers and agencies.", price: "$19", type: "General", icon: <ListChecks className="w-5 h-5" /> },
    { name: "TimeTracker", description: "Track work hours and productivity.", price: "$15", type: "General", icon: <ListChecks className="w-5 h-5" /> },
    { name: "TaskFlow", description: "Simple task management for teams.", price: "$12", type: "General", icon: <ListChecks className="w-5 h-5" /> },
  ],
  Design: [
    { name: "LogoMaker", description: "AI-powered logo generator.", price: "$25", type: "Design", icon: <Palette className="w-5 h-5" /> },
    { name: "MockupStudio", description: "Create product mockups for presentations.", price: "$22", type: "Design", icon: <Palette className="w-5 h-5" /> },
    { name: "ColorMind", description: "Smart color palette generator.", price: "$10", type: "Design", icon: <Palette className="w-5 h-5" /> },
  ],
  AI: [
    { name: "CopyGenAI", description: "AI copywriting assistant.", price: "$29", type: "AI", icon: <Bot className="w-5 h-5" /> },
    { name: "ImageEnhanceAI", description: "AI image upscaler and enhancer.", price: "$18", type: "AI", icon: <Bot className="w-5 h-5" /> },
    { name: "ChatBotPro", description: "Custom chatbot builder.", price: "$35", type: "AI", icon: <Bot className="w-5 h-5" /> },
  ],
  MMO: [
    { name: "GuildManager", description: "MMO guild management tool.", price: "$20", type: "MMO", icon: <Gamepad2 className="w-5 h-5" /> },
    { name: "RaidPlanner", description: "Plan and schedule MMO raids.", price: "$16", type: "MMO", icon: <Gamepad2 className="w-5 h-5" /> },
    { name: "LootTracker", description: "Track loot and drops for MMO guilds.", price: "$14", type: "MMO", icon: <Gamepad2 className="w-5 h-5" /> },
  ],
};

function getAllTools() {
  return Object.values(tools).flat();
}

export default function SoftwareShopPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("All");

  const currentTools =
    activeCategory === "All"
      ? getAllTools()
      : tools[activeCategory as Exclude<CategoryKey, "All">];

  return (
    <main className="bg-black min-h-screen py-16">
      <div className="max-w-screen-2xl mx-auto px-4">
        {/* Headline */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Software Shop
          </h1>
          <p className="text-lg text-gray-300">
            Premium tools and digital products for creators, businesses, and gamers. Explore by category below!
          </p>
        </div>

        {/* Category Filter Bar */}
        <nav className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key as CategoryKey)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full border font-semibold transition-all cursor-pointer
                ${activeCategory === cat.key
                  ? "bg-white text-black border-white shadow"
                  : "bg-neutral-900 border-white text-white hover:bg-neutral-800"}
              `}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </nav>

        {/* Cards Grid */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Badge
              variant="secondary"
              className="text-base px-3 py-1 bg-neutral-900 border border-white text-white font-bold"
            >
              {activeCategory === "All"
                ? "#All"
                : `#${categories.findIndex(c => c.key === activeCategory)}`}
            </Badge>
            <h2 className="text-3xl font-semibold text-white flex items-center gap-2">
              {categories.find(c => c.key === activeCategory)?.icon}
              {categories.find(c => c.key === activeCategory)?.label}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {currentTools.map((tool) => (
              <div
                key={tool.name}
                className="group relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] rounded-3xl border border-white/10 hover:border-white/30 shadow-2xl flex flex-col min-h-[280px] overflow-hidden transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
              >
                {/* Gradient overlay for hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Header with Logo */}
                <div className="relative px-8 pt-8 pb-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      {tool.image ? (
                        <Image 
                          src={tool.image} 
                          alt={`${tool.name} logo`}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                          <span className="text-xs text-white">Logo</span>
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white mb-1">{tool.price}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{tool.type}</div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative px-8 pb-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">{tool.name}</h3>
                  <p className="text-gray-300 text-base leading-relaxed mb-6 flex-1">{tool.description}</p>
                  
                  {/* Action Button */}
                  <div className="mt-auto">
                    <button className="w-full bg-gray-200 text-black hover:bg-white font-bold py-3 px-6 rounded-xl transition-all duration-300 group-hover:translate-y-[-2px] group-hover:shadow-lg">
                      Contact
                    </button>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
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
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Need Something Custom?</span>
              </div>
              
              {/* Main heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Don't See What
                <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  You're Looking For?
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                We specialize in building custom tools and solutions tailored to your exact needs. 
                Let's discuss how we can bring your vision to life.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <a
                  href="mailto:hello@d34nlabs.com"
                  className="inline-flex items-center bg-white text-black hover:bg-gray-200 hover:text-black font-bold px-10 py-6 text-lg rounded-lg group min-w-[200px] transition-all"
                >
                  Contact Us Now
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="inline-flex items-center border border-white/30 text-white hover:bg-white hover:text-black font-bold px-10 py-6 text-lg backdrop-blur-sm min-w-[200px] rounded-lg group transition-all">
                  <Zap className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Request Demo
                </button>
              </div>
              
              {/* Features list */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">Free Quote</div>
                  <div className="text-gray-400">No commitment assessment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">Fast Delivery</div>
                  <div className="text-gray-400">Most projects in 2-4 weeks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-2">Full Support</div>
                  <div className="text-gray-400">Ongoing maintenance included</div>
                </div>
              </div>
              
              {/* Urgency element */}
              <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <div className="text-white font-bold text-lg mb-1">Special Offer</div>
                    <div className="text-gray-300">20% discount on custom development projects this month</div>
                  </div>
                  <div className="text-white font-mono text-xl font-bold">
                    <span className="bg-white/20 px-3 py-1 rounded">Limited Time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}