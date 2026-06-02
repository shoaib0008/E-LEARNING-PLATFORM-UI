import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, CheckCircle, Filter, Grid, List, Trophy, BarChart2 } from 'lucide-react';
import ProgressBar from '../components/ProgressBar';

const allCourses = [
  {
    id: '1',
    title: 'Advanced React Design Patterns and Architecture',
    instructor: 'Sarah Drasner',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    progress: 65,
    duration: '8h 30m',
    totalLessons: 24,
    completedLessons: 15,
    rating: 4.9,
    category: 'Programming',
    status: 'in-progress',
    lastAccessed: '2 hours ago',
  },
  {
    id: '2',
    title: 'UI/UX Masterclass: From Figma to Front-End',
    instructor: 'Gary Simon',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    progress: 32,
    duration: '12h 15m',
    totalLessons: 38,
    completedLessons: 12,
    rating: 4.8,
    category: 'Design',
    status: 'in-progress',
    lastAccessed: '1 day ago',
  },
  {
    id: '3',
    title: 'JavaScript: Zero to Expert 2024',
    instructor: 'Jonas Schmedtmann',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&q=80',
    progress: 100,
    duration: '18h 00m',
    totalLessons: 52,
    completedLessons: 52,
    rating: 4.9,
    category: 'Programming',
    status: 'completed',
    lastAccessed: '1 week ago',
  },
  {
    id: '4',
    title: 'Modern CSS: Grid, Container Queries & More',
    instructor: 'Kevin Powell',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80',
    progress: 100,
    duration: '5h 00m',
    totalLessons: 16,
    completedLessons: 16,
    rating: 4.9,
    category: 'Design',
    status: 'completed',
    lastAccessed: '2 weeks ago',
  },
  {
    id: '5',
    title: 'TypeScript for Advanced Web Developers',
    instructor: 'Matt Pocock',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
    progress: 0,
    duration: '6h 20m',
    totalLessons: 20,
    completedLessons: 0,
    rating: 4.7,
    category: 'Programming',
    status: 'not-started',
    lastAccessed: 'Never',
  },
  {
    id: '6',
    title: 'Digital Marketing Fundamentals',
    instructor: 'Neil Patel',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    progress: 0,
    duration: '7h 45m',
    totalLessons: 28,
    completedLessons: 0,
    rating: 4.6,
    category: 'Business',
    status: 'not-started',
    lastAccessed: 'Never',
  },
];

const statusConfig = {
  'all': { label: 'All Courses', color: '' },
  'in-progress': { label: 'In Progress', color: 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-500/10' },
  'completed': { label: 'Completed', color: 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-500/10' },
  'not-started': { label: 'Not Started', color: 'text-slate-600 bg-slate-100 dark:text-slate-400 dark:bg-slate-800' },
};

export default function MyCourses() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const filtered = activeFilter === 'all' ? allCourses : allCourses.filter(c => c.status === activeFilter);

  const stats = [
    { label: 'Total Enrolled', value: allCourses.length, icon: BookOpen, color: 'text-brand-500', bg: 'bg-brand-500/10' },
    { label: 'Completed', value: allCourses.filter(c => c.status === 'completed').length, icon: Trophy, color: 'text-green-500', bg: 'bg-green-500/10' },
    { label: 'In Progress', value: allCourses.filter(c => c.status === 'in-progress').length, icon: BarChart2, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Hours Spent', value: '48h', icon: Clock, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">My Courses</h1>
        <p className="text-slate-500 dark:text-slate-400">Track your learning journey and continue where you left off.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="glass-card p-4 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${s.bg} ${s.color}`}>
              <s.icon size={20} />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{s.label}</p>
              <p className="text-xl font-bold text-slate-900 dark:text-slate-100">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters & View Toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          {Object.entries(statusConfig).map(([key, val]) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === key
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {val.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
          <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-sm text-brand-600' : 'text-slate-500 hover:text-slate-700'}`}>
            <Grid size={16} />
          </button>
          <button onClick={() => setViewMode('list')} className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow-sm text-brand-600' : 'text-slate-500 hover:text-slate-700'}`}>
            <List size={16} />
          </button>
        </div>
      </div>

      {/* Course Grid / List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(course => (
            <Link key={course.id} to={`/course/${course.id}`} className="group block">
              <div className="glass-card h-full flex flex-col group-hover:border-brand-200 dark:group-hover:border-brand-800">
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full ${statusConfig[course.status].color}`}>
                    {course.status === 'completed' && <CheckCircle size={12} className="inline mr-1" />}
                    {statusConfig[course.status].label}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide mb-1">{course.category}</span>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base leading-tight mb-1 line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{course.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{course.instructor}</p>
                  <div className="mt-auto space-y-2">
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1"><Clock size={12} />{course.duration}</span>
                      <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                    </div>
                    <ProgressBar progress={course.progress} height="h-1.5" />
                    <p className="text-xs text-slate-400 dark:text-slate-500">Last accessed: {course.lastAccessed}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(course => (
            <Link key={course.id} to={`/course/${course.id}`} className="group block">
              <div className="glass-card p-4 flex items-center gap-5 group-hover:border-brand-200 dark:group-hover:border-brand-800">
                <img src={course.image} alt={course.title} className="w-20 h-14 object-cover rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">{course.category}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusConfig[course.status].color}`}>{statusConfig[course.status].label}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm truncate group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{course.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{course.instructor}</p>
                </div>
                <div className="w-40 hidden md:block">
                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <span>{course.progress}%</span>
                    <span>{course.completedLessons}/{course.totalLessons}</span>
                  </div>
                  <ProgressBar progress={course.progress} height="h-1.5" />
                </div>
                <div className="hidden lg:flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 flex-shrink-0 w-24 justify-end">
                  <Clock size={12} />{course.duration}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
