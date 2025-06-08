function Socials() {
    return(
        <>
            <div className="col-span-4 row-span-1 bg-black/30 border border-white/20 rounded-2xl 
            shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 
            hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-4 flex items-center justify-center">
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
        </>
    )
}

export default Socials