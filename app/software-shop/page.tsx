"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Bot, Gamepad2, ListChecks, Layers } from "lucide-react";

type Tool = {
  name: string;
  description: string;
  price: string; // Add price field
  type: string; // Add type field
  icon: React.ReactNode; // Add icon field
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {currentTools.map((tool) => (
              <div
                key={tool.name}
                className="bg-gradient-to-br from-[#181c20] to-[#23272b] rounded-2xl border border-neutral-800 shadow-lg flex flex-col min-h-[220px] overflow-hidden"
              >
                {/* Icon instead of tag */}
                <div className="px-6 pt-6">
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-neutral-800 text-white mb-4">
                    {tool.icon}
                  </span>
                </div>
                {/* Title & Description */}
                <div className="px-6 pb-4 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-white mb-2">{tool.name}</h3>
                  <p className="text-gray-300 mb-6">{tool.description}</p>
                </div>
                {/* Meta info */}
                <div className="px-6 pb-6 flex items-center justify-between text-xs text-gray-400">
                  <span>{tool.type}</span>
                  <span>{tool.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Interested in a tool or want a custom solution?</h2>
            <p className="text-lg text-gray-300 mb-6">
              Contact us for more information, demos, or to discuss your project needs!
            </p>
            <a
              href="mailto:hello@d34nlabs.com"
              className="inline-block px-8 py-3 rounded-full bg-white text-black font-semibold shadow hover:bg-gray-200 transition"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}