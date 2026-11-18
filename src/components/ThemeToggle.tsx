import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      className="relative p-2.5 rounded-full border border-ivory-300 dark:border-darkbg-border bg-ivory-100 dark:bg-darkbg-card text-charcoal-700 dark:text-ivory-200 hover:border-sage-400 dark:hover:border-sage-400 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-charcoal-800 transition-transform duration-200 hover:-rotate-12" />
      ) : (
        <Sun className="w-4 h-4 text-amber-300 transition-transform duration-200 hover:rotate-45" />
      )}
    </button>
  );
};
