import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { BeyondDevelopment } from './sections/BeyondDevelopment';
import { Contact } from './sections/Contact';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';
import { Project, ThemeMode } from './types';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode');
    return (saved === 'dark' || saved === 'light') ? saved : 'light';
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme-mode', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-ivory-100 dark:bg-darkbg-base text-charcoal-800 dark:text-ivory-100 transition-colors duration-300 flex flex-col font-sans">
      {/* Navbar with Sticky & Scroll Progress Bar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero 
          onToast={showToast} 
          onOpenResume={() => setResumeOpen(true)} 
        />
        <About />
        <Skills />
        <Projects
          onSelectProject={(proj) => setSelectedProject(proj)}
          onToast={showToast}
        />
        <Achievements />
        <BeyondDevelopment />
        <Contact onToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onToast={showToast} />

      {/* Project Architecture Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onToast={showToast}
      />

      {/* Interactive Resume Modal with Direct PDF Download */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onToast={showToast}
      />

      {/* Notification Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
};

export default App;
