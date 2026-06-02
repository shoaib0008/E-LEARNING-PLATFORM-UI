import { Play, Pause, Volume2, Maximize, SkipForward } from 'lucide-react';
import { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function VideoPlayer({ title, poster }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);

  return (
    <div className="relative aspect-video bg-black rounded-2xl overflow-hidden group shadow-lg border border-slate-800">
      
      {/* Video Placeholder (We'll use a poster image since no real video src is provided) */}
      <img 
        src={poster} 
        alt={title} 
        className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-50' : 'opacity-80'}`} 
      />
      
      {/* Big Play Button Overlay */}
      {!isPlaying && (
        <button 
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 flex items-center justify-center m-auto w-20 h-20 bg-brand-600/90 text-white rounded-full hover:scale-110 hover:bg-brand-500 transition-all duration-300 z-10 shadow-xl backdrop-blur-sm"
        >
          <Play size={40} className="ml-2" />
        </button>
      )}

      {/* Controls Overlay */}
      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col justify-end transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
        
        {/* Scrubber */}
        <div className="mb-4 px-2">
           <ProgressBar progress={progress} height="h-1.5" className="cursor-pointer" />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between text-white px-2">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsPlaying(!isPlaying)} 
              className="hover:text-brand-400 transition-colors"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button className="hover:text-brand-400 transition-colors">
              <SkipForward size={24} />
            </button>
            <div className="flex items-center gap-2 group/volume">
              <Volume2 size={20} className="hover:text-brand-400 transition-colors cursor-pointer" />
              <div className="w-0 overflow-hidden group-hover/volume:w-20 transition-all duration-300 h-1.5 bg-white/30 rounded-full cursor-pointer">
                <div className="w-1/2 h-full bg-brand-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="text-sm font-medium ml-2 opacity-80">
              12:34 / 45:00
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hover:text-brand-400 transition-colors text-sm font-medium border border-white/30 rounded px-2 py-0.5 backdrop-blur-sm">
              1x
            </button>
            <button className="hover:text-brand-400 transition-colors">
              <Maximize size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
