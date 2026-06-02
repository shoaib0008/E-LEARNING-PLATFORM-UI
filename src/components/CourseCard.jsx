import { Link } from 'react-router-dom';
import { PlayCircle, Clock, Star } from 'lucide-react';
import ProgressBar from './ProgressBar';

export default function CourseCard({ id, title, instructor, image, progress, duration, rating }) {
  return (
    <Link to={`/course/${id}`} className="group block h-full">
      <div className="glass-card h-full flex flex-col relative group-hover:border-brand-200 dark:group-hover:border-brand-800">
        
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          {/* Overlay Play Button */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <PlayCircle className="text-white w-12 h-12 shadow-sm drop-shadow-md transform scale-75 group-hover:scale-100 transition-transform duration-300" />
          </div>
          
          {/* Rating Badge */}
          <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-sm text-amber-500">
            <Star size={12} className="fill-current" />
            <span className="text-slate-800 dark:text-slate-200">{rating}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 leading-tight mb-1 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1">
            {instructor}
          </p>

          <div className="mt-auto space-y-3">
            {/* Metadata */}
            <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {duration}
              </div>
              <span className="text-brand-600 dark:text-brand-400 font-bold">{progress > 0 ? 'Continue' : 'Start'}</span>
            </div>

            {/* Progress */}
            {progress > 0 && <ProgressBar progress={progress} height="h-1.5" />}
          </div>
        </div>
      </div>
    </Link>
  );
}
