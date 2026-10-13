import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  GraduationCap, 
  LineChart, 
  Cpu, 
  Database, 
  Target, 
  Lightbulb, 
  CheckCircle, 
  Compass, 
  BookOpen,
  Award
} from 'lucide-react';

export const About: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const coreFocusAreas = [
    {
      icon: LineChart,
      title: "Data Analytics & Exploratory Analysis",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      description: "Extracting actionable business patterns from raw, complex data using Python (Pandas, NumPy, Seaborn) and SQL window aggregations.",
    },
    {
      icon: Database,
      title: "Business Intelligence & KPI Dashboards",
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      description: "Designing structured Power BI and Excel dashboards with clear DAX measures that translate operational metrics into executive insights.",
    },
    {
      icon: Cpu,
      title: "Generative AI & Hybrid RAG Architectures",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      description: "Developing intelligent question-answering systems routing queries between vector databases (Milvus, FAISS) and structured SQL engines.",
    },
    {
      icon: Target,
      title: "Business Problem Solving & Decision Making",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description: "Applying data-driven methodology to solve practical challenges: customer attrition, grocery sales trends, and dynamic pricing models.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>Background & Analytical Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
            About Me
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Bridging foundational Computer Science with practical data wrangling, commercial analytics, and modern AI.
          </p>
        </div>

        {/* Clean Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Academic Background & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-900/80 dark:bg-slate-900/80 light:bg-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-5">
              
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900">
                    {personal.educationDegree}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    {personal.educationField} • {personal.university}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
                <p>
                  I am a passionate Computer Science Engineering candidate graduating in <span className="text-white dark:text-white light:text-slate-900 font-semibold">{personal.graduationYear}</span> from <span className="text-blue-400 font-semibold">{personal.university}</span>.
                </p>

                <p>
                  Rather than viewing data as static tables, I treat it as an evolving story waiting to be unpacked. My academic training provided rigorous grounding in programming paradigms (Python, Java, C) and database systems (SQL, MySQL), while my hands-on portfolio projects developed my instincts in data cleaning, exploratory data analysis, and dashboard architecture.
                </p>

                <p>
                  I have built practical, reproducible projects analyzing over 8,500+ commercial grocery transactions, web-scraped restaurant pricing patterns across Indian cities, and designed RAG pipelines that ground LLMs in authoritative SQL databases and document embeddings.
                </p>

                <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 italic border-l-2 border-blue-500 pl-3">
                  "My goal is to join a forward-thinking, technology-driven organization where I can contribute analytical rigor to meaningful business problems while continuously learning from experienced engineering mentors."
                </p>
              </div>

              {/* Education & Academic Stats */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Degree Program</div>
                  <div className="text-base font-bold text-blue-400 mt-1">B.Tech in CSE</div>
                  <div className="text-[11px] text-slate-400 font-mono">VIT-AP University</div>
                </div>

                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Career Status</div>
                  <div className="text-base font-bold text-emerald-400 mt-1">Fresher / 2026</div>
                  <div className="text-[11px] text-slate-400 font-mono">Immediate / Ready</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Key Professional Interests & Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Key Professional Interests & Methodology
            </div>

            {coreFocusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-900/60 dark:bg-slate-900/60 light:bg-white rounded-xl p-5 border border-slate-800/90 hover:border-slate-700 transition-all hover:translate-x-1 duration-200 group shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl border flex-shrink-0 ${area.color} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-semibold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                        {area.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Practical Approach Pledge */}
            <div className="bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900/60 rounded-xl p-4 border border-blue-900/40 flex items-center gap-3 mt-4">
              <Lightbulb className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white">Project-First Verification:</span> All analytical claims, SQL window functions, and RAG architectures are backed by real, inspectable repositories and runnable code.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
