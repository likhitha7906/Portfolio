import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';
import { 
  Code2, 
  BarChart3, 
  Binary, 
  LayoutDashboard, 
  Database, 
  Sparkles, 
  Wrench, 
  Search,
  Filter,
  CheckCircle2
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'BarChart3': return BarChart3;
      case 'Binary': return Binary;
      case 'LayoutDashboard': return LayoutDashboard;
      case 'Database': return Database;
      case 'Sparkles': return Sparkles;
      case 'Wrench': return Wrench;
      default: return Code2;
    }
  };

  // Filtered categories and skills
  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => selectedCategory === 'all' || cat.id === selectedCategory)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const matchingSkills = cat.skills.filter(
          (s) =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.context.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return {
          ...cat,
          skills: matchingSkills,
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [skillCategories, selectedCategory, searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [skillCategories]);

  return (
    <section id="skills" className="py-20 bg-slate-900/40 dark:bg-slate-900/40 light:bg-slate-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium">
            <Binary className="w-3.5 h-3.5" />
            <span>Structured Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
            Technical Skills
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Organized across core data analytics, database engineering, Python data science, and modern Generative AI.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              All Skills ({totalSkillsCount})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. SQL, RAG)..."
              className="w-full bg-slate-950/80 dark:bg-slate-950/80 light:bg-white border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = getCategoryIcon(category.iconName);
            return (
              <div
                key={category.id}
                className="bg-slate-900/80 dark:bg-slate-900/80 light:bg-white rounded-2xl p-6 border border-slate-800/90 hover:border-slate-700/80 shadow-lg flex flex-col justify-between transition-all duration-200 hover:-translate-y-1"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white dark:text-white light:text-slate-900">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Tag Cloud & Detail Items */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 hover:border-slate-700 transition-colors group"
                      >
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900 group-hover:text-blue-400 transition-colors">
                            {skill.name}
                          </span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400/80 flex-shrink-0" />
                        </div>
                        <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-tight">
                          {skill.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Applied in projects</span>
                  <span className="text-emerald-400">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-sm text-slate-400">No skills matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-2 text-xs text-blue-400 underline font-mono"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Ethical Reporting Assurance */}
        <div className="mt-12 text-center text-xs text-slate-400 font-mono max-w-xl mx-auto">
          Notice: Skills are categorized by authentic practical application and coursework. No arbitrary percentage ratings (e.g. "95% Python") are used, preserving transparency and credibility for technical interviewers.
        </div>

      </div>
    </section>
  );
};
