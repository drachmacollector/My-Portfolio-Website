function Socials() {
    return(
        <>
            <div className="w-full h-full bg-gradient-to-r from-firebase-orange to-firebase-purple rounded-2xl p-[2px] 
            shadow-lg transition transform duration-300 hover:scale-105 
            hover:shadow-[0_0_20px_rgba(255,95,31,0.1),0_0_40px_rgba(188,19,254,0.1)]">
              
              <div className="w-full h-full bg-black/100 rounded-2xl p-4 flex items-center justify-center">
                <div className="flex items-center space-x-8">
                  <span className="text-sm text-white/80 ml-2">Find me on</span>
                  <a 
                    href="https://www.instagram.com/nxkul_19/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,69,96,0.5)]"
                  >
                    <img 
                      src="/lovable-uploads/instagram.png" 
                      alt="Reddit"
                      className="w-9 h-9 object-contain"
                    />
                  </a>
                  <a 
                    href="https://old.reddit.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,69,96,0.5)]"
                  >
                    <img 
                      src="/lovable-uploads/reddit.png" 
                      alt="Reddit"
                      className="w-12 h-12 object-contain"
                    />
                  </a>
                  <a 
                    href="https://4chan.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(76,175,80,0.5)]"
                  >
                    <img 
                      src="/lovable-uploads/4chan.png" 
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