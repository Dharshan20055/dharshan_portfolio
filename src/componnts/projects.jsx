import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Projects = () => {
  return (
    <>
      <GlobalStyle />
      <ProjectsSection id="project">
        <h2 className="projects-title">Projects</h2>
        <ProjectsContainer>
          <ProjectCard>
            <CardImage>
              <img src="https://miro.medium.com/v2/resize:fit:8000/1*K88gZjGENgxdK3I2v9nQKQ.jpeg" alt="Project 1" />
            </CardImage>
            <CardContent>
              <h3 className="card-title">Alumni App</h3>
              <p className="card-description">My Alumni App is a platform I developed to help alumni stay connected, network, and share updates with each other, creating a space for collaboration and professional growth.</p>
              
            </CardContent>
          </ProjectCard>
          <ProjectCard>
            <CardImage>
              <img src="https://www.theforage.com/blog/wp-content/uploads/2022/11/online-portfolio.jpg" alt="Project 2" />
            </CardImage>
            <CardContent>
              <h3 className="card-title">Porfolio</h3>
              <p className="card-description">My Portfolio Website showcases my skills in programming and web development, presenting a collection of my projects and accomplishments, and reflecting my passion for technology and innovation.</p>
              
            </CardContent>
          </ProjectCard>
        </ProjectsContainer>
      </ProjectsSection>
    </>
  );
};

export default Projects;

const ProjectsSection = styled.div`
  padding: 50px 20px;
  text-align: center;
  background-color: rgb(2, 2, 43);
  color: white;

  .projects-title {
    font-size: 36px;
    font-weight: bold;
    color: yellowgreen;
    margin-bottom: 40px;
    animation: fadeIn 2s ease-in-out;
    padding-top: 20px;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 40px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ProjectCard = styled.div`
  width: 48%;
  background-color: #1a1a1a;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  margin-bottom: 30px;
  height: 300px;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const CardImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;

  ${ProjectCard}:hover & {
    transform: translateY(0);
  }

  .card-title {
    font-size: 22px;
    margin-bottom: 10px;
    color: #FFD700;
  }

  .card-description {
    font-size: 16px;
    color: #ccc;
    margin-bottom: 20px;
  }

  .view-btn {
    padding: 10px 20px;
    background-color: yellowgreen;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  .view-btn:hover {
    transform: scale(1.1);
  }
`;