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
  featured?: boolean;
  oneLiner: string;
  description: string;
  tech: string[];
  links?: {
    github?: string;
    demo?: string;
    paper?: string; // pdf link later (for research) if needed
  };
};

export const projects: Project[] = [
  {
    slug: "commvault-sync",
    title: "Commvault-Sync",
    category: "Systems",
    status: "Production",
    featured: true,
    oneLiner: "Secure update synchronization system for ML/YARA packages at scale.",
    description:
      "Built a Flask-based REST API and local package store with SHA-256 validation to securely sync ML/YARA updates. Designed SQL tables and database logic to track sync status, hashes, and timestamps, and automated end-to-end deployment to reduce rollout delays and manual effort.",
    tech: ["Python", "Flask", "REST API", "SQL", "SHA-256"],
    links: {
      // github: "",
    },
  },
  {
    slug: "sprinklr-ai",
    title: "Sprinklr AI",
    category: "Systems",
    status: "Working",
    featured: true,
    oneLiner: "Video review transcription + summarization pipeline for customer insights.",
    description:
      "Used OpenAI Whisper to transcribe video reviews and generated summaries to help extract structured customer insights from video and text sources.",
    tech: ["Python", "Whisper", "NLP", "Summarization"],
    links: {
      // github: "",
    },
  },
  {
    slug: "harmonizer",
    title: "Harmonizer",
    category: "Music",
    status: "Working",
    featured: true,
    oneLiner: "Generates 3-part harmony from a melody.",
    description:
      "A melody-to-harmony generator that creates a three-part harmony from a given melody. Built to explore algorithmic harmony generation using music theory constraints and practical heuristics.",
    tech: ["Python", "Music Theory", "MIDI / Music tooling"],
    links: {
      // github: "",
      // demo: "",
    },
  },
  {
    slug: "commbot",
    title: "CommBot",
    category: "Systems",
    status: "Archived",
    oneLiner: "Documentation chatbot for navigating Commvault docs (early project).",
    description:
      "An earlier chatbot project built to help employees and customers navigate internal documentation more quickly. Kept as an archived snapshot of early NLP/IR experimentation.",
    tech: ["Python", "NLP", "Search / Retrieval"],
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
  },
  {
    slug: "help-autism-india",
    title: "Help Autism India",
    category: "Philanthropy",
    status: "Ongoing",
    oneLiner: "Non-profit initiative to support autistic children in India.",
    description:
      "A personal philanthropy initiative focused on supporting autistic children in India through awareness and practical help.",
    tech: ["Community", "Operations", "Advocacy"],
  },
];
