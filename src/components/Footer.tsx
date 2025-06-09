import React from 'react';
import Emojibar from './emoji-bar';

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 lg:px-8">
      {/* Tapering line separator */}
      <div className="w-full flex justify-center mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/80 to-transparent w-3/4 max-w-8xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tech Stack Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-300">Built with</span>
                <div className="flex items-center space-x-2">
                  <img 
                    src="/Uploads/React.png" 
                    alt="React" 
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-white font-medium">React</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-300">Styled with</span>
                <div className="flex items-center space-x-2">
                  <img 
                    src="/Uploads/Tailwind.png" 
                    alt="Tailwind CSS" 
                    className="w-6 h-6 object-contain"
                  />
                  <span className="text-white font-medium">Tailwind CSS</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-300">Deployed on</span>
                <div className="flex items-center space-x-2">
                  <img 
                        src="/Uploads/netlify.png" 
                        alt="netlify" 
                        className="w-6 h-6 object-contain"
                      />
                  <span className="text-white font-medium">Netlify</span>
                </div>
              </div>
            </div>
          </div>

          {/* Review Panel */}
          <Emojibar></Emojibar>

        </div>
      </div>
    </footer>
  );
};

export default Footer;