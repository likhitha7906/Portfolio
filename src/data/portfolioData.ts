/**
 * LIKHITHA TUMMALA - PORTFOLIO CONFIGURATION
 * 
 * Centralized data source for the portfolio website.
 * Update your information, links, projects, and certifications right here.
 */

export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  headline: string;
  subheadline: string;
  bio: string;
  aboutStory: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  educationDegree: string;
  educationField: string;
  university: string;
  graduationYear: string;
  careerStage: string;
  availability: string;
  resumePdfPath: string;
}

export interface SkillItem {
  name: string;
  levelTag?: string;
  context: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  status: 'In Progress' | 'Completed';
  category: 'Data Analytics' | 'Generative AI & RAG' | 'SQL & Databases';
  description: string;
  problemStatement: string;
  technologies: string[];
  features: string[];
  analyticsHighlight?: {
    metric: string;
    label: string;
  }[];
  githubUrl: string;
  demoUrl?: string;
  hasLiveDemo: boolean;
  architectureType: 'analytics' | 'rag' | 'database' | 'scraping';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  credentialId?: string;
  description: string;
  skillsGained: string[];
  type: 'certification' | 'award';
}

export const PORTFOLIO_DATA: {
  personal: PersonalInfo;
  skillCategories: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
} = {
  personal: {
    name: "Likhitha",
    fullName: "Likhitha Tummala",
    title: "Aspiring Data Analyst | Python Developer | GenAI Enthusiast",
    headline: "Hi, I’m Likhitha.",
    subheadline: "Turning Data into Insights. Building Intelligent Solutions.",
    bio: "I’m a Computer Science Engineering graduate passionate about data analytics, Python development, and Generative AI. I enjoy transforming raw data into meaningful insights, building interactive dashboards, and developing AI-powered applications that solve real-world problems.",
    aboutStory: `I am an entry-level Data Analyst and Software Developer with a Bachelor of Technology in Computer Science and Engineering from VIT-AP (Graduation: 2026). 

My technical journey is grounded in extracting actionable intelligence from structured and unstructured data. From writing complex SQL queries using window functions and joins to building end-to-end data pipelines with Pandas, NumPy, and Beautiful Soup, I bridge the gap between technical data extraction and executive business decision-making.

In addition to core analytics and reporting, I am fascinated by Generative AI and Retrieval-Augmented Generation (RAG). I have developed intelligent query systems that intelligently route natural-language questions between semantic document vector search and relational SQL databases, reducing hallucination rates while keeping data grounded and auditable.`,
    email: "likhithajnvl@gmail.com",
    linkedin: "https://www.linkedin.com/in/likhitha-tummala-366440282/",
    github: "https://github.com/likhitha7906",
    location: "India",
    educationDegree: "Bachelor of Technology (B.Tech)",
    educationField: "Computer Science and Engineering",
    university: "VIT-AP University",
    graduationYear: "2026",
    careerStage: "Fresher / Entry-Level Candidate",
    availability: "Immediate / Actively Interviewing",
    resumePdfPath: "/resume.pdf",
  },

  skillCategories: [
    {
      id: "languages",
      title: "Programming Languages",
      iconName: "Code2",
      description: "Core coding fundamentals, algorithmic problem solving, and backend logic.",
      skills: [
        { name: "Python", context: "Data manipulation, scripts, web scraping, and AI systems" },
        { name: "SQL", context: "Complex joins, aggregations, window functions, and indexing" },
        { name: "Java", context: "Object-oriented programming, data structures, and backend services" },
        { name: "C", context: "Algorithmic thinking, memory concepts, and foundational programming" },
      ],
    },
    {
      id: "analytics",
      title: "Data Analytics & EDA",
      iconName: "BarChart3",
      description: "Extracting patterns, hypothesis testing, and transforming messy raw datasets.",
      skills: [
        { name: "Exploratory Data Analysis (EDA)", context: "Uncovering distributions, outliers, and correlations" },
        { name: "Data Cleaning & Preprocessing", context: "Handling missing values, deduplication, and feature normalization" },
        { name: "Statistical Analysis", context: "Descriptive statistics, variance, distributions, and hypothesis tests" },
        { name: "Data Visualization", context: "Effective chart selection, color hierarchy, and visual storytelling" },
        { name: "Business Data Analysis", context: "Translating stakeholder requirements into analytical questions" },
        { name: "KPI Reporting", context: "Designing tracking metrics for executive and operational reviews" },
      ],
    },
    {
      id: "python-libs",
      title: "Python Data Science Stack",
      iconName: "Binary",
      description: "Battle-tested libraries for numerical computing, wrangling, and modeling.",
      skills: [
        { name: "Pandas", context: "High-performance DataFrames, multi-indexing, and reshaping" },
        { name: "NumPy", context: "Vectorized array calculations, matrix math, and broadcasting" },
        { name: "Matplotlib", context: "Detailed publication-ready static charts and subplots" },
        { name: "Seaborn", context: "Statistical plots, heatmaps, violin charts, and regression lines" },
        { name: "Scikit-learn", context: "Classification, clustering, feature preprocessing, and evaluation" },
      ],
    },
    {
      id: "bi",
      title: "Business Intelligence",
      iconName: "LayoutDashboard",
      description: "Interactive visual dashboards that empower stakeholders to make informed decisions.",
      skills: [
        { name: "Power BI", context: "DAX calculations, relational data modeling, and custom visual cards" },
        { name: "Tableau", context: "Interactive filters, calculated fields, and executive dashboards" },
        { name: "Microsoft Excel", context: "Pivot tables, VLOOKUP/XLOOKUP, and structured data modeling" },
      ],
    },
    {
      id: "databases",
      title: "Databases & Querying",
      iconName: "Database",
      description: "Relational data modeling, schema design, and transactional querying.",
      skills: [
        { name: "MySQL", context: "Relational schemas, constraints, group-by analytics, and views" },
        { name: "SQLite", context: "Lightweight embedded databases for RAG memory and local services" },
      ],
    },
    {
      id: "genai",
      title: "Generative AI & LLMs",
      iconName: "Sparkles",
      description: "Building production-aware AI pipelines with grounded retrieval and routing.",
      skills: [
        { name: "Large Language Models (LLMs)", context: "Prompt engineering, token economics, and structured outputs" },
        { name: "Retrieval-Augmented Generation (RAG)", context: "Semantic chunking, embedding models, and contextual retrieval" },
        { name: "LlamaIndex", context: "Document indexing, metadata filtering, and query engines" },
        { name: "LangChain", context: "Chains, retrieval agents, and pipeline composition" },
        { name: "OpenRouter & Qwen", context: "Model inference routing and open-weight model integration" },
        { name: "Milvus & FAISS", context: "Dense vector indexing, cosine similarity, and low-latency search" },
        { name: "SQL-based Question Answering", context: "Natural-language-to-SQL generation with schema validation" },
      ],
    },
    {
      id: "tools",
      title: "Development Tools & APIs",
      iconName: "Wrench",
      description: "Everyday workflow tools, version control, and development environments.",
      skills: [
        { name: "Git & GitHub", context: "Branching, version control, PRs, and collaborative repositories" },
        { name: "VS Code", context: "Primary IDE with linting, extensions, and Python debugging" },
        { name: "Jupyter Notebook & Anaconda", context: "Iterative exploratory research and reproducible data workflows" },
        { name: "Streamlit", context: "Rapid prototyping of interactive web apps for AI & data" },
        { name: "FastAPI", context: "Asynchronous REST endpoints for machine learning and RAG services" },
        { name: "REST APIs & Web Scraping", context: "Requests, BeautifulSoup, and structured API consumption" },
      ],
    },
  ],

  projects: [
    {
      id: "restaurant-intelligence",
      title: "Multi-City Restaurant Intelligence & Food Price Analysis",
      tagline: "End-to-end data analytics and scraping pipeline tracking 1000+ restaurant listings across Indian metros.",
      status: "In Progress",
      category: "Data Analytics",
      description: "An end-to-end data analytics project designed to analyze restaurant ratings, cuisines, pricing, locations, and dining offers across multiple cities.",
      problemStatement: "Food businesses and foodies struggle to compare pricing transparency, promotional offers, and dining value across urban localities due to fragmented menu pricing and localized discounts.",
      technologies: ["Python", "Pandas", "NumPy", "BeautifulSoup", "Requests", "SQL", "Power BI"],
      features: [
        "Collect and consolidate restaurant-level data from multiple cities using automated scraping pipelines.",
        "Clean and preprocess restaurant information, dealing with non-standard price formats and missing cuisines.",
        "Compare restaurant ratings, cuisines, and price-for-two values across metropolitan hubs.",
        "Analyze booking and walk-in offers where promotional data is available.",
        "Identify city-wise and locality-wise pricing patterns and rating distribution clusters.",
        "Build interactive dashboards for business insights with 5+ key executive KPIs.",
      ],
      analyticsHighlight: [
        { metric: "1,000+", label: "Restaurant Listings Scraped" },
        { metric: "5+", label: "Executive KPIs Modeled" },
        { metric: "Multi-City", label: "Comparative Geographical Analysis" },
      ],
      githubUrl: "https://github.com/likhitha7906",
      hasLiveDemo: false,
      architectureType: "scraping",
    },
    {
      id: "intelliquery-ai",
      title: "IntelliQuery AI — Enterprise Knowledge Assistant",
      tagline: "Hybrid RAG and SQL agent retrieving answers across 2,500+ unstructured docs and relational databases.",
      status: "Completed",
      category: "Generative AI & RAG",
      description: "An AI-powered knowledge assistant that enables users to retrieve relevant information from documents and structured databases using natural-language questions.",
      problemStatement: "Knowledge workers waste hours navigating siloed PDFs, manuals, and SQL databases without a unified conversational interface.",
      technologies: ["Python", "Streamlit", "LlamaIndex", "Qwen", "OpenRouter", "Milvus", "SQLite", "SQLAlchemy", "Docling"],
      features: [
        "Document-based question answering using high-accuracy RAG with semantic chunking.",
        "Natural-language queries against structured SQL data with query safety guardrails.",
        "Intelligent routing between document retrieval and relational SQL engines.",
        "Interactive Streamlit interface for asking questions and exploring retrieved sources.",
        "Query history tracking and multi-document ingestion pipeline.",
      ],
      analyticsHighlight: [
        { metric: "2,500+", label: "Documents Indexed" },
        { metric: "40%", label: "Reduction in Hallucination" },
        { metric: "<2s", label: "Query Routing & Retrieval Latency" },
      ],
      githubUrl: "https://github.com/likhitha7906",
      hasLiveDemo: true,
      demoUrl: "https://github.com/likhitha7906",
      architectureType: "rag",
    },
    {
      id: "rag-sql-router",
      title: "RAG with SQL Router",
      tagline: "Dual-engine AI pipeline that dynamically decides between vector search and SQL synthesis.",
      status: "Completed",
      category: "Generative AI & RAG",
      description: "An intelligent question-answering application that routes queries to a vector database for document retrieval or to a SQL engine for structured-data analysis.",
      problemStatement: "Traditional RAG cannot answer quantitative queries (e.g., 'What is the sum of Q3 revenues?'), while Text-to-SQL fails on qualitative policy questions.",
      technologies: ["Python", "LlamaIndex", "Qwen", "Milvus", "SQLite", "Streamlit", "Cleanlab Codex"],
      features: [
        "Automated intent classification and intelligent routing to appropriate query engine.",
        "Dense vector retrieval for semantic policy and unstructured document QA.",
        "LLM-generated SQL queries dynamically executed against SQLite tables.",
        "Response validation integration using Cleanlab Codex for verification.",
        "SQL result visualization with table previews and query execution histories.",
      ],
      analyticsHighlight: [
        { metric: "Dual-Engine", label: "Vector Search + Text-to-SQL" },
        { metric: "100%", label: "Local SQLite Integration" },
        { metric: "Verified", label: "Cleanlab Codex Guardrails" },
      ],
      githubUrl: "https://github.com/likhitha7906",
      hasLiveDemo: false,
      architectureType: "rag",
    },
    {
      id: "blinkit-sales-analysis",
      title: "Blinkit Grocery Sales Analysis",
      tagline: "Comprehensive SQL and KPI analysis of 8,500+ records assessing outlet tiers, fat content, and item categories.",
      status: "Completed",
      category: "SQL & Databases",
      description: "An end-to-end commercial SQL analytics project examining grocery transactions to optimize inventory turnover, pricing tiers, and outlet sales performance.",
      problemStatement: "Quick-commerce grocery platforms need to identify top-performing product categories, understand regional customer preferences, and optimize sales across outlet tiers.",
      technologies: ["MySQL", "SQL Window Functions", "KPI Analysis", "Data Modeling", "Excel"],
      features: [
        "Analysed 8,500+ grocery sales records using MySQL to evaluate revenue and outlet-level trends.",
        "Executed SQL queries with JOINs, GROUP BY, HAVING, and window functions (RANK, ROW_NUMBER, DENSE_RANK).",
        "Calculated 4 core business KPIs: Total Sales, Average Sales per Item, Number of Items Sold, and Average Rating.",
        "Performed comparative sales analysis examining customer fat content preferences (Low Fat vs Regular).",
        "Assessed outlet performance by location tier (Tier 1, Tier 2, Tier 3) and outlet size/establishment year.",
      ],
      analyticsHighlight: [
        { metric: "8,500+", label: "Grocery Records Analyzed" },
        { metric: "4 Core", label: "Business KPIs Evaluated" },
        { metric: "3 Tiers", label: "Geographical Outlet Segmentation" },
      ],
      githubUrl: "https://github.com/likhitha7906",
      hasLiveDemo: false,
      architectureType: "database",
    },
    {
      id: "taxi-fleet-optimization",
      title: "Taxi Fleet Demand & Revenue Optimization",
      tagline: "Exploratory data analytics project modeling demand surges, trip duration, and revenue drivers.",
      status: "Completed",
      category: "Data Analytics",
      description: "A data analytics project focused on understanding taxi demand patterns, revenue performance, and operational trends to support better fleet utilization.",
      problemStatement: "Ride-hailing operators face vehicle underutilization during off-peak hours and severe driver shortages during peak commute windows.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "Power BI"],
      features: [
        "Analyzed trip demand curves and temporal revenue trends across hourly, daily, and weekend splits.",
        "Identified peak-demand periods and correlated surge pricing impact on completion rates.",
        "Compared operational and revenue metrics between short trips and suburban routes.",
        "Created clear Seaborn visualizations and formulated strategic fleet repositioning recommendations.",
      ],
      analyticsHighlight: [
        { metric: "24/7", label: "Hourly Demand Curve Modeling" },
        { metric: "EDA", label: "Correlation & Outlier Treatment" },
        { metric: "Actionable", label: "Fleet Repositioning Insights" },
      ],
      githubUrl: "https://github.com/likhitha7906",
      hasLiveDemo: false,
      architectureType: "analytics",
    },
    {
      id: "flight-booking-analysis",
      title: "Flight Booking Database Analysis",
      tagline: "Relational database analysis uncovering airline booking behaviors, route loads, and pricing dynamics.",
      status: "Completed",
      category: "SQL & Databases",
      description: "A database analysis project designed to explore flight booking records and extract useful insights using SQL.",
      problemStatement: "Airlines need deep visibility into seat occupancy, lead booking times, cancellation rates, and customer fare class selections to optimize yield.",
      technologies: ["SQL", "MySQL", "Python", "Pandas", "Relational Modeling"],
      features: [
        "Structured multi-table schema querying passenger details, flights, airlines, and booking transactions.",
        "Explored booking trends and flight-related metrics using subqueries, aggregations, and window functions.",
        "Evaluated seasonal variations and advance booking windows.",
        "Presented findings through clear SQL summary views and tabular dashboards.",
      ],
      analyticsHighlight: [
        { metric: "Relational", label: "Multi-Table SQL Schema" },
        { metric: "Advanced", label: "Subqueries & Window Aggregations" },
        { metric: "Actionable", label: "Yield & Lead Time Insights" },
      ],
      githubUrl: "https://github.com/likhitha7906",
      hasLiveDemo: false,
      architectureType: "database",
    },
  ],

  certifications: [
    {
      id: "oracle-genai",
      title: "Oracle Certified Generative AI Professional",
      issuer: "Oracle",
      issueDate: "2026",
      type: "certification",
      description: "Comprehensive enterprise certification validating expertise in Large Language Models (LLMs), prompt engineering, fine-tuning, RAG pipelines, and vector database architectures.",
      skillsGained: ["LLM Architecture", "RAG Systems", "Vector Databases", "Prompt Engineering", "AI Safety"],
    },
    {
      id: "code-wave",
      title: "2nd Place Winner — Code Wave National Analytics Event",
      issuer: "NextGen Data Science Club",
      issueDate: "2024 - 2025",
      type: "award",
      description: "Secured 2nd place among 100+ national participants in an intensive competitive data analytics hackathon evaluating predictive modeling, EDA, and business presentation.",
      skillsGained: ["Competitive Analytics", "Rapid EDA", "KPI Synthesis", "Executive Presentation"],
    },
    {
      id: "python-innomatics",
      title: "Python Programming Certification",
      issuer: "Innomatics Research Labs",
      issueDate: "Verified",
      type: "certification",
      description: "Rigorous certification covering Core Python programming, advanced data structures, object-oriented concepts, and algorithmic efficiency.",
      skillsGained: ["Core Python", "Data Structures", "OOP", "Algorithm Design", "File I/O"],
    },
    {
      id: "deloitte-simulation",
      title: "Data Analyst Job Simulation",
      issuer: "Deloitte",
      issueDate: "Verified",
      type: "certification",
      description: "Hands-on corporate simulation tackling real-world enterprise data cleaning, analytical modeling, quality assurance, and executive reporting tasks.",
      skillsGained: ["Business Analytics", "Data Hygiene", "Executive Reporting", "Client Simulation"],
    },
    {
      id: "swayam-genai",
      title: "Generative AI Fundamentals — Learnathon",
      issuer: "SWAYAM",
      issueDate: "Verified",
      type: "certification",
      description: "Covered foundational mathematics and practical applications of LLMs, prompt engineering, diffusion models, and ethical AI deployment.",
      skillsGained: ["Diffusion Models", "Transformer Attention", "Prompting Techniques", "Generative Vision"],
    },
    {
      id: "java-fullstack",
      title: "Java Full Stack Development",
      issuer: "Technical Training Program",
      issueDate: "Verified",
      type: "certification",
      description: "End-to-end software development training encompassing Java OOP fundamentals, relational database integration, and modern frontend application development.",
      skillsGained: ["Java", "Relational Databases", "Backend Architecture", "Full Stack Development"],
    },
  ],
};
