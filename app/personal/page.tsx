import Image from "next/image";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/adi_arora03/" },
  { label: "Music Instagram", href: "https://www.instagram.com/adiaroramusic/" },
  { label: "TikTok", href: "https://www.tiktok.com/@adi.arora03?lang=en" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adi-arora-b42110199/" },
  { label: "GitHub", href: "https://github.com/adiarora" },
];

const HOBBIES = [
  "Travel",
  "Snowboarding",
  "Hiking",
  "Camping",
  "Golf",
  "Baseball",
  "Music",
];

export default function PersonalPage() {
  return (
    <main style={{ maxWidth: 960 }}>
      {/* Hero */}
      <section style={{ marginBottom: 22 }}>
        <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>
          Personal
        </h1>
        <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
          Outside of building software, I’m deeply involved in music as a performer
          and music director. I also love staying active, traveling, and spending
          time with my dogs.
        </p>
      </section>

      {/* Featured video */}
      <section
        style={{
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 14,
          padding: 14,
          marginBottom: 18,
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 850, marginBottom: 6 }}>
          Featured performance (placeholder)
        </div>
        <p style={{ opacity: 0.85, marginTop: 0, marginBottom: 12 }}>
          This is a recent clip with my a cappella group. I’ll be swapping this
          with a The Voice performance link when it’s available.
        </p>

        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%", // 16:9
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/LU4hXwEPhOY"
            title="Featured performance"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </div>
      </section>

      {/* Dogs + Hobbies grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 18,
          marginBottom: 18,
        }}
      >
        {/* Dogs */}
        <section
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 14,
            padding: 14,
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 850, marginBottom: 10 }}>
            My dogs
          </div>

          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <Image
              src="/images/dogs.jpg"
              alt="My dogs"
              width={1400}
              height={900}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>

          <p style={{ opacity: 0.85, lineHeight: 1.6, marginTop: 10 }}>
            They keep me grounded and are easily the best part of coming home.
          </p>
        </section>

        {/* Hobbies */}
        <section
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 14,
            padding: 14,
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 850, marginBottom: 10 }}>
            Hobbies
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {HOBBIES.map((h) => (
              <span
                key={h}
                style={{
                  fontSize: 12,
                  padding: "6px 10px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  opacity: 0.95,
                }}
              >
                {h}
              </span>
            ))}
          </div>

          <p style={{ opacity: 0.85, lineHeight: 1.6, marginTop: 10 }}>
            Over time I’ll add photos and short clips for each of these—especially
            music, travel, and snowboarding.
          </p>
        </section>
      </div>

      {/* Social links */}
      <section
        style={{
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 14,
          padding: 14,
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 850, marginBottom: 10 }}>
          Find me online
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
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
              {s.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
