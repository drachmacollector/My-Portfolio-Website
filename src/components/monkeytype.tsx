function monkeytype() {
    return(
        <>
            <div className="w-full h-full bg-gradient-to-r from-firebase-orange to-firebase-purple rounded-2xl p-[1px] 
            shadow-lg transition transform duration-300 hover:scale-105 
            hover:shadow-[0_0_20px_rgba(255,95,31,0.2),0_0_40px_rgba(188,19,254,0.2)]">
              
              <div className="w-full h-full bg-black/100 rounded-2xl p-2 flex flex-col justify-center text-center">
                <a 
                  href="https://monkeytype.com/profile/drachmacollector" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block h-full flex flex-col justify-center items-center"
                >

                  {/* Header with Logo */}
                  <div className="flex items-center justify-center space-x-1 mb-8">
                    <img 
                      src="/Uploads/monkeytype.png" 
                      alt="Monkeytype"
                      className="w-8 h-6 opacity-100"
                    />
                    <h3 className="text-lg font-medium text-white/100">Typing Speed</h3>
                  </div>

                  {/* Main Speed Display - Hero Element */}
                  <div className="mb-4">
                    <div className="text-7xl font-black text-transparent 
                    bg-gradient-to-r from-cyan-400 via-firebase-blue to-blue-400 bg-clip-text 
                                 transition-transform duration-300 hover:scale-110">
                      116
                    </div>
                    <div className="text-lg font-medium text-cyan-300/100 -mt-2">
                      words per minute
                    </div>
                  </div>

                  {/* Minimal Stats */}
                  <div className="flex items-center justify-center space-x-6 text-sm text-blue-300/60 mb-6">
                    {/* 15s with clock icon */}
                    <span className="flex items-center space-x-1">
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        className="w-4 h-4 text-blue-300 group-hover:text-slate-300"
                        fill="currentColor"
                      >
                        <path d="M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8" />
                      </svg>
                      <span className="text-blue-300">15s</span>
                    </span>

                    {/* Dot */}
                    <span className="w-1 h-1 bg-cyan-400/40 rounded-full" />

                    {/* 100% with progress icon */}
                    <span className="flex items-center space-x-1">
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        className="w-4 h-4 text-blue-300 group-hover:text-slate-300"
                        fill="currentColor"
                      >
                        <path d="M221.87 83.16A104.1 104.1 0 1 1 195.67 49l22.67-22.68a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32l27.72-27.72a40 40 0 1 0 17.87 31.09a8 8 0 1 1 16-.9a56 56 0 1 1-22.38-41.65l22.75-22.75a87.88 87.88 0 1 0 23.13 29.67a8 8 0 0 1 14.44-6.9" />
                      </svg>
                      <span className="text-blue-300">100%</span>
                    </span>

                    {/* Dot */}
                    <span className="w-1 h-1 bg-cyan-400/40 rounded-full" />

                    {/* English with language icon */}
                    <span className="flex items-center space-x-1">
                      <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        className="w-4 h-4 text-blue-300 group-hover:text-slate-300"
                        fill="currentColor"
                      >
                        <path d="m247.15 212.42l-56-112a8 8 0 0 0-14.31 0l-21.71 43.43A88 88 0 0 1 108 126.93A103.65 103.65 0 0 0 135.69 64H160a8 8 0 0 0 0-16h-56V32a8 8 0 0 0-16 0v16H32a8 8 0 0 0 0 16h87.63A87.76 87.76 0 0 1 96 116.35a87.7 87.7 0 0 1-19-31a8 8 0 1 0-15.08 5.34A103.6 103.6 0 0 0 84 127a87.55 87.55 0 0 1-52 17a8 8 0 0 0 0 16a103.46 103.46 0 0 0 64-22.08a104.2 104.2 0 0 0 51.44 21.31l-26.6 53.19a8 8 0 0 0 14.31 7.16L148.94 192h70.11l13.79 27.58A8 8 0 0 0 240 224a8 8 0 0 0 7.15-11.58M156.94 176L184 121.89L211.05 176Z" />
                      </svg>
                      <span className="text-blue-300">English</span>
                    </span>
                  </div>


                  {/* Subtle CTA */}
                  <div className="text-xs text-cyan-400/100 hover:text-cyan-200 transition-colors duration-300">
                    View on Monkeytype →
                  </div>

                </a>
              </div>
            </div>
        </>
    )
}

export default monkeytype