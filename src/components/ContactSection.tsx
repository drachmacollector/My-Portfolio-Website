import React, { useState } from 'react';
import { Send, Mail, MessageCircle, User, MapPin } from 'lucide-react';

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

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Get In <span className="text-firebase-red">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-firebase-orange to-firebase-purple mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Glassmorphic Contact Card */}
          <div className="flex justify-center items-center">
            <div className="glass-box relative w-full max-w-[320px] h-[400px] flex justify-center items-center my-10 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <span className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none"></span>
              <div className="glass-content relative z-10 left-0 p-5 bg-white/5 backdrop-blur-md rounded-lg shadow-lg transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]">
                <h2 className="text-2xl font-bold text-white mb-6 transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="p-3 bg-firebase-orange/20 rounded-lg group-hover:bg-firebase-orange/30 transition-colors">
                      <Mail className="w-6 h-6 text-firebase-orange" />
                    </div>
                    <div className="relative z-20">
                      <p className="text-sm text-gray-300">Email</p>
                      <p className="font-medium text-white">nakulccs@gmail.com</p>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="p-3 bg-firebase-pink/20 rounded-lg group-hover:bg-firebase-pink/30 transition-colors">
                      <MapPin className="w-6 h-6 text-firebase-pink" />
                    </div>
                    <div className="relative z-20">
                      <p className="text-sm text-gray-300">Location</p>
                      <p className="font-medium text-white">Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="contact-form">
              <h3 className="text-2xl font-bold mb-6 text-firebase-orange">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-firebase-orange" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 
                      rounded-lg focus:border-firebase-orange focus:outline-none focus:ring-2 
                      focus:ring-firebase-orange/20 transition-all"
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 
                    text-firebase-orange" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 
                      rounded-lg focus:border-firebase-orange focus:outline-none focus:ring-2 
                      focus:ring-firebase-orange/20 transition-all"
                    />
                  </div>
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-3 top-4 w-5 h-5 text-firebase-orange" />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-black/20 border border-white/10 
                    rounded-lg focus:border-firebase-orange focus:outline-none focus:ring-2 
                    focus:ring-firebase-orange/20 transition-all"
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
                    className="w-full p-4 bg-black/20 border border-white/10 rounded-lg 
                    focus:border-firebase-orange focus:outline-none focus:ring-2 
                    focus:ring-firebase-orange/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-firebase-orange 
                  to-firebase-red rounded-lg font-semibold text-white hover:scale-105 transition-all 
                  duration-300 hover:shadow-2xl hover:shadow-firebase-orange/25 disabled:opacity-50 
                  disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
        </div>
      </div>

      {/* Glassmorphic Card CSS */}
      <style jsx>{`
        .glass-box {
          perspective: 1000px;
        }
        
        .glass-box::before {
          content: " ";
          position: absolute;
          top: 0;
          left: 50px;
          width: 50%;
          height: 100%;
          border-radius: 8px;
          transform: skewX(15deg);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          background: linear-gradient(315deg, #03a9f4, #ff0058);
          z-index: 1; /* Ensure behind content */
        }
        
        .glass-box::after {
          content: "";
          position: absolute;
          top: 0;
          left: 50px;
          width: 50%;
          height: 100%;
          border-radius: 8px;
          transform: skewX(15deg);
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          filter: blur(30px);
          background: linear-gradient(315deg, #03a9f4, #ff0058);
          z-index: 1; /* Ensure behind content */
        }
        
        .glass-box:hover::before,
        .glass-box:hover::after {
          transform: skewX(0deg);
          left: 20px;
          width: calc(100% - 90px);
        }
        
        .glass-box span::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: animate 3s ease-in-out infinite;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          z-index: 2; /* Behind content but above base gradient */
        }
        
        .glass-box:hover span::before {
          top: -50px;
          left: 50px;
          width: 100px;
          height: 100px;
          opacity: 1;
        }
        
        .glass-box span::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: animate 3s ease-in-out infinite;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          animation-delay: -1.5s;
          z-index: 2; /* Behind content but above base gradient */
        }
        
        .glass-box:hover span::after {
          bottom: -50px;
          right: 50px;
          width: 100px;
          height: 100px;
          opacity: 1;
        }
        
        @keyframes animate {
          0%, 100% {
            transform: translateY(10px) translateX(0);
          }
          50% {
            transform: translateY(-10px) translateX(10px);
          }
        }
        
        .glass-box:hover .glass-content {
          left: -25px;
          padding: 40px 30px;
        }
        
        .glass-box:hover .glass-content h2 {
          transform: translateY(-10px);
        }
        
        /* Fix text contrast */
        .glass-content {
          background: rgba(15, 15, 35, 0.7) !important;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        @media (max-width: 768px) {
          .glass-box {
            width: 280px !important;
            height: 360px !important;
            margin: 20px 0;
          }
          
          .glass-box:hover .glass-content {
            padding: 30px 20px;
            left: -15px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;