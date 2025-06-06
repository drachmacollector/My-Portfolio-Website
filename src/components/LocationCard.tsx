
import React from 'react';
import { MapPin } from 'lucide-react';

const LocationCard = () => {
  return (
    <div className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg transition transform duration-300 hover:scale-105 hover:border-white/40 hover:backdrop-blur-2xl hover:drop-shadow-[0_0_10px_rgba(100,200,255,0.25)] p-6 flex flex-col h-full">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-firebase-blue/20 rounded-lg">
          <MapPin className="w-5 h-5 text-firebase-blue" />
        </div>
        <h3 className="text-xl font-bold text-white">Where I'm Based</h3>
      </div>
      
      <div className="flex-1 rounded-xl overflow-hidden border border-white/10">
        <iframe 
          width="100%" 
          height="200" 
          src="https://api.maptiler.com/maps/0197464a-ae8e-724a-886c-23e94c729e5c/?key=p0wn7sb976qwNdlgql0m#10.0/19.00720/72.85349"
          className="w-full h-full rounded-xl"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default LocationCard;
