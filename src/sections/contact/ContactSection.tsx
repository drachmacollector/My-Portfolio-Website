import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import SendMessage from './SendMessage';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8">
            Get In <span className="text-firebase-red">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Glassmorphic Contact Card */}
          <div className="flex justify-center items-center">
            <div className="glass-box relative w-full max-w-sm h-auto min-h-[340px] lg:min-h-[380px] flex justify-center items-center my-8 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <span className="absolute top-0 left-0 right-0 bottom-0 z-5 pointer-events-none"></span>
              <div className="glass-content relative z-10 left-0 p-5 bg-white/5 backdrop-blur-md rounded-lg shadow-lg transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]">
                <h2 className="text-xl font-bold text-white mb-5 transition-transform duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="p-2.5 bg-firebase-orange/20 rounded-lg group-hover:bg-firebase-orange/30 transition-colors">
                      <Mail className="w-5 h-5 text-firebase-orange" />
                    </div>
                    <div className="relative z-20">
                      <p className="text-xs text-gray-300">Email</p>
                      <p className="font-medium text-white text-sm md:text-base">nakulccs@gmail.com</p>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="p-2.5 bg-firebase-pink/20 rounded-lg group-hover:bg-firebase-pink/30 transition-colors">
                      <MapPin className="w-5 h-5 text-firebase-pink" />
                    </div>
                    <div className="relative z-20">
                      <p className="text-xs text-gray-300">Location</p>
                      <p className="font-medium text-white text-sm md:text-base">Mumbai, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <SendMessage />
          </div>

        </div>
      </div>

    </section>
  );
};

export default ContactSection;