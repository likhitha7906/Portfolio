# Likhitha Tummala — Developer & Data Analyst Portfolio

[![React](https://img.shields.io/badge/React-19-blue.svg?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)](LICENSE)

A modern, responsive, and performance-optimized portfolio website built for **Likhitha Tummala**, showcasing projects and competencies in **Data Analytics, Python Development, and Generative AI**.

---

## 🌟 Live Demo

- **Live URL**: [https://ais-pre-xmo46tu3i3ar5mmivcnqbp-468445919357.asia-east1.run.app](https://ais-pre-xmo46tu3i3ar5mmivcnqbp-468445919357.asia-east1.run.app)
- **LinkedIn**: [linkedin.com/in/likhitha-tummala-366440282](https://www.linkedin.com/in/likhitha-tummala-366440282/)
- **GitHub**: [github.com/likhitha7906](https://github.com/likhitha7906)

---

## 🚀 Key Features

- **Dark & Light Mode Toggle**: Smooth theme switching with persistent local storage.
- **Categorized Technical Skills**: Filterable skills catalog with contextual usage notes and zero arbitrary percentage bars.
- **Featured Project Gallery**: Deep dive cards detailing problem statements, architectures, and tech stacks for:
  - Multi-City Restaurant Intelligence & Food Price Analysis
  - IntelliQuery AI — Enterprise Knowledge Assistant
  - RAG with SQL Router
  - Blinkit Grocery Sales Analysis
  - Taxi Fleet Demand & Revenue Optimization
  - Flight Booking Database Analysis
- **Education & Verifiable Certifications**: Showcases B.Tech in CSE (VIT-AP University, 2026), Oracle Certified GenAI Professional, Innomatics Python, Deloitte Job Simulation, and Code Wave 2nd Place Honor.
- **ATS Resume Viewer & Downloader**: Interactive resume modal with `Print / Save as PDF` support and direct `/public/resume.pdf` download.
- **Direct Contact System**: Validated contact form with anti-bot honeypot and official brand symbol cards for LinkedIn, GitHub, and Email.
- **Mobile-First & Accessible**: Fully responsive on mobile, tablet, and desktop with accessible contrast and semantic HTML.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations & Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📂 Project Structure

```text
├── public/
│   └── resume.pdf                 # Downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── About.tsx              # Academic story & core methodology
│   │   ├── CertificationsEducation.tsx # Degree & certified credentials
│   │   ├── Contact.tsx            # Validated message form & social cards
│   │   ├── Footer.tsx             # Copyright and quick back-to-top
│   │   ├── Hero.tsx               # Headline, bio, CTAs, and pillar badges
│   │   ├── Navbar.tsx             # Sticky glass nav, active scroll, theme toggle
│   │   ├── Projects.tsx           # Filterable projects grid & deep-dive drawer
│   │   ├── ResumeModal.tsx        # Printable ATS resume preview
│   │   ├── ResumeSection.tsx      # In-page resume summary & download card
│   │   └── Skills.tsx             # Categorized skills with search filter
│   ├── context/
│   │   └── ThemeContext.tsx       # Dark / Light theme provider
│   ├── data/
│   │   └── portfolioData.ts       # Central configuration for all content & links
│   ├── App.tsx                    # Main layout assembler
│   ├── index.css                  # Global styles, Tailwind imports, typography
│   └── main.tsx                   # React root entry point
├── index.html                     # HTML head, SEO tags, structured JSON-LD
├── package.json
└── tsconfig.json
```

---

## 💻 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/likhitha7906/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized production output will be generated in the `dist/` directory.

---

## ⚙️ Customization

All personal details, project descriptions, skills, and links are centralized in:
```text
src/data/portfolioData.ts
```

- **Update Profile & Links**: Edit `personal` in `portfolioData.ts`.
- **Update Resume PDF**: Replace `public/resume.pdf` with your updated PDF file.
- **Add New Projects**: Add a new entry to the `projects` array in `portfolioData.ts`.

---

## 📬 Contact

- **Name**: Likhitha Tummala
- **Email**: [likhithajnvl@gmail.com](mailto:likhithajnvl@gmail.com)
- **LinkedIn**: [linkedin.com/in/likhitha-tummala-366440282](https://www.linkedin.com/in/likhitha-tummala-366440282/)
- **GitHub**: [github.com/likhitha7906](https://github.com/likhitha7906)
