export const personalInfo = {
  name: "Alok T V",
  role: "Full Stack & Backend Engineer",
  location: "Bengaluru, India",
  email: "aloktvalok@gmail.com",
  phone: "+91 6362117360",
  resumeUrl: "/resume.pdf",
  github: "https://github.com/ALOKTV",
  linkedin: "https://linkedin.com/in/alok-tv-2301ba237",
  bio: "Full Stack Engineer with 3 years of experience building scalable backend systems, REST APIs, and databases. Proficient in Node.js, TypeScript, Supabase (PostgreSQL), Firebase, and React.js. Hands-on experience with CI/CD pipelines, database migrations, A/B testing, Row Level Security enforcement, and delivering clean, production-grade code in collaborative Agile teams.",
  shortBio: "Full Stack & Backend Engineer specializing in Node.js, TypeScript, Supabase, Firebase, and React.js. I build scalable backend systems and clean, production-grade web applications.",
  experience: "3+ Years",
  projectsBuilt: 8,
  technologies: 15,
  contributions: "300+",
};

export const typingTexts = [
  "Backend Engineer",
  "Node.js Developer",
  "Full Stack Engineer",
  "TypeScript Developer",
  "API Architect",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "REST APIs", level: 95 },
      { name: "Supabase", level: 85 },
      { name: "Firebase", level: 82 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 88 },
      { name: "Redux", level: 80 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "HTML5/CSS3", level: 85 },
      { name: "Vite", level: 80 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    category: "Languages",
    items: [
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Python", level: 75 },
      { name: "Java", level: 72 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "GitHub Actions", level: 82 },
      { name: "Git", level: 90 },
      { name: "Postman", level: 88 },
      { name: "Jira", level: 80 },
      { name: "Android Studio", level: 70 },
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      { name: "BigQuery", level: 72 },
      { name: "GrowthBook", level: 75 },
      { name: "Periscope", level: 70 },
      { name: "A/B Testing", level: 78 },
      { name: "RLS Policies", level: 85 },
    ],
  },
];

export const experiences = [
  {
    company: "Chimple Learning (CUBA App)",
    role: "Software Engineer",
    duration: "2022 – Present",
    location: "Bengaluru",
    description: "Building and maintaining backend systems for an interactive educational platform serving children. Working across the full stack with a focus on database architecture, API development, and DevOps.",
    responsibilities: [
      "Led Firebase → Supabase (PostgreSQL) database migration, improving backend scalability and enabling complex relational data querying",
      "Built WhatsApp chatbot flows using WhatsApp Business APIs for automated user messaging, notifications, and engagement",
      "Migrated build system to Vite, significantly reducing build times and improving developer workflow efficiency",
      "Ran GrowthBook A/B experiments to analyze feature performance and drive data-informed product decisions",
      "Implemented Redux state management across the codebase, ensuring predictable application state and improving maintainability",
      "Maintained GitHub Actions CI/CD pipelines; collaborated in Agile sprints via Jira and GitHub PRs for timely feature delivery",
      "Enforced Row Level Security (RLS) policies and led code reviews to uphold clean code, naming conventions, and documentation standards",
      "Designed reusable, modular backend architecture patterns that reduced developer onboarding time and improved long-term scalability",
      "Generated data insights using BigQuery and Periscope to support product decisions and monitor application performance metrics",
    ],
    technologies: ["Node.js", "TypeScript", "Supabase", "PostgreSQL", "Firebase", "React.js", "Redux", "Vite", "GitHub Actions", "BigQuery", "GrowthBook"],
  },
];

