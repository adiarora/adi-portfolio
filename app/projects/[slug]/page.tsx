import Link from "next/link";
import { projects } from "@/content/projects";
import { projectDetailsBySlug } from "@/content/projectDetails";

function isYouTubeUrl(url: string) {
  return (
    url.includes("youtube.com") ||
    url.includes("youtu.be") ||
    url.includes("youtube-nocookie.com")
  );
}

function toYouTubeEmbedUrl(url: string) {
  try {
    const u = new URL(url);

    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}`;
    }

    if (u.pathname.startsWith("/shorts/")) {
      const id = u.pathname.split("/shorts/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${id}`;
    }

    if (u.pathname.startsWith("/embed/")) return url;

    const id = u.searchParams.get("v");
    if (id) return `https://www.youtube.com/embed/${id}`;

    return url;
  } catch {
    return url;
  }
}

const styles = {
  main: { maxWidth: 920 } as const,

  meta: { opacity: 0.75, marginBottom: 10 } as const,

  h1: { fontSize: 34, fontWeight: 900, marginBottom: 10 } as const,

  oneLiner: { opacity: 0.9, lineHeight: 1.65, marginBottom: 14 } as const,

  section: { marginBottom: 22 } as const,

  h2: { fontSize: 18, fontWeight: 800, marginBottom: 10 } as const,

  p: { opacity: 0.9, lineHeight: 1.65 } as const,

  ul: { opacity: 0.9, lineHeight: 1.8, paddingLeft: 18, marginTop: 8 } as const,

  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 18,
  } as const,

  button: {
    padding: "8px 12px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.12)",
    textDecoration: "none",
    opacity: 0.95,
  } as const,

  pillRow: { display: "flex", flexWrap: "wrap", gap: 8 } as const,

  pill: {
    fontSize: 12,
    padding: "4px 8px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.12)",
    opacity: 0.9,
  } as const,

  cardBorder: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 12,
    overflow: "hidden",
  } as const,
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main style={styles.main}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Project not found</h1>
        <p style={{ opacity: 0.85 }}>
          No project exists for slug: <code>{slug}</code>
        </p>
        <div style={{ marginTop: 14 }}>
          <Link href="/projects" style={{ textDecoration: "underline" }}>
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const details = projectDetailsBySlug[slug];

  return (
    <main style={styles.main}>
      {/* Top metadata */}
      <div style={styles.meta}>
        {project.category}
        {/* If you DO want status, uncomment the next two lines */}
        {/* {" • "} */}
        {/* {project.status} */}
      </div>

      <h1 style={styles.h1}>{project.title}</h1>

      <p style={styles.oneLiner}>{project.oneLiner}</p>

      {/* Buttons */}
      <div style={styles.buttonRow}>
        {project.links?.github && project.links.github.trim().length > 0 && (
          <a href={project.links.github} target="_blank" rel="noreferrer" style={styles.button}>
            GitHub
          </a>
        )}

        {/* Live demo link (interactive demos) */}
        {project.links?.demo && project.links.demo.trim().length > 0 && (
          <a href={project.links.demo} target="_blank" rel="noreferrer" style={styles.button}>
            Demo
          </a>
        )}

        {project.links?.paper && project.links.paper.trim().length > 0 && (
          <a href={project.links.paper} target="_blank" rel="noreferrer" style={styles.button}>
            Paper
          </a>
        )}
      </div>

      {/* Embedded Demo Video (MP4 or YouTube). Label stays "Demo" for consistency */}
      {project.links?.video && project.links.video.trim().length > 0 && (
        <section style={styles.section}>
          <h2 style={styles.h2}>Demo</h2>

          {project.links.video.toLowerCase().endsWith(".mp4") ? (
            <video
              src={project.links.video}
              controls
              preload="metadata"
              style={{
                width: "100%",
                maxHeight: 520,
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />
          ) : isYouTubeUrl(project.links.video) ? (
            <div style={styles.cardBorder}>
              <iframe
                width="100%"
                height="420"
                src={toYouTubeEmbedUrl(project.links.video)}
                title={`${project.title} demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 0 }}
              />
            </div>
          ) : (
            <a
              href={project.links.video}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "underline", opacity: 0.9 }}
            >
              Open demo video
            </a>
          )}
        </section>
      )}

      {/* Overview */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Overview</h2>
        <p style={styles.p}>{project.description}</p>
      </section>

      {/* Tech */}
      <section style={styles.section}>
        <h2 style={styles.h2}>Tech</h2>
        <div style={styles.pillRow}>
          {project.tech.map((t: string) => (
            <span key={t} style={styles.pill}>
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Extra details from projectDetailsBySlug */}
      {details && (
        <>
          <section style={styles.section}>
            <h2 style={styles.h2}>Problem</h2>
            <p style={styles.p}>{details.problem}</p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>Solution</h2>
            <p style={styles.p}>{details.solution}</p>
          </section>

          {details.howToUse?.length ? (
            <section style={styles.section}>
              <h2 style={styles.h2}>How it works</h2>
              <ul style={styles.ul}>
                {details.howToUse.map((step: string, i: number) => (
                  <li key={`${i}-${step}`}>{step}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {details.architecture?.length ? (
            <section style={styles.section}>
              <h2 style={styles.h2}>Architecture</h2>
              <ul style={styles.ul}>
                {details.architecture.map((item: string, i: number) => (
                  <li key={`${i}-${item}`}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {details.securityReliability?.length ? (
            <section style={styles.section}>
              <h2 style={styles.h2}>Security & reliability</h2>
              <ul style={styles.ul}>
                {details.securityReliability.map((item: string, i: number) => (
                  <li key={`${i}-${item}`}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {details.impact?.length ? (
            <section style={styles.section}>
              <h2 style={styles.h2}>Impact</h2>
              <ul style={styles.ul}>
                {details.impact.map((item: string, i: number) => (
                  <li key={`${i}-${item}`}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {details.yourRole?.length ? (
            <section style={styles.section}>
              <h2 style={styles.h2}>My role</h2>
              <ul style={styles.ul}>
                {details.yourRole.map((item: string, i: number) => (
                  <li key={`${i}-${item}`}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {details.nextSteps?.length ? (
            <section style={styles.section}>
              <h2 style={styles.h2}>Next steps</h2>
              <ul style={styles.ul}>
                {details.nextSteps.map((item: string, i: number) => (
                  <li key={`${i}-${item}`}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </>
      )}

      <div style={{ marginTop: 22 }}>
        <Link href="/projects" style={{ textDecoration: "underline", opacity: 0.9 }}>
          Back to Projects
        </Link>
      </div>
    </main>
  );
}
