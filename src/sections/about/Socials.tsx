function Socials() {
    return(
        <div className="w-full h-full rounded-2xl overflow-hidden
            shadow-lg bg-black/100">
              
              <div className="w-full h-full rounded-2xl p-4 flex items-center justify-center
              relative overflow-hidden">
                
                {/* Animated gradient overlay removed */}
                
                <div className="flex items-center space-x-8 relative z-10">
                  <span className="text-sm text-white/80 ml-2 transition-all duration-300 
                  group-hover:text-white/100">
                    Find me on
                  </span>
                  <a 
                    href="https://www.instagram.com/nxkul_19/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,69,96,0.7)]"
                  >
                    <img 
                      src="/instagram.png" 
                      alt="Instagram"
                      className="w-9 h-9 object-contain"
                    />
                  </a>
                  <a 
                    href="https://old.reddit.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,69,0,0.7)]"
                  >
                    <img 
                      src="/reddit.png" 
                      alt="Reddit"
                      className="w-12 h-12 object-contain"
                    />
                  </a>
                  <a 
                    href="https://4chan.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(76,175,80,0.7)]"
                  >
                    <img 
                      src="/4chan.png" 
                      alt="4chan"
                      className="w-16 h-16 object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
    )
}

export default Socials