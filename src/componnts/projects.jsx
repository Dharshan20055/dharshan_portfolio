import React, { useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { FaGithub, FaRocket } from 'react-icons/fa';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const GlobalStyle = createGlobalStyle`
  /* Global styles if needed */
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

const projectsData = [
  {
    id: 1,
    title: "Dhothi Ecommerce Website",
    description: "A web platform for browsing and purchasing traditional dhothis online with integrated cart and order management features.",
    techStack: ["HTML", "CSS", "JavaScript"],
    badge: "Frontend",
    category: "Frontend",
    github: "https://github.com/Dharshan20055/Dhothi_Ecommerce_Frontend_Webstie",
    demo: "#"
  },
  {
    id: 2,
    title: "Dhothi Store Management (Console Based)",
    description: "A Java console-based application developed to streamline store operations, including inventory tracking and sales reports.",
    techStack: ["Java"],
    badge: "Java Console App",
    category: "Java",
    github: "https://github.com/Dharshan20055/Dhothi-Store-Management-System",
    demo: "#"
  },
  {
    id: 3,
    title: "Todo List",
    description: "A feature-rich Todo List application supporting full CRUD operations.",
    techStack: ["React", "Firebase"],
    badge: "Fullstack",
    category: "Fullstack",
    github: "https://github.com/Dharshan20055/Todo_List",
    demo: "#"
  },
  {
    id: 4,
    title: "Hand Cricket Game",
    description: "A simple and interactive Hand Cricket game developed using React, bringing the classic childhood game to the digital screen.",
    techStack: ["React"],
    badge: "Frontend",
    category: "Frontend",
    github: "https://github.com/Dharshan20055/HandCricket",
    demo: "https://handcricket-six.vercel.app/"
  },
  {
    id: 5,
    title: "Todo List Backend",
    description: "A robust backend system for a Todo List application, featuring RESTful APIs for efficient task management and data handling.",
    techStack: ["Spring Boot", "Postman"],
    badge: "Backend",
    category: "Backend",
    github: "https://github.com/Dharshan20055/TODOLIST_BACKEND",
    demo: "#"
  },
  {
    id: 6,
    title: "Online Course Management System",
    description: "A comprehensive online course management platform with integrated payment processing via Stripe, supporting both student and instructor roles.",
    techStack: ["React", "Spring Boot", "SQL", "Stripe"],
    badge: "Fullstack",
    category: "Fullstack",
    github: "https://github.com/Dharshan20055/Simple_Online_Course_Management_System",
    demo: "#"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Trigger loading animation on filter change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [filter]);

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  const categories = ['All', 'Frontend', 'Backend', 'Fullstack', 'Java'];

  return (
    <>
      <GlobalStyle />
      <ProjectsSection id="project" ref={sectionRef}>
        <h2 className="projects-title">Projects</h2>

        <FilterContainer>
          {categories.map(cat => (
            <FilterButton
              key={cat}
              active={filter === cat}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsContainer>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id}>
              {isLoading && <LoadingOverlay />}
              <CardContent isLoading={isLoading}>
                <ProjectBadge>{project.badge}</ProjectBadge>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <TechStack>
                  {project.techStack.map(tech => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ButtonGroup>
                  <ProjectButton href={project.github} target="_blank" rel="noopener noreferrer" title="View Source Code">
                    <FaGithub />
                  </ProjectButton>
                  <ProjectButton href={project.demo} target="_blank" rel="noopener noreferrer" title="View Project">
                    <FaRocket />
                  </ProjectButton>
                </ButtonGroup>
              </CardContent>
            </ProjectCard>
          ))}
        </ProjectsContainer>
      </ProjectsSection>
    </>
  );
};

export default Projects;

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
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  border-radius: 12px;
  animation: ${shimmer} 1.5s infinite linear;
`;


const ProjectsSection = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: var(--bg-color);
  color: var(--text-color);
  position: relative;
  min-height: 400px;

  .projects-title {
    font-size: 36px;
    font-weight: bold;
    color: var(--accent-color);
    margin-bottom: 20px;
    animation: ${fadeIn} 2s ease-in-out;
    padding-top: 20px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? 'var(--accent-color)' : 'rgba(16, 185, 129, 0.1)'};
  color: ${props => props.active ? 'white' : 'var(--accent-color)'};
  border: 1px solid ${props => props.active ? 'var(--accent-color)' : 'rgba(16, 185, 129, 0.2)'};
  padding: 8px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--accent-color);
    color: white;
    transform: translateY(-2px);
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectCard = styled.div`
  width: 31%;
  background-color: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  margin-bottom: 30px;
  min-height: 320px;
  border: 1px solid rgba(16, 185, 129, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(16, 185, 129, 0.2);
    border: 1px solid var(--accent-color);
  }

  @media (max-width: 1024px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;

const CardContent = styled.div`
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  opacity: ${props => props.isLoading ? 0 : 1};
  transition: opacity 0.4s ease-in-out;

  .card-title {
    font-size: 24px;
    margin-bottom: 12px;
    color: var(--card-title-color);
    font-weight: bold;
    margin-top: 40px;
  }

  .card-description {
    font-size: 15px;
    color: var(--card-description-color);
    margin-bottom: 20px;
    line-height: 1.5;
  }
`;

const ProjectBadge = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: var(--accent-color);
  color: white;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const TechStack = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;

const TechTag = styled.span`
  background-color: rgba(16, 185, 129, 0.1);
  color: var(--accent-color);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid rgba(16, 185, 129, 0.2);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: auto;
`;

const ProjectButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: var(--accent-color);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.15);
    background-color: #059669;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.4);
  }
`;
