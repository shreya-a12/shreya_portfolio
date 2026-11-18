import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, GraduationCap, Award, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { skillCategories } from '../data/skills';
import { projectsData } from '../data/projects';
import { certificationsData } from '../data/achievements';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onToast }) => {
  const [activeTab, setActiveTab] = React.useState<'pdf' | 'text'>('pdf');
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    onToast("Initiating resume PDF download...");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal-900/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-5xl h-[94vh] flex flex-col bg-white dark:bg-darkbg-card rounded-2xl shadow-2xl border border-ivory-300 dark:border-darkbg-border text-charcoal-800 dark:text-ivory-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 border-b border-ivory-300 dark:border-darkbg-border bg-ivory-100 dark:bg-darkbg-surface">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sage-600 dark:text-sage-400" />
            <div>
              <h3 id="resume-title" className="font-serif font-bold text-base sm:text-lg text-sage-800 dark:text-ivory-50 flex items-center gap-2">
                <span>Shreya Singh — Official Resume</span>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-sage-200 dark:bg-sage-900/70 text-sage-900 dark:text-sage-200">PDF Original</span>
              </h3>
              <p className="text-[11px] font-mono text-charcoal-400 dark:text-darkbg-muted">
                B.E. AI &amp; Data Science (9.53 CGPA) • CMRIT Bengaluru
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium text-charcoal-700 dark:text-ivory-200 hover:bg-ivory-200 dark:hover:bg-darkbg-border border border-ivory-300 dark:border-darkbg-border transition-colors"
              title="Open PDF in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Full Window ↗</span>
            </a>
            <a
              href="/resume.pdf"
              download="Shreya_Singh_Resume.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-semibold bg-emerald-800 hover:bg-emerald-900 text-ivory-50 shadow-soft-sm transition-all border border-emerald-700"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-lg bg-ivory-200/70 dark:bg-darkbg-card hover:bg-ivory-300 dark:hover:bg-darkbg-border text-charcoal-600 dark:text-ivory-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Controls: PDF Viewer vs Structured Overview */}
        <div className="px-6 py-2 bg-ivory-200/60 dark:bg-darkbg-card border-b border-ivory-300 dark:border-darkbg-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('pdf')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'pdf'
                  ? 'bg-sage-800 text-white shadow-soft-sm'
                  : 'text-charcoal-600 dark:text-ivory-300 hover:bg-ivory-300 dark:hover:bg-darkbg-surface'
              }`}
            >
              📄 Original PDF Document
            </button>
            <button
              onClick={() => setActiveTab('text')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === 'text'
                  ? 'bg-sage-800 text-white shadow-soft-sm'
                  : 'text-charcoal-600 dark:text-ivory-300 hover:bg-ivory-300 dark:hover:bg-darkbg-surface'
              }`}
            >
              📝 Text Overview
            </button>
          </div>
          <span className="text-[11px] font-mono text-charcoal-400 dark:text-darkbg-muted hidden sm:inline">
            Zoom, print or download using PDF controls
          </span>
        </div>

        {/* Tab 1: Embedded Original PDF View */}
        {activeTab === 'pdf' && (
          <div className="w-full flex-1 bg-charcoal-900 relative overflow-hidden">
            <iframe
              src="/resume.pdf#view=FitH&toolbar=1&navpanes=0"
              className="w-full h-full border-0"
              title="Shreya Singh Resume PDF Document"
            />
          </div>
        )}

        {/* Tab 2: Structured Sheet Content */}
        {activeTab === 'text' && (
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-ivory-50 dark:bg-darkbg-base flex-1">
          {/* Document Header */}
          <div className="border-b border-ivory-300 dark:border-darkbg-border pb-6 text-center sm:text-left sm:flex sm:justify-between sm:items-end">
            <div>
              <h1 className="text-3xl font-serif font-bold text-sage-800 dark:text-ivory-50">
                {personalInfo.name}
              </h1>
              <p className="text-sm font-medium text-sage-600 dark:text-sage-300 font-sans mt-1">
                {personalInfo.title}
              </p>
              <p className="text-xs text-charcoal-400 dark:text-darkbg-muted font-sans mt-0.5">
                {personalInfo.location} • {personalInfo.college}
              </p>
            </div>
            <div className="mt-4 sm:mt-0 text-xs font-mono text-charcoal-500 dark:text-ivory-300 space-y-1 sm:text-right">
              <div>Email: singhsharaya00@gmail.com</div>
              <div>GitHub: github.com/shreya-a12</div>
              <div>LinkedIn: linkedin.com/in/shreya-singh-1bb590328</div>
            </div>
          </div>

          {/* Education & Academic Honors */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-sage-500" />
              <span>Education &amp; Academic Honors</span>
            </h2>
            <div className="p-4 rounded-xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <span className="font-bold text-sm text-sage-800 dark:text-ivory-50">
                  {personalInfo.degree} — {personalInfo.branch}
                </span>
                <span className="text-xs font-mono text-charcoal-400 dark:text-darkbg-muted">
                  2023 – July 2027 (Expected)
                </span>
              </div>
              <div className="text-xs text-charcoal-500 dark:text-ivory-300">
                {personalInfo.college}
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/60 dark:border-emerald-800 font-bold">
                  ★ CGPA: 9.53 / 10.0
                </span>
                <span className="px-2 py-0.5 rounded bg-sage-50 dark:bg-sage-950/60 text-sage-800 dark:text-sage-300 border border-sage-300/60 dark:border-sage-800 font-semibold">
                  Department Topper (All 6 Semesters)
                </span>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 font-bold">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {skillCategories.map((cat) => (
                <div 
                  key={cat.category}
                  className="p-3 rounded-lg bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border text-xs"
                >
                  <span className="font-semibold text-sage-800 dark:text-ivory-100 font-mono">
                    {cat.shortName}:
                  </span>{' '}
                  <span className="text-charcoal-600 dark:text-ivory-300 font-sans">
                    {cat.skills.map(s => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 font-bold">
              Key Engineering Projects
            </h2>
            <div className="space-y-3">
              {projectsData.map((proj) => (
                <div 
                  key={proj.id}
                  className="p-4 rounded-xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border space-y-1.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <span className="font-bold text-sm text-sage-800 dark:text-ivory-50">
                      {proj.title}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-sage-600 dark:text-sage-300">
                        {proj.technologies.slice(0, 4).join(', ')}
                      </span>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 py-0.5 rounded bg-sage-100 dark:bg-sage-900/60 text-sage-800 dark:text-sage-200 text-[11px] font-mono font-semibold hover:underline"
                        title={proj.githubUrl}
                      >
                        GitHub Repo ↗
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-charcoal-500 dark:text-darkbg-muted leading-relaxed font-sans">
                    {proj.shortDescription}
                  </p>
                  <div className="text-[11px] text-charcoal-600 dark:text-ivory-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sage-500 flex-shrink-0" />
                    <span>{proj.keyFeatures[0]}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications & Communities */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 font-bold flex items-center gap-2">
              <Award className="w-4 h-4 text-sage-500" />
              <span>Certifications &amp; Technical Activities</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border">
                <span className="font-bold text-sage-800 dark:text-ivory-50 block mb-1">
                  Technical Clubs &amp; Communities
                </span>
                <ul className="list-disc list-inside space-y-1 text-charcoal-600 dark:text-ivory-300">
                  <li>Member, HackerEarth Technical Club</li>
                  <li>Member, CodeChef Problem Solving Community</li>
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border">
                <span className="font-bold text-sage-800 dark:text-ivory-50 block mb-1">
                  Certifications
                </span>
                <ul className="list-disc list-inside space-y-1 text-charcoal-600 dark:text-ivory-300">
                  {certificationsData.map(c => (
                    <li key={c.id}>
                      <span className="font-medium">{c.name}</span> — {c.issuer}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
        )}
      </div>
    </div>
  );
};
