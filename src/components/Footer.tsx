import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { socialLinks } from '../data/socialLinks';

interface FooterProps {
  onToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onToast }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(socialLinks.email);
    onToast(`Email copied: ${socialLinks.email}`);
  };

  return (
    <footer className="relative bg-ivory-200/60 dark:bg-darkbg-card border-t border-ivory-300 dark:border-darkbg-border text-charcoal-700 dark:text-ivory-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sage-800 text-ivory-100 flex items-center justify-center font-serif font-bold text-lg border border-sage-600/40">
                {personalInfo.initials}
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-sage-800 dark:text-ivory-50">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-sage-600 dark:text-sage-300">
                  {personalInfo.title}
                </p>
              </div>
            </div>
            <p className="text-sm text-charcoal-500 dark:text-darkbg-muted leading-relaxed font-sans max-w-md">
              Combining engineering discipline, algorithmic problem solving, and modern full-stack development to build intelligent digital experiences.
            </p>
            <div className="text-xs font-mono text-charcoal-400 dark:text-darkbg-muted">
              {personalInfo.college} • Class of 2027
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-sans">
              {socialLinks.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-charcoal-600 dark:text-ivory-300 hover:text-sage-700 dark:hover:text-sage-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 font-bold">
              Connect &amp; Social
            </h4>
            <div className="flex items-center gap-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border text-charcoal-700 dark:text-ivory-200 hover:text-sage-700 hover:border-sage-400 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border text-charcoal-700 dark:text-ivory-200 hover:text-sage-700 hover:border-sage-400 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.email}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCopyEmail}
                aria-label="Send Email"
                title={`Email: ${socialLinks.email} (Opens Gmail & copies)`}
                className="p-2.5 rounded-xl bg-white dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border text-charcoal-700 dark:text-ivory-200 hover:text-sage-700 hover:border-sage-400 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-charcoal-400 dark:text-darkbg-muted font-mono pt-2">
              Bengaluru, Karnataka, India
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ivory-300 dark:border-darkbg-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-400 dark:text-darkbg-muted">
          <div>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Engineered with React &amp; Tailwind
            </span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-sage-700 dark:text-sage-300 hover:text-sage-900 dark:hover:text-ivory-50 transition-colors font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
