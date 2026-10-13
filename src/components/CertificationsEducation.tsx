import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Calendar, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck,
  BookOpen
} from 'lucide-react';

export const CertificationsEducation: React.FC = () => {
  const { personal, certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-20 bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
            Education & Certifications
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Formal engineering degree credentials and industry-recognized certifications in Generative AI, Python, and Data Analysis.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="mb-14">
          <div className="bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90 dark:bg-slate-900 light:bg-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-blue-600/10 text-blue-400 border border-blue-500/20 flex-shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-1.5">
                    Undergraduate Degree
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900">
                    {personal.educationDegree} in {personal.educationField}
                  </h3>
                  <p className="text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 font-medium mt-0.5">
                    {personal.university}
                  </p>
                </div>
              </div>

              <div className="flex flex-row md:flex-col items-start md:items-end justify-between gap-2 border-t md:border-t-0 pt-3 md:pt-0 border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Graduation Year: {personal.graduationYear}</span>
                </div>
                <div className="bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800">
                  <span className="text-xs text-slate-400 font-mono">Status: </span>
                  <span className="text-sm font-bold text-blue-400 font-mono">B.Tech Graduate 2026</span>
                </div>
              </div>
            </div>

            {/* Coursework & Competencies */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-slate-400">Core Computer Science</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Data Structures & Algorithms, Object-Oriented Programming (Java/Python), Database Management Systems (DBMS), Operating Systems.
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-slate-400">Data & Statistics</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Exploratory Data Analysis, Probability & Statistics, Relational Schema Modeling, SQL Aggregations & Query Optimization.
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-slate-400">Software Engineering</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Software Development Life Cycle (SDLC), Git/GitHub Version Control, RESTful API consumption, System Architecture.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Certifications & Awards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span>Professional Certifications & Competitive Honors</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">
              {certifications.length} Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => {
              const isAward = cert.type === 'award';
              return (
                <div
                  key={cert.id}
                  className={`bg-slate-900/85 dark:bg-slate-900/85 light:bg-white rounded-2xl p-6 border transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between shadow-lg ${
                    isAward
                      ? 'border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-slate-900 to-slate-900'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium ${
                        isAward 
                          ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20' 
                          : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}>
                        {isAward ? 'Competitive Award' : 'Verified Certification'}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {cert.issueDate}
                      </span>
                    </div>

                    <h4 className="font-bold text-base text-white dark:text-white light:text-slate-900 leading-snug">
                      {cert.title}
                    </h4>
                    
                    <div className="text-xs font-medium text-slate-300 dark:text-slate-300 light:text-slate-600 mt-1 mb-3">
                      Issuer: <span className="text-blue-400">{cert.issuer}</span>
                    </div>

                    <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  <div>
                    {/* Skills Gained Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                      {cert.skillsGained.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/90 text-slate-300 border border-slate-700/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
