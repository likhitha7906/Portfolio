import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  GraduationCap, 
  Sparkles, 
  Info,
  Clock,
  Printer
} from 'lucide-react';

interface Props {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<Props> = ({ onOpenResumeModal }) => {
  const { personal } = PORTFOLIO_DATA;
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    // Attempt download of resume PDF
    const link = document.createElement('a');
    link.href = personal.resumePdfPath;
    link.download = `Likhitha_Tummala_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="resume" className="py-20 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
              <FileText className="w-3.5 h-3.5" />
              <span>Recruiter & Hiring Manager Resources</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Curriculum Vitae & Qualifications
            </h2>

            <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              I welcome technical recruiters and hiring managers to review my verified coursework, practical data analytics pipelines, and AI engineering accomplishments.
            </p>
          </div>

          {/* Quick Resume Summary Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <div className="text-[11px] font-mono text-slate-400 uppercase">Education</div>
              <div className="text-sm font-bold text-white mt-1">VIT-AP University</div>
              <div className="text-xs text-blue-400 font-mono mt-0.5">B.Tech CSE • Graduating 2026</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <div className="text-[11px] font-mono text-slate-400 uppercase">Core Competencies</div>
              <div className="text-sm font-bold text-white mt-1">Python, SQL, Power BI</div>
              <div className="text-xs text-emerald-400 font-mono mt-0.5">RAG & GenAI Pipelines</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
              <div className="text-[11px] font-mono text-slate-400 uppercase">Career Status</div>
              <div className="text-sm font-bold text-white mt-1">Fresher / 2026 Batch</div>
              <div className="text-xs text-violet-400 font-mono mt-0.5">Open to Relocation / Remote</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </button>

            <button
              onClick={onOpenResumeModal}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Eye className="w-4 h-4 text-blue-400" />
              <span>View Interactive ATS Resume</span>
            </button>
          </div>

          {downloadSuccess && (
            <div className="mt-4 p-2.5 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-center text-xs text-emerald-300 font-mono animate-in fade-in">
              ✓ Resume download triggered. You can also view and print the ATS version directly in the interactive viewer!
            </div>
          )}

          {/* Configurable Path Explanation Note */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-2">
            <div className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
              <span>Configurable path: <code className="text-slate-300">{personal.resumePdfPath}</code></span>
            </div>
            <span>Printable ATS layout included</span>
          </div>

        </div>

      </div>
    </section>
  );
};
