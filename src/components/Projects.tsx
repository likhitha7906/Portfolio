import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Database, 
  BarChart3, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  FileCode2, 
  X,
  Code2
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Data Analytics', label: 'Data Analytics & EDA' },
    { id: 'Generative AI & RAG', label: 'GenAI & RAG' },
    { id: 'SQL & Databases', label: 'SQL & Database Analysis' },
  ];

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'all' || p.category === activeCategory
  );

  const getArchitectureBadge = (type: Project['architectureType']) => {
    switch (type) {
      case 'rag':
        return { label: 'RAG Architecture', icon: Sparkles, color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' };
      case 'analytics':
        return { label: 'Exploratory Analytics', icon: BarChart3, color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' };
      case 'database':
        return { label: 'SQL & Relational DB', icon: Database, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' };
      case 'scraping':
        return { label: 'Web Scraping & EDA', icon: Layers, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' };
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5" />
            <span>Practical Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
            Featured Projects
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            End-to-end analytics pipelines, relational SQL deep dives, and Generative AI knowledge systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 font-semibold'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const arch = getArchitectureBadge(project.architectureType);
            const ArchIcon = arch.icon;

            return (
              <div
                key={project.id}
                className="bg-slate-900/85 dark:bg-slate-900/85 light:bg-white rounded-2xl border border-slate-800/90 hover:border-slate-700 shadow-xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="p-5 pb-3 border-b border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 relative">
                    <div className="flex items-center justify-between mb-3">
                      {/* Architecture badge */}
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border ${arch.color}`}>
                        <ArchIcon className="w-3 h-3" />
                        <span>{arch.label}</span>
                      </span>

                      {/* Status badge */}
                      {project.status === 'In Progress' ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                          <Clock className="w-3 h-3 animate-spin" />
                          <span>In Progress</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Complete</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-4">
                    
                    {/* Problem Statement Snippet */}
                    <div className="space-y-1">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Problem Statement
                      </div>
                      <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed line-clamp-3">
                        {project.problemStatement}
                      </p>
                    </div>

                    {/* Analytics Highlights / Metrics if present */}
                    {project.analyticsHighlight && (
                      <div className="grid grid-cols-3 gap-2 py-1">
                        {project.analyticsHighlight.map((stat, i) => (
                          <div key={i} className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80 text-center">
                            <div className="text-xs font-bold text-blue-400 font-mono truncate">{stat.metric}</div>
                            <div className="text-[9px] text-slate-400 font-mono truncate mt-0.5">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Key Features Preview (Top 3) */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Key Features
                      </div>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((f, i) => (
                          <li key={i} className="text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-600 flex items-start gap-1.5">
                            <span className="text-blue-400 font-bold leading-none mt-0.5">•</span>
                            <span className="line-clamp-1">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-800/90 text-slate-300 border border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 5 && (
                          <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono bg-slate-800/60 text-slate-400">
                            +{project.technologies.length - 5}
                          </span>
                        )}
                      </div>
                    </div>

                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-5 pt-3 border-t border-slate-800/80 bg-slate-950/40 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 group/btn"
                  >
                    <span>Deep Dive Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                      title="Inspect GitHub Repository"
                      aria-label="Inspect GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>

                    {project.hasLiveDemo && project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-white text-[11px] font-medium flex items-center gap-1 transition-colors"
                        title="Live Demo / Repository"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                        {project.status === 'In Progress' ? 'WIP Demo' : 'Code Only'}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Deep Dive Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 dark:bg-slate-900 light:bg-white rounded-2xl max-w-2xl w-full border border-slate-700 shadow-2xl max-h-[90vh] flex flex-col overflow-hidden">
              
              {/* Modal Header */}
              <div className="p-6 pb-4 border-b border-slate-800 flex items-start justify-between bg-slate-950/60">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-medium text-blue-400 uppercase">
                      {selectedProject.category}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-mono text-slate-400">
                      Status: {selectedProject.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6 overflow-y-auto">
                {/* Description */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono uppercase text-slate-400">Project Overview</h4>
                  <p className="text-sm text-slate-200 dark:text-slate-200 light:text-slate-800 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Problem Statement */}
                <div className="space-y-1.5 p-3.5 bg-slate-950/70 rounded-xl border border-slate-800">
                  <h4 className="text-xs font-mono uppercase text-blue-400 font-semibold">Problem Statement</h4>
                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                    {selectedProject.problemStatement}
                  </p>
                </div>

                {/* All Features */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400">Features & Technical Implementation</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-slate-400">Full Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-blue-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Configurable in portfolioData.ts
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
