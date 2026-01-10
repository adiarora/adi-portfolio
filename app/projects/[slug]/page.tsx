import Link from "next/link";
import { projects } from "@/content/projects";
import { projectDetailsBySlug } from "@/content/projectDetails";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 1. Get slug
  const { slug } = await params;

  // 2. Find project
  const project = projects.find((p) => p.slug === slug);

  // 3. Get long-form details (THIS is what I meant)
  const details = projectDetailsBySlug[slug];

  // 4. Guard if project doesn't exist
  if (!project) {
    return (
      <main>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Project not found</h1>
        <p style={{ opacity: 0.85 }}>
          No project exists for slug: <code>{slug}</code>
        </p>
      </main>
    );
  }

  // 5. Render page
  return (
    <main style={{ maxWidth: 860 }}>
      <div style={{ opacity: 0.8, marginBottom: 10 }}>
        {project.category} • {project.status}
      </div>

      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>
        {project.title}
      </h1>

      <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 18 }}>
        {project.oneLiner}
      </p>

      {project.links && (project.links.github || project.links.demo || project.links.paper) && (
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
          {project.links.github && project.links.github.trim().length > 0 && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "8px 12px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.12)",
                textDecoration: "none",
                opacity: 0.95,
              }}
            >
              GitHub
            </a>
          )}

          {project.links.demo && project.links.demo.trim().length > 0 && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "8px 12px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.12)",
                textDecoration: "none",
                opacity: 0.95,
              }}
            >
              Demo
            </a>
          )}

          {project.links.paper && project.links.paper.trim().length > 0 && (
            <a
              href={project.links.paper}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "8px 12px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.12)",
                textDecoration: "none",
                opacity: 0.95,
              }}
            >
              Paper
            </a>
          )}
        </div>
      )}


      {/* Overview */}
      <section style={{ marginBottom: 18 }}>
        <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
          Overview
        </h2>
        <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
          {details?.overview ?? project.description}
        </p>
      </section>

      {/* Long-form sections */}
      {details && (
        <>
          <section style={{ marginBottom: 18 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
              Problem
            </h2>
            <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
              {details.problem}
            </p>
          </section>

          <section style={{ marginBottom: 18 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
              Solution
            </h2>
            <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
              {details.solution}
            </p>
          </section>

          <section style={{ marginBottom: 18 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
              Architecture
            </h2>
            <ul style={{ lineHeight: 1.8, opacity: 0.9 }}>
              {details.architecture.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section style={{ marginBottom: 18 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
              Security & Reliability
            </h2>
            <ul style={{ lineHeight: 1.8, opacity: 0.9 }}>
              {details.securityReliability.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section style={{ marginBottom: 18 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
              Impact
            </h2>
            <ul style={{ lineHeight: 1.8, opacity: 0.9 }}>
              {details.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section style={{ marginBottom: 18 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
              My Role
            </h2>
            <ul style={{ lineHeight: 1.8, opacity: 0.9 }}>
              {details.yourRole.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          {details.nextSteps && (
            <section style={{ marginBottom: 18 }}>
              <h2 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
                Next Steps
              </h2>
              <ul style={{ lineHeight: 1.8, opacity: 0.9 }}>
                {details.nextSteps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </main>
  );
}
