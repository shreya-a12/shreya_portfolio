import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Layers, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { Project } from '../types';
import { projectsData } from '../data/projects';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
  onToast: (msg: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject, onToast }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [showAll, setShowAll] = useState<boolean>(true);

  const categories = [
    'All',
    'AI & Intelligent Systems',
    'Full Stack Web',
    'Systems & Security',
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  // If "showAll" is false and filter is 'All', show initial 3 projects
  const visibleProjects = showAll || activeFilter !== 'All'
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-ivory-100 dark:bg-darkbg-base transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <SectionHeading
            number="03"
            category="PORTFOLIO"
            title="Featured Projects"
            subtitle="Some of the applications and intelligent systems I have worked on."
          />

          {/* Quick Counter */}
          <div className="hidden md:flex items-center gap-2 pb-12 font-mono text-xs text-charcoal-400 dark:text-darkbg-muted">
            <Layers className="w-4 h-4 text-sage-600" />
            <span>Showing {visibleProjects.length} of {projectsData.length} Projects</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                setShowAll(true); // reveal all matching when specifically filtering
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-sage-800 text-ivory-100 dark:bg-sage-700 shadow-soft-sm'
                  : 'bg-white dark:bg-darkbg-card text-charcoal-600 dark:text-ivory-300 border border-ivory-300 dark:border-darkbg-border hover:border-sage-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              onToast={onToast}
            />
          ))}
        </div>

        {/* View All / Collapse Button (when All is selected and initial 3 are displayed) */}
        {activeFilter === 'All' && projectsData.length > 3 && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-mono font-semibold bg-white dark:bg-darkbg-card hover:bg-ivory-200 dark:hover:bg-darkbg-surface text-sage-800 dark:text-ivory-100 border border-ivory-300 dark:border-darkbg-border shadow-soft-sm hover:shadow-soft-md transition-all duration-200"
            >
              <span>{showAll ? 'Show Fewer Projects' : `View All Projects (${projectsData.length})`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
