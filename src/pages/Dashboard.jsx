import { Trophy, Clock, Flame } from 'lucide-react';
import CourseCard from '../components/CourseCard';

export default function Dashboard() {
  const stats = [
    { label: 'Courses Completed', value: '12', icon: Trophy, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { label: 'Hours Learned', value: '48.5', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Day Streak', value: '7', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  ];

  const inProgressCourses = [
    {
      id: '1',
      title: 'Advanced React Design Patterns and Architecture',
      instructor: 'Sarah Drasner',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
      progress: 65,
      duration: '4h 30m left',
      rating: 4.9
    },
    {
      id: '2',
      title: 'UI/UX Masterclass: From Figma to Front-End',
      instructor: 'Gary Simon',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      progress: 32,
      duration: '8h 15m left',
      rating: 4.8
    }
  ];

  const recommendedCourses = [
    {
      id: '3',
      title: 'Fullstack Next.js 15: The Comprehensive Guide',
      instructor: 'Lee Robinson',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      progress: 0,
      duration: '12h Total',
      rating: 5.0
    },
    {
      id: '4',
      title: 'Modern CSS: Grid, Container Queries & More',
      instructor: 'Kevin Powell',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80',
      progress: 0,
      duration: '5h Total',
      rating: 4.9
    },
    {
      id: '5',
      title: 'TypeScript for Advanced Web Developers',
      instructor: 'Matt Pocock',
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
      progress: 0,
      duration: '6h 20m Total',
      rating: 4.7
    }
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-10">
      
      {/* Header / Stats Section */}
      <section>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Welcome back, Alex! 👋</h1>
        <p className="text-slate-500 dark:text-slate-400 mb-6">Let's pick up where you left off.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="glass-card p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In Progress */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Continue Learning</h2>
          <button className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline">View all</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {inProgressCourses.map((course) => (
            <div key={course.id} className="xl:last:hidden">
               <CourseCard {...course} />
            </div>
          ))}
        </div>
      </section>

      {/* Recommended */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Recommended for you</h2>
          <button className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline">Explore</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>

    </div>
  );
}
