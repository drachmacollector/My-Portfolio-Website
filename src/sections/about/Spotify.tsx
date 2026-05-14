import React, { useEffect, useState } from 'react';
import { Music } from 'lucide-react'; // Using Lucide for a placeholder icon

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

const Spotify = () => {
  const [data, setData] = useState<SpotifyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch('/.netlify/functions/spotify');
        if (response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error('Error fetching Spotify data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyData();
    
    // Auto-refresh the widget every 60 seconds
    const interval = setInterval(fetchSpotifyData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-black/100 group transition-all duration-500 ease-out hover:scale-[1.01]">
      <div className="w-full h-full rounded-2xl p-4 flex flex-col justify-center relative overflow-hidden">
        
        {loading ? (
          <div className="flex items-center justify-center h-full w-full">
             <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : data ? (
          <a 
            href={data.songUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col h-full justify-between relative z-10"
          >
            {/* Header / Status */}
            <div className="flex items-center space-x-2 mb-4">
              <Music className={`w-4 h-4 ${data.isPlaying ? 'text-green-400' : 'text-gray-400'}`} />
              <span className={`text-xs font-medium tracking-wide ${data.isPlaying ? 'text-green-400' : 'text-gray-400'}`}>
                {data.isPlaying ? 'NOW PLAYING' : 'RECENTLY PLAYED'}
              </span>
            </div>
            
            {/* Track Info */}
            <div className="flex items-center space-x-4">
              <img 
                src={data.albumImageUrl} 
                alt={data.title} 
                className="w-16 h-16 rounded-md shadow-lg shadow-green-500/20 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col overflow-hidden">
                <span className="text-white font-bold truncate text-lg transition-colors group-hover:text-green-400">
                  {data.title}
                </span>
                <span className="text-gray-400 text-sm truncate">
                  {data.artist}
                </span>
              </div>
            </div>
          </a>
        ) : (
          <div className="flex items-center justify-center h-full text-white/50 text-sm">
            Spotify unavailable
          </div>
        )}
      </div>
    </div>
  );
};

export default Spotify;