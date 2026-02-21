import React from 'react';

function Spotify() {
    return(
        <>
        <div className='w-full h-full transition-all duration-500 ease-out hover:scale-[1.02] 
        group cursor-pointer rounded-2xl overflow-hidden
        hover:shadow-[0_8px_30px_rgba(30,215,96,0.3)] relative bg-black/100'>
            {/* Animated border gradient - moved outside to prevent glitch */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-400 to-green-500 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-sm -z-10" />
            
            <div className="w-full h-full relative overflow-hidden rounded-2xl">
                <div className="w-[calc(100%+20px)] h-full overflow-hidden">
                    <iframe
                        src="https://open.spotify.com/embed/track/38bDGWuyYdSdNfrFfbCiVS?utm_source=generator&theme=0"
                        width="100%" height="105%" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                        className="relative z-10 rounded-2xl transition-all duration-300 
                        group-hover:brightness-110"
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Spotify