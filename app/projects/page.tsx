import { projects } from "@/content/projects";
import Link from "next/link";


export default function ProjectsPage() {
  const categories = ["Systems", "Music", "Fitness", "Finance", "Philanthropy"] as const;
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Projects</h1>
      <p style={{ opacity: 0.85, marginBottom: 20 }}>
        A mix of systems engineering, applied AI, music-tech, finance experimentation, fitness tooling, and philanthropy.
      </p>
      {featured.length > 0 && (
        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 18, fontWeight: 750, marginBottom: 12 }}>
            Featured
          </h2>

          <div style={{ display: "grid", gap: 12 }}>
            {featured.map((p) => (
              <div
                key={p.slug}
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 12,
                  padding: 14,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <Link href={`/projects/${p.slug}`} style={{ fontSize: 16, fontWeight: 750 }}>
                      {p.title}
                    </Link>
                    <div style={{ opacity: 0.85, marginTop: 4 }}>{p.oneLiner}</div>
                  </div>
                  <div style={{ opacity: 0.75, whiteSpace: "nowrap" }}>{p.status}</div>
                </div>

                <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 12,
                        padding: "4px 8px",
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,0.12)",
                        opacity: 0.9,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}


      {categories.map((cat) => {
        const items = projects.filter((p) => p.category === cat);
        if (items.length === 0) return null;

        return (
          <section key={cat} style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 18, fontWeight: 750, marginBottom: 12 }}>{cat}</h2>

            <div style={{ display: "grid", gap: 12 }}>
              {items.map((p) => (
                <div
                  key={p.slug}
                  style={{
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 12,
                    padding: 14,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <div>
                      <div>
                        <Link href={`/projects/${p.slug}`} style={{ fontSize: 16, fontWeight: 750 }}>
                          {p.title}
                        </Link>
                        <div style={{ opacity: 0.85, marginTop: 4 }}>{p.oneLiner}</div>
                      </div>
                    </div>
                    <div style={{ opacity: 0.75, whiteSpace: "nowrap" }}>{p.status}</div>
                  </div>

                  <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 12,
                          padding: "4px 8px",
                          borderRadius: 999,
                          border: "1px solid rgba(255,255,255,0.12)",
                          opacity: 0.9,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
