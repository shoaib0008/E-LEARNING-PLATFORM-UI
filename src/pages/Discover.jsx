import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, Clock, Users, Search, ChevronRight, TrendingUp, Zap, Award } from 'lucide-react';

const categories = [
  { name: 'All', icon: '🌐' },
  { name: 'Programming', icon: '💻' },
  { name: 'Design', icon: '🎨' },
  { name: 'Business', icon: '📈' },
  { name: 'Data Science', icon: '🔬' },
  { name: 'Marketing', icon: '📣' },
  { name: 'Music', icon: '🎵' },
];

const featured = [
  {
    id: '10',
    title: 'Machine Learning A-Z: Hands-On Python',
    instructor: 'Kirill Eremenko',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    rating: 4.9,
    students: '42,811',
    duration: '22h 30m',
    price: '$19.99',
    category: 'Data Science',
    badge: 'Bestseller',
    badgeColor: 'bg-yellow-400 text-yellow-900',
  },
  {
    id: '11',
    title: 'The Complete Node.js Developer Course',
    instructor: 'Andrew Mead',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    rating: 4.8,
    students: '35,200',
    duration: '17h 05m',
    price: '$17.99',
    category: 'Programming',
    badge: 'Top Rated',
    badgeColor: 'bg-brand-500 text-white',
  },
  {
    id: '12',
    title: 'The Complete Graphic Design Theory',
    instructor: 'Lindsay Marsh',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    rating: 4.7,
    students: '19,540',
    duration: '10h 20m',
    price: '$14.99',
    category: 'Design',
    badge: 'New',
    badgeColor: 'bg-green-500 text-white',
  },
];

const allCourses = [
  { id: '3', title: 'JavaScript: Zero to Expert 2024', instructor: 'Jonas Schmedtmann', image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&q=80', rating: 4.9, students: '80,000', duration: '18h', price: '$16.99', category: 'Programming' },
  { id: '4', title: 'Modern CSS: Grid, Container Queries & More', instructor: 'Kevin Powell', image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&q=80', rating: 4.9, students: '12,300', duration: '5h', price: '$12.99', category: 'Design' },
  { id: '5', title: 'TypeScript for Advanced Developers', instructor: 'Matt Pocock', image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80', rating: 4.7, students: '9,800', duration: '6h 20m', price: '$14.99', category: 'Programming' },
  { id: '6', title: 'Digital Marketing Fundamentals', instructor: 'Neil Patel', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', rating: 4.6, students: '28,100', duration: '7h 45m', price: '$13.99', category: 'Marketing' },
  { id: '13', title: 'Python for Data Analysis with Pandas', instructor: 'Jose Portilla', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', rating: 4.8, students: '55,000', duration: '11h', price: '$15.99', category: 'Data Science' },
  { id: '14', title: 'Entrepreneurship: Launching an Innovative Business', instructor: 'Saurabh Bhatia', image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&q=80', rating: 4.5, students: '7,200', duration: '5h 30m', price: '$11.99', category: 'Business' },
  { id: '15', title: 'Music Production in Logic Pro X', instructor: 'Tomas George', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80', rating: 4.7, students: '14,000', duration: '9h 10m', price: '$14.99', category: 'Music' },
  { id: '16', title: 'AWS Certified Solutions Architect', instructor: 'Stephane Maarek', image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80', rating: 4.8, students: '102,000', duration: '27h', price: '$18.99', category: 'Programming' },
  { id: '17', title: 'Social Media Marketing 2024', instructor: 'Alex Genadinik', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80', rating: 4.4, students: '18,500', duration: '6h', price: '$10.99', category: 'Marketing' },
];

const trending = [
  { title: 'Generative AI with LangChain', tag: '🔥 Hot' },
  { title: 'React Native Development', tag: '📱 Popular' },
  { title: 'Kubernetes & Docker', tag: '🚀 Trending' },
  { title: 'Figma Advanced Prototyping', tag: '⭐ Top Rated' },
];

export default function Discover() {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');

  // Sync search box when URL ?q= param changes (e.g. from navbar)
  useEffect(() => {
    const q = searchParams.get('q') || '';
    setSearchQuery(q);
  }, [searchParams]);

  const filtered = allCourses.filter(c => {
    const matchCategory = activeCategory === 'All' || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="space-y-10 max-w-6xl mx-auto pb-10">

      {/* Hero Search */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-800 p-8 md:p-12 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white_0%,_transparent_60%)]" />
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Explore New Skills</h1>
        <p className="text-brand-200 mb-6 text-lg">Over 1,000 courses taught by real-world experts.</p>
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search any topic, skill, or instructor..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-white text-slate-900 rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-slate-400 shadow-lg"
          />
        </div>
        {/* Floating stat badges */}
        <div className="hidden md:flex absolute bottom-8 right-8 gap-3">
          {[{icon: Award, label: 'Expert Instructors', val: '500+'}, {icon: Zap, label: 'Courses', val: '1,200+'}, {icon: TrendingUp, label: 'Learners', val: '2M+'}].map((b, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-center">
              <p className="text-xl font-bold">{b.val}</p>
              <p className="text-xs text-brand-200">{b.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section>
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">Browse Categories</h2>
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                activeCategory === cat.name
                  ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-brand-400 hover:text-brand-600'
              }`}
            >
              <span>{cat.icon}</span> {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      {activeCategory === 'All' && !searchQuery && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">⭐ Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map(c => (
              <Link key={c.id} to={`/course/${c.id}`} className="group block">
                <div className="glass-card h-full group-hover:border-brand-200 dark:group-hover:border-brand-800">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-md ${c.badgeColor}`}>{c.badge}</span>
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">{c.category}</span>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mt-1 mb-1 line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{c.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{c.instructor}</p>
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <span className="flex items-center gap-1 text-amber-500 font-bold"><Star size={12} className="fill-current" />{c.rating}</span>
                      <span className="flex items-center gap-1"><Users size={12} />{c.students}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{c.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-slate-900 dark:text-slate-100">{c.price}</span>
                      <span className="text-xs text-brand-600 dark:text-brand-400 font-semibold flex items-center gap-1">Enroll <ChevronRight size={14} /></span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Trending Topics */}
      {activeCategory === 'All' && !searchQuery && (
        <section>
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">🔥 Trending Now</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {trending.map((t, i) => (
              <div key={i} className="glass-card p-4 cursor-pointer hover:border-brand-300 dark:hover:border-brand-700 transition-all group">
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">{t.tag}</p>
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{t.title}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Courses Grid */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {searchQuery ? `Results for "${searchQuery}"` : activeCategory === 'All' ? 'All Courses' : `${activeCategory} Courses`}
            <span className="text-base font-normal text-slate-400 ml-2">({filtered.length})</span>
          </h2>
        </div>
        {filtered.length === 0 ? (
          <div className="glass-card p-12 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-lg">No courses found. Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(c => (
              <Link key={c.id} to={`/course/${c.id}`} className="group block">
                <div className="glass-card h-full group-hover:border-brand-200 dark:group-hover:border-brand-800">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">{c.category}</span>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mt-1 mb-1 line-clamp-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{c.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{c.instructor}</p>
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <span className="flex items-center gap-1 text-amber-500 font-bold"><Star size={12} className="fill-current" />{c.rating}</span>
                      <span className="flex items-center gap-1"><Users size={12} />{c.students}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{c.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-slate-900 dark:text-slate-100">{c.price}</span>
                      <span className="text-xs text-brand-600 dark:text-brand-400 font-semibold flex items-center gap-1">View Course <ChevronRight size={14} /></span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
