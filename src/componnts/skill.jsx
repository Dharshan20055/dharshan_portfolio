import React from "react";
import { FaCuttlefish, FaJava, FaLaptopCode, FaMobileAlt, FaDatabase, FaBrain } from "react-icons/fa";

function Skills() {
  const skills = [
    { icon: <FaCuttlefish />, name: "C Programming" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaLaptopCode />, name: "Web Development" },
    { icon: <FaMobileAlt />, name: "App Development" },
    { icon: <FaDatabase />, name: "DBMS" },
    { icon: <FaBrain />, name: "Machine Learning" },
  ];

  return (
    <section style={styles.container} id="skill">
      <h2 style={styles.heading}>Skills</h2>
      <p style={styles.subheading}>
        I am a skilled full-stack developer with expertise in creating dynamic and user-friendly web applications. I excel in problem-solving and technical quizzes, demonstrating strong analytical and coding abilities.
      </p>
      <div style={styles.gridContainer}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{skill.icon}</div>
            <h3 style={styles.title}>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    backgroundColor: "rgb(2, 2, 43)", // Dark blue background
    color: "white",
    padding: "50px 20px",
    textAlign: "center",
    marginBottom: "50px", // Added margin to prevent overlap with next section
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "rgb(154,205,50)",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // 3 in one row
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#112240",
    borderRadius: "10px",
    padding: "37px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  },
  cardHover: {
    transform: "scale(1.05)",
  },
  icon: {
    fontSize: "40px",
    color: "#FFD700",
    marginBottom: "10px",
  },
  title: {
    fontSize: "22px",
    color: "white",
    marginBottom: "5px",
  },
};

export default Skills;