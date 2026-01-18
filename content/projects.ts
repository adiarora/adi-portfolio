export type ProjectCategory =
  | "Systems"
  | "Music"
  | "Fitness"
  | "Finance"
  | "Philanthropy";

export type ProjectStatus = "Production" | "Working" | "Prototype" | "Ongoing" | "Archived";

export type Project = {
  slug: string; // used for URLs later (e.g., /projects/commvault-sync)
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  oneLiner: string;
  description: string;
  tech: string[];
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
    video?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "commvault-sync",
    title: "Commvault-Sync",
    category: "Systems",
    status: "Production",
    oneLiner: "Secure update synchronization system for ML/YARA packages at scale.",
    description:
      "Built a Flask-based REST API and local package store with SHA-256 validation to securely sync ML/YARA updates. Designed SQL tables and database logic to track sync status, hashes, and timestamps, and automated end-to-end deployment to reduce rollout delays and manual effort.",
    tech: ["Python", "Flask", "REST API", "SQL", "SHA-256"],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    slug: "sprinklr-ai",
    title: "Sprinklr AI",
    category: "Systems",
    status: "Production",
    oneLiner: "Video review transcription + summarization pipeline for customer insights.",
    description:
      "Used OpenAI Whisper to transcribe video reviews and generated summaries to help extract structured customer insights from video and text sources.",
    tech: ["Python", "Whisper", "NLP", "Summarization"],
    links: {
      github: "https://github.com/adiarora/sprinklrAI",
      demo: "",
    },
  },
  {
    slug: "harmonizer",
    title: "Harmonizer",
    category: "Music",
    status: "Working",
    oneLiner: "Generates 3-part harmony from a melody.",
    description:
      "A melody-to-harmony generator that creates a three-part harmony from a given melody. Built to explore algorithmic harmony generation using music theory constraints and practical heuristics.",
    tech: ["Python", "Music Theory", "MIDI / Music tooling"],
    links: {
      github: "https://github.com/adiarora/Harmonizer",
      demo: "",
    },
  },
  {
    slug: "commbot",
    title: "CommBot",
    category: "Systems",
    status: "Production",
    oneLiner: "Documentation chatbot for navigating Commvault docs.",
    description:
      "An earlier chatbot project built to help employees and customers navigate internal documentation more quickly. Kept as an archived snapshot of early NLP/IR experimentation.",
    tech: ["Python", "NLP", "Search / Retrieval"],
    links: {
      github: "https://github.com/adiarora/commbot",
      video: "/videos/commbot-demo.mp4",
    },
  },
  {
    slug: "fitness-ai",
    title: "Fitness-AI",
    category: "Fitness",
    status: "Ongoing",
    oneLiner: "Food photo/text → estimated calories, macros, and micronutrients (MVP in progress).",
    description:
      "Prototype app exploring multimodal nutrition logging: users provide a meal description or photo and receive estimated calories/macros and later micronutrients. Planned expansion includes exercise tracking and personalization.",
    tech: ["Python", "Computer Vision", "NLP", "APIs"],
    links: {
      github: "",
      demo: "",
    },
  },
  {
    slug: "stock-prediction",
    title: "Stock Prediction",
    category: "Finance",
    status: "Prototype",
    oneLiner: "Baseline S&P prediction model (v1) with plans to upgrade to a real quant pipeline.",
    description:
      "A simple baseline model using tree-based methods to model the S&P. This is a starting point and will be upgraded with stronger feature engineering, backtesting, and risk-aware evaluation.",
    tech: ["Python", "Pandas", "Scikit-learn", "Time Series"],
    links: {
      github: "https://github.com/adiarora/stockPredictor",
      demo: "",
    },
  },
  {
    slug: "help-autism-india",
    title: "Help Autism India",
    category: "Philanthropy",
    status: "Ongoing",
    oneLiner: "A non-profit initiative supporting autistic children in India.",
    description:
      "Help Autism India is a non-profit initiative I founded to support autistic children in India through awareness, community engagement, and direct assistance. The focus is on improving access to resources and building understanding around autism.",
    tech: ["Non-Profit", "Community", "Advocacy"],
    links: {
      demo: "https://helpautismindia.com",
    },
  },
];
