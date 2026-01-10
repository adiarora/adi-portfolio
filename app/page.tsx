import Link from "next/link";

const QUICK_LINKS = [
  {
    title: "Projects",
    href: "/projects",
    description:
      "Systems, music-tech, fitness, finance, and philanthropy — with detailed writeups.",
  },
  {
    title: "Research",
    href: "/research",
    description:
      "Publications and papers, including PDFs and concise summaries of my contributions.",
  },
  {
    title: "Personal",
    href: "/personal",
    description:
      "Music, performance, hobbies, and what I’m into outside of engineering.",
  },
];

export default function HomePage() {
  return (
    <main style={{ maxWidth: 960 }}>
      {/* Hero */}
      <section style={{ marginBottom: 22 }}>
        <h1 style={{ fontSize: 34, fontWeight: 950, marginBottom: 10 }}>
          Adi Arora
        </h1>

        <p style={{ fontSize: 16, opacity: 0.9, lineHeight: 1.7, margin: 0 }}>
          I’m a Computer Science student at Cornell building systems and applied AI
          across a few themes I care about: scalable software, music technology,
          fitness, and finance. I like projects that feel real — clear problem,
          thoughtful design, and measurable outcomes.
        </p>

        <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 10 }}>
          <span
            style={{
              fontSize: 12,
              padding: "6px 10px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              opacity: 0.95,
            }}
          >
            Software Engineering
          </span>
          <span
            style={{
              fontSize: 12,
              padding: "6px 10px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              opacity: 0.95,
            }}
          >
            Applied AI / NLP
          </span>
          <span
            style={{
              fontSize: 12,
              padding: "6px 10px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              opacity: 0.95,
            }}
          >
            Music-Tech
          </span>
          <span
            style={{
              fontSize: 12,
              padding: "6px 10px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              opacity: 0.95,
            }}
          >
            Finance
          </span>
        </div>
      </section>

      {/* Quick links */}
      <section style={{ marginBottom: 22 }}>
        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 10 }}>
          Explore
        </h2>

        <div style={{ display: "grid", gap: 12 }}>
          {QUICK_LINKS.map((l) => (
            <Link
              key={l.title}
              href={l.href}
              style={{
                display: "block",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14,
                padding: 14,
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 850 }}>{l.title}</div>
              <div style={{ opacity: 0.85, marginTop: 6, lineHeight: 1.6 }}>
                {l.description}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Now / next */}
      <section
        style={{
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 14,
          padding: 14,
        }}
      >
        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 10 }}>
          What I’m focused on right now
        </h2>

        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9, opacity: 0.9 }}>
          <li>Building portfolio-ready projects with clear writeups and outcomes.</li>
          <li>Deepening ML/NLP skills through applied work and research.</li>
          <li>Continuing music performance + arranging, and expanding music-tech tools.</li>
        </ul>
      </section>
    </main>
  );
}
