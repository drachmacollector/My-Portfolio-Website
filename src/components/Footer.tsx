
import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 lg:px-8">
      {/* Tapering line separator */}
      <div className="w-full flex justify-center mb-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-3/4 max-w-2xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Tech Stack Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-300">Built with</span>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-md flex items-center justify-center text-white text-xs font-bold">
                    A
                  </div>
                  <span className="text-white font-medium">Astro</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-300">Styled with</span>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-md flex items-center justify-center text-white text-xs font-bold">
                    T
                  </div>
                  <span className="text-white font-medium">TailwindCSS</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-lg text-gray-300">Deployed on</span>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-black to-gray-800 rounded-md flex items-center justify-center text-white text-xs font-bold">
                    ▲
                  </div>
                  <span className="text-white font-medium">Vercel</span>
                </div>
              </div>
            </div>
          </div>

          {/* Review Panel */}
          <div className="flex justify-center lg:justify-end">
            <div className="glass-card p-6 space-y-4 max-w-sm">
              <p className="text-center text-white font-medium">
                Did you like my website? Leave a review
              </p>
              
              <div className="hover:scale-x-105 transition-all duration-300 *:transition-all *:duration-300 flex justify-center text-2xl items-center z-10 bg-white/10 backdrop-blur-sm gap-2 p-2 rounded-full border border-white/20">
                <button className="relative before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Like'] before:bg-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white/20 backdrop-blur-sm rounded-full p-2 px-3 border border-white/10">
                  🥰
                </button>
                <button className="relative before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Cheer'] before:bg-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white/20 backdrop-blur-sm rounded-full p-2 px-3 border border-white/10">
                  👏🏻
                </button>
                <button className="relative before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Celebrate'] before:bg-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white/20 backdrop-blur-sm rounded-full p-2 px-3 border border-white/10">
                  🎉
                </button>
                <button className="relative before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Appreciate'] before:bg-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white/20 backdrop-blur-sm rounded-full p-2 px-3 border border-white/10">
                  ✨
                </button>
                <button className="relative before:hidden hover:before:flex before:justify-center before:items-center before:h-4 before:text-[.6rem] before:px-1 before:content-['Dislike'] before:bg-black before:text-white before:bg-opacity-50 before:absolute before:-top-7 before:rounded-lg hover:-translate-y-5 cursor-pointer hover:scale-125 bg-white/20 backdrop-blur-sm rounded-full p-2 px-3 border border-white/10">
                  👎🏻
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
