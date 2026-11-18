import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background blur check
      setIsScrolled(window.scrollY > 20);

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Active section calculation
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-sage-400 z-50 origin-left transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav border-b border-ivory-300/80 dark:border-darkbg-border/80 shadow-soft-sm py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-sage-800 text-ivory-100 flex items-center justify-center font-serif font-bold text-lg shadow-soft-sm group-hover:bg-sage-700 transition-colors border border-sage-600/40">
              SS
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base tracking-tight text-sage-800 dark:text-ivory-50 group-hover:text-sage-600 dark:group-hover:text-sage-300 transition-colors">
                Shreya Singh
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 dark:text-darkbg-muted">
                Software Dev • AI/DS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-ivory-200/50 dark:bg-darkbg-card/60 p-1.5 rounded-full border border-ivory-300 dark:border-darkbg-border">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-sage-800 text-ivory-100 shadow-soft-sm dark:bg-sage-700'
                      : 'text-charcoal-600 dark:text-ivory-300 hover:text-charcoal-900 dark:hover:text-ivory-50 hover:bg-ivory-300/50 dark:hover:bg-darkbg-surface'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold bg-sage-800 hover:bg-sage-900 text-ivory-50 shadow-soft-sm hover:shadow-soft-md transition-all duration-200 border border-sage-700"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-xl border border-ivory-300 dark:border-darkbg-border bg-ivory-100 dark:bg-darkbg-card text-charcoal-800 dark:text-ivory-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-nav border-b border-ivory-300 dark:border-darkbg-border px-6 py-6 space-y-4 animate-slideDown">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-mono font-medium transition-colors ${
                      isActive
                        ? 'bg-sage-800 text-ivory-100 dark:bg-sage-700'
                        : 'text-charcoal-700 dark:text-ivory-200 hover:bg-ivory-200 dark:hover:bg-darkbg-surface'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
            <div className="pt-3 border-t border-ivory-300 dark:border-darkbg-border">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-mono font-semibold bg-sage-800 text-ivory-50 shadow-soft-sm"
              >
                <Download className="w-4 h-4" />
                <span>View &amp; Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
