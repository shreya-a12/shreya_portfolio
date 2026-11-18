import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md p-4 rounded-xl bg-charcoal-900 dark:bg-ivory-100 text-ivory-100 dark:text-charcoal-900 shadow-2xl border border-sage-600/40 dark:border-sage-300 flex items-start gap-3 animate-slideUp">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 dark:text-sage-700 flex-shrink-0 mt-0.5" />
      <div className="flex-1 text-xs sm:text-sm font-sans leading-relaxed">
        {message}
      </div>
      <button
        onClick={onClose}
        aria-label="Dismiss toast"
        className="p-1 rounded hover:bg-charcoal-800 dark:hover:bg-ivory-200 text-charcoal-400 dark:text-charcoal-600 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
