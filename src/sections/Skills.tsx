import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCard } from '../components/SkillCard';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = [
    'All',
    'Languages',
    'Frontend',
    'Backend',
    'Databases',
    'AI & ML',
    'Tools & DevOps',
  ];

  const filteredCategories = selectedFilter === 'All'
    ? skillCategories
    : skillCategories.filter(cat => cat.shortName === selectedFilter);

  return (
    <section id="skills" className="py-20 lg:py-28 bg-ivory-200/50 dark:bg-darkbg-card/40 border-y border-ivory-300 dark:border-darkbg-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          number="02"
          category="TECHNICAL SKILLS"
          title="Technical Skills"
          subtitle="Technologies and tools I use to build and develop solutions."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedFilter(opt)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                selectedFilter === opt
                  ? 'bg-sage-800 text-ivory-100 dark:bg-sage-700 shadow-soft-sm'
                  : 'bg-white dark:bg-darkbg-surface text-charcoal-600 dark:text-ivory-300 border border-ivory-300 dark:border-darkbg-border hover:border-sage-400'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <SkillCard key={group.category} categoryGroup={group} />
          ))}
        </div>

        {/* Bottom Editorial Note */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-base text-sage-800 dark:text-ivory-50">
              Continuous Learning &amp; Technical Adaptability
            </h4>
            <p className="text-xs text-charcoal-500 dark:text-darkbg-muted font-sans">
              Focusing on clean architecture, strong foundational algorithms, type-safety, and production-ready code.
            </p>
          </div>
          <span className="text-xs font-mono text-sage-700 dark:text-sage-300 px-3 py-1 rounded bg-ivory-100 dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border whitespace-nowrap">
            30+ Core Competencies
          </span>
        </div>

      </div>
    </section>
  );
};
