import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, LayoutDashboard, Settings, User, Bell, Search } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/discover?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    } else {
      navigate('/discover');
    }
  };

  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'My Courses', path: '/my-courses', icon: BookOpen },
    { name: 'Discover', path: '/discover', icon: Search },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-slate-950 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white">
              <BookOpen size={18} />
            </div>
            LearnFlow
          </div>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-brand-600 dark:text-brand-400' : ''} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
              <User size={20} className="text-slate-500" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">Alex Student</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Pro Member</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 flex-shrink-0 glass flex items-center justify-between px-6 z-10 sticky top-0">
          <div className="flex items-center md:hidden">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white">
              <BookOpen size={18} />
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-start px-4 md:px-0">
            <form onSubmit={handleSearch} className="max-w-md w-full relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses... (press Enter)"
                className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-brand-500 outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-500 transition-shadow"
              />
            </form>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
              <Bell size={20} />
              <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-red-500 border border-white dark:border-slate-900"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 relative">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
