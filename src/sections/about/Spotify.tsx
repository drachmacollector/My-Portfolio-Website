import React from 'react';

function Spotify() {
    return(
        <>
        <div className='w-full h-full rounded-2xl overflow-hidden
        relative bg-black/100'>
            {/* Animated border gradient removed */}
            
            <div className="w-full h-full relative overflow-hidden rounded-2xl">
                <div className="w-[calc(100%+20px)] h-full overflow-hidden">
                    <iframe
                        src="https://open.spotify.com/embed/track/38bDGWuyYdSdNfrFfbCiVS?utm_source=generator&theme=0"
                        width="100%" height="105%" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                        className="relative z-10 rounded-2xl"
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Spotify