import { FaLightbulb, FaCode, FaRocket, FaLanguage } from "react-icons/fa";

const achievementsData = [
  {
    id: 1,
    icon: <FaLightbulb />,
    title: "Fullstack Workshop",
    description: "I attended a full-stack workshop, demonstrating my strong skills in both front-end and back-end development. This achievement was a significant milestone in my journey as a developer."
  },
  {
    id: 2,
    icon: <FaLanguage />,
    title: "JLPT N5",
    description: "I successfully completed the JLPT N5 examination, demonstrating my proficiency in basic Japanese. This certification reflects my dedication to learning new languages and cultures."
  }
];

function About() {
  return (
    <section style={styles.container} id="about">
      <div style={styles.content}>
        <h1 style={styles.heading}>About Me</h1>
        <p style={styles.paragraph}>
          Hello, I’m Dharshan M, a passionate Computer Science Engineering student with strong interests in programming and full-stack web development. I enjoy building practical and innovative software solutions that solve real-world problems.

I have hands-on experience developing projects such as Dhothi eCommerce, a web-based platform focused on delivering a seamless online shopping experience, and Dhothi Store Management System, a console-based application designed to manage store operations efficiently. These projects demonstrate my ability to design, develop, and implement scalable and user-friendly applications.

I am continuously expanding my technical skills, exploring modern technologies, and striving to grow as a software developer while contributing meaningful solutions through technology.
        </p>
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
  paragraph: {
    fontSize: "16px",
    lineHeight: "1.8",
    marginBottom: "40px",
    color: "var(--secondary-text)",
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