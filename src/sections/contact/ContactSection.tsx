import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import SendMessage from './SendMessage';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-5xl font-bold mb-8">
            Get In <span className="text-firebase-red">Touch</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Glassmorphic Contact Card */}
          <div className="flex justify-center items-center">
            <div className="glass-box relative w-full max-w-[300px] h-[380px] flex justify-center items-center my-8 transition-all duration-600 ease-[cubic-bezier(0.23,1,0.32,1)]">
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

      {/* Glassmorphic Card CSS */}
      <style>{`
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
          z-index: 1;
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
          z-index: 1;
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
          z-index: 2;
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
          z-index: 2;
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