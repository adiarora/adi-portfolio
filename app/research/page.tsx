import { research } from "@/content/research";

export default function ResearchPage() {
  return (
    <main style={{ maxWidth: 860 }}>
      <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>
        Research
      </h1>
      <p style={{ opacity: 0.85, marginBottom: 20 }}>
        Publications and research work.
      </p>

      <div style={{ display: "grid", gap: 14 }}>
        {research.map((item) => (
          <div
            key={item.slug}
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 12,
              padding: 14,
            }}
          >
            <div style={{ fontSize: 16, fontWeight: 800 }}>{item.title}</div>

            <div style={{ opacity: 0.75, marginTop: 4 }}>
              {[item.venue, item.year].filter(Boolean).join(" • ")}
            </div>

            {item.authors && (
              <div style={{ opacity: 0.8, marginTop: 8 }}>
                <span style={{ fontWeight: 700 }}>Authors:</span> {item.authors}
              </div>
            )}

            <div style={{ marginTop: 10 }}>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>Summary</div>
              <p style={{ opacity: 0.9, lineHeight: 1.6 }}>{item.summary}</p>
            </div>

            <div style={{ marginTop: 10 }}>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>
                My contribution
              </div>
              <ul
                style={{
                  lineHeight: 1.8,
                  opacity: 0.9,
                  margin: 0,
                  paddingLeft: 18,
                }}
              >
                {item.contributions.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            {(item.links.pdf || item.links.arxiv) && (
              <div style={{ marginTop: 12, display: "flex", gap: 12 }}>
                {item.links.pdf && (
                  <a href={item.links.pdf} target="_blank" rel="noreferrer">
                    PDF
                  </a>
                )}
                {item.links.arxiv && (
                  <a href={item.links.arxiv} target="_blank" rel="noreferrer">
                    arXiv
                  </a>
                )}
              </div>
            )}
            {item.links.pdf && (
              <div style={{ marginTop: 14 }}>
                <iframe
                  src={item.links.pdf}
                  style={{
                    width: "100%",
                    height: 650,
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 12,
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