export const projects = [
  {
    id: "crysta",
    title: "Crysta — Personal AI Agent",
    description: "A voice-enabled personal agent that answers questions and automates tasks such as setting alarms, playing music, and web search.",
    longDescription: "A voice-enabled personal AI agent built with Java and REST APIs. Crysta integrates AI APIs for natural language understanding to answer questions and automate everyday tasks like setting alarms, playing music, and performing web searches. Secure API credential management using environment-based .env configuration.",
    image: "/projects/crysta.jpg",
    tags: ["Java", "REST APIs", "AI"],
    features: [
      "Voice-enabled interaction for hands-free task automation",
      "Natural language understanding via integrated AI APIs",
      "Task automation — alarms, music playback, web search",
      "Secure credential management with .env configuration",
    ],
    challenges: "Integrating multiple AI APIs for reliable natural language understanding",
    solutions: "Architected a modular API integration layer with fallback mechanisms and secure credential handling",
    performance: "Sub-second response time for common queries",
    github: "https://github.com/ALOKTV",
    live: "#",
    techStack: ["Java", "REST APIs", "AI APIs", "Environment-based Config"],
  },
  {
    id: "stain-detection",
    title: "Automatic Textile Stain Detection",
    description: "A YOLOv5-based computer vision model for automated fabric defect and stain detection in textile manufacturing pipelines.",
    longDescription: "Developed a YOLOv5-based computer vision model for automated fabric defect and stain detection in textile manufacturing pipelines. Built an end-to-end ML pipeline covering data preprocessing, model training, and inference to flag defects with high accuracy.",
    image: "/projects/stain-detection.jpg",
    tags: ["Python", "Computer Vision", "AI"],
    features: [
      "Automated defect and stain detection in fabric",
      "End-to-end ML pipeline from preprocessing to inference",
      "High-accuracy defect flagging for manufacturing quality control",
      "YOLOv5-based object detection architecture",
    ],
    challenges: "Achieving high detection accuracy on subtle fabric defects",
    solutions: "Fine-tuned YOLOv5 with domain-specific training data and extensive augmentation",
    performance: "High accuracy in detecting fabric defects in manufacturing pipeline",
    github: "https://github.com/ALOKTV",
    live: "#",
    techStack: ["Python", "YOLOv5", "Computer Vision", "PyTorch"],
  },
  {
    id: "job-dashboard",
    title: "Job Search Dashboard",
    description: "Aggregated job listings from multiple platforms with filters for skills, experience, and location using a Node.js backend.",
    longDescription: "A job search dashboard that aggregates listings from multiple job platforms into a single interface. Features smart filtering by skills, experience level, and location. Built with a modular, reusable backend architecture to allow seamless integration of additional job platforms.",
    image: "/projects/job-dashboard.jpg",
    tags: ["JavaScript", "Node.js", "REST APIs"],
    features: [
      "Multi-platform job listing aggregation",
      "Advanced filtering by skills, experience, and location",
      "Modular backend architecture for platform extensibility",
      "Clean, responsive dashboard interface",
    ],
    challenges: "Handling diverse job portal APIs with different data formats",
    solutions: "Built a normalized data layer with adapters for each platform, enabling seamless integration",
    performance: "Aggregates listings from 3+ platforms with sub-second query response",
    github: "https://github.com/ALOKTV",
    live: "#",
    techStack: ["JavaScript", "Node.js", "REST APIs", "HTML/CSS"],
  },
];

export const techStack = [
  { name: "Node.js", category: "Backend" },
  { name: "TypeScript", category: "Language" },
  { name: "Supabase", category: "Database" },
  { name: "Firebase", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "React.js", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "JavaScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "SQL", category: "Database" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Git", category: "DevOps" },
  { name: "Postman", category: "Tools" },
  { name: "Jira", category: "Tools" },
  { name: "BigQuery", category: "Data" },
  { name: "GrowthBook", category: "Data" },
  { name: "Periscope", category: "Data" },
  { name: "Android Studio", category: "Tools" },
  { name: "CSS3", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
];

export const openSourceRepos = [
  { name: "crysta-ai-agent", stars: 12, forks: 3, language: "Java", description: "Voice-enabled personal AI agent for task automation" },
  { name: "stain-detection-ml", stars: 18, forks: 5, language: "Python", description: "YOLOv5-based textile defect detection" },
  { name: "job-search-dashboard", stars: 8, forks: 2, language: "JavaScript", description: "Multi-platform job listing aggregator" },
  { name: "supabase-migration-tools", stars: 22, forks: 7, language: "TypeScript", description: "Utilities for Firebase to Supabase migration" },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "S R Nagappa Shetty Memorial National College, Shivamogga",
    year: "2022",
  },
];

export const certifications = [
  { name: "Row Level Security — Supabase", issuer: "Supabase Documentation & Practice", date: "2023" },
  { name: "A/B Testing with GrowthBook", issuer: "GrowthBook", date: "2023" },
  { name: "CI/CD with GitHub Actions", issuer: "GitHub", date: "2023" },
];

export const testimonials = [
  {
    name: "Team Lead",
    role: "Engineering Lead",
    company: "Chimple Learning",
    content: "Alok has been instrumental in our Firebase to Supabase migration. His deep understanding of database architecture and RLS policies made the transition seamless. He consistently delivers clean, production-grade code.",
  },
  {
    name: "Product Manager",
    role: "Product Manager",
    company: "Chimple Learning",
    content: "Working with Alok on A/B experiments and feature development has been great. His data-driven approach and attention to detail ensure we make informed product decisions.",
  },
  {
    name: "Peer Engineer",
    role: "Software Engineer",
    company: "Chimple Learning",
    content: "Alok's code reviews are thorough and constructive. He has a strong sense of clean architecture and always pushes for better patterns. A great team player.",
  },
];

export const blogPosts = [
  {
    title: "Migrating from Firebase to Supabase: A Practical Guide",
    excerpt: "Lessons learned from migrating a production database from Firebase to Supabase (PostgreSQL), including RLS policies and data modeling.",
    date: "2024-03-15",
    category: "Backend",
    readTime: "10 min",
  },
  {
    title: "Building WhatsApp Chatbots with Business APIs",
    excerpt: "How I built automated WhatsApp chatbot flows for user messaging, notifications, and engagement using the WhatsApp Business API.",
    date: "2024-02-20",
    category: "Backend",
    readTime: "8 min",
  },
  {
    title: "A/B Testing in Practice with GrowthBook",
    excerpt: "Running data-informed A/B experiments to drive product decisions. A practical guide to integrating GrowthBook into your workflow.",
    date: "2024-01-10",
    category: "DevOps",
    readTime: "6 min",
  },
];
