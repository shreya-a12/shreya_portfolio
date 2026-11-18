import React from 'react';
import { Github, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';
import { ProjectBanner } from './ProjectBanner';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  onToast: (msg: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, onToast }) => {
  const handleGithubClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(project.githubUrl);
    onToast(`Repository link copied to clipboard: ${project.githubUrl}`);
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToast(`Live demo link (${project.demoUrl}) is configured and ready for production deployment.`);
  };

  return (
    <div 
      onClick={() => onSelect(project)}
      className="group relative flex flex-col justify-between bg-white dark:bg-darkbg-card rounded-2xl border border-ivory-300 dark:border-darkbg-border hover:border-sage-400 dark:hover:border-sage-400/80 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 overflow-hidden cursor-pointer"
    >
      <div>
        {/* Banner */}
        <ProjectBanner type={project.bannerType} title={project.title} />

        {/* Content */}
        <div className="p-6">
          {/* Category & Metric */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-ivory-200 dark:bg-darkbg-surface text-charcoal-700 dark:text-ivory-200 font-semibold border border-ivory-300 dark:border-darkbg-border">
              {project.category}
            </span>
            {project.metrics && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sage-50 dark:bg-sage-950/60 text-sage-800 dark:text-sage-300 border border-sage-300/60 dark:border-sage-800 font-medium">
                {project.metrics}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-serif font-bold text-sage-800 dark:text-ivory-50 group-hover:text-sage-600 dark:group-hover:text-sage-300 transition-colors duration-200 mb-2.5">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-charcoal-500 dark:text-darkbg-muted leading-relaxed font-sans line-clamp-3 mb-4">
            {project.shortDescription}
          </p>

          {/* Key Features Preview (Top 3) */}
          <div className="space-y-1.5 mb-5">
            {project.keyFeatures.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-charcoal-600 dark:text-ivory-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-sage-500 flex-shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-ivory-200 dark:border-darkbg-border/60">
            {project.technologies.slice(0, 5).map((tech) => (
              <span 
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-ivory-100 dark:bg-darkbg-surface text-charcoal-600 dark:text-ivory-300 border border-ivory-300/80 dark:border-darkbg-border"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded text-charcoal-400 dark:text-darkbg-muted">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {/* Direct Repo Link Badge */}
          <div className="mt-3 pt-2.5 border-t border-ivory-200 dark:border-darkbg-border/60 flex items-center justify-between text-xs font-mono">
            <span className="text-charcoal-400 dark:text-darkbg-muted text-[11px]">Repository:</span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sage-700 dark:text-sage-300 hover:underline inline-flex items-center gap-1 font-semibold text-[11px] truncate max-w-[210px]"
              title={project.githubUrl}
            >
              <Github className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{project.githubUrl.replace('https://github.com/', '')}</span>
              <ExternalLink className="w-2.5 h-2.5 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-6 pb-6 pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-ivory-100 dark:border-darkbg-border/40 bg-ivory-50/50 dark:bg-darkbg-surface/30">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-sage-700 dark:text-sage-300 hover:text-sage-900 dark:hover:text-ivory-50 group-hover:underline underline-offset-4"
        >
          <span>View Architecture</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              onToast(`Opening repository: ${project.githubUrl}`);
            }}
            aria-label={`GitHub Repository for ${project.title}`}
            title={`Open GitHub Repository (${project.githubUrl})`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sage-800 hover:bg-sage-900 dark:bg-sage-700 dark:hover:bg-sage-600 text-ivory-50 text-xs font-mono font-semibold shadow-soft-sm transition-all hover:scale-105"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Repo ↗</span>
          </a>
        </div>
          <button
            onClick={handleDemoClick}
            aria-label="Live Demo"
            title="Live Demo"
            className="p-2 rounded-lg bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border text-charcoal-600 dark:text-ivory-300 hover:text-charcoal-900 dark:hover:text-ivory-50 hover:border-sage-400 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
