import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCertificate, FaAward, FaGraduationCap } from 'react-icons/fa';

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

const certificationsData = [
  {
    id: 1,
    title: "Java Full Stack – Front End Development",
    provider: "GUVI & HCL",
    description: "Successfully completed the Java Full Stack Front End Development course, gaining hands-on experience in HTML, CSS, JavaScript, React.js, and responsive web design. Developed interactive and user-friendly web interfaces while learning modern front-end development practices.",
    icon: <FaAward />
  },
  {
    id: 2,
    title: "Java Full Stack – Back End Development",
    provider: "GUVI & HCL",
    description: "Successfully completed the Java Full Stack Back End Development course, focusing on Java, Spring Boot, REST APIs, database integration, and server-side application development. Gained practical experience in building scalable and efficient backend solutions.",
    icon: <FaCertificate />
  },
  {
    id: 3,
    title: "Java Full Stack Program",
    provider: "TalentNext – Wipro",
    description: "Successfully completed the Java Full Stack training program conducted by TalentNext and Wipro, covering full-stack development concepts, object-oriented programming, database management, and web application development. Strengthened problem-solving abilities and industry-ready software development skills.",
    icon: <FaGraduationCap />
  }
];

const Certifications = () => {
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 1500); // Shimmer duration
        }
      },
      { threshold: 0.1 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <CertificationsSection id="certification" ref={sectionRef}>
      <h2 className="title">Certifications</h2>
      <CardsContainer>
        {certificationsData.map((cert) => (
          <CertCard key={cert.id}>
            {isLoading && <LoadingOverlay />}
            <CardContent isLoading={isLoading}>
              <IconWrapper>{cert.icon}</IconWrapper>
              <CertTitle>{cert.title}</CertTitle>
              <ProviderBadge>{cert.provider}</ProviderBadge>
              <CertDescription>{cert.description}</CertDescription>
            </CardContent>
          </CertCard>
        ))}
      </CardsContainer>
    </CertificationsSection>
  );
};

export default Certifications;

// Styled Components
const CertificationsSection = styled.section`
  padding: 80px 20px;
  text-align: center;
  background-color: var(--bg-color);
  color: var(--text-color);
  position: relative;
  min-height: 400px;

  .title {
    font-size: 36px;
    font-weight: bold;
    color: var(--accent-color);
    margin-bottom: 50px;
    animation: ${fadeIn} 1s ease-in-out;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
`;

const CertCard = styled.div`
  width: 30%;
  background-color: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  position: relative;
  min-height: 380px;
  border: 1px solid rgba(16, 185, 129, 0.1);
  display: flex;
  flex-direction: column;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease, border-color 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(16, 185, 129, 0.2);
    border-color: var(--accent-color);
  }

  @media (max-width: 1024px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #334155;
  background-image: linear-gradient(to right, #334155 0%, #475569 20%, #334155 40%, #334155 100%);
  background-repeat: no-repeat;
  background-size: 800px 100%;
  z-index: 10;
  border-radius: 12px;
  animation: ${shimmer} 1.5s infinite linear;
`;

const CardContent = styled.div`
  padding: 35px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  opacity: ${props => props.isLoading ? 0 : 1};
  transition: opacity 0.4s ease-in-out;
`;

const IconWrapper = styled.div`
  font-size: 42px;
  color: #fbbf24;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
`;

const CertTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: var(--text-color);
  margin-bottom: 12px;
  text-align: center;
`;

const ProviderBadge = styled.span`
  background-color: rgba(16, 185, 129, 0.15);
  color: var(--accent-color);
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
  border: 1px solid rgba(16, 185, 129, 0.25);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CertDescription = styled.p`
  font-size: 15px;
  color: var(--secondary-text);
  line-height: 1.6;
  text-align: justify;
  margin: 0;
`;
