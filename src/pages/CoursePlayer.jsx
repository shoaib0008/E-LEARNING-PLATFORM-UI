import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, PlayCircle, FileText, Download, ChevronLeft } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';

export default function CoursePlayer() {
  const { id } = useParams();

  const curriculum = [
    {
      module: 'Module 1: Introduction to Advanced Concepts',
      duration: '45m',
      lessons: [
        { id: 1, title: 'Course Overview & Objectives', duration: '5:20', type: 'video', completed: true },
        { id: 2, title: 'Setting Up Your Environment', duration: '12:45', type: 'video', completed: true },
        { id: 3, title: 'Cheat Sheet: Essential Shortcuts', duration: '2 pages', type: 'doc', completed: false },
      ]
    },
    {
      module: 'Module 2: Core Architecture Patterns',
      duration: '2h 15m',
      lessons: [
        { id: 4, title: 'Understanding Compound Components', duration: '24:10', type: 'video', completed: false, active: true },
        { id: 5, title: 'The Render Props Pattern in 2024', duration: '18:30', type: 'video', completed: false },
        { id: 6, title: 'Custom Hooks for State Logic', duration: '32:15', type: 'video', completed: false },
        { id: 7, title: 'Project Structure Best Practices', duration: '10:00', type: 'video', completed: false },
      ]
    },
    {
      module: 'Module 3: Performance Optimization',
      duration: '1h 30m',
      lessons: [
        { id: 8, title: 'Memoization Strategies', duration: '15:20', type: 'video', completed: false },
        { id: 9, title: 'Code Splitting & Lazy Loading', duration: '22:45', type: 'video', completed: false },
        { id: 10, title: 'Avoiding Unnecessary Re-renders', duration: '19:30', type: 'video', completed: false },
      ]
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-[1400px] mx-auto h-[calc(100vh-8rem)]">
      
      {/* Left Column: Video & Details */}
      <div className="flex-1 flex flex-col gap-6 overflow-y-auto pr-2 scrollbar-hide">
        
        <div className="flex items-center gap-2">
           <Link to="/" className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-500">
             <ChevronLeft size={20} />
           </Link>
           <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
             Advanced React Design Patterns and Architecture
           </h1>
        </div>

        <VideoPlayer 
          title="Understanding Compound Components"
          poster="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80" 
        />
        
        <div className="glass-card p-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Understanding Compound Components</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            In this lesson, we will dive deep into the Compound Components pattern. You will learn how to build highly flexible and reusable UI components by coordinating state internally while giving the user full control over the rendering of the sub-components.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-400 font-medium hover:bg-brand-100 dark:hover:bg-brand-500/20 transition-colors">
              <Download size={18} />
              Download Source Code
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <FileText size={18} />
              Lesson Notes
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Curriculum Sidebar */}
      <div className="w-full lg:w-96 flex-shrink-0 flex flex-col glass-card">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-1">Course Content</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">10 lessons • 4h 30m total length</p>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {curriculum.map((mod, index) => (
            <div key={index} className="border-b border-slate-100 dark:border-slate-800/50 last:border-0">
              {/* Module Header */}
              <div className="p-4 bg-slate-50/50 dark:bg-slate-900/50">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">{mod.module}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{mod.lessons.length} lessons • {mod.duration}</p>
              </div>
              
              {/* Lessons List */}
              <div className="py-2">
                {mod.lessons.map(lesson => (
                  <button 
                    key={lesson.id}
                    className={`w-full text-left flex items-start gap-3 p-3 transition-colors ${
                      lesson.active 
                        ? 'bg-brand-50 dark:bg-brand-500/10 border-l-2 border-brand-500' 
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 border-l-2 border-transparent'
                    }`}
                  >
                    <div className="mt-0.5">
                      {lesson.completed ? (
                        <CheckCircle size={16} className="text-brand-500" />
                      ) : lesson.type === 'video' ? (
                        <PlayCircle size={16} className={lesson.active ? 'text-brand-500' : 'text-slate-400'} />
                      ) : (
                        <FileText size={16} className="text-slate-400" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <p className={`text-sm ${lesson.active ? 'font-semibold text-brand-700 dark:text-brand-400' : 'font-medium text-slate-700 dark:text-slate-300'}`}>
                        {lesson.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                        {lesson.type === 'video' ? 'Video' : 'Reading'} • {lesson.duration}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
