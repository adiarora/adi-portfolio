export type ResearchItem = {
  slug: string;
  title: string;
  venue?: string;
  year?: string;
  authors?: string;
  summary: string;
  contributions: string[];
  links: {
    pdf?: string; // served from /public
    arxiv?: string;
  };
};

export const research: ResearchItem[] = [
  {
    slug: "nlp-paper",
    title: "NLP Research Paper",
    venue: "Publication",
    year: "2025",
    authors: "Adi Arora + collaborators",
    summary:
      "Research on NLP-based claim verification with an emphasis on numerical reasoning. We evaluate prompting and decomposition strategies and analyze where models succeed or fail on numerically grounded claims.",
    contributions: [
      "Built/ran experiments for numerical claim verification and compiled results across multiple model settings.",
      "Implemented evaluation and analysis to diagnose failure modes, especially around numerical and compositional claims.",
      "Contributed to writing and editing the paper, including methods and results sections.",
    ],
    links: {
      pdf: "/papers/nlp-paper.pdf",
    },
  },
];
