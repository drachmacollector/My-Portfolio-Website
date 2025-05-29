
import React, { useState } from 'react';
import { Send, Mail, MessageCircle, User, MapPin, Github, Linkedin, FileText } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nakulccs@gmail.com',
      color: 'firebase-orange'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      color: 'firebase-pink'
    }
  ];

  const socialButtons = [
    {
      name: 'GitHub',
      url: 'https://github.com/drachmacollector',
      icon: Github,
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nakul-bhadade-b7ba06313/',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Read.cv',
      url: '#',
      icon: FileText,
      color: 'from-purple-600 to-purple-800'
    },
    {
      name: 'Email',
      url: 'mailto:nakulccs@gmail.com',
      icon: Mail,
      color: 'from-firebase-orange to-firebase-red'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Get In <span className="text-firebase-orange">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-firebase-orange to-firebase-purple mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="glassmorphic-card">
              <h3 className="text-2xl font-bold mb-6 text-firebase-orange">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-firebase-orange/70 group-focus-within:text-firebase-orange transition-colors" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="glassmorphic-input pl-12"
                    />
                  </div>
                  
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-firebase-orange/70 group-focus-within:text-firebase-orange transition-colors" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="glassmorphic-input pl-12"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <MessageCircle className="absolute left-4 top-4 w-5 h-5 text-firebase-orange/70 group-focus-within:text-firebase-orange transition-colors" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="glassmorphic-input pl-12"
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={6}
                    required
                    className="glassmorphic-input p-4 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-firebase-orange to-firebase-red rounded-xl font-semibold text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:shadow-2xl hover:shadow-firebase-orange/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 glassmorphic-button"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glassmorphic-card">
              <h3 className="text-2xl font-bold mb-6 text-firebase-purple">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4 group cursor-pointer hover:transform hover:scale-105 transition-all duration-300">
                      <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl group-hover:bg-white/10 transition-all duration-300">
                        <Icon className="w-6 h-6 text-firebase-orange" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">{info.label}</p>
                        <p className="font-medium text-white text-lg">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Buttons */}
            <div className="glassmorphic-card">
              <h3 className="text-2xl font-bold mb-6 text-firebase-pink">Connect With Me</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {socialButtons.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-button bg-gradient-to-br ${social.color} text-center group`}
                    >
                      <Icon className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <p className="font-medium text-white text-sm">
                        {social.name}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glassmorphic-card text-center">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold text-green-400">Available for Work</span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently accepting new projects and collaborations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Animations */}
      <div className="absolute top-20 right-20 w-1 h-1 bg-firebase-orange rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-firebase-purple rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-firebase-pink rounded-full animate-pulse delay-2000" />
    </section>
  );
};

export default ContactSection;
