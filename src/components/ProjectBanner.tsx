import React from 'react';

interface ProjectBannerProps {
  type: 'infra' | 'security' | 'food' | 'eco' | 'mental';
  title: string;
}

export const ProjectBanner: React.FC<ProjectBannerProps> = ({ type, title }) => {
  switch (type) {
    case 'infra':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-sage-900 via-charcoal-900 to-sage-950 p-5 flex flex-col justify-between text-ivory-100 relative overflow-hidden rounded-t-xl border-b border-ivory-300 dark:border-darkbg-border">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#78977A_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-sage-200">System Telemetry Engine</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sage-800/80 border border-sage-600/50 text-sage-200">Zod + Heuristics</span>
          </div>

          {/* Metric wave visualization */}
          <div className="relative z-10 my-auto py-2">
            <div className="flex items-end gap-1.5 h-16 w-full opacity-90">
              <div className="w-1/12 bg-sage-500/40 h-6 rounded-t"></div>
              <div className="w-1/12 bg-sage-500/50 h-8 rounded-t"></div>
              <div className="w-1/12 bg-sage-500/60 h-10 rounded-t"></div>
              <div className="w-1/12 bg-sage-400 h-14 rounded-t"></div>
              <div className="w-1/12 bg-amber-400/90 h-16 rounded-t animate-pulse" title="High CPU Alert"></div>
              <div className="w-1/12 bg-sage-500/70 h-11 rounded-t"></div>
              <div className="w-1/12 bg-sage-500/50 h-7 rounded-t"></div>
              <div className="w-1/12 bg-sage-500/60 h-9 rounded-t"></div>
              <div className="w-1/12 bg-rose-400/80 h-13 rounded-t" title="Queue Backlog"></div>
              <div className="w-1/12 bg-sage-400/80 h-12 rounded-t"></div>
              <div className="w-1/12 bg-sage-500/50 h-8 rounded-t"></div>
              <div className="w-1/12 bg-sage-500/40 h-6 rounded-t"></div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-sage-300">
            <span>Alerts: CPU Spike & Backlog Detected</span>
            <span className="text-emerald-400 font-semibold">Triage Ready</span>
          </div>
        </div>
      );

    case 'security':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-[#1A2621] via-[#1E2E27] to-[#121B17] p-5 flex flex-col justify-between text-ivory-100 relative overflow-hidden rounded-t-xl border-b border-ivory-300 dark:border-darkbg-border">
          <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-sage-400/10 blur-2xl"></div>
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-sage-200">Container Security Gate</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sage-800/80 border border-sage-600/50 text-sage-200">Trivy + FastAPI</span>
          </div>

          {/* Vulnerability scanning matrix */}
          <div className="relative z-10 grid grid-cols-4 gap-2 my-auto py-2">
            <div className="p-2 rounded bg-charcoal-900/60 border border-rose-500/30 text-center">
              <div className="text-[10px] uppercase font-mono text-rose-300">CRIT</div>
              <div className="text-base font-bold text-rose-400">0</div>
            </div>
            <div className="p-2 rounded bg-charcoal-900/60 border border-amber-500/30 text-center">
              <div className="text-[10px] uppercase font-mono text-amber-300">HIGH</div>
              <div className="text-base font-bold text-amber-400">2</div>
            </div>
            <div className="p-2 rounded bg-charcoal-900/60 border border-blue-500/30 text-center">
              <div className="text-[10px] uppercase font-mono text-blue-300">MED</div>
              <div className="text-base font-bold text-blue-400">5</div>
            </div>
            <div className="p-2 rounded bg-charcoal-900/60 border border-emerald-500/30 text-center">
              <div className="text-[10px] uppercase font-mono text-emerald-300">PASS</div>
              <div className="text-base font-bold text-emerald-400">Policy</div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-sage-300">
            <span>Image Audit: debian:bookworm-slim</span>
            <span className="text-sage-200">Policy Evaluated</span>
          </div>
        </div>
      );

    case 'food':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-[#232F28] via-[#1B2620] to-[#141E19] p-5 flex flex-col justify-between text-ivory-100 relative overflow-hidden rounded-t-xl border-b border-ivory-300 dark:border-darkbg-border">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sage-400/10 rounded-full blur-xl"></div>
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-sage-200">ResNet18 Deep Vision</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sage-700/80 border border-sage-500/40 text-emerald-300 font-semibold">93% Accuracy</span>
          </div>

          {/* Deep learning inference diagram */}
          <div className="relative z-10 flex items-center justify-around my-auto py-2">
            <div className="px-3 py-1.5 rounded bg-charcoal-900/70 border border-sage-600/40 text-center">
              <div className="text-[10px] font-mono text-sage-300">Input Image</div>
              <div className="text-xs font-semibold text-ivory-100">RGB 224x224</div>
            </div>
            <span className="text-sage-400 font-mono text-sm">→</span>
            <div className="px-3 py-1.5 rounded bg-sage-800/80 border border-sage-500/50 text-center">
              <div className="text-[10px] font-mono text-sage-200">Feature Backbone</div>
              <div className="text-xs font-bold text-emerald-300">ResNet-18 Layers</div>
            </div>
            <span className="text-sage-400 font-mono text-sm">→</span>
            <div className="px-3 py-1.5 rounded bg-charcoal-900/70 border border-sage-600/40 text-center">
              <div className="text-[10px] font-mono text-sage-300">Regression Head</div>
              <div className="text-xs font-semibold text-amber-300">Calorie Estimate</div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-sage-300">
            <span>Inference: Multimodal PyTorch Pipeline</span>
            <span className="text-emerald-400 font-semibold">MERN Interface</span>
          </div>
        </div>
      );

    case 'eco':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-[#1F2B23] via-[#26372D] to-[#1A261F] p-5 flex flex-col justify-between text-ivory-100 relative overflow-hidden rounded-t-xl border-b border-ivory-300 dark:border-darkbg-border">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8EAF90_1px,transparent_1px),linear-gradient(to_bottom,#8EAF90_1px,transparent_1px)] bg-[size:20px_20px]"></div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-sage-200">Circular Commerce</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sage-800/80 border border-sage-600/50 text-sage-200">MERN Stack</span>
          </div>

          {/* Marketplace exchange graphic */}
          <div className="relative z-10 flex items-center justify-center gap-4 my-auto py-2">
            <div className="px-3 py-2 rounded-lg bg-charcoal-900/60 border border-sage-500/30 text-center">
              <div className="text-xs font-semibold text-ivory-100">Product Listing</div>
              <div className="text-[10px] text-sage-300">Item Cataloging</div>
            </div>
            <div className="w-8 h-8 rounded-full border border-sage-400/60 flex items-center justify-center text-sage-300 text-sm font-bold">
              ⇄
            </div>
            <div className="px-3 py-2 rounded-lg bg-charcoal-900/60 border border-sage-500/30 text-center">
              <div className="text-xs font-semibold text-ivory-100">Sustainable Discovery</div>
              <div className="text-[10px] text-sage-300">Direct Re-use Exchange</div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-sage-300">
            <span>Zero-Waste Shopping Vision</span>
            <span className="text-emerald-300 font-semibold">MongoDB Atlas</span>
          </div>
        </div>
      );

    case 'mental':
      return (
        <div className="w-full h-48 bg-gradient-to-br from-[#1C2822] via-[#22332B] to-[#15211B] p-5 flex flex-col justify-between text-ivory-100 relative overflow-hidden rounded-t-xl border-b border-ivory-300 dark:border-darkbg-border">
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-mono font-medium tracking-wider uppercase text-sage-200">Conversational NLP Engine</span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sage-800/80 border border-sage-600/50 text-sage-200">TF-IDF + NLTK</span>
          </div>

          {/* NLP chat stream */}
          <div className="relative z-10 space-y-2 my-auto py-1">
            <div className="flex items-center gap-2">
              <div className="px-2.5 py-1 rounded-full bg-sage-800/80 border border-sage-600/40 text-[11px] text-sage-200">
                User: "Strategies for study burnout..."
              </div>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <div className="px-2.5 py-1 rounded-full bg-emerald-900/40 border border-emerald-500/40 text-[11px] text-emerald-200">
                AI: Preprocessing → TF-IDF Vector → Empathetic Match
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-sage-300">
            <span>Scikit-Learn Cosine Ranking</span>
            <span className="text-emerald-400 font-semibold">Supportive Dialog</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-48 bg-sage-800 p-5 flex items-center justify-center text-ivory-100">
          <span className="font-serif text-lg">{title}</span>
        </div>
      );
  }
};
