import React, { useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Mail, 
  Linkedin, 
  Github,
  CheckCircle2
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);
  const { personal, certifications } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
LIKHITHA TUMMALA
Data Analyst | Python Developer | GenAI Enthusiast
Email: ${personal.email} | LinkedIn: ${personal.linkedin} | GitHub: ${personal.github}

SUMMARY:
Entry-level Data Analyst skilled in Python, SQL, and Power BI, with hands-on experience in data analytics projects. Proficient in data cleaning, EDA, statistical analysis, data visualization, KPI reporting, and dashboard development. Adept at leveraging Pandas, NumPy, Matplotlib, and Seaborn to analyze data, identify trends, and generate actionable business insights.

EDUCATION:
Bachelor of Technology (B.Tech), VIT-AP
Graduation: 2026

PROJECTS:
1. Multi-City Restaurant Intelligence & Food Price Analysis (Python, Web Scraping, BeautifulSoup, Requests, Pandas, Power BI)
- Developed a Python-based web scraping pipeline using BeautifulSoup and Requests to collect 1000+ restaurant records across multiple cities.
- Performed data cleaning, preprocessing, and EDA using Pandas to identify city-wise pricing trends, cuisine distribution, and promotional patterns.
- Built interactive Power BI dashboards with 5+ KPIs.

2. Blinkit Grocery Sales Analysis (MySQL, KPI Analysis, Window Functions)
- Analysed 8,500+ grocery sales records using SQL to evaluate revenue, product performance, and outlet-level sales trends.
- Executed SQL queries using JOINs, GROUP BY, HAVING, and window functions.
- Calculated 4 key business KPIs.

3. Document QA System Using Retrieval-Augmented Generation (Python, LangChain, FAISS, FastAPI)
- Built a RAG pipeline for question answering over 2,500+ documents using semantic chunking and FAISS retrieval.
- Reduced hallucination rate by 40% through grounded prompting.

