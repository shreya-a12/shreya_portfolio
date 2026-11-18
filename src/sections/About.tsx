import React from 'react';
import { GraduationCap, Award, Compass, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { personalInfo } from '../data/personalInfo';

export const About: React.FC = () => {
  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-sage-600 dark:text-sage-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-sage-600 dark:text-sage-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-sage-600 dark:text-sage-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-sage-600 dark:text-sage-400" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-ivory-100 dark:bg-darkbg-base transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          number="01"
          category="ABOUT ME"
          title={personalInfo.about.heading}
          subtitle={personalInfo.about.subtitle}
        />

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Narrative Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border shadow-soft-sm space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sage-700 dark:text-sage-300">
                <Sparkles className="w-4 h-4 text-sage-500" />
                <span>Background &amp; Philosophy</span>
              </div>

              {personalInfo.about.narrative.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className="text-base sm:text-lg text-charcoal-600 dark:text-darkbg-muted leading-relaxed font-sans"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-ivory-200 dark:border-darkbg-border/60">
                <h4 className="text-xs font-mono uppercase tracking-wider text-sage-800 dark:text-sage-300 font-bold mb-3">
                  Core Engineering Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.interestsList.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-ivory-100 dark:bg-darkbg-surface text-charcoal-700 dark:text-ivory-200 border border-ivory-300 dark:border-darkbg-border"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Three Information Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {personalInfo.about.cards.map((card) => (
              <div
                key={card.id}
                className="p-6 rounded-2xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border hover:border-sage-400 dark:hover:border-sage-400/80 shadow-soft-sm hover:shadow-soft-md transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-ivory-100 dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border">
                    {getCardIcon(card.icon)}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-sage-800 dark:text-ivory-50">
                      {card.title}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {card.items.map((item, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-600 dark:text-ivory-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sage-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
