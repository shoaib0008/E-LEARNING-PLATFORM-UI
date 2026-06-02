export default function ProgressBar({ progress, className = '', height = 'h-2', showLabel = false }) {
  // Ensure progress is between 0 and 100
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Progress</span>
          <span className="text-xs font-bold text-brand-600 dark:text-brand-400">{normalizedProgress}%</span>
        </div>
      )}
      <div className={`w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden ${height}`}>
        <div
          className="h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${normalizedProgress}%` }}
        />
      </div>
    </div>
  );
}
