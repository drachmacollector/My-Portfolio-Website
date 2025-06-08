
function monkeytype() {
    return(
        <>
            <div className="w-full h-full bg-black/30 border border-white/20 rounded-2xl 
            shadow-lg transition-all duration-500 hover:scale-105 hover:border-cyan-400/60 
            hover:drop-shadow-[0_0_20px_rgba(100,200,255,0.4)] p-6 flex flex-col justify-center text-center group">

              <a 
                href="https://monkeytype.com/profile/drachmacollector" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full flex flex-col justify-center text-center"
              >

              <h3 className="text-lg font-semibold text-white/80 mb-3 group-hover:text-cyan-300 transition-colors duration-300">Typing Speed</h3>
              
              {/* Main Speed Display */}
              <div className="mb-4">
                <div className="text-6xl font-black text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text 
                             animate-pulse group-hover:scale-110 transition-transform duration-500">
                  116
                </div>
                <div className="text-xl font-bold text-cyan-400 mt-1 group-hover:text-cyan-300 transition-colors duration-300">
                  WPM
                </div>
              </div>

              {/* Stats Row */}
              <div className="space-y-2 mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center space-x-4 text-sm text-white/75">
                  <div className="flex items-center space-x-1 transform group-hover:scale-105 transition-transform duration-300">
                    <span className="text-orange-400">⏱️</span>
                    <span>15s</span>
                  </div>
                  <div className="flex items-center space-x-1 transform group-hover:scale-105 transition-transform duration-300">
                    <span className="text-green-400">✓</span>
                    <span>100%</span>
                  </div>
                  <div className="flex items-center space-x-1 transform group-hover:scale-105 transition-transform duration-300">
                    <span className="text-blue-400">🌐</span>
                    <span>EN</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <div className="inline-flex items-center px-4 py-2 rounded-lg border border-cyan-400/30 
                             bg-cyan-400/10 text-cyan-400 text-sm font-medium
                             group-hover:border-cyan-400/60 group-hover:bg-cyan-400/20 group-hover:text-cyan-300
                             group-hover:shadow-[0_0_15px_rgba(100,200,255,0.3)]
                             transition-all duration-300 transform group-hover:scale-105">
                  <span className="mr-2">👁️</span>
                  View on Monkeytype
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>

              </a>
            </div>
        </>
    )
}

export default monkeytype
