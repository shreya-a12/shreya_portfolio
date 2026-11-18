import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  Github, 
  Linkedin, 
  Award, 
  Sparkles, 
  GraduationCap, 
  Code2, 
  Compass,
  Download
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { socialLinks } from '../data/socialLinks';

interface HeroProps {
  onToast: (msg: string) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onToast, onOpenResume }) => {
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(socialLinks.email);
    onToast(`Email copied to clipboard: ${socialLinks.email}`);
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden editorial-grid"
    >
      {/* Background organic glow elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-sage-300/20 dark:bg-sage-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sage-400/15 dark:bg-sage-700/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative & CTAs (7 columns) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Status Pill & Intro Label */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-sage-100 dark:bg-sage-950/70 text-sage-800 dark:text-sage-300 border border-sage-300/70 dark:border-sage-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                {personalInfo.status}
              </span>

              <span className="text-xs font-mono uppercase tracking-widest text-charcoal-400 dark:text-darkbg-muted hidden sm:inline-block">
                {personalInfo.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-sage-800 dark:text-ivory-50 leading-[1.08]">
                Building Intelligent Solutions{' '}
                <span className="italic font-normal text-sage-600 dark:text-sage-400">
                  Through Code.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-mono text-sage-700 dark:text-sage-300 font-medium">
                {personalInfo.hero.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-charcoal-500 dark:text-darkbg-muted leading-relaxed font-sans max-w-2xl">
              {personalInfo.hero.description}
            </p>

            {/* CTAs & Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-mono font-semibold bg-sage-800 hover:bg-sage-900 text-ivory-50 shadow-soft-sm hover:shadow-soft-md transition-all duration-200 border border-sage-700 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/resume.pdf"
                download="Shreya_Singh_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-mono font-semibold bg-emerald-800 hover:bg-emerald-900 text-ivory-50 shadow-soft-sm transition-all border border-emerald-700"
                title="Download Official Resume PDF"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs sm:text-sm font-mono font-semibold bg-white dark:bg-darkbg-card hover:bg-ivory-200 dark:hover:bg-darkbg-surface text-charcoal-800 dark:text-ivory-100 border border-ivory-300 dark:border-darkbg-border shadow-soft-sm transition-all duration-200"
              >
                <span>View CV</span>
              </button>

              {/* Quick Social Badges */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                  className="p-3 rounded-full bg-ivory-100 dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border text-charcoal-600 dark:text-ivory-300 hover:text-sage-700 dark:hover:text-sage-300 hover:border-sage-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                  className="p-3 rounded-full bg-ivory-100 dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border text-charcoal-600 dark:text-ivory-300 hover:text-sage-700 dark:hover:text-sage-300 hover:border-sage-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCopyEmail}
                  aria-label={`Send Email to ${socialLinks.email}`}
                  title={`Email: ${socialLinks.email} (Opens Gmail & copies to clipboard)`}
                  className="p-3 rounded-full bg-ivory-100 dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border text-charcoal-600 dark:text-ivory-300 hover:text-sage-700 dark:hover:text-sage-300 hover:border-sage-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-ivory-300 dark:border-darkbg-border grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-sage-800 dark:text-ivory-50">
                  9.53
                </div>
                <div className="text-xs font-mono text-charcoal-400 dark:text-darkbg-muted mt-0.5">
                  Cumulative CGPA
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-sage-800 dark:text-ivory-50">
                  6-Time
                </div>
                <div className="text-xs font-mono text-charcoal-400 dark:text-darkbg-muted mt-0.5">
                  Semester Topper
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-sage-800 dark:text-ivory-50">
                  July 2027
                </div>
                <div className="text-xs font-mono text-charcoal-400 dark:text-darkbg-muted mt-0.5">
                  B.E. Graduation
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Portrait Section & Floating Badges (5 columns) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-sage-300/40 via-ivory-300/30 to-sage-400/30 dark:from-sage-800/30 dark:to-darkbg-surface blur-lg transform -rotate-1"></div>

              {/* Portrait Container */}
              <div className="relative rounded-3xl overflow-hidden bg-ivory-200 dark:bg-darkbg-card border-2 border-ivory-300 dark:border-darkbg-border shadow-soft-lg p-3">
                
                {/* Editorial Frame with Pattern */}
                <div className="relative w-full aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#E7EFE9] via-[#DCE6DE] to-[#C8D6CB] dark:from-[#1D2621] dark:via-[#18211B] dark:to-[#121A15] p-6 flex flex-col justify-between overflow-hidden border border-sage-300/60 dark:border-sage-800/60">
                  
                  {/* Subtle Geometric Background */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#263D32_1.5px,transparent_1.5px)] [background-size:20px_20px] dark:bg-[radial-gradient(#8EAF90_1.5px,transparent_1.5px)]"></div>
                  
                  {/* Corner Accent */}
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="font-mono text-[11px] tracking-widest uppercase px-2.5 py-1 rounded bg-white/70 dark:bg-darkbg-card/70 backdrop-blur-sm text-sage-800 dark:text-sage-200 border border-sage-300/40">
                      CMRIT • Final Year
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/80 dark:bg-darkbg-card/80 border border-sage-300/50 flex items-center justify-center text-sage-700 dark:text-sage-300">
                      <Code2 className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Centered Editorial Monogram / Avatar Graphic */}
                  <div className="relative z-10 my-auto text-center">
                    <div className="relative inline-block">
                      <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-sage-800 to-sage-600 p-1.5 shadow-soft-md mx-auto">
                        <div className="w-full h-full rounded-full bg-ivory-100 dark:bg-darkbg-base flex flex-col items-center justify-center text-sage-800 dark:text-ivory-50 border-2 border-sage-300 dark:border-sage-700">
                          <span className="font-serif font-bold text-4xl sm:text-5xl tracking-tight text-sage-800 dark:text-sage-300">
                            SS
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-charcoal-400 dark:text-darkbg-muted mt-1">
                            Shreya Singh
                          </span>
                        </div>
                      </div>

                      {/* Small floating badge on portrait */}
                      <div className="absolute bottom-1 right-2 p-2 rounded-full bg-emerald-500 text-white shadow-soft-sm border-2 border-white dark:border-darkbg-card" title="Open to Opportunities">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="mt-4">
                      <h2 className="font-serif font-bold text-xl text-sage-900 dark:text-ivory-50">
                        {personalInfo.name}
                      </h2>
                      <p className="text-xs font-mono text-sage-700 dark:text-sage-300 mt-0.5">
                        Artificial Intelligence &amp; Data Science
                      </p>
                    </div>
                  </div>

                  {/* Frame Footer */}
                  <div className="relative z-10 flex justify-between items-center text-[11px] font-mono text-charcoal-600 dark:text-darkbg-muted bg-white/70 dark:bg-darkbg-card/70 px-3 py-1.5 rounded-lg border border-sage-300/40">
                    <span>Bengaluru, India</span>
                    <span className="text-sage-700 dark:text-sage-300 font-semibold">Rank 1 / Topper</span>
                  </div>
                </div>
              </div>

              {/* Floating Information Card 1: 9.53 CGPA & 6-Time Topper */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 z-20 p-4 rounded-2xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border shadow-soft-lg flex items-center gap-3.5 animate-bounce-subtle">
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-serif font-bold text-base text-sage-800 dark:text-ivory-50 flex items-center gap-1.5">
                    <span>9.53 CGPA</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
                      Honors
                    </span>
                  </div>
                  <div className="text-xs font-sans text-charcoal-500 dark:text-darkbg-muted">
                    6-Time Semester Topper
                  </div>
                </div>
              </div>

              {/* Floating Information Card 2: CMRIT & Graduation */}
              <div className="absolute -top-4 -right-4 sm:-right-6 z-20 p-3.5 rounded-2xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border shadow-soft-lg flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sage-100 dark:bg-sage-950/60 border border-sage-300/60 text-sage-700 dark:text-sage-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono font-bold text-xs text-sage-800 dark:text-ivory-50">
                    CMRIT Bengaluru
                  </div>
                  <div className="text-[11px] font-sans text-charcoal-400 dark:text-darkbg-muted">
                    Final Year • Class of 2027
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
