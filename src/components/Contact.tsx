import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  AlertCircle, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Spam bot protection
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'client_opened'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) return;
    if (!validate()) return;

    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      `[Portfolio Contact] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Hi Likhitha,\n\n${formData.message}\n\nFrom: ${formData.name}\nReply-To: ${formData.email}`
    )}`;

    window.location.href = mailtoUrl;

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#38BDF8', '#818CF8', '#A78BFA'],
      });
    } catch {
      // ignore
    }

    setSubmissionStatus('client_opened');
  };

  return (
    <section id="contact" className="py-20 bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-50 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-white light:text-slate-900">
            Let’s Connect and Build Something Meaningful.
          </h2>
          <p className="text-base text-slate-400 dark:text-slate-400 light:text-slate-600">
            Reach out directly through social channels or send a message below for entry-level Data Analyst and Python Developer opportunities.
          </p>
        </div>

        {/* Brand Symbol Cards (Replaces the empty stretched bars with prominent, beautiful symbol cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          
          {/* LinkedIn Symbol Card */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-blue-950/30 dark:bg-slate-900 light:bg-white rounded-2xl p-6 border border-slate-800 hover:border-blue-500/60 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                {/* Official LinkedIn Symbol */}
                <div className="w-12 h-12 rounded-xl bg-[#0A66C2] flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>
                <span className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-blue-600 group-hover:text-white text-slate-400 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <div className="text-xs font-mono uppercase text-blue-400 font-semibold tracking-wider">
                Professional Network
              </div>
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mt-1">
                LinkedIn
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 font-mono truncate">
                in/likhitha-tummala-366440282
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center text-xs font-medium text-blue-400 group-hover:text-blue-300">
              <span>View Profile & Connect</span>
            </div>
          </a>

          {/* GitHub Symbol Card */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-purple-950/30 dark:bg-slate-900 light:bg-white rounded-2xl p-6 border border-slate-800 hover:border-purple-500/60 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                {/* Official GitHub Symbol */}
                <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-slate-700 flex items-center justify-center text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform border border-slate-700">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </div>
                <span className="p-2 rounded-lg bg-slate-800/80 group-hover:bg-purple-600 group-hover:text-white text-slate-400 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <div className="text-xs font-mono uppercase text-purple-400 font-semibold tracking-wider">
                Source Code & Repositories
              </div>
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mt-1">
                GitHub
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 font-mono truncate">
                github.com/likhitha7906
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center text-xs font-medium text-purple-400 group-hover:text-purple-300">
              <span>Inspect Code & Contributions</span>
            </div>
          </a>

          {/* Email Symbol Card */}
          <div
            className="group relative bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-emerald-950/30 dark:bg-slate-900 light:bg-white rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/60 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                {/* Official Email Symbol */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1 text-xs"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider">
                Direct Email Inbox
              </div>
              <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mt-1">
                Email
              </h3>
              <p className="text-xs text-slate-400 mt-0.5 font-mono truncate">
                {personal.email}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <a
                href={`mailto:${personal.email}`}
                className="font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                <span>Write Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] font-mono text-slate-400">
                {copiedEmail ? 'Copied to clipboard' : 'Click icon to copy'}
              </span>
            </div>
          </div>

        </div>

        {/* Status Pill */}
        <div className="mb-12 max-w-xl mx-auto p-3.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center justify-center gap-2.5 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
          <span>Available for full-time Data Analyst and Developer roles immediately.</span>
        </div>

        {/* Direct Message Form Card */}
        <div className="max-w-3xl mx-auto bg-slate-900/90 dark:bg-slate-900/90 light:bg-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Prepares a verified message addressed to <span className="text-blue-400 font-mono">{personal.email}</span>.
              </p>
            </div>
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Honeypot anti-spam field */}
            <input
              type="text"
              name="website"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Name & Email Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300">
                  Your Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.name ? 'border-rose-500' : 'border-slate-800'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-slate-300">
                  Your Email <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="e.g. recruiter@company.com"
                  className={`w-full bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.email ? 'border-rose-500' : 'border-slate-800'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Subject Field */}
            <div className="space-y-1">
              <label className="text-xs font-mono text-slate-300">
                Subject <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => {
                  setFormData({ ...formData, subject: e.target.value });
                  if (errors.subject) setErrors({ ...errors, subject: '' });
                }}
                placeholder="e.g. Job Opportunity: Data Analyst at Company"
                className={`w-full bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                  errors.subject ? 'border-rose-500' : 'border-slate-800'
                }`}
              />
              {errors.subject && (
                <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.subject}</span>
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-xs font-mono text-slate-300">
                  Message <span className="text-rose-400">*</span>
                </label>
                <span className="text-[10px] text-slate-500 font-mono">
                  {formData.message.length}/1000 characters
                </span>
              </div>
              <textarea
                rows={4}
                value={formData.message}
                maxLength={1000}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: '' });
                }}
                placeholder="Hello Likhitha, we reviewed your projects and would love to discuss an interview opportunity..."
                className={`w-full bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 border rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
                  errors.message ? 'border-rose-500' : 'border-slate-800'
                }`}
              />
              {errors.message && (
                <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.message}</span>
                </p>
              )}
            </div>

            {/* Submit Action Button */}
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              <Send className="w-4 h-4" />
              <span>Send Message via Email Client</span>
            </button>

            {/* Status Notice */}
            {submissionStatus === 'client_opened' && (
              <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 font-mono flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Your mail client has been opened with your message ready to send to likhithajnvl@gmail.com!</span>
              </div>
            )}

            <div className="pt-2 text-[11px] text-slate-400 font-mono text-center">
              Directly launches your native email app pre-addressed to Likhitha Tummala.
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
