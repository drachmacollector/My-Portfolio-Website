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
    let isMounted = true;
    let activeController: AbortController | null = null;
    let interval: ReturnType<typeof setInterval> | null = null;

    const fetchSpotifyData = async () => {
      activeController?.abort();
      const controller = new AbortController();
      activeController = controller;

      try {
        const response = await fetch('/.netlify/functions/spotify', {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Spotify request failed with status ${response.status}`);
        }

        const result = await response.json();
        if (isMounted && !controller.signal.aborted) {
          setData(result);
        }
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        console.error('Error fetching Spotify data:', error);
      } finally {
        if (activeController === controller) {
          activeController = null;
        }

        if (isMounted && !controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    const stopPolling = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const startPolling = () => {
      stopPolling();
      interval = setInterval(fetchSpotifyData, 60000);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopPolling();
        return;
      }

      fetchSpotifyData();
      startPolling();
    };

    if (document.hidden) {
      setLoading(false);
    } else {
      fetchSpotifyData();
      startPolling();
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      isMounted = false;
      stopPolling();
      activeController?.abort();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className="w-full h-full rounded-2xl overflow-hidden shadow-lg group transition-all duration-500 ease-out border bg-[radial-gradient(circle_at_20%_20%,rgba(29,185,84,0.28),rgba(0,0,0,0.92)_48%,rgba(0,0,0,1)_100%)] border-[#1DB954]/30 backdrop-blur-xl shadow-[0_0_28px_rgba(29,185,84,0.14)] hover:border-[#1DB954]/55 hover:shadow-[0_0_38px_rgba(29,185,84,0.28)]"
    >
      <div className="w-full h-full rounded-2xl p-4 flex flex-col justify-center relative overflow-hidden">
        <style>{`
          @keyframes spotify-bar {
            0%, 100% { transform: scaleY(0.35); opacity: 0.5; }
            50% { transform: scaleY(1); opacity: 1; }
          }
        `}</style>

        <div className="absolute inset-0 rounded-2xl bg-white/[0.035] backdrop-blur-md pointer-events-none" />
        <div className="absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[#1DB954]/20 blur-3xl pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />
        <div className="absolute left-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-[#1DB954]/70 to-transparent pointer-events-none" />
        
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
            <div className="flex items-center gap-2 mb-4 min-w-0">
              <Music className="w-4 h-4 flex-shrink-0 text-[#1DB954] transition-colors duration-300" />
              <div className="flex h-4 items-end gap-[3px] flex-shrink-0" aria-hidden="true">
                {[0, 120, 240, 360].map((delay) => (
                  <span
                    key={delay}
                    className="w-[3px] h-4 origin-bottom rounded-full bg-[#1DB954] shadow-[0_0_8px_rgba(29,185,84,0.8)] animate-[spotify-bar_0.82s_ease-in-out_infinite]"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
              <span className="min-w-0 truncate text-xs font-semibold tracking-[0.18em] text-[#1DB954] transition-colors duration-300">
                NOW PLAYING
              </span>
            </div>
            
            {/* Track Info */}
            <div className="flex items-center gap-4 min-w-0">
              <div className="relative w-16 h-16 flex-shrink-0 rounded-full p-[3px] transition-all duration-500 bg-gradient-to-br from-[#1DB954] via-firebase-cyan to-firebase-purple shadow-[0_0_22px_rgba(29,185,84,0.32)] group-hover:shadow-[0_0_30px_rgba(29,185,84,0.55)]">
                <img 
                  src={data.albumImageUrl} 
                  alt={data.title} 
                  className="w-full h-full rounded-full object-cover transition-all duration-500 group-hover:brightness-110"
                  style={{ animation: 'rotate-slow 7s linear infinite' }}
                />
                <span className="absolute inset-1 rounded-full ring-1 ring-white/10 pointer-events-none" />
                <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/90 ring-2 ring-white/20 pointer-events-none" />
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="min-w-0 truncate text-lg font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#1DB954]">
                  {data.title}
                </span>
                <span className="min-w-0 truncate text-sm text-gray-400 transition-colors duration-300 group-hover:text-white/70">
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
