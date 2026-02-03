import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import DhothiEcommerceImg from './assests/dhothi_ecommerce.png';
import DhothiManagementImg from './assests/dhothi_management.png';

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
              <img src={DhothiEcommerceImg} alt="Dhothi Ecommerce Website" />
            </CardImage>
            <CardContent>
              <h3 className="card-title">Dhothi Ecommerce Website</h3>
              <p className="card-description">Dhothi E-commerce Website is a web platform I developed to allow customers to browse, select, and purchase traditional dhothis online. It provides features such as product listings, category-based browsing, cart management, and order placement, making it easy for users to shop for traditional wear digitally.</p>

            </CardContent>
          </ProjectCard>
          <ProjectCard>
            <CardImage>
              <img src={DhothiManagementImg} alt="Dhothi Store Management" />
            </CardImage>
            <CardContent>
              <h3 className="card-title">Dhothi Store Management (Console Based)</h3>
              <p className="card-description">Dhothi Store Management System is a Java console-based application I developed to manage day-to-day store operations efficiently. It allows the admin to handle product inventory, track sales, manage customer details, and generate billing reports, helping streamline store management using core Java concepts.</p>

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
  background-color: #0f172a;
  color: white;

  .projects-title {
    font-size: 36px;
    font-weight: bold;
    color: #10b981;
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
  background-color: #1e293b;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  margin-bottom: 30px;
  height: 300px;
  border: 1px solid rgba(16, 185, 129, 0.1);

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(16, 185, 129, 0.2);
    border: 1px solid #10b981;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const CardImage = styled.div`
  height: 100%;
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
  background-color: rgba(15, 23, 42, 0.9);
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
    color: #fbbf24;
  }

  .card-description {
    font-size: 16px;
    color: #cbd5e1;
    margin-bottom: 20px;
  }

  .view-btn {
    padding: 10px 20px;
    background-color: #10b981;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }

  .view-btn:hover {
    transform: scale(1.1);
    background-color: #059669;
  }
`;
