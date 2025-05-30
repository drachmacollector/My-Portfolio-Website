
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn", 
      gradient: "from-blue-600 to-blue-800"
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
      gradient: "from-sky-500 to-blue-600"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-firebase-orange/5 via-transparent to-neon-red/5" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-firebase-orange via-neon-red to-firebase-pink bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glassmorphic-card">
              <h3 className="text-2xl font-semibold mb-6 text-firebase-orange">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-xl bg-firebase-orange/10 border border-firebase-orange/20 group-hover:bg-firebase-orange/20 transition-all duration-300">
                    <Mail className="w-6 h-6 text-firebase-orange" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">hello@nakul.dev</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-xl bg-neon-red/10 border border-neon-red/20 group-hover:bg-neon-red/20 transition-all duration-300">
                    <Phone className="w-6 h-6 text-neon-red" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-xl bg-firebase-purple/10 border border-firebase-purple/20 group-hover:bg-firebase-purple/20 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-firebase-purple" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glassmorphic-card">
              <h3 className="text-xl font-semibold mb-6 text-white">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-button bg-gradient-to-r ${social.gradient}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glassmorphic-card">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="glassmorphic-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="glassmorphic-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="glassmorphic-input resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="glassmorphic-button w-full py-4 px-6 bg-gradient-to-r from-firebase-orange to-neon-red rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-firebase-orange/25 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
