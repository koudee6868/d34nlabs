"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, User, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        projectType: ""
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "hello@d34nlabs.com",
      description: "Send us an email anytime!"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: "123 Innovation Drive",
      description: "San Francisco, CA 94105"
    }
  ];

  const projectTypes = [
    "Custom Software Development",
    "Web Application",
    "Mobile App",
    "AI/ML Solution",
    "Design Tool",
    "MMO/Gaming Tool",
    "Other"
  ];

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gray-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="max-w-screen-2xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Let's Work Together</span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Get In
              <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? We'd love to hear about your project 
              and discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="relative">
              <Card className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] border-white/10 shadow-2xl">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">Send us a message</h2>
                    <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-400">Thank you for contacting us. We'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white font-semibold mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-white font-semibold mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2">Project Type</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all"
                        >
                          <option value="" className="bg-gray-900">Select a project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type} className="bg-gray-900">{type}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2">Subject *</label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all"
                          placeholder="Brief description of your project"
                        />
                      </div>

                      <div>
                        <label className="block text-white font-semibold mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all resize-none"
                          placeholder="Tell us more about your project, timeline, budget, and any specific requirements..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-white text-black hover:bg-gray-200 font-bold py-4 text-lg group transition-all"
                      >
                        Send Message
                        <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in touch</h2>
                <p className="text-gray-400 text-lg mb-8">
                  We're here to help bring your vision to life. Whether you need a custom solution 
                  or have questions about our existing tools, we'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] border-white/10 hover:border-white/30 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-2xl bg-white/10 border border-white/20 group-hover:scale-110 transition-transform duration-300">
                          <div className="text-white">{info.icon}</div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                          <p className="text-white/90 font-medium mb-1">{info.details}</p>
                          <p className="text-gray-400">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Business Hours */}
              <Card className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-white/10 border border-white/20">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                      <div className="space-y-2 text-gray-400">
                        <div className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span className="text-white">8:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span className="text-white">9:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span className="text-gray-500">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Response Promise */}
              <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl">
                <div className="text-center">
                  <ArrowRight className="w-8 h-8 text-white mx-auto mb-4 rotate-45" />
                  <h3 className="text-xl font-bold text-white mb-2">Quick Response Promise</h3>
                  <p className="text-gray-300">
                    We typically respond to all inquiries within 2-4 hours during business hours. 
                    For urgent matters, don't hesitate to call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
