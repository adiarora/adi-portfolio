export type ProjectDetails = {
  overview: string;
  problem: string;
  solution: string;
  howToUse?: string[];
  architecture: string[];
  securityReliability: string[];
  impact: string[];
  yourRole: string[];
  nextSteps?: string[];
};

export const projectDetailsBySlug: Record<string, ProjectDetails> = {
  "commvault-sync": {
    overview:
      "A secure synchronization system for distributing ML and YARA updates across a large client footprint with strong integrity guarantees and end-to-end automation.",
    problem:
      "Rolling out ML/YARA updates across many client environments was slow, operationally heavy, and prone to reliability issues without a robust way to validate artifacts and track deployment state.",
    solution:
      "I built a Flask-based REST API and a local package store to distribute updates, added SHA-256 validation for integrity, designed SQL tables to track sync status/hashes/timestamps, and automated the end-to-end deployment workflow.",
    architecture: [
      "Producer publishes versioned ML/YARA artifact to a local package store",
      "REST API serves metadata + artifacts to clients",
      "Clients pull updates on a schedule or trigger",
      "SHA-256 hash validation ensures artifact integrity",
      "Database tables track per-client sync status, hashes, and timestamps for observability and auditing",
    ],
    securityReliability: [
      "SHA-256 validation prevents corrupted or tampered artifacts from being applied",
      "Versioned artifacts and tracking tables provide traceability across deployments",
      "Status + timestamp logging makes failures visible and debuggable at scale",
    ],
    impact: [
      "Cut rollout delays by ~95% via real-time automation",
      "Improved reliability across 1000+ clients by ~90% through status tracking + validation",
      "Reduced manual effort by ~90% and support load by ~40% with an automated pipeline",
    ],
    yourRole: [
      "Designed and implemented the Flask REST API and package store flow",
      "Designed SQL schema and database logic to track sync state and integrity metadata",
      "Built automation glue to make updates end-to-end and reduce operational overhead",
    ],
    nextSteps: [
      "Add signed artifacts (public key verification) on top of hashing for stronger provenance",
      "Introduce staged rollouts/canarying and automatic rollback on failure thresholds",
      "Add dashboards/alerts for sync failure rates and client lag",
    ],
  },
  "harmonizer": {
    overview:
      "A music-generation system that produces three-part harmonic accompaniment from a single melody, combining music theory rules with algorithmic decision-making.",
    problem:
      "Creating musically convincing harmonies is non-trivial and typically requires strong theory intuition. I wanted to explore whether algorithmic rules grounded in music theory could generate usable harmonic parts from a melody alone.",
    solution:
      "I built a harmony-generation pipeline that analyzes melodic contour, key, and scale context, then applies music-theory-driven heuristics to generate three-part harmony that remains stylistically coherent.",
    architecture: [
      "Input melody is parsed and represented symbolically",
      "Key and scale context are inferred or provided",
      "Harmony notes are generated using interval constraints and voice-leading rules",
      "Three-part harmony is constructed while avoiding parallel motion and clashes",
      "Output is rendered as symbolic music data (e.g., MIDI or notation-friendly format)",
    ],
    securityReliability: [
      "Deterministic rule-based generation ensures predictable outputs",
      "Constraints prevent musically invalid intervals or out-of-key notes",
      "Voice separation avoids collisions between harmonic lines",
    ],
    impact: [
      "Produces musically usable harmonies for songwriting and arrangement",
      "Demonstrates the intersection of domain expertise (music theory) and algorithmic design",
      "Serves as a foundation for more advanced generative or ML-based harmony systems",
    ],
    yourRole: [
      "Designed harmony-generation logic grounded in music theory",
      "Implemented melody parsing and interval selection rules",
      "Tested outputs against real musical examples and iterated on heuristics",
    ],
    nextSteps: [
      "Introduce style conditioning (e.g., pop, jazz, classical)",
      "Explore ML-assisted harmony scoring or selection",
      "Export directly to notation software for arranger workflows",
    ],
  },
  "commbot": {
    overview:
      "CommBot is an NLP-powered documentation assistant built to help Commvault employees and customers navigate technical docs faster. Instead of manually searching through long knowledge bases, users can ask questions in natural language and get a targeted response plus recommended documentation links.",
    problem:
      "Technical documentation is often large, fragmented, and hard to search effectively. Engineers and support teams lose time jumping between pages, and customers often struggle to find the right article to resolve an issue quickly. I wanted to reduce the friction of finding the right docs and improve time-to-resolution with an assistant that understands user intent and can recommend relevant articles.",
    solution:
      "I built a lightweight chatbot that combines intent recognition with semantic similarity-based retrieval. The system classifies the user’s query into an intent category, then recommends the most relevant documentation articles based on similarity to curated documentation text. It also includes fallback responses for low-confidence predictions to keep behavior reliable.",
    howToUse: [
      "Ask a question in natural language (e.g., error messages, feature questions, or how-to requests)",
      "The system classifies intent and retrieves the most relevant documentation articles",
      "Recommended links and responses are returned immediately",
      "Designed for fast self-serve troubleshooting and internal support workflows"
    ],
    architecture: [
      "User asks a question via CLI (or a Flask UI layer)",
      "Intent classifier predicts an intent from a fixed set of categories (trained from intents.json)",
      "System computes semantic similarity between the query and documentation text",
      "Top matching documentation URLs are returned as recommendations",
      "Fallback responses are used when confidence is low"
    ],
    securityReliability: [
      "Fallback behavior for low-confidence intent predictions to avoid misleading answers",
      "Deterministic retrieval logic and controlled intent set keeps responses stable",
      "Separation between model training and runtime inference reduces operational risk"
    ],
    impact: [
      "Reduced time spent searching documentation by returning targeted links immediately",
      "Improved self-serve support experience by guiding users to the correct resource faster",
      "Created a foundation that could be extended into a full web-based internal support assistant"
    ],
    yourRole: [
      "Designed the end-to-end chatbot flow and retrieval strategy",
      "Implemented and trained the intent recognition model (PyTorch) using labeled intents",
      "Built similarity-based recommendation logic and integrated it with doc parsing",
      "Packaged the project for CLI use, with optional Flask components for web deployment"
    ],
  },

};
