import React from 'react';

interface SectionHeadingProps {
  number?: string;
  category?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  category,
  title,
  subtitle,
  centered = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      {(number || category) && (
        <div className={`inline-flex items-center gap-2 mb-3 text-xs tracking-widest font-mono uppercase text-sage-600 dark:text-sage-300 font-semibold ${centered ? 'justify-center' : ''}`}>
          {number && <span className="text-charcoal-400 dark:text-ivory-400 font-bold">{number}</span>}
          {number && category && <span className="text-charcoal-300 dark:text-charcoal-500">/</span>}
          {category && <span>{category}</span>}
          <span className="w-6 h-[1.5px] bg-sage-400 dark:bg-sage-400 inline-block ml-1"></span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-sage-800 dark:text-ivory-50 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-charcoal-400 dark:text-darkbg-muted leading-relaxed font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
};
