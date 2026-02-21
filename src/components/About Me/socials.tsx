function Socials() {
    return(
        <>
            <div className="w-full h-full rounded-2xl overflow-hidden
            shadow-lg transition-all duration-500 ease-out hover:scale-[1.02] 
            hover:shadow-[0_8px_30px_rgba(255,95,31,0.25),0_8px_30px_rgba(188,19,254,0.25)]
            group bg-black/100">
              
              <div className="w-full h-full rounded-2xl p-4 flex items-center justify-center
              relative overflow-hidden">
                
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-firebase-orange/0 via-firebase-purple/0 to-firebase-orange/0 
                group-hover:from-firebase-orange/5 group-hover:via-firebase-purple/5 group-hover:to-firebase-orange/5 
                transition-all duration-700 rounded-2xl pointer-events-none" />
                
                <div className="flex items-center space-x-8 relative z-10">
                  <span className="text-sm text-white/80 ml-2 transition-all duration-300 
                  group-hover:text-white/100">
                    Find me on
                  </span>
                  <a 
                    href="https://www.instagram.com/nxkul_19/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:scale-125 
                    hover:drop-shadow-[0_0_15px_rgba(255,69,96,0.7)]
                    hover:-translate-y-1"
                  >
                    <img 
                      src="/Uploads/instagram.png" 
                      alt="Instagram"
                      className="w-9 h-9 object-contain"
                    />
                  </a>
                  <a 
                    href="https://old.reddit.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:scale-125 
                    hover:drop-shadow-[0_0_15px_rgba(255,69,0,0.7)]
                    hover:-translate-y-1"
                  >
                    <img 
                      src="/Uploads/reddit.png" 
                      alt="Reddit"
                      className="w-12 h-12 object-contain"
                    />
                  </a>
                  <a 
                    href="https://4chan.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:scale-125 
                    hover:drop-shadow-[0_0_15px_rgba(76,175,80,0.7)]
                    hover:-translate-y-1"
                  >
                    <img 
                      src="/Uploads/4chan.png" 
                      alt="4chan"
                      className="w-16 h-16 object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
        </>
    )
}

export default Socials