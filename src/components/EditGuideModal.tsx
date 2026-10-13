import React, { useState } from 'react';
import { X, FileCode, Upload, Mail, Globe, Check, Copy } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const EditGuideModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 rounded-2xl max-w-3xl w-full border border-slate-700 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden text-slate-100">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <FileCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Portfolio Customization & Deployment Guide
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Instructions for Likhitha to update content, resume & services
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto text-xs sm:text-sm">
          
          {/* Step 1: Centralized Configuration */}
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-blue-400 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 inline-flex items-center justify-center text-xs font-mono">1</span>
              <span>Edit Your Personal Information & Skills</span>
            </h4>
            <p className="text-slate-300 leading-relaxed">
              All personal information, links, projects, and skills are stored in a single centralized file:
              <code className="text-blue-300 font-mono ml-1 px-1.5 py-0.5 bg-slate-950 rounded border border-slate-800">/src/data/portfolioData.ts</code>.
            </p>
            <p className="text-slate-400 text-xs">
              Open that file to update your LinkedIn link, GitHub URL, new certifications, or projects anytime.
            </p>
          </div>

          {/* Step 2: Resume PDF */}
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-emerald-400 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 inline-flex items-center justify-center text-xs font-mono">2</span>
              <span>Uploading Your Actual Resume PDF</span>
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Place your PDF resume into the public directory as <code className="text-emerald-300 font-mono px-1.5 py-0.5 bg-slate-950 rounded border border-slate-800">public/resume.pdf</code>.
            </p>
            <p className="text-slate-400 text-xs">
              If your PDF is hosted on Google Drive or GitHub, you can also paste that public direct link into <code className="text-emerald-300 font-mono">portfolioData.ts</code> under <code className="text-emerald-300 font-mono">resumePdfPath</code>. Additionally, the portfolio has a built-in "Print / Save PDF" feature in the ATS Resume Viewer!
            </p>
          </div>

          {/* Step 3: Contact Form Integration */}
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-purple-400 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-300 inline-flex items-center justify-center text-xs font-mono">3</span>
              <span>Contact Form Configuration</span>
            </h4>
            <p className="text-slate-300 leading-relaxed">
              The form currently opens your visitor's default email client pre-filled with subject and body addressed to <code className="text-purple-300 font-mono">likhithajnvl@gmail.com</code>.
            </p>
            <p className="text-slate-400 text-xs">
              To use a zero-code form backend such as <a href="https://formspree.io" target="_blank" rel="noreferrer" className="text-blue-400 underline">Formspree</a>, register free and change the form action URL in <code className="text-purple-300 font-mono">Contact.tsx</code> to your endpoint.
            </p>
          </div>

          {/* Step 4: Adding New Projects */}
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-amber-400 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 inline-flex items-center justify-center text-xs font-mono">4</span>
              <span>Adding New Projects</span>
            </h4>
            <p className="text-slate-300 leading-relaxed">
              In <code className="text-amber-300 font-mono">portfolioData.ts</code>, add a new object to the <code className="text-amber-300 font-mono">projects</code> array with your title, technologies, features, and GitHub URL.
            </p>
          </div>

          {/* Step 5: Deployment */}
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-cyan-400 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 inline-flex items-center justify-center text-xs font-mono">5</span>
              <span>Deploying to Vercel, Netlify, or GitHub Pages</span>
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Run <code className="text-cyan-300 font-mono px-1.5 py-0.5 bg-slate-950 rounded border border-slate-800">npm run build</code> to produce the production-ready static assets in <code className="text-cyan-300 font-mono">dist/</code>. You can deploy directly with a single click on Vercel or Netlify by connecting your GitHub repository (<code className="text-cyan-300 font-mono">likhitha7906</code>).
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium"
          >
            Got it, thanks!
          </button>
        </div>

      </div>
    </div>
  );
};
