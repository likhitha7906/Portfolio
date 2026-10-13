/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CertificationsEducation } from './components/CertificationsEducation';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { EditGuideModal } from './components/EditGuideModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isEditGuideOpen, setIsEditGuideOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-600/30 selection:text-blue-200 transition-colors duration-300">
        
        {/* Navigation Bar */}
        <Navbar 
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenEditGuide={() => setIsEditGuideOpen(true)}
        />

        {/* Main Sections */}
        <main>
          {/* Hero Section */}
          <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

          {/* About Section */}
          <About />

          {/* Skills Section */}
          <Skills />

          {/* Featured Projects Gallery */}
          <Projects />

          {/* Certifications and Education */}
          <CertificationsEducation />

          {/* Dedicated Resume Section */}
          <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer onOpenEditGuide={() => setIsEditGuideOpen(true)} />

        {/* Interactive ATS Resume Modal */}
        <ResumeModal 
          isOpen={isResumeModalOpen} 
          onClose={() => setIsResumeModalOpen(false)} 
        />

        {/* Portfolio Customization Guide Modal */}
        <EditGuideModal 
          isOpen={isEditGuideOpen} 
          onClose={() => setIsEditGuideOpen(false)} 
        />

      </div>
    </ThemeProvider>
  );
}
