import React from 'react';
import { 
  Award, 
  GraduationCap, 
  Users, 
  CheckCircle2, 
  ShieldCheck, 
  BookOpen, 
  Sparkles,
  Trophy
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { achievementsData, certificationsData } from '../data/achievements';
import { personalInfo } from '../data/personalInfo';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 lg:py-28 bg-ivory-200/50 dark:bg-darkbg-card/40 border-y border-ivory-300 dark:border-darkbg-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          number="04"
          category="EXCELLENCE & EDUCATION"
          title="Achievements & Education"
          subtitle="Milestones that mark my academic dedication, competitive problem solving, and technical journey."
        />

        {/* Featured Academic Banner */}
        <div className="relative overflow-hidden mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-sage-800 via-sage-900 to-[#192A22] text-ivory-100 shadow-soft-md border border-sage-700">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 bg-sage-400/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-amber-400/20 border border-amber-300/30 text-amber-300 flex-shrink-0">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-amber-400/20 text-amber-200 border border-amber-400/30 font-semibold">
                  Academic Record
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ivory-50">
                  Department Topper in Every Semester
                </h3>
                <p className="text-sm text-sage-200 font-sans max-w-2xl leading-relaxed">
                  Consistently maintained Rank 1 across all 6 completed semesters of B.E. in Artificial Intelligence &amp; Data Science at CMRIT Bengaluru, achieving a cumulative CGPA of 9.53 / 10.0.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="px-5 py-3 rounded-2xl bg-sage-950/60 border border-sage-700/60 text-center">
                <div className="text-2xl font-serif font-bold text-amber-300">9.53</div>
                <div className="text-[10px] font-mono text-sage-300 uppercase">CGPA</div>
              </div>
              <div className="px-5 py-3 rounded-2xl bg-sage-950/60 border border-sage-700/60 text-center">
                <div className="text-2xl font-serif font-bold text-emerald-300">6 / 6</div>
                <div className="text-[10px] font-mono text-sage-300 uppercase">Semesters #1</div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Education & Activities vs Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education & Technical Activities (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Education Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border shadow-soft-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-ivory-100 dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border text-sage-700 dark:text-sage-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 font-bold">
                    Degree &amp; Institution
                  </h4>
                  <h3 className="font-serif font-bold text-lg text-sage-800 dark:text-ivory-50">
                    {personalInfo.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 text-sm text-charcoal-600 dark:text-ivory-200">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-ivory-200 dark:border-darkbg-border/60">
                  <span className="text-sage-700 dark:text-sage-300 font-semibold">{personalInfo.branch}</span>
                  <span className="text-charcoal-400 dark:text-darkbg-muted">Class of 2027</span>
                </div>
                <p className="text-xs text-charcoal-500 dark:text-darkbg-muted leading-relaxed font-sans">
                  {personalInfo.college} — Affiliated to Visvesvaraya Technological University (VTU). In-depth focus on Machine Learning, Algorithms, Operating Systems, Database Systems, and Distributed Computing.
                </p>
              </div>
            </div>

            {/* Technical Activities & Clubs */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border shadow-soft-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-ivory-100 dark:bg-darkbg-surface border border-ivory-300 dark:border-darkbg-border text-sage-700 dark:text-sage-300">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-sage-700 dark:text-sage-300 font-bold">
                    Technical Communities
                  </h4>
                  <h3 className="font-serif font-bold text-lg text-sage-800 dark:text-ivory-50">
                    Clubs &amp; Coding Practice
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-ivory-50 dark:bg-darkbg-surface/50 border border-ivory-200 dark:border-darkbg-border">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-sage-800 dark:text-ivory-50">
                      HackerEarth Technical Club
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sage-100 dark:bg-sage-950 text-sage-800 dark:text-sage-300">
                      Active Member
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-500 dark:text-darkbg-muted font-sans">
                    Participating in collegiate programming challenges, peer code reviews, and technical workshops.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-ivory-50 dark:bg-darkbg-surface/50 border border-ivory-200 dark:border-darkbg-border">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-xs sm:text-sm text-sage-800 dark:text-ivory-50">
                      CodeChef Community
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sage-100 dark:bg-sage-950 text-sage-800 dark:text-sage-300">
                      Active Member
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-500 dark:text-darkbg-muted font-sans">
                    Regularly practicing data structures, runtime optimization, and algorithmic problem solving.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Certifications (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sage-600 dark:text-sage-400" />
                <h3 className="font-serif font-bold text-xl text-sage-800 dark:text-ivory-50">
                  Verified Certifications
                </h3>
              </div>
              <span className="text-xs font-mono text-charcoal-400 dark:text-darkbg-muted">
                Industry &amp; Academic
              </span>
            </div>

            <div className="space-y-3.5">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl bg-white dark:bg-darkbg-card border border-ivory-300 dark:border-darkbg-border hover:border-sage-400 dark:hover:border-sage-400/80 shadow-soft-sm transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-sage-600 dark:text-sage-300 font-semibold block mb-0.5">
                        {cert.category}
                      </span>
                      <h4 className="font-serif font-bold text-base text-sage-800 dark:text-ivory-50">
                        {cert.name}
                      </h4>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-ivory-100 dark:bg-darkbg-surface text-charcoal-700 dark:text-ivory-200 border border-ivory-300 dark:border-darkbg-border whitespace-nowrap">
                      {cert.issuer}
                    </span>
                  </div>

                  <p className="text-xs text-charcoal-500 dark:text-darkbg-muted leading-relaxed font-sans mb-3">
                    {cert.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Coursework Completed &amp; Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
