import React from 'react';
import { Network, Eye, Sparkles, Compass, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { beyondToolsData } from '../data/beyondDevelopment';

export const BeyondDevelopment: React.FC = () => {
  return (
    <section id="beyond" className="py-20 lg:py-28 bg-ivory-100 dark:bg-darkbg-base transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          number="05"
          category="EXPLORATION"
          title="Beyond Development"
          subtitle="Exploring emerging AI frameworks, visual workflows, and interactive machine learning prototypes."
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beyondToolsData.map((item) => (
            <div
              key={item.name}
              className="p-8 rounded-3xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border hover:border-sage-400 dark:hover:border-sage-400/80 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-ivory-100 dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border text-sage-700 dark:text-sage-300">
                    {item.iconType === 'workflow' ? (
                      <Network className="w-6 h-6" />
                    ) : (
                      <Eye className="w-6 h-6" />
                    )}
                  </div>
                  <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-sage-50 dark:bg-sage-950/60 text-sage-800 dark:text-sage-300 border border-sage-300/60 dark:border-sage-800 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {item.status}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-sage-800 dark:text-ivory-50 mb-1">
                  {item.name}
                </h3>
                <p className="text-xs font-mono text-sage-600 dark:text-sage-300 font-semibold mb-4">
                  {item.subtitle}
                </p>

                <p className="text-sm text-charcoal-500 dark:text-darkbg-muted leading-relaxed font-sans mb-6">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-ivory-200 dark:border-darkbg-border/60">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-ivory-100 dark:bg-darkbg-surface text-charcoal-700 dark:text-ivory-200 border border-ivory-300 dark:border-darkbg-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Note */}
        <div className="mt-8 text-center text-xs font-mono text-charcoal-400 dark:text-darkbg-muted">
          Driven by genuine curiosity to understand modern developer tooling and autonomous agent architectures.
        </div>

      </div>
    </section>
  );
};
