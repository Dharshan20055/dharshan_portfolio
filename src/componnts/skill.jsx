import React from "react";
import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaTools,
  FaServer,
  FaNetworkWired,
  FaCode,
  FaLaptopCode,
  FaTerminal,
  FaCogs,
  FaProjectDiagram
} from "react-icons/fa";

const skillsData = [
  {
    id: 1,
    category: "Programming Languages",
    icon: <FaCode />,
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> }
    ]
  },
  {
    id: 2,
    category: "Frontend",
    icon: <FaLaptopCode />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React.js", icon: <FaReact /> }
    ]
  },
  {
    id: 3,
    category: "Backend",
    icon: <FaServer />,
    skills: [
      { name: "Spring Boot", icon: <FaCogs /> },
      { name: "REST APIs", icon: <FaTerminal /> }
    ]
  },
  {
    id: 4,
    category: "Database",
    icon: <FaDatabase />,
    skills: [
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "MongoDB", icon: <FaDatabase /> },
      { name: "JDBC", icon: <FaTerminal /> }
    ]
  },
  {
    id: 5,
    category: "Version Control",
    icon: <FaGitAlt />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> }
    ]
  },
  {
    id: 6,
    category: "Tools & Platforms",
    icon: <FaTools />,
    skills: [
      { name: "VS Code" },
      { name: "Eclipse" },
      { name: "MySQL Workbench" },
      { name: "Postman" },
      { name: "GitHub Actions" },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Vercel" },
      { name: "Render" }
    ]
  },
  {
    id: 7,
    category: "Core Concepts",
    icon: <FaProjectDiagram />,
    skills: [
      { name: "OOP" },
      { name: "DBMS" },
      { name: "Computer Networks", icon: <FaNetworkWired /> },
      { name: "CI/CD" },
      { name: "SDLC" },
      { name: "MVC Architecture" }
    ]
  }
];

function Skills() {
  return (
    <section style={styles.container} id="skill">
      <h2 style={styles.heading}>Skills</h2>
      <p style={styles.subheading}>
        I have a strong foundation in full-stack web development, database management, modern tools, and software engineering principles.
      </p>
      <div style={styles.gridContainer}>
        {skillsData.map((category) => (
          <div
            key={category.id}
            className="category-card"
            style={styles.card}
          >
            <div style={styles.cardHeader}>
              <div style={styles.categoryIcon}>{category.icon}</div>
              <h3 style={styles.categoryTitle}>{category.category}</h3>
            </div>
            <div style={styles.skillsList}>
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-badge" style={styles.badge}>
                  {skill.icon && <span style={styles.badgeIcon}>{skill.icon}</span>}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .category-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease !important;
        }
        .category-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 10px 25px rgba(16, 185, 129, 0.15) !important;
          border-color: var(--accent-color) !important;
        }
        .skill-badge {
          transition: all 0.2s ease-in-out !important;
        }
        .skill-badge:hover {
          background-color: var(--accent-color) !important;
          color: #fff !important;
          border-color: var(--accent-color) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
        }
      `}</style>
    </section>
  );
}

const styles = {
  container: {
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)",
    padding: "60px 20px",
    textAlign: "center",
    marginBottom: "50px",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "var(--accent-color)",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "17px",
    color: "var(--secondary-text)",
    marginBottom: "40px",
    maxWidth: "800px",
    margin: "0 auto 40px auto",
    lineHeight: "1.6",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "var(--card-bg)",
    borderRadius: "12px",
    padding: "25px",
    textAlign: "left",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    marginBottom: "15px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
    paddingBottom: "10px",
  },
  categoryIcon: {
    fontSize: "26px",
    color: "#fbbf24",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryTitle: {
    fontSize: "19px",
    fontWeight: "bold",
    color: "var(--text-color)",
    margin: 0,
  },
  skillsList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "5px",
  },
  badge: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    color: "var(--secondary-text)",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "500",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    cursor: "default",
  },
  badgeIcon: {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    color: "inherit",
  }
};

export default Skills;