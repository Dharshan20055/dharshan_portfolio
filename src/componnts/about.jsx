import React from "react";
import { FaLightbulb, FaCode, FaRocket } from "react-icons/fa";

function About() {
  return (
    <section style={styles.container} id="about">
      <div style={styles.content}>
        <h1 style={styles.heading}>About Me</h1>
        <p style={styles.paragraph}>
          I am an ambitious engineering student with a strong foundation in
          programming and web development. Passionate about creating innovative
          solutions, I continuously strive to enhance my technical expertise.
          With achievements in technical quizzes and coding challenges, I am
          driven to contribute to impactful projects and stay updated with
          advancements in technology to foster both personal and organizational
          growth.
        </p>
        <div style={styles.cardContainer}>
          <div className="card" style={styles.card}>
            <FaLightbulb style={styles.icon} />
            <h3 style={styles.cardHeading}>Fullstack Workshop</h3>
            <p style={styles.cardText}>
              I attended a full-stack workshop, demonstrating my strong skills
              in both front-end and back-end development. This achievement was
              a significant milestone in my journey as a developer.
            </p>
          </div>
          <div className="card" style={styles.card}>
            <FaCode style={styles.icon} />
            <h3 style={styles.cardHeading}>Technical Quiz</h3>
            <p style={styles.cardText}>
              I won 1st place in a technical quiz, which tested my knowledge in
              various areas of technology. It was a great experience that helped
              me further improve my problem-solving abilities.
            </p>
          </div>
          <div className="card" style={styles.card}>
            <FaRocket style={styles.icon} />
            <h3 style={styles.cardHeading}>Coding Challenge</h3>
            <p style={styles.cardText}>
              I earned 2nd place in a coding challenge, where I faced tough
              competition. This achievement pushed me to think critically and
              sharpen my coding skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    backgroundColor: "rgb(2, 2, 43)",
    color: "white",
    padding: "50px 20px",
    textAlign: "center",
  },
  content: {
    maxWidth: "1000px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "40px",
    marginBottom: "20px",
    color: "rgb(154,205,50)",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "40px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    backgroundColor: "#112B4E",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    width: "300px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  cardHeading: {
    fontSize: "20px",
    margin: "15px 0",
    color: "#FFD700",
  },
  cardText: {
    fontSize: "15px",
    lineHeight: "1.5",
  },
  icon: {
    fontSize: "40px",
    color: "#FFD700",
    marginBottom: "10px",
  },
};

// Responsive styles using media queries
const responsiveStyles = `
@media (max-width: 768px) {
  .cardContainer {
    flex-direction: column;
    align-items: center;
  }
  .card {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .heading {
    font-size: 30px;
  }
  .paragraph {
    font-size: 14px;
  }
  .cardHeading {
    font-size: 18px;
  }
  .cardText {
    font-size: 13px;
  }
}
`;

// Injecting responsive styles
const styleTag = document.createElement("style");
styleTag.textContent = responsiveStyles;
document.head.appendChild(styleTag);

export default About;