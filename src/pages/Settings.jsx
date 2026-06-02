import { useState } from 'react';
import { User, Bell, Lock, CreditCard, Shield, ChevronRight, Camera, Mail, Phone, Globe, Moon } from 'lucide-react';

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'privacy', label: 'Privacy', icon: Shield },
];

function ProfileTab() {
  const [name, setName] = useState('Alex Student');
  const [bio, setBio] = useState('Passionate developer and lifelong learner. Currently focused on React, TypeScript, and system design.');
  const [email] = useState('alex.student@email.com');

  return (
    <div className="space-y-6">
      {/* Avatar */}
      <div className="glass-card p-6">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Profile Photo</h3>
        <div className="flex items-center gap-5">
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">A</div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center hover:bg-brand-700 transition-colors shadow-md">
              <Camera size={14} />
            </button>
          </div>
          <div>
            <p className="font-semibold text-slate-900 dark:text-slate-100">Alex Student</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">JPG, PNG or GIF — Max 2MB</p>
            <button className="text-sm font-medium text-brand-600 dark:text-brand-400 border border-brand-300 dark:border-brand-700 px-4 py-1.5 rounded-lg hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors">
              Upload New Photo
            </button>
          </div>
        </div>
      </div>

      {/* Personal Info */}
      <div className="glass-card p-6">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-5">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'Full Name', value: name, onChange: setName, icon: User },
            { label: 'Email Address', value: email, onChange: () => {}, icon: Mail, readOnly: true },
            { label: 'Phone Number', value: '+1 (555) 012-3456', onChange: () => {}, icon: Phone },
            { label: 'Website', value: 'https://alex.dev', onChange: () => {}, icon: Globe },
          ].map((field, i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{field.label}</label>
              <div className="relative">
                <field.icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={field.value}
                  onChange={e => field.onChange(e.target.value)}
                  readOnly={field.readOnly}
                  className={`w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow ${
                    field.readOnly
                      ? 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Bio</label>
          <textarea
            value={bio}
            onChange={e => setBio(e.target.value)}
            rows={3}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-shadow resize-none"
          />
        </div>
        <div className="mt-5 flex justify-end">
          <button className="px-6 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow-sm">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

function NotificationsTab() {
  const [prefs, setPrefs] = useState({
    courseUpdates: true,
    newMessages: true,
    weeklyDigest: false,
    newCourses: true,
    promotions: false,
    achievements: true,
  });

  const toggle = key => setPrefs(p => ({ ...p, [key]: !p[key] }));

  const items = [
    { key: 'courseUpdates', label: 'Course Updates', desc: 'Get notified when your enrolled courses add new content.' },
    { key: 'newMessages', label: 'New Messages', desc: 'Notifications from instructors and fellow learners.' },
    { key: 'weeklyDigest', label: 'Weekly Learning Digest', desc: "A summary of your week's progress every Monday." },
    { key: 'newCourses', label: 'New Course Alerts', desc: 'Be the first to know when new courses match your interests.' },
    { key: 'promotions', label: 'Promotions & Offers', desc: 'Special deals, discounts, and flash sales.' },
    { key: 'achievements', label: 'Achievements & Badges', desc: 'Celebrate milestones and course completions.' },
  ];

  return (
    <div className="glass-card divide-y divide-slate-100 dark:divide-slate-800">
      {items.map(item => (
        <div key={item.key} className="flex items-center justify-between p-5">
          <div>
            <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{item.label}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
          </div>
          <button
            onClick={() => toggle(item.key)}
            className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${prefs[item.key] ? 'bg-brand-600' : 'bg-slate-300 dark:bg-slate-700'}`}
          >
            <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${prefs[item.key] ? 'translate-x-5' : 'translate-x-0.5'}`} />
          </button>
        </div>
      ))}
    </div>
  );
}

function SecurityTab() {
  return (
    <div className="space-y-5">
      <div className="glass-card p-6">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Change Password</h3>
        <div className="space-y-4">
          {['Current Password', 'New Password', 'Confirm New Password'].map((label, i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 text-slate-900 dark:text-slate-100" />
            </div>
          ))}
          <div className="flex justify-end pt-2">
            <button className="px-6 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors">Update Password</button>
          </div>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Two-Factor Authentication</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Add an extra layer of security to your account using an authenticator app.</p>
          </div>
          <button className="flex-shrink-0 px-4 py-2 border border-brand-300 dark:border-brand-700 text-brand-600 dark:text-brand-400 text-sm font-semibold rounded-xl hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-colors">Enable 2FA</button>
        </div>
      </div>

      <div className="glass-card p-6">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Active Sessions</h3>
        {[
          { device: 'MacBook Pro', location: 'Mumbai, India', current: true },
          { device: 'iPhone 15 Pro', location: 'Mumbai, India', current: false },
        ].map((s, i) => (
          <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{s.device} {s.current && <span className="text-xs text-green-600 dark:text-green-400 font-normal ml-1">(Current)</span>}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{s.location}</p>
            </div>
            {!s.current && <button className="text-xs text-red-500 hover:text-red-600 font-medium">Revoke</button>}
          </div>
        ))}
      </div>
    </div>
  );
}

function BillingTab() {
  return (
    <div className="space-y-5">
      {/* Current Plan */}
      <div className="glass-card p-6 border-2 border-brand-200 dark:border-brand-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/5 rounded-full -translate-y-20 translate-x-20" />
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-bold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 px-2 py-1 rounded-full">CURRENT PLAN</span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-2">Pro Plan</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">$19.99 / month — Renews on July 2, 2026</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-slate-900 dark:text-slate-100">$19<span className="text-lg text-slate-400">.99</span></p>
            <p className="text-xs text-slate-500">per month</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
          {['Unlimited courses', 'Certificate of completion', 'Priority support', 'Offline downloads'].map((f, i) => (
            <span key={i} className="text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded-full">✓ {f}</span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <button className="px-4 py-2 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition-colors">Upgrade to Team</button>
          <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Cancel Plan</button>
        </div>
      </div>

      {/* Payment Method */}
      <div className="glass-card p-6">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Payment Method</h3>
        <div className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-7 bg-gradient-to-r from-blue-600 to-blue-400 rounded-md flex items-center justify-center">
              <CreditCard size={16} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Visa ending in 4242</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Expires 12/27</p>
            </div>
          </div>
          <button className="text-sm text-brand-600 dark:text-brand-400 font-medium hover:underline">Change</button>
        </div>
      </div>

      {/* Billing History */}
      <div className="glass-card p-6">
        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-4">Billing History</h3>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {[
            { date: 'Jun 2, 2026', desc: 'Pro Plan — Monthly', amount: '$19.99', status: 'Paid' },
            { date: 'May 2, 2026', desc: 'Pro Plan — Monthly', amount: '$19.99', status: 'Paid' },
            { date: 'Apr 2, 2026', desc: 'Pro Plan — Monthly', amount: '$19.99', status: 'Paid' },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{r.desc}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{r.date}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-green-600 dark:text-green-400 font-semibold">{r.status}</span>
                <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{r.amount}</span>
                <button className="text-xs text-slate-500 hover:text-brand-600 transition-colors">PDF</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrivacyTab() {
  const [settings, setSettings] = useState({ publicProfile: true, showProgress: false, dataCollection: true });
  const toggle = key => setSettings(p => ({ ...p, [key]: !p[key] }));

  return (
    <div className="space-y-5">
      <div className="glass-card divide-y divide-slate-100 dark:divide-slate-800">
        {[
          { key: 'publicProfile', label: 'Public Profile', desc: 'Allow others to see your profile, learning activity, and completed courses.' },
          { key: 'showProgress', label: 'Show Course Progress', desc: 'Display your progress on courses to your connections.' },
          { key: 'dataCollection', label: 'Personalization Data', desc: 'Allow us to use your activity data to personalize course recommendations.' },
        ].map(item => (
          <div key={item.key} className="flex items-center justify-between p-5">
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{item.label}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
            </div>
            <button
              onClick={() => toggle(item.key)}
              className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0 ${settings[item.key] ? 'bg-brand-600' : 'bg-slate-300 dark:bg-slate-700'}`}
            >
              <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${settings[item.key] ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
          </div>
        ))}
      </div>

      <div className="glass-card p-6 border border-red-200 dark:border-red-900">
        <h3 className="font-bold text-red-600 dark:text-red-400 mb-2">Danger Zone</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Once you delete your account, there is no going back. This action is permanent and all your data will be removed.</p>
        <button className="px-4 py-2 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 text-sm font-semibold rounded-xl hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors">
          Delete My Account
        </button>
      </div>
    </div>
  );
}

const tabComponents = { profile: ProfileTab, notifications: NotificationsTab, security: SecurityTab, billing: BillingTab, privacy: PrivacyTab };

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');
  const ActiveComponent = tabComponents[activeTab];

  return (
    <div className="max-w-4xl mx-auto pb-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-1">Settings</h1>
        <p className="text-slate-500 dark:text-slate-400">Manage your account preferences and configurations.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Tabs */}
        <nav className="w-full md:w-56 flex-shrink-0 flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-1 md:pb-0">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all flex-shrink-0 w-full ${
                  activeTab === tab.id
                    ? 'bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                <Icon size={18} className={activeTab === tab.id ? 'text-brand-600 dark:text-brand-400' : ''} />
                {tab.label}
                {activeTab === tab.id && <ChevronRight size={14} className="ml-auto hidden md:block" />}
              </button>
            );
          })}
        </nav>

        {/* Tab Content */}
        <div className="flex-1 min-w-0">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
}
