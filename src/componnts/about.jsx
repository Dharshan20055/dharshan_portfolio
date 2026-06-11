import { FaCode, FaLanguage } from "react-icons/fa";

const achievementsData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Full Stack Development Course",
    description: "Successfully completed a Full Stack Development Course, gaining practical knowledge of both front-end and back-end technologies. Through hands-on learning and project development, I strengthened my understanding of modern web development, database management, and application design principles. This course played a significant role in building my foundation as a software developer."
  },
  {
    id: 2,
    icon: <FaLanguage />,
    title: "JLPT N5 Certification",
    description: "Successfully cleared the Japanese Language Proficiency Test (JLPT N5), demonstrating foundational Japanese language skills and a commitment to continuous learning, personal growth, and global communication."
  }
];

function About() {
  return (
    <section style={styles.container} id="about">
      <div style={styles.content}>
        <h1 style={styles.heading}>About Me</h1>
        <div style={styles.paragraphContainer}>
          <p style={styles.paragraph}>
            I am a Computer Science Engineering graduate with a strong passion for Full Stack Development and Software Engineering. Skilled in Java, Spring Boot, React.js, MySQL, and MongoDB, I enjoy building scalable and user-friendly web applications that solve real-world problems.
          </p>
          <p style={styles.paragraph}>
            Through academic projects and hands-on learning, I have gained experience in front-end and back-end development, REST API integration, database management, and modern development tools. I am continuously enhancing my technical skills and seeking opportunities to contribute, learn, and grow as a Software Developer.
          </p>
        </div>
        <div style={styles.cardContainer}>
          {achievementsData.map((item) => (
            <div key={item.id} className="card" style={styles.card}>
              <div style={styles.icon}>{item.icon}</div>
              <h3 style={styles.cardHeading}>{item.title}</h3>
              <p style={styles.cardText}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)",
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
    color: "var(--accent-color)",
    fontWeight: "bold",
  },
  paragraphContainer: {
    marginBottom: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.8",
    margin: "0",
    color: "var(--secondary-text)",
    textAlign: "justify",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    backgroundColor: "var(--card-bg)",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    width: "300px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    color: "var(--text-color)",
  },
  cardHeading: {
    fontSize: "20px",
    margin: "15px 0",
    color: "#fbbf24",
  },
  cardText: {
    fontSize: "15px",
    lineHeight: "1.5",
    color: "var(--secondary-text)",
  },
  icon: {
    fontSize: "40px",
    color: "#fbbf24",
    marginBottom: "10px",
  },
};


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

.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
}

.card:hover {
  transform: scale(1.08) translateY(-10px) !important;
  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2) !important;
  border: 1px solid #10b981;
}
`;


const styleTag = document.createElement("style");
styleTag.textContent = responsiveStyles;
document.head.appendChild(styleTag);

export default About;