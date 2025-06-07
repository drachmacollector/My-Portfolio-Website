
function monkeytype() {
    return(
        <>
            <div className="col-span-3 h-[35vh] bg-black/30 border border-white/20 rounded-2xl 
            shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 
            hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-6 flex flex-col justify-center text-center">

              <a 
                href="https://monkeytype.com/profile/drachmacollector" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-cyan-400 hover:none"
              >

              <h3 className="text-xl font-bold text-white mb-2">Typing Speed</h3>
              <div className="border-b border-cyan-400 w-12 mx-auto mb-3" />
              <div className="text-4xl font-extrabold text-white mb-3">116 wpm</div>
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-center space-x-3 text-sm text-white/75">
                  <div className="flex items-center space-x-1">
                    <span>⏱️</span>
                    <span>15s</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>✓</span>
                    <span>100%</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>🌐</span>
                    <span>EN</span>
                  </div>
                </div>
              </div>

                View on Monkeytype
              </a>
            </div>
        </>
    )
}

export default monkeytype