CERTIFICATIONS & AWARDS:
- Oracle Certified Generative AI Professional – Oracle (2026)
- Python Programming Certification – Innomatics
- Data Analyst Job Simulation – Deloitte
- 2nd place among 100+ participants – Code Wave national analytics event
- SWAYAM Learnathon – Generative AI Fundamentals
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    // Attempt downloading the resume PDF
    const link = document.createElement('a');
    link.href = personal.resumePdfPath;
    link.download = `Likhitha_Tummala_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 rounded-2xl max-w-4xl w-full border border-slate-700 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden text-slate-100">
        
        {/* Modal Controls Header */}
        <div className="p-4 sm:px-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white">
                Official Resume Preview — Likhitha Tummala
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                ATS-Optimized Format • VIT-AP CSE (2026)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
              title="Copy plain text format"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notice Banner about PDF placement */}
        <div className="bg-slate-950/80 px-4 py-2 border-b border-slate-800 text-[11px] text-slate-400 font-mono flex items-center justify-between no-print">
          <span>Target File: <code className="text-blue-400">/public/resume.pdf</code></span>
          <span>Tip: Use "Print / Save PDF" to generate a clean ATS copy anytime.</span>
        </div>

        {/* ATS Resume Printable Container */}
        <div 
          ref={resumeRef}
          className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans print:p-0 print:m-0"
          style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
        >
          {/* Header */}
          <div className="text-center border-b pb-4 mb-5 border-slate-300">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-slate-950">
              Likhitha Tummala
            </h1>
            <div className="text-sm font-semibold text-blue-700 mt-0.5">
              Data Analyst
            </div>

            {/* Contact row */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-700 mt-2 font-mono">
              <a href="mailto:likhithajnvl@gmail.com" className="flex items-center gap-1 hover:text-blue-700">
                <Mail className="w-3 h-3 text-slate-500" />
                <span>likhithajnvl@gmail.com</span>
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/likhitha-tummala-366440282/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-700">
                <Linkedin className="w-3 h-3 text-slate-500" />
                <span>linkedin.com/in/likhitha-tummala</span>
              </a>
              <span>•</span>
              <a href="https://github.com/likhitha7906" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-700">
                <Github className="w-3 h-3 text-slate-500" />
                <span>github.com/likhitha7906</span>
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5 font-mono">
              Summary
            </h2>
            <p className="text-xs text-slate-800 leading-relaxed text-justify">
              Entry-level Data Analyst skilled in Python, SQL, and Power BI, with hands-on experience in data analytics projects. Proficient in data cleaning, EDA, statistical analysis, data visualization, KPI reporting, and dashboard development. Adept at leveraging Pandas, NumPy, Matplotlib, and Seaborn to analyze data, identify trends, and generate actionable business insights.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5 font-mono">
              Skills
            </h2>
            <div className="text-xs text-slate-800 space-y-1">
              <div><strong className="font-semibold text-slate-950">Programming Languages:</strong> Python (NumPy, Pandas, Matplotlib, Seaborn), Java</div>
              <div><strong className="font-semibold text-slate-950">Data Analysis:</strong> Exploratory Data Analysis (EDA), Statistical Analysis, Data Cleaning, Data Preprocessing</div>
              <div><strong className="font-semibold text-slate-950">Data Visualization & Reporting:</strong> Power BI, Microsoft Excel, KPI Reporting, Dashboard Development</div>
              <div><strong className="font-semibold text-slate-950">Database & Query Languages:</strong> SQL, MySQL</div>
              <div><strong className="font-semibold text-slate-950">Web Scraping:</strong> Requests, BeautifulSoup (Basic)</div>
              <div><strong className="font-semibold text-slate-950">Tools & Platforms:</strong> Git, GitHub, Visual Studio Code (VS Code), Anaconda, REST APIs</div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5 font-mono">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs text-slate-900">
              <div>
                <strong className="font-bold">Bachelor of Technology (B.Tech)</strong>, VIT-AP
              </div>
              <div className="font-mono text-slate-700">
                Graduation: 2026
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5 font-mono">
              Projects
            </h2>

            <div className="space-y-3 mt-2">
              {/* Project 1 */}
              <div>
                <div className="flex justify-between items-baseline text-xs">
                  <div className="font-bold text-slate-950">
                    Multi-City Restaurant Intelligence & Food Price Analysis
                  </div>
                  <div className="text-[11px] font-mono text-slate-600">
                    Python, Web Scraping, BeautifulSoup, Requests, Pandas, Power BI
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-slate-800 space-y-0.5 mt-1 leading-relaxed">
                  <li>Developed a Python-based web scraping pipeline using BeautifulSoup and Requests to collect 1000+ restaurant records across multiple cities, extracting ratings, cuisines, localities, pricing, and promotional offers.</li>
                  <li>Performed data cleaning, preprocessing, and exploratory data analysis (EDA) using Pandas to identify city-wise pricing trends, cuisine distribution, restaurant ratings, and promotional patterns.</li>
                  <li>Built interactive Power BI dashboards with 5+ KPIs to visualize restaurant distribution, average pricing, rating trends, and promotional offers, supporting data-driven insights.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between items-baseline text-xs">
                  <div className="font-bold text-slate-950">
                    Blinkit Grocery Sales Analysis
                  </div>
                  <div className="text-[11px] font-mono text-slate-600">
                    MySQL, KPI Analysis, Window Functions, Data Analysis
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-slate-800 space-y-0.5 mt-1 leading-relaxed">
                  <li>Analysed 8,500+ grocery sales records using SQL to evaluate revenue, product performance, customer ratings, and outlet-level sales trends.</li>
                  <li>Executed SQL queries using JOINs, GROUP BY, HAVING, and window functions to identify top-performing product categories, outlet types, location tiers, and pricing segments.</li>
                  <li>Calculated 4 key business KPIs and performed comparative sales analysis to uncover trends in fat content preferences, outlet performance, and product categories.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex justify-between items-baseline text-xs">
                  <div className="font-bold text-slate-950">
                    Document QA System Using Retrieval-Augmented Generation
                  </div>
                  <div className="text-[11px] font-mono text-slate-600">
                    Python, LangChain, FAISS, FastAPI
                  </div>
                </div>
                <ul className="list-disc list-outside ml-4 text-xs text-slate-800 space-y-0.5 mt-1 leading-relaxed">
                  <li>Built a RAG pipeline for question answering over 2,500+ documents using semantic chunking and FAISS retrieval, reducing information lookup time for non-technical users.</li>
                  <li>Reduced hallucination rate by 40 percent through grounded prompting and evaluation.</li>
                  <li>Deployed as a FastAPI service achieving 1.8s p60 latency.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications and Awards */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-0.5 mb-1.5 font-mono">
              Certifications and Awards
            </h2>
            <ul className="list-disc list-outside ml-4 text-xs text-slate-800 space-y-0.5 mt-1">
              <li><strong className="font-semibold text-slate-950">Oracle Certified Generative AI Professional</strong> – Oracle (2026)</li>
              <li><strong className="font-semibold text-slate-950">Python Programming Certification</strong> – Innomatics: Core Python programming and data structures</li>
              <li><strong className="font-semibold text-slate-950">Data Analyst Job Simulation</strong> – Deloitte: Real-world data cleaning, analysis, and reporting tasks</li>
              <li><strong className="font-semibold text-slate-950">2nd place among 100+ participants</strong> – Code Wave national analytics event, NextGen Data Science Club</li>
              <li><strong className="font-semibold text-slate-950">SWAYAM Learnathon</strong> – Generative AI Fundamentals: LLMs, prompt engineering, and diffusion models</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
