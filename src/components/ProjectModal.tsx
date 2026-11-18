import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Cpu, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { ProjectBanner } from './ProjectBanner';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onToast: (msg: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onToast }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyGithub = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(project.githubUrl);
    onToast(`Repository URL copied: ${project.githubUrl}`);
  };

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onToast(`Live demo endpoint (${project.demoUrl}) is configured and ready for live deployment.`);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-ivory-100 dark:bg-darkbg-card rounded-2xl shadow-2xl border border-ivory-300 dark:border-darkbg-border text-charcoal-800 dark:text-ivory-100 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-ivory-100/80 dark:bg-darkbg-base/80 hover:bg-ivory-200 dark:hover:bg-darkbg-surface text-charcoal-600 dark:text-ivory-200 border border-ivory-300 dark:border-darkbg-border transition-colors duration-150"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Visual Banner */}
        <ProjectBanner type={project.bannerType} title={project.title} />

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-sage-100 dark:bg-sage-950/60 text-sage-800 dark:text-sage-300 border border-sage-300/60 dark:border-sage-800">
                {project.category}
              </span>
              {project.metrics && (
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-800 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {project.metrics}
                </span>
              )}
            </div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-sage-800 dark:text-ivory-50">
              {project.title}
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-xs font-mono text-charcoal-400 dark:text-darkbg-muted">Source Repository:</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-semibold text-sage-700 dark:text-sage-300 hover:underline inline-flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{project.githubUrl}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="mt-2 text-charcoal-500 dark:text-darkbg-muted leading-relaxed font-sans text-sm sm:text-base">
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture Note */}
          <div className="p-4 rounded-xl bg-ivory-200/70 dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-sage-700 dark:text-sage-300 font-bold">
              <Cpu className="w-4 h-4 text-sage-500" />
              <span>System & Architecture Overview</span>
            </div>
            <p className="text-sm text-charcoal-600 dark:text-ivory-200 leading-relaxed font-sans">
              {project.architectureNote}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-sage-700 dark:text-sage-300 font-bold">
              <Layers className="w-4 h-4 text-sage-500" />
              <span>Core Implemented Capabilities</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-ivory-50 dark:bg-darkbg-base/40 border border-ivory-300/70 dark:border-darkbg-border/60 text-xs sm:text-sm text-charcoal-700 dark:text-ivory-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-sage-500 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-charcoal-400 dark:text-ivory-400 font-semibold mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-ivory-200/60 dark:bg-darkbg-surface text-charcoal-700 dark:text-ivory-200 border border-ivory-300 dark:border-darkbg-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-ivory-300 dark:border-darkbg-border">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onToast(`Opening repository: ${project.githubUrl}`)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-sage-800 hover:bg-sage-900 text-ivory-50 transition-colors shadow-soft-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
              <button
                onClick={handleDemoClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-ivory-200 hover:bg-ivory-300 dark:bg-darkbg-surface dark:hover:bg-darkbg-border text-charcoal-800 dark:text-ivory-100 border border-ivory-300 dark:border-darkbg-border transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </button>
            </div>
            <button
              onClick={onClose}
              className="text-xs font-mono text-charcoal-400 dark:text-ivory-400 hover:text-charcoal-700 dark:hover:text-ivory-100"
            >
              [Press ESC to close]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
