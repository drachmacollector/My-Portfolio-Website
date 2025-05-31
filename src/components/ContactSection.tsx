
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nakulccs@gmail.com',
      href: 'mailto:nakulccs@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/drachmacollector',
      color: 'hover:text-firebase-orange'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nakul-bhadade-b7ba06313/',
      color: 'hover:text-firebase-blue'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-firebase-red/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-firebase-orange/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-firebase-purple/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Let's <span className="text-firebase-red">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-firebase-orange to-firebase-purple mx-auto mb-8" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="contact-form">
            <h3 className="text-2xl font-bold mb-8 text-firebase-blue">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-firebase-orange focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-firebase-orange focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-firebase-orange focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-firebase-orange to-firebase-red 
                         hover:from-firebase-red hover:to-firebase-purple text-white font-semibold 
                         py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 
                         hover:shadow-lg hover:shadow-firebase-orange/25 disabled:opacity-50 
                         disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-8 text-firebase-purple">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 
                               hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-firebase-orange to-firebase-red 
                                    rounded-lg flex items-center justify-center group-hover:scale-110 
                                    transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h4 className="text-xl font-bold mb-6 text-firebase-blue">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center 
                               hover:bg-white/10 transition-all duration-300 group ${social.color}`}
                    >
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Particles */}
      <style>
        {`
          @keyframes float-particle {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg); 
              opacity: 0.3; 
            }
            50% { 
              transform: translateY(-20px) rotate(180deg); 
              opacity: 0.8; 
            }
          }
          
          .contact-form::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255, 138, 101, 0.03), transparent);
            animation: float-particle 6s ease-in-out infinite;
            pointer-events: none;
          }
        `}
      </style>
    </section>
  );
};

export default ContactSection;
