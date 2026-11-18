import React from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BrainCircuit, 
  Wrench 
} from 'lucide-react';
import { CategoryGroup } from '../data/skills';

interface SkillCardProps {
  categoryGroup: CategoryGroup;
}

export const SkillCard: React.FC<SkillCardProps> = ({ categoryGroup }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-sage-600 dark:text-sage-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-sage-600 dark:text-sage-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-sage-600 dark:text-sage-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-sage-600 dark:text-sage-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-sage-600 dark:text-sage-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-sage-600 dark:text-sage-400" />;
      default:
        return <Code2 className="w-5 h-5 text-sage-600 dark:text-sage-400" />;
    }
  };

  return (
    <div className="flex flex-col justify-between p-6 bg-white dark:bg-darkbg-card rounded-2xl border border-ivory-300 dark:border-darkbg-border hover:border-sage-400 dark:hover:border-sage-400/80 shadow-soft-sm hover:shadow-soft-md transition-all duration-300">
      <div>
        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-ivory-100 dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border">
            {getIcon(categoryGroup.icon)}
          </div>
          <div>
            <h3 className="font-serif font-bold text-lg text-sage-800 dark:text-ivory-50">
              {categoryGroup.category}
            </h3>
            <span className="text-[11px] font-mono text-sage-600 dark:text-sage-300 uppercase tracking-wider font-semibold">
              {categoryGroup.shortName}
            </span>
          </div>
        </div>

        <p className="text-xs text-charcoal-400 dark:text-darkbg-muted mb-5 leading-relaxed font-sans">
          {categoryGroup.description}
        </p>

        {/* Skill list */}
        <div className="flex flex-wrap gap-2">
          {categoryGroup.skills.map((skill) => (
            <div
              key={skill.name}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 ${
                skill.isCore
                  ? 'bg-ivory-100 dark:bg-darkbg-surface text-charcoal-800 dark:text-ivory-100 border border-sage-300 dark:border-sage-700/80 font-medium'
                  : 'bg-ivory-50/60 dark:bg-darkbg-base/40 text-charcoal-600 dark:text-ivory-300 border border-ivory-200 dark:border-darkbg-border'
              }`}
            >
              <span>{skill.name}</span>
              {skill.tag && (
                <span className="text-[10px] text-sage-600 dark:text-sage-400 font-sans hidden sm:inline">
                  • {skill.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
