import React from 'react';

function Spotify() {
    return(
        <>
        <div className='w-full h-full'>
            <iframe
            src="https://open.spotify.com/embed/track/0GONea6G2XdnHWjNZd6zt3?utm_source=generator&theme=0"
            className="w-full h-full rounded-2xl"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
        </>
    )
}

export default Spotify