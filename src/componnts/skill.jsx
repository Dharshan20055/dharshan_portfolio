import React from "react";
import { FaCuttlefish, FaJava, FaLaptopCode, FaMobileAlt, FaDatabase } from "react-icons/fa";

function Skills() {
  const skills = [
    { icon: <FaCuttlefish />, name: "C Programming" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaLaptopCode />, name: "Web Development" },
    { icon: <FaMobileAlt />, name: "GITHUB" },
    { icon: <FaDatabase />, name: "DBMS" },

  ];

  return (
    <section style={styles.container} id="skill">
      <h2 style={styles.heading}>Skills</h2>
      <p style={styles.subheading}>
        I am a skilled full-stack developer with expertise in creating dynamic and user-friendly web applications. I excel in problem-solving and technical quizzes, demonstrating strong analytical and coding abilities.
      </p>
      <div style={styles.gridContainer}>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={styles.card}
          >
            <div style={styles.icon}>{skill.icon}</div>
            <h3 style={styles.title}>{skill.name}</h3>
          </div>
        ))}
      </div>
      <style>{`
        .skill-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }
        .skill-card:hover {
          transform: scale(1.1) translateY(-5px) !important;
          box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2) !important;
          border: 1px solid #10b981;
        }
      `}</style>
    </section>
  );
}

const styles = {
  container: {
    backgroundColor: "#0f172a",
    color: "white",
    padding: "50px 20px",
    textAlign: "center",
    marginBottom: "50px",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#10b981",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "17px",
    color: "#8892B0",
    marginBottom: "30px",
    padding: "12px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: "10px",
    padding: "37px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
  },
  icon: {
    fontSize: "40px",
    color: "#fbbf24",
    marginBottom: "10px",
  },
  title: {
    fontSize: "22px",
    color: "white",
    marginBottom: "5px",
  },
};

export default Skills;