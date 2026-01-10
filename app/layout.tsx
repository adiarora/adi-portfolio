import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            padding: 24,
            display: "flex",
            gap: 16,
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Link href="/" style={{ fontWeight: 800 }}>
              Adi
            </Link>

            <div style={{ display: "flex", gap: 16, marginLeft: 12 }}>
              <Link href="/projects">Projects</Link>
              <Link href="/research">Research</Link>
              <Link href="/personal">Personal</Link>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://www.linkedin.com/in/adi-arora-b42110199/"
              target="_blank"
              rel="noreferrer"
              style={{ opacity: 0.9, textDecoration: "none" }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/adiarora"
              target="_blank"
              rel="noreferrer"
              style={{ opacity: 0.9, textDecoration: "none" }}
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/adi_arora03/"
              target="_blank"
              rel="noreferrer"
              style={{ opacity: 0.9, textDecoration: "none" }}
            >
              Instagram
            </a>
          </div>
        </nav>
        <div style={{ padding: 24 }}>{children}</div>
      </body>
    </html>
  );
}
