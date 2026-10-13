import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Sparkles,
  Database,
  Code2,
  LineChart,
  Bot
} from 'lucide-react';

interface Props {
  onOpenResume: () => void;
}

export const Hero: React.FC<Props> = ({ onOpenResume }) => {
  const { personal } = PORTFOLIO_DATA;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Status & Career Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border border-slate-800 text-xs text-slate-300 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-medium text-slate-200">
            {personal.careerStage} • Graduating 2026
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-blue-400 font-mono">VIT-AP University</span>
        </div>

        {/* Headline & Subheadline */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-tight">
            {personal.headline}
          </h1>
          <h2 className="text-2xl sm:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent leading-snug max-w-3xl mx-auto">
            {personal.subheadline}
          </h2>
        </div>

        {/* Professional Title */}
        <div className="inline-block px-4 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm sm:text-base font-mono text-blue-400 font-medium">
          {personal.title}
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed max-w-2xl mx-auto">
          {personal.bio}
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-800 hover:border-slate-700 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <Download className="w-4 h-4 text-blue-400" />
            <span>Download Resume</span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-transparent hover:bg-slate-800/40 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 transition-colors"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Social Connect Icons (No Phone Number) */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Direct Connect:
          </span>

          <div className="flex items-center gap-2.5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-all hover:scale-105"
              aria-label="GitHub Profile"
              title="GitHub: likhitha7906"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-blue-400 transition-all hover:scale-105"
              aria-label="LinkedIn Profile"
              title="LinkedIn: Likhitha Tummala"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-emerald-400 transition-all hover:scale-105"
              aria-label="Send Email"
              title={`Email: ${personal.email}`}
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 border-l border-slate-800 pl-4 font-mono">
            <span>Location: {personal.location}</span>
          </div>
        </div>

        {/* Core Pillars Quick Badge Bar */}
        <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-center gap-2 text-xs font-medium text-slate-300">
            <LineChart className="w-4 h-4 text-blue-400" />
            <span>Data Analytics & EDA</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-center gap-2 text-xs font-medium text-slate-300">
            <Code2 className="w-4 h-4 text-indigo-400" />
            <span>Python & Pandas</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-center gap-2 text-xs font-medium text-slate-300">
            <Database className="w-4 h-4 text-emerald-400" />
            <span>SQL & MySQL</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-center justify-center gap-2 text-xs font-medium text-slate-300">
            <Bot className="w-4 h-4 text-purple-400" />
            <span>Generative AI & RAG</span>
          </div>
        </div>

      </div>
    </section>
  );
};
