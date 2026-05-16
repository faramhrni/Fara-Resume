import React from "react";
import data from "../public/data/work-data.json";

const Work = () => {
  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <p style={styles.label}>Portfolio</p>

        <h2 style={styles.title}>My Recent Projects</h2>

        <p style={styles.desc}>
          Beberapa project dashboard, analytics, dan monitoring system yang
          pernah saya kerjakan.
        </p>
      </div>

      <div style={styles.grid}>
        {data.workData.map((work, index) => (
          <a
            key={index}
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 25px 60px rgba(244,114,182,0.55)";
              e.currentTarget.style.border =
                "1px solid rgba(244,114,182,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(0,0,0,0.35)";
              e.currentTarget.style.border =
                "1px solid rgba(244,114,182,0.25)";
            }}
          >
            <img src={work.image} alt={work.title} style={styles.image} />

            <div style={styles.pinkCover}></div>
            <div style={styles.overlay}></div>

            <div style={styles.circleButton}>↗</div>

            <div style={styles.content}>
              <p style={styles.client}>{work.client}</p>
              <h3 style={styles.cardTitle}>{work.title}</h3>
              <p style={styles.view}>View Project →</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    width: "100%",
    minHeight: "100vh",
    background: "#f8f8f8",
    padding: "80px 24px",
    boxSizing: "border-box",
  },

  header: {
    maxWidth: "1200px",
    margin: "0 auto 60px",
    textAlign: "center",
  },

  label: {
    color: "#f472b6",
    fontWeight: "700",
    letterSpacing: "4px",
    textTransform: "uppercase",
    marginBottom: "12px",
    fontSize: "14px",
  },

  title: {
    color: "#111827",
    fontSize: "48px",
    fontWeight: "800",
    margin: 0,
  },

  desc: {
    color: "#64748b",
    maxWidth: "650px",
    margin: "20px auto 0",
    lineHeight: "1.8",
  },

  grid: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "36px",
  },

  card: {
    position: "relative",
    height: "340px",
    borderRadius: "24px",
    overflow: "hidden",
    textDecoration: "none",
    background: "#ffffff",
    boxShadow: "0 20px 40px rgba(0,0,0,0.16)",
    transition: "all 0.45s ease",
    cursor: "pointer",
    border: "1px solid rgba(244,114,182,0.25)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    filter: "hue-rotate(25deg) saturate(1.15)",
  },

  pinkCover: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "115px",
    background: "#f472b6",
    zIndex: 1,
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(244,114,182,0.75), rgba(244,114,182,0.18), transparent)",
    zIndex: 2,
  },

  circleButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    background: "#f472b6",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    fontWeight: "700",
    zIndex: 3,
    boxShadow: "0 12px 30px rgba(244,114,182,0.6)",
  },

  content: {
    position: "absolute",
    left: "24px",
    right: "24px",
    bottom: "24px",
    zIndex: 4,
  },

  client: {
    color: "#ffffff",
    fontSize: "14px",
    marginBottom: "10px",
    fontWeight: "700",
  },

  cardTitle: {
    color: "#ffffff",
    fontSize: "24px",
    lineHeight: "1.3",
    margin: "0 0 14px",
    fontWeight: "800",
  },

  view: {
    color: "#ffffff",
    fontWeight: "700",
    margin: 0,
  },
};

export default Work;